webpackJsonp([21],{

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(739)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(741)
/* template */
var __vue_template__ = __webpack_require__(742)
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
Component.options.__file = "resources\\assets\\js\\components\\ui\\grid\\Grid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3962606a", Component.options)
  } else {
    hotAPI.reload("data-v-3962606a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(740);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("536ad2f6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3962606a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Grid.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3962606a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.ui-grid .row div[class^=col] {\n  padding: 0;\n}\n.ui-grid .row div[class^=col] div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    margin: .5rem .25rem;\n    min-height: 3rem;\n    color: #fff;\n    background-color: #4ae387;\n    border-radius: 0.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'grid'
});

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ui-grid row" },
    [
      _c(
        "vuestic-widget",
        { staticClass: "col-12", attrs: { headerText: "Fixed Grid" } },
        [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(3, function(i) {
              return _c("div", { staticClass: "col" }, [
                _c("div", [_vm._v(".col")])
              ])
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(6, function(i) {
              return _c("div", { staticClass: "col" }, [
                _c("div", [_vm._v(".col")])
              ])
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(12, function(i) {
              return _c("div", { staticClass: "col" }, [
                _c("div", [_vm._v(".col")])
              ])
            })
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vuestic-widget",
        { staticClass: "col-12", attrs: { headerText: "Desktop Grid" } },
        [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(3, function(i) {
              return _c("div", { staticClass: "col-md-4" }, [
                _c("div", [_vm._v(".col-md-4")])
              ])
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(6, function(i) {
              return _c("div", { staticClass: "col-md-2" }, [
                _c("div", [_vm._v(".col-md-2")])
              ])
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(12, function(i) {
              return _c("div", { staticClass: "col-md-1" }, [
                _c("div", [_vm._v(".col-md-1")])
              ])
            })
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vuestic-widget",
        {
          staticClass: "col-12",
          attrs: { headerText: "Mobile and Desktop Grid" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 col-sm-12" }, [
              _c("div", [_vm._v(".col-md-3 .col-sm-8")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3 col-sm-8" }, [
              _c("div", [_vm._v(".col-md-3 .col-sm-8")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9 col-sm-4" }, [
              _c("div", [_vm._v(".col-md-9 .col-sm-4")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4 col-sm-2" }, [
              _c("div", [_vm._v(".col-md-4 .col-sm-2")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-sm-8" }, [
              _c("div", [_vm._v(".col-md-4 .col-sm-8")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-sm-2" }, [
              _c("div", [_vm._v(".col-md-4 .col-sm-2")])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vuestic-widget",
        { staticClass: "col-12", attrs: { headerText: "Offsets" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 offset-md-6 col-sm-6" }, [
              _c("div", [_vm._v(".col-md-6 .offset-md-6 .col-sm-6")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 offset-md-3" }, [
              _c("div", [_vm._v(".col-md-6 .offset-md-3")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-4" }, [
              _c("div", [_vm._v(".col-4")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 offset-4" }, [
              _c("div", [_vm._v(".col-4 .offset-8")])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3962606a", module.exports)
  }
}

/***/ })

});