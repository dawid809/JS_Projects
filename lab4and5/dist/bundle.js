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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Lab4and5/styles/styles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Lab4and5/styles/styles.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --background-color: #F0F0F0;\\n  --primary-color: #0d1118;\\n  --primary-color-hover: red;\\n  --secondary-color: red;\\n  --border-color: #0d1118;\\n  --button-color: #F0F0F0;\\n  --button-background-color:#0d1118;\\n  --button-color-hover:white;\\n  --button-background-color-hover: #2b323d;\\n  --tile-border:#9a9a9a;\\n  --tile-hover:rgb(231, 229, 229);\\n}\\n\\n[data-theme=dark] {\\n  --background-color: #0d1118;\\n  --primary-color: #F0F0F0;\\n  --primary-color-hover: blue;\\n  --secondary-color: red;\\n  --border-color: #c9d1d8;\\n  --button-color: #0d1118;\\n  --button-background-color:#F0F0F0;\\n  --button-color-hover:#2b323d;\\n  --button-background-color-hover:white;\\n  --tile-border:#5c6470;\\n  --tile-hover:#1d2738;\\n}\\n\\n:root {\\n  --background-color: #F0F0F0;\\n  --primary-color: #0d1118;\\n  --primary-color-hover: red;\\n  --secondary-color: red;\\n  --border-color: #0d1118;\\n  --button-color: #F0F0F0;\\n  --button-background-color:#0d1118;\\n  --button-color-hover:white;\\n  --button-background-color-hover: #2b323d;\\n  --tile-border:#9a9a9a;\\n  --tile-hover:rgb(231, 229, 229);\\n}\\n\\n[data-theme=dark] {\\n  --background-color: #0d1118;\\n  --primary-color: #F0F0F0;\\n  --primary-color-hover: blue;\\n  --secondary-color: red;\\n  --border-color: #c9d1d8;\\n  --button-color: #0d1118;\\n  --button-background-color:#F0F0F0;\\n  --button-color-hover:#2b323d;\\n  --button-background-color-hover:white;\\n  --tile-border:#5c6470;\\n  --tile-hover:#1d2738;\\n}\\n\\n.menu {\\n  width: 80%;\\n  display: flex;\\n  position: relative;\\n  flex-direction: column;\\n  display: column;\\n  border: 2px solid var(--border-color);\\n  padding: 10px;\\n  margin: 15px;\\n}\\n.menu h1 {\\n  text-align: center;\\n  font-size: 60px;\\n}\\n.menu li {\\n  text-transform: uppercase;\\n  font-size: 28px;\\n}\\n.menu li:hover {\\n  color: var(--primary-color-hover);\\n  cursor: pointer;\\n}\\n\\n:root {\\n  --background-color: #F0F0F0;\\n  --primary-color: #0d1118;\\n  --primary-color-hover: red;\\n  --secondary-color: red;\\n  --border-color: #0d1118;\\n  --button-color: #F0F0F0;\\n  --button-background-color:#0d1118;\\n  --button-color-hover:white;\\n  --button-background-color-hover: #2b323d;\\n  --tile-border:#9a9a9a;\\n  --tile-hover:rgb(231, 229, 229);\\n}\\n\\n[data-theme=dark] {\\n  --background-color: #0d1118;\\n  --primary-color: #F0F0F0;\\n  --primary-color-hover: blue;\\n  --secondary-color: red;\\n  --border-color: #c9d1d8;\\n  --button-color: #0d1118;\\n  --button-background-color:#F0F0F0;\\n  --button-color-hover:#2b323d;\\n  --button-background-color-hover:white;\\n  --tile-border:#5c6470;\\n  --tile-hover:#1d2738;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Lucida Sans\\\", \\\"Lucida Sans Regular\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Geneva, Verdana, sans-serif;\\n  margin: 0;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 50px;\\n  border: 1px solid var(--border-color);\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding-bottom: 50px;\\n}\\n.header h1 {\\n  font-size: 40px;\\n  margin-bottom: 20px;\\n  border-bottom: 1px solid var(--border-color);\\n}\\n.header h1:before {\\n  font-size: 44px;\\n  content: \\\"oOo \\\";\\n  color: #d9ad7c;\\n}\\n.header h1:after {\\n  font-size: 44px;\\n  content: \\\" xXx\\\";\\n  color: #87bdd8;\\n}\\n\\n.startButton {\\n  display: flex;\\n  width: 180px;\\n  height: 50px;\\n  font-size: 24px;\\n  font-weight: bold;\\n  padding: 10px;\\n  color: var(--button-color);\\n  background-color: var(--button-background-color);\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 50px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.startButton:hover {\\n  background: var(--button-background-color-hover);\\n  color: var(--button-color-hover);\\n}\\n\\n.gameWrapper {\\n  display: flex;\\n  flex-direction: column;\\n  width: 500px;\\n  height: 500px;\\n}\\n\\n.gameHeader {\\n  display: flex;\\n  color: #9a9a9a;\\n  font-size: 28px;\\n  flex-direction: row;\\n}\\n\\n.gameHeader .playerX {\\n  flex: 1;\\n  border-bottom: 5px solid lightgray;\\n  padding-bottom: 5px;\\n}\\n\\n.gameHeader .playerO {\\n  flex: 1;\\n  border-bottom: 5px solid lightgray;\\n  padding-bottom: 5px;\\n}\\n\\n.playerX.active {\\n  color: #87bdd8;\\n  border-color: #87bdd8;\\n}\\n\\n.playerO.active {\\n  color: #d9ad7c;\\n  border-color: #d9ad7c;\\n}\\n\\n.board {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  grid-gap: 0px;\\n  flex-grow: 1;\\n  padding: 10px;\\n  min-height: 500px;\\n}\\n\\n.tile {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 66px;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\n.tile:not(:nth-child(3n)) {\\n  border-right: 3px solid var(--tile-border);\\n}\\n\\n.tile:not(:nth-last-child(-n+3)) {\\n  border-bottom: 3px solid var(--tile-border);\\n}\\n\\n.tile:hover {\\n  background: var(--tile-hover);\\n}\\n\\n.tileX {\\n  color: #87bdd8;\\n}\\n\\n.tileO {\\n  color: #d9ad7c;\\n}\\n\\n.tileWinner span {\\n  color: #588c7e;\\n}\\n\\n.winner {\\n  font-size: 44px;\\n  width: 110%;\\n  align-self: center;\\n  color: #588c7e;\\n  padding-bottom: 20px;\\n  margin-top: 20px;\\n}\\n\\nbody {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 0 auto;\\n  background-color: var(--background-color);\\n  color: var(--primary-color);\\n}\\n\\n.switch-wrapper {\\n  display: flex;\\n  position: absolute;\\n  top: 10px;\\n  right: 10px;\\n}\\n\\n.switcher {\\n  position: relative;\\n  display: flex;\\n  width: 60px;\\n  height: 60px;\\n  color: var(--button-color);\\n  background-color: var(--button-background-color);\\n  border-radius: 50%;\\n  outline: none;\\n  border: none;\\n}\\n.switcher img {\\n  display: flex;\\n  align-self: center;\\n  width: 80%;\\n  height: 80%;\\n  position: absolute;\\n}\\n.switcher:hover {\\n  background-color: var(--button-background-color-hover);\\n  color: var(--button-color-hover);\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Lab4and5/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./Lab4and5/styles/styles.scss":
/*!*************************************!*\
  !*** ./Lab4and5/styles/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Lab4and5/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Lab4and5/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./Lab4and5/battleships/batttleships.ts":
/*!**********************************************!*\
  !*** ./Lab4and5/battleships/batttleships.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BattleShips = void 0;\r\nvar log_1 = __webpack_require__(/*! ../decorators/log */ \"./Lab4and5/decorators/log.ts\");\r\nvar count_1 = __webpack_require__(/*! ../decorators/count */ \"./Lab4and5/decorators/count.ts\");\r\nvar disable_1 = __webpack_require__(/*! ../decorators/disable */ \"./Lab4and5/decorators/disable.ts\");\r\n// @isDisabled(true)\r\nvar BattleShips = /** @class */ (function () {\r\n    function BattleShips() {\r\n        this.count = 0;\r\n        this.name = 'Statki';\r\n    }\r\n    BattleShips.prototype.getGameElement = function () {\r\n        var div = document.createElement('div');\r\n        div.appendChild(document.createTextNode(\"Hello BattleShips\"));\r\n        return div;\r\n    };\r\n    __decorate([\r\n        count_1.default,\r\n        log_1.default\r\n    ], BattleShips.prototype, \"getGameElement\", null);\r\n    BattleShips = __decorate([\r\n        disable_1.disable\r\n    ], BattleShips);\r\n    return BattleShips;\r\n}());\r\nexports.BattleShips = BattleShips;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/battleships/batttleships.ts?");

