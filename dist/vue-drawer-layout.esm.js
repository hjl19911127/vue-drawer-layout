var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

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

var defaultWidth = Math.floor(document.body.clientWidth * 0.8);
var supportsPassive = function () {
    var supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get$$1() {
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
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "drawer-layout" }, [_c('div', { staticClass: "drawer-wrap", class: { 'moving': _vm.moving, 'will-change': _vm.willChange }, style: { zIndex: _vm.zIndex, width: _vm.drawerWidth + 'px', left: '-' + Math.ceil(_vm.drawerWidth / 3) + 'px', transform: 'translate3d(' + Math.ceil(_vm.pos / 3) + 'px,0,0)' } }, [_vm._t("drawer")], 2), _vm._v(" "), _c('div', { staticClass: "content-wrap", class: { 'moving': _vm.moving, 'will-change': _vm.willChange }, style: _vm.contentDrawable ? { transform: 'translate3d(' + _vm.pos + 'px,0,0)' } : {} }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.backdrop && _vm.pos, expression: "backdrop && pos" }], staticClass: "drawer-mask", style: { 'opacity': _vm.backdropOpacity }, on: { "click": _vm.handleMaskClick } }), _vm._v(" "), _vm._t("content")], 2)]);
    }, staticRenderFns: [], _scopeId: 'data-v-7e696ca1',
    name: 'vue-drawer-layout',
    props: {
        drawerWidth: {
            type: Number,
            default: defaultWidth
        },
        drawerMoveDistance: {
            type: Number,
            default: defaultWidth
        },
        contentDrawable: {
            type: Number,
            default: defaultWidth
        },
        zIndex: {
            type: Number,
            default: 10
        },
        dragStartPosition: {
            type: Number,
            default: -defaultWidth
        },
        backdrop: {
            type: Boolean,
            default: true
        },
        backdropOpacityRange: {
            type: Array,
            default: function _default() {
                return [0, 0.4];
            },
            validator: function validator(value) {
                return value >= 0 && value <= 1;
            }
        },
        enable: {
            type: Boolean,
            default: true
        },
        animate: {
            type: Boolean,
            default: true
        },
        container: {
            type: Object,
            default: function _default() {
                return window.document;
            }
        }
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
        toggle: function toggle(visible) {
            if (visible === undefined) visible = !this.visible;
            this.visible = visible;
            this.pos = visible ? this.drawerWidth : 0;
            this.moving = true;
        },
        handleMaskClick: function handleMaskClick() {
            if (this.moving) return;
            this.$emit('mask-click');
        }
    },
    watch: {
        'moving': function moving() {
            if (!this.animate) this.moving = false;
        },
        'willChange': function willChange() {
            if (!this.animate) this.willChange = false;
        }
    },
    computed: {
        backdropOpacity: function backdropOpacity() {
            var backdropOpacityRange = this.backdropOpacityRange,
                pos = this.pos,
                drawerWidth = this.drawerWidth,
                _backdropOpacityRange = slicedToArray(backdropOpacityRange, 2),
                min = _backdropOpacityRange[0],
                max = _backdropOpacityRange[1];

            return min * max * (pos / drawerWidth) || 0;
        }
    },
    mounted: function mounted() {
        var _this = this;

        var container = this.container,
            drawerWidth = this.drawerWidth;

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
            this.$emit('slide-start');
        }.bind(this);
        var drag = function (e) {
            t1 = t2;
            t2 = +new Date();
            lastX = nowX;
            nowX = e.clientX || e.changedTouches[0].clientX;
            nowY = e.clientY || e.changedTouches[0].clientY;
            speed = (nowX - lastX) / (t2 - t1);
            var pos = startPos + nowX - startX;
            pos = Math.min(drawerWidth, pos);
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
                        this.visible = (drawerWidth - pos) / speed < duration || pos > drawerWidth * 3 / 5;
                    } else {
                        this.visible = !((0 - pos) / speed < duration || pos < drawerWidth * 3 / 5);
                    }
                    if (this.pos > 0 && this.pos < drawerWidth) this.moving = true;
                }
                this.pos = this.visible ? drawerWidth : 0;
            }
            if (!this.moving) {
                this.willChange = false;
                this.$emit('slide-end', this.pos);
            }
            isTouching = undefined;
            container.removeEventListener(mouseEvents.move, drag, supportsPassive ? { passive: true } : false);
            container.removeEventListener(mouseEvents.up, removeDrag, supportsPassive ? { passive: true } : false);
        }.bind(this);
        'transitionend webkitTransitionEnd msTransitionEnd otransitionend oTransitionEnd'.split(' ').forEach(function (e) {
            _this.$el.addEventListener(e, function () {
                if (_this.moving) {
                    _this.moving = false;
                    _this.willChange = false;
                    _this.pos = _this.visible ? drawerWidth : 0;
                    _this.$emit('slide-end', _this.pos, _this.visible);
                }
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
    DrawerLayout: DrawerLayout,
    install: install
};
module.exports.default = module.exports;
