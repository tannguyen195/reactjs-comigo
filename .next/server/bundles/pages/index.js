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
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(17)();

routes.add('home').add('about').add('contact').add('faq').add('why').add('login').add('signUp').add('new-project').add('reset_password').add('search').add('/user/:id', 'user').add('profile').add('/profile/edit', 'edit').add('/:id', 'project').add('/:id/edit', 'edit-project');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 9 */
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var profileIcon = '/static/images/icon-profile.svg';

var _default =
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
      var _props = this.props,
          image = _props.image,
          height = _props.height,
          width = _props.width;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", _defineProperty({
        height: height,
        width: width,
        src: "avatar"
      }, "src", image ? image : profileIcon));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextStep", function() { return nextStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBadgeList", function() { return getBadgeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giveBadge", function() { return giveBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resend", function() { return resend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPasswordReset", function() { return sendPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].LOGIN, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].LOGOUT, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].SIGNUP, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].NEXT_STEP, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].LOGIN_SUCCESS, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].LOGIN_ERROR, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_PROFILE, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].VERIFY, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].UPDATE_PROFILE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_BADGE_LIST, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GIVE_BADGE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].RESEND, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].SEND_PASSWORD_RESET, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].RESET_PASSWORD, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].CHANGE_PASSWORD, function (data) {
  return data;
}), _createActions2)),
    login = _createActions.login,
    logout = _createActions.logout,
    signup = _createActions.signup,
    nextStep = _createActions.nextStep,
    loginSuccess = _createActions.loginSuccess,
    loginError = _createActions.loginError,
    getProfile = _createActions.getProfile,
    verify = _createActions.verify,
    updateProfile = _createActions.updateProfile,
    getBadgeList = _createActions.getBadgeList,
    giveBadge = _createActions.giveBadge,
    resend = _createActions.resend,
    sendPasswordReset = _createActions.sendPasswordReset,
    resetPassword = _createActions.resetPassword,
    changePassword = _createActions.changePassword;



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/keyMirror");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLink", function() { return createLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postProjectUpdate", function() { return postProjectUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProjectUpdate", function() { return editProjectUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProjectUpdate", function() { return removeProjectUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComment", function() { return getComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComment", function() { return postComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCommentDetail", function() { return postCommentDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editComment", function() { return editComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComment", function() { return removeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShareLink", function() { return createShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptShareLink", function() { return acceptShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSharedUser", function() { return removeSharedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUserRole", function() { return editUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMajorList", function() { return getMajorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStep", function() { return setStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCreateProject", function() { return updateCreateProject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].CREATE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].UPDATE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].REMOVE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].CREATE_LINK, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_LIST, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_DETAIL, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].POST_PROJECT_UPDATE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].EDIT_PROJECT_UPDATE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].REMOVE_PROJECT_UPDATE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_COMMENT, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].POST_COMMENT, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].POST_COMMENT_DETAIL, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].EDIT_COMMENT, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].REMOVE_COMMENT, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].CREATE_SHARE_LINK, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].ACCEPT_SHARE_LINK, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].REMOVE_SHARED_USER, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].EDIT_USER_ROLE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_MAJOR_LIST, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].SET_STEP, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].UPDATE_CREATE_PROJECT, function (data) {
  return data;
}), _createActions2)),
    create = _createActions.create,
    update = _createActions.update,
    remove = _createActions.remove,
    createLink = _createActions.createLink,
    getList = _createActions.getList,
    getDetail = _createActions.getDetail,
    postProjectUpdate = _createActions.postProjectUpdate,
    editProjectUpdate = _createActions.editProjectUpdate,
    removeProjectUpdate = _createActions.removeProjectUpdate,
    getComment = _createActions.getComment,
    postComment = _createActions.postComment,
    postCommentDetail = _createActions.postCommentDetail,
    editComment = _createActions.editComment,
    removeComment = _createActions.removeComment,
    createShareLink = _createActions.createShareLink,
    acceptShareLink = _createActions.acceptShareLink,
    removeSharedUser = _createActions.removeSharedUser,
    editUserRole = _createActions.editUserRole,
    getMajorList = _createActions.getMajorList,
    setStep = _createActions.setStep,
    updateCreateProject = _createActions.updateCreateProject;



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHomeView", function() { return toggleHomeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePreviewImage", function() { return togglePreviewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCollaborator", function() { return toggleCollaborator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleRemoveCollaborator", function() { return toggleRemoveCollaborator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditUpdate", function() { return toggleEditUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditComment", function() { return toggleEditComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePostJob", function() { return togglePostJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditJob", function() { return toggleEditJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleRemoveJob", function() { return toggleRemoveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleForgotModal", function() { return toggleForgotModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleJobDetail", function() { return toggleJobDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_HOME_VIEW, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_PREVIEW_IMAGE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_COLLABORATOR, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_REMOVE_COLLABORATOR, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_EDIT_UPDATE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_EDIT_COMMENT, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_POST_JOB, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_EDIT_JOB, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_REMOVE_JOB, function () {
  return {};
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_FORGOT_MODAL, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].TOGGLE_JOB_DETAIL, function (data) {
  return data;
}), _createActions2)),
    toggleHomeView = _createActions.toggleHomeView,
    togglePreviewImage = _createActions.togglePreviewImage,
    toggleCollaborator = _createActions.toggleCollaborator,
    toggleRemoveCollaborator = _createActions.toggleRemoveCollaborator,
    toggleEditUpdate = _createActions.toggleEditUpdate,
    toggleEditComment = _createActions.toggleEditComment,
    togglePostJob = _createActions.togglePostJob,
    toggleEditJob = _createActions.toggleEditJob,
    toggleRemoveJob = _createActions.toggleRemoveJob,
    toggleForgotModal = _createActions.toggleForgotModal,
    toggleJobDetail = _createActions.toggleJobDetail;



/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePhoto", function() { return changePhoto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].UPLOAD, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].UPLOAD_IMAGE, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].CHANGE_PHOTO, function (data) {
  return data;
}), _createActions2)),
    upload = _createActions.upload,
    uploadImage = _createActions.uploadImage,
    changePhoto = _createActions.changePhoto;



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endPoint; });
var endPoint = "https://comigo-backend.herokuapp.com/api/"; //export const endPoint = "https://comigo-backend-dev.herokuapp.com/api/"
//export const endPoint = "http://comigobackend-dev.us-west-1.elasticbeanstalk.com/api/"
//export const endPoint = "http://comigobackend-production.us-west-1.elasticbeanstalk.com/api/"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(33);
var message__default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/components/common/uploadPhoto/_uploadPhoto.less
var _uploadPhoto = __webpack_require__(34);
var _uploadPhoto_default = /*#__PURE__*/__webpack_require__.n(_uploadPhoto);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(10);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__(28);
var upload__default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react-cropper"
var external__react_cropper_ = __webpack_require__(35);
var external__react_cropper__default = /*#__PURE__*/__webpack_require__.n(external__react_cropper_);

// CONCATENATED MODULE: ./src/components/common/uploadPhoto/UploadPhoto.js




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var projectPhotoIcon = '/static/images/icon-project-photo.svg';

var UploadPhoto__default =
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
      var _this = this;

      var _props = this.props,
          handleBeforeUpload = _props.handleBeforeUpload,
          visibleUploadModal = _props.visibleUploadModal,
          toggleUploadModal = _props.toggleUploadModal,
          handleChangePhoto = _props.handleChangePhoto,
          loadImage = _props.loadImage,
          onCropChange = _props.onCropChange,
          onSaveButton = _props.onSaveButton,
          ratio = _props.ratio,
          status = _props.status;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(modal__default.a, {
        width: 480,
        title: "",
        footer: null,
        visible: visibleUploadModal,
        onCancel: toggleUploadModal
      }, external__react__default.a.createElement("div", {
        className: "upload-modal"
      }, loadImage ? external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__react_cropper__default.a, {
        ref: "cropper",
        src: loadImage,
        style: {
          height: 320,
          width: 320
        } // Cropper.js options
        ,
        aspectRatio: ratio,
        crop: function crop() {
          return onCropChange(_this.refs.cropper.getCroppedCanvas().toDataURL());
        }
      })) : external__react__default.a.createElement(upload__default.a, {
        beforeUpload: handleBeforeUpload,
        name: "avatar",
        listType: "picture-card",
        className: "avatar-uploader",
        showUploadList: false,
        onChange: handleChangePhoto
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "upload-container"
      }, external__react__default.a.createElement("img", {
        src: projectPhotoIcon,
        alt: "project"
      }), external__react__default.a.createElement("div", {
        className: "drag-text"
      }, "Drag photo here"), external__react__default.a.createElement("div", {
        className: "or-devider"
      }, "Or"), external__react__default.a.createElement("div", {
        className: "upload-button"
      }, external__react__default.a.createElement(button__default.a, {
        type: "primary"
      }, "Upload Your Photo"))))), loadImage ? external__react__default.a.createElement("div", {
        className: "upload-footer"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: onSaveButton,
        loading: status === "running",
        type: "primary"
      }, "Save"), external__react__default.a.createElement(upload__default.a, {
        showUploadList: false,
        onChange: handleChangePhoto
      }, external__react__default.a.createElement("div", {
        className: "upload-new-button"
      }, external__react__default.a.createElement("a", {
        className: "Link-Button-2"
      }, "  Upload new photo")))) : external__react__default.a.createElement("div", {
        className: "paddingTop24 Sub-Title-Center"
      }, "You can upload your photo file size up to 2MB."))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/actions/file.js
var file = __webpack_require__(23);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(2);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// CONCATENATED MODULE: ./src/components/common/uploadPhoto/UploadPhotoContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UploadPhotoContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UploadPhotoContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { UploadPhotoContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UploadPhotoContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function UploadPhotoContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UploadPhotoContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UploadPhotoContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) UploadPhotoContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) UploadPhotoContainer__defineProperties(Constructor, staticProps); return Constructor; }

function UploadPhotoContainer__possibleConstructorReturn(self, call) { if (call && (UploadPhotoContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return UploadPhotoContainer__assertThisInitialized(self); }

function UploadPhotoContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function UploadPhotoContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var count = 0;

function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

var UploadPhotoContainer_UploadPhotoContainer =
/*#__PURE__*/
function (_Component) {
  UploadPhotoContainer__inherits(UploadPhotoContainer, _Component);

  function UploadPhotoContainer(props) {
    var _this;

    UploadPhotoContainer__classCallCheck(this, UploadPhotoContainer);

    _this = UploadPhotoContainer__possibleConstructorReturn(this, (UploadPhotoContainer.__proto__ || Object.getPrototypeOf(UploadPhotoContainer)).call(this, props));
    Object.defineProperty(UploadPhotoContainer__assertThisInitialized(_this), "handleBeforeUpload", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(file) {}
    });
    Object.defineProperty(UploadPhotoContainer__assertThisInitialized(_this), "onSaveButton", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var cropData = _this.state.cropData;
        var upload = _this.props.upload;
        upload(cropData);
      }
    });
    Object.defineProperty(UploadPhotoContainer__assertThisInitialized(_this), "onCropChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(cropData) {
        _this.setState({
          cropData: cropData
        });
      }
    });
    Object.defineProperty(UploadPhotoContainer__assertThisInitialized(_this), "handleChangePhoto", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        if (info.event) {
          var isJPG = false;

          switch (info.file.type) {
            case 'image/jpeg':
              isJPG = true;
              break;

            case 'image/png':
              isJPG = true;
              break;

            case 'image/jpg':
              isJPG = true;
              break;

            default:
              isJPG = false;
          }

          if (!isJPG) {
            message__default.a.error('You can only upload JPG file!');
          }

          var isLt2M = info.file.size / 1024 / 1024 < 2;

          if (!isLt2M) {
            message__default.a.error('Image must smaller than 2MB!');
          }

          if (isJPG && isLt2M) getBase64(info.file.originFileObj, function (imageUrl) {
            _this.props.changePhoto(imageUrl);
          });
        }
      }
    });
    _this.state = {
      cropData: null
    };
    return _this;
  }

  UploadPhotoContainer__createClass(UploadPhotoContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.changePhoto(this.props.imageUrl);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var toggleUploadModal = this.props.toggleUploadModal;
      if (nextProps.imageUrl !== this.props.imageUrl) this.props.changePhoto(nextProps.imageUrl);
      if (nextProps.status === "success" && nextProps.status !== this.props.status) toggleUploadModal();
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _uploadPhoto_default.a
        }
      }), external__react__default.a.createElement(UploadPhoto__default, _extends({}, this.state, this.props, {
        handleBeforeUpload: this.handleBeforeUpload,
        onCropChange: this.onCropChange,
        handleChangePhoto: this.handleChangePhoto,
        onSaveButton: this.onSaveButton
      })));
    }
  }]);

  return UploadPhotoContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    loadImage: state.file.loadImage,
    status: state.file.status
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(_objectSpread({}, file), dispatch);
}
/* harmony default export */ var uploadPhoto_UploadPhotoContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(UploadPhotoContainer_UploadPhotoContainer));

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = ".upload-modal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 56px 0;\n}\n.upload-modal .upload-container img {\n  width: 56px;\n  height: 56px;\n}\n.upload-modal .drag-text {\n  color: #c3ced9;\n  padding-top: 24px;\n  font-size: 24px;\n  font-weight: 500;\n}\n.upload-modal .or-devider {\n  color: #a1aab3;\n  padding: 36px 0;\n}\n.upload-modal .upload-button button {\n  width: 240px;\n  height: 48px;\n}\n.upload-modal .upload-footer {\n  text-align: center;\n  padding-top: 24px;\n  color: #a1aab3;\n}\n.upload-modal .upload-footer button {\n  width: 320px;\n  height: 48px;\n}\n.ant-upload.ant-upload-select-picture-card {\n  border: 2px dashed #d9d9d9;\n  background-color: #fff;\n  border-radius: 8px;\n  margin: 0;\n}\n.avatar-uploader .ant-upload {\n  width: 320px !important;\n  height: 320px !important;\n}\n.avatar-uploader .ant-upload img {\n  max-width: 320px;\n  height: auto;\n}\n.upload-new-button {\n  padding-top: 24px;\n  text-align: center;\n}\n.cropper-container {\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  direction: ltr;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.cropper-container img {\n  /* Avoid margin top issue (Occur only when margin-top <= -height) */\n  display: block;\n  min-width: 0 !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  width: 100%;\n  height: 100%;\n  image-orientation: 0deg;\n}\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.cropper-wrap-box {\n  overflow: hidden;\n}\n.cropper-drag-box {\n  opacity: 0;\n  background-color: #fff;\n}\n.cropper-modal {\n  opacity: .5;\n  background-color: #000;\n}\n.cropper-view-box {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n}\n.cropper-dashed {\n  position: absolute;\n  display: block;\n  opacity: .5;\n  border: 0 dashed #eee;\n}\n.cropper-dashed.dashed-h {\n  top: 33.33333%;\n  left: 0;\n  width: 100%;\n  height: 33.33333%;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.cropper-dashed.dashed-v {\n  top: 0;\n  left: 33.33333%;\n  width: 33.33333%;\n  height: 100%;\n  border-right-width: 1px;\n  border-left-width: 1px;\n}\n.cropper-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.cropper-center:before,\n.cropper-center:after {\n  position: absolute;\n  display: block;\n  content: ' ';\n  background-color: #eee;\n}\n.cropper-center:before {\n  top: 0;\n  left: -3px;\n  width: 7px;\n  height: 1px;\n}\n.cropper-center:after {\n  top: -3px;\n  left: 0;\n  width: 1px;\n  height: 7px;\n}\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: .1;\n}\n.cropper-face {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n}\n.cropper-line {\n  background-color: #39f;\n}\n.cropper-line.line-e {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.cropper-line.line-n {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.cropper-line.line-w {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.cropper-line.line-s {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.cropper-point {\n  width: 5px;\n  height: 5px;\n  opacity: .75;\n  background-color: #39f;\n}\n.cropper-point.point-e {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.cropper-point.point-n {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.cropper-point.point-w {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.cropper-point.point-s {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.cropper-point.point-ne {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.cropper-point.point-nw {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.cropper-point.point-sw {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.cropper-point.point-se {\n  right: -3px;\n  bottom: -3px;\n  width: 20px;\n  height: 20px;\n  cursor: se-resize;\n  opacity: 1;\n}\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    width: 15px;\n    height: 15px;\n  }\n}\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    width: 10px;\n    height: 10px;\n  }\n}\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    width: 5px;\n    height: 5px;\n    opacity: 0.75;\n  }\n}\n.cropper-point.point-se:before {\n  position: absolute;\n  right: -50%;\n  bottom: -50%;\n  display: block;\n  width: 200%;\n  height: 200%;\n  content: ' ';\n  opacity: 0;\n  background-color: #39f;\n}\n.cropper-invisible {\n  opacity: 0;\n}\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n.cropper-hide {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n}\n.cropper-hidden {\n  display: none !important;\n}\n.cropper-move {\n  cursor: move;\n}\n.cropper-crop {\n  cursor: crosshair;\n}\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-cropper");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(2);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(39);
var tooltip__default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/tag"
var tag_ = __webpack_require__(40);
var tag__default = /*#__PURE__*/__webpack_require__.n(tag_);

