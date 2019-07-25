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
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 12:
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ }),

/***/ 129:
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

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(6);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(8);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./src/components/newProject/_overview.less
var _overview = __webpack_require__(130);
var _overview_default = /*#__PURE__*/__webpack_require__.n(_overview);

// CONCATENATED MODULE: ./src/components/newProject/Overview.js




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FormItem = form__default.a.Item;
var profileIcon = '/static/images/icon-project-photo.svg';
var TextArea = input__default.a.TextArea;

var Overview__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          data = _props.data;
      data && form.setFieldsValue({
        name: data.name,
        description: data.description
      });
    }
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _props2 = this.props,
          onTabClick = _props2.onTabClick,
          userData = _props2.userData,
          status = _props2.status,
          preloadImage = _props2.preloadImage,
          toggleUploadModal = _props2.toggleUploadModal;
      return external__react__default.a.createElement("div", {
        className: "overview"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _overview_default.a
        }
      }), preloadImage ? external__react__default.a.createElement("div", {
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
      }, "Add photo")), external__react__default.a.createElement(form__default.a, null, external__react__default.a.createElement(FormItem, {
        className: "marginBottom16"
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
        }]
      })(external__react__default.a.createElement(input__default.a, null))), external__react__default.a.createElement(FormItem, {
        className: "bio-info paddingBottom32"
      }, external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Description"), getFieldDecorator('description', {
        rules: [{
          required: true,
          message: 'Please input project description!'
        }]
      })(external__react__default.a.createElement(TextArea, null))), external__react__default.a.createElement("div", {
        className: "update-button"
      }, external__react__default.a.createElement("div", {
        className: "skip-button Button-Dark-Grey-Left"
      }, "Cancel"), external__react__default.a.createElement("div", {
        className: "next-button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        onClick: function onClick(e) {
          return onTabClick(e);
        },
        loading: status === "running",
        htmlType: "submit",
        type: "primary"
      }, "Next")))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/newProject/_collaborator.less
var _collaborator = __webpack_require__(131);
var _collaborator_default = /*#__PURE__*/__webpack_require__.n(_collaborator);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(44);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./src/components/common/Image.js
var Image = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/common/addCollaborator/AddCollaborator.js




function AddCollaborator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddCollaborator__typeof = function _typeof(obj) { return typeof obj; }; } else { AddCollaborator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddCollaborator__typeof(obj); }

function AddCollaborator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddCollaborator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddCollaborator__createClass(Constructor, protoProps, staticProps) { if (protoProps) AddCollaborator__defineProperties(Constructor.prototype, protoProps); if (staticProps) AddCollaborator__defineProperties(Constructor, staticProps); return Constructor; }

function AddCollaborator__possibleConstructorReturn(self, call) { if (call && (AddCollaborator__typeof(call) === "object" || typeof call === "function")) { return call; } return AddCollaborator__assertThisInitialized(self); }

function AddCollaborator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AddCollaborator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AddCollaborator_FormItem = form__default.a.Item;
var cancelIcon = '/static/images/icon-cancel-2.svg';
var trashIcon = '/static/images/icon-trash.svg';
var editIcon = '/static/images/icon-edit.svg';
var checkIcon = '/static/images/icon-check-2.svg';

