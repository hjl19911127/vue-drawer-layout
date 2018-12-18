module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "bce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerLayout_vue_vue_type_style_index_0_id_48b85408_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd58");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerLayout_vue_vue_type_style_index_0_id_48b85408_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerLayout_vue_vue_type_style_index_0_id_48b85408_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerLayout_vue_vue_type_style_index_0_id_48b85408_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cd58":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca0e2238-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DrawerLayout.vue?vue&type=template&id=48b85408&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drawer-layout"},[_c('div',{staticClass:"drawer-wrap",class:_vm.animateStyle,style:(_vm.drawerStyle)},[_vm._t("drawer")],2),_c('div',{staticClass:"content-wrap",class:_vm.contentDrawable?_vm.animateStyle:{},style:(_vm.contentDrawable?_vm.contentStyle:{})},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.backdrop && _vm.pos),expression:"backdrop && pos"}],staticClass:"drawer-mask",style:({'opacity':_vm.backdropOpacity}),on:{"click":_vm.handleMaskClick}}),_vm._t("content")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/DrawerLayout.vue?vue&type=template&id=48b85408&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DrawerLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

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
/* harmony default export */ var DrawerLayoutvue_type_script_lang_js_ = ({
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
});

// CONCATENATED MODULE: ./src/DrawerLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DrawerLayoutvue_type_script_lang_js_ = (DrawerLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/DrawerLayout.vue?vue&type=style&index=0&id=48b85408&lang=stylus&scoped=true&
var DrawerLayoutvue_type_style_index_0_id_48b85408_lang_stylus_scoped_true_ = __webpack_require__("bce1");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/DrawerLayout.vue






/* normalize component */

var component = normalizeComponent(
  src_DrawerLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "48b85408",
  null
  
)

component.options.__file = "DrawerLayout.vue"
/* harmony default export */ var DrawerLayout = (component.exports);
// CONCATENATED MODULE: ./build.js


function install(Vue) {
  Vue.component(DrawerLayout.name, DrawerLayout)
  window.DrawerLayout = DrawerLayout
}



// Plugin
const build_plugin = {
  install
};

/* harmony default export */ var build = (build_plugin);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(build_plugin)
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport DrawerLayout */__webpack_require__.d(__webpack_exports__, "DrawerLayout", function() { return DrawerLayout; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (build);



/***/ })

/******/ });
//# sourceMappingURL=vue-drawer-layout.common.js.map