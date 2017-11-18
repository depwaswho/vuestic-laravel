webpackJsonp([28],{

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(637)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(639)
/* template */
var __vue_template__ = __webpack_require__(640)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0392e38f"
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
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\DashboardBottomWidgets.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0392e38f", Component.options)
  } else {
    hotAPI.reload("data-v-0392e38f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(638);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("34716fe0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0392e38f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DashboardBottomWidgets.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0392e38f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DashboardBottomWidgets.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.bottom-widgets > div[class^='col'] > div[data-v-0392e38f] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_feed_VuesticFeed_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_feed_VuesticFeed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_feed_VuesticFeed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_social_news_VuesticSocialNews_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_social_news_VuesticSocialNews_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_social_news_VuesticSocialNews_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard-bottom-widgets',
  components: {
    VuesticSocialNews: __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_social_news_VuesticSocialNews_vue___default.a,
    VuesticFeed: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_feed_VuesticFeed_vue___default.a,
    VuesticWidget: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default.a
  },
  data: function data() {
    return {
      posts: [{
        name: 'Irina Myatelskaya',
        text: 'joined the network',
        photoURL: 'http://i.imgur.com/VuTDC8u.png'
      }, {
        name: 'Andrei Hrabouski',
        text: 'has just started a live video',
        photoURL: 'http://i.imgur.com/W3mGrmW.png'
      }, {
        name: 'Evan You',
        text: 'joined the network',
        photoURL: 'http://i.imgur.com/D7DOGBH.jpg'
      }],
      news: [{
        photoURL: 'http://i.imgur.com/PiTDDcA.png'
      }, {
        photoURL: 'http://i.imgur.com/M6GugaM.png'
      }, {
        photoURL: 'http://i.imgur.com/vEy3fRU.png'
      }, {
        photoURL: 'http://i.imgur.com/Xrywphx.png'
      }, {
        photoURL: 'http://i.imgur.com/dqVtQGY.png'
      }, {
        photoURL: 'http://i.imgur.com/qP7rTCy.png'
      }, {
        photoURL: 'http://i.imgur.com/6YLsM43.png'
      }, {
        photoURL: 'http://i.imgur.com/9PAOx55.png'
      }, {
        photoURL: 'http://i.imgur.com/mVpc04D.png'
      }, {
        photoURL: 'http://i.imgur.com/WdbTSLn.png'
      }, {
        photoURL: 'http://i.imgur.com/ZXRIHfk.png'
      }]
    };
  }
});

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row bottom-widgets" }, [
    _c(
      "div",
      { staticClass: "col-md-6 d-flex" },
      [
        _c(
          "vuestic-widget",
          { staticClass: "no-h-padding no-v-padding" },
          [_c("vuestic-feed", { attrs: { initialPosts: _vm.posts } })],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6 d-flex" },
      [
        _c(
          "vuestic-widget",
          { staticClass: "business-posts" },
          [
            _c("vuestic-social-news", {
              staticClass: "vuestic-social-news",
              attrs: { news: _vm.news, url: "http://instagram.com/smartapant" }
            })
          ],
          1
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
    require("vue-hot-reload-api")      .rerender("data-v-0392e38f", module.exports)
  }
}

/***/ })

});