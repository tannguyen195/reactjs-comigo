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
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
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
/* 21 */,
/* 22 */,
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
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
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
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),
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
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 45 */,
/* 46 */,
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
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
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
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(111);


/***/ }),
/* 111 */
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

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__(81);
var tabs__default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(44);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__(28);
var upload__default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(10);
var modal__default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./src/components/common/customTag/CustomTagContainer.js + 1 modules
var CustomTagContainer = __webpack_require__(36);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// EXTERNAL MODULE: external "react-cookie"
var external__react_cookie_ = __webpack_require__(24);
var external__react_cookie__default = /*#__PURE__*/__webpack_require__.n(external__react_cookie_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(1);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/editProject/LinkMedia.js





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var cookies = new external__react_cookie_["Cookies"]();
var LinkMedia_confirm = modal__default.a.confirm;
var projectIcon = '/static/images/icon-project-photo.svg';

var LinkMedia__default =
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
          onTagLinkChange = _props.onTagLinkChange,
          links = _props.links,
          handleSubmit = _props.handleSubmit,
          status = _props.status,
          media = _props.media,
          onMediaChange = _props.onMediaChange,
          statusUploadImage = _props.statusUploadImage;
      return external__react__default.a.createElement("div", {
        className: "link-container paddingTop40"
      }, external__react__default.a.createElement("div", {
        className: "links marginTop8"
      }, external__react__default.a.createElement("div", {
        className: "paddingBottom16 H2-Black-Left"
      }, "Social Links"), external__react__default.a.createElement("div", {
        className: "links-tag-container"
      }, external__react__default.a.createElement(CustomTagContainer["a" /* default */], {
        text: "Add Link",
        type: "link",
        onTagsChange: onTagLinkChange,
        tags: links
      }))), external__react__default.a.createElement("div", {
        className: "links  paddingTop40"
      }, external__react__default.a.createElement("div", {
        className: "marginBottom8 H2-Black-Left"
      }, "Media (optional)"), external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "You can upload up to 3 photos, we support .JPG .JPEG .PNG with maximum 2MB/file."), external__react__default.a.createElement("div", {
        className: "upload__holder-container"
      }, media && media.map(function (item, index) {
        return external__react__default.a.createElement(upload__default.a, {
          key: index,
          onChange: function onChange(e) {
            return onMediaChange(_objectSpread({}, e, {
              index: index,
              uploadType: "media"
            }));
          },
          showUploadList: false
        }, external__react__default.a.createElement("div", {
          className: "image__holder"
        }, external__react__default.a.createElement("img", {
          src: item,
          alt: "project"
        })));
      }), media ? media.length < 3 && external__react__default.a.createElement(upload__default.a, {
        onChange: function onChange(e) {
          return onMediaChange(_objectSpread({}, e, {
            index: 3,
            uploadType: "media"
          }));
        },
        showUploadList: false
      }, external__react__default.a.createElement("div", {
        className: "upload__holder"
      }, statusUploadImage === "running" ? external__react__default.a.createElement(icon__default.a, {
        type: "loading"
      }) : external__react__default.a.createElement("img", {
        src: projectIcon,
        alt: "project"
      }), external__react__default.a.createElement("div", {
        className: "Link-Button-4"
      }, "+ Add Photos"))) : external__react__default.a.createElement(upload__default.a, {
        onChange: function onChange(e) {
          return onMediaChange(_objectSpread({}, e, {
            index: 3
          }));
        },
        showUploadList: false
      }, external__react__default.a.createElement("div", {
        className: "upload__holder"
      }, statusUploadImage === "running" ? external__react__default.a.createElement(icon__default.a, {
        type: "loading"
      }) : external__react__default.a.createElement("img", {
        src: projectIcon,
        alt: "project"
      }), external__react__default.a.createElement("div", {
        className: "Link-Button-4"
      }, "+ Add Photos"))))), external__react__default.a.createElement("div", {
        className: "update-button"
      }, external__react__default.a.createElement("div", {
        className: "delete-button"
      }), external__react__default.a.createElement("div", {
        className: "left-button"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return routes["Router"].push('/profile');
        },
        className: "skip-button"
      }, "Cancel"), external__react__default.a.createElement("div", {
        className: "next-button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        loading: status === 'running',
        onClick: handleSubmit,
        type: "primary"
      }, "SAVE")))));
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

// CONCATENATED MODULE: ./src/components/editProject/Information.js







function Information__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Information__typeof = function _typeof(obj) { return typeof obj; }; } else { Information__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Information__typeof(obj); }

function Information__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Information__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Information__createClass(Constructor, protoProps, staticProps) { if (protoProps) Information__defineProperties(Constructor.prototype, protoProps); if (staticProps) Information__defineProperties(Constructor, staticProps); return Constructor; }

function Information__possibleConstructorReturn(self, call) { if (call && (Information__typeof(call) === "object" || typeof call === "function")) { return call; } return Information__assertThisInitialized(self); }

function Information__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Information__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TabPane = tabs__default.a.TabPane;
var Information_confirm = modal__default.a.confirm;
var FormItem = form__default.a.Item;
var profileIcon = '/static/images/icon-project-photo.svg';
var TextArea = input__default.a.TextArea;

