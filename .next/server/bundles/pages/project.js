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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
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
/* 15 */,
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
/* 19 */,
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
/* 22 */,
/* 23 */,
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
/* 28 */,
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = ".major__container input {\n  border: none !important;\n}\n.major__container .ant-select-selection {\n  border: none;\n  box-shadow: none !important;\n}\n.major__container .ant-select-selection:focus {\n  box-shadow: none;\n}\n.major__container .ant-select-selection__choice {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-align: center;\n  color: #2e3033;\n  border-radius: 4px;\n  margin-right: 8px !important;\n  margin-top: 0;\n  border: none;\n  background: #edf0f2 !important;\n  height: 28px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.major__container .ant-select-selection__choice:first-child {\n  margin-left: 0px !important;\n}\n";

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = ".update__card-container {\n  border-radius: 2px;\n  box-shadow: 0 6px 16px 0 rgba(54, 54, 54, 0.15);\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.update__card-container .ant-card-body {\n  padding: 0;\n}\n.update__card-container .update__header-container {\n  padding-bottom: 22px;\n  display: flex;\n  justify-content: space-between;\n}\n.update__card-container .update__header-container .update__left {\n  display: flex;\n}\n.update__card-container .update__header-container .update__left img {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  margin-right: 8px;\n  object-fit: cover;\n}\n.update__card-container .update__header-container .update__left .text-blue {\n  color: #006cd9;\n}\n.update__card-container .update__header-container .update__left .update__title {\n  display: flex;\n  flex-direction: column;\n}\n.update__card-container .update__header-container .update__right img {\n  width: 24px;\n  cursor: pointer;\n}\n.update__card-container .update__body-container {\n  white-space: pre-line;\n  box-shadow: inset 0 -1px 0 0 rgba(54, 54, 54, 0.1);\n  padding-bottom: 20px;\n}\n.update__card-container .update__comment-container {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 20px;\n}\n.update__card-container .update__comment-container .update__comment-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.update__card-container .update__comment-container:first-child {\n  padding-top: 24px;\n}\n.update__card-container .update__comment-container .update__comment-header {\n  display: flex;\n  align-items: flex-start;\n}\n.update__card-container .update__comment-container .update__comment-header .header__content {\n  display: flex;\n  flex-direction: column;\n}\n.update__card-container .update__comment-container .update__comment-header .header__content .name {\n  margin-right: 4px;\n  display: flex;\n  align-items: center;\n}\n.update__card-container .update__comment-container .update__comment-header img {\n  object-fit: cover;\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n.update__card-container .update__comment-container .update__comment-body {\n  margin-top: 4px;\n  display: flex;\n  align-items: flex-start;\n}\n.update__card-container .update__comment-container .update__comment-body .comment__right img {\n  width: 16px;\n  cursor: pointer;\n}\n.update__card-container .update__comment-all {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n}\n.update__card-container .update__user-comment {\n  display: flex;\n  align-items: center;\n  padding-top: 24px;\n}\n.update__card-container .update__user-comment img {\n  margin-right: 8px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n}\n.update__card-container .update__user-comment .input-comment {\n  width: 100%;\n}\n.update__card-container .update__user-comment .input-comment .ant-row {\n  width: 100%;\n}\n.update__card-container .update__user-comment .input-comment .ant-row .ant-form-item-control-wrapper {\n  width: 100%;\n}\n.update__card-container .update__user-comment .input-comment .ant-row .ant-form-item-control-wrapper input {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  border-radius: 16px;\n  max-height: 200px !important;\n  height: 40px !important;\n  opacity: 0.8;\n  background-color: #f5f7fa;\n  border: none !important;\n}\n.ant-dropdown-menu-item img {\n  width: 12px;\n  height: 12px;\n  margin-right: 8px;\n}\n";

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_less__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_less__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var loading = '/static/images/loading.gif';

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "loading-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_1__loading_less___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: loading,
        alt: "loading"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = ".loading-container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n}\n.loading-container img {\n  width: 80px;\n}\n";

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
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
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postJob */
/* unused harmony export getJobDetail */
/* unused harmony export deleteJob */
/* unused harmony export updateJob */
/* unused harmony export listJob */
/* harmony export (immutable) */ __webpack_exports__["a"] = root;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_cookie__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_endPoint__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);



var _marked =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(postJob),
    _marked2 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(getJobDetail),
    _marked3 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(deleteJob),
    _marked4 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(updateJob),
    _marked5 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(listJob),
    _marked6 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(root);

/**
 * @module Sagas/User
 * @desc User
 */






var cookies = new __WEBPACK_IMPORTED_MODULE_4_react_cookie__["Cookies"]();
var job = {
  postJob: function postJob(data) {
    // Post a sign in request
    return __WEBPACK_IMPORTED_MODULE_7_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_5__constants_endPoint__["a" /* endPoint */] + 'job',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': cookies.get('token')
      },
      data: JSON.stringify(data)
    }).then(function (response) {
      // window.location.replace("/")
      return response.data;
    });
  },
  getJobDetail: function getJobDetail(data) {
    // Post a sign in request
    return __WEBPACK_IMPORTED_MODULE_7_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_5__constants_endPoint__["a" /* endPoint */] + 'job',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': cookies.get('token')
      },
      data: JSON.stringify(data)
    }).then(function (response) {
      // window.location.replace("/")
      return response.data;
    });
  },
  deleteJob: function deleteJob(data) {
    // Post a sign in request
    return __WEBPACK_IMPORTED_MODULE_7_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_5__constants_endPoint__["a" /* endPoint */] + 'job/' + data.jobID,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': cookies.get('token')
      }
    }).then(function (response) {
      // window.location.replace("/")
      return response.data;
    });
  },
  updateJob: function updateJob(data) {
    // Post a sign in request
    return __WEBPACK_IMPORTED_MODULE_7_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_5__constants_endPoint__["a" /* endPoint */] + 'job/' + data.jobID,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': cookies.get('token')
      },
      data: JSON.stringify(data)
    }).then(function (response) {
      // window.location.replace("/")
      return response.data;
    });
  },
  listJob: function listJob(id) {
    // Post a sign in request
    return __WEBPACK_IMPORTED_MODULE_7_axios___default()({
      url: __WEBPACK_IMPORTED_MODULE_5__constants_endPoint__["a" /* endPoint */] + 'job/list' + "".concat(id ? "".concat('?projectID=' + id) : ""),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': cookies.get('token')
      }
    }).then(function (response) {
      // window.location.replace("/")
      return response.data;
    });
  }
};
function postJob(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function postJob$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["call"])(job.postJob, data.payload);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].POST_JOB_SUCCESS,
            response: response.data
          });

        case 6:
          _context.next = 8;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].TOGGLE_POST_JOB
          });

        case 8:
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a['success']({
            message: 'Comigo',
            description: response.message
          });

          _context.next = 16;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].POST_JOB_ERROR,
            error: _context.t0.response
          });

        case 15:
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a['error']({
            message: 'Something went wrong!',
            description: "Fail to post new job!"
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}
function getJobDetail(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function getJobDetail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["call"])(job.getJobDetail, data.payload);

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].GET_JOB_DETAIL_SUCCESS,
            response: response.data
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].GET_JOB_DETAIL_ERROR,
            error: _context2.t0.response
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}
function deleteJob(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function deleteJob$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["call"])(job.deleteJob, data.payload);

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].DELETE_JOB_SUCCESS,
            response: response.data
          });

        case 6:
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a['success']({
            message: 'Comigo',
            description: response.message
          });

          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].DELETE_JOB_ERROR,
            error: _context3.t0.response
          });

        case 13:
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a['error']({
            message: 'Something went wrong!',
            description: "Fail to delete job!"
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 9]]);
}
function updateJob(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function updateJob$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["call"])(job.updateJob, data.payload);

        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].UPDATE_JOB_SUCCESS,
            response: response.data
          });

        case 6:
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a['success']({
            message: 'Comigo',
            description: response.message
          });

          _context4.next = 14;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 13;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].UPDATE_JOB_ERROR,
            error: _context4.t0.response
          });

        case 13:
          __WEBPACK_IMPORTED_MODULE_1_antd_lib_notification___default.a['error']({
            message: 'Something went wrong!',
            description: "Fail to update job!"
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 9]]);
}
function listJob(data) {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function listJob$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["call"])(job.listJob, data.payload.id);

        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].LIST_JOB_SUCCESS,
            response: {
              data: response.data,
              type: data.payload.type
            }
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].LIST_JOB_ERROR,
            error: _context5.t0.response
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 8]]);
}
/**
 * Project Sagas
 */

