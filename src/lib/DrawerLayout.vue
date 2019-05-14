<template>
  <div class="drawer-layout">
    <div class="drawer-wrap" :class="animateStyle" :style="drawerStyle">
      <slot name="drawer" />
    </div>
    <div class="content-wrap" :class="contentDrawable ? animateStyle : {}" :style="contentDrawable ? contentStyle : {}">
      <div class="drawer-mask" @click="handleMaskClick" :style="{ opacity: backdropOpacity }" v-show="backdrop && pos"></div>
      <slot name="content" />
    </div>
  </div>
</template>
<script>
import { defaultDuration, handledEvents, supportsTouchDetector, supportsPassiveDetector, supportsTransitionsDetector } from './helper';
const axisMap = { left: 'X', right: 'X', top: 'Y', bottom: 'Y' };
const transformMap = {
  width: 'height',
  height: 'height',
  left: 'top',
  right: 'bottom',
  top: 'left',
  bottom: 'right',
  translateX: 'translateY',
  startX: 'startY',
  nowX: 'nowY',
  lastX: 'lastY',
  nowY: 'nowX',
  startY: 'startX'
};
export default {
  name: 'VueDrawerLayout',
  props: {
    drawerWidth: {
      type: Number
    },
    drawerSize: {
      type: Number
    },
    drawableDistance: {
      type: Number
    },
    drawerPosition: {
      type: String,
      default: 'left'
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
      default: function() {
        return [0, 0.4];
      },
      validator: function(value) {
        let [min, max] = value;
        return min < max && min >= 0 && max <= 1;
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
    },
    threshold: {
      type: Number,
      default: 0.6
    }
  },
  data() {
    return {
      computedDrawerSize: this.drawerSize || this.drawerWidth,
      pos: 0,
      visible: false,
      moving: false,
      willChange: false,
      canAnimate: false
    };
  },
  methods: {
    toggle(visible) {
      if (visible === undefined) visible = !this.visible;
      this.visible = visible;
      this.pos = visible ? this.computedDrawerSize : 0;
      if (this.canAnimate) this.moving = true;
    },
    handleMaskClick() {
      if (this.moving) return;
      this.$emit('mask-click');
    },
    transformWithDirection(text) {
      const { axis } = this;
      return axis === 'X' ? text : transformMap[text];
    }
  },
  computed: {
    dragDistance() {
      return this.drawableDistance || this.computedDrawerSize;
    },
    animateStyle() {
      const { moving, willChange } = this;
      return { moving: moving, 'will-change': willChange };
    },
    drawerStyle() {
      const { zIndex, computedDrawerSize, moveRate, pos, $reverse, direction, transformWithDirection } = this,
        initialOffset = Math.ceil(computedDrawerSize * moveRate),
        drawerPos = Math.ceil(pos * moveRate);
      const positionCss = { [transformWithDirection('top')]: 0, [transformWithDirection('bottom')]: 0 };
      return {
        ...positionCss,
        zIndex,
        [transformWithDirection('width')]: `${computedDrawerSize}px`,
        [direction]: (initialOffset || 0) && `-${initialOffset}px`,
        transform: `${transformWithDirection('translateX')}(${(drawerPos || 0) && `${$reverse ? '-' : ''}${drawerPos}px`}) translateZ(0)`
      };
    },
    contentStyle() {
      const { pos, $reverse, transformWithDirection } = this;
      return { transform: `${transformWithDirection('translateX')}(${(pos || 0) && `${$reverse ? '-' : ''}${pos}px`}) translateZ(0)` };
    },
    backdropOpacity() {
      const { backdropOpacityRange, pos, computedDrawerSize } = this,
        [min, max] = backdropOpacityRange;
      return min + max * (pos / computedDrawerSize) || 0;
    },
    moveRate() {
      const { computedDrawerSize, dragDistance } = this;
      return dragDistance / computedDrawerSize;
    },
    direction() {
      const { drawerPosition, reverse } = this;
      if (drawerPosition === 'left' && reverse) return 'right';
      return drawerPosition;
    },
    axis() {
      const { direction } = this;
      return axisMap[direction];
    },
    $reverse() {
      const { direction } = this;
      return direction === 'right' || direction === 'bottom';
    }
  },
  mounted() {
    const supportsTouch = supportsTouchDetector(),
      supportsTransitions = supportsTransitionsDetector(),
      supportsPassive = supportsPassiveDetector();
    this.canAnimate = this.animatable && supportsTransitions;
    const container = this.$el;
    // Get initial drawer size from its parentNode
    if (typeof this.computedDrawerSize === 'undefined') {
      const containerSize = parseInt(window.getComputedStyle(container)[this.transformWithDirection('width')]),
        defaultSize = containerSize * 0.8;
      this.computedDrawerSize = typeof this.computedDrawerSize === 'undefined' ? defaultSize : this.computedDrawerSize;
    }

    let t1,
      t2,
      speed,
      startPos,
      canMove,
      metric = { startX: 0, startY: 0, nowX: 0, nowY: 0, lastX: 0, lastY: 0 };
    // Start dragging handler
    const initDrag = function(event) {
      if (!this.enable) return;
      this.willChange = true;
      canMove = undefined;
      metric.nowX = metric.startX = supportsTouch ? event.changedTouches[0].clientX : event.clientX;
      metric.nowY = metric.startY = supportsTouch ? event.changedTouches[0].clientY : event.clientY;
      t2 = +new Date();
      startPos = this.pos;
      document.addEventListener(handledEvents.move, drag, supportsTouch && supportsPassive ? { passive: true } : false);
      document.addEventListener(handledEvents.up, removeDrag, supportsTouch && supportsPassive ? { passive: true } : false);
      this.$emit('slide-start');
    }.bind(this);
    // During dragging handler
    const drag = function(e) {
      const { computedDrawerSize, $reverse, transformWithDirection } = this;
      t1 = t2;
      t2 = +new Date();
      metric.lastX = metric.nowX;
      metric.lastY = metric.nowY;
      metric.nowX = supportsTouch ? e.changedTouches[0].clientX : e.clientX;
      metric.nowY = supportsTouch ? e.changedTouches[0].clientY : e.clientY;

      speed = ([1, -1][+$reverse] * (metric[transformWithDirection('nowX')] - metric[transformWithDirection('lastX')])) / (t2 - t1);
      let pos = startPos + [1, -1][+$reverse] * (metric[transformWithDirection('nowX')] - metric[transformWithDirection('startX')]);

      pos = Math.min(computedDrawerSize, pos);
      pos = Math.max(0, pos);
      if (canMove === undefined) {
        const mainAxis = Math.abs(metric[transformWithDirection('nowX')] - metric[transformWithDirection('startX')]),
          crossAxis = Math.abs(metric[transformWithDirection('nowY')] - metric[transformWithDirection('startY')]);
        if (mainAxis) {
          if (crossAxis) {
            canMove = mainAxis / crossAxis < Math.sqrt(3);
          } else {
            canMove = false;
          }
        }
      }
      if (!canMove) {
        if (!(supportsTouch && supportsPassive)) e.preventDefault();
        this.pos = pos;
        this.$emit('slide-move', pos);
      }
    }.bind(this);
    // Stop dragging handler
    const removeDrag = function() {
      const { computedDrawerSize, canAnimate, threshold } = this;
      if (canMove !== undefined) {
        if (!canMove) {
          let pos = this.pos;
          if (speed > 0) {
            this.visible = (computedDrawerSize - pos) / speed < defaultDuration || pos > computedDrawerSize * threshold;
          } else {
            this.visible = !((0 - pos) / speed < defaultDuration || pos < computedDrawerSize * threshold);
          }
          if (this.pos > 0 && this.pos < computedDrawerSize && canAnimate) {
            this.moving = true;
          }
        }
        this.pos = this.visible ? computedDrawerSize : 0;
      }
      if (!this.moving) {
        this.willChange = false;
        this.$emit('slide-end', this.visible);
      }
      canMove = undefined;
      document.removeEventListener(handledEvents.move, drag, supportsTouch && supportsPassive ? { passive: true } : false);
      document.removeEventListener(handledEvents.up, removeDrag, supportsTouch && supportsPassive ? { passive: true } : false);
    }.bind(this);
    // Check transitionend and stop
    ['transitionend', 'webkitTransitionEnd', 'msTransitionEnd', 'otransitionend', 'oTransitionEnd'].forEach(eventName => {
      container.addEventListener(
        eventName,
        () => {
          const { computedDrawerSize } = this;
          if (this.moving) {
            this.moving = false;
            this.willChange = false;
            this.pos = this.visible ? computedDrawerSize : 0;
            this.$emit('slide-end', this.visible);
          }
        },
        false
      );
    });
    container.addEventListener(handledEvents.down, initDrag, supportsTouch && supportsPassive ? { passive: true } : false);
  }
};
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
  transition: transform 0.3s ease;
}

.will-change {
  will-change: transform;
}
</style>
