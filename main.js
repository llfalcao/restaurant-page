/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/caroline-attwood-hero.jpg */ \"./src/assets/images/caroline-attwood-hero.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/shawnanggg-restaurant.jpg */ \"./src/assets/images/shawnanggg-restaurant.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  list-style: none;\\n  color: inherit;\\n  font-size: 16px;\\n  line-height: 1;\\n}\\n\\nbody {\\n  background-color: #eee;\\n  color: #101112;\\n  font-family: \\\"Roboto\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Oxygen, Ubuntu, Cantarell, \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  width: 100%;\\n}\\n\\ninput,\\ntextarea {\\n  padding: 0.5rem;\\n  border: 1px solid rgba(69, 82, 123, 0.5);\\n  font-family: \\\"Roboto\\\";\\n}\\n\\ninput:focus,\\ntextarea:focus {\\n  outline: none;\\n  border: 1px solid #da7803;\\n}\\n\\nbutton {\\n  padding: 0.5rem;\\n  font-family: \\\"Roboto\\\";\\n}\\n\\n@media (min-width: 1200px) {\\n  #content {\\n    max-width: 1920px;\\n    margin: auto;\\n  }\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent);\\n}\\n\\n.credits {\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n  width: 100%;\\n  padding: 0.5rem;\\n  text-align: right;\\n  color: #fff;\\n  font-weight: 300;\\n  font-size: 0.8rem;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000;\\n  opacity: 0;\\n  transition: 0.3s;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  white-space: nowrap;\\n}\\n.credits a {\\n  font-size: 0.8rem;\\n}\\n\\n.visible {\\n  opacity: 1;\\n}\\n\\nh2 {\\n  font-weight: 400;\\n  margin-bottom: 1rem;\\n}\\n\\np {\\n  letter-spacing: 0.05rem;\\n}\\n\\ntextarea {\\n  line-height: 1.5;\\n}\\n\\n.company {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n.company img {\\n  width: 80px;\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n.company span {\\n  font-size: 2rem;\\n  font-weight: 100;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n  margin-bottom: 0.25rem;\\n}\\n.navbar a {\\n  display: block;\\n  width: 150px;\\n  padding: 0.6rem 0;\\n  text-align: center;\\n  font-weight: 500;\\n  transition: 0.3s;\\n}\\n.navbar .active {\\n  color: #da7803;\\n}\\n.navbar .indicator {\\n  position: absolute;\\n  bottom: -0.25rem;\\n  width: 150px;\\n  height: 0.25rem;\\n  background-color: #da7803;\\n  transform: translateX(-150px);\\n  transition: 0.3s;\\n}\\n\\n#footer {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  background-color: #101112;\\n  color: #fff;\\n  height: 150px;\\n}\\n#footer .footer-logo {\\n  width: 100px;\\n}\\n#footer .location p {\\n  margin: 0.5rem 0;\\n  font-size: 0.9rem;\\n}\\n#footer .location p:first-child {\\n  font-weight: 500;\\n  font-size: 1rem;\\n}\\n#footer .contact-info p {\\n  margin: 0.5rem 0;\\n}\\n#footer .github-info {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\n#footer .github-info img {\\n  width: 40px;\\n}\\n#footer .github-info span {\\n  font-family: \\\"JetBrains Mono\\\", monospace;\\n  font-weight: 600;\\n}\\n\\n.hero {\\n  width: 100%;\\n  height: 450px;\\n  overflow: hidden;\\n  position: relative;\\n  display: flex;\\n  justify-content: left;\\n  align-items: center;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n.hero h1 {\\n  color: #fff;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000;\\n  text-align: right;\\n  font-size: 4.5rem;\\n  font-weight: 400;\\n  max-width: 400px;\\n  animation: slide 1s forwards;\\n  position: relative;\\n}\\n.hero h1::after {\\n  content: \\\"New special: Cedar-Plank Salmon\\\";\\n  position: absolute;\\n  bottom: -2rem;\\n  right: 0;\\n  font-size: 1.2rem;\\n  font-weight: 300;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000;\\n  transition: 1s;\\n  animation: slide-after 1s ease-in;\\n}\\n\\n@keyframes slide {\\n  0% {\\n    margin-top: -5%;\\n    opacity: 0.5;\\n  }\\n  100% {\\n    margin-top: 0;\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide-after {\\n  0% {\\n    opacity: 0;\\n  }\\n  40% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@media (min-width: 1440px) {\\n  .hero {\\n    background-position: left 40%;\\n  }\\n}\\n.menu-container {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-left: 1rem;\\n  margin-top: 3rem;\\n}\\n\\n.menu-section {\\n  display: block;\\n  width: 50%;\\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 0px 4px rgba(0, 0, 0, 0.1);\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border-radius: 0.75rem;\\n  height: max-content;\\n}\\n\\n.menu-section:last-child {\\n  margin-left: 2rem;\\n}\\n.menu-section:last-child .category:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.category {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  position: relative;\\n  padding: 1rem 1rem 1.5rem;\\n  margin-bottom: 2rem;\\n  border-top: 1px dashed #45527b;\\n  border-top-right-radius: 0.75rem;\\n}\\n.category .image-wrapper {\\n  position: absolute;\\n  width: 40%;\\n  height: 150px;\\n  top: -1rem;\\n  left: -1rem;\\n  overflow: hidden;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\\n  border-radius: 0.25rem;\\n}\\n.category img {\\n  width: 150%;\\n  height: 100%;\\n  object-fit: cover;\\n  object-position: 50%;\\n}\\n.category .text-overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding: 1rem;\\n  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), transparent);\\n}\\n.category .text-overlay h2 {\\n  color: #fff;\\n  font-size: 1.8rem;\\n  font-weight: 400;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000, 0 0 4px #111;\\n}\\n.category .dishes {\\n  width: 100%;\\n  margin-left: 40%;\\n}\\n.category .menu-item-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0.25rem 0.5rem 0.25rem 0;\\n  white-space: nowrap;\\n}\\n.category span {\\n  font-size: 0.9rem;\\n}\\n.category .separator {\\n  width: 100%;\\n  border-bottom: 2px dotted #101112;\\n  margin: 0 0.5rem;\\n  opacity: 0.2;\\n}\\n\\n.menu-specials {\\n  flex-direction: column;\\n  border: 0;\\n}\\n.menu-specials .image-wrapper {\\n  position: absolute;\\n  left: -1rem;\\n  width: calc(100% + 1rem);\\n  height: 150px;\\n}\\n.menu-specials img {\\n  margin: 0;\\n  width: 100%;\\n  height: 200%;\\n}\\n.menu-specials .dishes {\\n  padding-top: 140px;\\n  margin: 0;\\n  width: 100%;\\n}\\n\\n#home {\\n  padding: 1rem 0;\\n}\\n\\n#menu {\\n  padding: 1rem 2rem 2rem 2rem;\\n}\\n#menu .banner-wrapper {\\n  display: block;\\n  margin: auto;\\n  width: 100%;\\n  height: 120px;\\n  border-radius: 0.5rem;\\n  overflow: hidden;\\n  position: relative;\\n}\\n#menu .menu-banner {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  filter: blur(2px);\\n}\\n#menu .overlay {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.5rem;\\n  background: rgba(0, 0, 0, 0.4);\\n}\\n#menu .overlay h1 {\\n  color: #fff;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000;\\n  font-size: 2rem;\\n  font-weight: 400;\\n}\\n#menu .overlay p {\\n  color: #fff;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000;\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\n\\n#contact {\\n  margin-top: 1rem;\\n  padding: 1rem;\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n}\\n#contact .bg {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), linear-gradient(to top right, rgba(0, 0, 0, 0.7), #53514e);\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: 0% 50%;\\n  background-attachment: fixed;\\n  background-blend-mode: overlay;\\n}\\n#contact .text-content {\\n  color: #fff;\\n  text-shadow: 0 4px 4px #333, 0 0 10px #000;\\n  max-width: 500px;\\n  text-align: right;\\n  margin-top: 10%;\\n  z-index: 1;\\n}\\n#contact h1 {\\n  font-weight: 400;\\n  font-size: 4rem;\\n  margin-bottom: 1rem;\\n}\\n#contact h2 {\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  max-width: 80%;\\n  margin-left: auto;\\n  line-height: 1.3;\\n}\\n#contact .form {\\n  margin: 2rem;\\n  padding: 2rem;\\n  border-radius: 0.5rem;\\n  background: #eee;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 10px #111;\\n  width: 400px;\\n  z-index: 1;\\n}\\n#contact .form p {\\n  font-weight: 500;\\n  font-size: 1.5rem;\\n  margin-bottom: 3rem;\\n  color: #282828;\\n}\\n#contact .form div {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n}\\n#contact .form label {\\n  font-weight: 400;\\n  margin-bottom: 0.5rem;\\n}\\n#contact .form input,\\n#contact .form textarea,\\n#contact .form button {\\n  transition: 0.3s;\\n}\\n#contact .form textarea {\\n  margin-bottom: 1rem;\\n  max-width: 100%;\\n}\\n#contact .form button {\\n  background-color: #101112;\\n  color: #fff;\\n  border-radius: 0.25rem;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant-page/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resturant-page/./src/styles/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_github_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/github/GitHub-Mark-Light-120px-plus.png */ \"./src/assets/github/GitHub-Mark-Light-120px-plus.png\");\n\n\n// import companylogo from ''\n\nconst Footer = function () {\n  const image = new Image();\n  image.src =\n    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZGE3ODAzIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDc2IDY2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3NiA2NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCByZXF1aXJlZEV4dGVuc2lvbnM9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+PC9mb3JlaWduT2JqZWN0PjxnIGk6ZXh0cmFuZW91cz0ic2VsZiI+PGc+PHBhdGggZD0iTTI1LjU5Myw0NS41NDFDMTQuMDgzLDQzLjcyMyw2LDM5LjQ1NCw2LDM0LjQ3N2MwLTIuMDg0LDEuNDIxLTQuMDQ1LDMuOTE2LTUuNzU0bC0yLjEwNC0zLjk1OSAgICAgQzIuOTE2LDI3LjQ1NywwLDMwLjgyMywwLDM0LjQ3N2MwLDEwLjg0MiwxMS42ODQsMjIuOTMsMjcuNjI1LDI2Ljc2QzI0Ljk0Niw1Ni41NTcsMjQuNjEsNTEuMDU0LDI1LjU5Myw0NS41NDF6IE02OS4wNjUsMjUuMjY4ICAgICBsLTEuNzQ3LDQuNEM2OS4wMzksMzEuMTQxLDcwLDMyLjc2Niw3MCwzNC40NzdjMCw2LjA0NC0xMS45MTksMTEuMDQzLTI3LjQyNCwxMS44NzZjLTAuNzY4LDUuMDQ1LTAuMTY5LDEwLjEyNiwyLjgxMywxNS40OTkgICAgIEM2Mi44NCw1OC45MDMsNzYsNDUuOTg1LDc2LDM0LjQ3N0M3NiwzMS4wNDcsNzMuNDI5LDI3Ljg3Miw2OS4wNjUsMjUuMjY4eiBNNDkuNzYyLDM2LjQ3M2MtMC4wNTksMC4wNzgsMC4yMjUsMC4wNzQsMC4yNTgsMC4wNTkgICAgIGM2LjEwMi0yLjc2Miw4LjE1NC05Ljg5MSw1LjUyMy0xNS43ODljLTAuNDU3LTEuMDIzLTEuMjYzLTIuMjAxLTIuMzc5LTMuMjU1Yy0wLjIwNCwxLjIwMy0wLjUwNCwyLjM3NC0wLjg1NCwzLjQ4OCAgICAgYzAuNDYxLDAuNzUyLDAuNzk2LDEuNTA5LDEuMDIzLDIuMTg4QzU1LjAwNCwyOC4xNDgsNTIuNjY2LDMyLjY5MSw0OS43NjIsMzYuNDczeiBNMzIuMDcsMjguOTQ3ICAgICBjLTEuMTIyLTIuNDgxLTEuNTI0LTUuMjM3LTEuMjAzLTguMDk5YzAuNDA3LTMuNjQ5LDIuMjE4LTYuNjc1LDQuOTI4LTguODdjLTAuMjU1LTAuODUxLTAuNjAyLTEuNjUxLTEuMDQ0LTIuMzkgICAgIGMtNy42NSw0LjM0My04Ljk2MiwxNS42MzQtMy43NzIsMjEuNDg2QzMxLjM0MywzMC4zNjQsMzEuNzA5LDI5LjY1MywzMi4wNywyOC45NDd6IE0zMi43NTIsNy4yMTcgICAgIGMtMC41NzYtMC40OTctMS4yMjItMC45MzktMS45MzktMS4zMjFDMTYuODUsOC44MTMsMTUuNTA2LDI5LjMxNSwyNy4yNDQsMzMuNTY4YzAuMTg2LDAuMDY4LDAuMzk1LTAuMTU0LDAuMjQ2LTAuMzI2ICAgICBjLTMuOTY3LTMuNjM3LTUuNTUzLTguNTQzLTQuOTcxLTEzLjc1MkMyMy4xNDEsMTMuOTI4LDI3LjM5Miw5LjQ5NCwzMi43NTIsNy4yMTd6IE02MS4xNjgsMjAuMjUgICAgIGMyLjAzMyw2LjA2OC0wLjgxNCwxMS42MDItNC4zNSwxNi4yMDdjLTAuMDcyLDAuMDk2LDAuMjcxLDAuMDkyLDAuMzE0LDAuMDcyYzcuNDI4LTMuMzYzLDkuOTI4LTEyLjA0NSw2LjcyMy0xOS4yMyAgICAgYy0xLjM2LTMuMDUxLTUuMjQxLTcuMjI3LTExLjEwOC03LjUyM2MwLjMxMywwLjkzNSwwLjUxMSwxLjg4NiwwLjYxMywyLjg0MkM1OC4wMjEsMTMuODY2LDYwLjI2NSwxNy41NTcsNjEuMTY4LDIwLjI1eiAgICAgIE00Ni4xNDEsMjcuNzI2YzIuMzI0LTQuODU0LDUuMzU5LTEwLjYxOSw0LjIzNC0xNi4yNDRDNDguOTQyLDQuMzIsNDIuNCwwLDM1LjksMGMtMS45ODMsMC0zLjg5MSwwLjMyNy01Ljc4NCwxLjAzOCAgICAgYy0yLjY1Ni0wLjM1Mi01LjQ0Ni0wLjA0OC04LjA3NCwxLjAwNGMtOC41MDgsMy40MDctMTEuMDgzLDEwLjM3NS0xMS4wOTEsMTcuODMzYy0wLjAwNiw1LjgxMiwyLjgxMywxMS4yMzQsOC4zODcsMTMuMjE1ICAgICBjMC4xODQsMC4wNjQsMC4zOTgtMC4xNiwwLjI0Ni0wLjMyNmMtNC40NTktNC4xMzktNS45MzItOS42NDMtNS4zMzQtMTUuNTE0YzAuNjAxLTUuOTAzLDQuODQ2LTEwLjUyMSw4LjI1LTEyLjE2NyAgICAgYzMuNzA4LTEuNzkyLDkuMjA4LTEuMDgzLDEyLjE2NywxYzQuODU3LDMuNDIsNi4wMywxMC45MjQsMi4wNDgsMTkuMDY5Yy0yLjEyNSw0LjM0NC00LjUsOC42MzMtNi4xNDEsMTMuMTk2ICAgICBjLTMuNTEyLDkuNzYyLTQuODU3LDIwLjE0OCwzLjkxNCwyNy40NDFjMC44NTIsMC43MDcsMS43MDEtMC41MzEsMS4yMDktMS4zMDljLTcuOTQxLTEyLjU1OS0zLjIyNS0yMy41MDQsMi42OTMtMzUuODYyICAgICBDNDAuNzE1LDIzLjc2Niw0My43NSwxOCw0Mi42MjUsMTIuMzc1Yy0wLjgxNC00LjA3MS0zLjIxMS03LjItNi4zNTctOS4xNTZjMi4zMzIsMC4xNzEsNC41OTQsMC44NzUsNi4xNDksMS45NzEgICAgIGM0Ljg1NywzLjQyLDYuMDMsMTAuOTI0LDIuMDQ4LDE5LjA2OWMtMi4xMjUsNC4zNDQtNC41LDguNjMzLTYuMTQxLDEzLjE5NWMtMy41MTIsOS43NjItNC44NTcsMjAuMTQ4LDMuOTE0LDI3LjQ0MSAgICAgYzAuODUyLDAuNzA3LDEuNzAxLTAuNTMxLDEuMjA5LTEuMzA5QzM1LjUwNiw1MS4wMjgsNDAuMjIzLDQwLjA4Myw0Ni4xNDEsMjcuNzI2eiI+PC9wYXRoPjwvZz48L2c+PC9zd2l0Y2g+PC9zdmc+';\n  image.classList.add('footer-logo');\n\n  //locations\n  const locations = `\n    <div class=\"location\">\n      <p>Trost</p>\n      <p>850 Rose St.</p>\n      <p>Paradis PD 2000Y-139</p>\n    </div>\n    <div class=\"location\">\n      <p>Pieta</p>\n      <p>49 Alphonse St.</p>\n      <p>Org. Island 32149-125</p>\n    </div>\n  `;\n\n  const contactInfo = `\n    <div class=\"contact-info\">\n      <p>Email: contact@plateholder.com</p>\n      <p>Phone: +3-71121-2051</p>\n    </div>\n  `;\n\n  //github\n  const githubInfo = `\n    <a class=\"github-info\" href=\"https://github.com/llfalcao\" alt=\"GitHub - llfalcao\">\n      <figure>\n        <img src=\"${_assets_github_GitHub_Mark_Light_120px_plus_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"GitHub Logo\" />\n      </figure>\n      <span>llfalcao</span>\n    </a>\n  `;\n\n  const footer = document.createElement('div');\n  footer.id = 'footer';\n  footer.appendChild(image);\n  footer.insertAdjacentHTML('beforeend', locations);\n  footer.insertAdjacentHTML('beforeend', contactInfo);\n  footer.insertAdjacentHTML('beforeend', githubInfo);\n\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Footer/Footer.js?");

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer/Footer.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Footer/index.js?");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = function () {\n  const header = document.createElement('div');\n  header.id = 'header';\n\n  const company = document.createElement('div');\n  company.classList.add('company');\n\n  const logo = new Image();\n  logo.src =\n    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZGE3ODAzIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDc2IDY2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3NiA2NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCByZXF1aXJlZEV4dGVuc2lvbnM9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+PC9mb3JlaWduT2JqZWN0PjxnIGk6ZXh0cmFuZW91cz0ic2VsZiI+PGc+PHBhdGggZD0iTTI1LjU5Myw0NS41NDFDMTQuMDgzLDQzLjcyMyw2LDM5LjQ1NCw2LDM0LjQ3N2MwLTIuMDg0LDEuNDIxLTQuMDQ1LDMuOTE2LTUuNzU0bC0yLjEwNC0zLjk1OSAgICAgQzIuOTE2LDI3LjQ1NywwLDMwLjgyMywwLDM0LjQ3N2MwLDEwLjg0MiwxMS42ODQsMjIuOTMsMjcuNjI1LDI2Ljc2QzI0Ljk0Niw1Ni41NTcsMjQuNjEsNTEuMDU0LDI1LjU5Myw0NS41NDF6IE02OS4wNjUsMjUuMjY4ICAgICBsLTEuNzQ3LDQuNEM2OS4wMzksMzEuMTQxLDcwLDMyLjc2Niw3MCwzNC40NzdjMCw2LjA0NC0xMS45MTksMTEuMDQzLTI3LjQyNCwxMS44NzZjLTAuNzY4LDUuMDQ1LTAuMTY5LDEwLjEyNiwyLjgxMywxNS40OTkgICAgIEM2Mi44NCw1OC45MDMsNzYsNDUuOTg1LDc2LDM0LjQ3N0M3NiwzMS4wNDcsNzMuNDI5LDI3Ljg3Miw2OS4wNjUsMjUuMjY4eiBNNDkuNzYyLDM2LjQ3M2MtMC4wNTksMC4wNzgsMC4yMjUsMC4wNzQsMC4yNTgsMC4wNTkgICAgIGM2LjEwMi0yLjc2Miw4LjE1NC05Ljg5MSw1LjUyMy0xNS43ODljLTAuNDU3LTEuMDIzLTEuMjYzLTIuMjAxLTIuMzc5LTMuMjU1Yy0wLjIwNCwxLjIwMy0wLjUwNCwyLjM3NC0wLjg1NCwzLjQ4OCAgICAgYzAuNDYxLDAuNzUyLDAuNzk2LDEuNTA5LDEuMDIzLDIuMTg4QzU1LjAwNCwyOC4xNDgsNTIuNjY2LDMyLjY5MSw0OS43NjIsMzYuNDczeiBNMzIuMDcsMjguOTQ3ICAgICBjLTEuMTIyLTIuNDgxLTEuNTI0LTUuMjM3LTEuMjAzLTguMDk5YzAuNDA3LTMuNjQ5LDIuMjE4LTYuNjc1LDQuOTI4LTguODdjLTAuMjU1LTAuODUxLTAuNjAyLTEuNjUxLTEuMDQ0LTIuMzkgICAgIGMtNy42NSw0LjM0My04Ljk2MiwxNS42MzQtMy43NzIsMjEuNDg2QzMxLjM0MywzMC4zNjQsMzEuNzA5LDI5LjY1MywzMi4wNywyOC45NDd6IE0zMi43NTIsNy4yMTcgICAgIGMtMC41NzYtMC40OTctMS4yMjItMC45MzktMS45MzktMS4zMjFDMTYuODUsOC44MTMsMTUuNTA2LDI5LjMxNSwyNy4yNDQsMzMuNTY4YzAuMTg2LDAuMDY4LDAuMzk1LTAuMTU0LDAuMjQ2LTAuMzI2ICAgICBjLTMuOTY3LTMuNjM3LTUuNTUzLTguNTQzLTQuOTcxLTEzLjc1MkMyMy4xNDEsMTMuOTI4LDI3LjM5Miw5LjQ5NCwzMi43NTIsNy4yMTd6IE02MS4xNjgsMjAuMjUgICAgIGMyLjAzMyw2LjA2OC0wLjgxNCwxMS42MDItNC4zNSwxNi4yMDdjLTAuMDcyLDAuMDk2LDAuMjcxLDAuMDkyLDAuMzE0LDAuMDcyYzcuNDI4LTMuMzYzLDkuOTI4LTEyLjA0NSw2LjcyMy0xOS4yMyAgICAgYy0xLjM2LTMuMDUxLTUuMjQxLTcuMjI3LTExLjEwOC03LjUyM2MwLjMxMywwLjkzNSwwLjUxMSwxLjg4NiwwLjYxMywyLjg0MkM1OC4wMjEsMTMuODY2LDYwLjI2NSwxNy41NTcsNjEuMTY4LDIwLjI1eiAgICAgIE00Ni4xNDEsMjcuNzI2YzIuMzI0LTQuODU0LDUuMzU5LTEwLjYxOSw0LjIzNC0xNi4yNDRDNDguOTQyLDQuMzIsNDIuNCwwLDM1LjksMGMtMS45ODMsMC0zLjg5MSwwLjMyNy01Ljc4NCwxLjAzOCAgICAgYy0yLjY1Ni0wLjM1Mi01LjQ0Ni0wLjA0OC04LjA3NCwxLjAwNGMtOC41MDgsMy40MDctMTEuMDgzLDEwLjM3NS0xMS4wOTEsMTcuODMzYy0wLjAwNiw1LjgxMiwyLjgxMywxMS4yMzQsOC4zODcsMTMuMjE1ICAgICBjMC4xODQsMC4wNjQsMC4zOTgtMC4xNiwwLjI0Ni0wLjMyNmMtNC40NTktNC4xMzktNS45MzItOS42NDMtNS4zMzQtMTUuNTE0YzAuNjAxLTUuOTAzLDQuODQ2LTEwLjUyMSw4LjI1LTEyLjE2NyAgICAgYzMuNzA4LTEuNzkyLDkuMjA4LTEuMDgzLDEyLjE2NywxYzQuODU3LDMuNDIsNi4wMywxMC45MjQsMi4wNDgsMTkuMDY5Yy0yLjEyNSw0LjM0NC00LjUsOC42MzMtNi4xNDEsMTMuMTk2ICAgICBjLTMuNTEyLDkuNzYyLTQuODU3LDIwLjE0OCwzLjkxNCwyNy40NDFjMC44NTIsMC43MDcsMS43MDEtMC41MzEsMS4yMDktMS4zMDljLTcuOTQxLTEyLjU1OS0zLjIyNS0yMy41MDQsMi42OTMtMzUuODYyICAgICBDNDAuNzE1LDIzLjc2Niw0My43NSwxOCw0Mi42MjUsMTIuMzc1Yy0wLjgxNC00LjA3MS0zLjIxMS03LjItNi4zNTctOS4xNTZjMi4zMzIsMC4xNzEsNC41OTQsMC44NzUsNi4xNDksMS45NzEgICAgIGM0Ljg1NywzLjQyLDYuMDMsMTAuOTI0LDIuMDQ4LDE5LjA2OWMtMi4xMjUsNC4zNDQtNC41LDguNjMzLTYuMTQxLDEzLjE5NWMtMy41MTIsOS43NjItNC44NTcsMjAuMTQ4LDMuOTE0LDI3LjQ0MSAgICAgYzAuODUyLDAuNzA3LDEuNzAxLTAuNTMxLDEuMjA5LTEuMzA5QzM1LjUwNiw1MS4wMjgsNDAuMjIzLDQwLjA4Myw0Ni4xNDEsMjcuNzI2eiI+PC9wYXRoPjwvZz48L2c+PC9zd2l0Y2g+PC9zdmc+';\n\n  const companyName = document.createElement('span');\n  companyName.innerText = 'Plateholder';\n\n  company.appendChild(logo);\n  company.appendChild(companyName);\n\n  const navbar = `\n    <ul class=\"navbar\">\n      <div class=\"indicator\"></div>\n      <li><a class=\"active\" href=\"#\" data-page=\"home\" alt=\"Home\">Home</a></li>\n      <li><a href=\"#\" data-page=\"menu\" alt=\"Menu\">Menu</a></li>\n      <li><a href=\"#\" data-page=\"contact\" alt=\"Contact\">Contact</a></li>\n    </ul>\n  `;\n\n  header.appendChild(company);\n  header.insertAdjacentHTML('beforeend', navbar);\n\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Header/Header.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/components/Header/Header.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_caroline_attwood_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/caroline-attwood-hero.jpg */ \"./src/assets/images/caroline-attwood-hero.jpg\");\n\n\nconst Hero = function () {\n  const overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n\n  const bgImage = new Image();\n  bgImage.src = _assets_images_caroline_attwood_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  const tagline = document.createElement('h1');\n  tagline.innerText = 'Cooked to perfection';\n\n  const imageCredits = `\n      <span class=\"credits\">\n        Photo by\n        <a href=\"https://unsplash.com/photos/bpPTlXWTOvg\" alt=\"Caroline Attwood\" target=\"_blank\">\n          Caroline Attwood</a>\n        on\n        <a href=\"https://unsplash.com\" alt=\"Unsplash\" target=\"_blank\">Unsplash</a>\n      </span>\n  `;\n\n  const hero = document.createElement('div');\n  hero.classList.add('hero');\n  hero.appendChild(overlay);\n  hero.appendChild(tagline);\n  hero.insertAdjacentHTML('beforeend', imageCredits);\n\n  ['mouseover', 'mouseleave'].forEach((event) =>\n    hero.addEventListener(\n      event,\n      function showCredits(e) {\n        const credits = document.querySelector('.hero .credits');\n        if (e.type === 'mouseover') {\n          credits.classList.add('visible');\n        } else {\n          credits.classList.remove('visible');\n        }\n      },\n      false\n    )\n  );\n\n  return hero;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Hero/Hero.js?");

