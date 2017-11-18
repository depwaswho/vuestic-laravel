webpackJsonp([20],{

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(760)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(762)
/* template */
var __vue_template__ = __webpack_require__(763)
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
Component.options.__file = "resources\\assets\\js\\components\\ui\\icons\\SetsList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c91f5a9c", Component.options)
  } else {
    hotAPI.reload("data-v-c91f5a9c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(761);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("41cb59a7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c91f5a9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./SetsList.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c91f5a9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./SetsList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.sets-list .small-set {\n  margin: 0 0 1.5rem;\n}\n.sets-list .small-set .btn {\n    width: 13.75rem;\n    padding-left: 0;\n    padding-right: 0;\n    text-align: center;\n}\n.sets-list .small-set .set-content {\n    background-color: #eee;\n    height: 100%;\n    position: relative;\n}\n.sets-list .small-set .set-content > div {\n      padding: 1rem;\n}\n.sets-list .small-set .set-content > div div[class^=\"col\"] {\n        padding: 0;\n        margin: 1rem 0;\n}\n.sets-list .small-set .set-content > div div[class^=\"col\"] .icon {\n          font-size: .85rem;\n          text-align: center;\n}\n.sets-list .small-set .set-content .overlay {\n      padding: 0;\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      /*visibility: hidden;*/\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      z-index: 2;\n}\n", ""]);

// exports


/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'iconsList',
  props: ['sets'],
  methods: {
    iconClass: function iconClass(set, icon) {
      return set.prefix + ' ' + set.prefix + '-' + icon;
    }
  }
});

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sets-list row" },
    [
      _c(
        "vuestic-widget",
        { staticClass: "col-12", attrs: { headerText: "Icons" } },
        [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.sets, function(set) {
              return _c("div", { staticClass: "small-set col-lg-6" }, [
                _c("div", { staticClass: "set-content" }, [
                  _c(
                    "div",
                    { staticClass: "overlay" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { path: set.href }, append: "" } },
                        [
                          _c("div", { staticClass: "btn btn-primary btn" }, [
                            _vm._v(_vm._s(set.name.toUpperCase()))
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm._l(set.filteredLists, function(filteredList) {
                        return [
                          filteredList.length !== 2
                            ? _c(
                                "div",
                                { staticClass: "row" },
                                _vm._l(filteredList, function(icon) {
                                  return _c(
                                    "div",
                                    { staticClass: "col-sm-2" },
                                    [
                                      _c("div", { staticClass: "icon" }, [
                                        _c("i", {
                                          class: _vm.iconClass(set, icon),
                                          attrs: { "aria-hidden": "true" }
                                        })
                                      ])
                                    ]
                                  )
                                })
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          filteredList.length === 2
                            ? _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-sm-2" }, [
                                  _c("div", { staticClass: "icon" }, [
                                    _c("i", {
                                      class: _vm.iconClass(
                                        set,
                                        filteredList[0]
                                      ),
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-8" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-2" }, [
                                  _c("div", { staticClass: "icon" }, [
                                    _c("i", {
                                      class: _vm.iconClass(
                                        set,
                                        filteredList[1]
                                      ),
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ])
                                ])
                              ])
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  )
                ])
              ])
            })
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c91f5a9c", module.exports)
  }
}

/***/ })

});