var Information__default =
/*#__PURE__*/
function (_Component) {
  Information__inherits(_default, _Component);

  function _default() {
    Information__classCallCheck(this, _default);

    return Information__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Information__createClass(_default, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _props = this.props,
          toggleUploadModal = _props.toggleUploadModal,
          handleSubmit = _props.handleSubmit,
          userData = _props.userData,
          detail = _props.detail,
          preloadImage = _props.preloadImage,
          status = _props.status,
          handleRemoveProject = _props.handleRemoveProject;
      return external__react__default.a.createElement("div", {
        className: "overview max-width"
      }, external__react__default.a.createElement(card__default.a, {
        bordered: false
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
      }, "Add photo")), external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmit
      }, external__react__default.a.createElement(FormItem, {
        className: "marginBottom32"
      }, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Project Lead"), getFieldDecorator('owner', {
        rules: [{
          required: true,
          message: 'Please input project owner name!',
          whitespace: true
        }],
        initialValue: userData.firstName + " " + userData.lastName
      })(external__react__default.a.createElement(input__default.a, {
        disabled: true
      }))), external__react__default.a.createElement(FormItem, {
        className: "marginBottom16"
      }, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Project Name"), getFieldDecorator('name', {
        rules: [{
          required: true,
          message: 'Please input project name!'
        }],
        initialValue: detail.name
      })(external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement("div", {
        className: "bio-info paddingBottom32"
      }, external__react__default.a.createElement(FormItem, null, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Description"), getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Please input project description!'
        }],
        initialValue: detail.description
      })(external__react__default.a.createElement(TextArea, null)))), external__react__default.a.createElement("div", {
        className: "update-button"
      }, external__react__default.a.createElement("div", {
        className: "delete-button"
      }, external__react__default.a.createElement("a", {
        onClick: function onClick() {
          return Information_confirm({
            title: 'Are you sure?',
            content: 'Do you really want to delete this project? This process cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: function onOk() {
              handleRemoveProject(detail._id);
            },
            onCancel: function onCancel() {}
          });
        }
      }, "DELETE")), external__react__default.a.createElement("div", {
        className: "left-button"
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
      }, "SAVE")))))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/Image.js
var Image = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/common/editCollaborator/EditCollaborator.js


function EditCollaborator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditCollaborator__typeof = function _typeof(obj) { return typeof obj; }; } else { EditCollaborator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditCollaborator__typeof(obj); }

function EditCollaborator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditCollaborator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditCollaborator__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditCollaborator__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditCollaborator__defineProperties(Constructor, staticProps); return Constructor; }

function EditCollaborator__possibleConstructorReturn(self, call) { if (call && (EditCollaborator__typeof(call) === "object" || typeof call === "function")) { return call; } return EditCollaborator__assertThisInitialized(self); }

function EditCollaborator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditCollaborator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var cancelIcon = '/static/images/icon-cancel-2.svg';
var trashIcon = '/static/images/icon-trash.svg';
var editIcon = '/static/images/icon-edit.svg';
var checkIcon = '/static/images/icon-check-2.svg';

