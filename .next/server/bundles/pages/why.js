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
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(17)();

routes.add('home').add('about').add('contact').add('faq').add('why').add('login').add('signUp').add('new-project').add('reset_password').add('search').add('/user/:id', 'user').add('profile').add('/profile/edit', 'edit').add('/:id', 'project').add('/:id/edit', 'edit-project');

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157);


/***/ }),

/***/ 157:
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

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/common/footer/_footer.less
var _footer = __webpack_require__(158);
var _footer_default = /*#__PURE__*/__webpack_require__.n(_footer);

// CONCATENATED MODULE: ./src/components/common/footer/Footer.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var linkedInIcon = '/static/images/icon-social-linkedin.svg';
var facebookIcon = '/static/images/icon-social-facebook.svg';
var instagramIcon = '/static/images/icon-social-instagram.svg';

var Footer__default =
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
      return external__react__default.a.createElement("footer", {
        className: "footer-container"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _footer_default.a
        }
      }), external__react__default.a.createElement("div", {
        className: "footer-max-width"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/why"
      }, external__react__default.a.createElement("a", {
        className: "Title-14-Left footer-item"
      }, "Why Comigo?")), external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/contact"
      }, external__react__default.a.createElement("a", {
        className: "Title-14-Left footer-item"
      }, "Contact us")), external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/faq"
      }, external__react__default.a.createElement("a", {
        className: "Title-14-Left footer-item"
      }, "FAQ?"))), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
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


// EXTERNAL MODULE: external "react-player"
var external__react_player_ = __webpack_require__(159);
var external__react_player__default = /*#__PURE__*/__webpack_require__.n(external__react_player_);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/why/Why.js


function Why__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Why__typeof = function _typeof(obj) { return typeof obj; }; } else { Why__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Why__typeof(obj); }

function Why__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Why__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Why__createClass(Constructor, protoProps, staticProps) { if (protoProps) Why__defineProperties(Constructor.prototype, protoProps); if (staticProps) Why__defineProperties(Constructor, staticProps); return Constructor; }

function Why__possibleConstructorReturn(self, call) { if (call && (Why__typeof(call) === "object" || typeof call === "function")) { return call; } return Why__assertThisInitialized(self); }

function Why__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Why__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var graphicImage1 = '/static/images/image-graphic-1.svg';
var graphicImage2 = '/static/images/image-graphic-2.svg';