/***/ }),

/***/ "./src/components/Hero/index.js":
/*!**************************************!*\
  !*** ./src/components/Hero/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ \"./src/components/Hero/Hero.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Hero/index.js?");

/***/ }),

/***/ "./src/components/MenuCategory/MenuCategory.js":
/*!*****************************************************!*\
  !*** ./src/components/MenuCategory/MenuCategory.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Creates category container with desired class(es)\nconst MenuCategory = function (info, type, categoryImage, classes) {\n  const image = new Image();\n  image.src = categoryImage;\n\n  const imageCredits = `\n  <span class=\"credits\">\n    Photo by\n    <a href=\"${info.source}\" alt=\"${info.author}\" target=\"_blank\">\n      ${info.author}</a>\n    on\n    <a href=\"https://unsplash.com\" alt=\"Unsplash\" target=\"_blank\">Unsplash</a>\n  </span>\n`;\n\n  const categoryTitle = document.createElement('h2');\n  categoryTitle.innerText = info.category;\n\n  const overlay = document.createElement('div');\n  overlay.classList.add('text-overlay');\n  overlay.appendChild(categoryTitle);\n\n  const imageWrapper = document.createElement('div');\n  imageWrapper.classList.add('image-wrapper');\n  imageWrapper.appendChild(image);\n  imageWrapper.appendChild(overlay);\n  imageWrapper.insertAdjacentHTML('beforeend', imageCredits);\n\n  const dishes = document.createElement('div');\n  dishes.classList.add('dishes');\n\n  const items = type[Object.keys(type)[0]];\n  for (let dish in items) {\n    const name = document.createElement('span');\n    name.innerText = items[dish].name;\n\n    const separator = document.createElement('span');\n    separator.classList.add('separator');\n\n    const price = document.createElement('span');\n    price.innerText = items[dish].price;\n\n    const menuItemWrapper = document.createElement('div');\n    menuItemWrapper.classList.add('menu-item-wrapper');\n    menuItemWrapper.appendChild(name);\n    menuItemWrapper.appendChild(separator);\n    menuItemWrapper.appendChild(price);\n    dishes.appendChild(menuItemWrapper);\n  }\n\n  const category = document.createElement('div');\n  category.id = info.category.toLowerCase();\n  category.classList.add('category');\n  if (classes != null) {\n    if (typeof classes === 'object') {\n      category.classList.add(...classes);\n    } else {\n      category.classList.add(classes);\n    }\n  }\n  category.appendChild(imageWrapper);\n  category.appendChild(dishes);\n\n  ['mouseover', 'mouseleave'].forEach((event) =>\n    imageWrapper.addEventListener(\n      event,\n      function showCredits(e) {\n        const credits = document.querySelector(`#${category.id} .credits`);\n        if (e.type === 'mouseover') {\n          credits.classList.add('visible');\n        } else {\n          credits.classList.remove('visible');\n        }\n      },\n      false\n    )\n  );\n\n  return category;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuCategory);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/MenuCategory/MenuCategory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home/index.js\");\n/* harmony import */ var _pages_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Menu */ \"./src/pages/Menu/index.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Contact */ \"./src/pages/Contact/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer/index.js\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\ncontent.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n// Load section according to the selected tab\nfunction loadSection(navbarLink) {\n  const header = document.querySelector('#header');\n  const indicator = document.querySelector('.indicator');\n\n  if (navbarLink === 'Menu') {\n    header.insertAdjacentElement('afterend', (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    indicator.style.transform = 'translateX(0px)';\n  } else if (navbarLink === 'Contact') {\n    header.insertAdjacentElement('afterend', (0,_pages_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    indicator.style.transform = 'translateX(150px)';\n  } else if (navbarLink === 'Home') {\n    header.insertAdjacentElement('afterend', (0,_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    indicator.style.transform = 'translateX(-150px)';\n  }\n}\n\n// Toggle navbar bottom border and remove the\n// current section before loading the selected one\nconst navItem = document.querySelectorAll('#header a');\nnavItem.forEach((item) => {\n  item.addEventListener('click', function () {\n    let currentTab = document.querySelectorAll('.active');\n    if (currentTab[0] === item) return;\n    let currentSection = document.querySelector(\n      '#' + currentTab[0].dataset.page\n    );\n    currentTab[0].classList.remove('active');\n    if (currentSection !== null) {\n      currentSection.remove();\n    }\n    item.classList.add('active');\n    loadSection(item.innerText);\n  });\n});\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/Contact/Contact.js":