var AddCollaborator__default =
/*#__PURE__*/
function (_Component) {
  AddCollaborator__inherits(_default, _Component);

  function _default() {
    AddCollaborator__classCallCheck(this, _default);

    return AddCollaborator__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  AddCollaborator__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          add = _props.add,
          removeField = _props.removeField,
          handleSubmit = _props.handleSubmit,
          handleBack = _props.handleBack;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue;
      var keys = getFieldValue('keys') || [];
      var formItems = keys.map(function (k, index) {
        return external__react__default.a.createElement("div", {
          className: "form-items",
          key: k
        }, external__react__default.a.createElement(AddCollaborator_FormItem, {
          required: false
        }, getFieldDecorator("email[".concat(k, "]"), {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            type: 'email',
            required: true,
            whitespace: true,
            message: "Please input email or delete this field."
          }, {
            type: 'email',
            message: "Please input correct email format "
          }]
        })(external__react__default.a.createElement(input__default.a, {
          placeholder: "Email",
          style: {
            width: "255px"
          }
        }))), external__react__default.a.createElement(AddCollaborator_FormItem, {
          required: false
        }, getFieldDecorator("role[".concat(k, "]"), {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input role or delete this field."
          }]
        })(external__react__default.a.createElement(input__default.a, {
          placeholder: "Role",
          style: {
            width: "210px"
          }
        }))), external__react__default.a.createElement("div", null, keys.length > 0 ? external__react__default.a.createElement(icon__default.a, {
          className: "dynamic-delete-button",
          type: "minus-circle-o",
          onClick: function onClick() {
            return removeField(k);
          }
        }) : null));
      });
      getFieldDecorator('keys', {
        initialValue: []
      });
      return external__react__default.a.createElement("div", {
        className: "add-collaborator"
      }, external__react__default.a.createElement(form__default.a, null, formItems, external__react__default.a.createElement(AddCollaborator_FormItem, null, external__react__default.a.createElement("a", {
        onClick: add
      }, external__react__default.a.createElement(icon__default.a, {
        type: "plus"
      }), "Add collaborator"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/common/addCollaborator/_addCollaborator.less
var _addCollaborator = __webpack_require__(132);
var _addCollaborator_default = /*#__PURE__*/__webpack_require__.n(_addCollaborator);

// CONCATENATED MODULE: ./src/components/common/addCollaborator/AddCollaboratorContainer.js
function AddCollaboratorContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddCollaboratorContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { AddCollaboratorContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddCollaboratorContainer__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AddCollaboratorContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddCollaboratorContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddCollaboratorContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) AddCollaboratorContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) AddCollaboratorContainer__defineProperties(Constructor, staticProps); return Constructor; }

function AddCollaboratorContainer__possibleConstructorReturn(self, call) { if (call && (AddCollaboratorContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return AddCollaboratorContainer__assertThisInitialized(self); }

function AddCollaboratorContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AddCollaboratorContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var id = 0;

var AddCollaboratorContainer_AddCollaboratorContainer =
/*#__PURE__*/
function (_Component) {
  AddCollaboratorContainer__inherits(AddCollaboratorContainer, _Component);

  function AddCollaboratorContainer(props) {
    var _this;

    AddCollaboratorContainer__classCallCheck(this, AddCollaboratorContainer);

    _this = AddCollaboratorContainer__possibleConstructorReturn(this, (AddCollaboratorContainer.__proto__ || Object.getPrototypeOf(AddCollaboratorContainer)).call(this, props));
    Object.defineProperty(AddCollaboratorContainer__assertThisInitialized(_this), "removeField", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(k) {
        var form = _this.props.form; // can use data-binding to get

        var keys = form.getFieldValue('keys'); // We need at least one passenger

        if (keys.length === 1) {
          form.setFieldsValue({
            keys: []
          });
        } // can use data-binding to set


        form.setFieldsValue({
          keys: keys.filter(function (key) {
            return key !== k;
          })
        });
      }
    });
    Object.defineProperty(AddCollaboratorContainer__assertThisInitialized(_this), "add", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var form = _this.props.form; // can use data-binding to get

        var keys = form.getFieldValue('keys');
        var nextKeys = keys.concat(id++); // can use data-binding to set
        // important! notify form to detect changes

        form.setFieldsValue({
          keys: nextKeys
        });
      }
    });
    _this.state = {
      collaborators: []
    };
    return _this;
  }

  AddCollaboratorContainer__createClass(AddCollaboratorContainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        style: {
          height: '100%'
        }
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _addCollaborator_default.a
        }
      }), external__react__default.a.createElement(AddCollaborator__default, _extends({
        removeField: this.removeField,
        add: this.add
      }, this.state, this.props)));
    }
  }]);

  return AddCollaboratorContainer;
}(external__react_["Component"]);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ var addCollaborator_AddCollaboratorContainer = (Object(external__react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(AddCollaboratorContainer_AddCollaboratorContainer));
// CONCATENATED MODULE: ./src/components/newProject/Collaborator.js




function Collaborator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Collaborator__typeof = function _typeof(obj) { return typeof obj; }; } else { Collaborator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Collaborator__typeof(obj); }

