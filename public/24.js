webpackJsonp([24],{

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(725)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(727)
/* template */
var __vue_template__ = __webpack_require__(728)
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
Component.options.__file = "resources\\assets\\js\\components\\statistics\\progress-bars\\ProgressBars.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5104e18a", Component.options)
  } else {
    hotAPI.reload("data-v-5104e18a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(726);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5f6a8efd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5104e18a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./ProgressBars.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5104e18a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./ProgressBars.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.progress-bars div[class^='col'] {\n  margin-bottom: 3.75rem;\n}\n.progress-bars .vuestic-progress-bar .progress.thick {\n  margin-top: calc(1.5rem/2 - .125rem);\n}\n.progress-bars .vuestic-progress-bar .progress.thin {\n  margin-top: .125rem;\n}\n.progress-bars .vertical, .progress-bars .circle {\n  margin-top: 1.25rem;\n  margin-left: .125rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { VuesticWidget: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget_vue___default.a },
  name: 'progress-bars',
  mounted: function mounted() {
    var _this = this;

    var delay = 0;

    var _loop = function _loop(ref) {
      _this.$refs[ref].$data.valueAnimationInterval = _this.valueAnimationInterval;
      var timeout = setTimeout(function () {
        if (!_this.$refs[ref]) {
          clearTimeout(timeout);
          return;
        }
        _this.$refs[ref].$data.value = 100;
      }, delay);
      delay += _this.valueAnimationInterval;
    };

    for (var ref in this.$refs) {
      _loop(ref);
    }
  },
  data: function data() {
    return {
      valueAnimationInterval: 3000
    };
  }
});

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "progress-bars" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "vuestic-widget",
          { staticClass: "col-12", attrs: { headerText: "Progress Bars" } },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Basic\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [_c("vuestic-progress-bar", { ref: "hBasic" })],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Thin\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "hThin",
                      attrs: { size: "thin" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Thick\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "hThick",
                      attrs: { size: "thick" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Basic Vertical\n          "),
                _c("div", { staticClass: "pb-container" }, [
                  _c(
                    "div",
                    [
                      _c("vuestic-progress-bar", {
                        ref: "vBasic",
                        attrs: { type: "vertical" }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Thin Vertical\n          "),
                _c(
                  "div",
                  [
                    _c("vuestic-progress-bar", {
                      ref: "vThin",
                      attrs: { size: "thin", type: "vertical" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Circle\n          "),
                _c(
                  "div",
                  [
                    _c("vuestic-progress-bar", {
                      ref: "circle",
                      attrs: { type: "circle" }
                    })
                  ],
                  1
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "vuestic-widget",
          { staticClass: "col-12", attrs: { headerText: "Colorful Bars" } },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Basic\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "chBasic",
                      attrs: { colorName: "danger" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Thin\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "chThin",
                      attrs: { size: "thin", colorName: "info" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Thick\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "chThick",
                      attrs: { size: "thick", colorName: "warning" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Basic Vertical\n          "),
                _c("div", { staticClass: "pb-container" }, [
                  _c(
                    "div",
                    [
                      _c("vuestic-progress-bar", {
                        ref: "cvBasic",
                        attrs: { type: "vertical", colorName: "success" }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Thin Vertical\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "cvThin",
                      attrs: {
                        size: "thin",
                        type: "vertical",
                        colorName: "black"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 col-12" }, [
                _vm._v("\n          Circle\n          "),
                _c(
                  "div",
                  { staticClass: "pb-container" },
                  [
                    _c("vuestic-progress-bar", {
                      ref: "ccircle",
                      attrs: { type: "circle" }
                    })
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5104e18a", module.exports)
  }
}

/***/ })

});