function root() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function root$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].POST_JOB, postJob), Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].GET_JOB_DETAIL, getJobDetail), Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].DELETE_JOB, deleteJob), Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].UPDATE_JOB, updateJob), Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ActionTypes */].LIST_JOB, listJob)]);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
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
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
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
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(21);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(2);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(9);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(44);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./src/components/common/Image.js
var Image = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/common/ImageProject.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var projectIcon = '/static/images/icon-project.svg';

var ImageProject__default =
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
      var image = this.props.image;
      return external__react__default.a.createElement("img", _defineProperty({
        src: "project"
      }, "src", image ? image : projectIcon));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(13);
var card__default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./src/components/common/postUpdate/PostUpdate.js




function PostUpdate__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PostUpdate__typeof = function _typeof(obj) { return typeof obj; }; } else { PostUpdate__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PostUpdate__typeof(obj); }

function PostUpdate__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PostUpdate__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PostUpdate__createClass(Constructor, protoProps, staticProps) { if (protoProps) PostUpdate__defineProperties(Constructor.prototype, protoProps); if (staticProps) PostUpdate__defineProperties(Constructor, staticProps); return Constructor; }

function PostUpdate__possibleConstructorReturn(self, call) { if (call && (PostUpdate__typeof(call) === "object" || typeof call === "function")) { return call; } return PostUpdate__assertThisInitialized(self); }

function PostUpdate__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PostUpdate__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TextArea = input__default.a.TextArea;

var PostUpdate__default =
/*#__PURE__*/
function (_Component) {
  PostUpdate__inherits(_default, _Component);

  function _default() {
    PostUpdate__classCallCheck(this, _default);

    return PostUpdate__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  PostUpdate__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          detail = _props.detail,
          handlePostUpdate = _props.handlePostUpdate,
          onUpdateChange = _props.onUpdateChange,
          updateContent = _props.updateContent,
          status = _props.status;
      return external__react__default.a.createElement(card__default.a, {
        bordered: false,
        className: "post-update-container"
      }, external__react__default.a.createElement("div", {
        className: "post__content-container"
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: detail.owner.pictureURL
      }), external__react__default.a.createElement(TextArea, {
        onChange: onUpdateChange,
        value: updateContent,
        className: "Paragraph-12",
        placeholder: "Post something about project update here...",
        autosize: true
      })), external__react__default.a.createElement("div", {
        className: "post__button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Left",
        loading: status === "running",
        onClick: handlePostUpdate
      }, "Post")));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/updateCard/UpdateCardContainer.js + 3 modules
var UpdateCardContainer = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/project/Update.js
function Update__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Update__typeof = function _typeof(obj) { return typeof obj; }; } else { Update__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Update__typeof(obj); }

function Update__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Update__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Update__createClass(Constructor, protoProps, staticProps) { if (protoProps) Update__defineProperties(Constructor.prototype, protoProps); if (staticProps) Update__defineProperties(Constructor, staticProps); return Constructor; }

function Update__possibleConstructorReturn(self, call) { if (call && (Update__typeof(call) === "object" || typeof call === "function")) { return call; } return Update__assertThisInitialized(self); }

function Update__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Update__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Update__default =
/*#__PURE__*/
function (_Component) {
  Update__inherits(_default, _Component);

  function _default() {
    Update__classCallCheck(this, _default);

    return Update__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Update__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          detail = _props.detail,
          edit = _props.edit;
      return external__react__default.a.createElement("div", {
        className: "project-update"
      }, edit && external__react__default.a.createElement(PostUpdate__default, this.props), detail.updates.map(function (item, index) {
        return external__react__default.a.createElement(UpdateCardContainer["a" /* default */], {
          detail: detail,
          edit: edit,
          data: item,
          key: index
        });
      }));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(26);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// CONCATENATED MODULE: ./src/components/project/Project.js



function Project__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Project__typeof = function _typeof(obj) { return typeof obj; }; } else { Project__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Project__typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Project__defineProperty(target, key, source[key]); }); } return target; }

function Project__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Project__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Project__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Project__createClass(Constructor, protoProps, staticProps) { if (protoProps) Project__defineProperties(Constructor.prototype, protoProps); if (staticProps) Project__defineProperties(Constructor, staticProps); return Constructor; }

function Project__possibleConstructorReturn(self, call) { if (call && (Project__typeof(call) === "object" || typeof call === "function")) { return call; } return Project__assertThisInitialized(self); }

function Project__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Project__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var trashIcon = '/static/images/icon-trash.svg';
var editIcon = '/static/images/icon-edit.svg';
var jobIcon = '/static/images/icon-job.svg';