function Collaborator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Collaborator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Collaborator__createClass(Constructor, protoProps, staticProps) { if (protoProps) Collaborator__defineProperties(Constructor.prototype, protoProps); if (staticProps) Collaborator__defineProperties(Constructor, staticProps); return Constructor; }

function Collaborator__possibleConstructorReturn(self, call) { if (call && (Collaborator__typeof(call) === "object" || typeof call === "function")) { return call; } return Collaborator__assertThisInitialized(self); }

function Collaborator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Collaborator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Collaborator_FormItem = form__default.a.Item;
var Collaborator_profileIcon = '/static/images/icon-project-photo.svg';
var Collaborator_TextArea = input__default.a.TextArea;

var Collaborator__default =
/*#__PURE__*/
function (_Component) {
  Collaborator__inherits(_default, _Component);

  function _default() {
    Collaborator__classCallCheck(this, _default);

    return Collaborator__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Collaborator__createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          form = _props.form,
          data = _props.data;
      data && form.setFieldsValue({
        email: data.email,
        role: data.role
      });
    }
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _props2 = this.props,
          handleSubmit = _props2.handleSubmit,
          handleBack = _props2.handleBack;
      return external__react__default.a.createElement("div", {
        className: "collaborator"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _collaborator_default.a
        }
      }), external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "Add folks who have helped with your project along the way. Or, add collaborators later!"), external__react__default.a.createElement(addCollaborator_AddCollaboratorContainer, this.props), external__react__default.a.createElement("div", {
        className: "update-button"
      }, external__react__default.a.createElement("div", {
        onClick: handleBack,
        className: "skip-button Button-Dark-Grey-Left"
      }, "Back"), external__react__default.a.createElement("div", {
        className: "next-button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        onClick: handleSubmit,
        htmlType: "submit",
        type: "primary"
      }, "Next"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__(28);
var upload__default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: ./src/components/newProject/_media.less
var _media = __webpack_require__(133);
var _media_default = /*#__PURE__*/__webpack_require__.n(_media);

// CONCATENATED MODULE: ./src/components/newProject/Media.js






function Media__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Media__typeof = function _typeof(obj) { return typeof obj; }; } else { Media__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Media__typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Media__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Media__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Media__createClass(Constructor, protoProps, staticProps) { if (protoProps) Media__defineProperties(Constructor.prototype, protoProps); if (staticProps) Media__defineProperties(Constructor, staticProps); return Constructor; }

function Media__possibleConstructorReturn(self, call) { if (call && (Media__typeof(call) === "object" || typeof call === "function")) { return call; } return Media__assertThisInitialized(self); }

function Media__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Media__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Media_FormItem = form__default.a.Item;
var projectIcon = '/static/images/icon-project-photo.svg';

var Media__default =
/*#__PURE__*/
function (_Component) {
  Media__inherits(_default, _Component);

  function _default() {
    Media__classCallCheck(this, _default);

    return Media__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  Media__createClass(_default, [{
    key: "render",
    value: function render() {
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue;
      var _props = this.props,
          handleBack = _props.handleBack,
          onTabClick = _props.onTabClick,
          addLink = _props.addLink,
          removeLink = _props.removeLink,
          media = _props.media,
          statusUpload = _props.statusUpload,
          onMediaChange = _props.onMediaChange,
          handleRemoveImage = _props.handleRemoveImage;
      var links = getFieldValue('links') || [];
      var formItems = links.map(function (k, index) {
        return external__react__default.a.createElement("div", {
          className: "form-items",
          key: k
        }, external__react__default.a.createElement(Media_FormItem, {
          required: false
        }, getFieldDecorator("link[".concat(k, "]"), {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input link or delete this field."
          }]
        })(external__react__default.a.createElement(input__default.a, {
          placeholder: "Link",
          style: {
            width: "300px",
            marginRight: "10px"
          }
        }))), external__react__default.a.createElement("div", null, links.length > 0 ? external__react__default.a.createElement(icon__default.a, {
          className: "dynamic-delete-button",
          type: "minus-circle-o",
          onClick: function onClick() {
            return removeLink(k);
          }
        }) : null));
      });
      getFieldDecorator('links', {
        initialValue: []
      });
      return external__react__default.a.createElement("div", {
        className: "media"
      }, external__react__default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _media_default.a
        }
      }), external__react__default.a.createElement("div", {
        className: "H2-Black-Left"
      }, "Social Links"), external__react__default.a.createElement(form__default.a, {
        className: "paddingTop40"
      }, formItems, external__react__default.a.createElement("a", {
        onClick: addLink,
        className: ""
      }, "Add Link")), external__react__default.a.createElement("div", {
        className: "H2-Black-Left paddingTop40"
      }, "Media"), external__react__default.a.createElement("div", {
        className: "Body-Dark-Grey-Left"
      }, "You can upload up to 3 photos. We support .JPG .JPEG .PNG with maximum 2MB/file."), external__react__default.a.createElement("div", {
        className: "upload__holder-container"
      }, media && media.length > 0 && media.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: "image__holder"
        }, external__react__default.a.createElement(icon__default.a, {
          onClick: function onClick() {
            return handleRemoveImage(index);
          },
          type: "close-circle"
        }), external__react__default.a.createElement("img", {
          src: item,
          alt: "project"
        }));
      }), media.length < 3 && external__react__default.a.createElement(upload__default.a, {
        onChange: function onChange(e) {
          return onMediaChange(_objectSpread({}, e, {
            index: 3,
            uploadType: "mediaNew"
          }));
        },
        showUploadList: false
      }, external__react__default.a.createElement("div", {
        className: "upload__holder"
      }, statusUpload === "running" ? external__react__default.a.createElement(icon__default.a, {
        type: "loading"
      }) : external__react__default.a.createElement("img", {
        src: projectIcon,
        alt: "project"
      }), external__react__default.a.createElement("div", {
        className: "Link-Button-4"
      }, "+ Add Photos")))), external__react__default.a.createElement("div", {
        className: "update-button"
      }, external__react__default.a.createElement("div", {
        onClick: handleBack,
        className: "skip-button Button-Dark-Grey-Left"
      }, "Back"), external__react__default.a.createElement("div", {
        className: "next-button"
      }, external__react__default.a.createElement(button__default.a, {
        className: "Button-White-Center",
        onClick: onTabClick,
        htmlType: "submit",
        type: "primary"
      }, "Finish"))));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./src/components/newProject/NewProject.js




