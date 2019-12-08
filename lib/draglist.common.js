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

/***/ "b3f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_draglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c299");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_draglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_draglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_draglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c299":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"178a4eac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/draglist/draglist.vue?vue&type=template&id=699f2406&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"draglist-warper"},[_c('ul',_vm._l((_vm.list),function(item,index){return _c('li',{key:index,on:{"touchstart":function($event){$event.stopPropagation();return _vm.touchstart($event, index)},"touchend":function($event){$event.stopPropagation();return _vm.touchend($event, index)},"touchmove":function($event){$event.stopPropagation();return _vm.touchmove($event, index)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/draglist/draglist.vue?vue&type=template&id=699f2406&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/draglist/draglist.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var draglistvue_type_script_lang_js_ = ({
  name: 'draglist',
  props: {
    list: {
    }
  },
  data () {
    return {
      vueTouches: '', // 记录最开始点击的坐标
      height: '', // 每个列表高度
      longtapTime: null, // 长按定时器
      islongtap: false, // 是否是长按状态
      target: '', // 当前控制的元素
      tmph: 0
    }
  },
  methods: {
    // 长按事件
    longtap () {
      this.islongtap = true
    },
    touchstart (e, index) {
      var that = this
      // 添加点击效果
      // e.currentTarget.classList.add('item-active')
      // 记录每列高度
      this.height = e.currentTarget.clientHeight
      console.log(index)
      // 记录初始点击坐标
      this.vueTouches = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      }
      // 记录当前操作元素
      this.target = e.currentTarget
      this.longtapTime = setTimeout(function () { that.longtap() }, 500)
    },
    touchmove (e, index) {
      // 记录移动的x,y轴距离
      let x = e.changedTouches[0].pageX - this.vueTouches.x
      let y = e.changedTouches[0].pageY - this.vueTouches.y
      // 操作dom
      let li = document.getElementsByTagName('li')
      let h = this.height // 移动一格的距离
      // 长按状态下和已添加区域才能移动
      if (this.islongtap && e.cancelable) {
        e.preventDefault()
        // 列表随着手势移动
        e.currentTarget.style = `transform:translate( ${x}px,${y}px);`
        if (Math.abs(y) > 0) {
          // 首尾特殊情况
          if ((index === 0 && y < 0) || (index === this.list.length && y > 0)) {
            return
          }
          this.step = Math.round(y / this.height)
          // 向下的情况
          if (y > 0 && (Math.round(y / this.height) + index) < this.list.length) {
            console.log(this.step)
            for (let i = index + 1; i < this.list.length; i++) {
              if (i > index + this.step) {
                li[i].style = `transform:translate( 0px,0px);transition:0.3s;`
              } else {
                li[i].style = `transform:translate( 0px,-${h}px);transition:0.3s;`
              }
            }
          }
          // 向上的情况
          if (y < 0) {
            console.log('up')
            this.step = Math.floor(y / this.height + 0.5)
            console.log(y / this.height)
            console.log(this.step)
            for (let i = index - 1; i >= 0; i--) {
              if (i < index + this.step) {
                li[i].style = `transform:translate( 0px,0px);transition:0.3s;`
              } else {
                li[i].style = `transform:translate( 0px,${h}px);transition:0.3s;`
              }
            }
          }
        }
      } else if (Math.abs(x) > 5 || Math.abs(y) > 5) {
        this.islongtap = false
        clearTimeout(this.longtapTime)
        // console.log('document.body', document.documentElement.scrollTop)
        // this.tmph += y

        // console.log('hhhhhhh', this.tmph, y)
        // document.getElementsByClassName('test')[0].style = `transform:translateY(${this.tmph / 2}px);transition:0.3s;`
      }
    },
    touchend (e, index) {
      this.tmph = 0
      console.log('touchend', e.defaultPrevented)
      // 移出点击移动效果
      // e.currentTarget.classList.remove('item-active')
      // e.currentTarget.classList.remove('item-longtap')
      let li = document.getElementsByTagName('li')
      // 移除长按事件
      clearTimeout(this.longtapTime)
      // 通过改变数组改变其真正定位
      if (this.islongtap && (this.step !== 0)) {
        console.log('longtap')
        let tem = this.list.splice(index, 1)
        this.list.splice(index + this.step, 0, tem[0])
        this.islongtap = false
      } else if (!this.islongtap) {
        console.log(this.islongtap)
      }
      // 重置长按事件
      this.islongtap = false
      // 修正move时暂时的位移
      for (let i = 0; i < this.list.length; i++) {
        li[i].style = `transform:translate( 0px,0px);`
      }
      this.step = 0
    }
  }
});

// CONCATENATED MODULE: ./packages/draglist/draglist.vue?vue&type=script&lang=js&
 /* harmony default export */ var draglist_draglistvue_type_script_lang_js_ = (draglistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/draglist/draglist.vue?vue&type=style&index=0&lang=css&
var draglistvue_type_style_index_0_lang_css_ = __webpack_require__("b3f1");

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

// CONCATENATED MODULE: ./packages/draglist/draglist.vue






/* normalize component */

var component = normalizeComponent(
  draglist_draglistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var draglist = (component.exports);
// CONCATENATED MODULE: ./packages/draglist/index.js


draglist.install = function (Vue) {
  Vue.component(draglist.name, draglist)
}

/* harmony default export */ var packages_draglist = (draglist);

// CONCATENATED MODULE: ./packages/index.js

// 存储组件列表
const components = [packages_draglist]
// 定义install方法，接受vue做参数，使用use注册插件
const install = function (Vue) {
  // components.forEach(component => {
  //   Vue.component(component.name, component)
  // })
  // 判断是否安装
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
  install,
  draglist: packages_draglist
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=draglist.common.js.map