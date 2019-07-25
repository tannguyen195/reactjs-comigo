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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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

// EXTERNAL MODULE: external "antd/lib/collapse"
var collapse_ = __webpack_require__(118);
var collapse__default = /*#__PURE__*/__webpack_require__.n(collapse_);

// CONCATENATED MODULE: ./src/components/faq/Faq.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Panel = collapse__default.a.Panel;
var questions = [{
  q: '  Is Comigo free?',
  a: 'Hooray! Comigo is completely free for students. Just be sure to login with your college email address 😊'
}, {
  q: 'Is Comigo available to anyone?',
  a: 'Comigo is a student community. Therefore, only students with the email domain of an affiliated college will have the ability to login. Non-student community members do not have access at this time. Just student helping students.'
}, {
  q: "Can I see students from other colleges, and can they see me?",
  a: "Nope! Users can only view other users who go to the same school as them. It\u2019s one of our many efforts to build truly engaged campus communities. "
}, {
  q: "I want Comigo on my campus.What do I do?",
  a: " We\u2019re glad to hear it! Let 2 people know you\u2019re interested: us(shoot us an email at info@comigo.co) and your university administrator(s).Entrepreneurship professors and directors might be the best bet, but that\u2019s up to you!"
}, {
  q: "What could I gain from Comigo ?",
  a: "- A community that shares your interests\n- A team \u2013 anything from a volunteer to a co - founder \n- A network to brainstorm ideas, build connections, announce updates, etc.\n- Relevant experience \u2013 you won\u2019t graduate with a boring resume\n- Access to the innovation happening on your campus \u2013 from the coolest projects to the awesome people backing them"
}, {
  q: "What is Comigo ?",
  a: "- Crowdsourced peer support on student ideas, projects, and startups\n- A tool to find / grow your team & campus network\n- A tool to find / support exciting projects\n- A resume & experience booster\n- A method to post announcements & promotions for your project\n- A hub for student innovation, creativity, engineering, and support"
}, {
  q: "What is Comigo not ?",
  a: "- A project management tool.We recommend Trello, Slack, and others for that.\n- A tool for collaboration among different universities.For now, users can only see other users on their very own campus.\n- Read our community guidelines and Terms & Conditions to learn about what Comigo is not and what our platform will not tolerate."
}];

var Faq_Faq =
/*#__PURE__*/
function (_Component) {
  _inherits(Faq, _Component);

  function Faq() {
    _classCallCheck(this, Faq);

    return _possibleConstructorReturn(this, (Faq.__proto__ || Object.getPrototypeOf(Faq)).apply(this, arguments));
  }

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          handleOpen = _props.handleOpen,
          visibleDrawer = _props.visibleDrawer,
          arrayVisible = _props.arrayVisible;
      return external__react__default.a.createElement("div", {
        className: "faq-container"
      }, external__react__default.a.createElement("div", {
        className: "faq"
      }, external__react__default.a.createElement("div", {
        className: "Title-Large-Left-LandingPage faq-header "
      }, "Frequently Asked Questions"), external__react__default.a.createElement("div", {
        className: "Body-16-Grey-Left"
      }, "Can't find answer? Call us at 319-400-9929 or email team@comigo.org!"), external__react__default.a.createElement("div", {
        className: "faq-body"
      }, external__react__default.a.createElement(collapse__default.a, {
        onChange: handleOpen,
        bordered: false,
        defaultActiveKey: arrayVisible
      }, questions.map(function (item, index) {
        return external__react__default.a.createElement(Panel, {
          showArrow: false,
          header: external__react__default.a.createElement("div", {
            className: "faq-question"
          }, external__react__default.a.createElement("div", {
            className: "media-header"
          }, external__react__default.a.createElement("div", {
            onClick: handleOpen,
            id: arrayVisible.includes(index.toString()) ? "burger-container-open" : "burger-container"
          }, external__react__default.a.createElement("div", {
            id: "burger"
          }, external__react__default.a.createElement("span", null, " \xA0"), external__react__default.a.createElement("span", null, " \xA0")))), external__react__default.a.createElement("div", {
            className: "Title-16-Left-Black"
          }, item.q)),
          key: index
        }, external__react__default.a.createElement("div", {
          className: "faq__answer Body-16-Left"
        }, item.a));
      })))));
    }
  }]);

  return Faq;
}(external__react_["Component"]);