// CONCATENATED MODULE: ./src/components/common/customTag/CustomTag.js




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CustomTag__default =
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
      var _props = this.props,
          handleInputChange = _props.handleInputChange,
          handleInputConfirm = _props.handleInputConfirm,
          handleClose = _props.handleClose,
          tags = _props.tags,
          inputVisible = _props.inputVisible,
          saveInputRef = _props.saveInputRef,
          showInput = _props.showInput,
          inputValue = _props.inputValue,
          text = _props.text,
          type = _props.type;
      return external__react__default.a.createElement("div", {
        className: "custom-tag__container"
      }, tags.map(function (tag, index) {
        var isLongTag = tag.length > 20;
        var tagElem = external__react__default.a.createElement(tag__default.a, {
          key: tag,
          closable: true,
          afterClose: function afterClose() {
            return handleClose(tag);
          }
        }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag);
        return isLongTag ? external__react__default.a.createElement(tooltip__default.a, {
          title: tag,
          key: tag
        }, tagElem) : tagElem;
      }), !inputVisible && external__react__default.a.createElement(input__default.a, {
        placeholder: text,
        ref: saveInputRef,
        type: "text",
        size: "small",
        style: {
          width: type === "link" ? 200 : 80
        },
        value: inputValue,
        onChange: handleInputChange,
        onBlur: handleInputConfirm,
        onPressEnter: handleInputConfirm
      }));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/customTag/_customTag.less
var _customTag = __webpack_require__(41);
var _customTag_default = /*#__PURE__*/__webpack_require__.n(_customTag);

// CONCATENATED MODULE: ./src/components/common/customTag/CustomTagContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
function CustomTagContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CustomTagContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { CustomTagContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CustomTagContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CustomTagContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CustomTagContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CustomTagContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) CustomTagContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) CustomTagContainer__defineProperties(Constructor, staticProps); return Constructor; }

function CustomTagContainer__possibleConstructorReturn(self, call) { if (call && (CustomTagContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return CustomTagContainer__assertThisInitialized(self); }

function CustomTagContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CustomTagContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var CustomTagContainer_CustomTagContainer =
/*#__PURE__*/
function (_Component) {
  CustomTagContainer__inherits(CustomTagContainer, _Component);

  function CustomTagContainer(props) {
    var _this;

    CustomTagContainer__classCallCheck(this, CustomTagContainer);

    _this = CustomTagContainer__possibleConstructorReturn(this, (CustomTagContainer.__proto__ || Object.getPrototypeOf(CustomTagContainer)).call(this, props));
    Object.defineProperty(CustomTagContainer__assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(removedTag) {
        var tags = _this.props.tags.filter(function (tag) {
          return tag !== removedTag;
        });

        _this.props.onTagsChange(tags);
      }
    });
    Object.defineProperty(CustomTagContainer__assertThisInitialized(_this), "showInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          inputVisible: true
        }, function () {
          return _this.input.focus();
        });
      }
    });
    Object.defineProperty(CustomTagContainer__assertThisInitialized(_this), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          inputValue: e.target.value
        });
      }
    });
    Object.defineProperty(CustomTagContainer__assertThisInitialized(_this), "handleInputConfirm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var state = _this.state;
        var inputValue = state.inputValue;
        var tags = _this.props.tags;

        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = _toConsumableArray(tags).concat([inputValue]);
        }

        _this.props.onTagsChange(tags);

        _this.setState({
          inputVisible: false,
          inputValue: ''
        });
      }
    });
    Object.defineProperty(CustomTagContainer__assertThisInitialized(_this), "saveInputRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(input) {
        return _this.input = input;
      }
    });
    _this.state = {
      inputVisible: false,
      inputValue: ''
    };
    return _this;
  }

  CustomTagContainer__createClass(CustomTagContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _customTag_default.a
        }
      }), external__react__default.a.createElement(CustomTag__default, _extends({}, this.state, this.props, {
        handleClose: this.handleClose,
        showInput: this.showInput,
        handleInputChange: this.handleInputChange,
        handleInputConfirm: this.handleInputConfirm,
        saveInputRef: this.saveInputRef
      })));
    }
  }]);

  return CustomTagContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var customTag_CustomTagContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(CustomTagContainer_CustomTagContainer));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(2);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(25);
var select__default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./src/components/common/majorTag/MajorTag.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Option = select__default.a.Option;

var MajorTag__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "renderMajor",
    value: function renderMajor(listData) {
      var children = [];

      for (var i = 0; i < listData.length; i++) {
        children.push(external__react__default.a.createElement(Option, {
          key: listData[i]
        }, listData[i]));
      }

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          handleChange = _props.handleChange,
          listData = _props.listData;
      return external__react__default.a.createElement("div", {
        className: "major__container"
      }, listData && external__react__default.a.createElement(select__default.a, {
        value: value,
        mode: "multiple",
        style: {
          width: '100%'
        },
        placeholder: "Please select",
        onChange: handleChange
      }, this.renderMajor(listData)));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/majorTag/_majorTag.less
var _majorTag = __webpack_require__(42);
var _majorTag_default = /*#__PURE__*/__webpack_require__.n(_majorTag);

// CONCATENATED MODULE: ./src/components/common/majorTag/MajorTagContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
function MajorTagContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MajorTagContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { MajorTagContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MajorTagContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function MajorTagContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MajorTagContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MajorTagContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) MajorTagContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) MajorTagContainer__defineProperties(Constructor, staticProps); return Constructor; }

function MajorTagContainer__possibleConstructorReturn(self, call) { if (call && (MajorTagContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return MajorTagContainer__assertThisInitialized(self); }

function MajorTagContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MajorTagContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var MajorTagContainer_MajorTagContainer =
/*#__PURE__*/
function (_Component) {
  MajorTagContainer__inherits(MajorTagContainer, _Component);

  function MajorTagContainer(props) {
    var _this;

    MajorTagContainer__classCallCheck(this, MajorTagContainer);

    _this = MajorTagContainer__possibleConstructorReturn(this, (MajorTagContainer.__proto__ || Object.getPrototypeOf(MajorTagContainer)).call(this, props));
    Object.defineProperty(MajorTagContainer__assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.props.onMajorChange(e);
      }
    });
    _this.state = {
      inputVisible: false,
      inputValue: ''
    };
    return _this;
  }

  MajorTagContainer__createClass(MajorTagContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _majorTag_default.a
        }
      }), external__react__default.a.createElement(MajorTag__default, _extends({}, this.state, this.props, {
        handleChange: this.handleChange
      })));
    }
  }]);

  return MajorTagContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    majorList: state.project.majorList
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    getMajorList: project["getMajorList"]
  }, dispatch);
}
/* harmony default export */ var majorTag_MajorTagContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(MajorTagContainer_MajorTagContainer));

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = ".custom-tag__container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.custom-tag__container input {\n  min-width: 200px;\n  border: none !important;\n}\n.custom-tag__container input:focus {\n  box-shadow: none;\n}\n";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = ".major__container input {\n  border: none !important;\n}\n.major__container .ant-select-selection {\n  border: none;\n  box-shadow: none !important;\n}\n.major__container .ant-select-selection:focus {\n  box-shadow: none;\n}\n.major__container .ant-select-selection__choice {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-align: center;\n  color: #2e3033;\n  border-radius: 4px;\n  margin-right: 8px !important;\n  margin-top: 0;\n  border: none;\n  background: #edf0f2 !important;\n  height: 28px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.major__container .ant-select-selection__choice:first-child {\n  margin-left: 0px !important;\n}\n";

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPeopleList", function() { return getPeopleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPeopleDetail", function() { return getPeopleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subcribe", function() { return subcribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPeopleMayKnow", function() { return getPeopleMayKnow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_PEOPLE_LIST, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_PEOPLE_MAY_KNOW, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_PEOPLE_DETAIL, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].SUBCRIBE, function (data) {
  return data;
}), _createActions2)),
    getPeopleList = _createActions.getPeopleList,
    getPeopleDetail = _createActions.getPeopleDetail,
    subcribe = _createActions.subcribe,
    getPeopleMayKnow = _createActions.getPeopleMayKnow;



/***/ }),
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

module.exports = ".update__card-container {\n  border-radius: 2px;\n  box-shadow: 0 6px 16px 0 rgba(54, 54, 54, 0.15);\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.update__card-container .ant-card-body {\n  padding: 0;\n}\n.update__card-container .update__header-container {\n  padding-bottom: 22px;\n  display: flex;\n  justify-content: space-between;\n}\n.update__card-container .update__header-container .update__left {\n  display: flex;\n}\n.update__card-container .update__header-container .update__left img {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.update__card-container .update__header-container .update__left .text-blue {\n  color: #006cd9;\n}\n.update__card-container .update__header-container .update__left .update__title {\n  display: flex;\n  flex-direction: column;\n}\n.update__card-container .update__header-container .update__right img {\n  width: 24px;\n  cursor: pointer;\n}\n.update__card-container .update__body-container {\n  white-space: pre-line;\n  box-shadow: inset 0 -1px 0 0 rgba(54, 54, 54, 0.1);\n  padding-bottom: 20px;\n}\n.update__card-container .update__comment-container {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 20px;\n}\n.update__card-container .update__comment-container .update__comment-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.update__card-container .update__comment-container:first-child {\n  padding-top: 24px;\n}\n.update__card-container .update__comment-container .update__comment-header {\n  display: flex;\n  align-items: flex-start;\n}\n.update__card-container .update__comment-container .update__comment-header .header__content {\n  display: flex;\n  flex-direction: column;\n}\n.update__card-container .update__comment-container .update__comment-header .header__content .name {\n  margin-right: 4px;\n  display: flex;\n  align-items: center;\n}\n.update__card-container .update__comment-container .update__comment-header img {\n  object-fit: cover;\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n.update__card-container .update__comment-container .update__comment-body {\n  margin-top: 4px;\n  display: flex;\n  align-items: flex-start;\n}\n.update__card-container .update__comment-container .update__comment-body .comment__right img {\n  width: 16px;\n  cursor: pointer;\n}\n.update__card-container .update__comment-all {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n}\n.update__card-container .update__user-comment {\n  display: flex;\n  align-items: center;\n  padding-top: 24px;\n}\n.update__card-container .update__user-comment img {\n  margin-right: 8px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n}\n.update__card-container .update__user-comment .input-comment {\n  width: 100%;\n}\n.update__card-container .update__user-comment .input-comment .ant-row {\n  width: 100%;\n}\n.update__card-container .update__user-comment .input-comment .ant-row .ant-form-item-control-wrapper {\n  width: 100%;\n}\n.update__card-container .update__user-comment .input-comment .ant-row .ant-form-item-control-wrapper input {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  border-radius: 16px;\n  max-height: 200px !important;\n  height: 40px !important;\n  opacity: 0.8;\n  background-color: #f5f7fa;\n  border: none !important;\n}\n.ant-dropdown-menu-item img {\n  width: 12px;\n  height: 12px;\n  margin-right: 8px;\n}\n";

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(13);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./src/components/verify/VerifySuccess.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var checkIcon = '/static/images/icon-check.svg';

var VerifySuccess__default =
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
      var handleContinue = this.props.handleContinue;
      return external__react__default.a.createElement("div", {
        className: "verify"
      }, external__react__default.a.createElement(card__default.a, {
        bordered: false
      }, external__react__default.a.createElement("div", {
        className: "check-icon"
      }, external__react__default.a.createElement("img", {
        src: checkIcon,
        alt: "check"
      })), external__react__default.a.createElement("div", {
        className: "verify-desc H2-Black-Center"
      }, "Your email has successfully been verified!"), external__react__default.a.createElement("div", {
        className: "verify-button "
      }, external__react__default.a.createElement(button__default.a, {
        onClick: handleContinue,
        className: "Button-White-Center",
        type: "primary"
      }, "Get Started"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/verify/VerifyAccount.js


function VerifyAccount__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VerifyAccount__typeof = function _typeof(obj) { return typeof obj; }; } else { VerifyAccount__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VerifyAccount__typeof(obj); }

function VerifyAccount__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VerifyAccount__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VerifyAccount__createClass(Constructor, protoProps, staticProps) { if (protoProps) VerifyAccount__defineProperties(Constructor.prototype, protoProps); if (staticProps) VerifyAccount__defineProperties(Constructor, staticProps); return Constructor; }

function VerifyAccount__possibleConstructorReturn(self, call) { if (call && (VerifyAccount__typeof(call) === "object" || typeof call === "function")) { return call; } return VerifyAccount__assertThisInitialized(self); }

function VerifyAccount__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VerifyAccount__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var VerifyAccount__default =
/*#__PURE__*/
function (_Component) {
  VerifyAccount__inherits(_default, _Component);

  function _default() {
    VerifyAccount__classCallCheck(this, _default);

    return VerifyAccount__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  VerifyAccount__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          userData = _props.userData,
          handleResendEmail = _props.handleResendEmail;
      return external__react__default.a.createElement("div", {
        className: "verify"
      }, external__react__default.a.createElement(card__default.a, {
        bordered: false
      }, external__react__default.a.createElement("div", {
        className: "verify-title H2-Black-Center"
      }, "Verify Your Email Address"), external__react__default.a.createElement("div", {
        className: "verify-desc Body-Dark-Grey-Center"
      }, "Welcome to Comigo! We've sent an email to ", external__react__default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        }
      }, userData.email), "  to verify your email address. Please click the link in that email to continue."), external__react__default.a.createElement("div", {
        className: "verify-resend Button-Dark-Grey-Center"
      }, "Didn't receive an email? ", external__react__default.a.createElement("span", null, external__react__default.a.createElement("a", {
        className: "Button-Yellow-Center",
        onClick: handleResendEmail
      }, "Resend")))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/verify/_verify.less
var _verify = __webpack_require__(50);
var _verify_default = /*#__PURE__*/__webpack_require__.n(_verify);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/actions/user.js
var user = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/verify/VerifyAccountContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function VerifyAccountContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VerifyAccountContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { VerifyAccountContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VerifyAccountContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function VerifyAccountContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VerifyAccountContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VerifyAccountContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) VerifyAccountContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) VerifyAccountContainer__defineProperties(Constructor, staticProps); return Constructor; }

function VerifyAccountContainer__possibleConstructorReturn(self, call) { if (call && (VerifyAccountContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return VerifyAccountContainer__assertThisInitialized(self); }

function VerifyAccountContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function VerifyAccountContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var VerifyAccountContainer_VerifyAccountContainer =
/*#__PURE__*/
function (_Component) {
  VerifyAccountContainer__inherits(VerifyAccountContainer, _Component);

  function VerifyAccountContainer(props) {
    var _this;

    VerifyAccountContainer__classCallCheck(this, VerifyAccountContainer);

    _this = VerifyAccountContainer__possibleConstructorReturn(this, (VerifyAccountContainer.__proto__ || Object.getPrototypeOf(VerifyAccountContainer)).call(this, props));
    Object.defineProperty(VerifyAccountContainer__assertThisInitialized(_this), "handleResendEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var resend = _this.props.resend;
        resend();
      }
    });
    Object.defineProperty(VerifyAccountContainer__assertThisInitialized(_this), "handleContinue", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.location.replace("/");
      }
    });
    return _this;
  }

  VerifyAccountContainer__createClass(VerifyAccountContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (routes["Router"].query && routes["Router"].query.token) this.props.verify(routes["Router"].query.token);
    }
  }, {
    key: "render",
    value: function render() {
      var userData = this.props.userData;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _verify_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Verify Account"
      }), userData && external__react__default.a.createElement("div", null, userData.verified === true ? external__react__default.a.createElement(VerifySuccess__default, _extends({}, this.state, this.props, {
        handleContinue: this.handleContinue
      })) : external__react__default.a.createElement(VerifyAccount__default, _extends({
        handleResendEmail: this.handleResendEmail
      }, this.state, this.props))));
    }
  }]);

  return VerifyAccountContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    userData: state.user.data
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(_objectSpread({}, user), dispatch);
}
/* harmony default export */ var verify_VerifyAccountContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(VerifyAccountContainer_VerifyAccountContainer));

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = ".verify {\n  padding: 120px 0;\n  text-align: center;\n  max-width: 730px;\n  margin: 0 auto;\n}\n.verify .verify-title {\n  padding-bottom: 16px;\n}\n.verify .verify-desc {\n  padding-bottom: 40px;\n}\n.verify .verify-button {\n  padding-bottom: 24px;\n}\n.verify .verify-button button {\n  width: 400px;\n  height: 48px;\n  border-radius: 24px;\n  background-color: var(--macaroni-and-cheese);\n}\n.verify .verify-resend {\n  color: #999999;\n}\n.verify .verify-resend span a {\n  font-size: 18px;\n}\n.verify .check-icon {\n  padding-bottom: 21px;\n}\n.verify .check-icon img {\n  width: 64px;\n}\n";

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(22);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(19);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(25);
var select__default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./src/components/common/customTag/CustomTagContainer.js + 1 modules
var CustomTagContainer = __webpack_require__(36);