var Why_Why =
/*#__PURE__*/
function (_Component) {
  Why__inherits(Why, _Component);

  function Why() {
    Why__classCallCheck(this, Why);

    return Why__possibleConstructorReturn(this, (Why.__proto__ || Object.getPrototypeOf(Why)).apply(this, arguments));
  }

  Why__createClass(Why, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "why-container"
      }, external__react__default.a.createElement("div", {
        className: "why"
      }, external__react__default.a.createElement("div", {
        className: "Title-X-Large-Left-LandingPage why-header "
      }, " Why Comigo?"), external__react__default.a.createElement("div", {
        className: "video-container"
      }, external__react__default.a.createElement(external__react_player__default.a, {
        width: "100%",
        height: "100%",
        url: constants["f" /* videoURL */],
        playing: true,
        loop: true
      })), external__react__default.a.createElement("div", {
        className: "why__text-block"
      }, external__react__default.a.createElement("div", {
        className: "text-header Title-Medium-Left-LandingPage"
      }, external__react__default.a.createElement("div", {
        className: "color-mono"
      }, "We get student ideas"), "off the ground."), external__react__default.a.createElement("div", {
        className: "text-content Body-18-Left"
      }, "College is the time to be adventurous. Comigo gives you peer support \u2013 a brainstorming buddy, volunteer, or cofounder \u2013 to get your ideas off the ground.")), external__react__default.a.createElement("div", {
        className: "why__text-block"
      }, external__react__default.a.createElement("div", {
        className: "text-header Title-Medium-Left-LandingPage"
      }, external__react__default.a.createElement("div", {
        className: "color-mono"
      }, "Growing collaborative"), "campus communities."), external__react__default.a.createElement("div", {
        className: "text-content Body-18-Left"
      }, "When good ideas are born, they should be met student support and grown in collaborative campus communities. Look at this app we built, this project we launched, this startup we founded! Peer support never looked so good \u2013 students helping students build big ideas, together.")), external__react__default.a.createElement("div", {
        className: "why__graphic paddingTop80"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
        src: graphicImage2,
        alt: "graphic"
      })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "Title-Medium-Left-LandingPage paddingBottom16 paddingTop40"
      }, "Project starters"), external__react__default.a.createElement("div", {
        className: "Sub-Title-Medium-Left body__2-desc"
      }, "the movers, shakers,\nand makers."))), external__react__default.a.createElement("div", {
        className: "paddingTop40 why__graphic"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "Title-Medium-Left-LandingPage paddingBottom16 paddingTop40"
      }, "Collaborators"), external__react__default.a.createElement("div", {
        className: "Sub-Title-Medium-Left body__2-desc"
      }, "the supportive, skilled,\nand curious.")), external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
        src: graphicImage1,
        alt: "graphic"
      }))), external__react__default.a.createElement("div", {
        className: "why__text-block"
      }, external__react__default.a.createElement("div", {
        className: "text-header Title-Medium-Left-LandingPage"
      }, external__react__default.a.createElement("div", {
        className: "color-mono"
      }, "Be gone,"), "campus silos."), external__react__default.a.createElement("div", {
        className: "text-content Body-18-Left"
      }, "\u201CSilos\u201D make cross-departmental communication tricky. Finding support from peers in different departments often means effortful networking and navigating bureaucratic channels. Don\u2019t waste your time finding peer support. Connect directly with the most fascinating peers across your campus on Comigo."))), external__react__default.a.createElement("div", {
        className: "why__coming"
      }, external__react__default.a.createElement("div", {
        className: "Title-Small-Center-Black-LandingPage coming-desc"
      }, "Crowdsourced peer support & team-building, campus by campus."), external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/signUp"
      }, external__react__default.a.createElement("a", {
        className: "start-button"
      }, external__react__default.a.createElement(button__default.a, {
        type: "primary"
      }, "Get Started")))), external__react__default.a.createElement(Footer__default, null));
    }
  }]);

  return Why;
}(external__react_["Component"]);

/* harmony default export */ var why_Why = (Why_Why);
// EXTERNAL MODULE: ./src/components/why/_why.less
var _why = __webpack_require__(160);
var _why_default = /*#__PURE__*/__webpack_require__.n(_why);

// CONCATENATED MODULE: ./src/components/why/WhyContainer.js
function WhyContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WhyContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { WhyContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WhyContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function WhyContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WhyContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WhyContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) WhyContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) WhyContainer__defineProperties(Constructor, staticProps); return Constructor; }

function WhyContainer__possibleConstructorReturn(self, call) { if (call && (WhyContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return WhyContainer__assertThisInitialized(self); }

function WhyContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WhyContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var WhyContainer_WhyContainer =
/*#__PURE__*/
function (_Component) {
  WhyContainer__inherits(WhyContainer, _Component);

  function WhyContainer(props) {
    var _this;

    WhyContainer__classCallCheck(this, WhyContainer);

    _this = WhyContainer__possibleConstructorReturn(this, (WhyContainer.__proto__ || Object.getPrototypeOf(WhyContainer)).call(this, props));
    _this.state = {};
    return _this;
  }

  WhyContainer__createClass(WhyContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _why_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Why"
      }), external__react__default.a.createElement(why_Why, _extends({}, this.state, this.props)));
    }
  }]);

  return WhyContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var why_WhyContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(WhyContainer_WhyContainer));
// CONCATENATED MODULE: ./pages/why.js