/***/ }),

/***/ "./Lab4and5/decorators/count.ts":
/*!**************************************!*\
  !*** ./Lab4and5/decorators/count.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction countGameStart(target, propKey, descriptor) {\r\n    var originalFn = target[propKey];\r\n    descriptor.value = function (param) {\r\n        this.count++;\r\n        console.log(\"Wywo\\u0142a\\u0142e\\u015B gr\\u0119: \" + this.name + \" \" + this.count + \" razy!\");\r\n        return originalFn.call(this, param);\r\n    };\r\n}\r\nexports.default = countGameStart;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/decorators/count.ts?");

/***/ }),

/***/ "./Lab4and5/decorators/disable.ts":
/*!****************************************!*\
  !*** ./Lab4and5/decorators/disable.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n// export  function isDisabled(isDisabled: boolean, disableFunction: Function){\r\n//     if (isDisabled == true) {\r\n//         disableFunction.prototype.available=false;\r\n//     }\r\n//     else  disableFunction.prototype.available=true;\r\n// }\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.disable = void 0;\r\nfunction disable(disableFunction) {\r\n    // disableFunction.prototype.available=false;\r\n    // Object.freeze(disableFunction);\r\n    // Object.freeze(disableFunction.prototype);\r\n    disableFunction.prototype.available = true;\r\n}\r\nexports.disable = disable;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/decorators/disable.ts?");

/***/ }),