// EXTERNAL MODULE: ./src/components/common/majorTag/MajorTagContainer.js + 1 modules
var MajorTagContainer = __webpack_require__(37);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/updateProfile/UpdateProfile.js







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var profileIcon = '/static/images/icon-profile.svg';
var FormItem = form__default.a.Item;
var Option = select__default.a.Option;
var TextArea = input__default.a.TextArea;

var UpdateProfile__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "renderYear",
    value: function renderYear() {
      var options = [];

      for (var i = 2017; i < 2032; i++) {
        options.push(external__react__default.a.createElement(Option, {
          key: i,
          value: i
        }, i));
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          listData = _props.listData,
          majors = _props.majors,
          onMajorChange = _props.onMajorChange,
          onTagLinkChange = _props.onTagLinkChange,
          onTagSkillChange = _props.onTagSkillChange,
          onEmailReceiveChange = _props.onEmailReceiveChange,
          onTagInterestChange = _props.onTagInterestChange,
          interests = _props.interests,
          links = _props.links,
          skills = _props.skills,
          toggleUploadModal = _props.toggleUploadModal,
          preloadImage = _props.preloadImage,
          userData = _props.userData,
          handleSubmit = _props.handleSubmit,
          status = _props.status;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", {
        className: "profile-update"
      }, external__react__default.a.createElement("div", {
        className: "H1-Black-Left"
      }, "Edit Profile"), external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmit
      }, external__react__default.a.createElement("div", {
        className: "basic-info"
      }, preloadImage ? external__react__default.a.createElement("div", {
        className: "cropped-container"
      }, external__react__default.a.createElement("div", {
        className: "wrapper"
      }, external__react__default.a.createElement("div", {
        onClick: toggleUploadModal,
        className: "edit-text"
      }, "Edit Photo")), external__react__default.a.createElement("img", {
        className: "user-photo",
        alt: "avatar",
        src: preloadImage
      })) : external__react__default.a.createElement("div", {
        onClick: toggleUploadModal,
        className: "photo-container"
      }, external__react__default.a.createElement("img", {
        alt: "profile",
        src: profileIcon
      }), external__react__default.a.createElement("div", {
        className: "add-photo"
      }, "Upload Cover")), external__react__default.a.createElement("div", {
        className: "basic-info paddingBottom40"
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 16
      }, external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "First Name"), getFieldDecorator('firstName', {
        rules: [{
          required: true,
          message: 'Please input your first name!',
          whitespace: true
        }],
        initialValue: userData.firstName
      })(external__react__default.a.createElement(input__default.a, null)))), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Last Name"), getFieldDecorator('lastName', {
        rules: [{
          required: true,
          message: 'Please input your last name!',
          whitespace: true
        }],
        initialValue: userData.lastName
      })(external__react__default.a.createElement(input__default.a, null))))), external__react__default.a.createElement(row__default.a, {
        gutter: 16
      }, external__react__default.a.createElement(col__default.a, {
        md: 24,
        lg: 24
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom0 "
      }, external__react__default.a.createElement("div", {
        className: "lBody-Dark-Grey-Left "
      }, "Email"), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          message: 'Please input your E-mail!'
        }],
        initialValue: userData.email
      })(external__react__default.a.createElement(input__default.a, {
        disabled: true,
        id: "success"
      })))), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom0 paddingTop16 graduation__year"
      }, external__react__default.a.createElement("div", {
        className: "lBody-Dark-Grey-Left "
      }, "Graduation Year"), getFieldDecorator('graduationYear', {
        initialValue: userData.graduationYear
      })(external__react__default.a.createElement(select__default.a, null, this.renderYear()))))))), external__react__default.a.createElement("div", {
        className: "ability paddingBottom24"
      }, external__react__default.a.createElement("div", {
        className: "paddingBottom32 H2-Black-Left"
      }, "Basic Information"), external__react__default.a.createElement("div", {
        className: "lBody-Dark-Grey-Left"
      }, "Bio"), external__react__default.a.createElement("div", {
        className: "bio-info "
      }, external__react__default.a.createElement(FormItem, null, getFieldDecorator('bio', {
        rules: [{
          whitespace: true
        }],
        initialValue: userData.bio
      })(external__react__default.a.createElement(TextArea, {
        placeholder: "Type something about yourself..."
      })))), external__react__default.a.createElement("div", {
        className: "lBody-Dark-Grey-Left"
      }, "Skills"), external__react__default.a.createElement("div", {
        className: "skill-info marginBottom24"
      }, listData && external__react__default.a.createElement(MajorTagContainer["a" /* default */], {
        listData: listData.skillData,
        value: skills,
        text: "Add your strength of skills...",
        onMajorChange: onTagSkillChange,
        color: "#006cd9"
      })), external__react__default.a.createElement("div", {
        className: "lBody-Dark-Grey-Left"
      }, "Interests"), external__react__default.a.createElement("div", {
        className: "skill-info marginBottom24"
      }, listData && external__react__default.a.createElement(MajorTagContainer["a" /* default */], {
        listData: listData.skillData,
        color: "#12ca00",
        value: interests,
        text: "Add your most interests...",
        onMajorChange: onTagInterestChange
      })), external__react__default.a.createElement("div", {
        className: "lBody-Dark-Grey-Left"
      }, "Majors"), external__react__default.a.createElement("div", {
        className: "skill-info "
      }, listData && external__react__default.a.createElement(MajorTagContainer["a" /* default */], {
        listData: listData.majorData,
        color: "#edf0f2",
        value: majors,
        text: "Add majors",
        onMajorChange: onMajorChange
      }))), external__react__default.a.createElement("div", {
        className: "ability paddingBottom24"
      }), external__react__default.a.createElement("div", {
        className: "links paddingBottom40"
      }, external__react__default.a.createElement("div", {
        className: "paddingBottom32 H2-Black-Left"
      }, "Social Links"), external__react__default.a.createElement("div", {
        className: "links-tag-container"
      }, external__react__default.a.createElement(CustomTagContainer["a" /* default */], {
        text: "Add link",
        type: "link",
        onTagsChange: onTagLinkChange,
        tags: links
      }))), external__react__default.a.createElement("div", {
        className: "update-button"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return routes["Router"].push('/profile');
        },
        className: "skip-button"
      }, "Cancel"), external__react__default.a.createElement("div", {
        className: "next-button "
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        loading: status === 'running',
        htmlType: "submit",
        type: "primary"
      }, "SAVE")))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/updateProfile/_updateProfile.less
var _updateProfile = __webpack_require__(52);
var _updateProfile_default = /*#__PURE__*/__webpack_require__.n(_updateProfile);

// EXTERNAL MODULE: ./src/components/common/uploadPhoto/UploadPhotoContainer.js + 1 modules
var UploadPhotoContainer = __webpack_require__(32);

// EXTERNAL MODULE: ./src/actions/file.js
var file = __webpack_require__(23);

// EXTERNAL MODULE: ./src/actions/user.js
var user = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/updateProfile/UpdateProfileContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UpdateProfileContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UpdateProfileContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { UpdateProfileContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UpdateProfileContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function UpdateProfileContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UpdateProfileContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UpdateProfileContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) UpdateProfileContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) UpdateProfileContainer__defineProperties(Constructor, staticProps); return Constructor; }

function UpdateProfileContainer__possibleConstructorReturn(self, call) { if (call && (UpdateProfileContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return UpdateProfileContainer__assertThisInitialized(self); }

function UpdateProfileContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function UpdateProfileContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var UpdateProfileContainer_UpdateProfileContainer =
/*#__PURE__*/
function (_Component) {
  UpdateProfileContainer__inherits(UpdateProfileContainer, _Component);

  function UpdateProfileContainer(props) {
    var _this;

    UpdateProfileContainer__classCallCheck(this, UpdateProfileContainer);

    _this = UpdateProfileContainer__possibleConstructorReturn(this, (UpdateProfileContainer.__proto__ || Object.getPrototypeOf(UpdateProfileContainer)).call(this, props));
    Object.defineProperty(UpdateProfileContainer__assertThisInitialized(_this), "onMajorChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(majors) {
        _this.setState({
          majors: majors
        });
      }
    });
    Object.defineProperty(UpdateProfileContainer__assertThisInitialized(_this), "onTagLinkChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(links) {
        _this.setState({
          links: links
        });
      }
    });
    Object.defineProperty(UpdateProfileContainer__assertThisInitialized(_this), "onTagSkillChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(skills) {
        _this.setState({
          skills: skills
        });
      }
    });
    Object.defineProperty(UpdateProfileContainer__assertThisInitialized(_this), "onTagInterestChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(interests) {
        _this.setState({
          interests: interests
        });
      }
    });
    Object.defineProperty(UpdateProfileContainer__assertThisInitialized(_this), "toggleUploadModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          visibleUploadModal: !_this.state.visibleUploadModal
        });
      }
    });
    Object.defineProperty(UpdateProfileContainer__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var updateProfile = _this.props.updateProfile;
        var _this$state = _this.state,
            links = _this$state.links,
            skills = _this$state.skills,
            preloadImage = _this$state.preloadImage,
            majors = _this$state.majors,
            interests = _this$state.interests;
        e.preventDefault();

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            updateProfile({
              majors: majors,
              interests: interests,
              graduationYear: values.graduationYear,
              links: links,
              skills: skills,
              firstName: values.firstName,
              lastName: values.lastName,
              bio: values.bio,
              pictureURL: preloadImage
            });
          }
        });
      }
    });
    _this.state = {
      links: [],
      skills: [],
      interests: [],
      majors: [],
      graduationYear: "",
      visibleUploadModal: false,
      preloadImage: null
    };
    return _this;
  }

  UpdateProfileContainer__createClass(UpdateProfileContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var userData = nextProps.userData;

      if (userData !== this.props.userData) {
        this.setState({
          interests: userData.interests || [],
          skills: userData.skills || [],
          links: userData.links || [],
          majors: userData.majors || [],
          graduationYear: userData.graduationYear || "",
          preloadImage: userData.pictureURL
        });
      }

      if (nextProps.returnImage != this.props.returnImage) this.setState({
        preloadImage: nextProps.returnImage
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var userData = this.props.userData;

      if (userData) {
        this.setState({
          interests: userData.interests || [],
          skills: userData.skills || [],
          links: userData.links || [],
          majors: userData.majors || [],
          graduationYear: userData.graduationYear || "",
          preloadImage: userData.pictureURL
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          visibleUploadModal = _state.visibleUploadModal,
          preloadImage = _state.preloadImage;
      var userData = this.props.userData;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _updateProfile_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Update your profile"
      }), userData && external__react__default.a.createElement(UpdateProfile__default, _extends({}, this.state, this.props, {
        onMajorChange: this.onMajorChange,
        handleSubmit: this.handleSubmit,
        toggleUploadModal: this.toggleUploadModal,
        onTagSkillChange: this.onTagSkillChange,
        onTagLinkChange: this.onTagLinkChange,
        onTagInterestChange: this.onTagInterestChange
      })), external__react__default.a.createElement(UploadPhotoContainer["a" /* default */], {
        ratio: 1,
        imageUrl: preloadImage,
        toggleUploadModal: this.toggleUploadModal,
        visibleUploadModal: visibleUploadModal
      }));
    }
  }]);

  return UpdateProfileContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    userData: state.user.data,
    status: state.user.status,
    image: state.file.image,
    returnImage: state.file.returnImage,
    listData: state.project.listData
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(_objectSpread({}, file, user), dispatch);
}
/* harmony default export */ var updateProfile_UpdateProfileContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(UpdateProfileContainer_UpdateProfileContainer)));

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = ".profile-update {\n  padding: 120px 0;\n  width: 350px;\n  margin: 0 auto;\n}\n.profile-update .label-form {\n  font-size: 14px;\n}\n.profile-update .basic-info {\n  padding-top: 60px;\n}\n.profile-update .basic-info .cropped-container {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin-right: 24px;\n}\n.profile-update .basic-info .cropped-container .user-photo {\n  border-radius: 50%;\n  width: 100%;\n}\n.profile-update .basic-info .cropped-container .wrapper {\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  height: 120px;\n  position: absolute;\n  z-index: 10;\n  width: 120px;\n  border-radius: 50%;\n  background-image: linear-gradient(to bottom, rgba(38, 38, 38, 0.05), rgba(38, 38, 38, 0.32));\n}\n.profile-update .basic-info .cropped-container .wrapper .edit-text {\n  cursor: pointer;\n  color: #fff;\n  padding-bottom: 16px;\n  font-weight: 500;\n}\n.profile-update .basic-info .cropped-container:hover .wrapper {\n  visibility: visible;\n}\n.profile-update .basic-info .photo-container {\n  cursor: pointer;\n  border-radius: 8px;\n  border: dashed 1px #e6e6e6;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: flex;\n  width: 160px;\n  height: 160px;\n  margin-right: 24px;\n}\n.profile-update .basic-info .photo-container img {\n  width: 70px;\n  height: 80px;\n}\n.profile-update .basic-info .photo-container .add-photo {\n  padding-top: 24px;\n  font-weight: 500;\n}\n.profile-update .basic-info .basic-info {\n  width: 100%;\n}\n.profile-update .basic-info .basic-info input[type=\"text\"] {\n  font-size: 14px;\n}\n.profile-update .basic-info .basic-info .graduation__year .ant-select-selection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 48px;\n  border: 1px solid #c3ced9;\n}\n.profile-update .ability .bio-info {\n  position: relative;\n}\n.profile-update .ability .bio-info .label-form {\n  top: -8px;\n  height: inherit;\n}\n.profile-update .ability .skill-info {\n  position: relative;\n  border: solid 1px #c3ced9;\n  padding: 10px 12px;\n  border-radius: 4px;\n  padding-bottom: 4px;\n}\n.profile-update .ability .skill-info .label-form {\n  font-size: 14px;\n  height: 16px;\n  top: -10px;\n}\n.profile-update .ability .skill-info input[type=\"text\"] {\n  font-size: 14px;\n}\n.profile-update .ability .skill-info .new-tag {\n  color: #45494d !important;\n}\n.profile-update .ability .skill-info .new-tag i {\n  color: #45494d !important;\n}\n.profile-update .links .link-button button {\n  border: solid 1px #a1aab3;\n  width: 85px;\n  height: 28px;\n  font-size: 12px;\n  overflow: hidden;\n}\n.profile-update .links .links-tag-container .ant-tag {\n  border: solid 1px #a1aab3;\n  padding: 4px 8px;\n  font-size: 12px;\n  margin-bottom: 8px;\n  background-color: #fff;\n  color: #a1aab3;\n}\n.profile-update .links .links-tag-container .ant-tag i {\n  color: #a1aab3 !important;\n}\n.profile-update .links .links-tag-container input {\n  height: 30px !important;\n  font-size: 12px;\n}\n.profile-update .links .links-tag-container .new-tag {\n  width: 85px;\n  text-align: center;\n}\n.profile-update .update-button {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.profile-update .update-button .skip-button {\n  color: #999999;\n  padding-right: 32px;\n}\n.profile-update .update-button .next-button button {\n  border-radius: 24px;\n  width: 120px;\n  height: 48px;\n}\n";

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(13);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__(59);
var dropdown__default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(60);
var menu__default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(10);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./src/components/common/Image.js
var Image = __webpack_require__(12);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(26);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/common/updateCard/UpdateCard.js







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var optionIcon = '/static/images/icon-option-2.svg';
var editIcon = '/static/images/icon-edit-black.svg';
var trashIcon = '/static/images/icon-trash-black.svg';
var UpdateCard_confirm = modal__default.a.confirm;