var Project__default =
/*#__PURE__*/
function (_Component) {
  Project__inherits(_default, _Component);

  function _default() {
    Project__classCallCheck(this, _default);

    return Project__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Project__createClass(_default, [{
    key: "renderJobs",
    value: function renderJobs(jobList) {
      var _props = this.props,
          toggleEditJob = _props.toggleEditJob,
          edit = _props.edit,
          toggleJobDetail = _props.toggleJobDetail,
          detail = _props.detail;
      return jobList && jobList.length > 0 ? jobList.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          className: "job__item",
          key: index
        }, external__react__default.a.createElement("div", {
          onClick: function onClick() {
            return toggleJobDetail({
              jobDetail: _objectSpread({}, item, {
                postedUserData: detail.owner,
                projectData: detail
              })
            });
          },
          className: "job__item__left"
        }, external__react__default.a.createElement("div", {
          className: "job__item__image"
        }, external__react__default.a.createElement("img", {
          src: jobIcon,
          alt: "job"
        })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
          className: "Button-Black-Left title"
        }, item.title), external__react__default.a.createElement("div", {
          className: "Caption-Grey-Left"
        }, external__moment__default.a.unix(item.updatedAt).format("MMM DD, YYYY")))), edit && external__react__default.a.createElement("div", {
          className: "job__item__right"
        }, external__react__default.a.createElement("img", {
          onClick: function onClick() {
            return toggleEditJob(_objectSpread({}, item, {
              postedUserData: detail.owner,
              projectData: detail
            }));
          },
          src: editIcon,
          alt: "edit"
        })));
      }) : external__react__default.a.createElement("div", {
        className: "no-data Body-Dark-Grey-Center"
      }, "There are no jobs yet");
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          jobList = _props2.jobList,
          detail = _props2.detail,
          edit = _props2.edit,
          togglePreviewImage = _props2.togglePreviewImage,
          togglePostJob = _props2.togglePostJob,
          toggleCollaborator = _props2.toggleCollaborator,
          toggleJobDetail = _props2.toggleJobDetail;
      return external__react__default.a.createElement("div", {
        className: "project"
      }, external__react__default.a.createElement("div", {
        className: "project__container"
      }, external__react__default.a.createElement("div", {
        className: "project-detail"
      }, external__react__default.a.createElement("section", {
        className: " cover"
      }, external__react__default.a.createElement(ImageProject__default, {
        image: detail.coverURL
      })), external__react__default.a.createElement("section", {
        className: "detail"
      }, external__react__default.a.createElement("div", {
        className: "detail__header "
      }, external__react__default.a.createElement("div", {
        className: "H1-Black-Left"
      }, "  ", detail.name), edit ? external__react__default.a.createElement("div", {
        className: "button-group"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        to: detail._id + "/edit"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, {
        icon: "edit",
        className: "Button-Dark-Grey-Left"
      }, "Edit Project")))) : external__react__default.a.createElement("div", {
        className: "button-group"
      }, external__react__default.a.createElement("a", {
        href: "mailto:".concat(detail.owner.email)
      }, external__react__default.a.createElement(button__default.a, {
        icon: "mail",
        type: "primary",
        className: "email__button Button-White-Left"
      }, "Contact ".concat(detail.owner.firstName))))), external__react__default.a.createElement("div", {
        className: "detail__body"
      }, external__react__default.a.createElement("div", {
        className: "detail__body__left"
      }, external__react__default.a.createElement("div", {
        className: "desc Body-Dark-Grey-Left"
      }, detail.description), external__react__default.a.createElement("section", {
        className: "paddingTop40"
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Left"
      }, "Updates"), external__react__default.a.createElement(Update__default, this.props))), external__react__default.a.createElement("div", {
        className: "detail__body__right"
      }, external__react__default.a.createElement("section", {
        className: "right__section"
      }, external__react__default.a.createElement("div", {
        className: "section__header"
      }, external__react__default.a.createElement("div", {
        className: "title H3-Black-Left"
      }, "Collaborators"), external__react__default.a.createElement("a", {
        onClick: toggleCollaborator,
        className: "action Body-Dark-Grey-Center"
      }, "".concat(detail.shares.length + 1, "  members"))), external__react__default.a.createElement("div", {
        className: "section__body"
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: detail.owner.pictureURL
      }), detail.shares.map(function (item, index) {
        return external__react__default.a.createElement(routes["Link"], {
          prefetch: true,
          to: '/user/' + item._id,
          key: index
        }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(Image["a" /* default */], {
          image: item.pictureURL
        })));
      }))), external__react__default.a.createElement("section", {
        className: "right__section"
      }, external__react__default.a.createElement("div", {
        className: "section__header"
      }, external__react__default.a.createElement("div", {
        className: "title H3-Black-Left"
      }, "Media")), external__react__default.a.createElement("div", {
        className: "section__body",
        style: {
          justifyContent: "space-between"
        }
      }, detail.media && detail.media.length > 0 ? detail.media.map(function (item, index) {
        return external__react__default.a.createElement("img", {
          className: "media__img",
          key: index,
          src: item,
          onClick: function onClick() {
            return togglePreviewImage(item);
          }
        });
      }) : external__react__default.a.createElement("div", {
        className: "no-data Body-Dark-Grey-Center"
      }, "There are no images yet"))), external__react__default.a.createElement("section", {
        className: "right__section"
      }, external__react__default.a.createElement("div", {
        className: "section__header"
      }, external__react__default.a.createElement("div", {
        className: "title H3-Black-Left"
      }, "Job Postings"), edit && external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return togglePostJob();
        },
        className: "title Button-Yellow-Left"
      }, external__react__default.a.createElement(icon__default.a, {
        type: "plus"
      }), "".concat(" "), "Add Job")), external__react__default.a.createElement("div", {
        className: "section__body",
        style: {
          flexDirection: "column"
        }
      }, this.renderJobs(jobList))), external__react__default.a.createElement("section", {
        className: "right__section"
      }, external__react__default.a.createElement("div", {
        className: "section__header"
      }, external__react__default.a.createElement("div", {
        className: "title H3-Black-Left"
      }, "Links")), external__react__default.a.createElement("div", {
        className: "section__body",
        style: {
          justifyContent: "space-between"
        }
      }, detail.links.length > 0 ? detail.links.map(function (item, index) {
        return external__react__default.a.createElement(button__default.a, {
          onClick: function onClick() {
            window.open(item.includes("http") ? item : "http://" + item);
          },
          key: index,
          className: "link-button"
        }, item);
      }) : external__react__default.a.createElement("div", {
        className: "no-data Body-Dark-Grey-Center"
      }, "There are no links yet")))))))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// EXTERNAL MODULE: ./src/actions/toggle.js
var toggle = __webpack_require__(20);

// EXTERNAL MODULE: ./src/actions/job.js
var job = __webpack_require__(58);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(10);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./src/components/common/previewImage/_previewImage.less
var _previewImage = __webpack_require__(140);
var _previewImage_default = /*#__PURE__*/__webpack_require__.n(_previewImage);

// CONCATENATED MODULE: ./src/components/common/previewImage/PreviewImage.js


function PreviewImage__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PreviewImage__typeof = function _typeof(obj) { return typeof obj; }; } else { PreviewImage__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PreviewImage__typeof(obj); }

function PreviewImage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PreviewImage__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PreviewImage__createClass(Constructor, protoProps, staticProps) { if (protoProps) PreviewImage__defineProperties(Constructor.prototype, protoProps); if (staticProps) PreviewImage__defineProperties(Constructor, staticProps); return Constructor; }

function PreviewImage__possibleConstructorReturn(self, call) { if (call && (PreviewImage__typeof(call) === "object" || typeof call === "function")) { return call; } return PreviewImage__assertThisInitialized(self); }

function PreviewImage__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PreviewImage__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PreviewImage__default =
/*#__PURE__*/
function (_Component) {
  PreviewImage__inherits(_default, _Component);

  function _default() {
    PreviewImage__classCallCheck(this, _default);

    return PreviewImage__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  PreviewImage__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          previewImage = _props.previewImage,
          visiblePreview = _props.visiblePreview,
          togglePreviewImage = _props.togglePreviewImage;
      return external__react__default.a.createElement("div", {
        className: "view-image-container"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _previewImage_default.a
        }
      }), external__react__default.a.createElement(modal__default.a, {
        wrapClassName: "image-preview__modal",
        visible: visiblePreview,
        footer: null,
        onCancel: togglePreviewImage
      }, external__react__default.a.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: previewImage
      })));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(5);