var EditCollaborator__default =
/*#__PURE__*/
function (_Component) {
  EditCollaborator__inherits(_default, _Component);

  function _default() {
    EditCollaborator__classCallCheck(this, _default);

    return EditCollaborator__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  EditCollaborator__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          data = _props.data,
          toggleRemoveCollaborator = _props.toggleRemoveCollaborator,
          onCollaboratorRoleChange = _props.onCollaboratorRoleChange,
          onCollaboratorRoleClick = _props.onCollaboratorRoleClick,
          handleChangeRole = _props.handleChangeRole;
      return external__react__default.a.createElement("div", {
        className: "edit__collaborator-container"
      }, external__react__default.a.createElement("div", {
        className: "collaborator__picture"
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: data.pictureURL
      })), external__react__default.a.createElement("div", {
        className: "collaborator__info"
      }, external__react__default.a.createElement("div", {
        className: "Body-Black-Left"
      }, "    ", data.firstName + " " + data.lastName), external__react__default.a.createElement("div", {
        className: "Caption-Grey-Left"
      }, data.email)), external__react__default.a.createElement(input__default.a, {
        onChange: function onChange(e) {
          return onCollaboratorRoleChange({
            e: e,
            data: data
          });
        },
        disabled: !data.isChanged,
        value: data.role,
        className: "collaborator__role",
        suffix: !data.isChanged ? external__react__default.a.createElement("img", {
          onClick: function onClick() {
            return onCollaboratorRoleClick(data);
          },
          src: editIcon,
          alt: "edit"
        }) : external__react__default.a.createElement("img", {
          onClick: function onClick() {
            return onCollaboratorRoleClick(data);
          },
          src: cancelIcon,
          alt: "cancel"
        })
      }), !data.isChanged ? external__react__default.a.createElement("div", {
        className: "edit__options"
      }, external__react__default.a.createElement("img", {
        onClick: function onClick() {
          return toggleRemoveCollaborator(data);
        },
        src: trashIcon,
        alt: "delete"
      })) : external__react__default.a.createElement("div", {
        className: "edit__options"
      }, external__react__default.a.createElement("img", {
        onClick: function onClick() {
          return handleChangeRole(data);
        },
        src: checkIcon,
        alt: "check"
      })));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/noResult/NoResult.js
var NoResult = __webpack_require__(68);

// CONCATENATED MODULE: ./src/components/collaborator/Collaborator.js
function Collaborator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Collaborator__typeof = function _typeof(obj) { return typeof obj; }; } else { Collaborator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Collaborator__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Collaborator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Collaborator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Collaborator__createClass(Constructor, protoProps, staticProps) { if (protoProps) Collaborator__defineProperties(Constructor.prototype, protoProps); if (staticProps) Collaborator__defineProperties(Constructor, staticProps); return Constructor; }

function Collaborator__possibleConstructorReturn(self, call) { if (call && (Collaborator__typeof(call) === "object" || typeof call === "function")) { return call; } return Collaborator__assertThisInitialized(self); }

function Collaborator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Collaborator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Collaborator__default =
/*#__PURE__*/
function (_Component) {
  Collaborator__inherits(_default, _Component);

  function _default() {
    Collaborator__classCallCheck(this, _default);

    return Collaborator__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Collaborator__createClass(_default, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props,
          toggleRequestCollaborator = _props.toggleRequestCollaborator,
          collaborators = _props.collaborators,
          detail = _props.detail;
      return external__react__default.a.createElement("div", {
        className: "collaborator__edit-container"
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Left"
      }, "Members"), external__react__default.a.createElement("div", {
        className: "collaborator__edit marginTop8"
      }, collaborators.length > 0 && collaborators.map(function (item, index) {
        return external__react__default.a.createElement(EditCollaborator__default, _extends({}, _this.props, {
          key: index,
          data: item
        }));
      }), external__react__default.a.createElement("div", {
        className: "Button-Black-Left paddingBottom20"
      }, "Pending member"), detail && detail.pendingShares && detail.pendingShares.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: "pending__collaborator-container"
        }, external__react__default.a.createElement("div", {
          className: "collaborator__picture"
        }, external__react__default.a.createElement(Image["a" /* default */], {
          image: item.pictureURL
        })), external__react__default.a.createElement("div", {
          className: "collaborator__pending"
        }, external__react__default.a.createElement("div", {
          className: "collaborator__info"
        }, external__react__default.a.createElement("div", {
          className: "Body-Black-Left"
        }, "    ", item.firstName + " " + item.lastName), external__react__default.a.createElement("div", {
          className: "Caption-Grey-Left"
        }, item.email))), external__react__default.a.createElement("div", {
          className: "Body-Black-Left"
        }, item.role));
      }), collaborators.length > 0 && detail.pendingShare > 0 && external__react__default.a.createElement(NoResult["a" /* default */], {
        height: "initial"
      })));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/collaborator/_collaborator.less
var _collaborator = __webpack_require__(112);
var _collaborator_default = /*#__PURE__*/__webpack_require__.n(_collaborator);

// EXTERNAL MODULE: ./src/actions/toggle.js
var toggle = __webpack_require__(20);

// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/collaborator/CollaboratorRequest.js




function CollaboratorRequest__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CollaboratorRequest__typeof = function _typeof(obj) { return typeof obj; }; } else { CollaboratorRequest__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CollaboratorRequest__typeof(obj); }

function CollaboratorRequest__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CollaboratorRequest__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CollaboratorRequest__createClass(Constructor, protoProps, staticProps) { if (protoProps) CollaboratorRequest__defineProperties(Constructor.prototype, protoProps); if (staticProps) CollaboratorRequest__defineProperties(Constructor, staticProps); return Constructor; }

function CollaboratorRequest__possibleConstructorReturn(self, call) { if (call && (CollaboratorRequest__typeof(call) === "object" || typeof call === "function")) { return call; } return CollaboratorRequest__assertThisInitialized(self); }

function CollaboratorRequest__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CollaboratorRequest__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var CollaboratorRequest_FormItem = form__default.a.Item;