var UpdateCard__default =
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
      var _props = this.props,
          detail = _props.detail,
          data = _props.data,
          handleDeletePost = _props.handleDeletePost,
          status = _props.status,
          toggleEditUpdate = _props.toggleEditUpdate,
          edit = _props.edit,
          userData = _props.userData,
          handlePostComment = _props.handlePostComment,
          handleDeleteComment = _props.handleDeleteComment,
          toggleEditComment = _props.toggleEditComment,
          isShowMore = _props.isShowMore,
          handleShowMore = _props.handleShowMore,
          isShowMoreTitle = _props.isShowMoreTitle,
          handleShowMoreTitle = _props.handleShowMoreTitle,
          handleGetComment = _props.handleGetComment;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement(card__default.a, {
        bordered: false,
        className: "update__card-container marginTop8"
      }, external__react__default.a.createElement("div", {
        className: "update__header-container"
      }, external__react__default.a.createElement("div", {
        className: "update__left"
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: detail.owner.pictureURL
      }), external__react__default.a.createElement("div", {
        className: "update__title"
      }, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return routes["Router"].pushRoute("/user/" + detail.owner._id);
        },
        className: "Button-Black-Left"
      }, detail.owner.firstName + " " + detail.owner.lastName + " "), "created a ".concat(external__moment__default.a.unix(data.updatedAt).isSame(external__moment__default()(), 'hour') ? "new" : "", " post in "), external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return routes["Router"].pushRoute("/" + detail._id);
        },
        className: "Button-Black-Left"
      }, detail.name)), external__react__default.a.createElement("div", {
        className: "Caption-Grey-Left"
      }, external__moment__default.a.unix(data.updatedAt).fromNow()))), edit && external__react__default.a.createElement("div", {
        className: "update__right"
      }, external__react__default.a.createElement(dropdown__default.a, {
        className: "option__post",
        placement: "bottomRight",
        overlay: external__react__default.a.createElement(menu__default.a, null, external__react__default.a.createElement(menu__default.a.Item, {
          key: "0"
        }, external__react__default.a.createElement("div", {
          onClick: function onClick() {
            return toggleEditUpdate(data);
          },
          className: "Body-12 item"
        }, external__react__default.a.createElement("img", {
          src: editIcon,
          alt: "edit"
        }), "Edit post")), external__react__default.a.createElement(menu__default.a.Item, {
          key: "1"
        }, external__react__default.a.createElement("div", {
          onClick: function onClick() {
            return UpdateCard_confirm({
              title: 'Are you sure to remove this post?',
              onOk: function onOk() {
                return new Promise(function (resolve, reject) {
                  handleDeletePost(data);
                  setTimeout(status !== "running" ? resolve : reject, 1000);
                }).catch(function () {
                  return console.log('Oops errors!');
                });
              },
              onCancel: function onCancel() {}
            });
          },
          className: "Body-12 item"
        }, external__react__default.a.createElement("img", {
          src: trashIcon,
          alt: "trash"
        }), "Delete"))),
        trigger: ['click']
      }, external__react__default.a.createElement("img", {
        alt: "option",
        src: optionIcon
      })))), external__react__default.a.createElement("div", {
        className: "update__body-container "
      }, external__react__default.a.createElement("span", {
        className: "Body-Black-Left"
      }, !isShowMoreTitle ? data.content.replace(/^(.{300}[^\s]*).*/, "$1") : data.content, data.content.length > 300 && external__react__default.a.createElement("a", {
        onClick: handleShowMoreTitle
      }, !isShowMoreTitle ? "  Show more" : "  Show less"))), data.allComments ? data.allComments.length > 0 && data.allComments.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: "update__comment-container"
        }, external__react__default.a.createElement("div", {
          className: "update__comment-header"
        }, external__react__default.a.createElement(Image["a" /* default */], {
          image: item.postedUserData.pictureURL
        }), external__react__default.a.createElement("div", {
          className: "header__content"
        }, external__react__default.a.createElement("div", {
          className: "Button-Black-Left name"
        }, "".concat(item.postedUserData.firstName, " ").concat(item.postedUserData.lastName, "  "), external__react__default.a.createElement("div", {
          className: "Caption-Grey-Left"
        }, " . ".concat(external__moment__default.a.unix(item.updatedAt).fromNow()))), external__react__default.a.createElement("span", {
          className: "Body-Black-Left"
        }, !isShowMore ? item.content.replace(/^(.{300}[^\s]*).*/, "$1") : item.content, item.content.length > 300 && external__react__default.a.createElement("a", {
          onClick: handleShowMore
        }, !isShowMore ? "  Show more" : "  Show less")))), external__react__default.a.createElement("div", {
          className: "update__comment-body"
        }, userData && userData._id === item.postedUserData._id && external__react__default.a.createElement("div", {
          className: "comment__right"
        }, external__react__default.a.createElement(dropdown__default.a, {
          className: "option__post",
          placement: "bottomLeft",
          overlay: external__react__default.a.createElement(menu__default.a, null, external__react__default.a.createElement(menu__default.a.Item, {
            key: "0"
          }, external__react__default.a.createElement("div", {
            onClick: function onClick() {
              return toggleEditComment(item);
            },
            className: "Body-12 item"
          }, external__react__default.a.createElement("img", {
            src: editIcon,
            alt: "edit"
          }), "Edit comment")), external__react__default.a.createElement(menu__default.a.Item, {
            key: "1"
          }, external__react__default.a.createElement("div", {
            onClick: function onClick() {
              return UpdateCard_confirm({
                title: 'Are you sure to remove this comment?',
                onOk: function onOk() {
                  return new Promise(function (resolve, reject) {
                    handleDeleteComment(item);
                    setTimeout(status !== "running" ? resolve : reject, 1000);
                  }).catch(function () {
                    return console.log('Oops errors!');
                  });
                },
                onCancel: function onCancel() {}
              });
            },
            className: "Body-12 item"
          }, external__react__default.a.createElement("img", {
            src: trashIcon,
            alt: "trash"
          }), "Delete  "))),
          trigger: ['click']
        }, external__react__default.a.createElement("img", {
          alt: "option",
          src: optionIcon
        })))));
      }) : external__react__default.a.createElement("div", null, data.comments && data.comments.length > 0 && data.comments.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: "update__comment-container"
        }, item && external__react__default.a.createElement("div", {
          className: "update__comment-wrapper"
        }, external__react__default.a.createElement("div", {
          className: "update__comment-header"
        }, external__react__default.a.createElement(Image["a" /* default */], {
          image: item.postedUserData.pictureURL
        }), external__react__default.a.createElement("div", {
          className: "header__content"
        }, external__react__default.a.createElement("div", {
          className: "Button-Black-Left name"
        }, "".concat(item.postedUserData.firstName, " ").concat(item.postedUserData.lastName, "  "), external__react__default.a.createElement("div", {
          className: "Caption-Grey-Left"
        }, " . ".concat(external__moment__default.a.unix(item.updatedAt).fromNow()))), external__react__default.a.createElement("span", {
          className: "Body-Black-Left"
        }, !isShowMore ? item.content.replace(/^(.{300}[^\s]*).*/, "$1") : item.content, item.content.length > 300 && external__react__default.a.createElement("a", {
          onClick: handleShowMore
        }, !isShowMore ? "  Show more" : "  Show less")))), external__react__default.a.createElement("div", {
          className: "update__comment-body"
        }, userData && userData._id === item.postedUserData._id && external__react__default.a.createElement("div", {
          className: "comment__right"
        }, external__react__default.a.createElement(dropdown__default.a, {
          className: "option__post",
          placement: "bottomLeft",
          overlay: external__react__default.a.createElement(menu__default.a, null, external__react__default.a.createElement(menu__default.a.Item, {
            key: "0"
          }, external__react__default.a.createElement("div", {
            onClick: function onClick() {
              return toggleEditComment(item);
            },
            className: "Body-12 item"
          }, external__react__default.a.createElement("img", {
            src: editIcon,
            alt: "edit"
          }), "Edit comment")), external__react__default.a.createElement(menu__default.a.Item, {
            key: "1"
          }, external__react__default.a.createElement("div", {
            onClick: function onClick() {
              return UpdateCard_confirm({
                title: 'Are you sure to remove this comment?',
                onOk: function onOk() {
                  return new Promise(function (resolve, reject) {
                    handleDeleteComment(item);
                    setTimeout(status !== "running" ? resolve : reject, 1000);
                  }).catch(function () {
                    return console.log('Oops errors!');
                  });
                },
                onCancel: function onCancel() {}
              });
            },
            className: "Body-12 item"
          }, external__react__default.a.createElement("img", {
            src: trashIcon,
            alt: "trash"
          }), "Delete  "))),
          trigger: ['click']
        }, external__react__default.a.createElement("img", {
          alt: "option",
          src: optionIcon
        }))))));
      })), external__react__default.a.createElement("div", {
        onClick: function onClick() {
          return handleGetComment(data._id);
        },
        className: "update__comment-all"
      }, data.totalComments, " comments"), external__react__default.a.createElement("div", {
        className: "update__user-comment"
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: userData && userData.pictureURL
      }), external__react__default.a.createElement("div", {
        className: "input-comment"
      }, external__react__default.a.createElement(form__default.a, {
        onSubmit: handlePostComment,
        layout: "inline"
      }, external__react__default.a.createElement(form__default.a.Item, null, getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your comment!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Type your comment here..."
      })))))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/updateCard/_updateCard.less
var _updateCard = __webpack_require__(46);
var _updateCard_default = /*#__PURE__*/__webpack_require__.n(_updateCard);

// CONCATENATED MODULE: ./src/components/common/updateCard/EditUpdateModal.js



function EditUpdateModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditUpdateModal__typeof = function _typeof(obj) { return typeof obj; }; } else { EditUpdateModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditUpdateModal__typeof(obj); }

function EditUpdateModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditUpdateModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditUpdateModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditUpdateModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditUpdateModal__defineProperties(Constructor, staticProps); return Constructor; }

function EditUpdateModal__possibleConstructorReturn(self, call) { if (call && (EditUpdateModal__typeof(call) === "object" || typeof call === "function")) { return call; } return EditUpdateModal__assertThisInitialized(self); }

function EditUpdateModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditUpdateModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TextArea = input__default.a.TextArea;

var EditUpdateModal__default =
/*#__PURE__*/
function (_Component) {
  EditUpdateModal__inherits(_default, _Component);

  function _default() {
    EditUpdateModal__classCallCheck(this, _default);

    return EditUpdateModal__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  EditUpdateModal__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          visibleEditUpdate = _props.visibleEditUpdate,
          toggleEditUpdate = _props.toggleEditUpdate,
          detail = _props.detail,
          onEditUpdateChange = _props.onEditUpdateChange,
          handleSaveEditUpdate = _props.handleSaveEditUpdate,
          editUpdateContent = _props.editUpdateContent,
          status = _props.status;
      return external__react__default.a.createElement(modal__default.a, {
        title: "",
        visible: visibleEditUpdate,
        onOk: handleSaveEditUpdate,
        onCancel: toggleEditUpdate,
        okText: "Save",
        okButtonProps: {
          loading: status === 'running'
        }
      }, external__react__default.a.createElement("div", {
        className: "post__content-container"
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: detail.owner.pictureURL
      }), external__react__default.a.createElement(TextArea, {
        onChange: onEditUpdateChange,
        value: editUpdateContent,
        className: "Paragraph-12",
        placeholder: "Post something about project update here...",
        autosize: true
      })));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/common/updateCard/EditCommentModal.js



function EditCommentModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditCommentModal__typeof = function _typeof(obj) { return typeof obj; }; } else { EditCommentModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditCommentModal__typeof(obj); }

function EditCommentModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditCommentModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditCommentModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditCommentModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditCommentModal__defineProperties(Constructor, staticProps); return Constructor; }

function EditCommentModal__possibleConstructorReturn(self, call) { if (call && (EditCommentModal__typeof(call) === "object" || typeof call === "function")) { return call; } return EditCommentModal__assertThisInitialized(self); }

function EditCommentModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditCommentModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EditCommentModal_TextArea = input__default.a.TextArea;

var EditCommentModal__default =
/*#__PURE__*/
function (_Component) {
  EditCommentModal__inherits(_default, _Component);

  function _default() {
    EditCommentModal__classCallCheck(this, _default);

    return EditCommentModal__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  EditCommentModal__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          visibleEditComment = _props.visibleEditComment,
          toggleEditComment = _props.toggleEditComment,
          detail = _props.detail,
          onEditCommentChange = _props.onEditCommentChange,
          handleSaveEditComment = _props.handleSaveEditComment,
          editCommentContent = _props.editCommentContent,
          status = _props.status;
      return external__react__default.a.createElement(modal__default.a, {
        title: "",
        visible: visibleEditComment,
        onOk: handleSaveEditComment,
        onCancel: toggleEditComment,
        okText: "Save",
        okButtonProps: {
          loading: status === 'running'
        }
      }, external__react__default.a.createElement("div", {
        className: "post__content-container"
      }, external__react__default.a.createElement(EditCommentModal_TextArea, {
        onChange: onEditCommentChange,
        value: editCommentContent,
        className: "Paragraph-12",
        autosize: true
      })));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// EXTERNAL MODULE: ./src/actions/toggle.js
var toggle = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/common/updateCard/UpdateCardContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UpdateCardContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UpdateCardContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { UpdateCardContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UpdateCardContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function UpdateCardContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UpdateCardContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UpdateCardContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) UpdateCardContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) UpdateCardContainer__defineProperties(Constructor, staticProps); return Constructor; }

function UpdateCardContainer__possibleConstructorReturn(self, call) { if (call && (UpdateCardContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return UpdateCardContainer__assertThisInitialized(self); }

function UpdateCardContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function UpdateCardContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var UpdateCardContainer_UpdateCardContainer =
/*#__PURE__*/
function (_Component) {
  UpdateCardContainer__inherits(UpdateCardContainer, _Component);

  function UpdateCardContainer(props) {
    var _this;

    UpdateCardContainer__classCallCheck(this, UpdateCardContainer);

    _this = UpdateCardContainer__possibleConstructorReturn(this, (UpdateCardContainer.__proto__ || Object.getPrototypeOf(UpdateCardContainer)).call(this, props));
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleShowMore", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isShowMore: !_this.state.isShowMore
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleShowMoreTitle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isShowMoreTitle: !_this.state.isShowMoreTitle
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleDeletePost", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props = _this.props,
            removeProjectUpdate = _this$props.removeProjectUpdate,
            detail = _this$props.detail;
        removeProjectUpdate({
          "updateID": e._id,
          "projectID": detail._id
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleSaveEditUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props2 = _this.props,
            editProjectUpdate = _this$props2.editProjectUpdate,
            detail = _this$props2.detail,
            updateData = _this$props2.updateData;
        editProjectUpdate({
          "updateID": updateData._id,
          "projectID": detail._id,
          "content": _this.state.editUpdateContent
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "onEditUpdateChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          editUpdateContent: e.target.value
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleDeleteComment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props3 = _this.props,
            removeComment = _this$props3.removeComment,
            data = _this$props3.data;
        removeComment({
          "updateID": data._id,
          "commentID": e._id
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleSaveEditComment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props4 = _this.props,
            editComment = _this$props4.editComment,
            data = _this$props4.data,
            commentData = _this$props4.commentData;
        editComment({
          "updateID": data._id,
          "commentID": commentData._id,
          "newContent": _this.state.editCommentContent
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "onEditCommentChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          editCommentContent: e.target.value
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handlePostComment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props5 = _this.props,
            postComment = _this$props5.postComment,
            data = _this$props5.data,
            form = _this$props5.form,
            isNewFeed = _this$props5.isNewFeed,
            detail = _this$props5.detail,
            postCommentDetail = _this$props5.postCommentDetail;
        e.preventDefault();
        form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            form.setFieldsValue({
              "comment": ""
            });
            if (isNewFeed) postComment({
              "updateID": data._id,
              "content": values.comment,
              "projectID": detail._id
            });else postCommentDetail({
              "updateID": data._id,
              "content": values.comment,
              "projectID": detail._id
            });
          }
        });
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "onCommentChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          comment: e.target.value
        });

        if (e.keyCode == 13 && e.shiftKey == false) {
          _this.handlePostComment(e);
        }
      }
    });
    Object.defineProperty(UpdateCardContainer__assertThisInitialized(_this), "handleGetComment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var getComment = _this.props.getComment;
        getComment({
          updateID: e
        });
      }
    });
    _this.state = {
      editUpdateContent: "",
      editCommentContent: "",
      comment: "",
      isShowMore: false,
      isShowMoreTitle: false
    };
    return _this;
  }

  UpdateCardContainer__createClass(UpdateCardContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.updateData && nextProps.updateData !== this.props.updateData) {
        this.setState({
          editUpdateContent: nextProps.updateData.content
        });
      }

      if (nextProps.commentData && nextProps.commentData !== this.props.commentData) {
        this.setState({
          editCommentContent: nextProps.commentData.content
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _updateCard_default.a
        }
      }), external__react__default.a.createElement(EditUpdateModal__default, _extends({
        onEditUpdateChange: this.onEditUpdateChange,
        handleSaveEditUpdate: this.handleSaveEditUpdate
      }, this.props, this.state)), external__react__default.a.createElement(EditCommentModal__default, _extends({
        onEditCommentChange: this.onEditCommentChange,
        handleSaveEditComment: this.handleSaveEditComment
      }, this.props, this.state)), external__react__default.a.createElement(UpdateCard__default, _extends({}, this.state, this.props, {
        handleShowMoreTitle: this.handleShowMoreTitle,
        handleShowMore: this.handleShowMore,
        handleDeletePost: this.handleDeletePost,
        handleGetComment: this.handleGetComment,
        handlePostComment: this.handlePostComment,
        handleDeleteComment: this.handleDeleteComment
      })));
    }
  }]);

  return UpdateCardContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    visibleEditUpdate: state.toggle.visibleEditUpdate,
    visibleEditComment: state.toggle.visibleEditComment,
    userData: state.user.data,
    status: state.project.status,
    updateData: state.toggle.updateData,
    commentData: state.toggle.commentData
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(_objectSpread({}, project, toggle), dispatch);
}
/* harmony default export */ var updateCard_UpdateCardContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(UpdateCardContainer_UpdateCardContainer)));

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Image__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sagas_search__ = __webpack_require__(55);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleSearchSkill", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        window.location.replace("/search?key=" + e.replace(/ /g, '-') + "&skill=true");
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tags = this.props.tags;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "skill-tag"
      }, tags.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this2.handleSearchSkill(item);
          },
          className: "tag-item Body-Dark-Grey-Center"
        }, item);
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export search */
/* unused harmony export searchSkill */
/* harmony export (immutable) */ __webpack_exports__["a"] = root;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_endPoint__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);


