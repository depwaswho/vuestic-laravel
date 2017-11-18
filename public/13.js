webpackJsonp([13],{

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

/***/ })

});