webpackJsonp([16],{

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(690)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(692)
/* template */
var __vue_template__ = __webpack_require__(693)
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
Component.options.__file = "resources\\assets\\js\\components\\forms\\form-elements\\FormElements.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-371ba79b", Component.options)
  } else {
    hotAPI.reload("data-v-371ba79b", Component.options)
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

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6246076e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371ba79b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./FormElements.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371ba79b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./FormElements.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.abc-checkbox, .abc-radio {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\ninput[type=checkbox]:disabled + label, input[type=radio]:disabled + label,\ninput[type=checkbox]:disabled, input[type=radio]:disabled {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_switch_VuesticSwitch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_switch_VuesticSwitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_switch_VuesticSwitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_simple_select_VuesticSimpleSelect__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_simple_select_VuesticSimpleSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_multi_select_VuesticMultiSelect__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_multi_select_VuesticMultiSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_multi_select_VuesticMultiSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CountriesList__ = __webpack_require__(642);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'form-elements',
  components: {
    VuesticSwitch: __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_switch_VuesticSwitch___default.a,
    VuesticSimpleSelect: __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default.a,
    VuesticMultiSelect: __WEBPACK_IMPORTED_MODULE_2__components_vuestic_components_vuestic_multi_select_VuesticMultiSelect___default.a
  },
  computed: {
    isSuccessfulEmailValid: function isSuccessfulEmailValid() {
      var isValid = false;
      if (this.formFields.successfulEmail) {
        isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid;
      }
      return isValid;
    }
  },
  data: function data() {
    return {
      isMale: true,
      countriesList: __WEBPACK_IMPORTED_MODULE_3__CountriesList__["a" /* default */],
      chosenCountry: '',
      clearableText: '',
      successfulEmail: 'andrei@dreamsupport.io',
      wrongEmail: 'andrei@dreamsupport',
      simpleOptions: ['First option', 'Second option', 'Third option'],
      simpleSelectModel: '',
      multiSelectModel: [],
      multiSelectCountriesModel: []
    };
  },

  methods: {
    clear: function clear(field) {
      this[field] = '';
    }
  },
  mounted: function mounted() {
    this.$validator.validateAll();
  }
});

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-elements" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("vuestic-widget", { attrs: { headerText: "Inputs" } }, [
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("fieldset", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          attrs: { id: "simple-input", required: "" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "simple-input" }
                          },
                          [_vm._v("Text input")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group with-icon-right",
                        class: {
                          "has-error": _vm.errors.has("successfulEmail"),
                          valid: _vm.isSuccessfulEmailValid
                        }
                      },
                      [
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.successfulEmail,
                                expression: "successfulEmail"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|email",
                                expression: "'required|email'"
                              }
                            ],
                            attrs: {
                              id: "successfulEmail",
                              name: "successfulEmail",
                              required: ""
                            },
                            domProps: { value: _vm.successfulEmail },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.successfulEmail = $event.target.value
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
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "successfulEmail" }
                            },
                            [_vm._v("Email (validated with success)")]
                          ),
                          _c("i", { staticClass: "bar" }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("successfulEmail"),
                                  expression: "errors.has('successfulEmail')"
                                }
                              ],
                              staticClass: "help text-danger"
                            },
                            [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.errors.first("successfulEmail")) +
                                  "\n                    "
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group with-icon-right",
                        class: { "has-error": _vm.errors.has("wrongEmail") }
                      },
                      [
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.wrongEmail,
                                expression: "wrongEmail"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|email",
                                expression: "'required|email'"
                              }
                            ],
                            attrs: {
                              id: "wrongEmail",
                              name: "wrongEmail",
                              required: ""
                            },
                            domProps: { value: _vm.wrongEmail },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.wrongEmail = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("wrongEmail"),
                                expression: "errors.has('wrongEmail')"
                              }
                            ],
                            staticClass:
                              "fa fa-exclamation-triangle icon-right input-icon"
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "control-label",
                              attrs: { for: "wrongEmail" }
                            },
                            [_vm._v("Email (validated)")]
                          ),
                          _c("i", { staticClass: "bar" }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("wrongEmail"),
                                  expression: "errors.has('wrongEmail')"
                                }
                              ],
                              staticClass: "help text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("wrongEmail")) +
                                  "\n                    "
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("textarea", {
                          attrs: {
                            type: "text",
                            id: "simple-textarea",
                            required: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "simple-textarea" }
                          },
                          [_vm._v("Textarea")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("fieldset", [
                    _c("div", { staticClass: "form-group with-icon-left" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          attrs: {
                            id: "input-icon-left",
                            name: "input-icon-left",
                            required: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-envelope-o icon-left input-icon"
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "input-icon-left" }
                          },
                          [_vm._v("Input with icon")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group with-icon-right" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.clearableText,
                              expression: "clearableText"
                            }
                          ],
                          attrs: {
                            id: "clear-input",
                            name: "clear-input",
                            required: ""
                          },
                          domProps: { value: _vm.clearableText },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.clearableText = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass:
                            "fa fa-times icon-right input-icon pointer",
                          on: {
                            click: function($event) {
                              _vm.clear("clearableText")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "clear-input", role: "button" }
                          },
                          [_vm._v("Input with clear button")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          attrs: {
                            id: "inputWithDescription",
                            required: "",
                            title: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "simple-input" }
                          },
                          [_vm._v("Text input (with description)")]
                        ),
                        _c("i", { staticClass: "bar" }),
                        _vm._v(" "),
                        _c("small", { staticClass: "help text-secondary" }, [
                          _vm._v(
                            "\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                    "
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("fieldset", [
                    _c("div", { staticClass: "form-group form-group-w-btn" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          attrs: { id: "input-w-btn", required: "" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "input-w-btn" }
                          },
                          [_vm._v("Input with button")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "btn btn-micro btn-primary" }, [
                        _vm._v("UPLOAD")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group form-group-w-btn" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          attrs: { id: "input-w-btn-round", required: "" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "input-w-btn-round" }
                          },
                          [_vm._v("Input with round button")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "btn btn-primary btn-with-icon btn-micro rounded-icon"
                        },
                        [
                          _c("div", { staticClass: "btn-with-icon-content" }, [
                            _c("i", {
                              staticClass: "ion-android-cloud-outline ion"
                            })
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
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
          _c("vuestic-widget", { attrs: { headerText: "Selects" } }, [
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "fieldset",
                    [
                      _c("vuestic-simple-select", {
                        attrs: {
                          label: "Simple select",
                          options: _vm.simpleOptions
                        },
                        model: {
                          value: _vm.simpleSelectModel,
                          callback: function($$v) {
                            _vm.simpleSelectModel = $$v
                          },
                          expression: "simpleSelectModel"
                        }
                      }),
                      _vm._v(" "),
                      _c("vuestic-simple-select", {
                        attrs: {
                          label: "Country select",
                          options: _vm.countriesList
                        },
                        model: {
                          value: _vm.chosenCountry,
                          callback: function($$v) {
                            _vm.chosenCountry = $$v
                          },
                          expression: "chosenCountry"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "fieldset",
                    [
                      _c("vuestic-multi-select", {
                        attrs: {
                          label: "Mutliselect",
                          options: _vm.simpleOptions
                        },
                        model: {
                          value: _vm.multiSelectModel,
                          callback: function($$v) {
                            _vm.multiSelectModel = $$v
                          },
                          expression: "multiSelectModel"
                        }
                      }),
                      _vm._v(" "),
                      _c("vuestic-multi-select", {
                        attrs: {
                          label: "Country multiselect",
                          options: _vm.countriesList
                        },
                        model: {
                          value: _vm.multiSelectCountriesModel,
                          callback: function($$v) {
                            _vm.multiSelectCountriesModel = $$v
                          },
                          expression: "multiSelectCountriesModel"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
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
            "vuestic-widget",
            { attrs: { headerText: "Checkboxes, Radios, Swithces" } },
            [
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("fieldset", [
                      _c(
                        "div",
                        { staticClass: "abc-checkbox abc-checkbox-primary" },
                        [
                          _c("input", {
                            attrs: { id: "checkbox1", type: "checkbox" }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox1" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "abc-checkbox abc-checkbox-primary" },
                        [
                          _c("input", {
                            attrs: {
                              id: "checkbox2",
                              type: "checkbox",
                              checked: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox2" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "abc-checkbox abc-checkbox-primary" },
                        [
                          _c("input", {
                            attrs: {
                              id: "checkbox3",
                              type: "checkbox",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox3" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "abc-checkbox abc-checkbox-primary" },
                        [
                          _c("input", {
                            attrs: {
                              id: "checkbox4",
                              type: "checkbox",
                              disabled: "",
                              checked: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox4" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("fieldset", [
                      _c(
                        "div",
                        {
                          staticClass:
                            "abc-checkbox abc-checkbox-primary abc-checkbox-circle"
                        },
                        [
                          _c("input", {
                            attrs: { id: "checkbox7", type: "checkbox" }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox7" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "abc-checkbox abc-checkbox-primary abc-checkbox-circle"
                        },
                        [
                          _c("input", {
                            attrs: {
                              id: "checkbox8",
                              type: "checkbox",
                              checked: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox8" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "abc-checkbox abc-checkbox-primary abc-checkbox-circle"
                        },
                        [
                          _c("input", {
                            attrs: {
                              id: "checkbox9",
                              type: "checkbox",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox9" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "abc-checkbox abc-checkbox-primary abc-checkbox-circle"
                        },
                        [
                          _c("input", {
                            attrs: {
                              id: "checkbox10",
                              type: "checkbox",
                              checked: "",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "checkbox10" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Subscribe to newsletter")
                            ])
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("fieldset", [
                      _c(
                        "div",
                        { staticClass: "radio abc-radio abc-radio-primary" },
                        [
                          _c("input", {
                            attrs: {
                              type: "radio",
                              name: "radio1",
                              id: "radio1",
                              value: "option1",
                              checked: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "radio1" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Radio")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio abc-radio abc-radio-primary" },
                        [
                          _c("input", {
                            attrs: {
                              type: "radio",
                              name: "radio1",
                              id: "radio2",
                              value: "option2"
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "radio2" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Radio")
                            ])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("fieldset", [
                      _c(
                        "div",
                        { staticClass: "radio abc-radio abc-radio-primary" },
                        [
                          _c("input", {
                            attrs: {
                              type: "radio",
                              name: "radio3",
                              id: "radio3",
                              value: "option3",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "radio3" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Disabled Radio")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio abc-radio abc-radio-primary" },
                        [
                          _c("input", {
                            attrs: {
                              type: "radio",
                              name: "radio4",
                              id: "radio4",
                              value: "option4",
                              checked: "",
                              disabled: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "radio4" } }, [
                            _c("span", { staticClass: "abc-label-text" }, [
                              _vm._v("Disabled Radio")
                            ])
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c(
                      "fieldset",
                      [
                        _c(
                          "vuestic-switch",
                          {
                            model: {
                              value: _vm.isMale,
                              callback: function($$v) {
                                _vm.isMale = $$v
                              },
                              expression: "isMale"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                attrs: { slot: "trueTitle" },
                                slot: "trueTitle"
                              },
                              [_vm._v("Male")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                attrs: { slot: "falseTitle" },
                                slot: "falseTitle"
                              },
                              [_vm._v("Female")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-371ba79b", module.exports)
  }
}

/***/ })

});