var _marked =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(search),
    _marked2 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(searchSkill),
    _marked3 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(root);

/**
 * @module Sagas/File
 * @desc File
 */





var cookies = new __WEBPACK_IMPORTED_MODULE_3_react_cookie__["Cookies"]();
var searchHandler = {
  /**
  * Upload file to s3 amazon, returning a file url when done
  * @param  {object} data The file data
  */
  search: function search(data) {
    // Post a upload request
    return __WEBPACK_IMPORTED_MODULE_5_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_4__constants_endPoint__["a" /* endPoint */] + "newsfeed?pageSize=100".concat(data.data && "&keyword=" + data.data),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': cookies.get('token')
      }
    }).then(function (response) {
      return response.data;
    });
  },

  /**
  * Upload file to s3 amazon, returning a file url when done
  * @param  {object} data The file data
  */
  searchSkill: function searchSkill(data) {
    // Post a upload request
    return __WEBPACK_IMPORTED_MODULE_5_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_4__constants_endPoint__["a" /* endPoint */] + 'skill/listTagRelated?keyword=' + data,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.data;
    });
  }
};
/**
 * Upload
 */

function search(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function search$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(searchHandler.search, data.payload);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ActionTypes */].SEARCH_SUCCESS,
            response: {
              data: response.data,
              type: data.payload.type
            }
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ActionTypes */].SEARCH_ERROR,
            error: _context.t0
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}
/**
 * Upload
 */

function searchSkill(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function searchSkill$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(searchHandler.searchSkill, data.payload);

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ActionTypes */].SEARCH_SKILL_SUCCESS,
            response: response
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ActionTypes */].SEARCH_SKILL_ERROR,
            error: _context2.t0
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}
/**
 * File Sagas
 */

function root() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function root$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ActionTypes */].SEARCH, search), Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ActionTypes */].SEARCH_SKILL, searchSkill)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(10);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(22);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(19);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./src/components/forgot/ForgotModal.js







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var FormItem = form__default.a.Item;

var ForgotModal_ForgotModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ForgotModal, _React$Component);

  function ForgotModal() {
    _classCallCheck(this, ForgotModal);

    return _possibleConstructorReturn(this, (ForgotModal.__proto__ || Object.getPrototypeOf(ForgotModal)).apply(this, arguments));
  }

  _createClass(ForgotModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          toggleForgotModal = _props.toggleForgotModal,
          visibleForgot = _props.visibleForgot,
          handleForgot = _props.handleForgot;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(modal__default.a, {
        width: 540,
        closable: false,
        visible: visibleForgot,
        title: "",
        footer: null,
        onCancel: toggleForgotModal,
        x: true,
        className: "modal-body"
      }, external__react__default.a.createElement(form__default.a, {
        onSubmit: handleForgot
      }, external__react__default.a.createElement("div", {
        className: "forgot-title H2-Black-Center"
      }, "Forgot your password?"), external__react__default.a.createElement("div", {
        className: "bref Body-Dark-Grey-Center"
      }, "Enter the email address associated with your account, and we\u2019ll email you a link to reset your password."), external__react__default.a.createElement("div", {
        style: {
          marginTop: 0
        },
        className: "form-login"
      }, external__react__default.a.createElement(FormItem, {
        style: {
          marginBottom: '24px'
        }
      }, getFieldDecorator('emailForgot', {
        rules: [{
          type: 'email',
          message: "It not a valid email address"
        }, {
          required: true,
          message: "Please enter your email"
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Email Address"
      })))), external__react__default.a.createElement(row__default.a, {
        type: "flex",
        justify: "space-between"
      }, external__react__default.a.createElement(col__default.a, {
        span: 10
      }, external__react__default.a.createElement(FormItem, {
        className: "button-forgot email"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        htmlType: "submit",
        type: "primary"
      }, external__react__default.a.createElement("div", null, " RESET PASSWORD"))))))));
    }
  }]);

  return ForgotModal;
}(external__react__default.a.Component);

/* harmony default export */ var forgot_ForgotModal = (ForgotModal_ForgotModal);
// EXTERNAL MODULE: ./src/components/forgot/_forgot.less
var _forgot = __webpack_require__(57);
var _forgot_default = /*#__PURE__*/__webpack_require__.n(_forgot);

// EXTERNAL MODULE: ./src/actions/user.js
var user = __webpack_require__(15);

// EXTERNAL MODULE: ./src/actions/toggle.js
var toggle = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/forgot/ForgotModalContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ForgotModalContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ForgotModalContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { ForgotModalContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ForgotModalContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ForgotModalContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ForgotModalContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ForgotModalContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) ForgotModalContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) ForgotModalContainer__defineProperties(Constructor, staticProps); return Constructor; }

function ForgotModalContainer__possibleConstructorReturn(self, call) { if (call && (ForgotModalContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return ForgotModalContainer__assertThisInitialized(self); }

function ForgotModalContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ForgotModalContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var ForgotModalContainer_ForgotModalContainer =
/*#__PURE__*/
function (_Component) {
  ForgotModalContainer__inherits(ForgotModalContainer, _Component);

  function ForgotModalContainer(props) {
    var _this;

    ForgotModalContainer__classCallCheck(this, ForgotModalContainer);

    _this = ForgotModalContainer__possibleConstructorReturn(this, (ForgotModalContainer.__proto__ || Object.getPrototypeOf(ForgotModalContainer)).call(this, props));
    Object.defineProperty(ForgotModalContainer__assertThisInitialized(_this), "handleForgot", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var sendPasswordReset = _this.props.sendPasswordReset;
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            sendPasswordReset({
              "username": "user",
              "email": values.emailForgot
            });
          }
        });
      }
    });
    _this.state = {};
    return _this;
  }

  ForgotModalContainer__createClass(ForgotModalContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _forgot_default.a
        }
      }), external__react__default.a.createElement(forgot_ForgotModal, _extends({}, this.state, this.props, {
        handleForgot: this.handleForgot
      })));
    }
  }]);

  return ForgotModalContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    visibleForgot: state.toggle.visibleForgot
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(_objectSpread({}, user, {
    toggleForgotModal: toggle["toggleForgotModal"]
  }), dispatch);
}
ForgotModalContainer_ForgotModalContainer = form__default.a.create()(ForgotModalContainer_ForgotModalContainer);
/* harmony default export */ var forgot_ForgotModalContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ForgotModalContainer_ForgotModalContainer));

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = ".modal-body .forgot-title {\n  text-align: start;\n  color: #212121;\n}\n.modal-body .bref {\n  text-align: start;\n  padding: 20px 0;\n}\n.modal-body .ant-modal-body {\n  padding: 40px;\n}\n.modal-body .back-container {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.modal-body .back-container img {\n  margin-right: 10px;\n  width: 24px;\n}\n.modal-body .form-login {\n  margin-top: 30px;\n}\n.modal-body .form-login .img-icon {\n  width: 24px;\n}\n.modal-body .form-login input {\n  border-radius: 6px;\n}\n.modal-body .margin-bottom {\n  margin-bottom: 24px;\n}\n.modal-body .email button {\n  border-radius: 6px;\n}\n.modal-body .secondary-color {\n  color: #757575;\n}\n.modal-body .button-forgot button {\n  width: 220px;\n  height: 44px;\n  border-radius: 24px;\n}\n";

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postJob", function() { return postJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJobDetail", function() { return getJobDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteJob", function() { return deleteJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateJob", function() { return updateJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listJob", function() { return listJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].POST_JOB, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].GET_JOB_DETAIL, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].DELETE_JOB, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].UPDATE_JOB, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].LIST_JOB, function (data) {
  return data;
}), _createActions2)),
    postJob = _createActions.postJob,
    getJobDetail = _createActions.getJobDetail,
    deleteJob = _createActions.deleteJob,
    updateJob = _createActions.updateJob,
    listJob = _createActions.listJob;



/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Image__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobPost_less__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobPost_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__jobPost_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skillTag_SkillTag__ = __webpack_require__(54);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _default =
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
      var _props = this.props,
          jobDetail = _props.jobDetail,
          user = _props.user,
          toggleJobDetail = _props.toggleJobDetail,
          postedUser = _props.postedUser;
      var email = postedUser.email;
      var subject = "Interested in your job, " + jobDetail.title;
      var body = "Hi ".concat(postedUser.firstName, ", \n\nI found your project, ").concat(jobDetail.projectData.name, ", on Comigo! I'm really interested in the job you shared, ").concat(jobDetail.title, ". If you're still looking for support, it would be great to chat more and see how I can help. Are you available to talk more about this opportunity, maybe this week or next? \n\nI look forward to hearing from you! \n\nAll the best, \n").concat(user.firstName);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        hoverable: true,
        bordered: false,
        className: "job-post"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "job-header"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Image__["a" /* default */], {
        image: postedUser.pictureURL
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "job__title"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].pushRoute("/user/" + postedUser._id);
        },
        className: "Button-Black-Left"
      }, postedUser.firstName + " " + postedUser.lastName + " "), "created a ".concat(__WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(jobDetail.updatedAt).isSame(__WEBPACK_IMPORTED_MODULE_4_moment___default()(), 'hour') ? "new" : "", " job in "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].pushRoute("/" + jobDetail.projectData._id);
        },
        className: "Button-Black-Left"
      }, jobDetail.projectData.name)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Caption-Grey-Left"
      }, __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(jobDetail.updatedAt).fromNow()))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "job-body"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "apply"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        onClick: function onClick() {
          return toggleJobDetail({
            jobDetail: jobDetail
          });
        },
        className: "H2-Black-Left"
      }, jobDetail.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "mailto:".concat(email, "?subject=Interested in your job ").concat(subject, "&body=").concat(body)
      }, " ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        type: "primary",
        className: "Button-White-Center"
      }, "Apply"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__skillTag_SkillTag__["a" /* default */], {
        tags: jobDetail.tags
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Body-Black-Left desc paddingTop16"
      }, "".concat(jobDetail.description))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./src/actions/user.js
var user = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(9);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(22);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(19);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/signUp/CreateAccount.js






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FormItem = form__default.a.Item;

var CreateAccount__default =
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
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          compareToFirstPassword = _props.compareToFirstPassword,
          handleConfirmBlur = _props.handleConfirmBlur,
          status = _props.status,
          handleClick = _props.handleClick;
      return external__react__default.a.createElement("div", {
        className: "sign-up-container"
      }, external__react__default.a.createElement("div", {
        className: "sign-up-body"
      }, external__react__default.a.createElement("div", {
        className: "marginTop8"
      }, external__react__default.a.createElement("div", {
        className: "marginBottom12 H2-Black-Center"
      }, "Create an Account"), external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Center marginBottom28"
      }, "We're live at the University of Iowa! Only students with an \"@uiowa.edu\" email address can create an account. Bummed? Let us know!"), external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmit
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 16
      }, external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "First Name"), getFieldDecorator('firstname', {
        rules: [{
          required: true,
          message: 'Please input your first name!',
          whitespace: true
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Peter"
      })))), external__react__default.a.createElement(col__default.a, {
        md: 12,
        lg: 12
      }, external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Last Name"), getFieldDecorator('lastname', {
        rules: [{
          required: true,
          message: 'Please input your last name!',
          whitespace: true
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Park"
      }))))), external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Student Email"), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "peterpark@uiowa.edu"
      }))), external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Password"), getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your password!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "password",
        placeholder: "Type your new password"
      }))), external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, external__react__default.a.createElement("div", {
        className: "label-form"
      }, "Confirm Password"), getFieldDecorator('confirm', {
        rules: [{
          required: true,
          message: 'Please confirm your password!'
        }, {
          validator: compareToFirstPassword
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "password",
        onBlur: handleConfirmBlur,
        placeholder: "Confirm your password"
      }))), external__react__default.a.createElement(FormItem, {
        className: "sign-up-button Button-White-Center"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        loading: status === "running",
        type: "primary",
        htmlType: "submit"
      }, "SIGN UP")), external__react__default.a.createElement("div", {
        className: "Button-Dark-Grey-Center"
      }, "Already have an account?", external__react__default.a.createElement("a", {
        onClick: handleClick
      }, " Sign In"))))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/verify/VerifyAccountContainer.js + 2 modules
var VerifyAccountContainer = __webpack_require__(49);

// EXTERNAL MODULE: ./src/components/updateProfile/UpdateProfileContainer.js + 1 modules
var UpdateProfileContainer = __webpack_require__(51);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(13);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// CONCATENATED MODULE: ./src/components/signUp/Complete.js




function Complete__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Complete__typeof = function _typeof(obj) { return typeof obj; }; } else { Complete__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Complete__typeof(obj); }

function Complete__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Complete__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Complete__createClass(Constructor, protoProps, staticProps) { if (protoProps) Complete__defineProperties(Constructor.prototype, protoProps); if (staticProps) Complete__defineProperties(Constructor, staticProps); return Constructor; }

function Complete__possibleConstructorReturn(self, call) { if (call && (Complete__typeof(call) === "object" || typeof call === "function")) { return call; } return Complete__assertThisInitialized(self); }

function Complete__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Complete__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Complete_option = [{
  icon: "/static/images/icon-project.svg",
  name: "Create New Project"
}, {
  icon: "/static/images/icon-newsfeed.svg",
  name: "Explore Your Campus"
}];

var Complete__default =
/*#__PURE__*/
function (_Component) {
  Complete__inherits(_default, _Component);

  function _default() {
    Complete__classCallCheck(this, _default);

    return Complete__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Complete__createClass(_default, [{
    key: "render",
    value: function render() {
      var nextStep = this.props.nextStep;
      return external__react__default.a.createElement("div", {
        className: "complete-container"
      }, external__react__default.a.createElement(card__default.a, {
        bordered: false
      }, external__react__default.a.createElement("div", {
        className: " Headline-2CenterBlack-Style"
      }, "Welcome Peter,"), external__react__default.a.createElement("div", {
        className: "complete-desc"
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque."), external__react__default.a.createElement(row__default.a, {
        gutter: 30,
        className: "complete-options"
      }, Complete_option.map(function (item, index) {
        return external__react__default.a.createElement(col__default.a, {
          key: index,
          md: 12,
          lg: 12
        }, external__react__default.a.createElement("div", {
          className: "option-item"
        }, external__react__default.a.createElement("div", {
          className: "item-image"
        }, external__react__default.a.createElement("img", {
          src: item.icon,
          alt: "option"
        })), external__react__default.a.createElement("div", {
          className: "item-text"
        }, item.name)));
      }))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/signUp/SignUp.js
function SignUp__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SignUp__typeof = function _typeof(obj) { return typeof obj; }; } else { SignUp__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SignUp__typeof(obj); }

function SignUp__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SignUp__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SignUp__createClass(Constructor, protoProps, staticProps) { if (protoProps) SignUp__defineProperties(Constructor.prototype, protoProps); if (staticProps) SignUp__defineProperties(Constructor, staticProps); return Constructor; }

function SignUp__possibleConstructorReturn(self, call) { if (call && (SignUp__typeof(call) === "object" || typeof call === "function")) { return call; } return SignUp__assertThisInitialized(self); }

function SignUp__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SignUp__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SignUp_SignUp =
/*#__PURE__*/
function (_Component) {
  SignUp__inherits(SignUp, _Component);

  function SignUp() {
    SignUp__classCallCheck(this, SignUp);

    return SignUp__possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
  }

  SignUp__createClass(SignUp, [{
    key: "renderStageSignUp",
    value: function renderStageSignUp(step) {
      switch (step) {
        case 1:
          return external__react__default.a.createElement(CreateAccount__default, this.props);

        case 2:
          return external__react__default.a.createElement(VerifyAccountContainer["a" /* default */], this.props);

        case 3:
          return external__react__default.a.createElement(UpdateProfileContainer["a" /* default */], this.props);

        case 4:
          return external__react__default.a.createElement(Complete__default, this.props);

        default:
          return external__react__default.a.createElement(CreateAccount__default, this.props);
      }
    }
  }, {
    key: "renderStepBar",
    value: function renderStepBar(step) {
      var table = [];
      var stepContent = ["Sign Up", "Verify Email", "Build Profile", "Complete"];

      for (var i = 0; i < 4; i++) {
        if (i < step) table.push(external__react__default.a.createElement("div", {
          key: i,
          className: "active-step"
        }, external__react__default.a.createElement("div", {
          className: "active-text step-stage"
        }, stepContent[i])));else table.push(external__react__default.a.createElement("div", {
          key: i,
          className: "inactive-step"
        }, external__react__default.a.createElement("div", {
          className: "inactive-text step-stage"
        }, stepContent[i])));
      }

      return table;
    }
  }, {
    key: "render",
    value: function render() {
      var step = this.props.step;
      return external__react__default.a.createElement("div", null, step !== 1 && external__react__default.a.createElement("div", {
        className: "step-bar-container"
      }, external__react__default.a.createElement("div", {
        className: "signup-step-bar max-width"
      }, external__react__default.a.createElement("div", {
        className: "step-bar"
      }, this.renderStepBar(step)))), external__react__default.a.createElement("div", {
        className: "max-width"
      }, this.renderStageSignUp(step)));
    }
  }]);

  return SignUp;
}(external__react_["Component"]);

/* harmony default export */ var signUp_SignUp = (SignUp_SignUp);
// EXTERNAL MODULE: ./src/components/signUp/_signUp.less
var _signUp = __webpack_require__(63);
var _signUp_default = /*#__PURE__*/__webpack_require__.n(_signUp);

// CONCATENATED MODULE: ./src/components/signUp/SignUpContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SignUpContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SignUpContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { SignUpContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SignUpContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SignUpContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SignUpContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SignUpContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) SignUpContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) SignUpContainer__defineProperties(Constructor, staticProps); return Constructor; }

function SignUpContainer__possibleConstructorReturn(self, call) { if (call && (SignUpContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return SignUpContainer__assertThisInitialized(self); }

function SignUpContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SignUpContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var SignUpContainer_SignUpContainer =
/*#__PURE__*/
function (_Component) {
  SignUpContainer__inherits(SignUpContainer, _Component);

  function SignUpContainer(props) {
    var _this;

    SignUpContainer__classCallCheck(this, SignUpContainer);

    _this = SignUpContainer__possibleConstructorReturn(this, (SignUpContainer.__proto__ || Object.getPrototypeOf(SignUpContainer)).call(this, props));
    Object.defineProperty(SignUpContainer__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var signup = _this.props.signup;
        var routerQuery = routes["Router"].router.query;
        e.preventDefault();

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            signup({
              isNewUser: routerQuery.isNewUser || null,
              inviteCode: routerQuery.inviteCode || null,
              lastName: values.lastname,
              firstName: values.firstname,
              email: values.email,
              password: values.password
            });
          }
        });
      }
    });
    Object.defineProperty(SignUpContainer__assertThisInitialized(_this), "handleConfirmBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var value = e.target.value;

        _this.setState({
          confirmDirty: _this.state.confirmDirty || !!value
        });
      }
    });
    Object.defineProperty(SignUpContainer__assertThisInitialized(_this), "compareToFirstPassword", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(rule, _value, callback) {
        var form = _this.props.form;

        if (_value && _value !== form.getFieldValue('password')) {
          callback('Your passwords did not match. Please try again!');
        } else {
          callback();
        }
      }
    });
    Object.defineProperty(SignUpContainer__assertThisInitialized(_this), "validateToNextPassword", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(rule, _value2, callback) {
        var form = _this.props.form;

        if (_value2 && _this.state.confirmDirty) {
          form.validateFields(['confirm'], {
            force: true
          });
        }

        callback();
      }
    });
    _this.state = {
      confirmDirty: false
    };
    return _this;
  }

  SignUpContainer__createClass(SignUpContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var form = this.props.form;
      var routerQuery = routes["Router"].router.query;
      form.setFieldsValue({
        email: routerQuery.userEmail || ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _signUp_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Sign Up"
      }), external__react__default.a.createElement(signUp_SignUp, _extends({}, this.state, this.props, {
        handleSubmit: this.handleSubmit,
        compareToFirstPassword: this.compareToFirstPassword,
        validateToNextPassword: this.validateToNextPassword,
        handleConfirmBlur: this.handleConfirmBlur
      })));
    }
  }]);

  return SignUpContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    step: state.user.step,
    status: state.user.statusSignUp,
    message: state.user.message
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(_objectSpread({}, user), dispatch);
}