/*!**************************************!*\
  !*** ./src/pages/Contact/Contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_shawnanggg_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/shawnanggg-restaurant.jpg */ \"./src/assets/images/shawnanggg-restaurant.jpg\");\n\n\nconst Contact = function () {\n  const image = document.createElement('div');\n  image.classList.add('bg');\n\n  const imageCredits = `\n      <span class=\"credits\">\n        Photo by\n        <a href=\"https://unsplash.com/photos/nmpW_WwwVSc\" alt=\"@shawnanggg\" target=\"_blank\">\n          @shawnanggg</a>\n        on\n        <a href=\"https://unsplash.com\" alt=\"Unsplash\" target=\"_blank\">Unsplash</a>\n      </span>\n  `;\n\n  const textContent = `\n    <section class=\"text-content\">  \n      <h1>We'd love to hear your feedback!</h1>\n      <h2>Let us know what you liked about your last visit, or how we can improve our services.</h2>\n    </section>\n  `;\n\n  // Form fields\n  const fields = `\n    <p>Contact Us</p>\n    <div>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" name=\"name\" id=\"name\" required />\n    </div>\n    <div>\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" name=\"email\" id=\"email\" required />\n    </div>\n    <div>\n      <label for=\"message\">Message:</label>\n      <textarea id=\"message\" name=\"nessage\" rows=\"4\" cols=\"50\" required></textarea>\n    </div>\n    <div>\n      <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n  `;\n\n  const form = document.createElement('form');\n  form.classList.add('form');\n  form.insertAdjacentHTML('beforeend', fields);\n\n  const contact = document.createElement('div');\n  contact.id = 'contact';\n  contact.appendChild(image);\n  contact.insertAdjacentHTML('beforeend', imageCredits);\n  contact.insertAdjacentHTML('beforeend', textContent);\n  contact.appendChild(form);\n\n  ['mouseover', 'mouseleave'].forEach((event) =>\n    contact.addEventListener(\n      event,\n      function showCredits(e) {\n        const credits = document.querySelector('#contact .credits');\n        if (e.type === 'mouseover') {\n          credits.classList.add('visible');\n        } else {\n          credits.classList.remove('visible');\n        }\n      },\n      false\n    )\n  );\n\n  form.addEventListener('input', (e) => {\n    const btn = document.querySelector('.form button');\n    if (\n      document.querySelector('#name').value !== '' &&\n      document.querySelector('#email').value !== '' &&\n      document.querySelector('#message').value !== ''\n    ) {\n      btn.style.backgroundColor = '#da7803';\n    } else {\n      btn.style.backgroundColor = '#101112';\n    }\n  });\n\n  return contact;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Contact/Contact.js?");

