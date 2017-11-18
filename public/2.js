webpackJsonp([2,17,26],{

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(612)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(614)
/* template */
var __vue_template__ = __webpack_require__(616)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50ef7bdf"
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
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\setup-profile-tab\\SetupProfileTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50ef7bdf", Component.options)
  } else {
    hotAPI.reload("data-v-50ef7bdf", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(617)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(619)
/* template */
var __vue_template__ = __webpack_require__(620)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-06c78c00"
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
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\features-tab\\FeaturesTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06c78c00", Component.options)
  } else {
    hotAPI.reload("data-v-06c78c00", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(686)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(688)
/* template */
var __vue_template__ = __webpack_require__(689)
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
Component.options.__file = "resources\\assets\\js\\components\\extra\\Extra.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3d2ccc6", Component.options)
  } else {
    hotAPI.reload("data-v-f3d2ccc6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(613);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("21642980", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50ef7bdf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./SetupProfileTab.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50ef7bdf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./SetupProfileTab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.form-group[data-v-50ef7bdf] {\n  min-width: 200px;\n  max-width: 360px;\n  width: 80%;\n}\n@media (min-width: 768px) {\n.wizard-completed-tab[data-v-50ef7bdf] {\n    margin-top: -3.125rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CountriesList__ = __webpack_require__(615);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'setup-profile-tab',
  components: {
    VuesticWizard: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default.a,
    VuesticSimpleSelect: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default.a
  },
  props: {
    wizardType: {
      default: 'rich'
    }
  },
  data: function data() {
    var _this = this;

    return {
      steps: [{
        label: 'Step 1. Name',
        slot: 'page1',
        onNext: function onNext() {
          _this.validateFormField('name');
        },
        isValid: function isValid() {
          return _this.isFormFieldValid('name');
        }
      }, {
        label: 'Step 2. Country',
        slot: 'page2',
        onNext: function onNext() {
          _this.$refs.selectedCountrySelect.validate();
        },
        isValid: function isValid() {
          return _this.$refs.selectedCountrySelect.isValid();
        }
      }, {
        label: 'Step 3. Confirm',
        slot: 'page3'
      }],
      name: '',
      selectedCountry: '',
      countriesList: __WEBPACK_IMPORTED_MODULE_2__CountriesList__["a" /* default */]
    };
  },

  methods: {
    isFormFieldValid: function isFormFieldValid(field) {
      var isValid = false;
      if (this.formFields[field]) {
        isValid = this.formFields[field].validated && this.formFields[field].valid;
      }
      return isValid;
    },
    validateFormField: function validateFormField(fieldName) {
      this.$validator.validate(fieldName, this[fieldName]);
    }
  }
});

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, Democratic People\'s Republic of', 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao, People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe']);

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "setup-profile-tab dashboard-tab" },
    [
      _c(
        "vuestic-wizard",
        {
          attrs: {
            steps: _vm.steps,
            "wizard-layout": "vertical",
            "wizard-type": _vm.wizardType
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "form-wizard-tab-content",
              attrs: { slot: "page1" },
              slot: "page1"
            },
            [
              _c("h4", [_vm._v("Type your name")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group with-icon-right",
                  class: {
                    "has-error": _vm.errors.has("name"),
                    valid: _vm.isFormFieldValid("name")
                  }
                },
                [
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name,
                          expression: "name"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      attrs: {
                        type: "text",
                        name: "name",
                        required: "required"
                      },
                      domProps: { value: _vm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("i", {
                      staticClass:
                        "fa fa-exclamation-triangle error-icon icon-right input-icon"
                    }),
                    _vm._v(" "),
                    _c("i", {
                      staticClass:
                        "fa fa-check valid-icon icon-right input-icon"
                    }),
                    _vm._v(" "),
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Name")
                    ]),
                    _c("i", { staticClass: "bar" }),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("name"),
                            expression: "errors.has('name')"
                          }
                        ],
                        staticClass: "help text-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("name")))]
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "form-wizard-tab-content",
              attrs: { slot: "page2" },
              slot: "page2"
            },
            [
              _c("h4", [_vm._v("Select your country")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                )
              ]),
              _vm._v(" "),
              _c("vuestic-simple-select", {
                ref: "selectedCountrySelect",
                attrs: {
                  label: "Select country",
                  name: "country",
                  required: true,
                  options: _vm.countriesList
                },
                model: {
                  value: _vm.selectedCountry,
                  callback: function($$v) {
                    _vm.selectedCountry = $$v
                  },
                  expression: "selectedCountry"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "form-wizard-tab-content",
              attrs: { slot: "page3" },
              slot: "page3"
            },
            [
              _c("h4", [_vm._v("Confirm selection")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  '\n        Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n      '
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "form-wizard-tab-content wizard-completed-tab",
              attrs: { slot: "wizardCompleted" },
              slot: "wizardCompleted"
            },
            [
              _c("h4", [_vm._v("Wizard completed!")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  '\n        Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n      '
                )
              ])
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-50ef7bdf", module.exports)
  }
}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("16d27ead", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06c78c00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./FeaturesTab.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06c78c00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./FeaturesTab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.overview-item[data-v-06c78c00] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 55px;\n  margin-bottom: 3rem;\n  padding-right: 1rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.overview-item .overview-icon-container[data-v-06c78c00] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-width: 85px;\n    max-width: 85px;\n    height: 100%;\n}\n@media (max-width: 575px) {\n.overview-row[data-v-06c78c00] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n}\n.overview-col[data-v-06c78c00]:first-child {\n  margin-left: 2rem;\n}\n@media (max-width: 991px) {\n.overview-col[data-v-06c78c00]:first-child {\n      margin-left: 0;\n}\n}\n.explore-btn[data-v-06c78c00] {\n  margin-top: 6rem;\n  margin-bottom: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'features-tab'
});

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "overview-tab dashboard-tab" }, [
      _c(
        "div",
        {
          staticClass:
            "d-flex overview-row flex-row w-100 justify-content-sm-around justify-content-xs-start"
        },
        [
          _c("div", { staticClass: "overview-col" }, [
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-vue" })
              ]),
              _vm._v("\n        Built with Vue.js framework\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-free" })
              ]),
              _vm._v("\n        Absolutely free for everyone\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-fresh" })
              ]),
              _vm._v("\n        Fresh and crisp design\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "overview-col" }, [
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-responsive" })
              ]),
              _vm._v("\n        Responsive and optimized for mobile\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-rich" })
              ]),
              _vm._v("\n        Tons of useful components\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-clean-code" })
              ]),
              _vm._v("\n        Completely jQuery free\n      ")
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06c78c00", module.exports)
  }
}

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  hex2rgb: function hex2rgb(hex, opacity) {
    hex = (hex + '').trim();

    var rgb = null;
    var match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);

    if (!match) {
      return null;
    }

    rgb = {};

    hex = match[1];

    if (hex.length === 6) {
      rgb.r = parseInt(hex.substring(0, 2), 16);
      rgb.g = parseInt(hex.substring(2, 4), 16);
      rgb.b = parseInt(hex.substring(4, 6), 16);
    } else if (hex.length === 3) {
      rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16);
      rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
      rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);
    }

    rgb.css = 'rgb' + (opacity ? 'a' : '') + '(';
    rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b;
    rgb.css += (opacity ? ',' + opacity : '') + ')';

    return rgb;
  }
});

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utils__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store___ = __webpack_require__(36);