var WrappedSignUpContainer = form__default.a.create()(SignUpContainer_SignUpContainer);

/* harmony default export */ var signUp_SignUpContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(WrappedSignUpContainer));

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = ".step-bar-container {\n  background: #fff;\n}\n.step-bar-container .signup-step-bar {\n  padding-top: 24px;\n  padding-bottom: 44px;\n  flex: 1;\n}\n.step-bar-container .signup-step-bar .step-bar {\n  display: flex;\n  margin: 0 auto;\n  height: 4px;\n  background-color: rgba(5, 26, 51, 0.1);\n}\n.step-bar-container .signup-step-bar .inactive-step {\n  height: 4px;\n  width: 182.5px;\n  background-color: #edf0f2;\n  position: relative;\n}\n.step-bar-container .signup-step-bar .inactive-step .inactive-text {\n  color: #999999;\n}\n.step-bar-container .signup-step-bar .active-step {\n  height: 4px;\n  width: 182.5px;\n  background-color: #13d900;\n  position: relative;\n}\n.step-bar-container .signup-step-bar .active-step .active-text {\n  color: #2e3033;\n}\n.step-bar-container .signup-step-bar .step-stage {\n  font-size: 14px;\n  font-weight: 500;\n  position: absolute;\n  top: 12px;\n  width: 100%;\n  text-align: center;\n}\n.sign-up-container .sign-up-body {\n  width: 350px;\n  margin: 0 auto;\n}\n.sign-up-container .sign-up-body .sign-up-button button {\n  width: 220px;\n  height: 44px;\n  border-radius: 24px;\n}\n.complete-container {\n  padding: 40px 0;\n  text-align: center;\n}\n.complete-container .ant-card-body {\n  max-width: 540px;\n  margin: 0 auto;\n  padding-top: 40px;\n  padding-bottom: 56px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.complete-container .complete-desc {\n  text-align: center;\n  padding-top: 16px;\n  font-size: 18px;\n  font-weight: normal;\n  color: #45494d;\n}\n.complete-container .complete-options {\n  padding-top: 40px;\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto !important;\n}\n.complete-container .complete-options .option-item {\n  cursor: pointer;\n  width: 220px;\n  height: 200px;\n  border-radius: 8px;\n  background-color: #ffdf49;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.complete-container .complete-options .option-item .item-image {\n  border-radius: 4px;\n  padding: 28px;\n  border: dashed 1px #2e3033;\n  margin-bottom: 16px;\n}\n.complete-container .complete-options .option-item .item-image img {\n  width: 24px;\n  height: 24px;\n}\n.complete-container .complete-options .option-item .item-text {\n  font-size: 18px;\n  font-weight: normal;\n}\n";

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Image__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skillTag_SkillTag__ = __webpack_require__(54);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var mailIcon = '/static/images/icon-mail.svg';

var _default =
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
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        hoverable: true,
        bordered: false,
        className: "people-card"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__common_Image__["a" /* default */], {
        image: data.pictureURL
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-right"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-info-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/user/" + data._id);
        },
        className: "people-name H3-Black-Left"
      }, data.firstName + " " + data.lastName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-mail Caption-Grey-Left"
      }, data.email), data.skills && data.skills.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__skillTag_SkillTag__["a" /* default */], {
        tags: data.skills
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-desc Body-Black-Left"
      }, data.bio)))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noResult_less__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noResult_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__noResult_less__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var logoIcon = '/static/images/logo.svg';


var _default =
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
      var height = this.props.height;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "no-result__container",
        style: {
          height: height
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__noResult_less___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: logoIcon,
        alt: "logo"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Title-Small-Center announce"
      }, "It's empty in here."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Body-16"
      }, "Oops! Seems like there's nothing in this page!"));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = ".no-result__container {\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: #fff;\n  margin-top: 8px;\n  width: 600px;\n  border-radius: 12px;\n}\n.no-result__container img {\n  margin-top: 80px;\n  width: 80px;\n  margin-bottom: 24px;\n}\n.no-result__container .announce {\n  padding-bottom: 8px;\n}\n";

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSkill", function() { return searchSkill; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(3);
var _createActions2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["createActions"])((_createActions2 = {}, _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].SEARCH, function (data) {
  return data;
}), _defineProperty(_createActions2, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ActionTypes */].SEARCH_SKILL, function (data) {
  return data;
}), _createActions2)),
    search = _createActions.search,
    searchSkill = _createActions.searchSkill;



/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Image__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_updateCard_UpdateCardContainer__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_jobPost_JobPost__ = __webpack_require__(61);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _default =
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
      var _props = this.props,
          data = _props.data,
          edit = _props.edit,
          filterValue = _props.filterValue,
          toggleJobDetail = _props.toggleJobDetail,
          handleSearchSkill = _props.handleSearchSkill;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        hoverable: true,
        bordered: false,
        className: "post-card-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "post-card__header"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "header__left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__common_Image__["a" /* default */], {
        image: data.owner.pictureURL
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_2__routes__["Router"].pushRoute("/user/" + data.owner._id);
        },
        className: "Button-Black-Left"
      }, data.owner.firstName + " " + data.owner.lastName + " "), "created a ".concat(__WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(data.createdAt).isSame(__WEBPACK_IMPORTED_MODULE_4_moment___default()(), 'day') ? "new" : "", " project.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Caption-Grey-Left"
      }, __WEBPACK_IMPORTED_MODULE_4_moment___default.a.unix(data.createdAt).fromNow())))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_2__routes__["Router"].pushRoute("/" + data._id);
        },
        className: "post-card-upper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "cover-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__common_Image__["a" /* default */], {
        image: data.coverURL,
        alt: "cover"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "post-info-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "post-title H2-Black-Left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, data.name))))), data.latestUpdate && filterValue !== "project" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__common_updateCard_UpdateCardContainer__["a" /* default */], {
        isNewFeed: true,
        detail: data,
        edit: edit,
        data: _objectSpread({}, data.latestUpdate, {
          comments: [data.latestUpdate.comment]
        })
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = ".job-post {\n  border-radius: 2px;\n  box-shadow: 0 6px 16px 0 rgba(54, 54, 54, 0.15);\n  padding: 14px 16px;\n  margin-bottom: 20px;\n  cursor: initial;\n}\n.job-post .ant-card-body {\n  padding: 0;\n}\n.job-post .job-header {\n  display: flex;\n}\n.job-post .job-header img {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.job-post .job-header .text-blue {\n  color: #006cd9;\n}\n.job-post .job-header .update__title {\n  display: flex;\n  flex-direction: column;\n}\n.job-post .job-body {\n  padding-top: 22px;\n}\n.job-post .job-body .apply {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.job-post .job-body .apply button {\n  width: 94px;\n  height: 36px;\n  border-radius: 24px;\n}\n.job-post .job-body .job-info {\n  display: flex;\n  align-items: center;\n}\n.job-post .job-body .desc {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n";

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Image__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skillTag_SkillTag__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var mailIcon = '/static/images/icon-mail.svg';

var _default =
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
      var data = this.props.data;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
        hoverable: true,
        bordered: false,
        className: "people-card"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-image-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__common_Image__["a" /* default */], {
        image: data.pictureURL
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-right"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-info-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/user/" + data._id);
        },
        className: "people-name Button-Black-Left"
      }, data.userData.firstName + " " + data.userData.lastName), " join as a collaborator for  job in ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/" + data.projectData._id);
        },
        className: "Button-Black-Left"
      }, " ", data.projectData.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-mail Caption-Grey-Left"
      }, __WEBPACK_IMPORTED_MODULE_5_moment___default.a.unix(data.updatedAt).fromNow()), data.skills && data.skills.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__skillTag_SkillTag__["a" /* default */], {
        tags: data.skills
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "people-desc Body-Black-Left"
      }, data.bio)))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobDetail_less__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobDetail_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jobDetail_less__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var jobIcon = '/static/images/icon-job.svg';

var _default =
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
      var _props = this.props,
          jobDetail = _props.jobDetail,
          visibleJobDetail = _props.visibleJobDetail,
          toggleJobDetail = _props.toggleJobDetail,
          user = _props.user,
          detail = _props.detail;
      var email = jobDetail.postedUserData.email;
      var subject = "Interested in your job, " + jobDetail.title;
      var body = "Hi ".concat(jobDetail.postedUserData.firstName, ", \n\nI found your project, ").concat(jobDetail.projectData.name, ", on Comigo! I'm really interested in the job you shared, ").concat(jobDetail.title, ". If you're still looking for support, it would be great to chat more and see how I can help. Are you available to talk more about this opportunity, maybe this week or next? \n\nI look forward to hearing from you! \n\nAll the best, \n").concat(user.firstName);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_3__jobDetail_less___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_modal___default.a, {
        visible: visibleJobDetail,
        footer: null,
        onCancel: function onCancel() {
          return toggleJobDetail({
            jobDetail: jobDetail
          });
        }
      }, jobDetail && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "job-detail"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "job-detail__image"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: jobIcon,
        alt: "job"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "H2-Black-Left marginBottom28"
      }, jobDetail.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Button-Black-Left"
      }, "Time Commitment: ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        className: "Body-Black-Left"
      }, jobDetail.expectedTime)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Button-Black-Left marginBottom20"
      }, "Incentive: ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        className: "Body-Black-Left"
      }, jobDetail.incentive)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "H3-Black-Left"
      }, "Job Description"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "Body-Black-Left marginBottom20"
      }, jobDetail.description), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "H3-Black-Left"
      }, "Skills & Resources"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "job-detail__tags"
      }, jobDetail.tags.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          key: index,
          className: "job__tag Body-Dark-Grey-Center"
        }, item);
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "mailto:".concat(email, "?subject=Interested in your job ").concat(subject, "&body=").concat(body)
      }, " ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
        type: "primary",
        className: "Button-White-Center"
      }, "Apply")))));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = ".job-detail {\n  padding: 40px;\n}\n.job-detail__image {\n  display: flex;\n  width: 65px;\n  background: #e8e8e8;\n  height: 65px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-bottom: 16px;\n}\n.job-detail__tags {\n  display: flex;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n.job-detail__tags .job__tag {\n  margin-top: 4px;\n  padding: 6px 8px;\n  border-radius: 24px;\n  border: solid 1px var(--macaroni-and-cheese);\n  width: fit-content;\n  margin-right: 8px;\n}\n.job-detail a button {\n  margin-top: 28px;\n  width: 350px;\n  height: 44px;\n  border-radius: 24px;\n  background-color: var(--macaroni-and-cheese);\n}\n";

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: ./src/actions/user.js
var user = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(9);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(11);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./src/components/common/cardFlip/CardFlip.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CardFlip_ReactCardFlip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactCardFlip, _React$Component);

  function ReactCardFlip(props) {
    var _this;

    _classCallCheck(this, ReactCardFlip);

    _this = _possibleConstructorReturn(this, (ReactCardFlip.__proto__ || Object.getPrototypeOf(ReactCardFlip)).call(this, props));
    _this.state = {
      isFlipped: _this.props.isFlipped,
      rotation: 0
    };
    return _this;
  }

  _createClass(ReactCardFlip, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isFlipped !== this.props.isFlipped) {
        this.setState({
          isFlipped: nextProps.isFlipped
        });
        this.setState({
          rotation: this.state.rotation + 180
        });
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent(key) {
      return this.props.children.filter(function (component) {
        return component.key === key;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          flipDirection = _props.flipDirection,
          infinite = _props.infinite,
          flipSpeedFrontToBack = _props.flipSpeedFrontToBack,
          flipSpeedBackToFront = _props.flipSpeedBackToFront,
          _props$cardStyles = _props.cardStyles,
          front = _props$cardStyles.front,
          back = _props$cardStyles.back,
          containerStyle = _props.containerStyle,
          cardZIndex = _props.cardZIndex;
      var _state = this.state,
          isFlipped = _state.isFlipped,
          rotation = _state.rotation;
      var frontRotateY = "rotateY(".concat(infinite ? rotation : isFlipped ? 180 : 0, "deg)");
      var backRotateY = "rotateY(".concat(infinite ? rotation + 180 : isFlipped ? 0 : -180, "deg)");
      var frontRotateX = "rotateX(".concat(infinite ? rotation : isFlipped ? 180 : 0, "deg)");
      var backRotateX = "rotateX(".concat(infinite ? rotation + 180 : isFlipped ? 0 : -180, "deg)");
      var styles = {
        container: {
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          zIndex: "".concat(cardZIndex)
        },
        flipper: {
          position: 'relative',
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%'
        },
        front: _objectSpread({
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          left: '0',
          visibility: isFlipped ? 'hidden' : '',
          position: isFlipped ? 'absolute' : 'relative',
          top: '0',
          transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          zIndex: '2',
          transition: "".concat(flipSpeedBackToFront, "s")
        }, front),
        back: _objectSpread({
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          left: '0',
          visibility: isFlipped ? '' : 'hidden',
          position: isFlipped ? 'relative' : 'absolute',
          transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
          transformStyle: 'preserve-3d',
          top: '0',
          width: '100%',
          height: '100%',
          transition: "".concat(flipSpeedFrontToBack, "s")
        }, back)
      };
      return external__react__default.a.createElement("div", {
        className: "react-card-flip",
        style: _objectSpread({}, styles.container, containerStyle)
      }, external__react__default.a.createElement("div", {
        className: "react-card-flipper",
        style: styles.flipper
      }, external__react__default.a.createElement("div", {
        className: "react-card-front",
        style: styles.front
      }, this.getComponent('front')), external__react__default.a.createElement("div", {
        className: "react-card-back",
        style: styles.back
      }, this.getComponent('back'))));
    }
  }]);

  return ReactCardFlip;
}(external__react__default.a.Component);

