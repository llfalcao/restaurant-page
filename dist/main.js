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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/selawk.ttf */ \"./src/assets/fonts/selawk.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"ttf\\\");\\n  font-family: \\\"Selawik\\\";\\n  font-weight: 400;\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  text-decoration: none;\\n  border: 0;\\n  list-style: none;\\n  color: inherit;\\n  font-size: 16px;\\n  line-height: 1;\\n  font-family: \\\"Selawik\\\";\\n}\\n\\nbody {\\n  background-color: #eee;\\n  color: #101112;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Fira Sans\\\", \\\"Droid Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n\\n@media (min-width: 1200px) {\\n  #content {\\n    max-width: 1920px;\\n    margin: auto;\\n  }\\n}\\n\\n/* @font-face {\\n  src: url('./selawksl.ttf') format('ttf');\\n  font-family: 'Selawik';\\n  font-weight: 300;\\n}\\n\\n@font-face {\\n  src: url('./selawk.ttf') format('ttf');\\n  font-family: 'Selawik';\\n  font-weight: 400;\\n}\\n\\n@font-face {\\n  src: url('./selawksb.ttf') format('ttf');\\n  font-family: 'Selawik';\\n  font-weight: 600;\\n}\\n\\n@font-face {\\n  src: url('./selawkb.ttf') format('ttf');\\n  font-family: 'Selawik';\\n  font-weight: 800;\\n} */\\nh2 {\\n  font-weight: 400;\\n  margin-bottom: 1rem;\\n}\\n\\n.company {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n.company img {\\n  width: 80px;\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n.company span {\\n  font-size: 2rem;\\n  font-weight: 600;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n  margin-bottom: 0.25rem;\\n}\\n.navbar a {\\n  display: block;\\n  width: 150px;\\n  padding: 0.6rem 0;\\n  text-align: center;\\n  font-weight: 600;\\n  transition: 0.3s;\\n}\\n.navbar .active {\\n  color: #da7803;\\n}\\n.navbar .indicator {\\n  position: absolute;\\n  bottom: -0.25rem;\\n  width: 150px;\\n  height: 0.25rem;\\n  background-color: #da7803;\\n  transform: translateX(-150px);\\n  transition: 0.3s;\\n}\\n\\n.hero {\\n  width: 100%;\\n  height: 500px;\\n  overflow: hidden;\\n  object-fit: cover;\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.hero h1 {\\n  position: absolute;\\n  bottom: 50%;\\n  left: 0;\\n  transform: translateY(50%);\\n  color: #fff;\\n  text-shadow: 0 4px 4px #333;\\n  text-align: right;\\n  font-size: 4.5rem;\\n  font-weight: 600;\\n  max-width: 500px;\\n}\\n.hero span {\\n  position: absolute;\\n  bottom: 0.5rem;\\n  right: 0.5rem;\\n  color: #fff;\\n  font-weight: 600;\\n  text-shadow: 0 4px 4px #333;\\n}\\n\\n#home {\\n  padding: 1rem;\\n}\\n\\n#menu {\\n  padding: 2rem 2rem 2rem 3rem;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.menu-container {\\n  display: block;\\n  width: 50%;\\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 0px 4px rgba(0, 0, 0, 0.1);\\n  background-color: rgba(255, 255, 255, 0.05);\\n  border-radius: 0.75rem;\\n  height: max-content;\\n}\\n\\n.menu-container:last-child {\\n  margin-left: 2rem;\\n}\\n.menu-container:last-child .category:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.category {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n  position: relative;\\n  padding: 1rem 1rem 1.5rem;\\n  margin-bottom: 2rem;\\n  border-top: 1px dashed #45527b;\\n  border-top-right-radius: 0.75rem;\\n}\\n.category .image-wrapper {\\n  position: absolute;\\n  width: 40%;\\n  height: 150px;\\n  top: -1rem;\\n  left: -1rem;\\n  overflow: hidden;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\\n  border-radius: 0.25rem;\\n}\\n.category img {\\n  width: 150%;\\n  height: 100%;\\n  object-fit: cover;\\n  object-position: 50%;\\n}\\n.category .text-overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding: 1rem;\\n  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), transparent);\\n}\\n.category .text-overlay h2 {\\n  color: #fff;\\n  font-size: 1.8rem;\\n  font-weight: 600;\\n  text-shadow: 0 4px 4px #333, 0 1px 2px #111;\\n}\\n.category .dishes {\\n  width: 100%;\\n  margin-left: 40%;\\n}\\n.category .menu-item-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0.25rem 0.5rem 0.25rem 0;\\n  white-space: nowrap;\\n}\\n.category span {\\n  font-size: 0.9rem;\\n}\\n.category .separator {\\n  width: 100%;\\n  border-bottom: 2px dotted #101112;\\n  margin: 0 0.5rem;\\n  opacity: 0.2;\\n}\\n\\n.menu-specials {\\n  flex-direction: column;\\n  border: 0;\\n}\\n.menu-specials .image-wrapper {\\n  position: absolute;\\n  left: -1rem;\\n  width: calc(100% + 1rem);\\n  height: 150px;\\n}\\n.menu-specials img {\\n  margin: 0;\\n  width: 100%;\\n  height: 200%;\\n}\\n.menu-specials .dishes {\\n  padding-top: 140px;\\n  margin: 0;\\n  width: 100%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant-page/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Footer = function () {\n  const footer = document.createElement('div');\n  footer.id = 'footer';\n\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Footer/Footer.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = function () {\n  const header = document.createElement('div');\n  header.id = 'header';\n\n  const company = document.createElement('div');\n  company.classList.add('company');\n\n  const logo = new Image();\n  logo.src =\n    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZGE3ODAzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTIyLjg5OSwxOWgwLjIwMWMxLjYwMywwLDMuMTA5LTAuNjI0LDQuMjQyLTEuNzU3bDAuNTI0LTAuNTI0YzEuODc2LDIuNzQ1LDIuOTQxLDUuOTUyLDMuMDkzLDkuMzI1ICAgQzMxLjMwNSwyNi4wMiwzMS42NSwyNiwzMiwyNmMwLjMyMiwwLDAuNjQxLDAuMDIsMC45NiwwLjA0MWMtMC4xNTktMy45MDYtMS40MzMtNy42MDktMy42NjctMTAuNzQ4bDEuNDU4LTEuNDU4ICAgYzIuNDg4LDMuNjkxLDMuOTQ1LDcuOTY5LDQuMjAzLDEyLjQ3NmMwLjY5LDAuMTQxLDEuMzY4LDAuMzIzLDIuMDI0LDAuNTU3Yy0wLjE3MS01LjI0OC0xLjgzNC0xMC4yMzUtNC43ODQtMTQuNDc3TDMzLjU4NiwxMSAgIEwzMiw5LjQxNGwtMS4xNzIsMS4xNzJjLTAuNDI0LTAuNTEyLTAuODc0LTEuMDA2LTEuMzM4LTEuNDlMMzAuNTg2LDhMMjksNi40MTRMMjcuOTE0LDcuNUwyNi41LDYuMDg2TDI3LjU4Niw1TDI2LDMuNDE0ICAgTDI0LjkxNCw0LjVsLTMuMjA3LTMuMjA3bC0xLjQxNCwxLjQxNEwyMy41LDUuOTE0TDIxLjkxNCw3LjVsLTMuMjA3LTMuMjA3bC0xLjQxNCwxLjQxNEwyMC41LDguOTE0bC0wLjc0MywwLjc0MyAgIEMxOC42MjQsMTAuNzksMTgsMTIuMjk3LDE4LDEzLjg5OXYwLjIwMWMwLDIuMTM3LTAuODMyLDQuMTQ2LTIuMzQzLDUuNjU3TDMsMzIuNDE0djMuMTcybDE0LjI0My0xNC4yNDMgICBDMTguNzU0LDE5LjgzMiwyMC43NjMsMTksMjIuODk5LDE5eiBNMjMuNzA3LDE3LjcwN2wtMS40MTQtMS40MTRsMi43OTMtMi43OTNsMC42NDIsMC42NDJjMC4yNiwwLjI2LDAuNDk1LDAuNTM2LDAuNzM2LDAuODA4ICAgTDIzLjcwNywxNy43MDd6IE0yOS40LDEyLjAxNGwtMS41MjIsMS41MjJjLTAuMjQzLTAuMjcxLTAuNDc3LTAuNTQ5LTAuNzM2LTAuODA4TDI2LjUsMTIuMDg2bDEuNTY4LTEuNTY4ICAgQzI4LjUzMSwxMS4wMDQsMjguOTgsMTEuNDk5LDI5LjQsMTIuMDE0eiBNMjUuMDg2LDcuNUwyNi41LDguOTE0TDI0LjkxNCwxMC41TDIzLjUsOS4wODZMMjUuMDg2LDcuNXogTTIyLjA4NiwxMC41bDEuNDE0LDEuNDE0ICAgbC0yLjc5MywyLjc5M2wtMS40MTQtMS40MTRMMjIuMDg2LDEwLjV6Ij48L3BhdGg+PHBhdGggZD0iTTMwLjk0OSw1MUMzMC40MzUsNDQuMjk5LDI0LjgzLDM5LDE4LDM5UzUuNTY1LDQ0LjI5OSw1LjA1MSw1MWgyQzcuNTU4LDQ1LjQwMiwxMi4yNzIsNDEsMTgsNDFzMTAuNDQyLDQuNDAyLDEwLjk0OSwxMCAgIEgzMC45NDl6Ij48L3BhdGg+PHBhdGggZD0iTTUyLjkyLDUxaDIuMDIxYy0wLjQ5OS00LjQ5My00LjMxNi04LTguOTQxLThzLTguNDQyLDMuNTA3LTguOTQxLDhoMi4wMjFjMC40ODgtMy4zODcsMy40MDEtNiw2LjkyLTYgICBTNTIuNDMyLDQ3LjYxMyw1Mi45Miw1MXoiPjwvcGF0aD48cGF0aCBkPSJNMTMuMTAxLDUxaDkuNzk4Yy0wLjQ2NS0yLjI3OS0yLjQ4NC00LTQuODk5LTRTMTMuNTY2LDQ4LjcyMSwxMy4xMDEsNTF6Ij48L3BhdGg+PHBhdGggZD0iTTMzLjA1MSw1MWgyQzM1LjU1OCw0NS40MDIsNDAuMjcyLDQxLDQ2LDQxczEwLjQ0Miw0LjQwMiwxMC45NDksMTBoMkM1OC40MzUsNDQuMjk5LDUyLjgzLDM5LDQ2LDM5ICAgUzMzLjU2NSw0NC4yOTksMzMuMDUxLDUxeiI+PC9wYXRoPjxwYXRoIGQ9Ik00MS4xMDEsNTFoOS43OThjLTAuNDY1LTIuMjc5LTIuNDg0LTQtNC44OTktNFM0MS41NjYsNDguNzIxLDQxLjEwMSw1MXoiPjwvcGF0aD48cGF0aCBkPSJNMjQuOTIsNTFoMi4wMjFjLTAuNDk5LTQuNDkzLTQuMzE2LTgtOC45NDEtOHMtOC40NDIsMy41MDctOC45NDEsOGgyLjAyMWMwLjQ4OC0zLjM4NywzLjQwMS02LDYuOTItNiAgIFMyNC40MzIsNDcuNjEzLDI0LjkyLDUxeiI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjEwMSw1M0MzLjU2NSw1NS4yNzksNS41ODUsNTcsOCw1N2g0OGMyLjQxNSwwLDQuNDM1LTEuNzIxLDQuODk5LTRIMy4xMDF6Ij48L3BhdGg+PHJlY3QgeD0iMTMiIHk9IjU5IiB3aWR0aD0iMzgiIGhlaWdodD0iMiI+PC9yZWN0PjxwYXRoIGQ9Ik0xOS42LDM3LjA4OGMwLjY4MSwwLjA3MywxLjM0NCwwLjIwNSwxLjk5NSwwLjM2NkMyMy4wOTMsMzMuMDY1LDI3LjI2MiwzMCwzMiwzMHM4LjkwNywzLjA2NSwxMC40MDUsNy40NTQgICBjMC42NTEtMC4xNjEsMS4zMTQtMC4yOTMsMS45OTUtMC4zNjZDNDIuNzE1LDMxLjc1OSwzNy42NzUsMjgsMzIsMjhTMjEuMjg1LDMxLjc1OSwxOS42LDM3LjA4OHoiPjwvcGF0aD48cGF0aCBkPSJNMzIsMzRjMy4xMzUsMCw1Ljc5NSwyLjA3Miw2LjY4NCw0LjkxOGMwLjU4Mi0wLjMyNywxLjE4OS0wLjYxMSwxLjgxNS0wLjg1OUMzOS4yNjMsMzQuNDg5LDM1Ljg2MywzMiwzMiwzMiAgIHMtNy4yNjMsMi40ODktOC40OTksNi4wNTljMC42MjYsMC4yNDgsMS4yMzMsMC41MzIsMS44MTUsMC44NTlDMjYuMjA1LDM2LjA3MiwyOC44NjUsMzQsMzIsMzR6Ij48L3BhdGg+PHBhdGggZD0iTTM2LjkwOSw0MC4wOTdDMzYuNDgxLDM3Ljc3MSwzNC40NDgsMzYsMzIsMzZzLTQuNDgxLDEuNzcxLTQuOTA5LDQuMDk3YzIuMTkzLDEuNjc5LDMuOTA2LDMuOTQzLDQuOTA5LDYuNTYzICAgQzMzLjAwMyw0NC4wMzksMzQuNzE2LDQxLjc3NiwzNi45MDksNDAuMDk3eiI+PC9wYXRoPjwvZz48L3N2Zz4=';\n\n  const companyName = document.createElement('span');\n  companyName.innerText = 'Plateholder';\n\n  company.appendChild(logo);\n  company.appendChild(companyName);\n\n  const navbar = `\n    <ul class=\"navbar\">\n      <div class=\"indicator\"></div>\n      <li><a class=\"active\" href=\"#\" data-page=\"home\" alt=\"Home\">Home</a></li>\n      <li><a href=\"#\" data-page=\"menu\" alt=\"Menu\">Menu</a></li>\n      <li><a href=\"#\" data-page=\"contact\" alt=\"Contact\">Contact</a></li>\n    </ul>\n  `;\n\n  header.appendChild(company);\n  header.insertAdjacentHTML('beforeend', navbar);\n\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Header/Header.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_louis_hansel_beef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/louis-hansel-beef.jpg */ \"./src/assets/images/louis-hansel-beef.jpg\");\n\n\nconst Hero = function () {\n  const hero = document.createElement('div');\n  hero.classList.add('hero');\n\n  const bgImage = new Image();\n  bgImage.src = _assets_images_louis_hansel_beef_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  const tagline = document.createElement('h1');\n  tagline.textContent = 'Cooked to perfection';\n\n  const imageCredits = `\n    <span>\n      Photo by\n      <a href=\"https://unsplash.com/photos/oyUqUV1Q0Zg\" alt=\"Louis Hansen\" target=\"_blank\">\n        Louis Hansen</a>\n      on\n      <a href=\"https://unsplash.com\" alt=\"Unsplash\" target=\"_blank\">Unsplash</a>\n    </span>\n\n`;\n\n  hero.appendChild(bgImage);\n  hero.appendChild(tagline);\n  hero.insertAdjacentHTML('beforeend', imageCredits);\n  return hero;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/Hero/Hero.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Creates category container with desired class(es)\nconst MenuCategory = function (title, type, image, classNames) {\n  const category = document.createElement('div');\n  category.classList.add('category');\n  if (classNames != null) {\n    if (typeof classNames === 'object') {\n      category.classList.add(...classNames);\n    } else {\n      category.classList.add(classNames);\n    }\n  }\n\n  const categoryImage = new Image();\n  categoryImage.src = image;\n\n  const imageWrapper = document.createElement('div');\n  imageWrapper.classList.add('image-wrapper');\n  imageWrapper.appendChild(categoryImage);\n\n  const categoryTitle = document.createElement('h2');\n  categoryTitle.innerText = title;\n\n  const overlay = document.createElement('div');\n  overlay.classList.add('text-overlay');\n  overlay.appendChild(categoryTitle);\n  imageWrapper.appendChild(overlay);\n\n  const dishes = document.createElement('div');\n  dishes.classList.add('dishes');\n\n  const items = type[Object.keys(type)[0]];\n  for (let dish in items) {\n    const name = document.createElement('span');\n    name.innerText = items[dish].name;\n\n    const separator = document.createElement('span');\n    separator.classList.add('separator');\n\n    const price = document.createElement('span');\n    price.innerText = items[dish].price;\n\n    const menuItemWrapper = document.createElement('div');\n    menuItemWrapper.classList.add('menu-item-wrapper');\n    menuItemWrapper.appendChild(name);\n    menuItemWrapper.appendChild(separator);\n    menuItemWrapper.appendChild(price);\n    dishes.appendChild(menuItemWrapper);\n  }\n\n  category.appendChild(imageWrapper);\n  category.appendChild(dishes);\n\n  return category;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuCategory);\n\n\n//# sourceURL=webpack://resturant-page/./src/components/MenuCategory/MenuCategory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home/index.js\");\n/* harmony import */ var _pages_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Menu */ \"./src/pages/Menu/index.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Contact */ \"./src/pages/Contact/index.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer/index.js\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\ncontent.appendChild((0,_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild((0,_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.appendChild((0,_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n// Load section according to the selected tab\nfunction loadSection(navbarLink) {\n  const header = document.querySelector('#header');\n  const indicator = document.querySelector('.indicator');\n\n  if (navbarLink === 'Menu') {\n    header.insertAdjacentElement('afterend', (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    indicator.style.transform = 'translateX(0px)';\n  } else if (navbarLink === 'Contact') {\n    header.insertAdjacentElement('afterend', (0,_pages_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    indicator.style.transform = 'translateX(150px)';\n  } else if (navbarLink === 'Home') {\n    header.insertAdjacentElement('afterend', (0,_pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    indicator.style.transform = 'translateX(-150px)';\n  }\n}\n\n// Toggle navbar bottom border and remove the\n// current section before loading the selected one\nconst navItem = document.querySelectorAll('#header a');\nnavItem.forEach((item) => {\n  item.addEventListener('click', function () {\n    let currentTab = document.querySelectorAll('.active');\n    let currentSection = document.querySelector(\n      '#' + currentTab[0].dataset.page\n    );\n    currentTab[0].classList.remove('active');\n    if (currentSection !== null) {\n      currentSection.remove();\n    }\n    item.classList.add('active');\n    loadSection(item.innerText);\n  });\n});\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/Contact/Contact.js":
/*!**************************************!*\
  !*** ./src/pages/Contact/Contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Contact = function () {\n  const contact = document.createElement('div');\n  contact.id = 'contact';\n\n  return contact;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Contact/Contact.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hero */ \"./src/components/Hero/index.js\");\n\n\nconst Home = function () {\n  const home = document.createElement('div');\n  home.id = 'home';\n\n  home.appendChild((0,_components_Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  return home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Home/Home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/MenuCategory/MenuCategory */ \"./src/components/MenuCategory/MenuCategory.js\");\n/* harmony import */ var _assets_menu_appetizers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/menu/appetizers.json */ \"./src/assets/menu/appetizers.json\");\n/* harmony import */ var _assets_images_louis_hansel_appetizers_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/louis-hansel-appetizers.jpg */ \"./src/assets/images/louis-hansel-appetizers.jpg\");\n/* harmony import */ var _assets_menu_salads_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/menu/salads.json */ \"./src/assets/menu/salads.json\");\n/* harmony import */ var _assets_images_jonathan_ybema_salad_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/jonathan-ybema-salad.jpg */ \"./src/assets/images/jonathan-ybema-salad.jpg\");\n/* harmony import */ var _assets_menu_soups_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/menu/soups.json */ \"./src/assets/menu/soups.json\");\n/* harmony import */ var _assets_images_max_griss_soup_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/max-griss-soup.jpg */ \"./src/assets/images/max-griss-soup.jpg\");\n/* harmony import */ var _assets_menu_specials_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/menu/specials.json */ \"./src/assets/menu/specials.json\");\n/* harmony import */ var _assets_images_davide_cantelli_special_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/davide-cantelli-special.jpg */ \"./src/assets/images/davide-cantelli-special.jpg\");\n/* harmony import */ var _assets_menu_beverages_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/menu/beverages.json */ \"./src/assets/menu/beverages.json\");\n/* harmony import */ var _assets_images_des_recits_beverages_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/des-recits-beverages.jpg */ \"./src/assets/images/des-recits-beverages.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst Menu = function () {\n  const menu = document.createElement('div');\n  menu.id = 'menu';\n\n  const leftContainer = document.createElement('section');\n  const rightContainer = document.createElement('section');\n  leftContainer.classList.add('menu-container');\n  rightContainer.classList.add('menu-container');\n\n  leftContainer.appendChild(\n    (0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Appetizers', _assets_menu_appetizers_json__WEBPACK_IMPORTED_MODULE_1__, _assets_images_louis_hansel_appetizers_jpg__WEBPACK_IMPORTED_MODULE_2__)\n  );\n  leftContainer.appendChild((0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Salads', _assets_menu_salads_json__WEBPACK_IMPORTED_MODULE_3__, _assets_images_jonathan_ybema_salad_jpg__WEBPACK_IMPORTED_MODULE_4__));\n  leftContainer.appendChild((0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Soups', _assets_menu_soups_json__WEBPACK_IMPORTED_MODULE_5__, _assets_images_max_griss_soup_jpg__WEBPACK_IMPORTED_MODULE_6__));\n  rightContainer.appendChild(\n    (0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Specials', _assets_menu_specials_json__WEBPACK_IMPORTED_MODULE_7__, _assets_images_davide_cantelli_special_jpg__WEBPACK_IMPORTED_MODULE_8__, 'menu-specials')\n  );\n  rightContainer.appendChild(\n    (0,_components_MenuCategory_MenuCategory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Beverages', _assets_menu_beverages_json__WEBPACK_IMPORTED_MODULE_9__, _assets_images_des_recits_beverages_jpg__WEBPACK_IMPORTED_MODULE_10__)\n  );\n\n  menu.appendChild(leftContainer);\n  menu.appendChild(rightContainer);\n  return menu;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Menu/Menu.js?");