/* harmony default export */ var faq_Faq = (Faq_Faq);
// EXTERNAL MODULE: ./src/components/faq/_faq.less
var _faq = __webpack_require__(119);
var _faq_default = /*#__PURE__*/__webpack_require__.n(_faq);

// CONCATENATED MODULE: ./src/components/faq/FaqContainer.js
function FaqContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FaqContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { FaqContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FaqContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FaqContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FaqContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FaqContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) FaqContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) FaqContainer__defineProperties(Constructor, staticProps); return Constructor; }

function FaqContainer__possibleConstructorReturn(self, call) { if (call && (FaqContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return FaqContainer__assertThisInitialized(self); }

function FaqContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function FaqContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var FaqContainer_FaqContainer =
/*#__PURE__*/
function (_Component) {
  FaqContainer__inherits(FaqContainer, _Component);

  function FaqContainer(props) {
    var _this;

    FaqContainer__classCallCheck(this, FaqContainer);

    _this = FaqContainer__possibleConstructorReturn(this, (FaqContainer.__proto__ || Object.getPrototypeOf(FaqContainer)).call(this, props));
    Object.defineProperty(FaqContainer__assertThisInitialized(_this), "handleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          visibleDrawer: !_this.state.visibleDrawer,
          arrayVisible: e
        });
      }
    });
    _this.state = {
      visibleDrawer: false,
      arrayVisible: ["0"]
    };
    return _this;
  }

  FaqContainer__createClass(FaqContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _faq_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Faq"
      }), external__react__default.a.createElement(faq_Faq, _extends({}, this.state, this.props, {
        handleOpen: this.handleOpen
      })));
    }
  }]);

  return FaqContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var faq_FaqContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(FaqContainer_FaqContainer));
// CONCATENATED MODULE: ./pages/faq.js

/* harmony default export */ var faq = __webpack_exports__["default"] = (faq_FaqContainer);

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports = require("antd/lib/collapse");

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports = ".faq-container {\n  min-height: 100vh;\n  background: #fff;\n}\n.faq-container .faq {\n  padding: 80px 0;\n  max-width: 730px;\n  margin: 0 auto;\n}\n.faq-container .faq .faq-header {\n  padding-bottom: 16px;\n}\n.faq-container .faq .faq-body {\n  padding-top: 80px;\n}\n.faq-container .faq .faq-body .faq__answer {\n  white-space: pre-line;\n  padding-left: 46px;\n}\n.faq-container .faq .faq-body .ant-collapse-content-box {\n  padding: 0;\n  padding-bottom: 15px;\n}\n.faq-container .faq .faq-body .ant-collapse-item {\n  border-bottom: 1px solid #edf0f2 !important;\n}\n.faq-container .faq .faq-body .faq-question {\n  display: flex;\n  align-items: center;\n}\n.faq-container .faq .faq-body .faq-question .media-header {\n  padding-right: 25px;\n}\n.faq-container .faq .ant-collapse-header {\n  padding: 24px 0 !important;\n}\n#burger {\n  cursor: pointer;\n  display: block;\n}\n#burger span {\n  background: #006cd9;\n  display: block;\n  width: 21px;\n  height: 2px;\n  margin-bottom: 4px;\n  position: relative;\n  top: 0;\n  transition: all ease-in-out 0.4s;\n  border-radius: 100px;\n}\n#burger-container span:nth-child(1) {\n  top: 6px;\n  transform: rotate(-90deg);\n}\n#burger-container-open span:nth-child(2) {\n  width: 0;\n  opacity: 0;\n}\n#burger-container-open span:nth-child(1) {\n  transform: rotate(-180deg);\n  top: 6px;\n}\n#burger-container-open span:nth-child(2) {\n  transform: rotate(-180deg);\n  top: 6px;\n}\n";

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("react-redux");

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