CardFlip_ReactCardFlip.defaultProps = {
  containerStyle: {},
  cardStyles: {
    front: {},
    back: {}
  },
  cardZIndex: 'auto',
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false
};
/* harmony default export */ var CardFlip = (CardFlip_ReactCardFlip);
// EXTERNAL MODULE: ./src/components/signUp/SignUpContainer.js + 3 modules
var SignUpContainer = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/login/Login.js




function Login__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Login__typeof = function _typeof(obj) { return typeof obj; }; } else { Login__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Login__typeof(obj); }

function Login__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Login__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Login__createClass(Constructor, protoProps, staticProps) { if (protoProps) Login__defineProperties(Constructor.prototype, protoProps); if (staticProps) Login__defineProperties(Constructor, staticProps); return Constructor; }

function Login__possibleConstructorReturn(self, call) { if (call && (Login__typeof(call) === "object" || typeof call === "function")) { return call; } return Login__assertThisInitialized(self); }

function Login__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Login__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FormItem = form__default.a.Item;
var appLogo = '/static/images/logo-app.png';
var logoIcon = '/static/images/logo.svg';
var logoFull = '/static/images/logo-full-white.svg';

var Login_Login =
/*#__PURE__*/
function (_Component) {
  Login__inherits(Login, _Component);

  function Login() {
    Login__classCallCheck(this, Login);

    return Login__possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  Login__createClass(Login, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          status = _props.status,
          message = _props.message,
          toggleForgotModal = _props.toggleForgotModal,
          handleClick = _props.handleClick,
          isFlipped = _props.isFlipped;
      return external__react__default.a.createElement("div", {
        className: "login "
      }, external__react__default.a.createElement("div", {
        className: "login__container"
      }, external__react__default.a.createElement("div", {
        className: "login__left"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
        alt: "logo",
        src: logoFull
      }), external__react__default.a.createElement("div", {
        className: "Display-Black-Left marginTop32 paddingBottom40"
      }, "Big ideas, ", external__react__default.a.createElement("span", {
        style: {
          color: "#fff"
        }
      }, "together.")), external__react__default.a.createElement("div", {
        className: "login__left__desc",
        style: {
          fontSize: "20px"
        }
      }, "Comigo is a platform to find new collaborators on your very own campus. Connect with them to work on one-of-a-kind ideas.")), external__react__default.a.createElement("div", null, external__react__default.a.createElement("a", {
        href: "https://joincomigo.co/"
      }, external__react__default.a.createElement(button__default.a, null, "About Comigo")))), external__react__default.a.createElement("div", {
        className: "login__right"
      }, external__react__default.a.createElement(CardFlip, {
        isFlipped: isFlipped
      }, external__react__default.a.createElement("div", {
        key: "front",
        className: "front"
      }, external__react__default.a.createElement("div", {
        className: "sign-in-body "
      }, external__react__default.a.createElement("div", {
        className: "app-logo"
      }, external__react__default.a.createElement("img", {
        alt: "logo",
        src: logoIcon
      })), external__react__default.a.createElement("div", {
        className: "sign-in-title H2-Black-Center"
      }, "Welcome to Comigo  "), external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmit
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          message: 'Please input your E-mail!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Email"
      }))), external__react__default.a.createElement(FormItem, {
        hasFeedback: true,
        className: "marginBottom24",
        help: status === "error" && message
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your password!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        type: "password",
        placeholder: "Password"
      }))), external__react__default.a.createElement(FormItem, {
        className: "signup-button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        loading: status === 'running',
        type: "primary",
        htmlType: "submit"
      }, "Sign In")), external__react__default.a.createElement("div", {
        className: "forgot__button marginBottom8"
      }, external__react__default.a.createElement("a", {
        className: "Button-Dark-Grey-Center",
        onClick: toggleForgotModal
      }, "Forgot your password?")), external__react__default.a.createElement("div", {
        className: "Button-Dark-Grey-Center"
      }, "Don't have an account?", external__react__default.a.createElement("a", {
        onClick: handleClick
      }, " Sign Up"))))), external__react__default.a.createElement("div", {
        key: "back"
      }, external__react__default.a.createElement("div", {
        className: "back"
      }, external__react__default.a.createElement(SignUpContainer["a" /* default */], {
        handleClick: handleClick
      })))))));
    }
  }]);

  return Login;
}(external__react_["Component"]);

/* harmony default export */ var login_Login = (Login_Login);
// EXTERNAL MODULE: ./src/components/login/_login.less
var _login = __webpack_require__(78);
var _login_default = /*#__PURE__*/__webpack_require__.n(_login);

// EXTERNAL MODULE: ./src/actions/toggle.js
var toggle = __webpack_require__(20);

// EXTERNAL MODULE: ./src/components/forgot/ForgotModalContainer.js + 1 modules
var ForgotModalContainer = __webpack_require__(56);

// CONCATENATED MODULE: ./src/components/login/LoginContainer.js
/* unused harmony export mapStateToProps */
/* unused harmony export mapDispatchToProps */


function LoginContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LoginContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { LoginContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LoginContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function LoginContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LoginContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LoginContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) LoginContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) LoginContainer__defineProperties(Constructor, staticProps); return Constructor; }

function LoginContainer__possibleConstructorReturn(self, call) { if (call && (LoginContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return LoginContainer__assertThisInitialized(self); }

function LoginContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LoginContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var LoginContainer_LoginContainer =
/*#__PURE__*/
function (_Component) {
  LoginContainer__inherits(LoginContainer, _Component);

  function LoginContainer(props) {
    var _this;

    LoginContainer__classCallCheck(this, LoginContainer);

    _this = LoginContainer__possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).call(this, props));
    Object.defineProperty(LoginContainer__assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.setState(function (prevState) {
          return {
            isFlipped: !prevState.isFlipped
          };
        });
      }
    });
    _this.state = {
      isFlipped: false
    };
    return _this;
  }

  LoginContainer__createClass(LoginContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (routes["Router"].router.query && routes["Router"].router.query.isNewUser) {
        this.setState({
          isFlipped: true
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var login = this.props.login;
      e.preventDefault();
      this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          login(values);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", {
        style: {
          height: "100%",
          background: "#ffd250"
        }
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _login_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Sign In"
      }), external__react__default.a.createElement(login_Login, _extends({}, this.state, this.props, {
        handleClick: this.handleClick,
        handleSubmit: function handleSubmit(e) {
          return _this2.handleSubmit(e);
        }
      })), external__react__default.a.createElement(ForgotModalContainer["a" /* default */], null));
    }
  }]);

  return LoginContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    status: state.user.statusSignIn,
    message: state.user.message
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    login: user["login"],
    toggleForgotModal: toggle["toggleForgotModal"]
  }, dispatch);
}

var WrappedLoginContainer = form__default.a.create()(LoginContainer_LoginContainer);

/* harmony default export */ var login_LoginContainer = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(WrappedLoginContainer));

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = ".login {\n  height: 100%;\n  width: 1140px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login__container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login__left {\n  max-width: 380px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.login__left__desc {\n  font-family: TTCommons;\n  font-size: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n}\n.login__left .ant-btn:hover {\n  color: #fff;\n  background: #ffd250;\n  border-color: unset;\n}\n.login__left button {\n  margin-top: 40px;\n  background: none;\n  border: solid 2px;\n  border-radius: 24px;\n  width: 220px;\n  font-family: TTCommons-DemiBold;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: center;\n  height: 44px;\n}\n.login__right {\n  width: 540px;\n}\n.login__right .back {\n  background: #fff;\n  box-shadow: 0 20px 40px 0 rgba(54, 54, 54, 0.2);\n  padding: 40px;\n}\n.login__right .front {\n  background: #fff;\n  box-shadow: 0 20px 40px 0 rgba(54, 54, 54, 0.2);\n  padding: 40px;\n}\n.login__right .front .app-logo img {\n  width: 80px;\n  padding-bottom: 24px;\n  object-fit: contain;\n}\n.login__right .sign-in-body {\n  width: 350px;\n  margin: 0 auto;\n}\n.login .app-logo {\n  text-align: center;\n}\n.login .app-logo img {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n}\n.login .sign-in-title {\n  padding-bottom: 32px;\n}\n.login .forgot__button {\n  text-align: center;\n}\n.login .signup-button {\n  text-align: center;\n}\n.login .signup-button button {\n  width: 220px;\n  height: 44px;\n  font-weight: bold;\n  font-size: 18px;\n  border-radius: 24px;\n}\n.login .errMessage {\n  z-index: 10;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.login .ant-input {\n  height: 44px;\n}\n";

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),
/* 121 */
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

// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// EXTERNAL MODULE: ./src/actions/people.js
var actions_people = __webpack_require__(43);

// EXTERNAL MODULE: ./src/actions/toggle.js
var toggle = __webpack_require__(20);

// EXTERNAL MODULE: ./src/actions/job.js
var job = __webpack_require__(58);

// EXTERNAL MODULE: ./src/actions/search.js
var search = __webpack_require__(70);

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(71);
var spin__default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./src/components/common/postCard/PostCard.js
var PostCard = __webpack_require__(72);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/common/peopleCard/PeopleCard.js
var _PeopleCard = __webpack_require__(64);

// CONCATENATED MODULE: ./src/components/home/People.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var People__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderPeople", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(list) {
        return list.map(function (item, index) {
          return external__react__default.a.createElement("div", {
            key: index
          }, external__react__default.a.createElement(_PeopleCard["a" /* default */], {
            data: item
          }));
        });
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var people = this.props.people;
      return external__react__default.a.createElement("div", {
        className: "newsfeed-container max-width"
      }, this.renderPeople(people));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/noResult/NoResult.js
var NoResult = __webpack_require__(68);

// EXTERNAL MODULE: ./src/components/common/jobPost/JobPost.js
var JobPost = __webpack_require__(61);

// EXTERNAL MODULE: ./src/components/common/peopleJoin/PeopleJoin.js
var _PeopleJoin = __webpack_require__(74);

// EXTERNAL MODULE: ./src/components/common/updateCard/UpdateCardContainer.js + 3 modules
var UpdateCardContainer = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/home/NewsFeed.js


function NewsFeed__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NewsFeed__typeof = function _typeof(obj) { return typeof obj; }; } else { NewsFeed__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NewsFeed__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NewsFeed__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewsFeed__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewsFeed__createClass(Constructor, protoProps, staticProps) { if (protoProps) NewsFeed__defineProperties(Constructor.prototype, protoProps); if (staticProps) NewsFeed__defineProperties(Constructor, staticProps); return Constructor; }

function NewsFeed__possibleConstructorReturn(self, call) { if (call && (NewsFeed__typeof(call) === "object" || typeof call === "function")) { return call; } return NewsFeed__assertThisInitialized(self); }

function NewsFeed__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function NewsFeed__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var loading = '/static/images/loading.gif';
var options = [{
  label: 'All Posts',
  value: "all"
}, {
  label: 'Projects',
  value: "project"
}, {
  label: 'Jobs',
  value: "job"
}, {
  label: 'People',
  value: "people"
}];

var NewsFeed__default =
/*#__PURE__*/
function (_Component) {
  NewsFeed__inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    NewsFeed__classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return NewsFeed__possibleConstructorReturn(_this, (_temp = _this = NewsFeed__possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(NewsFeed__assertThisInitialized(_this), "renderFeed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(feed) {
        var _this$props = _this.props,
            filterValue = _this$props.filterValue,
            toggleJobDetail = _this$props.toggleJobDetail,
            handleSearchSkill = _this$props.handleSearchSkill,
            edit = _this$props.edit,
            userData = _this$props.userData;
        return feed.map(function (item, index) {
          switch (item.itemType) {
            case "people":
              return external__react__default.a.createElement(_PeopleCard["a" /* default */], {
                key: index,
                data: item
              });

            case "project":
              return external__react__default.a.createElement(PostCard["a" /* default */], {
                key: index,
                handleSearchSkill: handleSearchSkill,
                toggleJobDetail: toggleJobDetail,
                filterValue: filterValue,
                data: item
              });

            case "job":
              return external__react__default.a.createElement(JobPost["a" /* default */], {
                toggleJobDetail: toggleJobDetail,
                key: index,
                postedUser: item.postedUserData,
                user: userData,
                jobDetail: item
              });

            case "collaborator":
              return external__react__default.a.createElement(_PeopleJoin["a" /* default */], {
                key: index,
                data: item
              });

            case "update":
              return external__react__default.a.createElement(UpdateCardContainer["a" /* default */], {
                key: index,
                isNewFeed: true,
                detail: item.projectData,
                edit: edit,
                data: _objectSpread({}, item, {
                  comments: [item.comment]
                })
              });

            default:
              return external__react__default.a.createElement("div", null);
          }
        });
      }
    }), Object.defineProperty(NewsFeed__assertThisInitialized(_this), "renderProjects", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(projects) {
        var _this$props2 = _this.props,
            filterValue = _this$props2.filterValue,
            toggleJobDetail = _this$props2.toggleJobDetail,
            handleSearchSkill = _this$props2.handleSearchSkill;
        return projects.map(function (item, index) {
          return external__react__default.a.createElement(PostCard["a" /* default */], {
            key: index,
            handleSearchSkill: handleSearchSkill,
            toggleJobDetail: toggleJobDetail,
            filterValue: filterValue,
            data: item
          });
        });
      }
    }), _temp));
  }

  NewsFeed__createClass(_default, [{
    key: "renderNewsFeed",
    value: function renderNewsFeed() {
      var _props = this.props,
          projects = _props.projects,
          people = _props.people,
          jobList = _props.jobList,
          filterValue = _props.filterValue,
          toggleJobDetail = _props.toggleJobDetail,
          feed = _props.feed,
          statusFeed = _props.statusFeed,
          statusProject = _props.statusProject,
          statusPeople = _props.statusPeople,
          statusJob = _props.statusJob,
          userData = _props.userData;
      if (feed && feed.length === 0) return external__react__default.a.createElement(NoResult["a" /* default */], null);else if (filterValue === "all" && feed) {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
          className: "H2-Black-Left filter__title"
        }, "All Posts"), external__react__default.a.createElement(spin__default.a, {
          spinning: statusFeed === "running",
          tip: "Loading..."
        }, this.renderFeed(feed)));
      } else if (filterValue === "project" && projects) {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
          className: "H2-Black-Left filter__title"
        }, "Projects"), external__react__default.a.createElement(spin__default.a, {
          spinning: statusProject === "running",
          tip: "Loading..."
        }, this.renderProjects(projects)));
      } else if (filterValue === "job" && jobList) {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
          className: "H2-Black-Left filter__title"
        }, "Jobs"), external__react__default.a.createElement(spin__default.a, {
          spinning: statusJob === "running",
          tip: "Loading..."
        }, jobList.map(function (item, index) {
          if (item.postedUserData) return external__react__default.a.createElement(JobPost["a" /* default */], {
            toggleJobDetail: toggleJobDetail,
            key: index,
            postedUser: item.postedUserData,
            user: userData,
            jobDetail: item
          });
        })));
      } else if (filterValue === "people" && people) return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "H2-Black-Left filter__title"
      }, "People"), external__react__default.a.createElement(spin__default.a, {
        spinning: statusPeople === "running",
        tip: "Loading..."
      }, external__react__default.a.createElement(People__default, _extends({}, this.state, this.props))));
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          feed = _props2.feed,
          userData = _props2.userData,
          onFilterChange = _props2.onFilterChange,
          visibleProject = _props2.visibleProject,
          filterValue = _props2.filterValue;
      return external__react__default.a.createElement("div", {
        className: "newsfeed "
      }, feed && external__react__default.a.createElement("div", {
        className: "newsfeed__header"
      }, options.map(function (item, index) {
        return external__react__default.a.createElement("a", {
          onClick: function onClick() {
            return onFilterChange(item.value);
          },
          key: index,
          className: "".concat(filterValue === item.value && "item__clicked", " header__item Button-Black-Center")
        }, item.label);
      })), userData && feed && this.renderNewsFeed());
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/home/_newsFeed.less
var _newsFeed = __webpack_require__(122);
var _newsFeed_default = /*#__PURE__*/__webpack_require__.n(_newsFeed);

// EXTERNAL MODULE: ./src/components/common/jobDetail/JobDetail.js
var JobDetail = __webpack_require__(75);

// EXTERNAL MODULE: ./src/components/login/LoginContainer.js + 2 modules
var LoginContainer = __webpack_require__(77);

// EXTERNAL MODULE: ./src/components/home/_home.less
var _home = __webpack_require__(123);
var _home_default = /*#__PURE__*/__webpack_require__.n(_home);

// EXTERNAL MODULE: external "antd/lib/affix"
var affix_ = __webpack_require__(82);
var affix__default = /*#__PURE__*/__webpack_require__.n(affix_);

// EXTERNAL MODULE: ./src/components/home/leftBar/_leftBar.less
var _leftBar = __webpack_require__(124);
var _leftBar_default = /*#__PURE__*/__webpack_require__.n(_leftBar);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./src/components/common/Image.js
var Image = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/common/userBar/UserBar.js


function UserBar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UserBar__typeof = function _typeof(obj) { return typeof obj; }; } else { UserBar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UserBar__typeof(obj); }

