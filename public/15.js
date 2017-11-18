webpackJsonp([15],{

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(694)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(696)
/* template */
var __vue_template__ = __webpack_require__(697)
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
Component.options.__file = "resources\\assets\\js\\components\\forms\\form-wizard\\FormWizard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dcd2edb", Component.options)
  } else {
    hotAPI.reload("data-v-6dcd2edb", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, Democratic People\'s Republic of', 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao, People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe']);

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(695);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("41cd4c74", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dcd2edb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./FormWizard.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dcd2edb\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./FormWizard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.widget.simple-vertical-wizard-widget .widget-body {\n  padding: 0 1.5625rem;\n}\n@media (max-width: 767px) {\n.widget.simple-vertical-wizard-widget .widget-body {\n      padding: 1.5625rem 0;\n}\n}\n.form-wizard-page .form-group {\n  min-width: 200px;\n  max-width: 360px;\n  width: 80%;\n}\n", ""]);

// exports


/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CountriesList__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'form-wizard',
  components: {
    VuesticWizard: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default.a,
    VuesticSimpleSelect: __WEBPACK_IMPORTED_MODULE_2__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default.a
  },
  data: function data() {
    var _this = this;

    return {
      hsSteps: [{
        label: 'Step 1. Name',
        slot: 'page1',
        onNext: function onNext() {
          _this.validateFormField('hsName');
        },
        isValid: function isValid() {
          return _this.isFormFieldValid('hsName');
        }
      }, {
        label: 'Step 2. Country',
        slot: 'page2',
        onNext: function onNext() {
          _this.$refs.hsCountrySelect.validate();
        },
        isValid: function isValid() {
          return _this.$refs.hsCountrySelect.isValid();
        }
      }, {
        label: 'Step 3. Confirm',
        slot: 'page3'
      }],
      hrSteps: [{
        label: 'Step 1. Name',
        slot: 'page1',
        onNext: function onNext() {
          _this.validateFormField('hrName');
        },
        isValid: function isValid() {
          return _this.isFormFieldValid('hrName');
        }
      }, {
        label: 'Step 2. Country',
        slot: 'page2',
        onNext: function onNext() {
          _this.$refs.hrCountrySelect.validate();
        },
        isValid: function isValid() {
          return _this.$refs.hrCountrySelect.isValid();
        }
      }, {
        label: 'Step 3. Confirm',
        slot: 'page3'
      }],
      vrSteps: [{
        label: 'Step 1. Name',
        slot: 'page1',
        onNext: function onNext() {
          _this.validateFormField('vrName');
        },
        isValid: function isValid() {
          return _this.isFormFieldValid('vrName');
        }
      }, {
        label: 'Step 2. Country',
        slot: 'page2',
        onNext: function onNext() {
          _this.$refs.vrCountrySelect.validate();
        },
        isValid: function isValid() {
          return _this.$refs.vrCountrySelect.isValid();
        }
      }, {
        label: 'Step 3. Confirm',
        slot: 'page3'
      }],
      vsSteps: [{
        label: 'Step 1. Name',
        slot: 'page1',
        onNext: function onNext() {
          _this.validateFormField('vsName');
        },
        isValid: function isValid() {
          return _this.isFormFieldValid('vsName');
        }
      }, {
        label: 'Step 2. Country',
        slot: 'page2',
        onNext: function onNext() {
          _this.$refs.vsCountrySelect.validate();
        },
        isValid: function isValid() {
          return _this.$refs.vsCountrySelect.isValid();
        }
      }, {
        label: 'Step 3. Confirm',
        slot: 'page3'
      }],
      hsName: '',
      hsCountry: '',
      hrName: '',
      hrCountry: '',
      vrName: '',
      vrCountry: '',
      vsName: '',
      vsCountry: '',
      email: '',
      countriesList: __WEBPACK_IMPORTED_MODULE_1__CountriesList__["a" /* default */],
      chosenCountry: ''
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

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-wizard-page" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "no-h-padding",
              attrs: { headerText: "Simple Wizard" }
            },
            [
              _c("vuestic-wizard", { attrs: { steps: _vm.hsSteps } }, [
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "page1" },
                    slot: "page1"
                  },
                  [
                    _c("p", [
                      _vm._v(
                        'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group with-icon-right",
                        class: {
                          "has-error": _vm.errors.has("hsName"),
                          valid: _vm.isFormFieldValid("hsName")
                        }
                      },
                      [
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.hsName,
                                expression: "hsName"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { name: "hsName", required: "", title: "" },
                            domProps: { value: _vm.hsName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.hsName = $event.target.value
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
                                  value: _vm.errors.has("hsName"),
                                  expression: "errors.has('hsName')"
                                }
                              ],
                              staticClass: "help text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("hsName")))]
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
                    _c("p", [
                      _vm._v(
                        'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                      )
                    ]),
                    _vm._v(" "),
                    _c("vuestic-simple-select", {
                      ref: "hsCountrySelect",
                      attrs: {
                        label: "Select country",
                        name: "country",
                        required: true,
                        options: _vm.countriesList
                      },
                      model: {
                        value: _vm.hsCountry,
                        callback: function($$v) {
                          _vm.hsCountry = $$v
                        },
                        expression: "hsCountry"
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
                        '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "wizardCompleted" },
                    slot: "wizardCompleted"
                  },
                  [
                    _c("h4", [_vm._v("Wizard completed!")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                      )
                    ])
                  ]
                )
              ])
            ],
            1
          )
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
            "vuestic-widget",
            {
              staticClass: "no-h-padding",
              attrs: { headerText: "Rich Wizard" }
            },
            [
              _c(
                "vuestic-wizard",
                { attrs: { steps: _vm.hrSteps, "wizard-type": "rich" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "form-wizard-tab-content",
                      attrs: { slot: "page1" },
                      slot: "page1"
                    },
                    [
                      _c("p", [
                        _vm._v(
                          'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group with-icon-right",
                          class: {
                            "has-error": _vm.errors.has("hrName"),
                            valid: _vm.isFormFieldValid("hrName")
                          }
                        },
                        [
                          _c("div", { staticClass: "input-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.hrName,
                                  expression: "hrName"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "hrName",
                                required: "",
                                title: ""
                              },
                              domProps: { value: _vm.hrName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.hrName = $event.target.value
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
                                    value: _vm.errors.has("hrName"),
                                    expression: "errors.has('hrName')"
                                  }
                                ],
                                staticClass: "help text-danger"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("hrName")))]
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
                      _c("p", [
                        _vm._v(
                          'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                        )
                      ]),
                      _vm._v(" "),
                      _c("vuestic-simple-select", {
                        ref: "hrCountrySelect",
                        attrs: {
                          label: "Select country",
                          name: "country",
                          required: true,
                          options: _vm.countriesList
                        },
                        model: {
                          value: _vm.hrCountry,
                          callback: function($$v) {
                            _vm.hrCountry = $$v
                          },
                          expression: "hrCountry"
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
                          '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-wizard-tab-content",
                      attrs: { slot: "wizardCompleted" },
                      slot: "wizardCompleted"
                    },
                    [
                      _c("h4", [_vm._v("Wizard completed!")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                        )
                      ])
                    ]
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            { attrs: { headerText: "Vertical Rich Wizard" } },
            [
              _c(
                "vuestic-wizard",
                {
                  attrs: {
                    steps: _vm.vrSteps,
                    "wizard-layout": "vertical",
                    "wizard-type": "rich"
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
                      _c("p", [
                        _vm._v(
                          'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group with-icon-right",
                          class: {
                            "has-error": _vm.errors.has("vrName"),
                            valid: _vm.isFormFieldValid("vrName")
                          }
                        },
                        [
                          _c("div", { staticClass: "input-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vrName,
                                  expression: "vrName"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "vrName",
                                required: "",
                                title: ""
                              },
                              domProps: { value: _vm.vrName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.vrName = $event.target.value
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
                                    value: _vm.errors.has("vrName"),
                                    expression: "errors.has('vrName')"
                                  }
                                ],
                                staticClass: "help text-danger"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("vrName")))]
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
                      _c("p", [
                        _vm._v(
                          'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                        )
                      ]),
                      _vm._v(" "),
                      _c("vuestic-simple-select", {
                        ref: "vrCountrySelect",
                        attrs: {
                          label: "Select country",
                          name: "country",
                          required: true,
                          options: _vm.countriesList
                        },
                        model: {
                          value: _vm.vrCountry,
                          callback: function($$v) {
                            _vm.vrCountry = $$v
                          },
                          expression: "vrCountry"
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
                          '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-wizard-tab-content",
                      attrs: { slot: "wizardCompleted" },
                      slot: "wizardCompleted"
                    },
                    [
                      _c("h4", [_vm._v("Wizard completed!")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                        )
                      ])
                    ]
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
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "simple-vertical-wizard-widget",
              attrs: { headerText: "Vertical Simple Wizard" }
            },
            [
              _c(
                "vuestic-wizard",
                {
                  attrs: {
                    steps: _vm.vsSteps,
                    "wizard-layout": "vertical",
                    "wizard-type": "simple"
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
                      _c("p", [
                        _vm._v(
                          'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group with-icon-right",
                          class: {
                            "has-error": _vm.errors.has("vsName"),
                            valid: _vm.isFormFieldValid("vsName")
                          }
                        },
                        [
                          _c("div", { staticClass: "input-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vsName,
                                  expression: "vsName"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "vsName",
                                required: "",
                                title: ""
                              },
                              domProps: { value: _vm.vsName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.vsName = $event.target.value
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
                                    value: _vm.errors.has("vsName"),
                                    expression: "errors.has('vsName')"
                                  }
                                ],
                                staticClass: "help text-danger"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("vsName")))]
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
                      _c("p", [
                        _vm._v(
                          'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                        )
                      ]),
                      _vm._v(" "),
                      _c("vuestic-simple-select", {
                        ref: "vsCountrySelect",
                        attrs: {
                          label: "Select country",
                          name: "country",
                          required: true,
                          options: _vm.countriesList
                        },
                        model: {
                          value: _vm.vsCountry,
                          callback: function($$v) {
                            _vm.vsCountry = $$v
                          },
                          expression: "vsCountry"
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
                          '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-wizard-tab-content",
                      attrs: { slot: "wizardCompleted" },
                      slot: "wizardCompleted"
                    },
                    [
                      _c("h4", [_vm._v("Wizard completed!")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          '\n              Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n              soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n              their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n            '
                        )
                      ])
                    ]
                  )
                ]
              )
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
    require("vue-hot-reload-api")      .rerender("data-v-6dcd2edb", module.exports)
  }
}

/***/ })

});