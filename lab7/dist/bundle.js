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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./lab7/styles/style.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./lab7/styles/style.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0 auto;\\n  background-color: #bccad6;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\n\\n.note-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 5px;\\n  margin-top: 50px;\\n  justify-content: center;\\n  min-width: 300px;\\n  background-color: whitesmoke;\\n}\\n.note-wrapper h1 {\\n  font-size: 30px;\\n}\\n\\n.tittle-wrapper {\\n  width: 100%;\\n  height: 50px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.tittle-wrapper input {\\n  font-size: 18px;\\n}\\n\\n.content-wrapper {\\n  width: 100%;\\n  height: 80px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.content-wrapper text-area {\\n  font-size: 14px;\\n}\\n\\n.add-button {\\n  cursor: pointer;\\n  padding: 10px;\\n  width: 120px;\\n  border: none;\\n  margin: 5px;\\n  background-color: #92a8d1;\\n  color: whitesmoke;\\n}\\n\\n.add-button:hover {\\n  color: white;\\n  background-color: #9cb4e0;\\n}\\n\\n.notes-container {\\n  border-top: 2px solid #034f84;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  padding: 0 10px 10px 10px;\\n  margin: 10px;\\n}\\n.notes-container .single-note-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 5px;\\n  margin: 0 10px 10px 10px;\\n  padding: 10px;\\n  width: 25%;\\n  border-radius: 12px;\\n  background-color: whitesmoke;\\n}\\n.notes-container .title-div {\\n  min-height: 30px;\\n  border-bottom: 1px dotted #9cb4e0;\\n  width: 100%;\\n  text-align: center;\\n}\\n.notes-container .content-div {\\n  min-height: 60px;\\n  border-bottom: 1px dotted #9cb4e0;\\n  width: 100%;\\n  text-align: center;\\n}\\n.notes-container button {\\n  width: 120px;\\n  cursor: pointer;\\n  padding: 10px;\\n  margin: 10px;\\n  background-color: #92a8d1;\\n  border: none;\\n  color: whitesmoke;\\n}\\n.notes-container button:hover {\\n  color: white;\\n  background-color: #9cb4e0;\\n}\\n\\nspan {\\n  align-self: center;\\n  text-align: center;\\n  margin: 0 5px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./lab7/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./lab7/styles/style.scss":
/*!********************************!*\
  !*** ./lab7/styles/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./lab7/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./lab7/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./lab7/src/guid.ts":
/*!**************************!*\
  !*** ./lab7/src/guid.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Guid = void 0;\r\nvar Guid = /** @class */ (function () {\r\n    function Guid() {\r\n    }\r\n    Guid.NewGuid = function () {\r\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\r\n            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 || 0x8);\r\n            return v.toString(16);\r\n        });\r\n    };\r\n    return Guid;\r\n}());\r\nexports.Guid = Guid;\r\n\n\n//# sourceURL=webpack:///./lab7/src/guid.ts?");

/***/ }),

/***/ "./lab7/src/index.ts":
/*!***************************!*\
  !*** ./lab7/src/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar noteBoard_1 = __webpack_require__(/*! ../src/noteBoard */ \"./lab7/src/noteBoard.ts\");\r\n__webpack_require__(/*! ../styles/style.scss */ \"./lab7/styles/style.scss\");\r\n// import * as styles from '../styles/styles.scss'\r\nvar noteWrapper = (document.createElement('div'));\r\ndocument.body.appendChild(noteWrapper);\r\nnoteWrapper.className = 'note-wrapper';\r\nvar board = new noteBoard_1.NoteBoard();\r\nboard.refreshList();\r\n\n\n//# sourceURL=webpack:///./lab7/src/index.ts?");

/***/ }),

/***/ "./lab7/src/note.ts":
/*!**************************!*\
  !*** ./lab7/src/note.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Note = void 0;\r\nvar guid_1 = __webpack_require__(/*! ../src/guid */ \"./lab7/src/guid.ts\");\r\nvar Note = /** @class */ (function () {\r\n    function Note(tittle, content) {\r\n        this.id = guid_1.Guid.NewGuid();\r\n        this.tittle = tittle;\r\n        this.content = content;\r\n        this.createdAt = new Date();\r\n    }\r\n    return Note;\r\n}());\r\nexports.Note = Note;\r\n\n\n//# sourceURL=webpack:///./lab7/src/note.ts?");

/***/ }),

