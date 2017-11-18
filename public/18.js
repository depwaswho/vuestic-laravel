webpackJsonp([18],{

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(768)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(770)
/* template */
var __vue_template__ = __webpack_require__(771)
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
Component.options.__file = "resources\\assets\\js\\components\\ui\\typography\\Typography.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3969792b", Component.options)
  } else {
    hotAPI.reload("data-v-3969792b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(769);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("fab7313e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3969792b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Typography.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3969792b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Typography.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.ui-typography .typo-articles {\n  margin-bottom: 6.25rem;\n  width: 90%;\n}\n.ui-typography .widget-body {\n  padding: 3.75rem 4.7rem 0 2.2rem !important;\n}\n.ui-typography .col-md-6 {\n  padding-right: 0;\n}\n.ui-typography .vue-lists ul, .ui-typography ol {\n  width: 85%;\n}\n", ""]);

// exports


/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'typography'
});

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ui-typography" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("vuestic-widget", [
            _c("div", { staticClass: "typo-headers" }, [
              _c("h1", [_vm._v("Very Important Information H1")]),
              _vm._v(" "),
              _c("h2", [_vm._v("Sections & Modal Names H2")]),
              _vm._v(" "),
              _c("h3", [_vm._v("Articles & Block Headings H3")]),
              _vm._v(" "),
              _c("h4", [_vm._v("Random Tiny Heading H4")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "typo-articles" }, [
              _c("p", [
                _vm._v(
                  "\n            The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, "
                ),
                _c("span", { staticClass: "vue-green-text" }, [
                  _vm._v("woodlands")
                ]),
                _vm._v(", thorny scrublands, "),
                _c("span", { staticClass: "vue-clickable-text" }, [
                  _vm._v("mountains")
                ]),
                _vm._v(
                  "\n            , and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain "
                ),
                _c("span", { staticClass: "vue-highlighted-text" }, [
                  _vm._v("highlighted text")
                ]),
                _vm._v(" zebra are endangered.")
              ]),
              _vm._v(" "),
              _c("blockquote", { staticClass: "blockquote" }, [
                _c("p", [
                  _vm._v(
                    "\n              Blockquotes. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins. "
                  )
                ]),
                _vm._v(" "),
                _c("footer", { staticClass: "blockquote-footer" }, [
                  _vm._v("Jefferey Lebowski")
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            lthough zebra species may have overlapping ranges, they do not interbreed. In captivity, plains zebras have been crossed with mountain zebras. The hybrid foals "
                ),
                _c("span", { staticClass: "vue-selected-text" }, [
                  _vm._v("selected text")
                ]),
                _vm._v(" lacked a dewlap and resembled their\n          ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vue-lists" }, [
              _c("h2", [_vm._v("Lists")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h3", [_vm._v("Unordered")]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "vue-unordered" }, [
                    _c("li", [
                      _vm._v(
                        "\n                  A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "The more traditional of these (1 and 2, below) relate to camouflage."
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "The vertical striping may help the zebra hide in the grass by disrupting its outline."
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "\n                  In addition, even at moderate distances, the striking striping merges to an apparent grey.\n                  "
                      ),
                      _c("ul", { staticClass: "vue-list-inner" }, [
                        _c("li", [
                          _vm._v(
                            "However, the camouflage has been contested with arguments that most of a zebra's predator."
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Such as lions and hyenas cannot see well at a distance."
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "More likely to have smelled or heard a zebra."
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "Before seeing it from a distance, especially at night."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 text-left" }, [
                  _c("div", [
                    _c("h3", [_vm._v("Ordered")]),
                    _vm._v(" "),
                    _c("ol", { staticClass: "vue-ordered" }, [
                      _c("li", [
                        _vm._v(
                          "\n                    A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "The more traditional of these (1 and 2, below) relate to camouflage."
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "The vertical striping may help the zebra hide in the grass by disrupting its outline."
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                    In addition, even at moderate distances, the striking striping merges to an apparent grey.\n                    "
                        ),
                        _c("ul", { staticClass: "vue-list-inner" }, [
                          _c("li", [
                            _vm._v(
                              "However, the camouflage has been contested with arguments that most of a zebra's predator.\n                      "
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Such as lions and hyenas cannot see well at a distance."
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "More likely to have smelled or heard a zebra."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Before seeing it from a distance, especially at night."
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vue-misc" }, [
              _c("h2", [_vm._v("Misc")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h3", [_vm._v("Address")]),
                  _vm._v(" "),
                  _c("address", [
                    _c("strong", [_vm._v("SJØNNA")]),
                    _c("br"),
                    _vm._v("\n                Nezalezhnasti Ave, 13 - 28A"),
                    _c("br"),
                    _vm._v("\n                Minsk, Belarus, 220141"),
                    _c("br"),
                    _vm._v("\n                +375 29 319-53-98"),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v("Vasili Savitski")]),
                    _c("br"),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "mailto" } }, [
                      _vm._v("hello@sjonja.by")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("h3", [_vm._v("Well")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "well" }, [
                    _vm._v(
                      "\n                Zebras have excellent eyesight. It is believed that they can see in color. Like most ungulates, the zebra's eyes are on the sides of its head, giving it a wide field of view.\n              "
                    )
                  ])
                ])
              ])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3969792b", module.exports)
  }
}

/***/ })

});