/***/ "./Lab4and5/decorators/log.ts":
/*!************************************!*\
  !*** ./Lab4and5/decorators/log.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction logCallGameStart(target, propKey, descriptor) {\r\n    var originalFn = target[propKey];\r\n    descriptor.value = function (param) {\r\n        console.log(\"Wywo\\u0142a\\u0142e\\u015B nast\\u0119puj\\u0105c\\u0105 gr\\u0119: \" + this.name);\r\n        return originalFn.call(this, param);\r\n    };\r\n}\r\nexports.default = logCallGameStart;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/decorators/log.ts?");

/***/ }),

/***/ "./Lab4and5/games.enum.ts":
/*!********************************!*\
  !*** ./Lab4and5/games.enum.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./Lab4and5/games.enum.ts?");

/***/ }),

/***/ "./Lab4and5/src/index.ts":
/*!*******************************!*\
  !*** ./Lab4and5/src/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar games_enum_1 = __webpack_require__(/*! ../games.enum */ \"./Lab4and5/games.enum.ts\");\r\nvar tictactoe_1 = __webpack_require__(/*! ../tictactoe/tictactoe */ \"./Lab4and5/tictactoe/tictactoe.ts\");\r\nvar batttleships_1 = __webpack_require__(/*! ../battleships/batttleships */ \"./Lab4and5/battleships/batttleships.ts\");\r\nvar switch_1 = __webpack_require__(/*! ../switch */ \"./Lab4and5/switch.ts\");\r\n__webpack_require__(/*! ../styles/styles.scss */ \"./Lab4and5/styles/styles.scss\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.init();\r\n    }\r\n    App.prototype.init = function () {\r\n        var mainContainer = (document.createElement('div'));\r\n        mainContainer.className = 'main';\r\n        var menuContainer = (document.createElement('div'));\r\n        menuContainer.className = 'menu';\r\n        var gameContainer = (document.createElement('div'));\r\n        gameContainer.className = 'game';\r\n        var list = document.createElement('ul');\r\n        var menuHeader = (document.createElement('div'));\r\n        menuHeader.innerHTML = \"<h1>Dost\\u0119pne gry</h1>\";\r\n        var _loop_1 = function (games) {\r\n            if (isNaN(Number(games)))\r\n                return \"continue\";\r\n            var game = gameFactory.getGame(Number(games));\r\n            // let p = document.createElement('p');\r\n            var item = document.createElement('li');\r\n            item.appendChild(document.createTextNode(game.name));\r\n            // list.innerHTML += (`<h1>${game.name}</h1>`)\r\n            item.addEventListener('click', function (event) {\r\n                // console.log(event.target);\r\n                gameContainer.innerHTML = \"\";\r\n                gameContainer.appendChild(game.getGameElement());\r\n            });\r\n            list.appendChild(item);\r\n        };\r\n        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\n        // 4 iteracja po wszystkich enumach\r\n        for (var games in games_enum_1.Games) {\r\n            _loop_1(games);\r\n        }\r\n        menuContainer.appendChild(menuHeader);\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(mainContainer);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n        new switch_1.default();\r\n    };\r\n    return App;\r\n}());\r\nvar GameFactory = /** @class */ (function () {\r\n    function GameFactory() {\r\n    }\r\n    GameFactory.prototype.getGame = function (game) {\r\n        switch (game) {\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new tictactoe_1.TicTacToe();\r\n            case games_enum_1.Games.BattleShips:\r\n                return new batttleships_1.BattleShips();\r\n            default:\r\n                console.warn(\"Game not exist\");\r\n                break;\r\n        }\r\n    };\r\n    return GameFactory;\r\n}());\r\nvar gameFactory = new GameFactory();\r\nnew App();\r\n\n\n//# sourceURL=webpack:///./Lab4and5/src/index.ts?");