/***/ "./lab7/src/noteBoard.ts":
/*!*******************************!*\
  !*** ./lab7/src/noteBoard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.NoteBoard = void 0;\r\nvar note_1 = __webpack_require__(/*! ./note */ \"./lab7/src/note.ts\");\r\nvar sessionstoragestore_1 = __webpack_require__(/*! ./sessionstoragestore */ \"./lab7/src/sessionstoragestore.ts\");\r\nvar NoteBoard = /** @class */ (function () {\r\n    function NoteBoard() {\r\n        this.storage = new sessionstoragestore_1.SessionStorageStore();\r\n        this.addTitleInput();\r\n        this.addContentInput();\r\n        this.addButtton();\r\n        this.notesContainer = (document.createElement('div'));\r\n        this.notesContainer.className = 'notes-container';\r\n        document.body.appendChild(this.notesContainer);\r\n    }\r\n    NoteBoard.prototype.addTitleInput = function () {\r\n        var noteWrapper = document.querySelector('.note-wrapper');\r\n        var header = document.createElement('h1');\r\n        header.textContent = 'Note';\r\n        var div = (document.createElement('div'));\r\n        div.className = 'tittle-wrapper';\r\n        var span = (document.createElement('span'));\r\n        span.textContent = 'Title: ';\r\n        var titleInput = (document.createElement('input'));\r\n        titleInput.setAttribute('type', 'text');\r\n        titleInput.setAttribute('id', 'title');\r\n        div.appendChild(span);\r\n        div.appendChild(titleInput);\r\n        noteWrapper.appendChild(header);\r\n        noteWrapper.appendChild(div);\r\n    };\r\n    NoteBoard.prototype.addContentInput = function () {\r\n        var noteWrapper = document.querySelector('.note-wrapper');\r\n        var div = (document.createElement('div'));\r\n        div.className = 'content-wrapper';\r\n        var span = (document.createElement('span'));\r\n        span.textContent = 'Content: ';\r\n        var contentInput = (document.createElement('textarea'));\r\n        contentInput.setAttribute('id', 'content');\r\n        div.appendChild(span);\r\n        div.appendChild(contentInput);\r\n        noteWrapper.appendChild(div);\r\n    };\r\n    NoteBoard.prototype.addButtton = function () {\r\n        var _this = this;\r\n        var noteWrapper = document.querySelector('.note-wrapper');\r\n        var div = (document.createElement('div'));\r\n        var addButtton = (document.createElement('button'));\r\n        addButtton.className = 'add-button';\r\n        addButtton.textContent = 'Add';\r\n        addButtton.addEventListener('click', function () {\r\n            var title = document.getElementById('title').value;\r\n            var content = document.getElementById('content').value;\r\n            _this.storage.addNote(new note_1.Note(title, content));\r\n            _this.refreshList();\r\n        });\r\n        div.appendChild(addButtton);\r\n        noteWrapper.appendChild(div);\r\n    };\r\n    NoteBoard.prototype.refreshList = function () {\r\n        var _this = this;\r\n        var singleNoteWrapper;\r\n        this.notesContainer.innerHTML = '';\r\n        var notes = this.storage.getNotes();\r\n        if (!notes)\r\n            return;\r\n        notes.forEach(function (item) {\r\n            var titleDiv = (document.createElement('div'));\r\n            titleDiv.className = 'title-div';\r\n            titleDiv.innerHTML = item.tittle;\r\n            var contentDiv = (document.createElement('div'));\r\n            contentDiv.innerHTML = item.content;\r\n            contentDiv.className = 'content-div';\r\n            var removeBtn = (document.createElement('button'));\r\n            removeBtn.textContent = 'Remove';\r\n            singleNoteWrapper = document.createElement('div');\r\n            _this.notesContainer.appendChild(singleNoteWrapper);\r\n            singleNoteWrapper.className = 'single-note-wrapper';\r\n            removeBtn.setAttribute('data-id', item.id.toString());\r\n            removeBtn.addEventListener('click', function (e) {\r\n                var id = e.target.getAttribute('data-id');\r\n                _this.storage.deleteNote(id);\r\n                _this.refreshList();\r\n            });\r\n            singleNoteWrapper.appendChild(titleDiv);\r\n            singleNoteWrapper.appendChild(contentDiv);\r\n            singleNoteWrapper.appendChild(removeBtn);\r\n        }, this);\r\n    };\r\n    return NoteBoard;\r\n}());\r\nexports.NoteBoard = NoteBoard;\r\n\n\n//# sourceURL=webpack:///./lab7/src/noteBoard.ts?");

/***/ }),

/***/ "./lab7/src/sessionstoragestore.ts":
/*!*****************************************!*\
  !*** ./lab7/src/sessionstoragestore.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SessionStorageStore = void 0;\r\nvar SessionStorageStore = /** @class */ (function () {\r\n    function SessionStorageStore() {\r\n    }\r\n    SessionStorageStore.prototype.deleteNote = function (id) {\r\n        var noteId = id;\r\n        var sessionStorageKey = 'notesSessionStorage';\r\n        var notesValue = JSON.parse(sessionStorage.getItem(sessionStorageKey));\r\n        var index = notesValue.findIndex(function (id) { return id.id == noteId; });\r\n        notesValue.splice(index, 1);\r\n        sessionStorage.setItem('notesSessionStorage', JSON.stringify(notesValue));\r\n    };\r\n    SessionStorageStore.prototype.addNote = function (note) {\r\n        var sessionStorageKey = 'notesSessionStorage';\r\n        var notesValue = sessionStorage.getItem(sessionStorageKey);\r\n        var notes;\r\n        notes = JSON.parse(notesValue);\r\n        if (!notes)\r\n            notes = [];\r\n        notes.push(note);\r\n        sessionStorage.setItem(sessionStorageKey, JSON.stringify(notes));\r\n    };\r\n    SessionStorageStore.prototype.getNotes = function () {\r\n        var sessionStorageKey = 'notesSessionStorage';\r\n        var notesValue = sessionStorage.getItem(sessionStorageKey);\r\n        return JSON.parse(notesValue);\r\n    };\r\n    return SessionStorageStore;\r\n}());\r\nexports.SessionStorageStore = SessionStorageStore;\r\n\n\n//# sourceURL=webpack:///./lab7/src/sessionstoragestore.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./lab7/src/index.ts");
/******/ 	
/******/ })()
;