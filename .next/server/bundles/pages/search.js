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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
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
/* 25 */,
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
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
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
/* 56 */,
/* 57 */,
/* 58 */,
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
/* 62 */,
/* 63 */,
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
/* 68 */,
/* 69 */,
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
/* 75 */,
/* 76 */,
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
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ }),
/* 149 */
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

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./src/actions/search.js
var actions_search = __webpack_require__(70);

// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// EXTERNAL MODULE: ./src/actions/people.js
var people = __webpack_require__(43);

// EXTERNAL MODULE: ./src/components/head.js
var head = __webpack_require__(9);

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(71);
var spin__default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./src/components/common/postCard/PostCard.js
var PostCard = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/common/jobPost/JobPost.js
var JobPost = __webpack_require__(61);

// EXTERNAL MODULE: ./src/components/common/peopleCard/PeopleCard.js
var _PeopleCard = __webpack_require__(64);

// EXTERNAL MODULE: ./src/components/common/peopleJoin/PeopleJoin.js
var _PeopleJoin = __webpack_require__(74);

// EXTERNAL MODULE: ./src/components/common/updateCard/UpdateCardContainer.js + 3 modules
var UpdateCardContainer = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/search/Search.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Search__default =
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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderFeed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(feed) {
        var _this$props = _this.props,
            filterValue = _this$props.filterValue,
            toggleJobDetail = _this$props.toggleJobDetail,
            handleSearchSkill = _this$props.handleSearchSkill,
            edit = _this$props.edit;
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
                detail: item.projectData,
                user: item.postedUserData,
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
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          status = _props.status,
          searchResult = _props.searchResult;
      return external__react__default.a.createElement("div", {
        className: "search__result"
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Left"
      }, "Search Result"), external__react__default.a.createElement(spin__default.a, {
        spinning: status === "running",
        tip: "Searching..."
      }, external__react__default.a.createElement("div", {
        className: "search__result__body"
      }, searchResult && this.renderFeed(searchResult))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/search/_search.less
var _search = __webpack_require__(150);
var _search_default = /*#__PURE__*/__webpack_require__.n(_search);

// CONCATENATED MODULE: ./src/components/search/SearchContainer.js


function SearchContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { SearchContainer__defineProperty(target, key, source[key]); }); } return target; }

function SearchContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SearchContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { SearchContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SearchContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchContainer__defineProperties(Constructor, staticProps); return Constructor; }

function SearchContainer__possibleConstructorReturn(self, call) { if (call && (SearchContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return SearchContainer__assertThisInitialized(self); }

function SearchContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SearchContainer_SearchContainer =
/*#__PURE__*/
function (_Component) {
  SearchContainer__inherits(SearchContainer, _Component);

  function SearchContainer(props) {
    var _this;

    SearchContainer__classCallCheck(this, SearchContainer);

    _this = SearchContainer__possibleConstructorReturn(this, (SearchContainer.__proto__ || Object.getPrototypeOf(SearchContainer)).call(this, props));
    _this.state = {};
    return _this;
  }

  SearchContainer__createClass(SearchContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          getPeopleList = _props.getPeopleList,
          getList = _props.getList,
          search = _props.search;
      var params = routes["Router"].router.query.key.replace(/-/g, ' ');
      search({
        data: params,
        type: "search"
      });
      if (routes["Router"].router.query.skill !== "true") getPeopleList({
        data: params,
        type: "search"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        style: {
          height: '100%'
        }
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _search_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Search"
      }), external__react__default.a.createElement(Search__default, _extends({}, this.state, this.props)));
    }
  }]);

  return SearchContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    searchSkillResult: state.search.searchSkillResult,
    status: state.search.status,
    peopleSearch: state.people.peopleSearch,
    searchResult: state.search.searchResult
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(SearchContainer__objectSpread({}, actions_search, project, people), dispatch);
}
/* harmony default export */ var search_SearchContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(SearchContainer_SearchContainer)));
// CONCATENATED MODULE: ./pages/search.js

/* harmony default export */ var pages_search = __webpack_exports__["default"] = (search_SearchContainer);

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = ".search__result {\n  padding: 80px 0;\n  width: 540px;\n  margin: 0 auto;\n}\n.search__result__body {\n  padding-top: 24px;\n}\n";

/***/ })
/******/ ]);