/***/ }),

/***/ "./src/pages/Contact/index.js":
/*!************************************!*\
  !*** ./src/pages/Contact/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ \"./src/pages/Contact/Contact.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Contact/index.js?");

/***/ }),

/***/ "./src/pages/Home/Home.js":
/*!********************************!*\
  !*** ./src/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero */ \"./src/components/Hero/index.js\");\n\n\nconst Home = function () {\n  const home = document.createElement('div');\n  home.id = 'home';\n  home.appendChild((0,_components_Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  return home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Home/Home.js?");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/pages/Home/Home.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Home/index.js?");

/***/ }),

/***/ "./src/pages/Menu/Menu.js":
/*!********************************!*\
  !*** ./src/pages/Menu/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/MenuCategory/MenuCategory */ \"./src/components/MenuCategory/MenuCategory.js\");\n/* harmony import */ var _assets_images_rumman_amin_banner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/rumman-amin-banner.jpg */ \"./src/assets/images/rumman-amin-banner.jpg\");\n/* harmony import */ var _assets_menu_appetizers_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/menu/appetizers.json */ \"./src/assets/menu/appetizers.json\");\n/* harmony import */ var _assets_images_louis_hansel_appetizers_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/louis-hansel-appetizers.jpg */ \"./src/assets/images/louis-hansel-appetizers.jpg\");\n/* harmony import */ var _assets_menu_salads_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/menu/salads.json */ \"./src/assets/menu/salads.json\");\n/* harmony import */ var _assets_images_jonathan_ybema_salad_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/jonathan-ybema-salad.jpg */ \"./src/assets/images/jonathan-ybema-salad.jpg\");\n/* harmony import */ var _assets_menu_soups_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/menu/soups.json */ \"./src/assets/menu/soups.json\");\n/* harmony import */ var _assets_images_max_griss_soup_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/max-griss-soup.jpg */ \"./src/assets/images/max-griss-soup.jpg\");\n/* harmony import */ var _assets_menu_specials_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/menu/specials.json */ \"./src/assets/menu/specials.json\");\n/* harmony import */ var _assets_images_davide_cantelli_special_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/davide-cantelli-special.jpg */ \"./src/assets/images/davide-cantelli-special.jpg\");\n/* harmony import */ var _assets_menu_beverages_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/menu/beverages.json */ \"./src/assets/menu/beverages.json\");\n/* harmony import */ var _assets_images_des_recits_beverages_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/des-recits-beverages.jpg */ \"./src/assets/images/des-recits-beverages.jpg\");\n/* harmony import */ var _assets_info_authors_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/info/authors.json */ \"./src/assets/info/authors.json\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Menu = function () {\n  const banner = new Image();\n  banner.src = _assets_images_rumman_amin_banner_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  banner.classList.add('menu-banner');\n\n  const bannerCredits = `\n      <span class=\"credits\">\n        Photo by\n        <a href=\"https://unsplash.com/photos/LNn6O_Mt730\" alt=\"Rumman Amin\" target=\"_blank\">\n          Rumman Amin</a>\n        on\n        <a href=\"https://unsplash.com\" alt=\"Unsplash\" target=\"_blank\">Unsplash</a>\n      </span>\n  `;\n\n  const bannerText = `\n    <h1>Check out our new menu!</h1>\n    <p>We've got a variety of options for you</p>\n  `;\n\n  const overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n  overlay.insertAdjacentHTML('beforeend', bannerText);\n\n  const figure = document.createElement('figure');\n  figure.classList.add('banner-wrapper');\n  figure.appendChild(banner);\n  figure.appendChild(overlay);\n  figure.insertAdjacentHTML('beforeend', bannerCredits);\n\n  const menuLeft = document.createElement('section');\n  const menuRight = document.createElement('section');\n  menuLeft.classList.add('menu-section');\n  menuRight.classList.add('menu-section');\n\n  menuLeft.appendChild(\n    (0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_assets_info_authors_json__WEBPACK_IMPORTED_MODULE_12__.appetizers, _assets_menu_appetizers_json__WEBPACK_IMPORTED_MODULE_2__, _assets_images_louis_hansel_appetizers_jpg__WEBPACK_IMPORTED_MODULE_3__)\n  );\n  menuLeft.appendChild((0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_assets_info_authors_json__WEBPACK_IMPORTED_MODULE_12__.salads, _assets_menu_salads_json__WEBPACK_IMPORTED_MODULE_4__, _assets_images_jonathan_ybema_salad_jpg__WEBPACK_IMPORTED_MODULE_5__));\n  menuLeft.appendChild((0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_assets_info_authors_json__WEBPACK_IMPORTED_MODULE_12__.soups, _assets_menu_soups_json__WEBPACK_IMPORTED_MODULE_6__, _assets_images_max_griss_soup_jpg__WEBPACK_IMPORTED_MODULE_7__));\n  menuRight.appendChild(\n    (0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_assets_info_authors_json__WEBPACK_IMPORTED_MODULE_12__.specials, _assets_menu_specials_json__WEBPACK_IMPORTED_MODULE_8__, _assets_images_davide_cantelli_special_jpg__WEBPACK_IMPORTED_MODULE_9__, 'menu-specials')\n  );\n  menuRight.appendChild(\n    (0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_assets_info_authors_json__WEBPACK_IMPORTED_MODULE_12__.beverages, _assets_menu_beverages_json__WEBPACK_IMPORTED_MODULE_10__, _assets_images_des_recits_beverages_jpg__WEBPACK_IMPORTED_MODULE_11__)\n  );\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n  menuContainer.appendChild(menuLeft);\n  menuContainer.appendChild(menuRight);\n\n  const menu = document.createElement('div');\n  menu.id = 'menu';\n  menu.appendChild(figure);\n  menu.appendChild(menuContainer);\n\n  ['mouseover', 'mouseleave'].forEach((event) =>\n    figure.addEventListener(\n      event,\n      function showCredits(e) {\n        const credits = document.querySelector('.banner-wrapper .credits');\n        if (e.type === 'mouseover') {\n          credits.classList.add('visible');\n        } else {\n          credits.classList.remove('visible');\n        }\n      },\n      false\n    )\n  );\n\n  return menu;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Menu/Menu.js?");

