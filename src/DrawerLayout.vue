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
    const supportsPassive = (() => {
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true;
                }
            });
            window.addEventListener("test", null, opts);
        } catch (e) {
            throw e
        }
        return supportsPassive;
    })();
    const duration = 500;
    const isTouch = 'ontouchstart' in window;
    const mouseEvents = isTouch ?
        {
            down: 'touchstart',
            move: 'touchmove',
            up: 'touchend'
        } :
        {
            down: 'mousedown',
            move: 'mousemove',
            up: 'mouseup'
        };
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
                    let [min, max] = value;
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
                willChange: false
            }
        },
        methods: {
            toggle(visible) {
                if (visible === undefined) visible = !this.visible;
                this.visible = visible;
                this.pos = visible ? this.width : 0;
                this.moving = true
            },
            handleMaskClick() {
                if (this.moving) return;
                this.$emit('mask-click')
            }
        },
        watch: {
            'moving'() {
                if (!this.animatable) this.moving = false;
            },
            'willChange'() {
                if (!this.animatable) this.willChange = false;
            }
        },
        computed: {
            animateStyle() {
                const {moving, willChange} = this;
                return {'moving': moving, 'will-change': willChange};
            },
            drawerStyle() {
                const {zIndex, width, moveRate, pos, reverse} = this;
                return {
                    zIndex: zIndex,
                    width: `${width}px`,
                    [reverse ? 'right' : 'left']: `-${Math.ceil(width * moveRate)}px`,
                    transform: `translate3d(${reverse ? '-' : ''}${Math.ceil(pos * moveRate)}px,0,0)`
                };
            },
            contentStyle() {
                const {pos, reverse} = this;
                return {transform: `translate3d(${reverse ? '-' : ''}${pos}px,0,0)`};
            },
            backdropOpacity() {
                const {backdropOpacityRange, pos, width} = this,
                    [min, max] = backdropOpacityRange;
                return min + max * (pos / width) || 0;
            },
            moveRate() {
                const {width, distance} = this;
                return distance / width;
            }
        },
        mounted() {
            const container = this.$el, containerWidth = parseInt(window.getComputedStyle(this.$el.parentNode).width);
            let defaultWidth = containerWidth * 0.8;
            this.width = this.width || defaultWidth;
            this.distance = this.distance || defaultWidth;
            const {width, reverse} = this;
            let t1, t2, speed, startX, startY, nowX, nowY, lastX, startPos, isVerticle;
            const initDrag = function (e) {
                if (!this.enable) return;
                this.willChange = true;
                isVerticle = undefined;
                nowX = startX = e.clientX || e.changedTouches[0].clientX;
                startY = e.clientY || e.changedTouches[0].clientY;
                t2 = +new Date();
                startPos = this.pos;
                document.addEventListener(mouseEvents.move, drag, isTouch && supportsPassive ? {passive: true} : false);
                document.addEventListener(mouseEvents.up, removeDrag, isTouch && supportsPassive ? {passive: true} : false);
                this.$emit('slide-start')
            }.bind(this);
            const drag = function (e) {
                t1 = t2;
                t2 = +new Date();
                lastX = nowX;
                nowX = e.clientX || e.changedTouches[0].clientX;
                nowY = e.clientY || e.changedTouches[0].clientY;
                speed = [1, -1][+reverse] * (nowX - lastX) / (t2 - t1);
                let pos = startPos + [1, -1][+reverse] * (nowX - startX);
                pos = Math.min(width, pos);
                pos = Math.max(0, pos);
                if (isVerticle === undefined) isVerticle = Math.abs(nowX - startX) / Math.abs(nowY - startY) < Math.sqrt(3);
                if (!isVerticle) {
                    if (!(isTouch && supportsPassive)) e.preventDefault();
                    this.pos = pos;
                    this.$emit('slide-move', pos);
                }
            }.bind(this);
            const removeDrag = function () {
                if (isVerticle !== undefined) {
                    if (!isVerticle) {
                        let pos = this.pos;
                        if (speed > 0) {
                            this.visible = (width - pos) / speed < duration || pos > width * 3 / 5
                        } else {
                            this.visible = !((0 - pos) / speed < duration || pos < width * 3 / 5)
                        }
                        if (this.pos > 0 && this.pos < width) this.moving = true;
                    }
                    this.pos = this.visible ? width : 0;
                }
                if (!this.moving) {
                    this.willChange = false;
                    this.$emit('slide-end', this.visible);
                }
                isVerticle = undefined;
                document.removeEventListener(mouseEvents.move, drag, isTouch && supportsPassive ? {passive: true} : false);
                document.removeEventListener(mouseEvents.up, removeDrag, isTouch && supportsPassive ? {passive: true} : false);
            }.bind(this);
            'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
                this.$el.addEventListener(e, () => {
                    if (this.moving) {
                        this.moving = false;
                        this.willChange = false;
                        this.pos = this.visible ? width : 0;
                        this.$emit('slide-end', this.visible);
                    }
                }, false)
            });
            container.addEventListener(mouseEvents.down, initDrag, isTouch && supportsPassive ? {passive: true} : false);
        }
    }
</script>

<style lang="stylus" scoped>
    .drawer-layout
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0
        overflow: hidden

    .drawer-wrap
        position: absolute
        top: 0
        bottom: 0
        transform translateZ(0)

    .content-wrap
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        overflow: hidden;
        transform translateZ(0)

    .drawer-mask
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        background-color: #000
        z-index: 818

    .moving
        transition transform .3s ease

    .will-change
        will-change transform
</style>