var CollaboratorRequest__default =
/*#__PURE__*/
function (_Component) {
  CollaboratorRequest__inherits(_default, _Component);

  function _default() {
    CollaboratorRequest__classCallCheck(this, _default);

    return CollaboratorRequest__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  CollaboratorRequest__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          handleSubmitRequest = _props.handleSubmitRequest,
          statusRequest = _props.statusRequest;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external__react__default.a.createElement("div", {
        className: "collaborator__request "
      }, external__react__default.a.createElement("div", {
        className: "H2-Black-Left paddingBottom16"
      }, "Invite Collaborators"), external__react__default.a.createElement(form__default.a, {
        onSubmit: handleSubmitRequest
      }, external__react__default.a.createElement("div", {
        className: "request__form-container"
      }, external__react__default.a.createElement(CollaboratorRequest_FormItem, null, getFieldDecorator('email', {
        rules: [{
          type: 'email',
          required: true,
          message: "Please input collaborator's email!",
          whitespace: true
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "University Email or Name",
        className: "email__input"
      }))), external__react__default.a.createElement(CollaboratorRequest_FormItem, null, getFieldDecorator('role', {
        rules: [{
          required: true,
          message: "Please input collaborator's role!",
          whitespace: true
        }]
      })(external__react__default.a.createElement(input__default.a, {
        placeholder: "Role",
        className: "role__input"
      })))), external__react__default.a.createElement("div", {
        className: "send__button"
      }, external__react__default.a.createElement(button__default.a, {
        loading: statusRequest === "running",
        htmlType: "submit",
        className: " Button-White-Center",
        type: "primary"
      }, "SEND INVITE"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/collaborator/CollaboratorRemove.js




function CollaboratorRemove__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CollaboratorRemove__typeof = function _typeof(obj) { return typeof obj; }; } else { CollaboratorRemove__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CollaboratorRemove__typeof(obj); }

function CollaboratorRemove__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CollaboratorRemove__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CollaboratorRemove__createClass(Constructor, protoProps, staticProps) { if (protoProps) CollaboratorRemove__defineProperties(Constructor.prototype, protoProps); if (staticProps) CollaboratorRemove__defineProperties(Constructor, staticProps); return Constructor; }

function CollaboratorRemove__possibleConstructorReturn(self, call) { if (call && (CollaboratorRemove__typeof(call) === "object" || typeof call === "function")) { return call; } return CollaboratorRemove__assertThisInitialized(self); }

function CollaboratorRemove__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CollaboratorRemove__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CollaboratorRemove_FormItem = form__default.a.Item;

var CollaboratorRemove__default =
/*#__PURE__*/
function (_Component) {
  CollaboratorRemove__inherits(_default, _Component);

  function _default() {
    CollaboratorRemove__classCallCheck(this, _default);

    return CollaboratorRemove__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  CollaboratorRemove__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          visibleRemoveCollaborator = _props.visibleRemoveCollaborator,
          toggleRemoveCollaborator = _props.toggleRemoveCollaborator,
          collaboratorData = _props.collaboratorData,
          handleRemoveCollaborator = _props.handleRemoveCollaborator,
          status = _props.status;
      return external__react__default.a.createElement(modal__default.a, {
        title: "",
        visible: visibleRemoveCollaborator,
        onOk: toggleRemoveCollaborator,
        onCancel: toggleRemoveCollaborator,
        footer: null
      }, collaboratorData && external__react__default.a.createElement("div", {
        className: "collaborator__remove-container "
      }, external__react__default.a.createElement(Image["a" /* default */], {
        image: collaboratorData.pictureURL
      }), external__react__default.a.createElement("div", {
        className: "Title-Section-Center marginTop24"
      }, "Are you sure to remove ", external__react__default.a.createElement("span", {
        className: "collaborator__name"
      }, " ", collaboratorData.firstName + " " + collaboratorData.lastName), "  from this project ?"), external__react__default.a.createElement("div", {
        className: "collaborator-button__group marginTop32"
      }, external__react__default.a.createElement(button__default.a, {
        onClick: toggleRemoveCollaborator,
        className: "cancel"
      }, "Cancel"), external__react__default.a.createElement(button__default.a, {
        loading: status === "running",
        onClick: handleRemoveCollaborator,
        className: "remove"
      }, "Remove"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "immutability-helper"
var external__immutability_helper_ = __webpack_require__(38);
var external__immutability_helper__default = /*#__PURE__*/__webpack_require__.n(external__immutability_helper_);

// CONCATENATED MODULE: ./src/components/collaborator/CollaboratorContainer.js


function CollaboratorContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CollaboratorContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { CollaboratorContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CollaboratorContainer__typeof(obj); }

function CollaboratorContainer__extends() { CollaboratorContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CollaboratorContainer__extends.apply(this, arguments); }

function CollaboratorContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { CollaboratorContainer__defineProperty(target, key, source[key]); }); } return target; }

function CollaboratorContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CollaboratorContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CollaboratorContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CollaboratorContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) CollaboratorContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) CollaboratorContainer__defineProperties(Constructor, staticProps); return Constructor; }

function CollaboratorContainer__possibleConstructorReturn(self, call) { if (call && (CollaboratorContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return CollaboratorContainer__assertThisInitialized(self); }

function CollaboratorContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CollaboratorContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var CollaboratorContainer_CollaboratorContainer =
/*#__PURE__*/
function (_Component) {
  CollaboratorContainer__inherits(CollaboratorContainer, _Component);

  function CollaboratorContainer(props) {
    var _this;

    CollaboratorContainer__classCallCheck(this, CollaboratorContainer);

    _this = CollaboratorContainer__possibleConstructorReturn(this, (CollaboratorContainer.__proto__ || Object.getPrototypeOf(CollaboratorContainer)).call(this, props));
    Object.defineProperty(CollaboratorContainer__assertThisInitialized(_this), "onCollaboratorRoleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value) {
        var collaborators = _this.state.collaborators;
        !collaborators[collaborators.findIndex(function (e) {
          return e._id === _value._id;
        })].isChanged ? _this.setState({
          collaborators: external__immutability_helper__default()(collaborators, CollaboratorContainer__defineProperty({}, collaborators.findIndex(function (e) {
            return e._id === _value._id;
          }), {
            isChanged: {
              $set: !collaborators[collaborators.findIndex(function (e) {
                return e._id === _value._id;
              })].isChanged
            }
          }))
        }) : _this.setState({
          collaborators: _this.props.detail.shares
        });
      }
    });
    Object.defineProperty(CollaboratorContainer__assertThisInitialized(_this), "onCollaboratorRoleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var e = _ref.e,
            data = _ref.data;
        var collaborators = _this.state.collaborators;

        _this.setState({
          collaborators: external__immutability_helper__default()(collaborators, CollaboratorContainer__defineProperty({}, collaborators.findIndex(function (value) {
            return value._id === data._id;
          }), {
            role: {
              $set: e.target.value
            }
          }))
        });
      }
    });
    Object.defineProperty(CollaboratorContainer__assertThisInitialized(_this), "handleChangeRole", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props = _this.props,
            editUserRole = _this$props.editUserRole,
            detail = _this$props.detail;
        editUserRole({
          projectID: detail._id,
          newRole: e.role,
          collaboratorEmail: e.email
        });
      }
    });
    Object.defineProperty(CollaboratorContainer__assertThisInitialized(_this), "handleSubmitRequest", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var form = _this.props.form;
        form.setFieldsValue({
          "sharedEmail": "",
          "sharedRole": ""
        });
        form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            var _this$props2 = _this.props,
                createShareLink = _this$props2.createShareLink,
                detail = _this$props2.detail;
            createShareLink({
              "projectID": detail._id,
              "sharedEmail": values.email,
              "sharedRole": values.role,
              "sendEmail": true
            });
          }
        });
      }
    });
    Object.defineProperty(CollaboratorContainer__assertThisInitialized(_this), "handleRemoveCollaborator", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props3 = _this.props,
            detail = _this$props3.detail,
            collaboratorData = _this$props3.collaboratorData,
            removeSharedUser = _this$props3.removeSharedUser;
        removeSharedUser({
          "removeUserID": collaboratorData._id,
          "projectID": detail._id
        });
      }
    });
    _this.state = {
      collaborators: []
    };
    return _this;
  }

  CollaboratorContainer__createClass(CollaboratorContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var detail = this.props.detail;
      var tempCollaborators = [];

      if (detail) {
        detail.shares.forEach(function (item) {
          tempCollaborators.push(CollaboratorContainer__objectSpread({}, item, {
            isChanged: false
          }));
        });
        this.setState({
          collaborators: tempCollaborators
        });
      }
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
          __html: _collaborator_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Collaborator"
      }), external__react__default.a.createElement(Collaborator__default, CollaboratorContainer__extends({}, this.state, this.props, {
        onCollaboratorRoleChange: this.onCollaboratorRoleChange,
        onCollaboratorRoleClick: this.onCollaboratorRoleClick,
        handleChangeRole: this.handleChangeRole
      })), external__react__default.a.createElement(CollaboratorRequest__default, CollaboratorContainer__extends({}, this.props, {
        handleSubmitRequest: this.handleSubmitRequest
      })), external__react__default.a.createElement(CollaboratorRemove__default, CollaboratorContainer__extends({}, this.props, {
        handleRemoveCollaborator: this.handleRemoveCollaborator
      })));
    }
  }]);

  return CollaboratorContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {
    visibleRequestCollaborator: state.toggle.visibleRequestCollaborator,
    visibleRemoveCollaborator: state.toggle.visibleRemoveCollaborator,
    collaboratorData: state.toggle.collaboratorData,
    detail: state.project.detail,
    status: state.project.status,
    statusRequest: state.project.statusRequest
  };
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(CollaboratorContainer__objectSpread({}, toggle, project), dispatch);
}
/* harmony default export */ var collaborator_CollaboratorContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(form__default.a.create()(CollaboratorContainer_CollaboratorContainer)));
// CONCATENATED MODULE: ./src/components/editProject/EditProject.js


