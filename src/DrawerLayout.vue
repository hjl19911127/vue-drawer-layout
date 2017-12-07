<template>
    <div class="drawer-layout">
        <div class="drawer-wrap" :class="{'moving':moving,'will-change':willChange}"
             :style="{width:`${width}px`,left:`-${Math.ceil(width/3)}px`,transform:`translate3d(${Math.ceil(pos/3)}px,0,0)`}">
            <slot name="drawer"></slot>
        </div>
        <div class="content-wrap" :class="{'moving':moving,'will-change':willChange}"
             :style="{transform:`translate3d(${pos}px,0,0)`}">
            <div class="drawer-mask" @click="handleMaskClick" :style="{'opacity':opacity}" v-show="pos"></div>
            <slot name="content"></slot>
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
        }
        return supportsPassive;
    })();
    const duration = 500;
    let isTouch = 'ontouchstart' in window;
    let mouseEvents = isTouch ?
        {
            down: 'touchstart',
            move: 'touchmove',
            up: 'touchend',
            over: 'touchstart',
            out: 'touchend'
        } :
        {
            down: 'mousedown',
            move: 'mousemove',
            up: 'mouseup',
            over: 'mouseover',
            out: 'mouseout'
        };
    export default {
        name: 'vue-drawer-layout',
        props: {
            width: {
                type: Number,
                default: Math.floor(document.body.clientWidth * 0.8)
            },
            action: Object,
            enable: Boolean,
            container: Object
        },
        data() {
            return {
                pos: 0,
                visible: false,
                moving: false,
                willChange: false
            }
        },
        methods: {
            handleMaskClick() {
                if (this.moving) return;
                this.$emit('mask-click')
            }
        },
        watch: {
            'action'(v) {
                this.visible = v.visible;
                this.pos = v.visible ? this.width : 0;
                this.moving = true
            }
        },
        computed: {
            opacity() {
                return this.pos * 0.4 / this.width || 0
            }
        },
        mounted() {
            const container = document, maxWidth = this.width;
            let t1, t2, speed, startX, startY, nowX, nowY, lastX, startPos, isTouching;
            const initDrag = function (e) {
                if (!this.enable) return;
                this.willChange = true;
                isTouching = undefined;
                nowX = startX = e.clientX || e.changedTouches[0].clientX;
                startY = e.clientY || e.changedTouches[0].clientY;
                t2 = +new Date();
                startPos = this.pos;
                container.addEventListener(mouseEvents.move, drag, supportsPassive ? {passive: true} : false);
                container.addEventListener(mouseEvents.up, removeDrag, supportsPassive ? {passive: true} : false);
                this.$emit('slide-start', this.pos)
            }.bind(this);
            const drag = function (e) {
                t1 = t2;
                t2 = +new Date();
                lastX = nowX;
                nowX = e.clientX || e.changedTouches[0].clientX;
                nowY = e.clientY || e.changedTouches[0].clientY;
                speed = (nowX - lastX) / (t2 - t1);
                let pos = startPos + nowX - startX;
                pos = Math.min(maxWidth, pos);
                pos = Math.max(0, pos);
                if (isTouching === undefined) isTouching = Math.abs(nowY - startY) / Math.abs(nowX - startX) > (Math.sqrt(3) / 3);
                if (!isTouching) {
                    if (!supportsPassive) e.preventDefault();
                    this.pos = pos;
                    this.$emit('slide-move', pos)
                }
            }.bind(this);
            const removeDrag = function (e) {
                if (isTouching !== undefined) {
                    if (!isTouching) {
                        let pos = this.pos;
                        if (speed > 0) {
                            this.visible = (maxWidth - pos) / speed < duration || pos > maxWidth * 3 / 5
                        } else {
                            this.visible = !((0 - pos) / speed < duration || pos < maxWidth * 3 / 5)
                        }
                        if (this.pos > 0 && this.pos < maxWidth) this.moving = true;
                        this.pos = this.visible ? maxWidth : 0;
                    } else {
                        this.pos = this.visible ? maxWidth : 0;
                    }
                }
                if (!this.moving) this.willChange = false;
                isTouching = undefined;
                this.$emit('slide-end', pos, this.visible);
                container.removeEventListener(mouseEvents.move, drag, supportsPassive ? {passive: true} : false);
                container.removeEventListener(mouseEvents.up, removeDrag, supportsPassive ? {passive: true} : false);
            }.bind(this);
            'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach((e) => {
                this.$el.addEventListener(e, () => {
                    this.moving = false;
                    this.willChange = false;
                    this.pos = this.visible ? maxWidth : 0;
                }, false)
            });
            container.addEventListener(mouseEvents.down, initDrag, supportsPassive ? {passive: true} : false);
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
        z-index: 1000

    .moving
        transition transform .3s ease

    .will-change
        will-change transform
</style>