function NewProject__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NewProject__typeof = function _typeof(obj) { return typeof obj; }; } else { NewProject__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NewProject__typeof(obj); }

function NewProject__extends() { NewProject__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NewProject__extends.apply(this, arguments); }

function NewProject__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewProject__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewProject__createClass(Constructor, protoProps, staticProps) { if (protoProps) NewProject__defineProperties(Constructor.prototype, protoProps); if (staticProps) NewProject__defineProperties(Constructor, staticProps); return Constructor; }

function NewProject__possibleConstructorReturn(self, call) { if (call && (NewProject__typeof(call) === "object" || typeof call === "function")) { return call; } return NewProject__assertThisInitialized(self); }

function NewProject__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NewProject__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NewProject_FormItem = form__default.a.Item;
var NewProject_profileIcon = '/static/images/icon-project-photo.svg';
var NewProject_TextArea = input__default.a.TextArea;
var buttons = ["Overview", "Collaborators", "Links & Media"];

var NewProject__default =
/*#__PURE__*/
function (_Component) {
  NewProject__inherits(_default, _Component);

  function _default() {
    NewProject__classCallCheck(this, _default);

    return NewProject__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  NewProject__createClass(_default, [{
    key: "renderTab",
    value: function renderTab(step) {
      var onTabClick = this.props.onTabClick;

      switch (step) {
        case 0:
          return external__react__default.a.createElement(Overview__default, this.props);

        case 1:
          return external__react__default.a.createElement(Collaborator__default, NewProject__extends({
            handleSubmit: onTabClick
          }, this.props));

        case 2:
          return external__react__default.a.createElement(Media__default, this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          step = _props.step;
      return external__react__default.a.createElement("div", {
        className: "new-project "
      }, external__react__default.a.createElement("div", {
        className: "project-title  H1-Black-Left"
      }, "Create a Project"), external__react__default.a.createElement("div", {
        className: "button__group"
      }, buttons.map(function (item, index) {
        return external__react__default.a.createElement(button__default.a, {
          className: " ".concat(step !== index ? "not-click" : "Button-White-Center"),
          type: step === index ? "primary" : "default",
          key: index
        }, item);
      })), this.renderTab(step));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// EXTERNAL MODULE: ./src/components/newProject/_newProject.less
var _newProject = __webpack_require__(134);
var _newProject_default = /*#__PURE__*/__webpack_require__.n(_newProject);

// EXTERNAL MODULE: ./src/components/common/uploadPhoto/UploadPhotoContainer.js + 1 modules
var UploadPhotoContainer = __webpack_require__(32);

// EXTERNAL MODULE: ./src/actions/file.js
var file = __webpack_require__(23);

// EXTERNAL MODULE: ./src/actions/project.js
var project = __webpack_require__(18);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(31);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./src/components/newProject/NewProjectContainer.js


function NewProjectContainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NewProjectContainer__typeof = function _typeof(obj) { return typeof obj; }; } else { NewProjectContainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NewProjectContainer__typeof(obj); }

function NewProjectContainer__extends() { NewProjectContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NewProjectContainer__extends.apply(this, arguments); }

function NewProjectContainer__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { NewProjectContainer__defineProperty(target, key, source[key]); }); } return target; }

function NewProjectContainer__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NewProjectContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewProjectContainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewProjectContainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) NewProjectContainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) NewProjectContainer__defineProperties(Constructor, staticProps); return Constructor; }

function NewProjectContainer__possibleConstructorReturn(self, call) { if (call && (NewProjectContainer__typeof(call) === "object" || typeof call === "function")) { return call; } return NewProjectContainer__assertThisInitialized(self); }

function NewProjectContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function NewProjectContainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var idLink = 0;

var NewProjectContainer_NewProjectContainer =
/*#__PURE__*/
function (_Component) {
  NewProjectContainer__inherits(NewProjectContainer, _Component);

  function NewProjectContainer(props) {
    var _this;

    NewProjectContainer__classCallCheck(this, NewProjectContainer);

    _this = NewProjectContainer__possibleConstructorReturn(this, (NewProjectContainer.__proto__ || Object.getPrototypeOf(NewProjectContainer)).call(this, props));
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "onMediaChange", {
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
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "handleRemoveImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var temp = _this.state.media;

        external__lodash__default.a.pullAt(temp, [e]);

        _this.setState({
          media: temp
        });
      }
    });
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "toggleUploadModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          visibleUploadModal: !_this.state.visibleUploadModal
        });
      }
    });
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "removeLink", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(k) {
        var form = _this.props.form; // can use data-binding to get

        var links = form.getFieldValue('links'); // We need at least one passenger

        if (links.length === 1) {
          form.setFieldsValue({
            links: []
          });
        } // can use data-binding to set


        form.setFieldsValue({
          links: links.filter(function (key) {
            return key !== k;
          })
        });
      }
    });
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "addLink", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var form = _this.props.form; // can use data-binding to get

        var links = form.getFieldValue('links');
        var nextLinks = links.concat(idLink++); // can use data-binding to set
        // important! notify form to detect changes

        form.setFieldsValue({
          links: nextLinks
        });
      }
    });
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "handleBack", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props = _this.props,
            setStep = _this$props.setStep,
            step = _this$props.step;
        setStep(step - 1);
      }
    });
    Object.defineProperty(NewProjectContainer__assertThisInitialized(_this), "onTabClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$props2 = _this.props,
            setStep = _this$props2.setStep,
            step = _this$props2.step,
            updateCreateProject = _this$props2.updateCreateProject,
            returnImage = _this$props2.returnImage,
            create = _this$props2.create,
            data = _this$props2.data;
        e.preventDefault();
        var form = _this.props.form;
        form.validateFieldsAndScroll(function (err, values) {
          var shareList = [];
          if (values.email) values.email.forEach(function (item, index) {
            if (item) shareList.push({
              email: item,
              role: values.role[index]
            });
          });

          if (!err) {
            if (step !== 2) setStep(step + 1);else if (step === 2) create(NewProjectContainer__objectSpread({}, data, {
              media: _this.state.media,
              links: values.link
            }));
            updateCreateProject(NewProjectContainer__objectSpread({}, values, {
              shareList: shareList,
              coverURL: returnImage || "https://server.freedominvest.com/media/Defaultimage_2.png",
              media: _this.state.media,
              links: values.link
            }));
          }
        });
      }
    });
    _this.state = {
      lookingSkills: [],
      projectSkills: [],
      visibleUploadModal: false,
      preloadImage: "https://server.freedominvest.com/media/Defaultimage_2.png",
      media: []
    };
    return _this;
  }

  NewProjectContainer__createClass(NewProjectContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.returnImage != this.props.returnImage && nextProps.statusImage === "success") this.setState({
        preloadImage: nextProps.returnImage
      });
      if (nextProps.mediaData != this.props.mediaData && nextProps.statusUpload === "success") this.setState({
        media: external__lodash__default.a.concat(this.state.media, [nextProps.mediaData])
      });
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
          __html: _newProject_default.a
        }
      }), external__react__default.a.createElement(head["a" /* default */], {
        title: "Create new project"
      }), userData && external__react__default.a.createElement(NewProject__default, NewProjectContainer__extends({}, this.state, this.props, {
        removeLink: this.removeLink,
        addLink: this.addLink,
        onMediaChange: this.onMediaChange,
        toggleUploadModal: this.toggleUploadModal,
        handleBack: this.handleBack,
        onTabClick: this.onTabClick,
        handleRemoveImage: this.handleRemoveImage
      })), external__react__default.a.createElement(UploadPhotoContainer["a" /* default */], {
        ratio: 3.26,
        imageUrl: preloadImage,
        toggleUploadModal: this.toggleUploadModal,
        visibleUploadModal: visibleUploadModal
      }));
    }
  }]);

  return NewProjectContainer;
}(external__react_["Component"]);

