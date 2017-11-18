webpackJsonp([19],{

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(764)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(766)
/* template */
var __vue_template__ = __webpack_require__(767)
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
Component.options.__file = "resources\\assets\\js\\components\\ui\\modals\\Modals.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ef5f2cb", Component.options)
  } else {
    hotAPI.reload("data-v-6ef5f2cb", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(765);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("68fb2f90", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ef5f2cb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Modals.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ef5f2cb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Modals.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.modals-page .modals-list .btn {\n  margin-right: 20px;\n  margin-bottom: 25px;\n}\n", ""]);

// exports


/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_modal_VuesticModal__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_modal_VuesticModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_modal_VuesticModal__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modals',
  components: {
    Widget: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default.a,
    Modal: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_modal_VuesticModal___default.a
  },
  data: function data() {
    return {
      show: true
    };
  },

  methods: {
    showSmallModal: function showSmallModal() {
      this.$refs.smallModal.open();
    },
    showMediumModal: function showMediumModal() {
      this.$refs.mediumModal.open();
    },
    showLargeModal: function showLargeModal() {
      this.$refs.largeModal.open();
    },
    showStaticModal: function showStaticModal() {
      this.$refs.staticModal.open();
    }
  }
});

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modals-page" },
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c(
            "widget",
            {
              staticClass: "col-sm-12 modals-list larger-padding",
              attrs: { "header-text": "Modals" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      _vm.showSmallModal()
                    }
                  }
                },
                [_vm._v("\n        SMALL\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      _vm.showMediumModal()
                    }
                  }
                },
                [_vm._v("\n        MEDIUM\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  on: {
                    click: function($event) {
                      _vm.showLargeModal()
                    }
                  }
                },
                [_vm._v("\n        LARGE\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function($event) {
                      _vm.showStaticModal()
                    }
                  }
                },
                [_vm._v("\n        STATIC\n      ")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          ref: "smallModal",
          attrs: { show: _vm.show, small: true, cancelClass: "none" },
          on: {
            "update:show": function($event) {
              _vm.show = $event
            }
          }
        },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v("Small modal")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(
              "\n      There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra\n      and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus\n      Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more\n      horse-like. All three belong to the genus Equus, along with other living equids.\n    "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          ref: "mediumModal",
          attrs: { show: _vm.show },
          on: {
            "update:show": function($event) {
              _vm.show = $event
            }
          }
        },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v("Medium modal")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(
              "\n      There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra\n      and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus\n      Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more\n      horse-like. All three belong to the genus Equus, along with other living equids.\n    "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          ref: "largeModal",
          attrs: { show: _vm.show, large: true },
          on: {
            "update:show": function($event) {
              _vm.show = $event
            }
          }
        },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v("Large Modal")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(
              "\n      There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra\n      and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus\n      Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more\n      horse-like. All three belong to the genus Equus, along with other living equids.\n    "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          ref: "staticModal",
          attrs: {
            show: _vm.show,
            small: true,
            force: true,
            cancelClass: "none",
            okText: "CLOSE"
          },
          on: {
            "update:show": function($event) {
              _vm.show = $event
            }
          }
        },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v("Static Modal")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(
              "\n      This is a static modal, backdrop click will not close it.\n    "
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-6ef5f2cb", module.exports)
  }
}

/***/ })

});