/***/ }),

/***/ "./Lab4and5/switch.ts":
/*!****************************!*\
  !*** ./Lab4and5/switch.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Switch = /** @class */ (function () {\r\n    function Switch() {\r\n        this.init();\r\n    }\r\n    Switch.prototype.init = function () {\r\n        var switchWrapper = document.createElement('div');\r\n        switchWrapper.className = 'switch-wrapper';\r\n        var switcher = (document.createElement('button'));\r\n        switcher.className = 'switcher';\r\n        var img = document.createElement('img');\r\n        img.src = '/lab4and5/icons/sun.png';\r\n        switcher.addEventListener('click', function () {\r\n            if (document.body.hasAttribute('data-theme')) {\r\n                document.body.removeAttribute('data-theme');\r\n                img.src = '/lab4and5/icons/night.png';\r\n            }\r\n            else {\r\n                document.body.setAttribute('data-theme', 'dark');\r\n                img.src = '/lab4and5/icons/sun.png';\r\n            }\r\n        });\r\n        switcher.appendChild(img);\r\n        switchWrapper.appendChild(switcher);\r\n        var menuContainer = document.querySelector('.menu');\r\n        menuContainer.appendChild(switchWrapper);\r\n    };\r\n    return Switch;\r\n}());\r\nexports.default = Switch;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/switch.ts?");

/***/ }),

