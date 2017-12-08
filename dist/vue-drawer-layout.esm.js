(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = ".drawer-layout[data-v-7e696ca1] { position: absolute; top: 0; left: 0; bottom: 0; right: 0; overflow: hidden; } .drawer-wrap[data-v-7e696ca1] { position: absolute; top: 0; bottom: 0; transform: translateZ(0); } .content-wrap[data-v-7e696ca1] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden; transform: translateZ(0); } .drawer-mask[data-v-7e696ca1] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: #000; z-index: 1000; } .moving[data-v-7e696ca1] { transition: transform 0.3s ease; } .will-change[data-v-7e696ca1] { will-change: transform; } ";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var supportsPassive = function () {
    var supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassive = true;
            }
        });
        window.addEventListener("test", null, opts);
    } catch (e) {}
    return supportsPassive;
}();
var duration = 500;
var isTouch = 'ontouchstart' in window;
var mouseEvents = isTouch ? {
    down: 'touchstart',
    move: 'touchmove',
    up: 'touchend',
    over: 'touchstart',
    out: 'touchend'
} : {
    down: 'mousedown',
    move: 'mousemove',
    up: 'mouseup',
    over: 'mouseover',
    out: 'mouseout'
};
var DrawerLayout = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "drawer-layout" }, [_c('div', { staticClass: "drawer-wrap", class: { 'moving': _vm.moving, 'will-change': _vm.willChange }, style: { width: _vm.width + 'px', left: '-' + Math.ceil(_vm.width / 3) + 'px', transform: 'translate3d(' + Math.ceil(_vm.pos / 3) + 'px,0,0)' } }, [_vm._t("drawer")], 2), _vm._v(" "), _c('div', { staticClass: "content-wrap", class: { 'moving': _vm.moving, 'will-change': _vm.willChange }, style: { transform: 'translate3d(' + _vm.pos + 'px,0,0)' } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.pos, expression: "pos" }], staticClass: "drawer-mask", style: { 'opacity': _vm.opacity }, on: { "click": _vm.handleMaskClick } }), _vm._v(" "), _vm._t("content")], 2)]);
    }, staticRenderFns: [], _scopeId: 'data-v-7e696ca1',
    name: 'vue-drawer-layout',
    props: {
        width: {
            type: Number,
            default: Math.floor(document.body.clientWidth * 0.8)
        },
        action: Object,
        enable: Boolean,
        animate: Boolean,
        container: Object
    },
    data: function data() {
        return {
            pos: 0,
            visible: false,
            moving: false,
            willChange: false
        };
    },

    methods: {
        handleMaskClick: function handleMaskClick() {
            if (this.moving) return;
            this.$emit('mask-click');
        }
    },
    watch: {
        'action': function action(v) {
            this.visible = v.visible;
            this.pos = v.visible ? this.width : 0;
            this.moving = true;
        },
        'moving': function moving() {
            if (!this.animate) this.moving = false;
        },
        'willChange': function willChange() {
            if (!this.animate) this.willChange = false;
        }
    },
    computed: {
        opacity: function opacity() {
            return this.pos * 0.4 / this.width || 0;
        }
    },
    mounted: function mounted() {
        var _this = this;

        var container = document,
            maxWidth = this.width;
        var t1 = void 0,
            t2 = void 0,
            speed = void 0,
            startX = void 0,
            startY = void 0,
            nowX = void 0,
            nowY = void 0,
            lastX = void 0,
            startPos = void 0,
            isTouching = void 0;
        var initDrag = function (e) {
            if (!this.enable) return;
            this.willChange = true;
            isTouching = undefined;
            nowX = startX = e.clientX || e.changedTouches[0].clientX;
            startY = e.clientY || e.changedTouches[0].clientY;
            t2 = +new Date();
            startPos = this.pos;
            container.addEventListener(mouseEvents.move, drag, supportsPassive ? { passive: true } : false);
            container.addEventListener(mouseEvents.up, removeDrag, supportsPassive ? { passive: true } : false);
            this.$emit('slide-start', this.pos);
        }.bind(this);
        var drag = function (e) {
            t1 = t2;
            t2 = +new Date();
            lastX = nowX;
            nowX = e.clientX || e.changedTouches[0].clientX;
            nowY = e.clientY || e.changedTouches[0].clientY;
            speed = (nowX - lastX) / (t2 - t1);
            var pos = startPos + nowX - startX;
            pos = Math.min(maxWidth, pos);
            pos = Math.max(0, pos);
            if (isTouching === undefined) isTouching = Math.abs(nowY - startY) / Math.abs(nowX - startX) > Math.sqrt(3) / 3;
            if (!isTouching) {
                if (!supportsPassive) e.preventDefault();
                this.pos = pos;
                this.$emit('slide-move', pos);
            }
        }.bind(this);
        var removeDrag = function (e) {
            if (isTouching !== undefined) {
                if (!isTouching) {
                    var pos = this.pos;
                    if (speed > 0) {
                        this.visible = (maxWidth - pos) / speed < duration || pos > maxWidth * 3 / 5;
                    } else {
                        this.visible = !((0 - pos) / speed < duration || pos < maxWidth * 3 / 5);
                    }
                    if (this.pos > 0 && this.pos < maxWidth) this.moving = true;
                    this.pos = this.visible ? maxWidth : 0;
                } else {
                    this.pos = this.visible ? maxWidth : 0;
                }
            }
            if (!this.moving) this.willChange = false;
            isTouching = undefined;
            this.$emit('slide-end', this.pos, this.visible);
            container.removeEventListener(mouseEvents.move, drag, supportsPassive ? { passive: true } : false);
            container.removeEventListener(mouseEvents.up, removeDrag, supportsPassive ? { passive: true } : false);
        }.bind(this);
        'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach(function (e) {
            _this.$el.addEventListener(e, function () {
                _this.moving = false;
                _this.willChange = false;
                _this.pos = _this.visible ? maxWidth : 0;
            }, false);
        });
        container.addEventListener(mouseEvents.down, initDrag, supportsPassive ? { passive: true } : false);
    }
};

var install = function install(Vue) {
    if (install.installed) return;
    Vue.component(DrawerLayout.name, DrawerLayout);
};
module.exports = {
    version: '0.1.0',
    DrawerLayout: DrawerLayout,
    install: install
};
module.exports.default = module.exports;
