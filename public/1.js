webpackJsonp([1,13],{

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(664)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(666)
/* template */
var __vue_template__ = __webpack_require__(672)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\ui\\icons\\Set.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-821b4fe2", Component.options)
  } else {
    hotAPI.reload("data-v-821b4fe2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(743)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(745)
/* template */
var __vue_template__ = __webpack_require__(759)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\ui\\icons\\Icons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d48abcf2", Component.options)
  } else {
    hotAPI.reload("data-v-d48abcf2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(665);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("72a95b1a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-821b4fe2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Set.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-821b4fe2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Set.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.Set .header {\n  background-color: white;\n  padding: 1.75rem 0 1.125rem 0;\n  margin-bottom: 2rem;\n}\n.Set .header .header-text {\n    text-align: left;\n    padding-left: 2.5rem;\n}\n.Set .header .header-text h2 {\n      margin-bottom: 0;\n}\n.Set .header .search {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.Set .header .search .input-group {\n      width: 13.25rem;\n}\n.Set .header .range {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n}\n.Set .header .range .vue-slider-wrap {\n      width: 9.3rem !important;\n}\n.Set .header .range .vue-slider-wrap .vue-slider-process {\n        background-color: #4ae387;\n}\n.Set .header .range .vue-slider-wrap .vue-slider-tooltip {\n        background-color: #4ae387;\n        border-color: #4ae387;\n}\n.Set .header .range .vue-slider-wrap .vue-slider-dot {\n        background-color: #4ae387;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n}\n.Set .header .range h2, .Set .header .range h4 {\n      margin: .5rem;\n}\n.Set .row .icon-grid-container {\n  padding-right: .625rem;\n  padding-left: .625rem;\n  margin: 0 0 .5rem;\n  text-align: center;\n  height: 6rem;\n  position: relative;\n  min-height: 1px;\n  float: left;\n}\n.Set .row .icon-grid-container:hover {\n    background-color: #4ae387;\n    color: white;\n    cursor: pointer;\n}\n.Set .row .icon-grid-container .icon {\n    padding: 1rem 0 0;\n    margin: 0 0 .5rem;\n}\n.Set .row .icon-grid-container .icon .iconText {\n      font-size: .6rem;\n      text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slider_component_src_vue2_slider_vue__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slider_component_src_vue2_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_slider_component_src_vue2_slider_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Widget: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_widget_VuesticWidget___default.a,
    Slider: __WEBPACK_IMPORTED_MODULE_2_vue_slider_component_src_vue2_slider_vue___default.a
  },
  name: 'set',
  props: ['name', 'sets'],
  methods: {
    iconClass: function iconClass(icon) {
      return this.set.prefix + ' ' + this.set.prefix + '-' + icon;
    }
  },
  computed: {
    set: function set() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.sets), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var set = _step.value;

          if (set.href === this.name) return set;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    validatedLists: function validatedLists() {
      var _this = this;

      if (this.selector === '') {
        return this.set.lists;
      }
      var result = [{ name: 'Found Icons', icons: [] }];
      this.set.lists.forEach(function (list) {
        list.icons.forEach(function (icon) {
          if (icon.match(_this.selector)) {
            result[0].icons.push(icon);
          }
        });
      });
      return result;
    }
  },
  data: function data() {
    return {
      selector: '',
      iconSize: 30,
      slider: {
        formatter: function formatter(v) {
          return v + 'px';
        },
        height: 2,
        direction: 'horizontal',
        min: 20,
        max: 40,
        interval: 1,
        speed: 0.5
      }
    };
  }
});

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(668)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(670)
/* template */
var __vue_template__ = __webpack_require__(671)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e5dae08c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\vue-slider-component\\src\\vue2-slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5dae08c", Component.options)
  } else {
    hotAPI.reload("data-v-e5dae08c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(669);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0a1a102e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5dae08c\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue2-slider.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5dae08c\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue2-slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.vue-slider-wrap[data-v-e5dae08c] {\n\tposition: relative;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n.vue-slider-wrap.vue-slider-disabled[data-v-e5dae08c] {\n\topacity: .5;\n\tcursor: not-allowed;\n}\n.vue-slider-wrap.vue-slider-has-label[data-v-e5dae08c] {\n\tmargin-bottom: 15px;\n}\n.vue-slider-wrap.vue-slider-disabled .vue-slider-dot[data-v-e5dae08c] {\n\tcursor: not-allowed;\n}\n.vue-slider-wrap .vue-slider[data-v-e5dae08c] {\n\tposition: relative;\n\tdisplay: block;\n\tborder-radius: 15px;\n\tbackground-color: #ccc;\n}\n.vue-slider-wrap .vue-slider[data-v-e5dae08c]::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 2;\n}\n.vue-slider-process[data-v-e5dae08c] {\n\tposition: absolute;\n\tborder-radius: 15px;\n\tbackground-color: #3498db;\n\t-webkit-transition: all 0s;\n\ttransition: all 0s;\n\tz-index: 1;\n}\n.vue-slider-horizontal .vue-slider-process[data-v-e5dae08c] {\n\twidth: 0;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\twill-change: width;\n}\n.vue-slider-vertical .vue-slider-process[data-v-e5dae08c] {\n\twidth: 100%;\n\theight: 0;\n\tbottom: 0;\n\tleft: 0;\n\twill-change: height;\n}\n.vue-slider-horizontal-reverse .vue-slider-process[data-v-e5dae08c] {\n\twidth: 0;\n\theight: 100%;\n\ttop: 0;\n\tright: 0;\n}\n.vue-slider-vertical-reverse .vue-slider-process[data-v-e5dae08c] {\n\twidth: 100%;\n\theight: 0;\n\ttop: 0;\n\tleft: 0;\n}\n.vue-slider-dot[data-v-e5dae08c] {\n\tposition: absolute;\n\tborder-radius: 50%;\n\tbackground-color: #fff;\n\t-webkit-box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n\t        box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);\n\t-webkit-transition: all 0s;\n\ttransition: all 0s;\n\twill-change: transform;\n\tcursor: pointer;\n\tz-index: 3;\n}\n.vue-slider-horizontal .vue-slider-dot[data-v-e5dae08c] {\n\tleft: 0;\n}\n.vue-slider-vertical .vue-slider-dot[data-v-e5dae08c] {\n\tbottom: 0;\n}\n.vue-slider-horizontal-reverse .vue-slider-dot[data-v-e5dae08c] {\n\tright: 0;\n}\n.vue-slider-vertical-reverse .vue-slider-dot[data-v-e5dae08c] {\n\ttop: 0;\n}\n.vue-slider-tooltip-wrap[data-v-e5dae08c] {\n\tdisplay: none;\n\tposition: absolute;\n\tz-index: 9;\n}\n.vue-slider-tooltip[data-v-e5dae08c] {\n\tdisplay: block;\n\tfont-size: 14px;\n\twhite-space: nowrap;\n\tpadding: 2px 5px;\n\tmin-width: 20px;\n\ttext-align: center;\n\tcolor: #fff;\n\tborder-radius: 5px;\n\tborder: 1px solid #3498db;\n\tbackground-color: #3498db;\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-top[data-v-e5dae08c] {\n\ttop: -9px;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -100%);\n\t        transform: translate(-50%, -100%);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-bottom[data-v-e5dae08c] {\n\tbottom: -9px;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, 100%);\n\t        transform: translate(-50%, 100%);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-left[data-v-e5dae08c] {\n\ttop: 50%;\n\tleft: -9px;\n\t-webkit-transform: translate(-100%, -50%);\n\t        transform: translate(-100%, -50%);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-right[data-v-e5dae08c] {\n\ttop: 50%;\n\tright: -9px;\n\t-webkit-transform: translate(100%, -50%);\n\t        transform: translate(100%, -50%);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip[data-v-e5dae08c]::before {\n\tcontent: '';\n\tposition: absolute;\n\tbottom: -10px;\n\tleft: 50%;\n\twidth: 0;\n\theight: 0;\n\tborder: 5px solid transparent;\n\tborder: 6px solid transparent\\0;\n\tborder-top-color: inherit;\n\t-webkit-transform: translate(-50%, 0);\n\t        transform: translate(-50%, 0);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip[data-v-e5dae08c]::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: -10px;\n\tleft: 50%;\n\twidth: 0;\n\theight: 0;\n\tborder: 5px solid transparent;\n\tborder: 6px solid transparent\\0;\n\tborder-bottom-color: inherit;\n\t-webkit-transform: translate(-50%, 0);\n\t        transform: translate(-50%, 0);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip[data-v-e5dae08c]::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 50%;\n\tright: -10px;\n\twidth: 0;\n\theight: 0;\n\tborder: 5px solid transparent;\n\tborder: 6px solid transparent\\0;\n\tborder-left-color: inherit;\n\t-webkit-transform: translate(0, -50%);\n\t        transform: translate(0, -50%);\n}\n.vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip[data-v-e5dae08c]::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 50%;\n\tleft: -10px;\n\twidth: 0;\n\theight: 0;\n\tborder: 5px solid transparent;\n\tborder: 6px solid transparent\\0;\n\tborder-right-color: inherit;\n\t-webkit-transform: translate(0, -50%);\n\t        transform: translate(0, -50%);\n}\n.vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap[data-v-e5dae08c] {\n\tdisplay: block;\n}\n.vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap[data-v-e5dae08c] {\n\tdisplay: block!important;\n}\n.vue-slider-piecewise[data-v-e5dae08c] {\n\tposition: absolute;\n\twidth: 100%;\n\tpadding: 0;\n\tmargin: 0;\n\tleft: 0;\n\ttop: 0;\n\theight: 100%;\n\tlist-style: none;\n}\n.vue-slider-piecewise li[data-v-e5dae08c] {\n\tposition: absolute;\n\twidth: 8px;\n\theight: 8px;\n}\n.vue-slider-piecewise .vue-slider-piecewise-dot[data-v-e5dae08c] {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: inline-block;\n\tbackground-color: rgba(0, 0, 0, 0.16);\n\tborder-radius: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t        transform: translate(-50%, -50%);\n    z-index: 2;\n\t-webkit-transition: all .3s;\n\ttransition: all .3s;\n}\n.vue-slider-piecewise li:first-child .vue-slider-piecewise-dot[data-v-e5dae08c], .vue-slider-piecewise li:last-child .vue-slider-piecewise-dot[data-v-e5dae08c] {\n\tvisibility: hidden;\n}\n.vue-slider-horizontal .vue-slider-piecewise-label[data-v-e5dae08c], .vue-slider-horizontal-reverse .vue-slider-piecewise-label[data-v-e5dae08c] {\n\tposition: absolute;\n\tdisplay: inline-block;\n\ttop: 100%;\n\tleft: 50%;\n\twhite-space: nowrap;\n\tfont-size: 12px;\n\tcolor: #333;\n\t-webkit-transform: translate(-50%, 8px);\n\t        transform: translate(-50%, 8px);\n\tvisibility: visible;\n}\n.vue-slider-vertical .vue-slider-piecewise-label[data-v-e5dae08c], .vue-slider-vertical-reverse .vue-slider-piecewise-label[data-v-e5dae08c] {\n\tposition: absolute;\n\tdisplay: inline-block;\n\ttop: 50%;\n\tleft: 100%;\n\twhite-space: nowrap;\n\tfont-size: 12px;\n\tcolor: #333;\n\t-webkit-transform: translate(8px, -50%);\n\t        transform: translate(8px, -50%);\n\tvisibility: visible;\n}\n.vue-slider-sr-only[data-v-e5dae08c] {\n   clip: rect(1px, 1px, 1px, 1px);\n   height: 1px;\n   width: 1px;\n   overflow: hidden;\n   position: absolute !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	data: function data() {
		return {
			flag: false,
			size: 0,
			currentValue: 0,
			currentSlider: 0
		};
	},

	props: {
		width: {
			type: [Number, String],
			default: 'auto'
		},
		height: {
			type: [Number, String],
			default: 6
		},
		data: {
			type: Array,
			default: null
		},
		dotSize: {
			type: Number,
			default: 16
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		interval: {
			type: Number,
			default: 1
		},
		show: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		piecewise: {
			type: Boolean,
			default: false
		},
		tooltip: {
			type: [String, Boolean],
			default: 'always'
		},
		eventType: {
			type: String,
			default: 'auto'
		},
		direction: {
			type: String,
			default: 'horizontal'
		},
		reverse: {
			type: Boolean,
			default: false
		},
		lazy: {
			type: Boolean,
			default: false
		},
		clickable: {
			type: Boolean,
			default: true
		},
		speed: {
			type: Number,
			default: 0.5
		},
		realTime: {
			type: Boolean,
			default: false
		},
		value: {
			type: [String, Number, Array],
			default: 0
		},
		piecewiseLabel: {
			type: Boolean,
			default: false
		},
		sliderStyle: [Array, Object],
		tooltipDir: [Array, String],
		formatter: [String, Function],
		piecewiseStyle: Object,
		piecewiseActiveStyle: Object,
		processStyle: Object,
		bgStyle: Object,
		tooltipStyle: [Array, Object],
		labelStyle: Object,
		labelActiveStyle: Object
	},
	computed: {
		flowDirection: function flowDirection() {
			return 'vue-slider-' + (this.direction + (this.reverse ? '-reverse' : ''));
		},
		tooltipDirection: function tooltipDirection() {
			var dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top');
			if (Array.isArray(dir)) {
				return this.isRange ? dir : dir[1];
			} else {
				return this.isRange ? [dir, dir] : dir;
			}
		},
		tooltipStatus: function tooltipStatus() {
			return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? 'vue-slider-' + this.tooltip : '';
		},
		tooltipClass: function tooltipClass() {
			return ['vue-slider-tooltip-' + this.tooltipDirection, 'vue-slider-tooltip'];
		},
		isMobile: function isMobile() {
			return this.eventType === 'touch' || this.eventType !== 'mouse' && /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor || window.opera);
		},
		isDisabled: function isDisabled() {
			return this.eventType === 'none' ? true : this.disabled;
		},
		disabledClass: function disabledClass() {
			return this.disabled ? 'vue-slider-disabled' : '';
		},
		isRange: function isRange() {
			return Array.isArray(this.value);
		},
		slider: function slider() {
			return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot;
		},
		minimum: function minimum() {
			return this.data ? 0 : this.min;
		},

		val: {
			get: function get() {
				return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue;
			},
			set: function set(val) {
				if (this.data) {
					if (this.isRange) {
						var index0 = this.data.indexOf(val[0]);
						var index1 = this.data.indexOf(val[1]);
						if (index0 > -1 && index1 > -1) {
							this.currentValue = [index0, index1];
						}
					} else {
						var index = this.data.indexOf(val);
						if (index > -1) {
							this.currentValue = index;
						}
					}
				} else {
					this.currentValue = val;
				}
			}
		},
		currentIndex: function currentIndex() {
			if (this.isRange) {
				return this.data ? this.currentValue : [(this.currentValue[0] - this.minimum) / this.spacing, (this.currentValue[1] - this.minimum) / this.spacing];
			} else {
				return (this.currentValue - this.minimum) / this.spacing;
			}
		},
		indexRange: function indexRange() {
			if (this.isRange) {
				return this.currentIndex;
			} else {
				return [0, this.currentIndex];
			}
		},
		maximum: function maximum() {
			return this.data ? this.data.length - 1 : this.max;
		},
		multiple: function multiple() {
			var decimals = ('' + this.interval).split('.')[1];
			return decimals ? Math.pow(10, decimals.length) : 1;
		},
		spacing: function spacing() {
			return this.data ? 1 : this.interval;
		},
		total: function total() {
			if (this.data) {
				return this.data.length - 1;
			} else if (~~((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
				console.error('[Vue-slider warn]: Prop[interval] is illegal, Please make sure that the interval can be divisible');
			}
			return (this.maximum - this.minimum) / this.interval;
		},
		gap: function gap() {
			return this.size / this.total;
		},
		position: function position() {
			return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap;
		},
		limit: function limit() {
			return this.isRange ? [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size];
		},
		valueLimit: function valueLimit() {
			return this.isRange ? [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum];
		},
		wrapStyles: function wrapStyles() {
			return this.direction === 'vertical' ? {
				height: typeof this.height === 'number' ? this.height + 'px' : this.height,
				padding: this.dotSize / 2 + 'px'
			} : {
				width: typeof this.width === 'number' ? this.width + 'px' : this.width,
				padding: this.dotSize / 2 + 'px'
			};
		},
		sliderStyles: function sliderStyles() {
			if (Array.isArray(this.sliderStyle)) {
				return this.isRange ? this.sliderStyle : this.sliderStyle[1];
			} else {
				return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle;
			}
		},
		tooltipStyles: function tooltipStyles() {
			if (Array.isArray(this.tooltipStyle)) {
				return this.isRange ? this.tooltipStyle : this.tooltipStyle[1];
			} else {
				return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle;
			}
		},
		elemStyles: function elemStyles() {
			return this.direction === 'vertical' ? {
				width: this.width + 'px',
				height: '100%'
			} : {
				height: this.height + 'px'
			};
		},
		dotStyles: function dotStyles() {
			return this.direction === 'vertical' ? {
				width: this.dotSize + 'px',
				height: this.dotSize + 'px',
				left: -(this.dotSize - this.width) / 2 + 'px'
			} : {
				width: this.dotSize + 'px',
				height: this.dotSize + 'px',
				top: -(this.dotSize - this.height) / 2 + 'px'
			};
		},
		piecewiseDotStyle: function piecewiseDotStyle() {
			return this.direction === 'vertical' ? {
				width: this.width + 'px',
				height: this.width + 'px'
			} : {
				width: this.height + 'px',
				height: this.height + 'px'
			};
		},
		piecewiseDotWrap: function piecewiseDotWrap() {
			if (!this.piecewise && !this.piecewiseLabel) {
				return false;
			}

			var arr = [];
			var gap = (this.size - (this.direction === 'vertical' ? this.width : this.height)) / this.total;
			for (var i = 0; i <= this.total; i++) {
				var style = this.direction === 'vertical' ? {
					bottom: this.gap * i - this.width / 2 + 'px',
					left: 0
				} : {
					left: this.gap * i - this.height / 2 + 'px',
					top: '0'
				};
				var index = this.reverse ? this.total - i : i;
				var label = this.data ? this.data[index] : this.spacing * index + this.min;
				arr.push({
					style: style,
					label: this.formatter ? this.formatting(label) : label,
					inRange: index >= this.indexRange[0] && index <= this.indexRange[1]
				});
			}
			return arr;
		}
	},
	watch: {
		value: function value(val) {
			this.flag || this.setValue(val, true);
		},
		max: function max(val) {
			var resetVal = this.limitValue(this.val);
			resetVal !== false && this.setValue(resetVal);
			this.refresh();
		},
		min: function min(val) {
			var resetVal = this.limitValue(this.val);
			resetVal !== false && this.setValue(resetVal);
			this.refresh();
		},
		show: function show(bool) {
			var _this = this;

			if (bool && !this.size) {
				this.$nextTick(function () {
					_this.refresh();
				});
			}
		}
	},
	methods: {
		bindEvents: function bindEvents() {
			if (this.isMobile) {
				this.$refs.wrap.addEventListener('touchmove', this.moving);
				this.$refs.wrap.addEventListener('touchend', this.moveEnd);
			} else {
				document.addEventListener('mousemove', this.moving);
				document.addEventListener('mouseup', this.moveEnd);
				document.addEventListener('mouseleave', this.moveEnd);
			}
		},
		unbindEvents: function unbindEvents() {
			window.removeEventListener('resize', this.refresh);

			if (this.isMobile) {
				this.$refs.wrap.removeEventListener('touchmove', this.moving);
				this.$refs.wrap.removeEventListener('touchend', this.moveEnd);
			} else {
				document.removeEventListener('mousemove', this.moving);
				document.removeEventListener('mouseup', this.moveEnd);
				document.removeEventListener('mouseleave', this.moveEnd);
			}
		},
		formatting: function formatting(value) {
			return typeof this.formatter === 'string' ? this.formatter.replace(/\{value\}/, value) : this.formatter(value);
		},
		getPos: function getPos(e) {
			this.realTime && this.getStaticData();
			return this.direction === 'vertical' ? this.reverse ? e.pageY - this.offset : this.size - (e.pageY - this.offset) : this.reverse ? this.size - (e.clientX - this.offset) : e.clientX - this.offset;
		},
		wrapClick: function wrapClick(e) {
			if (this.isDisabled || !this.clickable) return false;
			var pos = this.getPos(e);
			if (this.isRange) {
				this.currentSlider = pos > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0;
			}
			this.setValueOnPos(pos);
		},
		moveStart: function moveStart(index) {
			if (this.isDisabled) return false;else if (this.isRange) {
				this.currentSlider = index;
			}
			this.flag = true;
			this.$emit('drag-start', this);
		},
		moving: function moving(e) {
			if (!this.flag) return false;
			e.preventDefault();

			if (this.isMobile) e = e.targetTouches[0];
			this.setValueOnPos(this.getPos(e), true);
		},
		moveEnd: function moveEnd(e) {
			if (this.flag) {
				this.$emit('drag-end', this);
				if (this.lazy && this.isDiff(this.val, this.value)) {
					this.syncValue();
				}
			} else {
				return false;
			}
			this.flag = false;
			this.setPosition();
		},
		setValueOnPos: function setValueOnPos(pos, isDrag) {
			var range = this.isRange ? this.limit[this.currentSlider] : this.limit;
			var valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
			if (pos >= range[0] && pos <= range[1]) {
				this.setTransform(pos);
				var v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;
				this.setCurrentValue(v, isDrag);
			} else if (pos < range[0]) {
				this.setTransform(range[0]);
				this.setCurrentValue(valueRange[0]);
				if (this.currentSlider === 1) this.currentSlider = 0;
			} else {
				this.setTransform(range[1]);
				this.setCurrentValue(valueRange[1]);
				if (this.currentSlider === 0) this.currentSlider = 1;
			}
		},
		isDiff: function isDiff(a, b) {
			if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
				return true;
			} else if (Array.isArray(a) && a.length === b.length) {
				return a.some(function (v, i) {
					return v !== b[i];
				});
			}
			return a !== b;
		},
		setCurrentValue: function setCurrentValue(val, bool) {
			if (val < this.minimum || val > this.maximum) return false;
			if (this.isRange) {
				if (this.isDiff(this.currentValue[this.currentSlider], val)) {
					this.currentValue.splice(this.currentSlider, 1, val);
					if (!this.lazy || !this.flag) {
						this.syncValue();
					}
				}
			} else if (this.isDiff(this.currentValue, val)) {
				this.currentValue = val;
				if (!this.lazy || !this.flag) {
					this.syncValue();
				}
			}
			bool || this.setPosition();
		},
		setIndex: function setIndex(val) {
			if (Array.isArray(val) && this.isRange) {
				var value = void 0;
				if (this.data) {
					value = [this.data[val[0]], this.data[val[1]]];
				} else {
					value = [this.spacing * val[0] + this.minimum, this.spacing * val[1] + this.minimum];
				}
				this.setValue(value);
			} else {
				val = this.spacing * val + this.minimum;
				if (this.isRange) {
					this.currentSlider = val > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0;
				}
				this.setCurrentValue(val);
			}
		},
		setValue: function setValue(val, noCb, speed) {
			var _this2 = this;

			if (this.isDiff(this.val, val)) {
				var resetVal = this.limitValue(val);
				if (resetVal !== false) {
					this.val = this.isRange ? resetVal.concat() : resetVal;
				} else {
					this.val = this.isRange ? val.concat() : val;
				}
				this.syncValue(noCb);
			}
			this.$nextTick(function () {
				_this2.setPosition(speed);
			});
		},
		setPosition: function setPosition(speed) {
			this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed);
			if (this.isRange) {
				this.currentSlider = 0;
				this.setTransform(this.position[this.currentSlider]);
				this.currentSlider = 1;
				this.setTransform(this.position[this.currentSlider]);
			} else {
				this.setTransform(this.position);
			}
			this.flag || this.setTransitionTime(0);
		},
		setTransform: function setTransform(val) {
			var value = (this.direction === 'vertical' ? this.dotSize / 2 - val : val - this.dotSize / 2) * (this.reverse ? -1 : 1);
			var translateValue = this.direction === 'vertical' ? 'translateY(' + value + 'px)' : 'translateX(' + value + 'px)';
			var processSize = (this.currentSlider === 0 ? this.position[1] - val : val - this.position[0]) + 'px';
			var processPos = (this.currentSlider === 0 ? val : this.position[0]) + 'px';
			if (this.isRange) {
				this.slider[this.currentSlider].style.transform = translateValue;
				this.slider[this.currentSlider].style.WebkitTransform = translateValue;
				this.slider[this.currentSlider].style.msTransform = translateValue;
				if (this.direction === 'vertical') {
					this.$refs.process.style.height = processSize;
					this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos;
				} else {
					this.$refs.process.style.width = processSize;
					this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos;
				}
			} else {
				this.slider.style.transform = translateValue;
				this.slider.style.WebkitTransform = translateValue;
				this.slider.style.msTransform = translateValue;
				if (this.direction === 'vertical') {
					this.$refs.process.style.height = val + 'px';
					this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0;
				} else {
					this.$refs.process.style.width = val + 'px';
					this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0;
				}
			}
		},
		setTransitionTime: function setTransitionTime(time) {
			time || this.$refs.process.offsetWidth;
			if (this.isRange) {
				for (var i = 0; i < this.slider.length; i++) {
					this.slider[i].style.transitionDuration = time + 's';
					this.slider[i].style.WebkitTransitionDuration = time + 's';
				}
				this.$refs.process.style.transitionDuration = time + 's';
				this.$refs.process.style.WebkitTransitionDuration = time + 's';
			} else {
				this.slider.style.transitionDuration = time + 's';
				this.slider.style.WebkitTransitionDuration = time + 's';
				this.$refs.process.style.transitionDuration = time + 's';
				this.$refs.process.style.WebkitTransitionDuration = time + 's';
			}
		},
		limitValue: function limitValue(val) {
			var _this3 = this;

			if (this.data) {
				return val;
			}

			var bool = false;
			if (this.isRange) {
				val = val.map(function (v) {
					if (v < _this3.min) {
						bool = true;
						return _this3.min;
					} else if (v > _this3.max) {
						bool = true;
						return _this3.max;
					}
					return v;
				});
			} else if (val > this.max) {
				bool = true;
				val = this.max;
			} else if (val < this.min) {
				bool = true;
				val = this.min;
			}
			return bool && val;
		},
		syncValue: function syncValue(noCb) {
			noCb || this.$emit('callback', this.val);
			this.$emit('input', this.isRange ? this.val.concat() : this.val);
		},
		getValue: function getValue() {
			return this.val;
		},
		getIndex: function getIndex() {
			return this.currentIndex;
		},
		getStaticData: function getStaticData() {
			if (this.$refs.elem) {
				this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth;
				this.offset = this.direction === 'vertical' ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left;
			}
		},
		refresh: function refresh() {
			if (this.$refs.elem) {
				this.getStaticData();
				this.setPosition();
			}
		}
	},
	created: function created() {
		window.addEventListener('resize', this.refresh);
	},
	mounted: function mounted() {
		var _this4 = this;

		this.$nextTick(function () {
			_this4.getStaticData();
			_this4.setValue(_this4.value, true, 0);
			_this4.bindEvents();
		});
	},
	beforeDestroy: function beforeDestroy() {
		this.unbindEvents();
	}
};

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
      ],
      ref: "wrap",
      class: [
        "vue-slider-wrap",
        _vm.flowDirection,
        _vm.disabledClass,
        { "vue-slider-has-label": _vm.piecewiseLabel }
      ],
      style: _vm.wrapStyles,
      on: { click: _vm.wrapClick }
    },
    [
      _c(
        "div",
        {
          ref: "elem",
          staticClass: "vue-slider",
          style: [_vm.elemStyles, _vm.bgStyle],
          attrs: { "aria-hidden": "true" }
        },
        [
          _vm.isMobile
            ? [
                _vm.isRange
                  ? [
                      _c(
                        "div",
                        {
                          ref: "dot0",
                          class: [_vm.tooltipStatus, "vue-slider-dot"],
                          style: [_vm.sliderStyles[0], _vm.dotStyles],
                          on: {
                            touchstart: function($event) {
                              _vm.moveStart(0)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              class: [
                                "vue-slider-tooltip-" + _vm.tooltipDirection[0],
                                "vue-slider-tooltip-wrap"
                              ]
                            },
                            [
                              _vm._t(
                                "tooltip",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "vue-slider-tooltip",
                                      style: _vm.tooltipStyles[0]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatter
                                            ? _vm.formatting(_vm.val[0])
                                            : _vm.val[0]
                                        )
                                      )
                                    ]
                                  )
                                ],
                                { value: _vm.val[0], index: 0 }
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          ref: "dot1",
                          class: [_vm.tooltipStatus, "vue-slider-dot"],
                          style: [_vm.sliderStyles[1], _vm.dotStyles],
                          on: {
                            touchstart: function($event) {
                              _vm.moveStart(1)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              class: [
                                "vue-slider-tooltip-" + _vm.tooltipDirection[1],
                                "vue-slider-tooltip-wrap"
                              ]
                            },
                            [
                              _vm._t(
                                "tooltip",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "vue-slider-tooltip",
                                      style: _vm.tooltipStyles[1]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatter
                                            ? _vm.formatting(_vm.val[1])
                                            : _vm.val[1]
                                        )
                                      )
                                    ]
                                  )
                                ],
                                { value: _vm.val[1], index: 1 }
                              )
                            ],
                            2
                          )
                        ]
                      )
                    ]
                  : [
                      _c(
                        "div",
                        {
                          ref: "dot",
                          class: [_vm.tooltipStatus, "vue-slider-dot"],
                          style: [_vm.sliderStyles, _vm.dotStyles],
                          on: { touchstart: _vm.moveStart }
                        },
                        [
                          _c(
                            "span",
                            {
                              class: [
                                "vue-slider-tooltip-" + _vm.tooltipDirection,
                                "vue-slider-tooltip-wrap"
                              ]
                            },
                            [
                              _vm._t(
                                "tooltip",
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.formatter
                                          ? _vm.formatting(_vm.val)
                                          : _vm.val
                                      ) +
                                      "\n\t\t\t\t\t\t"
                                  )
                                ],
                                { value: _vm.val }
                              )
                            ],
                            2
                          )
                        ]
                      )
                    ]
              ]
            : [
                _vm.isRange
                  ? [
                      _c(
                        "div",
                        {
                          ref: "dot0",
                          class: [_vm.tooltipStatus, "vue-slider-dot"],
                          style: [_vm.sliderStyles[0], _vm.dotStyles],
                          on: {
                            mousedown: function($event) {
                              _vm.moveStart(0)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              class: [
                                "vue-slider-tooltip-" + _vm.tooltipDirection[0],
                                "vue-slider-tooltip-wrap"
                              ]
                            },
                            [
                              _vm._t(
                                "tooltip",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "vue-slider-tooltip",
                                      style: _vm.tooltipStyles[0]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatter
                                            ? _vm.formatting(_vm.val[0])
                                            : _vm.val[0]
                                        )
                                      )
                                    ]
                                  )
                                ],
                                { value: _vm.val[0], index: 0 }
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          ref: "dot1",
                          class: [_vm.tooltipStatus, "vue-slider-dot"],
                          style: [_vm.sliderStyles[1], _vm.dotStyles],
                          on: {
                            mousedown: function($event) {
                              _vm.moveStart(1)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              class: [
                                "vue-slider-tooltip-" + _vm.tooltipDirection[1],
                                "vue-slider-tooltip-wrap"
                              ]
                            },
                            [
                              _vm._t(
                                "tooltip",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "vue-slider-tooltip",
                                      style: _vm.tooltipStyles[1]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatter
                                            ? _vm.formatting(_vm.val[1])
                                            : _vm.val[1]
                                        )
                                      )
                                    ]
                                  )
                                ],
                                { value: _vm.val[1], index: 1 }
                              )
                            ],
                            2
                          )
                        ]
                      )
                    ]
                  : [
                      _c(
                        "div",
                        {
                          ref: "dot",
                          class: [_vm.tooltipStatus, "vue-slider-dot"],
                          style: [_vm.sliderStyles, _vm.dotStyles],
                          on: { mousedown: _vm.moveStart }
                        },
                        [
                          _c(
                            "span",
                            {
                              class: [
                                "vue-slider-tooltip-" + _vm.tooltipDirection,
                                "vue-slider-tooltip-wrap"
                              ]
                            },
                            [
                              _vm._t(
                                "tooltip",
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "vue-slider-tooltip",
                                      style: _vm.tooltipStyles
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatter
                                            ? _vm.formatting(_vm.val)
                                            : _vm.val
                                        )
                                      )
                                    ]
                                  )
                                ],
                                { value: _vm.val }
                              )
                            ],
                            2
                          )
                        ]
                      )
                    ]
              ],
          _vm._v(" "),
          [
            _c(
              "ul",
              { staticClass: "vue-slider-piecewise" },
              _vm._l(_vm.piecewiseDotWrap, function(piecewiseObj, index) {
                return _c(
                  "li",
                  { style: [_vm.piecewiseDotStyle, piecewiseObj.style] },
                  [
                    _vm._t(
                      "piecewiseL",
                      [
                        _vm.piecewise
                          ? _c("span", {
                              staticClass: "vue-slider-piecewise-dot",
                              style: [
                                _vm.piecewiseStyle,
                                piecewiseObj.inRange
                                  ? _vm.piecewiseActiveStyle
                                  : null
                              ]
                            })
                          : _vm._e()
                      ],
                      {
                        label: piecewiseObj.label,
                        index: index,
                        first: index === 0,
                        last: index === _vm.piecewiseDotWrap.length - 1
                      }
                    ),
                    _vm._v(" "),
                    _vm._t(
                      "label",
                      [
                        _vm.piecewiseLabel
                          ? _c(
                              "span",
                              {
                                staticClass: "vue-slider-piecewise-label",
                                style: [
                                  _vm.labelStyle,
                                  piecewiseObj.inRange
                                    ? _vm.labelActiveStyle
                                    : null
                                ]
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t" +
                                    _vm._s(piecewiseObj.label) +
                                    "\n\t\t\t\t\t\t"
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      {
                        label: piecewiseObj.label,
                        index: index,
                        first: index === 0,
                        last: index === _vm.piecewiseDotWrap.length - 1
                      }
                    )
                  ],
                  2
                )
              })
            )
          ],
          _vm._v(" "),
          _c("div", {
            ref: "process",
            staticClass: "vue-slider-process",
            style: _vm.processStyle
          })
        ],
        2
      ),
      _vm._v(" "),
      !_vm.isRange && !_vm.data
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.val,
                expression: "val"
              }
            ],
            staticClass: "vue-slider-sr-only",
            attrs: { type: "range", min: _vm.min, max: _vm.max },
            domProps: { value: _vm.val },
            on: {
              __r: function($event) {
                _vm.val = $event.target.value
              }
            }
          })
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e5dae08c", module.exports)
  }
}

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "Set row" },
    [
      _c("div", { staticClass: "header col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "header-text col-lg-4" },
            [
              _c("h2", [_vm._v(_vm._s(_vm.set.name))]),
              _vm._v(" "),
              _c("router-link", { attrs: { to: { path: "/ui/icons" } } }, [
                _vm._v("Back to icons")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "search col-lg-4" }, [
            _c("div", { staticClass: "form-group with-icon-left" }, [
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selector,
                      expression: "selector"
                    }
                  ],
                  attrs: {
                    id: "input-icon-left",
                    name: "input-icon-left",
                    required: ""
                  },
                  domProps: { value: _vm.selector },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.selector = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", { staticClass: "fa fa-search icon-left input-icon" }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "control-label",
                    attrs: { for: "input-icon-left" }
                  },
                  [_vm._v("Icon Search")]
                ),
                _c("i", { staticClass: "bar" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "range col-lg-4" },
            [
              _c("h4", [_vm._v("A")]),
              _c(
                "slider",
                _vm._b(
                  {
                    model: {
                      value: _vm.iconSize,
                      callback: function($$v) {
                        _vm.iconSize = $$v
                      },
                      expression: "iconSize"
                    }
                  },
                  "slider",
                  _vm.slider,
                  false
                )
              ),
              _c("h2", [_vm._v("A")])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.validatedLists, function(list) {
        return [
          _c(
            "widget",
            { staticClass: "col-12", attrs: { headerText: list.name } },
            [
              list.icons.length === 0
                ? _c("span", [_vm._v("No icons found")])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(Math.floor(list.icons.length / 8 + 1), function(i) {
                return [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(8, function(j) {
                      return list.icons[(i - 1) * 8 + j - 1]
                        ? _c(
                            "div",
                            { staticClass: "col-8-custom icon-grid-container" },
                            [
                              _c("div", { staticClass: "icon" }, [
                                _c("span", {
                                  class: _vm.iconClass(
                                    list.icons[(i - 1) * 8 + j - 1]
                                  ),
                                  style: "font-size: " + _vm.iconSize + "px",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "iconText" }, [
                                  _vm._v(
                                    _vm._s(list.icons[(i - 1) * 8 + j - 1])
                                  )
                                ])
                              ])
                            ]
                          )
                        : _vm._e()
                    })
                  )
                ]
              })
            ],
            2
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-821b4fe2", module.exports)
  }
}

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ["vuestic","brandico","entypo","font-awesome","fontelico","glyphicons","iconic-stroke","ionicons","maki","openweb"]

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(744);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("78818242", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d48abcf2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Icons.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d48abcf2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Icons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports
exports.push([module.i, "@import url(http://weloveiconfonts.com/api/?family=brandico|entypo|fontelico|iconicfill|iconicstroke|maki|openwebicons|typicons|zocial);", ""]);

// module
exports.push([module.i, "\n.ui-icons {\n  /* brandico */\n  /* entypo */\n  /* fontelico */\n  /* iconicfill */\n  /* iconicstroke */\n  /* maki */\n  /* openwebicons */\n  /* typicons */\n  /* zocial */\n}\n.ui-icons [class*=\"brandico-\"]:before {\n    font-family: 'brandico', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"entypo-\"]:before {\n    font-family: 'entypo', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"fontelico-\"]:before {\n    font-family: 'fontelico', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"iconicfill-\"]:before {\n    font-family: 'IconicFill', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"iconicstroke-\"]:before {\n    font-family: 'IconicStroke', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"maki-\"]:before {\n    font-family: 'maki', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"openwebicons-\"]:before {\n    font-family: 'OpenWeb Icons', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"typicons-\"]:before {\n    font-family: 'Typicons', sans-serif;\n    font-style: normal;\n}\n.ui-icons [class*=\"zocial-\"]:before {\n    font-family: 'zocial', sans-serif;\n}\n.ui-icons .widget-body {\n    padding: 1.9375rem 2.6875rem 1.9375rem 2.125rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Set__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Set__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'icons',
  components: {
    FullSet: __WEBPACK_IMPORTED_MODULE_0__Set___default.a
  },
  computed: {
    sets: function sets() {
      var _this = this;

      var sets = [];
      __webpack_require__(746)(this.setsPath + 'names.json').forEach(function (name) {
        var set = __webpack_require__(747)(_this.setsPath + name + '.json');
        _this.addfilteredListsTo(set);
        sets.push(set);
      });
      return sets;
    }
  },
  methods: {
    addfilteredListsTo: function addfilteredListsTo(set) {
      var list = set.lists[0].icons;
      var filteredLists = [];
      filteredLists.push(list.slice(0, 6));
      filteredLists.push(list.slice(6, 8));
      filteredLists.push(list.slice(8, 14));
      set.filteredLists = filteredLists;
    }
  },
  data: function data() {
    return {
      setsPath: './sets/'
    };
  }
});

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sets/names.json": 673
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 746;

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sets/brandico.json": 748,
	"./sets/entypo.json": 749,
	"./sets/font-awesome.json": 750,
	"./sets/fontelico.json": 751,
	"./sets/glyphicons.json": 752,
	"./sets/iconic-stroke.json": 753,
	"./sets/ionicons.json": 754,
	"./sets/maki.json": 755,
	"./sets/names.json": 673,
	"./sets/openweb.json": 756,
	"./sets/typicons.json": 757,
	"./sets/vuestic.json": 758
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 747;

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = {"name":"Brandico","href":"brandico","prefix":"brandico","lists":[{"name":"Icons","icons":["facebook","facebook-rect","twitter","twitter-bird","vimeo","vimeo-rect","tumblr","tumblr-rect","googleplus-rect","github-text","github","skype","icq","yandex","yandex-rect","vkontakte-rect","odnoklassniki","odnoklassniki-rect","friendfeed","friendfeed-rect","blogger","blogger-rect","deviantart","jabber","lastfm","lastfm-rect","linkedin","linkedin-rect","picasa","wordpress","instagram","instagram-filled"]}]}

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = {"name":"Entypo","href":"entypo","prefix":"entypo","lists":[{"name":"Main Icons","icons":["note","logo-db","music","search","flashlight","mail","heart","heart-empty","star","star-empty","user","users","user-add","video","picture","camera","layout","menu","check","cancel","cancel-circled","cancel-squared","plus","plus-circled","plus-squared","minus","minus-circled","minus-squared","help","help-circled","info","info-circled","back","home","link","attach","lock","lock-open","eye","tag","bookmark","bookmarks","flag","thumbs-up","thumbs-down","download","upload","upload-cloud","reply","reply-all","forward","quote","code","export","pencil","feather","print","retweet","keyboard","comment","chat","bell","attention","alert","vcard","address","location","map","direction","compass","cup","trash","doc","docs","doc-landscape","doc-text","doc-text-inv","newspaper","book-open","book","folder","archive","box","rss","phone","cog","tools","share","shareable","basket","bag","calendar","login","logout","mic","mute","sound","volume","clock","hourglass","lamp","light-down","light-up","adjust","block","resize-full","resize-small","popup","publish","window","arrow-combo","down-circled","left-circled","right-circled","up-circled","down-open","left-open","right-open","up-open","down-open-mini","left-open-mini","right-open-mini","up-open-mini","down-open-big","left-open-big","right-open-big","up-open-big","down","left","right","up","down-dir","left-dir","right-dir","up-dir","down-bold","left-bold","right-bold","up-bold","down-thin","left-thin","right-thin","note-beamed","ccw","cw","arrows-ccw","level-down","level-up","shuffle","loop","switch","play","stop","pause","record","to-end","to-start","fast-forward","fast-backward","progress-0","progress-1","progress-2","progress-3","target","palette","list","list-add","signal","trophy","battery","back-in-time","monitor","mobile","network","cd","inbox","install","globe","cloud","cloud-thunder","flash","moon","flight","paper-plane","leaf","lifebuoy","mouse","briefcase","suitcase","dot","dot-2","dot-3","brush","magnet","infinity","erase","chart-pie","chart-line","chart-bar","chart-area","tape","graduation-cap","language","ticket","water","droplet","air","credit-card","floppy","clipboard","megaphone","database","drive","bucket","thermometer","key","flow-cascade","flow-branch","flow-tree","flow-line","flow-parallel","rocket","gauge","traffic-cone","cc","cc-by","cc-nc","cc-nc-eu","cc-nc-jp","cc-sa","cc-nd","cc-pd","cc-zero","cc-share","cc-remix"]},{"name":"Social Icons","icons":["github","github-circled","flickr","flickr-circled","vimeo","vimeo-circled","twitter","twitter-circled","facebook","facebook-circled","facebook-squared","gplus","gplus-circled","pinterest","pinterest-circled","tumblr","tumblr-circled","linkedin","linkedin-circled","dribbble","dribbble-circled","stumbleupon","stumbleupon-circled","lastfm","lastfm-circled","rdio","rdio-circled","spotify","spotify-circled","qq","instagram","dropbox","evernote","flattr","skype","skype-circled","renren","sina-weibo","paypal","picasa","soundcloud","mixi","behance","google-circles","vkontakte","smashing","sweden","db-shape","up-thin"]}]}

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = {"name":"Font Awesome","href":"font-awesome","prefix":"fa","lists":[{"name":"Web Applications Icons","icons":["address-book","address-book-o","address-card","address-card-o","adjust","american-sign-language-interpreting","anchor","archive","area-chart","arrows","arrows-h","arrows-v","asl-interpreting","assistive-listening-systems","asterisk","at","audio-description","automobile","balance-scale","ban","bank","bar-chart","bar-chart-o","barcode","bars","bath","bathtub","battery","battery-0","battery-1","battery-2","battery-3","battery-4","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-o","bell-slash","bell-slash-o","bicycle","binoculars","birthday-cake","blind","bluetooth","bluetooth-b","bolt","bomb","book","bookmark","bookmark-o","braille","briefcase","bug","building","building-o","bullhorn","bullseye","bus","cab","calculator","calendar","calendar-check-o","calendar-minus-o","calendar-o","calendar-plus-o","calendar-times-o","camera","camera-retro","car","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","cart-arrow-down","cart-plus","cc","certificate","check","check-circle","check-circle-o","check-square","check-square-o","child","circle","circle-o","circle-o-notch","circle-thin","clock-o","clone","close","cloud","cloud-download","cloud-upload","code","code-fork","coffee","cog","cogs","comment","comment-o","commenting","commenting-o","comments","comments-o","compass","copyright","creative-commons","credit-card","credit-card-alt","crop","crosshairs","cube","cubes","cutlery","dashboard","database","deaf","deafness","desktop","diamond","dot-circle-o","download","drivers-license","drivers-license-o","edit","ellipsis-h","ellipsis-v","envelope","envelope-o","envelope-open","envelope-open-o","envelope-square","eraser","exchange","exclamation","exclamation-circle","exclamation-triangle","external-link","external-link-square","eye","eye-slash","eyedropper","fax","feed","female","fighter-jet","file-archive-o","file-audio-o","file-code-o","file-excel-o","file-image-o","file-movie-o","file-pdf-o","file-photo-o","file-picture-o","file-powerpoint-o","file-sound-o","file-video-o","file-word-o","file-zip-o","film","filter","fire","fire-extinguisher","flag","flag-checkered","flag-o","flash","flask","folder","folder-o","folder-open","folder-open-o","frown-o","futbol-o","gamepad","gavel","gear","gears","gift","glass","globe","graduation-cap","group","hand-grab-o","hand-lizard-o","hand-paper-o","hand-peace-o","hand-pointer-o","hand-rock-o","hand-scissors-o","hand-spock-o","hand-stop-o","handshake-o","hard-of-hearing","hashtag","hdd-o","headphones","heart","heart-o","heartbeat","history","home","hotel","hourglass","hourglass-1","hourglass-2","hourglass-3","hourglass-end","hourglass-half","hourglass-o","hourglass-start","i-cursor","id-badge","id-card","id-card-o","image","inbox","industry","info","info-circle","institution","key","keyboard-o","language","laptop","leaf","legal","lemon-o","level-down","level-up","life-bouy","life-buoy","life-ring","life-saver","lightbulb-o","line-chart","location-arrow","lock","low-vision","magic","magnet","mail-forward","mail-reply","mail-reply-all","male","map","map-marker","map-o","map-pin","map-signs","meh-o","microchip","microphone","microphone-slash","minus","minus-circle","minus-square","minus-square-o","mobile","mobile-phone","money","moon-o","mortar-board","motorcycle","mouse-pointer","music","navicon","newspaper-o","object-group","object-ungroup","paint-brush","paper-plane","paper-plane-o","paw","pencil","pencil-square","pencil-square-o","percent","phone","phone-square","photo","picture-o","pie-chart","plane","plug","plus","plus-circle","plus-square","plus-square-o","podcast","power-off","print","puzzle-piece","qrcode","question","question-circle","question-circle-o","quote-left","quote-right","random","recycle","refresh","registered","remove","reorder","reply","reply-all","retweet","road","rocket","rss","rss-square","s15","search","search-minus","search-plus","send","send-o","server","share","share-alt","share-alt-square","share-square","share-square-o","shield","ship","shopping-bag","shopping-basket","shopping-cart","shower","sign-in","sign-language","sign-out","signal","signing","sitemap","sliders","smile-o","snowflake-o","soccer-ball-o","sort","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-asc","sort-desc","sort-down","sort-numeric-asc","sort-numeric-desc","sort-up","space-shuttle","spinner","spoon","square","square-o","star","star-half","star-half-empty","star-half-full","star-half-o","star-o","sticky-note","sticky-note-o","street-view","suitcase","sun-o","support","tablet","tachometer","tag","tags","tasks","taxi","television","terminal","thermometer","thermometer-0","thermometer-1","thermometer-2","thermometer-3","thermometer-4","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumb-tack","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up","ticket","times","times-circle","times-circle-o","times-rectangle","times-rectangle-o","tint","toggle-down","toggle-left","toggle-off","toggle-on","toggle-right","toggle-up","trademark","trash","trash-o","tree","trophy","truck","tty","tv","umbrella","universal-access","university","unlock","unlock-alt","unsorted","upload","user","user-circle","user-circle-o","user-o","user-plus","user-secret","user-times","users","vcard","vcard-o","video-camera","volume-control-phone","volume-down","volume-off","volume-up","warning","wheelchair","wheelchair-alt","wifi","window-close","window-close-o","window-maximize","window-minimize","window-restore","wrench"]},{"name":"Accessibility Icons","icons":["american-sign-language-interpreting","asl-interpreting","assistive-listening-systems","audio-description","blind","braille","cc","deaf","deafness","hard-of-hearing","low-vision","question-circle-o","sign-language","signing","tty","universal-access","volume-control-phone","wheelchair","wheelchair-alt"]},{"name":"Hand Icons","icons":["hand-grab-o","hand-lizard-o","hand-o-down","hand-o-left","hand-o-right","hand-o-up","hand-paper-o","hand-peace-o","hand-pointer-o","hand-rock-o","hand-scissors-o","hand-spock-o","hand-stop-o","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up"]},{"name":"Transportation Icons","icons":["ambulance","automobile","bicycle","bus","cab","car","fighter-jet","motorcycle","plane","rocket","ship","space-shuttle","subway","taxi","train","truck","wheelchair","wheelchair-alt"]},{"name":"Gender Icons","icons":["genderless","intersex","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mercury","neuter","transgender","transgender-alt","venus","venus-double","venus-mars"]},{"name":"File Type Icons","icons":["file","file-archive-o","file-audio-o","file-code-o","file-excel-o","file-image-o","file-movie-o","file-o","file-pdf-o","file-photo-o","file-picture-o","file-powerpoint-o","file-sound-o","file-text","file-text-o","file-video-o","file-word-o","file-zip-o"]},{"name":"Spinner Icons","icons":["circle-o-notch","cog","gear","refresh","spinner"]},{"name":"Form Control Icons","icons":["check-square","check-square-o","circle","circle-o","dot-circle-o","minus-square","minus-square-o","plus-square","plus-square-o","square","square-o"]},{"name":"Payment Icons","icons":["cc-amex","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","credit-card","credit-card-alt","google-wallet","paypal"]},{"name":"Chart Icons","icons":["area-chart","bar-chart","bar-chart-o","line-chart","pie-chart"]},{"name":"Currency Icons","icons":["bitcoin","btc","cny","dollar","eur","euro","gbp","gg","gg-circle","ils","inr","jpy","krw","money","rmb","rouble","rub","ruble","rupee","shekel","sheqel","try","turkish-lira","usd","won","yen"]},{"name":"Text Editor Icons","icons":["align-center","align-justify","align-left","align-right","bold","chain","chain-broken","clipboard","columns","copy","cut","dedent","eraser","file","file-o","file-text","file-text-o","files-o","floppy-o","font","header","indent","italic","link","list","list-alt","list-ol","list-ul","outdent","paperclip","paragraph","paste","repeat","rotate-left","rotate-right","save","scissors","strikethrough","subscript","superscript","table","text-height","text-width","th","th-large","th-list","underline","undo","unlink"]},{"name":"Directional Icons","icons":["angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","arrow-circle-down","arrow-circle-left","arrow-circle-o-down","arrow-circle-o-left","arrow-circle-o-right","arrow-circle-o-up","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows","arrows-alt","arrows-h","arrows-v","caret-down","caret-left","caret-right","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","caret-up","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","exchange","hand-o-down","hand-o-left","hand-o-right","hand-o-up","long-arrow-down","long-arrow-left","long-arrow-right","long-arrow-up","toggle-down","toggle-left","toggle-right","toggle-up"]},{"name":"Video Player Icons","icons":["arrows-alt","backward","compress","eject","expand","fast-backward","fast-forward","forward","pause","pause-circle","pause-circle-o","play","play-circle","play-circle-o","random","step-backward","step-forward","stop","stop-circle","stop-circle-o","youtube-play"]},{"name":"Brand Icons","icons":["500px","adn","amazon","android","angellist","apple","bandcamp","behance","behance-square","bitbucket","bitbucket-square","bitcoin","black-tie","bluetooth","bluetooth-b","btc","buysellads","cc-amex","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","chrome","codepen","codiepie","connectdevelop","contao","css3","dashcube","delicious","deviantart","digg","dribbble","dropbox","drupal","edge","eercast","empire","envira","etsy","expeditedssl","fa","facebook","facebook-f","facebook-official","facebook-square","firefox","first-order","flickr","font-awesome","fonticons","fort-awesome","forumbee","foursquare","free-code-camp","ge","get-pocket","gg","gg-circle","git","git-square","github","github-alt","github-square","gitlab","gittip","glide","glide-g","google","google-plus","google-plus-circle","google-plus-official","google-plus-square","google-wallet","gratipay","grav","hacker-news","houzz","html5","imdb","instagram","internet-explorer","ioxhost","joomla","jsfiddle","lastfm","lastfm-square","leanpub","linkedin","linkedin-square","linode","linux","maxcdn","meanpath","medium","meetup","mixcloud","modx","odnoklassniki","odnoklassniki-square","opencart","openid","opera","optin-monster","pagelines","paypal","pied-piper","pied-piper-alt","pied-piper-pp","pinterest","pinterest-p","pinterest-square","product-hunt","qq","quora","ra","ravelry","rebel","reddit","reddit-alien","reddit-square","renren","resistance","safari","scribd","sellsy","share-alt","share-alt-square","shirtsinbulk","simplybuilt","skyatlas","skype","slack","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","spotify","stack-exchange","stack-overflow","steam","steam-square","stumbleupon","stumbleupon-circle","superpowers","telegram","tencent-weibo","themeisle","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","usb","viacoin","viadeo","viadeo-square","vimeo","vimeo-square","vine","vk","wechat","weibo","weixin","whatsapp","wikipedia-w","windows","wordpress","wpbeginner","wpexplorer","wpforms","xing","xing-square","y-combinator","y-combinator-square","yahoo","yc","yc-square","yelp","yoast","youtube","youtube-play","youtube-square"]},{"name":"Medical Icons","icons":["ambulance","h-square","heart","heart-o","heartbeat","hospital-o","medkit","plus-square","stethoscope","user-md","wheelchair","wheelchair-alt"]}]}

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = {"name":"Fontelico","href":"fontelico","prefix":"fontelico","lists":[{"name":"Icons","icons":["emo-happy","emo-wink","emo-wink2","emo-unhappy","emo-sleep","emo-thumbsup","emo-devil","emo-surprised","emo-tongue","emo-coffee","emo-sunglasses","emo-displeased","emo-beer","emo-grin","emo-angry","emo-saint","emo-cry","emo-shoot","emo-squint","emo-laugh","spin1","spin2","spin3","spin4","spin5","spin6","firefox","chrome","opera","ie"]}]}

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = {"name":"GlyphIcons","href":"glyphicons","prefix":"glyphicon","lists":[{"name":"Icons","icons":["asterisk","plus","minus","eur","euro","cloud","envelope","pencil","glass","music","search","heart","star","star-empty","user","film","th-large","th","th-list","ok","remove","zoom-in","zoom-out","off","signal","cog","trash","home","file","time","road","download-alt","download","upload","inbox","play-circle","repeat","refresh","list-alt","lock","flag","headphones","volume-off","volume-down","volume-up","qrcode","barcode","tag","tags","book","bookmark","print","camera","font","bold","italic","text-height","text-width","align-left","align-center","align-right","align-justify","list","indent-left","indent-right","facetime-video","picture","map-marker","adjust","tint","edit","share","check","move","step-backward","fast-backward","backward","play","pause","stop","forward","fast-forward","step-forward","eject","chevron-left","chevron-right","plus-sign","minus-sign","remove-sign","ok-sign","question-sign","info-sign","screenshot","remove-circle","ok-circle","ban-circle","arrow-left","arrow-right","arrow-up","arrow-down","share-alt","resize-full","resize-small","exclamation-sign","gift","leaf","fire","eye-open","eye-close","warning-sign","plane","calendar","random","comment","magnet","chevron-up","chevron-down","retweet","shopping-cart","folder-close","folder-open","resize-vertical","resize-horizontal","hdd","bullhorn","bell","certificate","thumbs-up","thumbs-down","hand-right","hand-left","hand-up","hand-down","circle-arrow-right","circle-arrow-left","circle-arrow-up","circle-arrow-down","globe","wrench","tasks","filter","briefcase","fullscreen","dashboard","paperclip","heart-empty","link","phone","pushpin","usd","gbp","sort","sort-by-alphabet","sort-by-alphabet-alt","sort-by-order","sort-by-order-alt","sort-by-attributes","sort-by-attributes-alt","unchecked","expand","collapse-down","collapse-up","log-in","flash","log-out","new-window","record","save","open","saved","import","export","send","floppy-disk","floppy-saved","floppy-remove","floppy-save","floppy-open","credit-card","transfer","cutlery","header","compressed","earphone","phone-alt","tower","stats","sd-video","hd-video","subtitles","sound-stereo","sound-dolby","sound-5-1","sound-6-1","sound-7-1","copyright-mark","registration-mark","cloud-download","cloud-upload","tree-conifer","tree-deciduous","cd","save-file","open-file","level-up","copy","paste","alert","equalizer","king","queen","pawn","bishop","knight","baby-formula","tent","blackboard","bed","apple","erase","hourglass","lamp","duplicate","piggy-bank","scissors","bitcoin","yen","ruble","scale","ice-lolly","ice-lolly-tasted","education","option-horizontal","option-vertical","menu-hamburger","modal-window","oil","grain","sunglasses","text-size","text-color","text-background","object-align-top","object-align-bottom","object-align-horizontal","object-align-left","object-align-vertical","object-align-right","triangle-right","triangle-left","triangle-bottom","triangle-top","console","superscript","subscript","menu-left","menu-right","menu-down","menu-up"]}]}

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = {"name":"Iconic Stroke","href":"iconic-stroke","prefix":"iconicstroke","lists":[{"name":"Icons","icons":["hash","question-mark","at","pilcrow","info","arrow-left","arrow-up","arrow-right","arrow-down","home","sun-stroke","cloud","umbrella","star","moon-stroke","heart-stroke","cog","bolt","key-stroke","rain","denied","mail","pen","check","check-alt","x","x-alt","left-quote","right-quote","plus","minus","curved-arrow","document-alt-stroke","calendar","map-pin-alt","comment-alt1-stroke","comment-alt2-stroke","pen-alt-stroke","pen-alt2","chat-alt-stroke","plus-alt","minus-alt","bars-alt","book-alt","aperture-alt","beaker-alt","left-quote-alt","right-quote-alt","arrow-left-alt1","arrow-up-alt1","arrow-right-alt1","arrow-down-alt1","arrow-left-alt2","arrow-up-alt2","arrow-right-alt2","arrow-down-alt2","brush","brush-alt","eyedropper","layers","layers-alt","compass","award-stroke","beaker","steering-wheel","eye","aperture","image","chart","chart-alt","target","tag-stroke","rss","rss-alt","share","undo","reload","reload-alt","loop-alt1","loop-alt2","loop-alt3","loop-alt4","spin","spin-alt","move-horizontal","move-horizontal-alt1","move-horizontal-alt2","move-vertical","move-vertical-alt1","move-vertical-alt2","move","move-alt1","move-alt2","transfer","download","upload","cloud-download","cloud-upload","fork","play","play-alt","pause","stop","eject","first","last","fullscreen","fullscreen-alt","fullscreen-exit","fullscreen-exit-alt","equalizer","article","read-more","list","list-nested","cursor","dial","new-window","trash-stroke","battery-half","battery-empty","battery-charging","chat","mic","movie","headphones","user","lightbulb","cd","folder-stroke","document-stroke","pin","map-pin-stroke","book","book-alt2","box","calendar-alt-stroke","comment-stroke","iphone","bars","camera","volume-mute","volume","battery-full","magnifying-glass","lock-stroke","unlock-stroke","link","wrench","clock","paperclip"]}]}

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = {"name":"Ionicons","href":"ionicons","prefix":"ion","lists":[{"name":"Icons","icons":["alert-circled","alert","android-add-circle","android-add","android-alarm-clock","android-alert","android-apps","android-archive","android-arrow-back","android-arrow-down","android-arrow-dropdown-circle","android-arrow-dropdown","android-arrow-dropleft-circle","android-arrow-dropleft","android-arrow-dropright-circle","android-arrow-dropright","android-arrow-dropup-circle","android-arrow-dropup","android-arrow-forward","android-arrow-up","android-attach","android-bar","android-bicycle","android-boat","android-bookmark","android-bulb","android-bus","android-calendar","android-call","android-camera","android-cancel","android-car","android-cart","android-chat","android-checkbox-blank","android-checkbox-outline-blank","android-checkbox-outline","android-checkbox","android-checkmark-circle","android-clipboard","android-close","android-cloud-circle","android-cloud-done","android-cloud-outline","android-cloud","android-color-palette","android-compass","android-contact","android-contacts","android-contract","android-create","android-delete","android-desktop","android-document","android-done-all","android-done","android-download","android-drafts","android-exit","android-expand","android-favorite-outline","android-favorite","android-film","android-folder-open","android-folder","android-funnel","android-globe","android-hand","android-hangout","android-happy","android-home","android-image","android-laptop","android-list","android-locate","android-lock","android-mail","android-map","android-menu","android-microphone-off","android-microphone","android-more-horizontal","android-more-vertical","android-navigate","android-notifications-none","android-notifications-off","android-notifications","android-open","android-options","android-people","android-person-add","android-person","android-phone-landscape","android-phone-portrait","android-pin","android-plane","android-playstore","android-print","android-radio-button-off","android-radio-button-on","android-refresh","android-remove-circle","android-remove","android-restaurant","android-sad","android-search","android-send","android-settings","android-share-alt","android-share","android-star-half","android-star-outline","android-star","android-stopwatch","android-subway","android-sunny","android-sync","android-textsms","android-time","android-train","android-unlock","android-upload","android-volume-down","android-volume-mute","android-volume-off","android-volume-up","android-walk","android-warning","android-watch","android-wifi","aperture","archive","arrow-down-a","arrow-down-b","arrow-down-c","arrow-expand","arrow-graph-down-left","arrow-graph-down-right","arrow-graph-up-left","arrow-graph-up-right","arrow-left-a","arrow-left-b","arrow-left-c","arrow-move","arrow-resize","arrow-return-left","arrow-return-right","arrow-right-a","arrow-right-b","arrow-right-c","arrow-shrink","arrow-swap","arrow-up-a","arrow-up-b","arrow-up-c","asterisk","at","backspace-outline","backspace","bag","battery-charging","battery-empty","battery-full","battery-half","battery-low","beaker","beer","bluetooth","bonfire","bookmark","bowtie","briefcase","bug","calculator","calendar","camera","card","cash","chatbox-working","chatbox","chatboxes","chatbubble-working","chatbubble","chatbubbles","checkmark-circled","checkmark-round","checkmark","chevron-down","chevron-left","chevron-right","chevron-up","clipboard","clock","close-circled","close-round","close","closed-captioning","cloud","code-download","code-working","code","coffee","compass","compose","connection-bars","contrast","crop","cube","disc","document-text","document","drag","earth","easel","edit","egg","eject","email-unread","email","erlenmeyer-flask-bubbles","erlenmeyer-flask","eye-disabled","eye","female","filing","film-marker","fireball","flag","flame","flash-off","flash","folder","fork-repo","fork","forward","funnel","gear-a","gear-b","grid","hammer","happy-outline","happy","headphone","heart-broken","heart","help-buoy","help-circled","help","home","icecream","image","images","information-circled","information","ionic","ios-alarm-outline","ios-alarm","ios-albums-outline","ios-albums","ios-americanfootball-outline","ios-americanfootball","ios-analytics-outline","ios-analytics","ios-arrow-back","ios-arrow-down","ios-arrow-forward","ios-arrow-left","ios-arrow-right","ios-arrow-thin-down","ios-arrow-thin-left","ios-arrow-thin-right","ios-arrow-thin-up","ios-arrow-up","ios-at-outline","ios-at","ios-barcode-outline","ios-barcode","ios-baseball-outline","ios-baseball","ios-basketball-outline","ios-basketball","ios-bell-outline","ios-bell","ios-body-outline","ios-body","ios-bolt-outline","ios-bolt","ios-book-outline","ios-book","ios-bookmarks-outline","ios-bookmarks","ios-box-outline","ios-box","ios-briefcase-outline","ios-briefcase","ios-browsers-outline","ios-browsers","ios-calculator-outline","ios-calculator","ios-calendar-outline","ios-calendar","ios-camera-outline","ios-camera","ios-cart-outline","ios-cart","ios-chatboxes-outline","ios-chatboxes","ios-chatbubble-outline","ios-chatbubble","ios-checkmark-empty","ios-checkmark-outline","ios-checkmark","ios-circle-filled","ios-circle-outline","ios-clock-outline","ios-clock","ios-close-empty","ios-close-outline","ios-close","ios-cloud-download-outline","ios-cloud-download","ios-cloud-outline","ios-cloud-upload-outline","ios-cloud-upload","ios-cloud","ios-cloudy-night-outline","ios-cloudy-night","ios-cloudy-outline","ios-cloudy","ios-cog-outline","ios-cog","ios-color-filter-outline","ios-color-filter","ios-color-wand-outline","ios-color-wand","ios-compose-outline","ios-compose","ios-contact-outline","ios-contact","ios-copy-outline","ios-copy","ios-crop-strong","ios-crop","ios-download-outline","ios-download","ios-drag","ios-email-outline","ios-email","ios-eye-outline","ios-eye","ios-fastforward-outline","ios-fastforward","ios-filing-outline","ios-filing","ios-film-outline","ios-film","ios-flag-outline","ios-flag","ios-flame-outline","ios-flame","ios-flask-outline","ios-flask","ios-flower-outline","ios-flower","ios-folder-outline","ios-folder","ios-football-outline","ios-football","ios-game-controller-a-outline","ios-game-controller-a","ios-game-controller-b-outline","ios-game-controller-b","ios-gear-outline","ios-gear","ios-glasses-outline","ios-glasses","ios-grid-view-outline","ios-grid-view","ios-heart-outline","ios-heart","ios-help-empty","ios-help-outline","ios-help","ios-home-outline","ios-home","ios-infinite-outline","ios-infinite","ios-information-empty","ios-information-outline","ios-information","ios-ionic-outline","ios-keypad-outline","ios-keypad","ios-lightbulb-outline","ios-lightbulb","ios-list-outline","ios-list","ios-location-outline","ios-location","ios-locked-outline","ios-locked","ios-loop-strong","ios-loop","ios-medical-outline","ios-medical","ios-medkit-outline","ios-medkit","ios-mic-off","ios-mic-outline","ios-mic","ios-minus-empty","ios-minus-outline","ios-minus","ios-monitor-outline","ios-monitor","ios-moon-outline","ios-moon","ios-more-outline","ios-more","ios-musical-note","ios-musical-notes","ios-navigate-outline","ios-navigate","ios-nutrition-outline","ios-nutrition","ios-paper-outline","ios-paper","ios-paperplane-outline","ios-paperplane","ios-partlysunny-outline","ios-partlysunny","ios-pause-outline","ios-pause","ios-paw-outline","ios-paw","ios-people-outline","ios-people","ios-person-outline","ios-person","ios-personadd-outline","ios-personadd","ios-photos-outline","ios-photos","ios-pie-outline","ios-pie","ios-pint-outline","ios-pint","ios-play-outline","ios-play","ios-plus-empty","ios-plus-outline","ios-plus","ios-pricetag-outline","ios-pricetag","ios-pricetags-outline","ios-pricetags","ios-printer-outline","ios-printer","ios-pulse-strong","ios-pulse","ios-rainy-outline","ios-rainy","ios-recording-outline","ios-recording","ios-redo-outline","ios-redo","ios-refresh-empty","ios-refresh-outline","ios-refresh","ios-reload","ios-reverse-camera-outline","ios-reverse-camera","ios-rewind-outline","ios-rewind","ios-rose-outline","ios-rose","ios-search-strong","ios-search","ios-settings-strong","ios-settings","ios-shuffle-strong","ios-shuffle","ios-skipbackward-outline","ios-skipbackward","ios-skipforward-outline","ios-skipforward","ios-snowy","ios-speedometer-outline","ios-speedometer","ios-star-half","ios-star-outline","ios-star","ios-stopwatch-outline","ios-stopwatch","ios-sunny-outline","ios-sunny","ios-telephone-outline","ios-telephone","ios-tennisball-outline","ios-tennisball","ios-thunderstorm-outline","ios-thunderstorm","ios-time-outline","ios-time","ios-timer-outline","ios-timer","ios-toggle-outline","ios-toggle","ios-trash-outline","ios-trash","ios-undo-outline","ios-undo","ios-unlocked-outline","ios-unlocked","ios-upload-outline","ios-upload","ios-videocam-outline","ios-videocam","ios-volume-high","ios-volume-low","ios-wineglass-outline","ios-wineglass","ios-world-outline","ios-world","ipad","iphone","ipod","jet","key","knife","laptop","leaf","levels","lightbulb","link","load-a","load-b","load-c","load-d","location","lock-combination","locked","log-in","log-out","loop","magnet","male","man","map","medkit","merge","mic-a","mic-b","mic-c","minus-circled","minus-round","minus","model-s","monitor","more","mouse","music-note","navicon-round","navicon","navigate","network","no-smoking","nuclear","outlet","paintbrush","paintbucket","paper-airplane","paperclip","pause","person-add","person-stalker","person","pie-graph","pin","pinpoint","pizza","plane","planet","play","playstation","plus-circled","plus-round","plus","podium","pound","power","pricetag","pricetags","printer","pull-request","qr-scanner","quote","radio-waves","record","refresh","reply-all","reply","ribbon-a","ribbon-b","sad-outline","sad","scissors","search","settings","share","shuffle","skip-backward","skip-forward","social-android-outline","social-android","social-angular-outline","social-angular","social-apple-outline","social-apple","social-bitcoin-outline","social-bitcoin","social-buffer-outline","social-buffer","social-chrome-outline","social-chrome","social-codepen-outline","social-codepen","social-css3-outline","social-css3","social-designernews-outline","social-designernews","social-dribbble-outline","social-dribbble","social-dropbox-outline","social-dropbox","social-euro-outline","social-euro","social-facebook-outline","social-facebook","social-foursquare-outline","social-foursquare","social-freebsd-devil","social-github-outline","social-github","social-google-outline","social-google","social-googleplus-outline","social-googleplus","social-hackernews-outline","social-hackernews","social-html5-outline","social-html5","social-instagram-outline","social-instagram","social-javascript-outline","social-javascript","social-linkedin-outline","social-linkedin","social-markdown","social-nodejs","social-octocat","social-pinterest-outline","social-pinterest","social-python","social-reddit-outline","social-reddit","social-rss-outline","social-rss","social-sass","social-skype-outline","social-skype","social-snapchat-outline","social-snapchat","social-tumblr-outline","social-tumblr","social-tux","social-twitch-outline","social-twitch","social-twitter-outline","social-twitter","social-usd-outline","social-usd","social-vimeo-outline","social-vimeo","social-whatsapp-outline","social-whatsapp","social-windows-outline","social-windows","social-wordpress-outline","social-wordpress","social-yahoo-outline","social-yahoo","social-yen-outline","social-yen","social-youtube-outline","social-youtube","soup-can-outline","soup-can","speakerphone","speedometer","spoon","star","stats-bars","steam","stop","thermometer","thumbsdown","thumbsup","toggle-filled","toggle","transgender","trash-a","trash-b","trophy","tshirt-outline","tshirt","umbrella","university","unlocked","upload","usb","videocamera","volume-high","volume-low","volume-medium","volume-mute","wand","waterdrop","wifi","wineglass","woman","wrench","xbox"]}]}

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = {"name":"Maki","href":"maki","prefix":"maki","lists":[{"name":"Icons","icons":["aboveground-rail","airfield","airport","art-gallery","bar","baseball","basketball","beer","belowground-rail","bicycle","bus","cafe","campsite","cemetery","cinema","college","commerical-building","credit-card","cricket","embassy","fast-food","ferry","fire-station","football","fuel","garden","giraffe","golf","grocery-store","harbor","heliport","hospital","industrial-building","library","lodging","london-underground","minefield","monument","museum","pharmacy","pitch","police","post","prison","rail","religious-christian","religious-islam","religious-jewish","restaurant","roadblock","school","shop","skiing","soccer","swimming","tennis","theatre","toilet","town-hall","trash","tree-1","tree-2","warehouse"]}]}

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = {"name":"OpenWeb Icons","href":"openweb","prefix":"openwebicons","lists":[{"name":"Icons","icons":["apml","open-share","share","feed","ostatus","opml","activity","geo","opensearch","oauth","openid","rdf","dataportability","federated","open-web","web-intents","xmpp","qr","epub","opengraph","foaf","info-card","browserid","persona","remote-storage","odata","markdown","tosdr"]}]}

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = {"name":"Typicons","href":"typicons","prefix":"typicons","lists":[{"name":"Icons","icons":["adjust-brightness","adjust-contrast","anchor-outline","anchor","archive","arrow-back-outline","arrow-back","arrow-down-outline","arrow-down-thick","arrow-down","arrow-forward-outline","arrow-forward","arrow-left-outline","arrow-left-thick","arrow-left","arrow-loop-outline","arrow-loop","arrow-maximise-outline","arrow-maximise","arrow-minimise-outline","arrow-minimise","arrow-move-outline","arrow-move","arrow-repeat-outline","arrow-repeat","arrow-right-outline","arrow-right-thick","arrow-right","arrow-shuffle","arrow-sorted-down","arrow-sorted-up","arrow-sync-outline","arrow-sync","arrow-unsorted","arrow-up-outline","arrow-up-thick","arrow-up","at","attachment-outline","attachment","backspace-outline","backspace","battery-charge","battery-full","battery-high","battery-low","battery-mid","beaker","beer","bell","book","bookmark","briefcase","brush","business-card","calculator","calendar-outline","calendar","camera-outline","camera","cancel-outline","cancel","chart-area-outline","chart-area","chart-bar-outline","chart-bar","chart-line-outline","chart-line","chart-pie-outline","chart-pie","chevron-left-outline","chevron-left","chevron-right-outline","chevron-right","clipboard","cloud-storage","cloud-storage-outline","code-outline","code","coffee","cog-outline","cog","compass","contacts","credit-card","css3","database","delete-outline","delete","device-desktop","device-laptop","device-phone","device-tablet","directions","divide-outline","divide","document-add","document-delete","document-text","document","download-outline","download","dropbox","edit","eject-outline","eject","equals-outline","equals","export-outline","export","eye-outline","eye","feather","film","filter","flag-outline","flag","flash-outline","flash","flow-children","flow-merge","flow-parallel","flow-switch","folder-add","folder-delete","folder-open","folder","gift","globe-outline","globe","group-outline","group","headphones","heart-full-outline","heart-half-outline","heart-outline","heart","home-outline","home","html5","image-outline","image","infinity-outline","infinity","info-large-outline","info-large","info-outline","info","input-checked-outline","input-checked","key-outline","key","keyboard","leaf","lightbulb","link-outline","link","location-arrow-outline","location-arrow","location-outline","location","lock-closed-outline","lock-closed","lock-open-outline","lock-open","mail","map","media-eject-outline","media-eject","media-fast-forward-outline","media-fast-forward","media-pause-outline","media-pause","media-play-outline","media-play-reverse-outline","media-play-reverse","media-play","media-record-outline","media-record","media-rewind-outline","media-rewind","media-stop-outline","media-stop","message-typing","message","messages","microphone-outline","microphone","minus-outline","minus","mortar-board","news","notes-outline","notes","pen","pencil","phone-outline","phone","pi-outline","pi","pin-outline","pin","pipette","plane-outline","plane","plug","plus-outline","plus","point-of-interest-outline","point-of-interest","power-outline","power","printer","puzzle-outline","puzzle","radar-outline","radar","refresh-outline","refresh","rss-outline","rss","scissors-outline","scissors","shopping-bag","shopping-cart","social-at-circular","social-dribbble-circular","social-dribbble","social-facebook-circular","social-facebook","social-flickr-circular","social-flickr","social-github-circular","social-github","social-google-plus-circular","social-google-plus","social-instagram-circular","social-instagram","social-last-fm-circular","social-last-fm","social-linkedin-circular","social-linkedin","social-pinterest-circular","social-pinterest","social-skype-outline","social-skype","social-tumbler-circular","social-tumbler","social-twitter-circular","social-twitter","social-vimeo-circular","social-vimeo","social-youtube-circular","social-youtube","sort-alphabetically-outline","sort-alphabetically","sort-numerically-outline","sort-numerically","spanner-outline","spanner","spiral","star-full-outline","star-half-outline","star-half","star-outline","star","starburst-outline","starburst","stopwatch","support","tabs-outline","tag","tags","th-large-outline","th-large","th-list-outline","th-list","th-menu-outline","th-menu","th-small-outline","th-small","thermometer","thumbs-down","thumbs-ok","thumbs-up","tick-outline","tick","ticket","time","times-outline","times","trash","tree","upload-outline","upload","user-add-outline","user-add","user-delete-outline","user-delete","user-outline","user","vendor-android","vendor-apple","vendor-microsoft","video-outline","video","volume-down","volume-mute","volume-up","volume","warning-outline","warning","watch","waves-outline","waves","weather-cloudy","weather-downpour","weather-night","weather-partly-sunny","weather-shower","weather-snow","weather-stormy","weather-sunny","weather-windy-cloudy","weather-windy","wi-fi-outline","wi-fi","wine","world-outline","world","zoom-in-outline","zoom-in","zoom-out-outline","zoom-out","zoom-outline"]}]}

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = {"name":"Vuestic","href":"vuestic","prefix":"vuestic-icon","lists":[{"name":"Icons","icons":["comments","components","dashboard","extras","files","forms","graph","auth","image","maps","music","settings","statistics","tables","time","ui-elements","user","video"]}]}

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ui-icons" },
    [_c("router-view", { attrs: { sets: _vm.sets } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d48abcf2", module.exports)
  }
}

/***/ })

});