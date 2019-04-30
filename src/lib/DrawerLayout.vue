<template>
  <div class="drawer-layout">
    <div class="drawer-wrap" :class="animateStyle" :style="drawerStyle">
      <slot name="drawer"/>
    </div>
    <div class="content-wrap" :class="contentDrawable?animateStyle:{}"
         :style="contentDrawable?contentStyle:{}">
      <div class="drawer-mask" @click="handleMaskClick" :style="{'opacity':backdropOpacity}"
           v-show="backdrop && pos"></div>
      <slot name="content"/>
    </div>
  </div>
</template>
<script>
  import {
    defaultDuration,
    handledEvents,
    supportsTouchDetector,
    supportsPassiveDetector,
    supportsTransitionsDetector
  } from './helper'

  export default {
    name: 'vue-drawer-layout',
    props: {

      drawerWidth: {
        type: Number
      },
      drawableDistance: {
        type: Number
      },
      zIndex: {
        type: Number,
        default: 818
      },
      contentDrawable: {
        type: Boolean,
        default: false
      },
      backdrop: {
        type: Boolean,
        default: true
      },
      backdropOpacityRange: {
        type: Array,
        default: function () {
          return [0, 0.4]
        },
        validator: function (value) {
          let [min, max] = value
          return min < max && min >= 0 && max <= 1
        }
      },
      enable: {
        type: Boolean,
        default: true
      },
      animatable: {
        type: Boolean,
        default: true
      },
      reverse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        width: this.drawerWidth,
        distance: this.drawableDistance,
        pos: 0,
        visible: false,
        moving: false,
        willChange: false,
        canAnimate: false
      }
    },
    methods: {
      toggle(visible) {
        if (visible === undefined) visible = !this.visible
        this.visible = visible
        this.pos = visible ? this.width : 0
        if (this.canAnimate) this.moving = true
      },
      handleMaskClick() {
        if (this.moving) return
        this.$emit('mask-click')
      }
    },
    computed: {
      animateStyle() {
        const {moving, willChange} = this
        return {'moving': moving, 'will-change': willChange}
      },
      drawerStyle() {
        const {zIndex, width, moveRate, pos, reverse} = this, initialOffset = Math.ceil(width * moveRate),
          nowPosition = Math.ceil(pos * moveRate)
        return {
          zIndex: zIndex,
          width: `${width}px`,
          [reverse ? 'right' : 'left']: (initialOffset || 0) && `-${initialOffset}px`,
          transform: `translate3d(${(nowPosition || 0) && `${reverse ? '-' : ''}${nowPosition}px`},0,0)`
        }
      },
      contentStyle() {
        const {pos, reverse} = this
        return {transform: `translate3d(${(pos || 0) && `${reverse ? '-' : ''}${pos}px`},0,0)`}
      },
      backdropOpacity() {
        const {backdropOpacityRange, pos, width} = this,
          [min, max] = backdropOpacityRange
        return min + max * (pos / width) || 0
      },
      moveRate() {
        const {width, distance} = this
        return distance / width
      }
    },
    mounted() {
      const supportsTouch = supportsTouchDetector(),
        supportsTransitions = supportsTransitionsDetector(),
        supportsPassive = supportsPassiveDetector();
      this.canAnimate = this.animatable && supportsTransitions
      const container = this.$el
      //Get initial width from its parentNode
      if (typeof this.width === "undefined" || typeof this.distance === "undefined") {
        const containerWidth = parseInt(window.getComputedStyle(container.parentNode).width),
          defaultWidth = containerWidth * 0.8
        this.width = typeof this.width === "undefined" ? defaultWidth : this.width
        this.distance = typeof this.distance === "undefined" ? defaultWidth : this.distance
      }

      let t1, t2, speed, startX, startY, nowX, nowY, lastX, startPos, isVertical
      //Start dragging handler
      const initDrag = function (e) {
        if (!this.enable) return
        this.willChange = true
        isVertical = undefined
        nowX = startX = supportsTouch ? e.changedTouches[0].clientX : e.clientX
        startY = supportsTouch ? e.changedTouches[0].clientY : e.clientY
        t2 = +new Date()
        startPos = this.pos
        document.addEventListener(handledEvents.move, drag, supportsTouch && supportsPassive ? {passive: true} : false)
        document.addEventListener(handledEvents.up, removeDrag, supportsTouch && supportsPassive ? {passive: true} : false)
        this.$emit('slide-start')
      }.bind(this)
      //During dragging handler
      const drag = function (e) {
        const {width, reverse} = this
        t1 = t2
        t2 = +new Date()
        lastX = nowX
        nowX = supportsTouch ? e.changedTouches[0].clientX : e.clientX
        nowY = supportsTouch ? e.changedTouches[0].clientY : e.clientY
        speed = [1, -1][+reverse] * (nowX - lastX) / (t2 - t1)
        let pos = startPos + [1, -1][+reverse] * (nowX - startX)
        pos = Math.min(width, pos)
        pos = Math.max(0, pos)
        if (isVertical === undefined) {
          const absX = Math.abs(nowX - startX), absY = Math.abs(nowY - startY)
          if (absX) {
            if (absY) {
              isVertical = Math.abs(nowX - startX) / Math.abs(nowY - startY) < Math.sqrt(3)
            } else {
              isVertical = false
            }
          }
        }
        if (!isVertical) {
          if (!(supportsTouch && supportsPassive)) e.preventDefault()
          this.pos = pos
          this.$emit('slide-move', pos)
        }
      }.bind(this)
      //Stop dragging handler
      const removeDrag = function () {
        const {width, canAnimate} = this
        if (isVertical !== undefined) {
          if (!isVertical) {
            let pos = this.pos
            if (speed > 0) {
              this.visible = (width - pos) / speed < defaultDuration || pos > width * 3 / 5
            } else {
              this.visible = !((0 - pos) / speed < defaultDuration || pos < width * 3 / 5)
            }
            if (this.pos > 0 && this.pos < width && canAnimate) {
              this.moving = true
            }
          }
          this.pos = this.visible ? width : 0
        }
        if (!this.moving) {
          this.willChange = false
          this.$emit('slide-end', this.visible)
        }
        isVertical = undefined
        document.removeEventListener(handledEvents.move, drag, supportsTouch && supportsPassive ? {passive: true} : false)
        document.removeEventListener(handledEvents.up, removeDrag, supportsTouch && supportsPassive ? {passive: true} : false)
      }.bind(this)
      //Check transitionend and stop
      'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
        container.addEventListener(e, () => {
          const {width} = this
          if (this.moving) {
            this.moving = false
            this.willChange = false
            this.pos = this.visible ? width : 0
            this.$emit('slide-end', this.visible)
          }
        }, false)
      })
      container.addEventListener(handledEvents.down, initDrag, supportsTouch && supportsPassive ? {passive: true} : false)
    }
  }
</script>

<style lang="scss" scoped>
  .drawer-layout {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }

  .drawer-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateZ(0);
  }

  .content-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    transform: translateZ(0);
  }

  .drawer-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    z-index: 818;
  }

  .moving {
    transition: transform .3s ease;
  }

  .will-change {
    will-change: transform
  }
</style>