function EditProject__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditProject__typeof = function _typeof(obj) { return typeof obj; }; } else { EditProject__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditProject__typeof(obj); }

function EditProject__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditProject__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditProject__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditProject__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditProject__defineProperties(Constructor, staticProps); return Constructor; }

function EditProject__possibleConstructorReturn(self, call) { if (call && (EditProject__typeof(call) === "object" || typeof call === "function")) { return call; } return EditProject__assertThisInitialized(self); }

function EditProject__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditProject__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EditProject_TabPane = tabs__default.a.TabPane;

var EditProject__default =
/*#__PURE__*/
function (_Component) {
  EditProject__inherits(_default, _Component);

  function _default() {
    EditProject__classCallCheck(this, _default);

    return EditProject__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  EditProject__createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "edit-project-container max-width"
      }, external__react__default.a.createElement(tabs__default.a, {
        className: "update__project__tab-container",
        defaultActiveKey: "1"
      }, external__react__default.a.createElement(EditProject_TabPane, {
        tab: "Overview",
        key: "1"
      }, external__react__default.a.createElement(Information__default, this.props)), external__react__default.a.createElement(EditProject_TabPane, {
        tab: "Collaborators",
        key: "2"
      }, external__react__default.a.createElement(collaborator_CollaboratorContainer, null)), external__react__default.a.createElement(EditProject_TabPane, {
        tab: "Links & Media",
        key: "3"
      }, external__react__default.a.createElement(LinkMedia__default, this.props))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/editProject/_editProject.less
var _editProject = __webpack_require__(113);
var _editProject_default = /*#__PURE__*/__webpack_require__.n(_editProject);

// EXTERNAL MODULE: ./src/components/common/uploadPhoto/UploadPhotoContainer.js + 1 modules
var UploadPhotoContainer = __webpack_require__(32);

// EXTERNAL MODULE: ./src/actions/file.js
var file = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/common/loading/Loading.js
var Loading = __webpack_require__(47);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(31);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./src/components/editProject/EditProjectContainer.js


function EditProjectContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { EditProjectContainer__defineProperty(target, key, source[key]); }); } return target; }

function EditProjectContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditProjectContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditProjectContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { EditProjectContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditProjectContainer__typeof(obj); }

function EditProjectContainer__extends() { EditProjectContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EditProjectContainer__extends.apply(this, arguments); }

function EditProjectContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditProjectContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditProjectContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) EditProjectContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) EditProjectContainer__defineProperties(Constructor, staticProps); return Constructor; }

function EditProjectContainer__possibleConstructorReturn(self, call) { if (call && (EditProjectContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return EditProjectContainer__assertThisInitialized(self); }

function EditProjectContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function EditProjectContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var EditProjectContainer_EditProjectContainer =
/*#__PURE__*/
function (_Component) {
  EditProjectContainer__inherits(EditProjectContainer, _Component);

  function EditProjectContainer(props) {
    var _this;

    EditProjectContainer__classCallCheck(this, EditProjectContainer);

    _this = EditProjectContainer__possibleConstructorReturn(this, (EditProjectContainer.__proto__ || Object.getPrototypeOf(EditProjectContainer)).call(this, props));
    Object.defineProperty(EditProjectContainer__assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var getDetail = _this.props.getDetail;
        getDetail(routes["Router"].query.id);
      }
    });
    Object.defineProperty(EditProjectContainer__assertThisInitialized(_this), "onMediaChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        var uploadImage = _this.props.uploadImage;
        if (data.event) uploadImage(data); // this.setState({
        //     media: media.splice(e.index, 1, { item: e.e })
        // })
      }
    });
    Object.defineProperty(EditProjectContainer__assertThisInitialized(_this), "toggleUploadModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          visibleUploadModal: !_this.state.visibleUploadModal
        });
      }
    });
    Object.defineProperty(EditProjectContainer__assertThisInitialized(_this), "handleRemoveProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        var remove = _this.props.remove;
        remove(id);
      }
    });
    Object.defineProperty(EditProjectContainer__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var _this$props = _this.props,
            form = _this$props.form,
            update = _this$props.update,
            image = _this$props.image,
            detail = _this$props.detail;
        var _this$state = _this.state,
            lookingSkills = _this$state.lookingSkills,
            projectSkills = _this$state.projectSkills,
            links = _this$state.links,
            media = _this$state.media;
        form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            update({
              projectID: detail._id,
              lookingSkills: lookingSkills,
              projectSkills: projectSkills,
              links: links,
              name: values.name,
              description: values.description,
              coverURL: image,
              media: media
            });
          }
        });
      }
    });
    Object.defineProperty(EditProjectContainer__assertThisInitialized(_this), "onTagLinkChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(links) {
        _this.setState({
          links: links
        });
      }
    });
    _this.state = {
      links: [],
      visibleUploadModal: false,
      preloadImage: null,
      media: []
    };
    return _this;
  }

  EditProjectContainer__createClass(EditProjectContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var detail = this.props.detail;

      if (nextProps.detail && nextProps.detail !== detail) {
        this.setState({
          links: nextProps.detail.links || [],
          preloadImage: nextProps.detail.coverURL,
          media: nextProps.detail.media
        });
      }

      if (nextProps.returnImage !== this.props.returnImage) this.setState({
        preloadImage: nextProps.returnImage
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          visibleUploadModal = _state.visibleUploadModal,
          preloadImage = _state.preloadImage;
      var _props = this.props,
          userData = _props.userData,
          detail = _props.detail;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _editProject_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Edit your project"
      }), userData && detail ? external__react__default.a.createElement(EditProject__default, EditProjectContainer__extends({}, this.state, this.props, {
        handleSubmit: this.handleSubmit,
        toggleUploadModal: this.toggleUploadModal,
        onTagLinkChange: this.onTagLinkChange,
        onMediaChange: this.onMediaChange,
        handleRemoveProject: this.handleRemoveProject
      })) : external__react__default.a.createElement(Loading["a" /* default */], null), external__react__default.a.createElement(UploadPhotoContainer["a" /* default */], {
        imageUrl: preloadImage,
        ratio: 1.55,
        toggleUploadModal: this.toggleUploadModal,
        visibleUploadModal: visibleUploadModal
      }));
    }
  }]);

  return EditProjectContainer;
}(external__react_["Component"]);

