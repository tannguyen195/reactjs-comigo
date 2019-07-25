module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(5);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(2);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(9);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(19);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(13);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./src/components/contact/Contact.js






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var FormItem = form__default.a.Item;
var TextArea = input__default.a.TextArea;
var linkedInIcon = '/static/images/icon-social-linkedin.svg';
var facebookIcon = '/static/images/icon-social-facebook.svg';
var instagramIcon = '/static/images/icon-social-instagram.svg';

var Contact__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var handleSubmit = this.props.handleSubmit;
      return external__react__default.a.createElement("div", {
        className: "contact-container"
      }, external__react__default.a.createElement(col__default.a, {
        className: "contact-left",
        lg: 13
      }, external__react__default.a.createElement("div", {
        className: "contact-left__container"
      }, external__react__default.a.createElement("div", {
        className: "get-in-touch"
      }, "Get In Touch"), external__react__default.a.createElement("div", {
        className: "contact-desc Body-16-Left"
      }, "We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below."), external__react__default.a.createElement(card__default.a, {
        bordered: false
      }, external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmit
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom24"
      }, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Your name"), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: 'Please input your first name!',
          whitespace: true
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Enter your name"
      }))), external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Your Email"), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Enter your email"
      }))), external__react__default.a.createElement("div", {
        className: "bio-info marginBottom24"
      }, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Your Message"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('body', {
        rules: [{
          whitespace: true
        }, {
          required: true,
          message: 'Please input email content'
        }]
      })(external__react__default.a.createElement(TextArea, {
        placeholder: "Enter Your Message"
      })))), external__react__default.a.createElement(FormItem, {
        className: "send-button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-2",
        type: "primary",
        htmlType: "submit"
      }, "SEND")))))), external__react__default.a.createElement(col__default.a, {
        lg: 11
      }, external__react__default.a.createElement("div", {
        className: "contact-right"
      }, external__react__default.a.createElement("div", {
        className: "Text-Style"
      }, "Contact Information"), external__react__default.a.createElement("div", {
        className: "contact-address"
      }, "322 N. Clinton St.\nIowa City, IA 52245\n\n(641) 451-1736\ninfo@comigo.co"), external__react__default.a.createElement("div", {
        className: "Text-Style"
      }, "Follow Us"), external__react__default.a.createElement("div", {
        className: "social-icon"
      }, external__react__default.a.createElement("a", {
        href: "https://www.linkedin.com/company/comigoco/",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        alt: "icon",
        src: linkedInIcon
      })), external__react__default.a.createElement("a", {
        href: "https://www.instagram.com/comigo.co/",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        alt: "icon",
        src: instagramIcon
      })), external__react__default.a.createElement("a", {
        href: "https://www.facebook.com/comigo.co/",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        alt: "icon",
        src: facebookIcon
      }))))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/contact/_contact.less
var _contact = __webpack_require__(109);
var _contact_default = /*#__PURE__*/__webpack_require__.n(_contact);

// CONCATENATED MODULE: ./src/components/contact/ContactContainer.js


function ContactContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContactContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { ContactContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContactContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ContactContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContactContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContactContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) ContactContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) ContactContainer__defineProperties(Constructor, staticProps); return Constructor; }

function ContactContainer__possibleConstructorReturn(self, call) { if (call && (ContactContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return ContactContainer__assertThisInitialized(self); }

function ContactContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ContactContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var ContactContainer_ContactContainer =
/*#__PURE__*/
function (_Component) {
  ContactContainer__inherits(ContactContainer, _Component);

  function ContactContainer(props) {
    var _this;

    ContactContainer__classCallCheck(this, ContactContainer);

    _this = ContactContainer__possibleConstructorReturn(this, (ContactContainer.__proto__ || Object.getPrototypeOf(ContactContainer)).call(this, props));
    Object.defineProperty(ContactContainer__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            window.location = "mailto:".concat(values.email, "?subject=[").concat(values.name, "]%20-%20Contact&body=").concat(values.body);
          }
        });
      }
    });
    _this.state = {};
    return _this;
  }

  ContactContainer__createClass(ContactContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        style: {
          height: '100%'
        }
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _contact_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Contact"
      }), external__react__default.a.createElement(Contact__default, _extends({
        handleSubmit: this.handleSubmit
      }, this.state, this.props)));
    }
  }]);

  return ContactContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var contact_ContactContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(ContactContainer_ContactContainer)));
// CONCATENATED MODULE: ./pages/contact.js

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_ContactContainer);

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n  background: #fff;\n}\n.contact-container .contact-left {\n  height: 100%;\n  overflow: hidden;\n  padding: 80px 0;\n  background: #ffd24c;\n}\n.contact-container .contact-left .contact-left__container {\n  margin: 0 auto;\n  max-width: 540px;\n}\n.contact-container .contact-left .get-in-touch {\n  font-size: 64px;\n  font-weight: bold;\n  line-height: 1.25;\n  color: #fff;\n}\n.contact-container .contact-left .contact-desc {\n  padding-top: 8px;\n  padding-bottom: 40px;\n}\n.contact-container .contact-left .ant-card {\n  width: 540px;\n}\n.contact-container .contact-left .ant-card .ant-card-body {\n  padding: 48px;\n}\n.contact-container .contact-left .bio-info {\n  position: relative;\n}\n.contact-container .contact-left .bio-info .label-form {\n  top: -8px;\n  height: inherit;\n}\n.contact-container .contact-left .bio-info textarea {\n  min-height: 160px !important;\n}\n.contact-container .contact-left .send-button {\n  margin: 0;\n}\n.contact-container .contact-left .send-button button {\n  width: 100%;\n  height: 56px;\n}\n.contact-container .contact-right {\n  background: #fff;\n  padding-left: 55px;\n}\n.contact-container .contact-right .contact-address {\n  white-space: pre;\n  padding-top: 24px;\n  padding-bottom: 40px;\n}\n.contact-container .contact-right .social-icon {\n  padding-top: 24px;\n  padding-bottom: 100px;\n  display: flex;\n}\n.contact-container .contact-right .social-icon img {\n  margin-right: 24px;\n}\n";

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charset: "UTF-8"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, props.title || ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ })

/******/ });