function NewProjectContainer_mapStateToProps(state) {
  return {
    coverProject: state.file.coverProject,
    userData: state.user.data,
    returnImage: state.file.returnImage,
    statusUpload: state.file.statusUploadImage,
    statusImage: state.file.status,
    status: state.project.status,
    step: state.project.step,
    data: state.project.data,
    type: state.file.type,
    mediaData: state.file.mediaData
  };
}
function NewProjectContainer_mapDispatchToProps(dispatch) {
  return Object(external__redux_["bindActionCreators"])(NewProjectContainer__objectSpread({}, file, project), dispatch);
}
/* harmony default export */ var newProject_NewProjectContainer = (Object(external__react_redux_["connect"])(NewProjectContainer_mapStateToProps, NewProjectContainer_mapDispatchToProps)(form__default.a.create()(NewProjectContainer_NewProjectContainer)));
// CONCATENATED MODULE: ./pages/new-project.js

/* harmony default export */ var new_project = __webpack_exports__["default"] = (newProject_NewProjectContainer);

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = ".overview .cropped-container {\n  width: 100%;\n  border-radius: 8px;\n  margin-right: 24px;\n  position: relative;\n}\n.overview .cropped-container .user-photo {\n  border-radius: 8px;\n  width: 100%;\n  margin-bottom: 24px;\n  height: 160px;\n  object-fit: cover;\n}\n.overview .cropped-container .wrapper {\n  visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  height: 160px;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  border-radius: 8px;\n  background-image: linear-gradient(to bottom, rgba(38, 38, 38, 0.05), rgba(38, 38, 38, 0.32));\n}\n.overview .cropped-container .wrapper .edit-text {\n  cursor: pointer;\n  color: #fff;\n  padding-bottom: 16px;\n  font-weight: 500;\n}\n.overview .cropped-container:hover .wrapper {\n  visibility: visible;\n}\n.overview .photo-container {\n  text-align: center;\n  min-width: 248px;\n  cursor: pointer;\n  border-radius: 8px;\n  border: dashed 1px #c3ced9;\n  padding-top: 24px;\n  padding-bottom: 16px;\n  padding-left: 45px;\n  padding-right: 45px;\n  margin-bottom: 24px;\n}\n.overview .photo-container img {\n  width: 70px;\n  height: 80px;\n}\n.overview .photo-container .add-photo {\n  padding-top: 24px;\n  font-weight: 500;\n  line-height: 1.14;\n  color: #c3ced9;\n}\n";

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = "";

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports = ".add-collaborator {\n  padding-top: 40px;\n}\n.add-collaborator .form-items {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n";

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = ".media .form-items {\n  display: flex;\n  align-items: center;\n}\n.media .upload__holder-container {\n  padding-top: 24px;\n  display: flex;\n}\n.media .upload__holder-container .image__holder {\n  position: relative;\n  margin-right: 8px;\n}\n.media .upload__holder-container .image__holder img {\n  margin-right: 8px;\n  border-radius: 8px;\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n.media .upload__holder-container .image__holder i {\n  position: absolute;\n  right: 0;\n  top: -4px;\n  cursor: pointer;\n  font-size: 20px;\n  color: red;\n}\n.media .upload__holder-container .upload__holder {\n  margin-right: 8px;\n  border: dashed 1px #c3ced9;\n  width: 120px;\n  height: 120px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.media .upload__holder-container .upload__holder img {\n  width: 40px !important;\n  height: 40px !important;\n  margin-bottom: 16px;\n}\n.media .upload__holder-container .upload__holder i {\n  margin-bottom: 16px;\n  font-size: 20px;\n}\n";

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = ".new-project {\n  padding: 120px 0;\n  width: 525px;\n  margin: 0 auto;\n}\n.new-project .project-title {\n  padding-bottom: 40px;\n}\n.new-project .button__group {\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 50px;\n}\n.new-project .button__group button {\n  height: 36px;\n  border-radius: 24px;\n}\n.new-project .button__group .not-click {\n  border: none;\n  color: #363636;\n}\n.new-project .update-button {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.new-project .update-button .skip-button {\n  cursor: pointer;\n  padding-right: 32px;\n}\n.new-project .update-button .next-button button {\n  border-radius: 24px;\n  width: 120px;\n  height: 44px;\n}\n";

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/keyMirror");

