webpackJsonp([6,23],{

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(601)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(603)
/* template */
var __vue_template__ = __webpack_require__(604)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-211f7859"
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
Component.options.__file = "resources\\assets\\js\\components\\tables\\BadgeColumn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-211f7859", Component.options)
  } else {
    hotAPI.reload("data-v-211f7859", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(729)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(731)
/* template */
var __vue_template__ = __webpack_require__(734)
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
Component.options.__file = "resources\\assets\\js\\components\\tables\\Table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da74ea64", Component.options)
  } else {
    hotAPI.reload("data-v-da74ea64", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(602);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4b2a8e4c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-211f7859\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BadgeColumn.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-211f7859\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BadgeColumn.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.circle[data-v-211f7859] {\n  width: .75rem;\n  height: .75rem;\n  border-radius: 50%;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'badgeColumn',
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  data: function data() {
    return {
      classObject: {
        'badge-warning': this.rowIndex % 6 === 0,
        'badge-primary': this.rowIndex % 6 === 1,
        'badge-danger': this.rowIndex % 6 === 2,
        'badge-info': this.rowIndex % 6 === 3,
        'badge-violet': this.rowIndex % 6 === 4,
        'badge-dark-blue': this.rowIndex % 6 === 5
      }
    };
  }
});

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "circle", class: _vm.classObject })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-211f7859", module.exports)
  }
}

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(730);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("74fbba09", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da74ea64\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da74ea64\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.color-icon-label-table td:first-child {\n  width: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BadgeColumn_vue__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BadgeColumn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__BadgeColumn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition__ = __webpack_require__(733);









__WEBPACK_IMPORTED_MODULE_3_vue___default.a.component('badge-column', __WEBPACK_IMPORTED_MODULE_2__BadgeColumn_vue___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataTable: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable___default.a,
    Widget: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default.a
  },
  name: 'Table',
  data: function data() {
    return {
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: true,
      tableFields: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__["a" /* default */].tableFields,
      itemsPerPage: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition__["a" /* default */].itemsPerPage,
      sortFunctions: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__["a" /* default */].sortFunctions,
      paginationPath: ''
    };
  }
});

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  tableFields: [{
    name: '__component:badge-column',
    title: '',
    dataClass: 'text-center'
  }, {
    name: 'name',
    sortField: 'name'
  }, {
    name: 'email',
    sortField: 'email'
  }, {
    name: 'address.line2',
    title: 'city'
  }, {
    name: 'salary',
    title: 'score'
  }],
  sortFunctions: {
    'name': function name(item1, item2) {
      return item1 >= item2 ? 1 : -1;
    },
    'email': function email(item1, item2) {
      return item1 >= item2 ? 1 : -1;
    }
  }
});

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  itemsPerPage: [{
    value: 5
  }, {
    value: 6
  }, {
    value: 10
  }]
});

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xs-12 col-md-12" },
        [
          _c("widget", { attrs: { headerText: "Basic Table" } }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                { staticClass: "table table-striped first-td-padding" },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("td", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("City")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [
                        _vm._v("Score")
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Matthew McCormick")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("matthew30@mail.ol")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Vancouver")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("93")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Nancy Bo")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nancy@boonweb.com")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Washington")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("280")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Frederiko Lopez")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("fr.lopez@webmail.sp")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Barcelona")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("16")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Stanley Hummer")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("mr_winner_2999@gmail.cb")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Manchester")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("57")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Lendley Wintz")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("9938198146@mailster.io")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Wien")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("113")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Barbara Noz")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("barbaranoz@mailster.io")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Brussels")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("68")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Matthew McCormick")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("matthew30@mail.ol")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Vancouver")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("93")]),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Nancy Bo")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nancy@boonweb.com")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Washington")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("280")]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  ])
                ]
              )
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("widget", { attrs: { headerText: "Colors, Icons, Labels" } }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-striped table-sm color-icon-label-table"
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("City")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [
                        _vm._v("Score")
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v("Matthew McCormick")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("matthew30@mail.ol")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Vancouver")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("93")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v("Nancy Bo")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nancy@boonweb.com")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Washington")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("280")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v("Frederiko Lopez")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("fr.lopez@webmail.sp")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Barcelona")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("16")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-danger" }, [
                      _c("td", [
                        _c(
                          "span",
                          { staticClass: "badge badge-pill badge-danger" },
                          [_vm._v("DANGER")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Stanley Hummer")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("mr_winner_2999@gmail.cb")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Manchester")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("57")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } }, [
                        _c("i", {
                          staticClass:
                            "fa fa-exclamation-triangle icon-right input-icon error-icon"
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-success" }, [
                      _c("td", [
                        _c(
                          "span",
                          { staticClass: "badge badge-pill badge-primary" },
                          [_vm._v("SUCCESS")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Lendley Wintz")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("9938198146@mailster.io")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Wien")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("113")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "valid", attrs: { align: "middle" } },
                        [
                          _c("i", {
                            staticClass:
                              "fa fa-check success-icon icon-right input-icon"
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-warning" }, [
                      _c("td", [
                        _c(
                          "span",
                          { staticClass: "badge badge-pill badge-warning" },
                          [_vm._v("WARNING")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Barbara Noz")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("barbaranoz@mailster.io")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Brussels")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("68")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v("Matthew McCormick")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("matthew30@mail.ol")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Vancouver")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("93")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-info" }, [
                      _c("td", [
                        _c(
                          "span",
                          { staticClass: "badge badge-pill badge-info" },
                          [_vm._v("INFO")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Nancy Bo")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("nancy@boonweb.com")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Washington")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "right" } }, [_vm._v("280")]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "middle" } })
                    ])
                  ])
                ]
              )
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "widget",
            { attrs: { headerText: "Search & Pagination" } },
            [
              _c("data-table", {
                attrs: {
                  apiUrl: _vm.apiUrl,
                  tableFields: _vm.tableFields,
                  itemsPerPage: _vm.itemsPerPage,
                  sortFunctions: _vm.sortFunctions,
                  apiMode: _vm.apiMode,
                  paginationPath: _vm.paginationPath
                }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-da74ea64", module.exports)
  }
}

/***/ })

});