/***/ }),

/***/ "./src/pages/Menu/index.js":
/*!*********************************!*\
  !*** ./src/pages/Menu/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/pages/Menu/Menu.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Menu/index.js?");

/***/ }),

/***/ "./src/assets/github/GitHub-Mark-Light-120px-plus.png":
/*!************************************************************!*\
  !*** ./src/assets/github/GitHub-Mark-Light-120px-plus.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5de0643bf1bbf77878ff.png\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/github/GitHub-Mark-Light-120px-plus.png?");

/***/ }),

/***/ "./src/assets/images/caroline-attwood-hero.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/caroline-attwood-hero.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b762be3b6dc3417838f.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/caroline-attwood-hero.jpg?");

/***/ }),

/***/ "./src/assets/images/davide-cantelli-special.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/davide-cantelli-special.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5b3148ec82f6165f94c.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/davide-cantelli-special.jpg?");

/***/ }),

/***/ "./src/assets/images/des-recits-beverages.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/des-recits-beverages.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"167ca5dd17df8386ea95.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/des-recits-beverages.jpg?");

/***/ }),

/***/ "./src/assets/images/jonathan-ybema-salad.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/jonathan-ybema-salad.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"237a02163eb694699139.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/jonathan-ybema-salad.jpg?");

/***/ }),