/***/ }),

/***/ 18:
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ 23:
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

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

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

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 32:
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

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = ".upload-modal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 56px 0;\n}\n.upload-modal .upload-container img {\n  width: 56px;\n  height: 56px;\n}\n.upload-modal .drag-text {\n  color: #c3ced9;\n  padding-top: 24px;\n  font-size: 24px;\n  font-weight: 500;\n}\n.upload-modal .or-devider {\n  color: #a1aab3;\n  padding: 36px 0;\n}\n.upload-modal .upload-button button {\n  width: 240px;\n  height: 48px;\n}\n.upload-modal .upload-footer {\n  text-align: center;\n  padding-top: 24px;\n  color: #a1aab3;\n}\n.upload-modal .upload-footer button {\n  width: 320px;\n  height: 48px;\n}\n.ant-upload.ant-upload-select-picture-card {\n  border: 2px dashed #d9d9d9;\n  background-color: #fff;\n  border-radius: 8px;\n  margin: 0;\n}\n.avatar-uploader .ant-upload {\n  width: 320px !important;\n  height: 320px !important;\n}\n.avatar-uploader .ant-upload img {\n  max-width: 320px;\n  height: auto;\n}\n.upload-new-button {\n  padding-top: 24px;\n  text-align: center;\n}\n.cropper-container {\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  direction: ltr;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.cropper-container img {\n  /* Avoid margin top issue (Occur only when margin-top <= -height) */\n  display: block;\n  min-width: 0 !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  width: 100%;\n  height: 100%;\n  image-orientation: 0deg;\n}\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.cropper-wrap-box {\n  overflow: hidden;\n}\n.cropper-drag-box {\n  opacity: 0;\n  background-color: #fff;\n}\n.cropper-modal {\n  opacity: .5;\n  background-color: #000;\n}\n.cropper-view-box {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n}\n.cropper-dashed {\n  position: absolute;\n  display: block;\n  opacity: .5;\n  border: 0 dashed #eee;\n}\n.cropper-dashed.dashed-h {\n  top: 33.33333%;\n  left: 0;\n  width: 100%;\n  height: 33.33333%;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.cropper-dashed.dashed-v {\n  top: 0;\n  left: 33.33333%;\n  width: 33.33333%;\n  height: 100%;\n  border-right-width: 1px;\n  border-left-width: 1px;\n}\n.cropper-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.cropper-center:before,\n.cropper-center:after {\n  position: absolute;\n  display: block;\n  content: ' ';\n  background-color: #eee;\n}\n.cropper-center:before {\n  top: 0;\n  left: -3px;\n  width: 7px;\n  height: 1px;\n}\n.cropper-center:after {\n  top: -3px;\n  left: 0;\n  width: 1px;\n  height: 7px;\n}\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: .1;\n}\n.cropper-face {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n}\n.cropper-line {\n  background-color: #39f;\n}\n.cropper-line.line-e {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.cropper-line.line-n {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.cropper-line.line-w {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.cropper-line.line-s {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.cropper-point {\n  width: 5px;\n  height: 5px;\n  opacity: .75;\n  background-color: #39f;\n}\n.cropper-point.point-e {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.cropper-point.point-n {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.cropper-point.point-w {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.cropper-point.point-s {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.cropper-point.point-ne {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.cropper-point.point-nw {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.cropper-point.point-sw {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.cropper-point.point-se {\n  right: -3px;\n  bottom: -3px;\n  width: 20px;\n  height: 20px;\n  cursor: se-resize;\n  opacity: 1;\n}\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    width: 15px;\n    height: 15px;\n  }\n}\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    width: 10px;\n    height: 10px;\n  }\n}\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    width: 5px;\n    height: 5px;\n    opacity: 0.75;\n  }\n}\n.cropper-point.point-se:before {\n  position: absolute;\n  right: -50%;\n  bottom: -50%;\n  display: block;\n  width: 200%;\n  height: 200%;\n  content: ' ';\n  opacity: 0;\n  background-color: #39f;\n}\n.cropper-invisible {\n  opacity: 0;\n}\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n.cropper-hide {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n}\n.cropper-hidden {\n  display: none !important;\n}\n.cropper-move {\n  cursor: move;\n}\n.cropper-crop {\n  cursor: crosshair;\n}\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n";

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("react-cropper");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("redux-actions");

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