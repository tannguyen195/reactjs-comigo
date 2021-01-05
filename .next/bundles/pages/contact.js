module.exports=__NEXT_REGISTER_PAGE("/contact",function(){return{page:webpackJsonp([13],{815:function(e,t,n){e.exports=n(816)},816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),o=n.n(a),c=n(0),r=n.n(c),i=n(12),l=n(11),s=n(26),u=n(69),m=n.n(u),f=n(34),p=n.n(f),d=n(14),b=n.n(d),h=n(17),y=n.n(h);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var w=o.a.Item,_=y.a.TextArea,x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.handleSubmit;return r.a.createElement("div",{className:"contact-container"},r.a.createElement(m.a,{className:"contact-left",lg:13},r.a.createElement("div",{className:"contact-left__container"},r.a.createElement("div",{className:"get-in-touch"},"Get In Touch"),r.a.createElement("div",{className:"contact-desc Body-16-Left"},"We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below."),r.a.createElement(p.a,{bordered:!1},r.a.createElement(o.a,{onSubmit:t},r.a.createElement(w,{className:"marginBottom24"},r.a.createElement("div",{className:"label-form"},"Your name"),e("name",{rules:[{required:!0,message:"Please input your first name!",whitespace:!0}]})(r.a.createElement(y.a,{placeholder:"Enter your name"}))),r.a.createElement(w,null,r.a.createElement("div",{className:"label-form"},"Your Email"),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(y.a,{placeholder:"Enter your email"}))),r.a.createElement("div",{className:"bio-info marginBottom24"},r.a.createElement("div",{className:"label-form"},"Your Message"),r.a.createElement(w,null,e("body",{rules:[{whitespace:!0},{required:!0,message:"Please input email content"}]})(r.a.createElement(_,{placeholder:"Enter Your Message"})))),r.a.createElement(w,{className:"send-button"},r.a.createElement(b.a,{className:"Button-2",type:"primary",htmlType:"submit"},"SEND")))))),r.a.createElement(m.a,{lg:11},r.a.createElement("div",{className:"contact-right"},r.a.createElement("div",{className:"Text-Style"},"Contact Information"),r.a.createElement("div",{className:"contact-address"},"322 N. Clinton St.\nIowa City, IA 52245\n\n(641) 451-1736\ninfo@comigo.co"),r.a.createElement("div",{className:"Text-Style"},"Follow Us"),r.a.createElement("div",{className:"social-icon"},r.a.createElement("a",{href:"https://www.linkedin.com/company/comigoco/",target:"_blank"},r.a.createElement("img",{alt:"icon",src:"/static/images/icon-social-linkedin.svg"})),r.a.createElement("a",{href:"https://www.instagram.com/comigo.co/",target:"_blank"},r.a.createElement("img",{alt:"icon",src:"/static/images/icon-social-instagram.svg"})),r.a.createElement("a",{href:"https://www.facebook.com/comigo.co/",target:"_blank"},r.a.createElement("img",{alt:"icon",src:"/static/images/icon-social-facebook.svg"}))))))}}])&&E(n.prototype,a),i&&E(n,i),t}(),S=n(817),O=n.n(S);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!o||"object"!==N(o)&&"function"!=typeof o?P(a):o,Object.defineProperty(P(n),"handleSubmit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){e||(window.location="mailto:".concat(t.email,"?subject=[").concat(t.name,"]%20-%20Contact&body=").concat(t.body))})}}),n.state={},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c["Component"]),n=t,(a=[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("style",{dangerouslySetInnerHTML:{__html:O.a}}),r.a.createElement(s.a,{title:"Contact"}),r.a.createElement(x,j({handleSubmit:this.handleSubmit},this.state,this.props)))}}])&&k(n.prototype,a),o&&k(n,o),t}();var C=Object(i.b)(function(e){return{}},function(e){return Object(l.bindActionCreators)({},e)})(o.a.create()(T));t.default=C},817:function(e,t){e.exports=".contact-container {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n  background: #fff;\n}\n.contact-container .contact-left {\n  height: 100%;\n  overflow: hidden;\n  padding: 80px 0;\n  background: #ffd24c;\n}\n.contact-container .contact-left .contact-left__container {\n  margin: 0 auto;\n  max-width: 540px;\n}\n.contact-container .contact-left .get-in-touch {\n  font-size: 64px;\n  font-weight: bold;\n  line-height: 1.25;\n  color: #fff;\n}\n.contact-container .contact-left .contact-desc {\n  padding-top: 8px;\n  padding-bottom: 40px;\n}\n.contact-container .contact-left .ant-card {\n  width: 540px;\n}\n.contact-container .contact-left .ant-card .ant-card-body {\n  padding: 48px;\n}\n.contact-container .contact-left .bio-info {\n  position: relative;\n}\n.contact-container .contact-left .bio-info .label-form {\n  top: -8px;\n  height: inherit;\n}\n.contact-container .contact-left .bio-info textarea {\n  min-height: 160px !important;\n}\n.contact-container .contact-left .send-button {\n  margin: 0;\n}\n.contact-container .contact-left .send-button button {\n  width: 100%;\n  height: 56px;\n}\n.contact-container .contact-right {\n  background: #fff;\n  padding-left: 55px;\n}\n.contact-container .contact-right .contact-address {\n  white-space: pre;\n  padding-top: 24px;\n  padding-bottom: 40px;\n}\n.contact-container .contact-right .social-icon {\n  padding-top: 24px;\n  padding-bottom: 100px;\n  display: flex;\n}\n.contact-container .contact-right .social-icon img {\n  margin-right: 24px;\n}\n"}},[815]).default}});