/***/ }),

/***/ "./src/pages/Menu/index.js":
/*!*********************************!*\
  !*** ./src/pages/Menu/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/pages/Menu/Menu.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://resturant-page/./src/pages/Menu/index.js?");

/***/ }),

/***/ "./src/assets/fonts/selawk.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/selawk.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9e4c87103db928d9a27.ttf\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/fonts/selawk.ttf?");

/***/ }),

/***/ "./src/assets/images/davide-cantelli-special.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/davide-cantelli-special.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50119f82121b40a44161.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/davide-cantelli-special.jpg?");

/***/ }),

/***/ "./src/assets/images/des-recits-beverages.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/des-recits-beverages.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a93861147983a89af8f2.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/des-recits-beverages.jpg?");

/***/ }),

/***/ "./src/assets/images/jonathan-ybema-salad.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/jonathan-ybema-salad.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d543ab036e2e5d6fd26c.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/jonathan-ybema-salad.jpg?");

/***/ }),

/***/ "./src/assets/images/louis-hansel-appetizers.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/louis-hansel-appetizers.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b96fe50593a7bf288f1.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/louis-hansel-appetizers.jpg?");

/***/ }),

/***/ "./src/assets/images/louis-hansel-beef.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/louis-hansel-beef.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e334119057751db21a8.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/louis-hansel-beef.jpg?");

/***/ }),

/***/ "./src/assets/images/max-griss-soup.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/max-griss-soup.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c6693055609b40c44922.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/assets/images/max-griss-soup.jpg?");

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