/***/ "./src/assets/images/louis-hansel-appetizers.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/louis-hansel-appetizers.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9998a2577ddf587b91b1.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/louis-hansel-appetizers.jpg?");

/***/ }),

/***/ "./src/assets/images/max-griss-soup.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/max-griss-soup.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51d1109fef9939df481c.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/max-griss-soup.jpg?");

/***/ }),

/***/ "./src/assets/images/rumman-amin-banner.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/rumman-amin-banner.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a1d497bbebb34583a71.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/rumman-amin-banner.jpg?");

/***/ }),

/***/ "./src/assets/images/shawnanggg-restaurant.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/shawnanggg-restaurant.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"042cc1d536a0cd99d1d6.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/shawnanggg-restaurant.jpg?");

/***/ }),

/***/ "./src/assets/info/authors.json":
/*!**************************************!*\
  !*** ./src/assets/info/authors.json ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"appetizers\":{\"category\":\"Appetizers\",\"author\":\"Louis Hansel\",\"source\":\"https://unsplash.com/photos/wOISTbCpUCc\"},\"salads\":{\"category\":\"Salads\",\"author\":\"Jonathan Ybema\",\"source\":\"https://unsplash.com/photos/r8A-FTlLY3c\"},\"soups\":{\"category\":\"Soups\",\"author\":\"Max Griss\",\"source\":\"https://unsplash.com/photos/YpfRCe5lda0\"},\"specials\":{\"category\":\"Specials\",\"author\":\"Davide Cantelli\",\"source\":\"https://unsplash.com/photos/jpkfc5_d-DI\"},\"beverages\":{\"category\":\"Beverages\",\"author\":\"Des Récits\",\"source\":\"https://unsplash.com/photos/NaKwyyh849o\"}}');\n\n//# sourceURL=webpack://resturant-page/./src/assets/info/authors.json?");

/***/ }),