/* harmony default export */ var why = __webpack_exports__["default"] = (why_WhyContainer);

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  background: #ffd24c;\n  padding: 38px 0;\n}\n.footer-container .footer-max-width {\n  max-width: 920px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-container .footer-max-width .footer-item {\n  margin-right: 32px;\n}\n.footer-container .footer-max-width a:hover {\n  color: #2e3033;\n}\n.footer-container .footer-max-width .social-icon {\n  display: flex;\n}\n.footer-container .footer-max-width .social-icon img {\n  margin-right: 24px;\n}\n";

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/keyMirror");

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = ".why-container {\n  background: #fff;\n}\n.why-container .why {\n  padding: 80px 0;\n  max-width: 730px;\n  margin: 0 auto;\n}\n.why-container .why .why-header {\n  padding-bottom: 80px;\n}\n.why-container .why .video-container {\n  height: 412px;\n}\n.why-container .why .why__text-block {\n  padding-top: 96px;\n}\n.why-container .why .why__text-block .text-header {\n  padding-bottom: 24px;\n}\n.why-container .why .color-mono {\n  color: #2e3033;\n}\n.why-container .why .why__graphic {\n  justify-content: space-between;\n  display: flex;\n}\n.why-container .why__coming {\n  text-align: center;\n  padding: 64px 0;\n  background: #edf0f2;\n}\n.why-container .why__coming .coming-desc {\n  padding-top: 24px;\n}\n.why-container .why__coming .start-button button {\n  margin-top: 40px;\n  width: 350px;\n  height: 48px;\n}\n.why-container .why-notified {\n  text-align: center;\n  background: #edf0f2;\n  padding-bottom: 40px;\n}\n.why-container .why-notified .notified-desc {\n  padding-top: 64px;\n}\n.why-container .why-notified .form-subscribe {\n  padding-top: 40px;\n  display: flex;\n  justify-content: center;\n}\n.why-container .why-notified .form-subscribe input {\n  width: 350px;\n  height: 48px;\n  margin-right: 16px;\n}\n.why-container .why-notified .form-subscribe button {\n  width: 174px;\n  height: 48px;\n}\n";

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STATUS; });
/* unused harmony export googleApi */
/* unused harmony export googleClientID */
/* unused harmony export facebookAppID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return videoURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return commitment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return incentive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_keyMirror__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_keyMirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_keyMirror__);
var _keyMirror;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */

var ActionTypes = __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_keyMirror___default()((_keyMirror = {
  // TOGGLE CONSTANT ACTION TYPE
  TOGGLE_HOME_VIEW: undefined,
  TOGGLE_PREVIEW_IMAGE: undefined,
  TOGGLE_COLLABORATOR: undefined,
  TOGGLE_JOB_DETAIL: undefined,
  TOGGLE_REMOVE_COLLABORATOR: undefined,
  TOGGLE_EDIT_UPDATE: undefined,
  TOGGLE_EDIT_COMMENT: undefined,
  TOGGLE_POST_JOB: undefined,
  TOGGLE_EDIT_JOB: undefined,
  TOGGLE_REMOVE_JOB: undefined,
  TOGGLE_FORGOT_MODAL: undefined,
  // USER CONSTANT ACTION TYPE
  LOGIN: undefined,
  LOGIN_SUCCESS: undefined,
  LOGIN_ERROR: undefined,
  NEXT_STEP: undefined,
  LOGOUT: undefined,
  SIGNUP: undefined,
  SIGNUP_SUCCESS: undefined,
  SIGNUP_ERROR: undefined,
  VERIFY: undefined,
  VERIFY_SUCCESS: undefined,
  VERIFY_ERROR: undefined,
  GET_PROFILE: undefined,
  GET_PROFILE_SUCCESS: undefined,
  GET_PROFILE_ERROR: undefined,
  UPDATE_PROFILE: undefined,
  UPDATE_PROFILE_SUCCESS: undefined,
  UPDATE_PROFILE_ERROR: undefined,
  RESEND: undefined,
  RESEND_SUCCESS: undefined,
  RESEND_ERROR: undefined,
  // PROJECT CONSTANT ACTION TYPE
  CREATE: undefined,
  CREATE_SUCCESS: undefined,
  CREATE_ERROR: undefined,
  UPDATE: undefined,
  UPDATE_SUCCESS: undefined,
  UPDATE_ERROR: undefined,
  REMOVE: undefined,
  REMOVE_SUCCESS: undefined,
  REMOVE_ERROR: undefined,
  CREATE_LINK: undefined,
  CREATE_LINK_SUCCESS: undefined,
  CREATE_LINK_ERROR: undefined,
  GET_LIST: undefined,
  GET_LIST_SUCCESS: undefined,
  GET_LIST_ERROR: undefined,
  GET_DETAIL: undefined,
  GET_DETAIL_SUCCESS: undefined,
  GET_DETAIL_ERROR: undefined,
  // FILE CONSTANT ACTION TYPE    
  UPLOAD: undefined,
  UPLOAD_IMAGE: undefined,
  UPLOAD_IMAGE_SUCCESS: undefined,
  UPLOAD_IMAGE_ERROR: undefined,
  UPLOAD_SUCCESS: undefined,
  UPLOAD_ERROR: undefined,
  CHANGE_PHOTO: undefined,
  GET_CROPPED_PHOTO: undefined,
  GET_IMAGE_PAYLOAD: undefined,
  // PEOPLE CONSTANT ACTION TYPE
  GET_PEOPLE_MAY_KNOW: undefined,
  GET_PEOPLE_MAY_KNOW_SUCCESS: undefined,
  GET_PEOPLE_MAY_KNOW_ERROR: undefined,
  // PEOPLE CONSTANT ACTION TYPE
  GET_PEOPLE_LIST: undefined,
  GET_PEOPLE_LIST_SUCCESS: undefined,
  GET_PEOPLE_LIST_ERROR: undefined,
  GET_PEOPLE_DETAIL: undefined,
  GET_PEOPLE_DETAIL_SUCCESS: undefined,
  GET_PEOPLE_DETAIL_ERROR: undefined,
  SUBCRIBE: undefined,
  SUBCRIBE_SUCCESS: undefined,
  SUBCRIBE_ERROR: undefined,
  // PROJECT UPDATE CONSTANT ACTION TYPE
  POST_PROJECT_UPDATE: undefined,
  POST_PROJECT_UPDATE_SUCCESS: undefined,
  POST_PROJECT_UPDATE_ERROR: undefined,
  EDIT_PROJECT_UPDATE: undefined,
  EDIT_PROJECT_UPDATE_SUCCESS: undefined,
  EDIT_PROJECT_UPDATE_ERROR: undefined,
  REMOVE_PROJECT_UPDATE: undefined,
  REMOVE_PROJECT_UPDATE_SUCCESS: undefined,
  REMOVE_PROJECT_UPDATE_ERROR: undefined,
  GET_COMMENT: undefined,
  GET_COMMENT_SUCCESS: undefined,
  GET_COMMENT_ERROR: undefined,
  POST_COMMENT: undefined,
  POST_COMMENT_SUCCESS: undefined,
  POST_COMMENT_ERROR: undefined,
  POST_COMMENT_DETAIL: undefined,
  POST_COMMENT_DETAIL_SUCCESS: undefined,
  POST_COMMENT_DETAIL_ERROR: undefined,
  EDIT_COMMENT: undefined,
  EDIT_COMMENT_SUCCESS: undefined,
  EDIT_COMMENT_ERROR: undefined,
  REMOVE_COMMENT: undefined,
  REMOVE_COMMENT_SUCCESS: undefined,
  REMOVE_COMMENT_ERROR: undefined,
  CREATE_SHARE_LINK: undefined,
  CREATE_SHARE_LINK_SUCCESS: undefined,
  CREATE_SHARE_LINK_ERROR: undefined,
  ACCEPT_SHARE_LINK: undefined,
  ACCEPT_SHARE_LINK_SUCCESS: undefined,
  ACCEPT_SHARE_LINK_ERROR: undefined
}, _defineProperty(_keyMirror, "EDIT_PROJECT_UPDATE", undefined), _defineProperty(_keyMirror, "EDIT_PROJECT_UPDATE_SUCCESS", undefined), _defineProperty(_keyMirror, "EDIT_PROJECT_UPDATE_ERROR", undefined), _defineProperty(_keyMirror, "REMOVE_SHARED_USER", undefined), _defineProperty(_keyMirror, "REMOVE_SHARED_USER_SUCCESS", undefined), _defineProperty(_keyMirror, "REMOVE_SHARED_USER_ERROR", undefined), _defineProperty(_keyMirror, "EDIT_USER_ROLE", undefined), _defineProperty(_keyMirror, "EDIT_USER_ROLE_SUCCESS", undefined), _defineProperty(_keyMirror, "EDIT_USER_ROLE_ERROR", undefined), _defineProperty(_keyMirror, "GET_MAJOR_LIST", undefined), _defineProperty(_keyMirror, "GET_MAJOR_LIST_SUCCESS", undefined), _defineProperty(_keyMirror, "GET_MAJOR_LIST_ERROR", undefined), _defineProperty(_keyMirror, "GET_BADGE_LIST", undefined), _defineProperty(_keyMirror, "GET_BADGE_LIST_SUCCESS", undefined), _defineProperty(_keyMirror, "GET_BADGE_LIST_ERROR", undefined), _defineProperty(_keyMirror, "GIVE_BADGE", undefined), _defineProperty(_keyMirror, "GIVE_BADGE_SUCCESS", undefined), _defineProperty(_keyMirror, "GIVE_BADGE_ERROR", undefined), _defineProperty(_keyMirror, "POST_JOB", undefined), _defineProperty(_keyMirror, "POST_JOB_SUCCESS", undefined), _defineProperty(_keyMirror, "POST_JOB_ERROR", undefined), _defineProperty(_keyMirror, "GET_JOB_DETAIL", undefined), _defineProperty(_keyMirror, "GET_JOB_DETAIL_SUCCESS", undefined), _defineProperty(_keyMirror, "GET_JOB_DETAIL_ERROR", undefined), _defineProperty(_keyMirror, "DELETE_JOB", undefined), _defineProperty(_keyMirror, "DELETE_JOB_SUCCESS", undefined), _defineProperty(_keyMirror, "DELETE_JOB_ERROR", undefined), _defineProperty(_keyMirror, "UPDATE_JOB", undefined), _defineProperty(_keyMirror, "UPDATE_JOB_SUCCESS", undefined), _defineProperty(_keyMirror, "UPDATE_JOB_ERROR", undefined), _defineProperty(_keyMirror, "LIST_JOB", undefined), _defineProperty(_keyMirror, "LIST_JOB_SUCCESS", undefined), _defineProperty(_keyMirror, "LIST_JOB_ERROR", undefined), _defineProperty(_keyMirror, "SEND_PASSWORD_RESET", undefined), _defineProperty(_keyMirror, "SEND_PASSWORD_RESET_SUCCESS", undefined), _defineProperty(_keyMirror, "SEND_PASSWORD_RESET_ERROR", undefined), _defineProperty(_keyMirror, "RESET_PASSWORD", undefined), _defineProperty(_keyMirror, "RESET_PASSWORD_SUCCESS", undefined), _defineProperty(_keyMirror, "RESET_PASSWORD_ERROR", undefined), _defineProperty(_keyMirror, "CHANGE_PASSWORD", undefined), _defineProperty(_keyMirror, "CHANGE_PASSWORD_SUCCESS", undefined), _defineProperty(_keyMirror, "CHANGE_PASSWORD_ERROR", undefined), _defineProperty(_keyMirror, "SET_STEP", undefined), _defineProperty(_keyMirror, "UPDATE_CREATE_PROJECT", undefined), _defineProperty(_keyMirror, "SEARCH", undefined), _defineProperty(_keyMirror, "SEARCH_SUCCESS", undefined), _defineProperty(_keyMirror, "SEARCH_ERROR", undefined), _defineProperty(_keyMirror, "SEARCH_SKILL", undefined), _defineProperty(_keyMirror, "SEARCH_SKILL_SUCCESS", undefined), _defineProperty(_keyMirror, "SEARCH_SKILL_ERROR", undefined), _keyMirror));
var STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error'
};
var googleApi = "[Your google api]";
var googleClientID = "[Your google client ID]";
var facebookAppID = "[Your facebook app ID]";
var videoURL = "https://www.youtube.com/embed/peE-lxPxYOA";
var renderMessage = function renderMessage(err) {
  switch (err) {
    case 401:
      return "Invalid combination. Have another go.";

    case 500:
      return "This email has already been used by another account";

    default:
      return "Something went wrong!";
  }
};
var commitment = ["a few hours", "a few days", "few weeks", "a semester "];
var incentive = ["gratitude", "food", "pay", "resume", "other", "nothing for now"];

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

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