var palette = __WEBPACK_IMPORTED_MODULE_1__store___["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Debit',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].hex2rgb(palette.primary, 0.6).css,
    borderColor: palette.transparent,
    data: [40, 39, 10, 40, 39, 80, 40]
  }, {
    label: 'Credit',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].hex2rgb(palette.info, 0.6).css,
    borderColor: palette.transparent,
    data: [50, 20, 70, 30, 10, 5, 70]
  }]
});

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(687);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6f60220d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3d2ccc6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Extra.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3d2ccc6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Extra.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.tabs .overview-tab .explore-row {\n  display: none !important;\n}\n.profile-card-widget, .chat-widget {\n  width: 100%;\n}\n.profile-card-widget .widget-body, .chat-widget .widget-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.profile-card-widget .widget-body > div, .chat-widget .widget-body > div {\n      width: 100%;\n}\n.bottom-widgets > div[class^='col'] > div {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_tabs_VuesticTabs_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_tabs_VuesticTabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_tabs_VuesticTabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_alert_VuesticAlert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_alert_VuesticAlert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_alert_VuesticAlert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vuestic_components_vuestic_chat_VuesticChat__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vuestic_components_vuestic_chat_VuesticChat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_vuestic_components_vuestic_chat_VuesticChat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_feed_VuesticFeed_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_feed_VuesticFeed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_feed_VuesticFeed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_social_news_VuesticSocialNews_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_social_news_VuesticSocialNews_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_social_news_VuesticSocialNews_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_features_tab_FeaturesTab_vue__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_features_tab_FeaturesTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__dashboard_features_tab_FeaturesTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_setup_profile_tab_SetupProfileTab_vue__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_setup_profile_tab_SetupProfileTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__dashboard_setup_profile_tab_SetupProfileTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statistics_charts_LineChartData__ = __webpack_require__(641);












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'extra',
  components: {
    SetupProfileTab: __WEBPACK_IMPORTED_MODULE_7__dashboard_setup_profile_tab_SetupProfileTab_vue___default.a,
    OverviewTab: __WEBPACK_IMPORTED_MODULE_6__dashboard_features_tab_FeaturesTab_vue___default.a,
    VuesticSocialNews: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_social_news_VuesticSocialNews_vue___default.a,
    VuesticFeed: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_feed_VuesticFeed_vue___default.a,
    VuesticTabs: __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_tabs_VuesticTabs_vue___default.a,
    VuesticProfileCard: __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue___default.a,
    VuesticAlert: __WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_alert_VuesticAlert___default.a,
    VuesticChat: __WEBPACK_IMPORTED_MODULE_3__components_vuestic_components_vuestic_chat_VuesticChat___default.a
  },
  data: function data() {
    return {
      chatMessages: [{
        text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
        yours: false
      }, {
        text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
        yours: true
      }, {
        text: 'Sounds great! See you later!',
        yours: false
      }, {
        text: 'Should I bring a lightbox with me?',
        yours: true
      }, {
        text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
        yours: false
      }, {
        text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
        yours: true
      }],
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
      }],
      chartData: __WEBPACK_IMPORTED_MODULE_8__statistics_charts_LineChartData__["a" /* default */]
    };
  }
});

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "extra" },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c(
              "vuestic-widget",
              { attrs: { headerText: "Alerts" } },
              [
                _c(
                  "vuestic-alert",
                  { attrs: { type: "success", withCloseBtn: true } },
                  [
                    _c(
                      "span",
                      { staticClass: "badge badge-pill badge-success" },
                      [_vm._v("SUCCESS")]
                    ),
                    _vm._v(
                      "\n          You successfully read this important alert message.\n          "
                    ),
                    _c("i", { staticClass: "fa fa-close alert-close" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vuestic-alert",
                  { attrs: { type: "info", withCloseBtn: true } },
                  [
                    _c("span", { staticClass: "badge badge-pill badge-info" }, [
                      _vm._v("INFO")
                    ]),
                    _vm._v(
                      "\n          This alert needs your attention, but it's not super important.\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vuestic-alert",
                  { attrs: { type: "warning", withCloseBtn: true } },
                  [
                    _c(
                      "span",
                      { staticClass: "badge badge-pill badge-warning" },
                      [_vm._v("WARNING")]
                    ),
                    _vm._v(
                      "\n          Better check yourself, you're not looking too good.\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vuestic-alert",
                  { attrs: { type: "danger", withCloseBtn: true } },
                  [
                    _c(
                      "span",
                      { staticClass: "badge badge-pill badge-danger" },
                      [_vm._v("DANGER")]
                    ),
                    _vm._v(
                      "\n          Change a few things up and try submitting again.\n        "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "vuestic-widget",
        { staticClass: "no-v-padding" },
        [
          _c(
            "vuestic-tabs",
            {
              staticClass: "tabs",
              attrs: { names: ["Chart", "Setup Profile", "Overview"] }
            },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex justify-content-center",
                  attrs: { slot: "Overview" },
                  slot: "Overview"
                },
                [_c("overview-tab")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex justify-content-center",
                  attrs: { slot: "Chart" },
                  slot: "Chart"
                },
                [
                  _c("vuestic-chart", {
                    attrs: { data: _vm.chartData, type: "line" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex justify-content-center",
                  attrs: { slot: "Setup Profile" },
                  slot: "Setup Profile"
                },
                [_c("setup-profile-tab", { attrs: { wizardType: "simple" } })],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4 d-flex" },
          [
            _c(
              "vuestic-widget",
              {
                staticClass: "profile-card-widget",
                attrs: { headerText: "Profile Card" }
              },
              [
                _c("vuestic-profile-card", {
                  attrs: {
                    name: "Veronique Lee",
                    location: "Malaga, Spain",
                    photoSource: "http://i.imgur.com/NLrdqsk.png",
                    social: {
                      twitter: "twitter.com",
                      facebook: "facebook.com",
                      instagram: "instagram.com"
                    }
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8 d-flex" },
          [
            _c(
              "vuestic-widget",
              { staticClass: "chat-widget", attrs: { headerText: "Chat" } },
              [
                _c("vuestic-chat", {
                  model: {
                    value: _vm.chatMessages,
                    callback: function($$v) {
                      _vm.chatMessages = $$v
                    },
                    expression: "chatMessages"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row bottom-widgets" }, [
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
                  attrs: {
                    news: _vm.news,
                    url: "http://instagram.com/smartapant"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-f3d2ccc6", module.exports)
  }
}

/***/ })

});