function EditProjectContainer_mapStateToProps(state) {
  return {
    userData: state.user.data,
    detail: state.project.detail,
    image: state.file.image,
    returnImage: state.file.returnImage,
    status: state.project.status,
    statusUploadImage: state.file.statusUploadImage,
    uploadStatus: state.file.status
  };
}
function EditProjectContainer_mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(EditProjectContainer__objectSpread({}, file, project), dispatch);
}
/* harmony default export */ var editProject_EditProjectContainer = (Object(external__react_redux_["connect"])(EditProjectContainer_mapStateToProps, EditProjectContainer_mapDispatchToProps)(form__default.a.create()(EditProjectContainer_EditProjectContainer)));
// CONCATENATED MODULE: ./pages/edit-project.js

/* harmony default export */ var edit_project = __webpack_exports__["default"] = (editProject_EditProjectContainer);

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = ".collaborator__edit-container {\n  padding-top: 40px;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container {\n  display: flex;\n  align-items: flex-start;\n  padding-bottom: 20px;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container:last-child {\n  padding-bottom: 0;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container .collaborator__pending {\n  margin-left: 10px;\n  min-width: 300px;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container .collaborator__pending .collaborator__info {\n  margin-left: 10px;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container .collaborator__picture img {\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container input {\n  height: 48px;\n  border-radius: 4px;\n}\n.collaborator__edit-container .collaborator__edit .pending__collaborator-container .collaborator__role {\n  margin-right: 24px;\n}\n.collaborator__edit-container .button__send button {\n  width: 100%;\n  height: 48px;\n}\n.collaborator__remove-container {\n  text-align: center;\n}\n.collaborator__remove-container img {\n  border-radius: 50%;\n  width: 96px;\n  height: 96px;\n}\n.collaborator__remove-container .collaborator__name {\n  color: #006cd9;\n}\n.collaborator__remove-container .collaborator-button__group button {\n  width: 120px;\n  height: 48px;\n  color: #fff;\n}\n.collaborator__remove-container .collaborator-button__group .cancel {\n  background: #a1aab3;\n  margin-right: 16px;\n}\n.collaborator__remove-container .collaborator-button__group .remove {\n  background: #ff604c;\n}\n.collaborator__request {\n  padding-top: 44px;\n}\n.collaborator__request .desc {\n  white-space: pre-line;\n}\n.collaborator__request .request__form-container {\n  padding-top: 20px;\n  display: flex;\n}\n.collaborator__request .request__form-container form {\n  justify-content: space-between;\n}\n.collaborator__request .request__form-container input {\n  height: 44px;\n  margin-right: 16px;\n}\n.collaborator__request .request__form-container .email__input {\n  width: 400px;\n}\n.collaborator__request .request__form-container .role__input {\n  width: 240px;\n}\n.collaborator__request .send__button {\n  text-align: center;\n}\n.collaborator__request .send__button button {\n  border-radius: 24px;\n  width: 475px;\n  height: 44px;\n}\n";

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = ".overview .cropped-container {\n  width: 100%;\n  border-radius: 8px;\n  margin-right: 24px;\n  position: relative;\n}\n.overview .cropped-container .user-photo {\n  border-radius: 8px;\n  width: 100%;\n  margin-bottom: 24px;\n  max-height: 160px;\n  object-fit: cover;\n}\n.overview .cropped-container .wrapper {\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  height: 160px;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  border-radius: 8px;\n  background-image: linear-gradient(to bottom, rgba(38, 38, 38, 0.05), rgba(38, 38, 38, 0.32));\n}\n.overview .cropped-container .wrapper .edit-text {\n  cursor: pointer;\n  color: #fff;\n  padding-bottom: 16px;\n  font-weight: 500;\n}\n.overview .cropped-container:hover .wrapper {\n  visibility: visible;\n}\n.overview .photo-container {\n  text-align: center;\n  min-width: 248px;\n  cursor: pointer;\n  border-radius: 8px;\n  border: dashed 1px #c3ced9;\n  padding-top: 24px;\n  padding-bottom: 16px;\n  padding-left: 45px;\n  padding-right: 45px;\n  margin-bottom: 24px;\n}\n.overview .photo-container img {\n  width: 70px;\n  height: 80px;\n}\n.overview .photo-container .add-photo {\n  padding-top: 24px;\n  font-weight: 500;\n  line-height: 1.14;\n  color: #c3ced9;\n}\n.edit-project-container {\n  padding: 120px 0;\n}\n.edit-project-container .project-title {\n  padding-bottom: 40px;\n}\n.edit-project-container .label-form {\n  font-size: 12px;\n  top: -34px;\n}\n.edit-project-container .basic-info-container {\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 40px;\n}\n.edit-project-container .basic-info-container .cropped-container {\n  width: 248px;\n  height: 160px;\n  border-radius: 8px;\n  margin-right: 24px;\n}\n.edit-project-container .basic-info-container .cropped-container .user-photo {\n  border-radius: 8px;\n  height: 160px;\n  width: 248px;\n}\n.edit-project-container .basic-info-container .cropped-container .wrapper {\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  height: 160px;\n  position: absolute;\n  z-index: 10;\n  width: 248px;\n  border-radius: 8px;\n  background-image: linear-gradient(to bottom, rgba(38, 38, 38, 0.05), rgba(38, 38, 38, 0.32));\n}\n.edit-project-container .basic-info-container .cropped-container .wrapper .edit-text {\n  cursor: pointer;\n  color: #fff;\n  padding-bottom: 16px;\n  font-weight: 500;\n}\n.edit-project-container .basic-info-container .cropped-container:hover .wrapper {\n  visibility: visible;\n}\n.edit-project-container .basic-info-container .photo-container {\n  text-align: center;\n  min-width: 248px;\n  cursor: pointer;\n  border-radius: 8px;\n  border: dashed 1px #c3ced9;\n  padding-top: 24px;\n  padding-bottom: 16px;\n  padding-left: 45px;\n  padding-right: 45px;\n  margin-right: 24px;\n}\n.edit-project-container .basic-info-container .photo-container img {\n  width: 70px;\n  height: 80px;\n}\n.edit-project-container .basic-info-container .photo-container .add-photo {\n  padding-top: 24px;\n  font-weight: 500;\n  line-height: 1.14;\n  color: #c3ced9;\n}\n.edit-project-container .basic-info-container .basic-info {\n  width: 100%;\n}\n.edit-project-container .basic-info-container .basic-info input[type=\"text\"] {\n  font-size: 12px;\n}\n.edit-project-container .ability {\n  padding-bottom: 40px;\n}\n.edit-project-container .ability .bio-info {\n  position: relative;\n}\n.edit-project-container .ability .bio-info .label-form {\n  top: -8px;\n  height: inherit;\n}\n.edit-project-container .ability .skill-info {\n  position: relative;\n  border: solid 1px #c3ced9;\n  padding: 16px 12px;\n  border-radius: 4px;\n  padding-bottom: 4px;\n}\n.edit-project-container .ability .skill-info .label-form {\n  font-size: 12px;\n  height: 16px;\n  top: -10px;\n}\n.edit-project-container .ability .skill-info input[type=\"text\"] {\n  font-size: 12px;\n}\n.edit-project-container .ability .skill-info .new-tag {\n  color: #45494d !important;\n}\n.edit-project-container .ability .skill-info .new-tag i {\n  color: #45494d !important;\n}\n.edit-project-container .ability .looking .ant-tag {\n  background-color: #ffdf49;\n  border: solid 1px #ffdf49;\n  color: #2e3033;\n}\n.edit-project-container .ability .looking .ant-tag i {\n  color: #2e3033 !important;\n}\n.edit-project-container .links .link-button {\n  margin-right: 8px;\n}\n.edit-project-container .links .link-button button {\n  overflow: hidden;\n  border: solid 1px #a1aab3;\n  width: 85px;\n  height: 28px;\n  font-size: 10px;\n}\n.edit-project-container .links .links-tag-container .ant-tag {\n  border-radius: 24px;\n  border: solid 1px #f7ca3d;\n  padding: 4px 8px;\n  font-size: 10px;\n  margin-bottom: 8px;\n  background-color: #fff;\n  color: #696969;\n}\n.edit-project-container .links .links-tag-container .ant-tag i {\n  color: #696969 !important;\n}\n.edit-project-container .links .links-tag-container input {\n  height: 30px !important;\n}\n.edit-project-container .links .links-tag-container .new-tag {\n  width: 85px;\n  text-align: center;\n}\n.edit-project-container .update-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.edit-project-container .update-button .delete-button a {\n  color: #fa393d;\n}\n.edit-project-container .update-button .left-button {\n  display: flex;\n  align-items: center;\n}\n.edit-project-container .update-button .left-button .skip-button {\n  color: #999999;\n  padding-right: 32px;\n}\n.edit-project-container .update-button .left-button .next-button button {\n  border-radius: 24px;\n  width: 120px;\n  height: 44px;\n}\n.update__project__tab-container .ant-tabs-nav .ant-tabs-tab-active {\n  color: #006cd9;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n}\n.update__project__tab-container .ant-tabs-tab {\n  padding: 12px 50px;\n}\n.update__project__tab-container .ant-tabs-nav-wrap {\n  background: #fff;\n  border-radius: 4px;\n}\n.update__project__tab-container .ant-tabs-ink-bar {\n  background: #006cd9;\n}\n.update__project__tab-container .ant-tabs-bar {\n  margin: 0;\n}\n.update__project__tab-container .ant-tabs-nav-wrap {\n  text-align: center;\n}\n.link-container .upload__holder-container {\n  padding-top: 24px;\n  display: flex;\n}\n.link-container .upload__holder-container .image__holder img {\n  margin-right: 8px;\n  border-radius: 8px;\n  width: 120px;\n  height: 120px;\n}\n.link-container .upload__holder-container .upload__holder {\n  margin-right: 8px;\n  border: dashed 1px #c3ced9;\n  width: 120px;\n  height: 120px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.link-container .upload__holder-container .upload__holder img {\n  width: 40px !important;\n  height: 40px !important;\n  margin-bottom: 16px;\n}\n.link-container .upload__holder-container .upload__holder i {\n  margin-bottom: 16px;\n  font-size: 20px;\n}\n";

/***/ })
/******/ ]);