var form__default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(25);
var select__default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./src/components/common/majorTag/MajorTagContainer.js + 1 modules
var MajorTagContainer = __webpack_require__(37);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/postJob/PostJobModal.js






function PostJobModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PostJobModal__typeof = function _typeof(obj) { return typeof obj; }; } else { PostJobModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PostJobModal__typeof(obj); }

function PostJobModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PostJobModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PostJobModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) PostJobModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) PostJobModal__defineProperties(Constructor, staticProps); return Constructor; }

function PostJobModal__possibleConstructorReturn(self, call) { if (call && (PostJobModal__typeof(call) === "object" || typeof call === "function")) { return call; } return PostJobModal__assertThisInitialized(self); }

function PostJobModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PostJobModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PostJobModal_TextArea = input__default.a.TextArea;
var FormItem = form__default.a.Item;
var Option = select__default.a.Option;

var PostJobModal_PostJobModal =
/*#__PURE__*/
function (_React$Component) {
  PostJobModal__inherits(PostJobModal, _React$Component);

  function PostJobModal() {
    PostJobModal__classCallCheck(this, PostJobModal);

    return PostJobModal__possibleConstructorReturn(this, (PostJobModal.__proto__ || Object.getPrototypeOf(PostJobModal)).apply(this, arguments));
  }

  PostJobModal__createClass(PostJobModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          onTagSkillChange = _props.onTagSkillChange,
          handlePostJob = _props.handlePostJob,
          visiblePostJob = _props.visiblePostJob,
          status = _props.status,
          listData = _props.listData,
          skills = _props.skills,
          togglePostJob = _props.togglePostJob;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(modal__default.a, {
        visible: visiblePostJob,
        title: "",
        footer: null,
        onCancel: togglePostJob,
        className: "modal-body",
        wrapClassName: "ant-modal-sign-in"
      }, external__react__default.a.createElement("div", {
        className: "post-job"
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Center"
      }, "Post a job"), external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Center desc"
      }, "Get some support for your project! What kind of help are you looking for?"), external__react__default.a.createElement("div", {
        className: "form"
      }, external__react__default.a.createElement(form__default.a, {
        onSubmit: handlePostJob
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, "Job Title"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('title', {
        rules: [{
          required: true,
          message: 'Please enter job title!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        className: "Body2RegularBlack80Left",
        placeholder: "Title"
      })))), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, "Time Commitment"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('expectedTime', {
        rules: [{
          required: true,
          message: 'Please enter job title!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        className: "Body2RegularBlack80Left",
        showSearch: true,
        placeholder: "Expected Time",
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, constants["c" /* commitment */].map(function (item, index) {
        return external__react__default.a.createElement(Option, {
          key: index,
          value: item
        }, item);
      }))))), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Job Description"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Please enter job description!'
        }]
      })(external__react__default.a.createElement(PostJobModal_TextArea, {
        className: "Body2RegularBlack80Left",
        placeholder: "Description"
      })))), external__react__default.a.createElement("div", null, "Job Skill"), external__react__default.a.createElement("div", {
        className: "skill-job marginBottom24"
      }, listData && external__react__default.a.createElement(MajorTagContainer["a" /* default */], {
        listData: listData.skillData,
        value: skills,
        text: "Add your strength of skills...",
        onMajorChange: onTagSkillChange,
        color: "#006cd9"
      })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, "Incentive"), external__react__default.a.createElement(FormItem, null, getFieldDecorator('incentive', {
        rules: [{
          required: true,
          message: 'Please select incentive!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        mode: "multiple",
        className: "Body2RegularBlack80Left",
        showSearch: true,
        placeholder: "incentive",
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, constants["d" /* incentive */].map(function (item, index) {
        return external__react__default.a.createElement(Option, {
          key: index,
          value: item
        }, item);
      }))))), external__react__default.a.createElement("div", {
        className: "button-post"
      }, external__react__default.a.createElement(button__default.a, {
        loading: status === "running",
        type: "primary",
        htmlType: "submit",
        className: "Button-White-Center"
      }, "POST JOB ")))))));
    }
  }]);

  return PostJobModal;
}(external__react__default.a.Component);

/* harmony default export */ var postJob_PostJobModal = (PostJobModal_PostJobModal);
// EXTERNAL MODULE: ./src/components/postJob/_postJob.less
var _postJob = __webpack_require__(141);
var _postJob_default = /*#__PURE__*/__webpack_require__.n(_postJob);

// CONCATENATED MODULE: ./src/components/postJob/PostJobModalContainer.js


function PostJobModalContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PostJobModalContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { PostJobModalContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PostJobModalContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PostJobModalContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PostJobModalContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PostJobModalContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) PostJobModalContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) PostJobModalContainer__defineProperties(Constructor, staticProps); return Constructor; }

function PostJobModalContainer__possibleConstructorReturn(self, call) { if (call && (PostJobModalContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return PostJobModalContainer__assertThisInitialized(self); }

function PostJobModalContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function PostJobModalContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var PostJobModalContainer_PostJobModalContainer =
/*#__PURE__*/
function (_Component) {
  PostJobModalContainer__inherits(PostJobModalContainer, _Component);

  function PostJobModalContainer(props) {
    var _this;

    PostJobModalContainer__classCallCheck(this, PostJobModalContainer);

    _this = PostJobModalContainer__possibleConstructorReturn(this, (PostJobModalContainer.__proto__ || Object.getPrototypeOf(PostJobModalContainer)).call(this, props));
    Object.defineProperty(PostJobModalContainer__assertThisInitialized(_this), "onTagSkillChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(skills) {
        _this.setState({
          skills: skills
        });
      }
    });
    _this.state = {
      skills: []
    };
    return _this;
  }

  PostJobModalContainer__createClass(PostJobModalContainer, [{
    key: "handlePostJob",
    value: function handlePostJob(e) {
      var _this2 = this;

      var detail = this.props.detail;
      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this2.props.postJob({
            title: values.title,
            description: values.description,
            projectID: detail._id,
            tags: _this2.state.skills,
            incentive: values.incentive,
            expectedTime: values.expectedTime
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _postJob_default.a
        }
      }), external__react__default.a.createElement(postJob_PostJobModal, _extends({}, this.state, this.props, {
        onTagSkillChange: this.onTagSkillChange,
        handlePostJob: function handlePostJob(e) {
          return _this3.handlePostJob(e);
        }
      })));
    }
  }]);

  return PostJobModalContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    visiblePostJob: state.toggle.visiblePostJob,
    status: state.job.status,
    errorMessage: state.user.errorMessage,
    detail: state.project.detail,
    listData: state.project.listData
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    togglePostJob: toggle["togglePostJob"],
    postJob: job["postJob"]
  }, dispatch);
}
PostJobModalContainer_PostJobModalContainer = form__default.a.create()(PostJobModalContainer_PostJobModalContainer);
/* harmony default export */ var postJob_PostJobModalContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(PostJobModalContainer_PostJobModalContainer));
// CONCATENATED MODULE: ./src/components/editJob/EditJobModal.js






function EditJobModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditJobModal__typeof = function _typeof(obj) { return typeof obj; }; } else { EditJobModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditJobModal__typeof(obj); }

function EditJobModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditJobModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditJobModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditJobModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditJobModal__defineProperties(Constructor, staticProps); return Constructor; }

function EditJobModal__possibleConstructorReturn(self, call) { if (call && (EditJobModal__typeof(call) === "object" || typeof call === "function")) { return call; } return EditJobModal__assertThisInitialized(self); }

function EditJobModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditJobModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var EditJobModal_TextArea = input__default.a.TextArea;
var EditJobModal_FormItem = form__default.a.Item;
var EditJobModal_Option = select__default.a.Option;

var EditJobModal_EditJobModal =
/*#__PURE__*/
function (_React$Component) {
  EditJobModal__inherits(EditJobModal, _React$Component);

  function EditJobModal() {
    EditJobModal__classCallCheck(this, EditJobModal);

    return EditJobModal__possibleConstructorReturn(this, (EditJobModal.__proto__ || Object.getPrototypeOf(EditJobModal)).apply(this, arguments));
  }

  EditJobModal__createClass(EditJobModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          onTagSkillChange = _props.onTagSkillChange,
          handleEditJob = _props.handleEditJob,
          visibleEditJob = _props.visibleEditJob,
          status = _props.status,
          listData = _props.listData,
          skills = _props.skills,
          toggleEditJob = _props.toggleEditJob,
          toggleRemoveJob = _props.toggleRemoveJob,
          jobDetail = _props.jobDetail;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(modal__default.a, {
        visible: visibleEditJob,
        title: "",
        footer: null,
        onCancel: function onCancel() {
          return toggleEditJob(jobDetail);
        },
        className: "modal-body",
        wrapClassName: "ant-modal-sign-in"
      }, external__react__default.a.createElement("div", {
        className: "edit-job"
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Center"
      }, "Edit a job"), external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Center desc"
      }, "Get some support for your project! What kind of help are you looking for?"), external__react__default.a.createElement("div", {
        className: "form"
      }, external__react__default.a.createElement(form__default.a, {
        onSubmit: handleEditJob
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, "Job Title"), external__react__default.a.createElement(EditJobModal_FormItem, null, getFieldDecorator('title', {
        rules: [{
          required: true,
          message: 'Please enter job title!'
        }]
      })(external__react__default.a.createElement(input__default.a, {
        className: "Body2RegularBlack80Left",
        placeholder: "Title"
      })))), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, "Time Commitment"), external__react__default.a.createElement(EditJobModal_FormItem, null, getFieldDecorator('expectedTime', {
        rules: [{
          required: true,
          message: 'Please enter job title!'
        }]
      })(external__react__default.a.createElement(select__default.a, {
        className: "Body2RegularBlack80Left",
        showSearch: true,
        placeholder: "Expected Time",
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, constants["c" /* commitment */].map(function (item, index) {
        return external__react__default.a.createElement(EditJobModal_Option, {
          key: index,
          value: item
        }, item);
      }))))), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Job Description"), external__react__default.a.createElement(EditJobModal_FormItem, null, getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Please enter job description!'
        }]
      })(external__react__default.a.createElement(EditJobModal_TextArea, {
        className: "Body2RegularBlack80Left",
        placeholder: "Description"
      })))), external__react__default.a.createElement("div", null, "Job Skill"), external__react__default.a.createElement("div", {
        className: "skill-job marginBottom24"
      }, listData && external__react__default.a.createElement(MajorTagContainer["a" /* default */], {
        listData: listData.skillData,
        value: skills,
        text: "Add your strength of skills...",
        onMajorChange: onTagSkillChange,
        color: "#006cd9"
      })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, "Incentive"), external__react__default.a.createElement(EditJobModal_FormItem, null, getFieldDecorator('incentive', {
        rules: [{
          message: 'Please enter incentive!',
          type: 'array',
          required: true
        }]
      })(external__react__default.a.createElement(select__default.a, {
        mode: "multiple",
        className: "Body2RegularBlack80Left",
        showSearch: true,
        placeholder: "incentive",
        optionFilterProp: "children",
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, constants["d" /* incentive */].map(function (item, index) {
        return external__react__default.a.createElement(EditJobModal_Option, {
          key: index,
          value: item
        }, item);
      }))))), external__react__default.a.createElement("div", {
        className: "button-edit"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          return toggleRemoveJob();
        },
        loading: status === "running",
        type: "danger",
        className: "Button-White-Center"
      }, "DELETE"), external__react__default.a.createElement(button__default.a, {
        loading: status === "running",
        type: "primary",
        htmlType: "submit",
        className: "Button-White-Center"
      }, "SAVE")))))));
    }
  }]);

  return EditJobModal;
}(external__react__default.a.Component);

/* harmony default export */ var editJob_EditJobModal = (EditJobModal_EditJobModal);
// EXTERNAL MODULE: ./src/components/editJob/_editJob.less
var _editJob = __webpack_require__(142);
var _editJob_default = /*#__PURE__*/__webpack_require__.n(_editJob);

// CONCATENATED MODULE: ./src/components/editJob/EditJobModalContainer.js


function EditJobModalContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditJobModalContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { EditJobModalContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditJobModalContainer__typeof(obj); }

function EditJobModalContainer__extends() { EditJobModalContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EditJobModalContainer__extends.apply(this, arguments); }

function EditJobModalContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditJobModalContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditJobModalContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditJobModalContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditJobModalContainer__defineProperties(Constructor, staticProps); return Constructor; }

function EditJobModalContainer__possibleConstructorReturn(self, call) { if (call && (EditJobModalContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return EditJobModalContainer__assertThisInitialized(self); }

function EditJobModalContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditJobModalContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var EditJobModalContainer_EditJobModalContainer =
/*#__PURE__*/
function (_Component) {
  EditJobModalContainer__inherits(EditJobModalContainer, _Component);

  function EditJobModalContainer(props) {
    var _this;

    EditJobModalContainer__classCallCheck(this, EditJobModalContainer);

    _this = EditJobModalContainer__possibleConstructorReturn(this, (EditJobModalContainer.__proto__ || Object.getPrototypeOf(EditJobModalContainer)).call(this, props));
    Object.defineProperty(EditJobModalContainer__assertThisInitialized(_this), "onTagSkillChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(skills) {
        _this.setState({
          skills: skills
        });
      }
    });
    _this.state = {
      skills: []
    };
    return _this;
  }

  EditJobModalContainer__createClass(EditJobModalContainer, [{
    key: "handleEditJob",
    value: function handleEditJob(e) {
      var _this2 = this;

      var jobDetail = this.props.jobDetail;
      e.preventDefault();
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this2.props.updateJob({
            title: values.title,
            description: values.description,
            jobID: jobDetail._id,
            tags: _this2.state.skills,
            incentive: values.incentive,
            expectedTime: values.expectedTime
          });
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var form = this.props.form;
      var jobDetail = nextProps.jobDetail;

      if (jobDetail && jobDetail !== this.props.jobDetail) {
        form.setFieldsValue({
          title: jobDetail.title,
          description: jobDetail.description,
          projectID: jobDetail._id,
          tags: jobDetail.tags,
          incentive: jobDetail.incentive,
          expectedTime: jobDetail.expectedTime
        });
        this.setState({
          skills: jobDetail.tags
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _editJob_default.a
        }
      }), external__react__default.a.createElement(editJob_EditJobModal, EditJobModalContainer__extends({}, this.state, this.props, {
        onTagSkillChange: this.onTagSkillChange,
        handleEditJob: function handleEditJob(e) {
          return _this3.handleEditJob(e);
        }
      })));
    }
  }]);

  return EditJobModalContainer;
}(external__react_["Component"]);