/***/ "./Lab4and5/tictactoe/gameLogic.ts":
/*!*****************************************!*\
  !*** ./Lab4and5/tictactoe/gameLogic.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameLogic = /** @class */ (function () {\r\n    function GameLogic() {\r\n        this.turn = \"X\";\r\n        // this.board = new Array(9).fill(null);\r\n        this.board = new Array(9);\r\n    }\r\n    GameLogic.prototype.nextTurn = function () {\r\n        if (this.turn == \"X\") {\r\n            this.turn = \"O\";\r\n        }\r\n        else {\r\n            this.turn = \"X\";\r\n        }\r\n    };\r\n    GameLogic.prototype.makeMove = function (i) {\r\n        if (this.endOfGame()) {\r\n            return;\r\n        }\r\n        if (this.board[i]) {\r\n            return;\r\n        }\r\n        this.board[i] = this.turn;\r\n        var winningCombination = this.findWinCondition();\r\n        if (!winningCombination) {\r\n            this.nextTurn();\r\n        }\r\n    };\r\n    GameLogic.prototype.findWinCondition = function () {\r\n        var winCombinations = [\r\n            [0, 1, 2],\r\n            [3, 4, 5],\r\n            [6, 7, 8],\r\n            [0, 3, 6],\r\n            [1, 4, 7],\r\n            [2, 5, 8],\r\n            [0, 4, 8],\r\n            [6, 4, 2],\r\n        ];\r\n        for (var _i = 0, winCombinations_1 = winCombinations; _i < winCombinations_1.length; _i++) {\r\n            var combination = winCombinations_1[_i];\r\n            var a = combination[0], b = combination[1], c = combination[2];\r\n            if (this.board[a] &&\r\n                this.board[a] === this.board[b] &&\r\n                this.board[a] === this.board[c]) {\r\n                return combination;\r\n            }\r\n        }\r\n        return null;\r\n    };\r\n    GameLogic.prototype.endOfGame = function () {\r\n        var winningCombination = this.findWinCondition();\r\n        if (winningCombination) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    return GameLogic;\r\n}());\r\nexports.default = GameLogic;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/tictactoe/gameLogic.ts?");

/***/ }),

