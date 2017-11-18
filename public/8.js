webpackJsonp([8,23],{

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

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(631)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(633)
/* template */
var __vue_template__ = __webpack_require__(636)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79f4e9d4"
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
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\data-visualisation-tab\\DataVisualisation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79f4e9d4", Component.options)
  } else {
    hotAPI.reload("data-v-79f4e9d4", Component.options)
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

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("157caf9a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79f4e9d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DataVisualisation.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79f4e9d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DataVisualisation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.chart-container[data-v-79f4e9d4] {\n  padding: 0 2rem;\n  height: 24rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DonutChartData__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_datatable_VuesticDataTable_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_datatable_VuesticDataTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_datatable_VuesticDataTable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tables_BadgeColumn_vue__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tables_BadgeColumn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tables_BadgeColumn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_local_data__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fields_definition__ = __webpack_require__(635);










__WEBPACK_IMPORTED_MODULE_3_vue___default.a.component('badge-column', __WEBPACK_IMPORTED_MODULE_4__tables_BadgeColumn_vue___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'data-visualisation-tab',

  components: {
    DataTable: __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_datatable_VuesticDataTable_vue___default.a,
    VuesticChart: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue___default.a,
    DonutChartData: __WEBPACK_IMPORTED_MODULE_1__DonutChartData__["a" /* default */]
  },

  data: function data() {
    return {
      donutChartData: __WEBPACK_IMPORTED_MODULE_1__DonutChartData__["a" /* default */],
      apiMode: false,
      sortFunctions: __WEBPACK_IMPORTED_MODULE_6__fields_definition__["a" /* default */].sortFunctions,
      tableData: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_local_data__["a" /* default */].data,
      onEachSide: 1,
      tableFields: __WEBPACK_IMPORTED_MODULE_6__fields_definition__["a" /* default */].tableFields,
      paginationPath: 'pagination',
      itemsPerPage: [{
        value: 5
      }, {
        value: 6
      }]
    };
  }
});

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(36);


var palette = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['North America', 'South America', 'Australia'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.warning, palette.primary],
    data: [3000, 6000, 1500]
  }]
});

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  tableFields: [{
    name: '__component:badge-column',
    title: '',
    dataClass: 'text-center'
  }, {
    name: 'name',
    title: 'user',
    sortField: 'name'
  }, {
    name: 'salary',
    title: 'score'
  }],
  sortFunctions: {
    'name': function name(item1, item2) {
      return item1 >= item2 ? 1 : -1;
    }
  }
});

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "data-visualisation-tab dashboard-tab" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c(
          "div",
          { staticClass: "chart-container" },
          [
            _c("vuestic-chart", {
              attrs: { data: _vm.donutChartData, type: "donut" }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("data-table", {
            attrs: {
              apiMode: _vm.apiMode,
              data: _vm.tableData,
              tableFields: _vm.tableFields,
              itemsPerPage: _vm.itemsPerPage,
              onEachSide: _vm.onEachSide,
              sortFunctions: _vm.sortFunctions,
              paginationPath: _vm.paginationPath
            }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-79f4e9d4", module.exports)
  }
}

/***/ })

});