function UserBar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserBar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserBar__createClass(Constructor, protoProps, staticProps) { if (protoProps) UserBar__defineProperties(Constructor.prototype, protoProps); if (staticProps) UserBar__defineProperties(Constructor, staticProps); return Constructor; }

function UserBar__possibleConstructorReturn(self, call) { if (call && (UserBar__typeof(call) === "object" || typeof call === "function")) { return call; } return UserBar__assertThisInitialized(self); }

function UserBar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UserBar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var profileIcon = '/static/images/icon-profile.svg';
var TextArea = input__default.a.TextArea;

var UserBar__default =
/*#__PURE__*/
function (_Component) {
  UserBar__inherits(_default, _Component);

  function _default() {
    UserBar__classCallCheck(this, _default);

    return UserBar__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  UserBar__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          userData = _props.userData,
          isUser = _props.isUser;
      return external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: isUser ? "/profile" : "/user/" + userData._id
      }, external__react__default.a.createElement("a", {
        className: "user-bar"
      }, external__react__default.a.createElement("img", {
        alt: "avatar",
        src: userData.pictureURL ? userData.pictureURL : profileIcon
      }), external__react__default.a.createElement("div", {
        className: "info"
      }, external__react__default.a.createElement("div", {
        className: "Button-Black-Left"
      }, "".concat(userData.firstName, " ").concat(userData.lastName)), external__react__default.a.createElement("div", {
        className: "Caption-Grey-Left"
      }, "".concat(userData.email)))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/home/leftBar/LeftBar.js


function LeftBar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LeftBar__typeof = function _typeof(obj) { return typeof obj; }; } else { LeftBar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LeftBar__typeof(obj); }

function LeftBar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LeftBar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LeftBar__createClass(Constructor, protoProps, staticProps) { if (protoProps) LeftBar__defineProperties(Constructor.prototype, protoProps); if (staticProps) LeftBar__defineProperties(Constructor, staticProps); return Constructor; }

function LeftBar__possibleConstructorReturn(self, call) { if (call && (LeftBar__typeof(call) === "object" || typeof call === "function")) { return call; } return LeftBar__assertThisInitialized(self); }

function LeftBar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LeftBar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var addIcon = '/static/images/icon-add.svg';

var LeftBar__default =
/*#__PURE__*/
function (_Component) {
  LeftBar__inherits(_default, _Component);

  function _default() {
    LeftBar__classCallCheck(this, _default);

    return LeftBar__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  LeftBar__createClass(_default, [{
    key: "render",
    value: function render() {
      var userData = this.props.userData;
      return external__react__default.a.createElement(affix__default.a, {
        offsetTop: 30
      }, external__react__default.a.createElement("div", {
        className: "left-bar"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _leftBar_default.a
        }
      }), external__react__default.a.createElement(UserBar__default, {
        isUser: true,
        userData: userData
      }), external__react__default.a.createElement("div", {
        className: "workspace"
      }, external__react__default.a.createElement("div", {
        className: "title H3-Black-Left"
      }, "Workspace"), external__react__default.a.createElement("div", {
        className: "workspace__projects"
      }, userData.projects.map(function (item, index) {
        return external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: "/" + item._id,
          key: index
        }, external__react__default.a.createElement("a", {
          className: "project"
        }, external__react__default.a.createElement("img", {
          alt: "avatar",
          src: item.coverURL
        }), external__react__default.a.createElement("div", {
          className: "info "
        }, external__react__default.a.createElement("div", {
          className: "Button-Black-Left"
        }, item.name), item.shares && external__react__default.a.createElement("div", {
          className: "Caption-Grey-Left"
        }, " ", item.shares.length + 1, " members"))));
      }), external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: "/new-project"
      }, external__react__default.a.createElement("a", {
        className: "project"
      }, external__react__default.a.createElement("img", {
        alt: "avatar",
        src: addIcon
      }), external__react__default.a.createElement("div", {
        className: "info "
      }, external__react__default.a.createElement("div", {
        className: "Button-Dark-Grey-Left"
      }, "Create Project"))))))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/home/rightBar/_rightBar.less
var _rightBar = __webpack_require__(125);
var _rightBar_default = /*#__PURE__*/__webpack_require__.n(_rightBar);

// CONCATENATED MODULE: ./src/components/home/rightBar/RightBar.js


function RightBar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RightBar__typeof = function _typeof(obj) { return typeof obj; }; } else { RightBar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RightBar__typeof(obj); }

function RightBar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RightBar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RightBar__createClass(Constructor, protoProps, staticProps) { if (protoProps) RightBar__defineProperties(Constructor.prototype, protoProps); if (staticProps) RightBar__defineProperties(Constructor, staticProps); return Constructor; }

function RightBar__possibleConstructorReturn(self, call) { if (call && (RightBar__typeof(call) === "object" || typeof call === "function")) { return call; } return RightBar__assertThisInitialized(self); }

function RightBar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RightBar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RightBar__default =
/*#__PURE__*/
function (_Component) {
  RightBar__inherits(_default, _Component);

  function _default() {
    RightBar__classCallCheck(this, _default);

    return RightBar__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  RightBar__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          people = _props.people,
          peopleMayKnow = _props.peopleMayKnow;
      return external__react__default.a.createElement(affix__default.a, {
        offsetTop: 30
      }, external__react__default.a.createElement("div", {
        className: "right-bar"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _rightBar_default.a
        }
      }), external__react__default.a.createElement("div", {
        className: "H3-Black-Left"
      }, "People you may know"), external__react__default.a.createElement("div", {
        className: "people"
      }, peopleMayKnow.map(function (item, index) {
        if (index < 4) return external__react__default.a.createElement(UserBar__default, {
          key: index,
          userData: item
        });
      }))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/home/HomeContainer.js


function HomeContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { HomeContainer__defineProperty(target, key, source[key]); }); } return target; }

function HomeContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HomeContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HomeContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { HomeContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HomeContainer__typeof(obj); }

function HomeContainer__extends() { HomeContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HomeContainer__extends.apply(this, arguments); }

function HomeContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HomeContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HomeContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) HomeContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) HomeContainer__defineProperties(Constructor, staticProps); return Constructor; }

function HomeContainer__possibleConstructorReturn(self, call) { if (call && (HomeContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return HomeContainer__assertThisInitialized(self); }

function HomeContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function HomeContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



















var HomeContainer_HomeContainer =
/*#__PURE__*/
function (_Component) {
  HomeContainer__inherits(HomeContainer, _Component);

  function HomeContainer(props) {
    var _this;

    HomeContainer__classCallCheck(this, HomeContainer);

    _this = HomeContainer__possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).call(this, props));
    Object.defineProperty(HomeContainer__assertThisInitialized(_this), "handleSubcribe", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var subcribe = _this.props.subcribe;
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            subcribe(values.email);
          }
        });
      }
    });
    Object.defineProperty(HomeContainer__assertThisInitialized(_this), "handleCloseModalProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          visibleProject: false
        });
      }
    });
    Object.defineProperty(HomeContainer__assertThisInitialized(_this), "handleOpenModalProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(detail) {
        _this.setState({
          visibleProject: true,
          detail: detail
        });
      }
    });
    Object.defineProperty(HomeContainer__assertThisInitialized(_this), "onFilterChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props = _this.props,
            toggleHomeView = _this$props.toggleHomeView,
            listJob = _this$props.listJob,
            search = _this$props.search,
            getPeopleList = _this$props.getPeopleList,
            feed = _this$props.feed,
            people = _this$props.people,
            jobList = _this$props.jobList,
            status = _this$props.status,
            projects = _this$props.projects,
            getList = _this$props.getList;

        if (!projects) {
          getList({});
        }

        if (!feed) {
          search({
            data: "",
            type: "all"
          });
        }

        if (!people) {
          getPeopleList({
            data: "",
            type: "all"
          });
        }

        if (!jobList) listJob({
          id: null,
          type: "all"
        });
        toggleHomeView(e);
      }
    });
    Object.defineProperty(HomeContainer__assertThisInitialized(_this), "handleSearchSkill", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        routes["Router"].pushRoute("/search?key=" + e.replace(/ /g, '-'));
      }
    });
    _this.state = {
      visibleProject: false,
      detail: null
    };
    return _this;
  }

  HomeContainer__createClass(HomeContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          getList = _props.getList,
          getPeopleList = _props.getPeopleList,
          listJob = _props.listJob,
          feed = _props.feed,
          people = _props.people,
          jobList = _props.jobList,
          search = _props.search,
          projects = _props.projects,
          getPeopleMayKnow = _props.getPeopleMayKnow;
      search({
        data: "",
        type: "all"
      });
      getPeopleMayKnow();

      if (!people) {
        getPeopleList({
          data: "",
          type: "all"
        });
      }

      if (!jobList) {
        listJob({
          id: null,
          type: "all"
        });
      }

      if (!projects) {
        getList({});
      }
    }
  }, {
    key: "renderLoggedHome",
    value: function renderLoggedHome() {
      var _props2 = this.props,
          userData = _props2.userData,
          peopleMayKnow = _props2.peopleMayKnow;
      return external__react__default.a.createElement("div", {
        className: "home-logged"
      }, userData && external__react__default.a.createElement("div", {
        className: "home-logged__bar"
      }, " ", external__react__default.a.createElement(LeftBar__default, this.props)), external__react__default.a.createElement("div", {
        className: "feed"
      }, external__react__default.a.createElement(NewsFeed__default, HomeContainer__extends({
        handleSearchSkill: this.handleSearchSkill,
        onFilterChange: this.onFilterChange
      }, this.props))), peopleMayKnow && external__react__default.a.createElement("div", {
        className: "home-logged__bar"
      }, " ", external__react__default.a.createElement(RightBar__default, this.props)));
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          isLoggedIn = _props3.isLoggedIn,
          userData = _props3.userData,
          jobDetail = _props3.jobDetail;
      return external__react__default.a.createElement("div", {
        style: {
          height: "100%"
        }
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _home_default.a + _newsFeed_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        ogImage: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/45045111_1765319220262750_5618645889863122944_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn3-1.fna&oh=a58ca021533b7e75b90cd31500c21ab6&oe=5C47595E",
        title: "Comigo - Find your future. Build your idea.",
        description: "Find your future. Build your idea."
      }), jobDetail && external__react__default.a.createElement(JobDetail["a" /* default */], HomeContainer__extends({
        user: userData
      }, this.props)), isLoggedIn ? this.renderLoggedHome() : external__react__default.a.createElement(LoginContainer["a" /* default */], HomeContainer__extends({}, this.state, this.props)));
    }
  }]);

  return HomeContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    projects: state.project.projects,
    jobList: state.job.jobList,
    visibleProject: state.toggle.visibleProject,
    people: state.people.people,
    statusProject: state.project.status,
    userData: state.user.data,
    peopleStatus: state.people.status,
    message: state.people.message,
    filterValue: state.toggle.filterValue,
    visibleJobDetail: state.toggle.visibleJobDetail,
    jobDetail: state.toggle.jobDetail,
    feed: state.search.feed,
    jobProjectDetail: state.toggle.jobProjectDetail,
    statusPeople: state.people.status,
    statusJob: state.job.status,
    statusFeed: state.search.status,
    peopleMayKnow: state.people.peopleMayKnow
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(HomeContainer__objectSpread({}, job, project, actions_people, toggle, search), dispatch);
}
/* harmony default export */ var home_HomeContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(HomeContainer_HomeContainer)));
// CONCATENATED MODULE: ./pages/index.js

/* harmony default export */ var pages = __webpack_exports__["default"] = (home_HomeContainer);

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = ".newsfeed {\n  max-width: 540px;\n  margin: 0 auto;\n}\n.newsfeed .filter__title {\n  padding: 22px 0;\n}\n.newsfeed .newsfeed__header {\n  min-width: 540px;\n  display: flex;\n  justify-content: space-around;\n  padding: 30px 0;\n}\n.newsfeed .newsfeed__header .header__item {\n  padding: 6px 12px;\n}\n.newsfeed .newsfeed__header .item__clicked {\n  border-radius: 24px;\n  background-color: #f7ca3d;\n  color: #fff;\n}\n.project-modal-container .ant-modal-body {\n  padding: 0 !important;\n}\n.loading-feed {\n  padding-top: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n}\n.loading-feed img {\n  width: 80px;\n}\n";

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = ".home-logged {\n  width: 1140px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 60px;\n}\n.home-logged__bar {\n  width: 200px;\n}\n.home-logged .sidebar {\n  width: 247px;\n  margin-top: 8px;\n  float: left;\n  position: fixed;\n}\n.home-logged .sidebar .ant-card-body {\n  padding: 24px !important;\n}\n.home-logged .sidebar .ant-checkbox-group {\n  display: flex;\n  flex-direction: column;\n}\n.home-logged .sidebar .ant-checkbox-group .ant-checkbox-group-item {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #f2f0ed;\n  margin-bottom: 8px;\n  margin-right: 0;\n  padding: 8px;\n  font-size: 12px;\n}\n.home-logged .sidebar .ant-radio-group {\n  display: flex;\n  flex-direction: column;\n}\n.home-logged .sidebar .ant-radio-group .ant-radio-wrapper {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #f2f0ed;\n  margin-bottom: 8px;\n  margin-right: 0;\n  padding: 8px;\n}\n.home-logged .sidebar .ant-radio-group .ant-radio-wrapper span {\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n}\n.home-logged .sidebar__body {\n  margin-top: 16px;\n}\n.home-container {\n  background: #fff;\n}\n.home-container .home {\n  padding: 80px 0;\n  max-width: 920px;\n  margin: 0 auto;\n}\n.home-container .home .home-header {\n  display: flex;\n}\n.home-container .home .home-header .pole {\n  width: 8px;\n  height: 80px;\n  background-color: #2e3033;\n  margin-right: 24px;\n}\n.home-container .home .home-header .together {\n  color: #2e3033;\n}\n.home-container .home .home-body {\n  padding-top: 80px;\n}\n.home-container .home .home-body .home-body__1 {\n  display: flex;\n  padding-bottom: 40px;\n}\n.home-container .home .home-body .home-body__1 .video-container {\n  width: 1400px;\n  height: 304px !important;\n}\n.home-container .home .home-body .home-body__1 .intro {\n  padding-top: 40px;\n  margin-left: 40px;\n}\n.home-container .home .home-body .home-body__1 button {\n  width: 160px;\n  height: 48px;\n  margin-top: 24px;\n}\n.home-container .home .home-body .mid {\n  max-width: 730px;\n  margin: 0 auto;\n  justify-content: space-between;\n  display: flex;\n}\n.home-container .home .home-body .body__2-desc {\n  white-space: pre;\n}\n.home-container .home-feature {\n  background: #edf0f2;\n  padding-bottom: 67px;\n}\n.home-container .home-feature .feature-title {\n  padding-top: 64px;\n  padding-bottom: 40px;\n}\n.home-container .home-feature .feature-block-container {\n  display: flex;\n  max-width: 920px;\n  margin: 0 auto;\n}\n.home-container .home-feature .feature-block-container .block-left {\n  margin-right: 30px;\n  width: 50%;\n}\n.home-container .home-feature .feature-block-container .block-right {\n  width: 50%;\n}\n.home-container .home-feature .feature-block-container .ant-card {\n  border-radius: 0;\n}\n.home-container .home-feature .feature-block-container .feature-item {\n  width: 50%;\n  text-align: center;\n}\n.home-container .home-feature .feature-block-container .feature-item img {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n.home-container .home-feature .feature-block-container .feature-item .feature-number {\n  padding-top: 20px;\n  font-size: 48px;\n  font-weight: bold;\n  line-height: 1.17;\n  text-align: center;\n  color: #006cd9;\n  padding-bottom: 24px;\n}\n.home-container .home-feature .feature-block-container .number-item {\n  height: 203px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.home-container .home-coming {\n  text-align: center;\n  margin: 80px 0;\n}\n.home-container .home-coming img {\n  width: 120px;\n}\n.home-container .home-coming .coming-desc {\n  padding-top: 24px;\n}\n.home-container .home-notified {\n  text-align: center;\n  background: #edf0f2;\n  padding-bottom: 40px;\n}\n.home-container .home-notified .notified-desc {\n  padding-top: 64px;\n}\n.home-container .home-notified .form-subscribe {\n  padding-top: 40px;\n  display: flex;\n  justify-content: center;\n}\n.home-container .home-notified .form-subscribe input {\n  width: 350px;\n  height: 48px;\n  margin-right: 16px;\n}\n.home-container .home-notified .form-subscribe button {\n  width: 174px;\n  height: 48px;\n}\n";

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = ".left-bar {\n  padding-top: 60px;\n}\n.left-bar .workspace {\n  padding-top: 20px;\n}\n.left-bar .workspace .title {\n  padding-bottom: 20px;\n}\n.left-bar .workspace__projects .project {\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n}\n.left-bar .workspace__projects .project img {\n  margin-right: 10px;\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.left-bar .workspace__projects .project .Button-Black-Left {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 200px;\n}\n";

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = ".right-bar {\n  position: fixed;\n  padding-top: 60px;\n}\n.right-bar .people {\n  padding-top: 22px;\n}\n";

/***/ })
/******/ ]);