/***/ "./src/assets/menu/appetizers.json":
/*!*****************************************!*\
  !*** ./src/assets/menu/appetizers.json ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"appetizers\":[{\"name\":\"Buffalo Chicken Wings\",\"price\":\"$5\"},{\"name\":\"Mini Pizzas\",\"price\":\"$5\"},{\"name\":\"Orange-Glazed Meatballs\",\"price\":\"$7\"},{\"name\":\"Curried Coronation Chicken Salad\",\"price\":\"$7\"},{\"name\":\"Crab Cakes with Horseradish Cream\",\"price\":\"$10\"}]}');\n\n//# sourceURL=webpack://resturant-page/./src/assets/menu/appetizers.json?");

/***/ }),

/***/ "./src/assets/menu/beverages.json":
/*!****************************************!*\
  !*** ./src/assets/menu/beverages.json ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"beverages\":[{\"name\":\"Mineral Water (20oz)\",\"price\":\"$1.20\"},{\"name\":\"Coca-Cola (12oz)\",\"price\":\"$1.50\"},{\"name\":\"Espresso\",\"price\":\"$1.50\"},{\"name\":\"Capuccino\",\"price\":\"$2.00\"},{\"name\":\"Beer\",\"price\":\"$3.00\"},{\"name\":\"Sauvignon Blanc\",\"price\":\"$18\"},{\"name\":\"Cabernet Sauvignon\",\"price\":\"$20\"}]}');\n\n//# sourceURL=webpack://resturant-page/./src/assets/menu/beverages.json?");

/***/ }),