function EditJobModalContainer_mapStateToProps(state) {
  return {
    visibleEditJob: state.toggle.visibleEditJob,
    status: state.job.status,
    errorMessage: state.user.errorMessage,
    detail: state.project.detail,
    listData: state.project.listData,
    jobDetail: state.toggle.jobDetail
  };
}
function EditJobModalContainer_mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({
    toggleRemoveJob: toggle["toggleRemoveJob"],
    toggleEditJob: toggle["toggleEditJob"],
    updateJob: job["updateJob"],
    deleteJob: job["deleteJob"]
  }, dispatch);
}
EditJobModalContainer_EditJobModalContainer = form__default.a.create()(EditJobModalContainer_EditJobModalContainer);
/* harmony default export */ var editJob_EditJobModalContainer = (Object(external__react_redux_["connect"])(EditJobModalContainer_mapStateToProps, EditJobModalContainer_mapDispatchToProps)(EditJobModalContainer_EditJobModalContainer));
// EXTERNAL MODULE: ./src/components/common/loading/Loading.js
var Loading = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/project/_collaborator.less
var _collaborator = __webpack_require__(143);
var _collaborator_default = /*#__PURE__*/__webpack_require__.n(_collaborator);

// CONCATENATED MODULE: ./src/components/project/CollaboratorModal.js


function CollaboratorModal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CollaboratorModal__typeof = function _typeof(obj) { return typeof obj; }; } else { CollaboratorModal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CollaboratorModal__typeof(obj); }

function CollaboratorModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CollaboratorModal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CollaboratorModal__createClass(Constructor, protoProps, staticProps) { if (protoProps) CollaboratorModal__defineProperties(Constructor.prototype, protoProps); if (staticProps) CollaboratorModal__defineProperties(Constructor, staticProps); return Constructor; }

function CollaboratorModal__possibleConstructorReturn(self, call) { if (call && (CollaboratorModal__typeof(call) === "object" || typeof call === "function")) { return call; } return CollaboratorModal__assertThisInitialized(self); }

function CollaboratorModal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CollaboratorModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CollaboratorModal__default =
/*#__PURE__*/
function (_Component) {
  CollaboratorModal__inherits(_default, _Component);

  function _default() {
    CollaboratorModal__classCallCheck(this, _default);

    return CollaboratorModal__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  CollaboratorModal__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          visibleCollaborator = _props.visibleCollaborator,
          toggleCollaborator = _props.toggleCollaborator,
          collaboratorData = _props.collaboratorData;
      return external__react__default.a.createElement(modal__default.a, {
        title: "",
        visible: visibleCollaborator,
        onOk: toggleCollaborator,
        onCancel: toggleCollaborator,
        footer: null
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _collaborator_default.a
        }
      }), collaboratorData && external__react__default.a.createElement("div", {
        className: "collaborator"
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Left"
      }, "Collaborators"), external__react__default.a.createElement("div", {
        className: "collaborator__list"
      }, collaboratorData.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: "collaborator__item"
        }, external__react__default.a.createElement("div", {
          className: "collaborator__item__info"
        }, external__react__default.a.createElement(Image["a" /* default */], {
          image: item.pictureURL
        }), external__react__default.a.createElement("div", {
          className: "info"
        }, external__react__default.a.createElement("div", {
          className: "Body-Black-Left"
        }, "    ", item.firstName + " " + item.lastName), external__react__default.a.createElement("div", {
          className: "Caption-Grey-Left"
        }, item.email))), external__react__default.a.createElement("div", {
          className: "collaborator__item__role Body-Black-Left"
        }, item.role ? item.role : "Owner"));
      }))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/project/_jobRemove.less
var _jobRemove = __webpack_require__(144);
var _jobRemove_default = /*#__PURE__*/__webpack_require__.n(_jobRemove);

// CONCATENATED MODULE: ./src/components/project/JobRemove.js




function JobRemove__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { JobRemove__typeof = function _typeof(obj) { return typeof obj; }; } else { JobRemove__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return JobRemove__typeof(obj); }

function JobRemove__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function JobRemove__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function JobRemove__createClass(Constructor, protoProps, staticProps) { if (protoProps) JobRemove__defineProperties(Constructor.prototype, protoProps); if (staticProps) JobRemove__defineProperties(Constructor, staticProps); return Constructor; }

function JobRemove__possibleConstructorReturn(self, call) { if (call && (JobRemove__typeof(call) === "object" || typeof call === "function")) { return call; } return JobRemove__assertThisInitialized(self); }

function JobRemove__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function JobRemove__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var JobRemove_FormItem = form__default.a.Item;

var JobRemove__default =
/*#__PURE__*/
function (_Component) {
  JobRemove__inherits(_default, _Component);

  function _default() {
    JobRemove__classCallCheck(this, _default);

    return JobRemove__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  JobRemove__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          visibleRemoveJob = _props.visibleRemoveJob,
          toggleRemoveJob = _props.toggleRemoveJob,
          jobDetail = _props.jobDetail,
          handleRemoveJob = _props.handleRemoveJob,
          statusJob = _props.statusJob;
      return external__react__default.a.createElement(modal__default.a, {
        title: "",
        visible: visibleRemoveJob,
        onOk: toggleRemoveJob,
        onCancel: toggleRemoveJob,
        footer: null
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _jobRemove_default.a
        }
      }), jobDetail && external__react__default.a.createElement("div", {
        className: "job__remove "
      }, external__react__default.a.createElement("div", {
        className: "H3-Black-Left marginTop24"
      }, "Are you sure to remove this job", external__react__default.a.createElement("span", {
        className: "job__name"
      }, " "), "  from this project ?"), external__react__default.a.createElement("div", {
        className: "remove-button__group marginTop32"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: function onClick() {
          return toggleRemoveJob();
        },
        className: "cancel"
      }, "Cancel"), external__react__default.a.createElement(button__default.a, {
        loading: statusJob === "running",
        onClick: handleRemoveJob,
        className: "remove"
      }, "Remove"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/jobDetail/JobDetail.js
var JobDetail = __webpack_require__(75);

// EXTERNAL MODULE: ./src/components/project/_project.less
var _project = __webpack_require__(145);
var _project_default = /*#__PURE__*/__webpack_require__.n(_project);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(31);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// EXTERNAL MODULE: ./src/sagas/job.js
var sagas_job = __webpack_require__(65);

// CONCATENATED MODULE: ./src/components/project/ProjectContainer.js


function ProjectContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ProjectContainer__defineProperty(target, key, source[key]); }); } return target; }

function ProjectContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProjectContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectContainer__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function ProjectContainer__extends() { ProjectContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ProjectContainer__extends.apply(this, arguments); }

function ProjectContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectContainer__defineProperties(Constructor, staticProps); return Constructor; }

function ProjectContainer__possibleConstructorReturn(self, call) { if (call && (ProjectContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectContainer__assertThisInitialized(self); }

function ProjectContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ProjectContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





















var ProjectContainer_ProjectContainer =
/*#__PURE__*/
function (_Component) {
  ProjectContainer__inherits(ProjectContainer, _Component);

  function ProjectContainer(props) {
    var _this;

    ProjectContainer__classCallCheck(this, ProjectContainer);

    _this = ProjectContainer__possibleConstructorReturn(this, (ProjectContainer.__proto__ || Object.getPrototypeOf(ProjectContainer)).call(this, props));
    Object.defineProperty(ProjectContainer__assertThisInitialized(_this), "onUpdateChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          updateContent: e.target.value
        });
      }
    });
    Object.defineProperty(ProjectContainer__assertThisInitialized(_this), "handlePostUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props = _this.props,
            postProjectUpdate = _this$props.postProjectUpdate,
            detail = _this$props.detail;

        _this.setState({
          updateContent: ""
        });

        postProjectUpdate({
          "projectID": detail._id,
          "content": _this.state.updateContent
        });
      }
    });
    Object.defineProperty(ProjectContainer__assertThisInitialized(_this), "handleRemoveJob", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var deleteJob = _this.props.deleteJob;
        deleteJob({});
      }
    });
    Object.defineProperty(ProjectContainer__assertThisInitialized(_this), "handleRemoveJob", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props2 = _this.props,
            deleteJob = _this$props2.deleteJob,
            jobDetail = _this$props2.jobDetail;
        deleteJob({
          jobID: jobDetail._id
        });
      }
    });
    _this.state = {
      detail: null,
      updateContent: '',
      editUpdateContent: ''
    };
    return _this;
  }

  ProjectContainer__createClass(ProjectContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          getDetail = _props.getDetail,
          listJob = _props.listJob;
      getDetail(routes["Router"].query.id);
      listJob({
        id: routes["Router"].query.id,
        type: "project"
      });
    }
  }, {
    key: "isUserProject",
    value: function isUserProject() {
      var _props2 = this.props,
          userData = _props2.userData,
          detail = _props2.detail;

      if (detail.owner.email === userData.email) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props3 = this.props,
          jobDetail = _props3.jobDetail,
          userData = _props3.userData,
          detail = _props3.detail,
          previewImage = _props3.previewImage,
          togglePreviewImage = _props3.togglePreviewImage,
          visiblePreview = _props3.visiblePreview;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _project_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Comigo"
      }), external__react__default.a.createElement(PreviewImage__default, {
        visiblePreview: visiblePreview,
        previewImage: previewImage,
        togglePreviewImage: togglePreviewImage
      }), external__react__default.a.createElement(editJob_EditJobModalContainer, null), external__react__default.a.createElement(postJob_PostJobModalContainer, null), jobDetail && external__react__default.a.createElement(JobDetail["a" /* default */], ProjectContainer__extends({
        user: userData
      }, this.props)), external__react__default.a.createElement(JobRemove__default, ProjectContainer__extends({
        handleRemoveJob: this.handleRemoveJob
      }, this.props)), userData && detail ? external__react__default.a.createElement("div", null, external__react__default.a.createElement(Project__default, ProjectContainer__extends({}, this.state, this.props, {
        edit: this.isUserProject(),
        onUpdateChange: this.onUpdateChange,
        handlePostUpdate: this.handlePostUpdate,
        handleRemoveJob: this.handleRemoveJob
      })), external__react__default.a.createElement(CollaboratorModal__default, ProjectContainer__extends({
        collaboratorData: external__lodash__default.a.concat([detail.owner], detail.shares)
      }, this.props))) : external__react__default.a.createElement(Loading["a" /* default */], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var query;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;

                if (!(query && query.detail)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", {
                  detail: query.detail
                });

              case 3:
                return _context.abrupt("return", {});

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return ProjectContainer;
}(external__react_["Component"]);

function ProjectContainer_mapStateToProps(state) {
  return {
    visibleCollaborator: state.toggle.visibleCollaborator,
    visibleEditUpdate: state.toggle.visibleEditUpdate,
    userData: state.user.data,
    detail: state.project.detail,
    visiblePreview: state.toggle.visiblePreview,
    visiblePostJob: state.toggle.visiblePostJob,
    previewImage: state.toggle.previewImage,
    visibleJobDetail: state.toggle.visibleJobDetail,
    status: state.project.status,
    statusJob: state.job.status,
    jobList: state.job.jobListProject,
    jobDetail: state.toggle.jobDetail,
    visibleRemoveJob: state.toggle.visibleRemoveJob,
    visibleEditJob: state.toggle.visibleEditJob,
    jobProjectDetail: state.toggle.jobProjectDetail
  };
}
function ProjectContainer_mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(ProjectContainer__objectSpread({}, project, toggle, job), dispatch);
}
/* harmony default export */ var project_ProjectContainer = (Object(external__react_redux_["connect"])(ProjectContainer_mapStateToProps, ProjectContainer_mapDispatchToProps)(ProjectContainer_ProjectContainer));
// CONCATENATED MODULE: ./pages/project.js