/***/ "./Lab4and5/tictactoe/gameView.ts":
/*!****************************************!*\
  !*** ./Lab4and5/tictactoe/gameView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameView = /** @class */ (function () {\r\n    function GameView() {\r\n    }\r\n    GameView.prototype.updateBoard = function (game) {\r\n        this.updateTurn(game);\r\n        var winCombination = game.findWinCondition();\r\n        for (var i = 0; i < game.board.length; i++) {\r\n            var tile = document.querySelector(\".tile[tabindex=\\\"\" + i + \"\\\"]\");\r\n            tile.textContent = game.board[i];\r\n            tile.classList.remove(\"tileWinner\");\r\n            var tileType = game.board[i] == \"X\" ? \"tileX\" : \"tileO\";\r\n            tile.innerHTML = \"<span class=\\\"\" + tileType + \"\\\">\" + (game.board[i] ? game.board[i] : \"\") + \"</span>\";\r\n            if (winCombination && winCombination.includes(i)) {\r\n                tile.classList.add(\"tileWinner\");\r\n                var winSign = document.querySelector(\".winner\");\r\n                winSign.innerHTML = \"The winner is player \" + game.turn + \"!\";\r\n            }\r\n        }\r\n    };\r\n    GameView.prototype.updateTurn = function (game) {\r\n        var playerX = document.querySelector(\".playerX\");\r\n        var playerO = document.querySelector(\".playerO\");\r\n        playerX === null || playerX === void 0 ? void 0 : playerX.classList.remove(\"active\");\r\n        playerO === null || playerO === void 0 ? void 0 : playerO.classList.remove(\"active\");\r\n        if (game.turn == \"X\") {\r\n            playerX === null || playerX === void 0 ? void 0 : playerX.classList.add(\"active\");\r\n        }\r\n        else {\r\n            playerO === null || playerO === void 0 ? void 0 : playerO.classList.add(\"active\");\r\n        }\r\n    };\r\n    return GameView;\r\n}());\r\nexports.default = GameView;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/tictactoe/gameView.ts?");

/***/ }),

/***/ "./Lab4and5/tictactoe/tictactoe.ts":
/*!*****************************************!*\
  !*** ./Lab4and5/tictactoe/tictactoe.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar gameView_1 = __webpack_require__(/*! ./gameView */ \"./Lab4and5/tictactoe/gameView.ts\");\r\nvar gameLogic_1 = __webpack_require__(/*! ./gameLogic */ \"./Lab4and5/tictactoe/gameLogic.ts\");\r\nvar log_1 = __webpack_require__(/*! ../decorators/log */ \"./Lab4and5/decorators/log.ts\");\r\nvar disable_1 = __webpack_require__(/*! ../decorators/disable */ \"./Lab4and5/decorators/disable.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n    }\r\n    TicTacToe_1 = TicTacToe;\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var _this = this;\r\n        var mainDiv = document.createElement('div');\r\n        // Game Wrapper\r\n        var wrapper = document.createElement(\"div\");\r\n        wrapper.className = \"wrapper\";\r\n        var gameWrapper = document.createElement(\"div\");\r\n        gameWrapper.className = \"gameWrapper\";\r\n        var header = document.createElement(\"div\");\r\n        header.className = \"header\";\r\n        document.body.appendChild(wrapper);\r\n        wrapper.appendChild(header);\r\n        wrapper.appendChild(gameWrapper);\r\n        // Game Header and Title\r\n        var title = document.createElement(\"h1\");\r\n        title.textContent = \"Kółko i krzyżyk\";\r\n        var startButton = document.createElement(\"button\");\r\n        startButton.className = \"startButton\";\r\n        startButton.textContent = \"New Game\";\r\n        header.appendChild(title);\r\n        header.appendChild(startButton);\r\n        // Game Wrapper PlayerX and PlayerO\r\n        var gameHeader = document.createElement(\"div\");\r\n        gameHeader.className = \"gameHeader\";\r\n        var spanX = document.createElement(\"span\");\r\n        var spanO = document.createElement(\"span\");\r\n        var playerX = document.createElement(\"div\");\r\n        playerX.className = \"playerX\";\r\n        spanX.textContent = \"Player X\";\r\n        spanO.textContent = \"Player O\";\r\n        var playerO = document.createElement(\"div\");\r\n        playerO.className = \"playerO\";\r\n        gameWrapper.appendChild(gameHeader);\r\n        gameHeader.appendChild(playerX);\r\n        playerX.appendChild(spanX);\r\n        gameHeader.appendChild(playerO);\r\n        playerO.appendChild(spanO);\r\n        // Board and winner\r\n        var board = document.createElement(\"div\");\r\n        board.className = \"board\";\r\n        var winner = document.createElement(\"div\");\r\n        winner.className = \"winner\";\r\n        gameWrapper.appendChild(board);\r\n        gameWrapper.appendChild(winner);\r\n        for (var i = 0; i < 9; i++) {\r\n            var tile = document.createElement(\"div\");\r\n            tile.className = \"tile\";\r\n            tile.tabIndex = i;\r\n            //  console.log(i, \"index\");\r\n            board.appendChild(tile);\r\n        }\r\n        this.tictactoe = new TicTacToe_1();\r\n        this.gameView = new gameView_1.default();\r\n        this.gameLogic = new gameLogic_1.default();\r\n        document.querySelector(\".startButton\").addEventListener(\"click\", function () {\r\n            console.log(\"Restart game button clicked!\");\r\n            _this.restartGame();\r\n        });\r\n        var tiles = document.querySelectorAll(\".tile\");\r\n        tiles.forEach(function (tile) {\r\n            tile.addEventListener(\"click\", function () {\r\n                console.log(\"Tile clicked: \" + tile.tabIndex);\r\n                _this.onTileClick(tile.tabIndex);\r\n            });\r\n        });\r\n        this.gameView.updateBoard(this.gameLogic);\r\n        mainDiv.appendChild(wrapper);\r\n        return mainDiv;\r\n    };\r\n    TicTacToe.prototype.onTileClick = function (i) {\r\n        this.gameLogic.makeMove(i);\r\n        this.gameView.updateBoard(this.gameLogic);\r\n    };\r\n    TicTacToe.prototype.restartGame = function () {\r\n        this.gameLogic = new gameLogic_1.default();\r\n        var winSign = document.querySelector(\".winner\");\r\n        winSign.innerHTML = \"\";\r\n        this.gameView.updateBoard(this.gameLogic);\r\n    };\r\n    var TicTacToe_1;\r\n    __decorate([\r\n        log_1.default\r\n    ], TicTacToe.prototype, \"getGameElement\", null);\r\n    TicTacToe = TicTacToe_1 = __decorate([\r\n        disable_1.disable\r\n    ], TicTacToe);\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./Lab4and5/tictactoe/tictactoe.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Lab4and5/src/index.ts");
/******/ 	
/******/ })()
;