/***/ "./src/assets/menu/salads.json":
/*!*************************************!*\
  !*** ./src/assets/menu/salads.json ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"salads\":[{\"name\":\"Chicken Salad\",\"price\":\"$10\"},{\"name\":\"Shredded Brussels Sprout Salad\",\"price\":\"$12\"},{\"name\":\"Cherry Tomato Couscous Salad\",\"price\":\"$12\"},{\"name\":\"Citrus Shrimp Ceviche\",\"price\":\"$15\"},{\"name\":\"Rainbow Orzo Salad\",\"price\":\"$15\"}]}');\n\n//# sourceURL=webpack://resturant-page/./src/assets/menu/salads.json?");

/***/ }),

/***/ "./src/assets/menu/soups.json":
/*!************************************!*\
  !*** ./src/assets/menu/soups.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"soups\":[{\"name\":\"Pumpkin Tortilla Soup\",\"price\":\"$13\"},{\"name\":\"Chicken Soup with Pasta and Spinach\",\"price\":\"$14\"},{\"name\":\"Vegetarian Pho\",\"price\":\"$14\"},{\"name\":\"Tomatillo Zucchini White Bean Chili\",\"price\":\"$15\"},{\"name\":\"Thai Shrimp Soup\",\"price\":\"$16\"}]}');\n\n//# sourceURL=webpack://resturant-page/./src/assets/menu/soups.json?");

/***/ }),

/***/ "./src/assets/menu/specials.json":
/*!***************************************!*\
  !*** ./src/assets/menu/specials.json ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"specials\":[{\"name\":\"Spring Risotto\",\"price\":\"$20\"},{\"name\":\"Tomato and Roasted Garlic Pie\",\"price\":\"$25\"},{\"name\":\"Cashew Chicken Curry\",\"price\":\"$30\"},{\"name\":\"Spicy Lobster Pasta\",\"price\":\"$35\"},{\"name\":\"Grilled Scallops with Creamed Corn\",\"price\":\"$38\"},{\"name\":\"Sole Meuniere with Rice Pilaf\",\"price\":\"$45\"},{\"name\":\"Cedar-Plank Salmon\",\"price\":\"$50\"},{\"name\":\"Grilled Pork Spareribs With Soda Bottle Barbecue Sauce\",\"price\":\"$65\"},{\"name\":\"Pork Chops with Fig and Grape Agrodolce\",\"price\":\"$80\"}]}');\n\n//# sourceURL=webpack://resturant-page/./src/assets/menu/specials.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;