/* harmony default export */ var pages_project = __webpack_exports__["default"] = (project_ProjectContainer);

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = ".image-preview__modal .ant-modal-body {\n  padding: 0 !important;\n}\n";

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = ".post-job {\n  width: 410px;\n  margin: 0 auto;\n}\n.post-job .desc {\n  padding-top: 4px;\n  max-width: 325px;\n  margin: 0 auto;\n}\n.post-job .skill-job {\n  border: solid 1px #c3ced9 !important;\n  border-radius: 4px;\n}\n.post-job .form {\n  padding-top: 22px;\n}\n.post-job .form .ant-select-search--inline .ant-select-search__field {\n  border: 0 !important;\n}\n.post-job .form .button-post {\n  padding-top: 28px;\n}\n.post-job .form .button-post button {\n  width: 100%;\n  height: 44px;\n  border-radius: 24px;\n}\n.ant-modal-sign-in .ant-modal {\n  top: 10px;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-content {\n  border-radius: 0;\n  box-shadow: none;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-body {\n  background: #fff;\n  padding-top: 80px;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-body .ant-input {\n  height: 44px;\n  border-radius: 4px;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-body textarea {\n  min-height: 200px !important;\n}\n@media (max-width: 767px) {\n  .ant-modal-sign-in .ant-modal {\n    margin: 0;\n  }\n}\n";

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = ".edit-job {\n  width: 410px;\n  margin: 0 auto;\n}\n.edit-job .desc {\n  padding-top: 4px;\n  max-width: 325px;\n  margin: 0 auto;\n}\n.edit-job .skill-job {\n  border: solid 1px #c3ced9 !important;\n  border-radius: 4px;\n}\n.edit-job .form {\n  padding-top: 22px;\n}\n.edit-job .form .ant-select-search--inline .ant-select-search__field {\n  border: 0 !important;\n}\n.edit-job .form .button-edit {\n  padding-top: 28px;\n  display: flex;\n  justify-content: space-between;\n}\n.edit-job .form .button-edit button {\n  width: 120px;\n  height: 40px;\n  border-radius: 24px;\n}\n.ant-modal-sign-in .ant-modal {\n  transform-origin: 1341px 47px 0px;\n  top: 0;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-content {\n  border-radius: 0;\n  box-shadow: none;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-body {\n  background: #fff;\n  padding-top: 80px;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-body .ant-input {\n  height: 44px;\n  border-radius: 4px;\n}\n.ant-modal-sign-in .ant-modal .ant-modal-body textarea {\n  min-height: 200px !important;\n}\n@media (max-width: 767px) {\n  .ant-modal-sign-in .ant-modal {\n    margin: 0;\n  }\n}\n";

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = ".collaborator {\n  padding: 40px ;\n}\n.collaborator__list {\n  margin-top: 30px;\n}\n.collaborator__item {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n.collaborator__item__info {\n  display: flex;\n}\n.collaborator__item__info img {\n  margin-right: 10px;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: contain;\n}\n.collaborator__item__info .info {\n  min-width: 136px;\n}\n";

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = ".job__remove {\n  text-align: center;\n}\n.job__remove .H3-Black-Left {\n  text-align: center;\n}\n.job__remove .remove-button__group button {\n  width: 120px;\n  height: 48px;\n  color: #fff;\n  border-radius: 24px;\n}\n.job__remove .remove-button__group .cancel {\n  background: #a1aab3;\n  margin-right: 16px;\n}\n.job__remove .remove-button__group .remove {\n  background: #ff604c;\n}\n";

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = ".project__container {\n  width: 920px;\n  margin: 0 auto;\n  padding-top: 60px;\n}\n.project__container .project-detail .cover {\n  padding-bottom: 44px;\n}\n.project__container .project-detail .cover img {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}\n.project__container .project-detail .detail__header {\n  padding-bottom: 60px;\n  display: flex;\n  justify-content: space-between;\n}\n.project__container .project-detail .detail__header .button-group button {\n  margin-left: 12px;\n  height: 44px;\n  border-radius: 24px;\n}\n.project__container .project-detail .detail__body {\n  display: flex;\n  justify-content: space-between;\n}\n.project__container .project-detail .detail__body__left {\n  width: 565px;\n}\n.project__container .project-detail .detail__body__left .desc {\n  padding-bottom: 60px;\n  box-shadow: inset 0 -1px 0 0 #e6e8eb;\n}\n.project__container .project-detail .detail__body__right {\n  width: 255px;\n}\n.project__container .project-detail .detail__body__right .right__section {\n  padding-bottom: 60px;\n}\n.project__container .project-detail .detail__body__right .right__section .section__header {\n  display: flex;\n  justify-content: space-between;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body {\n  padding-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .link-button {\n  border: solid 1px var(--macaroni-and-cheese);\n  background: #fff;\n  color: #a1aab3;\n  padding: 6px 8px;\n  border-radius: 24px;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body img {\n  cursor: pointer;\n  margin-right: 8px;\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .media__img {\n  cursor: pointer;\n  margin-right: 0;\n  border-radius: 4px;\n  width: 83px;\n  height: 83px;\n  object-fit: cover;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body button {\n  margin-bottom: 8px;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item {\n  cursor: pointer;\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item .title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 170px;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item:last-child {\n  padding-bottom: 0;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item__left {\n  display: flex;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item__right img {\n  width: 20px;\n  height: 20px;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item__image {\n  margin-right: 10px;\n  display: flex;\n  flex-direction: column;\n  background: #e5e5e5;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .job__item__image img {\n  width: 20px;\n  height: 20px;\n  margin: 0 !important;\n}\n.project__container .project-detail .detail__body__right .right__section .section__body .no-data {\n  width: 100%;\n  padding: 30px;\n  padding-bottom: 0;\n}\n.sub-card-container .ant-card .ant-card-body {\n  padding: 24px !important;\n}\n.sub-card-container .sub-tab-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sub-card-container .sub-tab-collaborator {\n  display: flex;\n  flex-wrap: wrap;\n}\n.sub-card-container .sub-tab-body {\n  display: flex;\n}\n.sub-card-container .sub-tab-body img {\n  cursor: pointer;\n  margin-right: 16px;\n  margin-top: 16px;\n  border-radius: 4px;\n  width: 102px;\n  height: 102px;\n  object-fit: cover;\n}\n.sub-card-container .link-button {\n  margin: 8px 0;\n  border: solid 1px var(--macaroni-and-cheese);\n  background: #fff;\n  color: #a1aab3;\n  padding: 0 8px;\n  border-radius: 24px;\n}\n.header-left {\n  cursor: pointer;\n  display: flex;\n  min-width: 152px;\n}\n.header-left img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-right: 12px;\n}\n.project__update-container {\n  margin: 0 auto;\n  max-width: 730px;\n  padding: 8px 0;\n}\n.project-detail-container {\n  margin: 0 auto;\n  max-width: 940px;\n  padding: 8px 0;\n}\n.project-detail-container .title-section {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.33;\n  color: #2e3033;\n}\n.project-detail-container .project-detail-header {\n  padding-bottom: 24px;\n}\n.project-detail-container .project-detail-header .header-title {\n  display: flex;\n  justify-content: space-between;\n}\n.project-detail-container .project-detail-header .header-title img {\n  width: 21px;\n  height: 21px;\n}\n.project-detail-container .project-body {\n  padding-top: 24px;\n}\n.project-detail-container .project-body .project-cover img {\n  width: 460px;\n  height: 296px;\n  border-radius: 4px;\n}\n.project-detail-container .project-body button {\n  height: 28px;\n  font-size: 12px;\n  line-height: 1.2;\n  border: none !important;\n  margin-right: 8px;\n}\n.project-detail-container .project-body .skill-button {\n  margin-bottom: 8px;\n  background: #006cd9;\n  color: #fff;\n}\n.project-detail-container .project-body .looking-skill-button {\n  margin-top: 8px;\n  background: #ffdf49;\n  color: #2e3033;\n}\n.post__content-container {\n  box-shadow: inset 0 -0.5px 0 0 #edf0f2;\n  display: flex;\n}\n.post__content-container img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n.post__content-container textarea {\n  border: none !important;\n  padding-top: 6px !important;\n  min-height: 20px !important;\n}\n.post__content-container .ant-input:focus {\n  border-color: none;\n  outline: 0;\n  box-shadow: none;\n  border-right-width: 1px;\n}\n";

/***/ })
/******/ ]);