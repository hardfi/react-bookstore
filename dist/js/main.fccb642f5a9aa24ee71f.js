/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".h-flex {\n  min-height: calc(100vh - 65px);\n  display: flex;\n  justify-content: center;\n}\n\n.h-flex > div {\n  justify-content: center;\n}\n\n.py-1 {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n}\n\n.py-2 {\n  padding-top: 15px !important;\n  padding-bottom: 15px !important;\n}\n\n.py-3 {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n}\n\n.py-4 {\n  padding-top: 25px !important;\n  padding-bottom: 25px !important;\n}\n\n.px-4 {\n  padding-left: 25px !important;\n  padding-right: 25px !important;\n}\n\n.my-2 {\n  margin-top: 15px !important;\n  margin-bottom: 15px !important;\n}\n\n.pt-3 {\n  padding-top: 20px !important;\n}\n\n.pb-3 {\n  padding-bottom: 20px !important;\n}\n\n.mt--2 {\n  margin-top: -15px !important;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.spinner-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #ffffff80;\n  z-index: 9999;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: loaderState$, App, AppContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderState$", function() { return loaderState$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environment */ "./src/environments/production.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./redux/actions */ "./src/redux/actions/index.ts");
/* harmony import */ var _base_user_role_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./base/user-role.model */ "./src/base/user-role.model.ts");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Login */ "./src/pages/Login.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var _pages_Payment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/Payment */ "./src/pages/Payment.tsx");
/* harmony import */ var _pages_Orders__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/Orders */ "./src/pages/Orders.tsx");
/* harmony import */ var _pages_Cart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Cart */ "./src/pages/Cart.tsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _pages_Users__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/Users */ "./src/pages/Users.tsx");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Loader */ "./src/components/Loader.tsx");





 // @ts-ignore


















var loaderState$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](false);
var App =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);

  function App(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props));
    _this.state = {
      isLoading: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('environment()');
      console.log(Object(environment__WEBPACK_IMPORTED_MODULE_6__["default"])());
      var users = this.props.users;

      if (!users.length) {
        var _usersFetched = this.props.usersFetched;

        var _environment = Object(environment__WEBPACK_IMPORTED_MODULE_6__["default"])(),
            usersApi = _environment.usersApi;

        fetch("".concat(usersApi, "?format=json&results=5&nat=gb&inc=name,login,picture")).then(function (res) {
          return res.json();
        }).then(function (response) {
          var users = response.results.map(function (user, i) {
            return {
              id: user.login.uuid,
              name: user.name.first,
              surname: user.name.last,
              username: user.login.username,
              password: user.login.password,
              role: i % 2 ? _base_user_role_model__WEBPACK_IMPORTED_MODULE_12__["USER_ROLE"].admin : _base_user_role_model__WEBPACK_IMPORTED_MODULE_12__["USER_ROLE"].client,
              pictureUrl: user.picture.large
            };
          });

          _usersFetched(users);
        });
      }

      loaderState$.subscribe(function (isLoading) {
        return _this2.setState({
          isLoading: isLoading
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var history = this.props.history;
      var isLoading = this.state.isLoading;
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, isLoading && react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Loader__WEBPACK_IMPORTED_MODULE_22__["default"], null), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_14__["HeaderContainer"], {
        history: history
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/",
        component: _pages_Home__WEBPACK_IMPORTED_MODULE_15__["HomePage"]
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/login",
        component: _pages_Login__WEBPACK_IMPORTED_MODULE_13__["LoginPage"]
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/cart",
        component: _pages_Cart__WEBPACK_IMPORTED_MODULE_18__["CartPage"]
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/payment",
        component: _pages_Payment__WEBPACK_IMPORTED_MODULE_16__["PaymentPage"]
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/orders-history",
        component: _pages_Orders__WEBPACK_IMPORTED_MODULE_17__["OrderHistoryPage"]
      }), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/users",
        component: _pages_Users__WEBPACK_IMPORTED_MODULE_20__["UsersPage"]
      })), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user
  };
};

var mapDispatchToProps = {
  usersFetched: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["usersFetched"],
  userChanged: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["userChanged"]
};
var AppContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App);

/***/ }),

/***/ "./src/base/order-statuses.model.ts":
/*!******************************************!*\
  !*** ./src/base/order-statuses.model.ts ***!
  \******************************************/
/*! exports provided: ORDER_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATUSES", function() { return ORDER_STATUSES; });
var ORDER_STATUSES;

(function (ORDER_STATUSES) {
  ORDER_STATUSES["new"] = "new";
  ORDER_STATUSES["paid"] = "paid";
  ORDER_STATUSES["sent"] = "sent";
  ORDER_STATUSES["cancelled"] = "cancelled";
})(ORDER_STATUSES || (ORDER_STATUSES = {}));

/***/ }),

/***/ "./src/base/payment-model.ts":
/*!***********************************!*\
  !*** ./src/base/payment-model.ts ***!
  \***********************************/
/*! exports provided: PaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModel", function() { return PaymentModel; });
var PaymentModel;

(function (PaymentModel) {
  PaymentModel["delivery"] = "delivery";
  PaymentModel["card"] = "card";
})(PaymentModel || (PaymentModel = {}));

/***/ }),

/***/ "./src/base/user-role.model.ts":
/*!*************************************!*\
  !*** ./src/base/user-role.model.ts ***!
  \*************************************/
/*! exports provided: USER_ROLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE", function() { return USER_ROLE; });
var USER_ROLE;

(function (USER_ROLE) {
  USER_ROLE["admin"] = "ADMIN";
  USER_ROLE["client"] = "CLIENT";
})(USER_ROLE || (USER_ROLE = {}));

/***/ }),

/***/ "./src/components/BookInfoDialog.tsx":
/*!*******************************************!*\
  !*** ./src/components/BookInfoDialog.tsx ***!
  \*******************************************/
/*! exports provided: BookInfoDialogContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfoDialogContainer", function() { return BookInfoDialogContainer; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _base_user_role_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../base/user-role.model */ "./src/base/user-role.model.ts");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");














var LocalState = function LocalState() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, LocalState);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "title", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "id", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "author", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "quantity", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "price", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "description", void 0);
};

var SimpleDialog =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SimpleDialog, _React$Component);

  function SimpleDialog(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, SimpleDialog);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SimpleDialog).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handleInputChange", function (event) {
      var _event$target = event.target,
          value = _event$target.value,
          name = _event$target.name;

      _this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, name, value));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handleSaveChanges", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          changeBookDetails = _this$props.changeBookDetails;
      changeBookDetails(_this.state);
      react_toastify__WEBPACK_IMPORTED_MODULE_10__["toast"].success('Book details have been edited successfully');
      onClose();
    });

    _this.state = new LocalState();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(SimpleDialog, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open,
          book = _this$props2.book,
          user = _this$props2.user;
      var _this$state = this.state,
          title = _this$state.title,
          author = _this$state.author,
          quantity = _this$state.quantity,
          price = _this$state.price,
          description = _this$state.description;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Dialog"], {
        onClose: onClose,
        "aria-labelledby": "simple-dialog-title",
        open: open,
        fullWidth: true,
        maxWidth: "md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["DialogContent"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        xs: 12,
        direction: "row",
        wrap: "nowrap",
        className: "py-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: book.book_cover,
        alt: book.title
      }), user.role === _base_user_role_model__WEBPACK_IMPORTED_MODULE_11__["USER_ROLE"].client && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        justify: "center",
        direction: "column",
        className: "px-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h5"
      }, book.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h6"
      }, book.author), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "body1"
      }, book.description)), user.role === _base_user_role_model__WEBPACK_IMPORTED_MODULE_11__["USER_ROLE"].admin && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        justify: "center",
        direction: "column",
        className: "px-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        direction: "column"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        label: "Book title",
        name: "title",
        size: "small",
        className: "my-2",
        value: title,
        onChange: this.handleInputChange,
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        label: "Book author",
        name: "author",
        size: "small",
        className: "my-2",
        value: author,
        onChange: this.handleInputChange,
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        label: "Available pieces",
        type: "number",
        name: "quantity",
        size: "small",
        className: "my-2",
        value: quantity,
        onChange: this.handleInputChange,
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        label: "Price",
        name: "price",
        size: "small",
        className: "my-2",
        value: price,
        onChange: this.handleInputChange,
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        label: "Description",
        name: "description",
        size: "small",
        className: "my-2",
        multiline: true,
        rows: "4",
        value: description,
        onChange: this.handleInputChange,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        justify: "space-between"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "contained",
        color: "secondary",
        onClick: onClose
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "contained",
        color: "primary",
        onClick: this.handleSaveChanges
      }, "Save changes"))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.book && nextProps.book.id !== prevState.id) {
        var _ref = nextProps.book,
            title = _ref.title,
            id = _ref.id,
            author = _ref.author,
            quantity = _ref.quantity,
            price = _ref.price,
            description = _ref.description;
        return {
          title: title,
          id: id,
          author: author,
          quantity: quantity,
          price: price,
          description: description
        };
      }

      return null;
    }
  }]);

  return SimpleDialog;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    book: state.book,
    user: state.user
  };
};

var mapDispatchToProps = {
  changeBookDetails: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["changeBookDetails"]
};
var BookInfoDialogContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SimpleDialog);

/***/ }),

/***/ "./src/components/BookList.tsx":
/*!*************************************!*\
  !*** ./src/components/BookList.tsx ***!
  \*************************************/
/*! exports provided: BookListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListContainer", function() { return BookListContainer; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");














var ParentProps = function ParentProps() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ParentProps);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "mode", void 0);
};

var BookList =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BookList, _React$Component);

  function BookList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, BookList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(BookList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handleRemoveItem", function (book) {
      var _this$props = _this.props,
          removeBookFromCart = _this$props.removeBookFromCart,
          addBookQuantity = _this$props.addBookQuantity,
          changeTotalCartItems = _this$props.changeTotalCartItems,
          user = _this$props.user,
          carts = _this$props.carts;
      removeBookFromCart(book, user.id);
      addBookQuantity(book.id);
      changeTotalCartItems(carts[user.id].reduce(function (p, c) {
        return p + c.quantity;
      }, 0));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(BookList, [{
    key: "handleAddItem",
    value: function handleAddItem(book) {
      var _this$props2 = this.props,
          addBookToCart = _this$props2.addBookToCart,
          deductBookQuantity = _this$props2.deductBookQuantity,
          changeTotalCartItems = _this$props2.changeTotalCartItems,
          user = _this$props2.user,
          carts = _this$props2.carts;
      addBookToCart(book, user.id);
      deductBookQuantity(book.id);
      changeTotalCartItems(carts[user.id].reduce(function (p, c) {
        return p + c.quantity;
      }, 0));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          user = _this$props3.user,
          carts = _this$props3.carts,
          books = _this$props3.books,
          mode = _this$props3.mode;
      var userCart = user.id in carts ? carts[user.id] : null;
      var userBooks = userCart ? userCart.map(function (item) {
        return books.find(function (book) {
          return book.id === item.id;
        });
      }) : [];

      var getTotalForRow = function getTotalForRow(book) {
        if (userCart) {
          var item = userCart.find(function (item) {
            return item.id === book.id;
          });

          if (item) {
            return (item.quantity * parseFloat(book.price.toString())).toFixed(2);
          }

          return '0.00';
        }

        return '';
      };

      var getTotal = function getTotal() {
        if (userCart) {
          return userCart.reduce(function (p, c) {
            // eslint-disable-next-line no-param-reassign
            p += Number(c.price) * c.quantity;
            return p;
          }, 0).toFixed(2);
        }

        return '';
      };

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        "aria-label": "simple table"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "Cover"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "Title"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "Author"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "Price"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "Amount"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "Total"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableBody"], null, userBooks.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], {
          key: book.id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ListItemAvatar"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
          alt: book.title,
          src: book.book_cover
        }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, book.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, book.author), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "\u20AC".concat(book.price)), mode === 'edit' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
          color: "primary",
          onClick: function onClick() {
            return _this2.handleRemoveItem(book);
          },
          "aria-label": "add to shopping cart"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, null)), userCart.find(function (item) {
          return item.id === book.id;
        }).quantity, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
          color: "primary",
          onClick: function onClick() {
            return _this2.handleAddItem(book);
          },
          "aria-label": "add to shopping cart"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default.a, null))), mode === 'preview' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, userCart.find(function (item) {
          return item.id === book.id;
        }).quantity), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, "\u20AC".concat(getTotalForRow(book))));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        colSpan: 4
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        align: "right"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", null, "Total:")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], null, getTotal())), !userBooks.length && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TableCell"], {
        colSpan: 6
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        variant: "h6",
        align: "center"
      }, "Your cart is empty.")))));
    }
  }]);

  return BookList;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    total: state.total,
    carts: state.carts,
    books: state.books
  };
};

var mapDispatchToProps = {
  addBookQuantity: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["addBookQuantity"],
  deductBookQuantity: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["deductBookQuantity"],
  changeTotalCartItems: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["changeTotalCartItems"],
  removeBookFromCart: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["removeBookFromCart"],
  addBookToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["addBookToCart"]
};
var BookListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(BookList);

/***/ }),

/***/ "./src/components/BookTile.tsx":
/*!*************************************!*\
  !*** ./src/components/BookTile.tsx ***!
  \*************************************/
/*! exports provided: BookTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTile", function() { return BookTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_user_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/user-role.model */ "./src/base/user-role.model.ts");







function BookTile(props) {
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
      img: {
        maxWidth: '100%'
      },
      header: {
        margin: '2px 0'
      }
    });
  });

  var handleBookDialogOpen = function handleBookDialogOpen(selectedBook) {
    var onModalOpen = props.onModalOpen;
    onModalOpen(selectedBook);
  };

  var selectedBook = props.selectedBook,
      userRole = props.userRole;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    xs: 4,
    sm: 3,
    md: 2,
    justify: "space-between",
    direction: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    onClick: function onClick() {
      return handleBookDialogOpen(selectedBook);
    },
    className: "cursor-pointer"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: selectedBook.book_cover,
    alt: selectedBook.title,
    className: classes.img
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    className: classes.header
  }, selectedBook.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
    className: classes.header
  }, selectedBook.author)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    alignItems: "center",
    justify: "space-between"
  }, userRole === _base_user_role_model__WEBPACK_IMPORTED_MODULE_6__["USER_ROLE"].client && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    direction: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    justify: "space-between",
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\u20AC".concat(selectedBook.price)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "primary",
    "aria-label": "add to shopping cart",
    onClick: function onClick() {
      return props.addToCart(selectedBook);
    },
    disabled: selectedBook.quantity < 1
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: "mt--2"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", {
    className: classes.header
  }, selectedBook.quantity, ' ', "available"))), userRole === _base_user_role_model__WEBPACK_IMPORTED_MODULE_6__["USER_ROLE"].admin && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "secondary",
    "aria-label": "remove book",
    onClick: function onClick() {
      return props.onBookDelete(selectedBook);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "primary",
    "aria-label": "edit book info",
    onClick: function onClick() {
      return handleBookDialogOpen(selectedBook);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4___default.a, null))))));
}

/***/ }),

/***/ "./src/components/ConfirmDialog.tsx":
/*!******************************************!*\
  !*** ./src/components/ConfirmDialog.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


function ConfirmDialog(props) {
  var onClose = props.onClose,
      open = props.open,
      dialogTitle = props.dialogTitle,
      dialogText = props.dialogText,
      onConfirm = props.onConfirm,
      data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    onClose: onClose,
    "aria-labelledby": "simple-dialog-title",
    open: open,
    maxWidth: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], null, dialogTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    className: "py-4"
  }, dialogText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "space-between",
    className: "py-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: onClose
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return onConfirm(data);
    }
  }, "Confirm")))));
}

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: HeaderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _UserActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserActions */ "./src/components/UserActions.tsx");
/* harmony import */ var _base_user_role_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../base/user-role.model */ "./src/base/user-role.model.ts");












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    span: {
      marginLeft: '10px'
    }
  });
});

function Header(props) {
  var classes = useStyles();
  var user = props.user,
      session = props.session,
      total = props.total,
      history = props.history;

  var handleGoToHistory = function handleGoToHistory() {
    history.push('/orders-history');
  };

  var handleGoToUsers = function handleGoToUsers() {
    history.push('/users');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "static"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    style: {
      color: 'white'
    },
    "aria-label": "add to shopping cart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6",
    className: classes.title
  }, "Awesome Bookstore"), session && user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    item: true,
    xs: 7,
    direction: "row",
    alignItems: "center",
    justify: "space-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    item: true,
    xs: 6,
    alignItems: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    alt: user.username,
    src: user.pictureUrl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.span
  }, "".concat(user.name, " ").concat(user.surname))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    item: true,
    xs: 6,
    justify: "flex-end"
  }, user.role === _base_user_role_model__WEBPACK_IMPORTED_MODULE_11__["USER_ROLE"].client && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/cart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    style: {
      color: 'white'
    },
    "aria-label": "add to shopping cart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    badgeContent: total,
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserActions__WEBPACK_IMPORTED_MODULE_10__["UserActionsContainer"], {
    goToHistory: function goToHistory() {
      return handleGoToHistory();
    },
    goToUsers: function goToUsers() {
      return handleGoToUsers();
    }
  }))))), !session && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
    to: "/login"
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    session: state.session,
    total: state.total
  };
};

var HeaderContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Header);

/***/ }),

/***/ "./src/components/Loader.tsx":
/*!***********************************!*\
  !*** ./src/components/Loader.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);



function Spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "TailSpin",
    color: "#00BFFF",
    height: 100,
    width: 100
  }));
}

/***/ }),

/***/ "./src/components/StatusChangeSelect.tsx":
/*!***********************************************!*\
  !*** ./src/components/StatusChangeSelect.tsx ***!
  \***********************************************/
/*! exports provided: StatusChangeSelectContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusChangeSelectContainer", function() { return StatusChangeSelectContainer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");













var StatusChangeSelect =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StatusChangeSelect, _React$Component);

  function StatusChangeSelect(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StatusChangeSelect);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(StatusChangeSelect).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (event) {
      var newStatus = event.target.value;
      var _this$props = _this.props,
          changeOrderStatus = _this$props.changeOrderStatus,
          orderId = _this$props.orderId;

      _this.setState({
        status: newStatus
      });

      changeOrderStatus(orderId, newStatus);
      react_toastify__WEBPACK_IMPORTED_MODULE_10__["toast"].success('Order status changed successfully');
    });

    _this.state = {
      status: null,
      orderId: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StatusChangeSelect, [{
    key: "render",
    value: function render() {
      var status = this.state.status;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
        variant: "outlined",
        style: {
          minWidth: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        labelId: "label",
        id: "select1",
        value: status,
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        value: "new",
        disabled: true
      }, "New"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        value: "paid",
        disabled: true
      }, "Paid"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        value: "sent"
      }, "Sent"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        value: "cancelled"
      }, "Cancelled")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ('orderId' in nextProps && nextProps.orderId !== prevState.orderId) {
        return {
          status: nextProps.status,
          orderId: nextProps.orderId
        };
      }

      return null;
    }
  }]);

  return StatusChangeSelect;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapDispatchToProps = {
  changeOrderStatus: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["changeOrderStatus"]
};
var StatusChangeSelectContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(StatusChangeSelect);

/***/ }),

/***/ "./src/components/UserActions.tsx":
/*!****************************************!*\
  !*** ./src/components/UserActions.tsx ***!
  \****************************************/
/*! exports provided: UserActionsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionsContainer", function() { return UserActionsContainer; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");
/* harmony import */ var _base_user_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/user-role.model */ "./src/base/user-role.model.ts");








function UserActions(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);
  var sessionChange = props.sessionChange,
      user = props.user;
  var isAdmin = user.role === _base_user_role_model__WEBPACK_IMPORTED_MODULE_6__["USER_ROLE"].admin;

  var handleMenu = function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleLogout = function handleLogout() {
    handleClose();
    sessionChange(false);
  };

  var handleGoToHistory = function handleGoToHistory() {
    handleClose();
    props.goToHistory();
  };

  var handleGoToUserList = function handleGoToUserList() {
    handleClose();
    props.goToUsers();
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["AccountCircle"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: open,
    onClose: handleClose
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: handleGoToHistory
  }, isAdmin ? 'Orders management' : 'Order history'), isAdmin && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: handleGoToUserList
  }, "Users management"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: handleLogout
  }, "Log out")));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    session: state.session,
    user: state.user
  };
};

var mapDispatchToProps = {
  sessionChange: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["sessionChange"]
};
var UserActionsContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(UserActions);

/***/ }),

/***/ "./src/environments/production.ts":
/*!****************************************!*\
  !*** ./src/environments/production.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    usersApi: 'https://randomuser.me/api/',
    booksApi: 'https://api.nytimes.com/svc/books/v3/lists/current/mass-market-paperback.json?api-key=4lVEBSCdFNHEqwxXMup58JdxrCSgJ1DK',
    isProduction: true,
    isDevelopment: false
  };
});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_4__["store"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
  path: "/",
  component: _App__WEBPACK_IMPORTED_MODULE_6__["AppContainer"]
}))), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/localStorage.ts":
/*!*****************************!*\
  !*** ./src/localStorage.ts ***!
  \*****************************/
/*! exports provided: loadState, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadState", function() { return loadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");



var initialStoreState = {
  users: [],
  user: '',
  session: false,
  carts: {},
  total: 0,
  orders: [],
  books: []
};
var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return initialStoreState;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return initialStoreState;
  }
};
var saveState =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(state) {
    var serializedState;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _App__WEBPACK_IMPORTED_MODULE_2__["loaderState$"].next(true);
            _context.next = 4;
            return timeout(1000);

          case 4:
            _App__WEBPACK_IMPORTED_MODULE_2__["loaderState$"].next(false);
            serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function saveState(_x) {
    return _ref.apply(this, arguments);
  };
}();

function timeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/***/ }),

/***/ "./src/pages/Cart.tsx":
/*!****************************!*\
  !*** ./src/pages/Cart.tsx ***!
  \****************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BookList */ "./src/components/BookList.tsx");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");







function Cart(props) {
  var carts = props.carts,
      user = props.user,
      clearCart = props.clearCart,
      changeTotalCartItems = props.changeTotalCartItems,
      history = props.history;
  var userCart = carts[user.id];

  var goHome = function goHome() {
    history.push('/');
  };

  var clearAllCartItems = function clearAllCartItems() {
    clearCart(user.id);
    changeTotalCartItems(0);
    goHome();
  };

  var goToPayment = function goToPayment() {
    history.push('/payment');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center"
  }, "Items in your cart:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BookList__WEBPACK_IMPORTED_MODULE_4__["BookListContainer"], {
    mode: "edit"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "space-between",
    alignItems: "center",
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    onClick: goHome
  }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    color: "primary",
    onClick: function onClick() {
      return clearAllCartItems();
    },
    disabled: !userCart
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: goToPayment,
    disabled: !userCart
  }, "Proceed to payment")));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    carts: state.carts,
    user: state.user
  };
};

var mapDispatchToProps = {
  changeTotalCartItems: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["changeTotalCartItems"],
  clearCart: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["clearCart"]
};
var CartPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Cart);

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environment */ "./src/environments/production.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");
/* harmony import */ var _components_BookInfoDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/BookInfoDialog */ "./src/components/BookInfoDialog.tsx");
/* harmony import */ var _components_BookTile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/BookTile */ "./src/components/BookTile.tsx");
/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ConfirmDialog */ "./src/components/ConfirmDialog.tsx");







 // @ts-ignore










var Home =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getRandomPrice", function () {
      var min = 5;
      var max = 20;
      return (Math.random() * (max - min) + min).toFixed(2);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleAddToCart", function (book) {
      var _this$props = _this.props,
          deductBookQuantity = _this$props.deductBookQuantity,
          addBookToCart = _this$props.addBookToCart,
          user = _this$props.user;
      deductBookQuantity(book.id);
      addBookToCart(book, user.id);

      _this.changeTotalCartItems();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleModalOpen", function (selectedBook) {
      var _this$props2 = _this.props,
          modalOpen = _this$props2.modalOpen,
          selectBook = _this$props2.selectBook;
      selectBook(selectedBook);
      modalOpen();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleConfirmOpen", function (selectedBook) {
      var _this$props3 = _this.props,
          dialogOpen = _this$props3.dialogOpen,
          selectBook = _this$props3.selectBook;
      selectBook(selectedBook);
      dialogOpen();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleModalClose", function () {
      var modalClose = _this.props.modalClose;
      modalClose();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleConfirmClose", function () {
      var dialogClose = _this.props.dialogClose;
      dialogClose();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleBookDelete", function (book) {
      var deleteBook = _this.props.deleteBook;
      deleteBook(book.id);

      _this.handleConfirmClose();

      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success('Book has been deleted successfully');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "changeTotalCartItems", function () {
      var _this$props4 = _this.props,
          changeTotalCartItems = _this$props4.changeTotalCartItems,
          carts = _this$props4.carts,
          user = _this$props4.user;

      if (user.id in carts) {
        changeTotalCartItems(carts[user.id].reduce(function (p, c) {
          return p + c.quantity;
        }, 0));
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var books = this.props.books;

      if (!books.length) {
        var _booksFetched = this.props.booksFetched;

        var _environment = Object(environment__WEBPACK_IMPORTED_MODULE_8__["default"])(),
            booksApi = _environment.booksApi;

        fetch(booksApi).then(function (res) {
          return res.json();
        }).then(function (response) {
          var books = response.results.books.map(function (book) {
            return {
              id: book.primary_isbn10,
              title: book.title,
              author: book.author,
              published_date: 'n/a',
              book_cover: book.book_image,
              quantity: 10,
              price: _this2.getRandomPrice(),
              description: book.description
            };
          });

          _booksFetched(books);
        });
      } else {
        this.changeTotalCartItems();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          books = _this$props5.books,
          modal = _this$props5.modal,
          user = _this$props5.user,
          dialog = _this$props5.dialog,
          book = _this$props5.book;
      var activeBooks = books.filter(function (book) {
        return !book.deleted;
      });
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        style: {
          padding: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 12,
        container: true,
        spacing: 4,
        justify: "center"
      }, activeBooks.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_components_BookTile__WEBPACK_IMPORTED_MODULE_14__["BookTile"], {
          selectedBook: book,
          key: book.id,
          userRole: user.role,
          onBookDelete: _this3.handleConfirmOpen,
          onModalOpen: _this3.handleModalOpen,
          addToCart: _this3.handleAddToCart
        });
      })), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_components_BookInfoDialog__WEBPACK_IMPORTED_MODULE_13__["BookInfoDialogContainer"], {
        open: modal,
        onClose: this.handleModalClose
      }), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_15__["default"], {
        open: dialog,
        onClose: this.handleConfirmClose,
        dialogTitle: "Remove book",
        data: book,
        dialogText: "Do you really want to delete ".concat(book.title, "?"),
        onConfirm: this.handleBookDelete
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    books: state.books,
    book: state.book,
    carts: state.carts,
    modal: state.modal,
    dialog: state.dialog
  };
};

var mapDispatchToProps = {
  booksFetched: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["booksFetched"],
  deductBookQuantity: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["deductBookQuantity"],
  addBookToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["addBookToCart"],
  changeTotalCartItems: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["changeTotalCartItems"],
  modalOpen: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["modalOpen"],
  modalClose: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["modalClose"],
  selectBook: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["selectBook"],
  deleteBook: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["deleteBook"],
  dialogOpen: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["dialogOpen"],
  dialogClose: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["dialogClose"]
};
var HomePage = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),

/***/ "./src/pages/Login.tsx":
/*!*****************************!*\
  !*** ./src/pages/Login.tsx ***!
  \*****************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    }
  });
});

function Login(props) {
  var classes = useStyles();
  var session = props.session,
      user = props.user,
      users = props.users;

  var selectUser = function selectUser(selectedUser) {
    var userChanged = props.userChanged,
        sessionChange = props.sessionChange;
    userChanged(selectedUser);
    sessionChange(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "h-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    container: true,
    spacing: 4,
    justify: "center",
    alignItems: "center",
    className: "pb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    className: "pb-3"
  }, "Log in as one of the following users:")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    container: true,
    spacing: 4,
    justify: "center",
    alignItems: "center"
  }, users.map(function (usr) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      item: true,
      justify: "center",
      alignItems: "center",
      direction: "column",
      xs: 2,
      key: usr.id,
      className: "cursor-pointer",
      onClick: function onClick() {
        return selectUser(usr);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      alt: usr.username,
      src: usr.pictureUrl,
      className: classes.large
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, "".concat(usr.name, " ").concat(usr.surname)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, usr.role));
  }), session && user && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: "/"
  }))));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user,
    session: state.session
  };
};

var mapDispatchToProps = {
  userChanged: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["userChanged"],
  sessionChange: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["sessionChange"]
};
var LoginPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),

/***/ "./src/pages/Orders.tsx":
/*!******************************!*\
  !*** ./src/pages/Orders.tsx ***!
  \******************************/
/*! exports provided: Orders, OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orders", function() { return Orders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_user_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/user-role.model */ "./src/base/user-role.model.ts");
/* harmony import */ var _components_StatusChangeSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StatusChangeSelect */ "./src/components/StatusChangeSelect.tsx");






function Orders(props) {
  var orders = props.orders,
      user = props.user,
      books = props.books,
      history = props.history;
  var isAdmin = user.role === _base_user_role_model__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"].admin;
  var allOrders = isAdmin ? orders : orders.filter(function (order) {
    return order.id.includes(user.id.toString());
  });

  var goHome = function goHome() {
    history.push('/');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center",
    className: "py-4"
  }, isAdmin ? 'Customer orders:' : 'Your previous orders with us:')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    "aria-label": "simple table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Date"), isAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Total Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Books"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, allOrders.map(function (order) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
      key: order.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_3___default.a, {
      format: "LLL"
    }, order.date)), isAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, order.user.name, ' ', order.user.surname), isAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StatusChangeSelect__WEBPACK_IMPORTED_MODULE_5__["StatusChangeSelectContainer"], {
      status: order.status,
      orderId: order.id
    })), !isAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, order.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "\u20AC".concat(order.total)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex'
      }
    }, order.books.map(function (book) {
      var fullBookInfo = books.find(function (bk) {
        return bk.id === book.id;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        key: fullBookInfo.id,
        title: "".concat(fullBookInfo.title, ", ").concat(fullBookInfo.author, " | Quantity: ").concat(book.quantity)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        key: book.id,
        alt: fullBookInfo.title,
        src: fullBookInfo.book_cover
      }));
    }))));
  }), !allOrders.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    colSpan: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    align: "center"
  }, isAdmin ? 'There\'s nothing to show' : 'Your don\'t have any past orders.')))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "space-between",
    alignItems: "center",
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    onClick: goHome
  }, "Back")));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    orders: state.orders,
    books: state.books
  };
};

var OrderHistoryPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Orders);

/***/ }),

/***/ "./src/pages/Payment.tsx":
/*!*******************************!*\
  !*** ./src/pages/Payment.tsx ***!
  \*******************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BookList */ "./src/components/BookList.tsx");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.ts");
/* harmony import */ var _base_order_statuses_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../base/order-statuses.model */ "./src/base/order-statuses.model.ts");
/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ConfirmDialog */ "./src/components/ConfirmDialog.tsx");
/* harmony import */ var _base_payment_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../base/payment-model */ "./src/base/payment-model.ts");

















var Payment =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Payment, _React$Component);

  function Payment(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Payment);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Payment).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePayment", function () {
      var _this$props = _this.props,
          changeTotalCartItems = _this$props.changeTotalCartItems,
          clearCart = _this$props.clearCart,
          addOrder = _this$props.addOrder,
          user = _this$props.user,
          carts = _this$props.carts,
          history = _this$props.history;
      var payment = _this.state.payment;
      addOrder({
        status: payment === _base_payment_model__WEBPACK_IMPORTED_MODULE_15__["PaymentModel"].card ? _base_order_statuses_model__WEBPACK_IMPORTED_MODULE_13__["ORDER_STATUSES"].paid : _base_order_statuses_model__WEBPACK_IMPORTED_MODULE_13__["ORDER_STATUSES"].new,
        date: Date.now(),
        id: "".concat(user.id, "_").concat(Date.now()),
        books: carts[user.id],
        total: _this.getTotal(carts[user.id]),
        user: user
      });
      clearCart(user.id);
      changeTotalCartItems(0);

      _this.handleConfirmClose();

      react_toastify__WEBPACK_IMPORTED_MODULE_10__["toast"].success('Order has been successfully placed. Thank you!');
      history.push('/');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleConfirmOpen", function () {
      _this.setState({
        isDialogOpen: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleConfirmClose", function () {
      _this.setState({
        isDialogOpen: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePaymentChange", function (event) {
      _this.setState({
        payment: event.target.value
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getDialogText", function () {
      var payment = _this.state.payment;

      if (payment === _base_payment_model__WEBPACK_IMPORTED_MODULE_15__["PaymentModel"].delivery) {
        return 'Do you want to confirm the purchase and pay the order at the pick up?';
      }

      return 'Do you confirm that the amount due will be debited from you credit card?';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getTotal", function (cart) {
      return cart.reduce(function (p, c) {
        // eslint-disable-next-line no-param-reassign
        p += Number(c.price) * c.quantity;
        return p;
      }, 0).toFixed(2);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "goToCart", function () {
      var history = _this.props.history;
      history.push('/cart');
    });

    _this.state = {
      isDialogOpen: false,
      payment: _base_payment_model__WEBPACK_IMPORTED_MODULE_15__["PaymentModel"].card
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Payment, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          payment = _this$state.payment,
          isDialogOpen = _this$state.isDialogOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Container"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        justify: "center",
        xs: 12,
        className: "py-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
        variant: "h5",
        align: "center"
      }, "Please check all items in the cart:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_BookList__WEBPACK_IMPORTED_MODULE_11__["BookListContainer"], {
        mode: "preview"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        xs: 12,
        className: "py-4",
        justify: "flex-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
        component: "fieldset"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], {
        component: "legend"
      }, "Pick payment method:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["RadioGroup"], {
        "aria-label": "gender",
        name: "gender1",
        row: true,
        value: payment,
        onChange: this.handlePaymentChange
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
        value: "delivery",
        control: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Radio"], null),
        label: "Pay at delivery"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
        value: "card",
        control: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Radio"], null),
        label: "Pay by credit card"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        item: true,
        justify: "space-between",
        alignItems: "center",
        className: "py-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "contained",
        onClick: this.goToCart
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "contained",
        color: "primary",
        onClick: this.handleConfirmOpen
      }, "Pay"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
        open: isDialogOpen,
        onClose: this.handleConfirmClose,
        dialogTitle: "Payment confirmation",
        dialogText: this.getDialogText(),
        onConfirm: this.handlePayment
      }));
    }
  }]);

  return Payment;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    carts: state.carts
  };
};

var mapDispatchToProps = {
  changeTotalCartItems: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["changeTotalCartItems"],
  clearCart: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["clearCart"],
  addOrder: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["addOrder"]
};
var PaymentPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Payment);

/***/ }),

/***/ "./src/pages/Users.tsx":
/*!*****************************!*\
  !*** ./src/pages/Users.tsx ***!
  \*****************************/
/*! exports provided: Users, UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



function Users(props) {
  var users = props.users,
      history = props.history;

  var goHome = function goHome() {
    history.push('/');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center",
    className: "py-4"
  }, "List of users")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    "aria-label": "simple table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Surname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Role"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, "Picture"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, users.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
      key: user.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, user.surname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, user.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      alt: user.name,
      src: user.pictureUrl
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "space-between",
    alignItems: "center",
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    onClick: goHome
  }, "Back")));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};

var UsersPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Users);

/***/ }),

/***/ "./src/redux/actions/index.ts":
/*!************************************!*\
  !*** ./src/redux/actions/index.ts ***!
  \************************************/
/*! exports provided: usersFetched, userChanged, sessionChange, booksFetched, selectBook, deductBookQuantity, addBookQuantity, changeBookDetails, deleteBook, addBookToCart, removeBookFromCart, clearCart, changeTotalCartItems, addOrder, changeOrderStatus, modalOpen, modalClose, dialogOpen, dialogClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFetched", function() { return usersFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userChanged", function() { return userChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionChange", function() { return sessionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booksFetched", function() { return booksFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBook", function() { return selectBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deductBookQuantity", function() { return deductBookQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBookQuantity", function() { return addBookQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBookDetails", function() { return changeBookDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBook", function() { return deleteBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBookToCart", function() { return addBookToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBookFromCart", function() { return removeBookFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTotalCartItems", function() { return changeTotalCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrder", function() { return addOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOrderStatus", function() { return changeOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogOpen", function() { return dialogOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogClose", function() { return dialogClose; });
var usersFetched = function usersFetched(users) {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users: users
  };
};
var userChanged = function userChanged(user) {
  return {
    type: 'USER_CHANGED',
    user: user
  };
};
var sessionChange = function sessionChange(session) {
  return {
    type: 'SESSION_CHANGE',
    session: session
  };
};
var booksFetched = function booksFetched(books) {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books: books
  };
};
var selectBook = function selectBook(book) {
  return {
    type: 'SELECT_BOOK',
    book: book
  };
};
var deductBookQuantity = function deductBookQuantity(bookId) {
  return {
    type: 'DEDUCT_BOOK_QUANTITY',
    bookId: bookId
  };
};
var addBookQuantity = function addBookQuantity(bookId) {
  return {
    type: 'ADD_BOOK_QUANTITY',
    bookId: bookId
  };
};
var changeBookDetails = function changeBookDetails(book) {
  return {
    type: 'CHANGE_BOOK_DETAILS',
    book: book
  };
};
var deleteBook = function deleteBook(bookId) {
  return {
    type: 'DELETE_BOOK',
    bookId: bookId
  };
};
var addBookToCart = function addBookToCart(book, userId) {
  return {
    type: 'ADD_BOOK_TO_CART',
    book: book,
    userId: userId
  };
};
var removeBookFromCart = function removeBookFromCart(book, userId) {
  return {
    type: 'REMOVE_BOOK_FROM_CART',
    book: book,
    userId: userId
  };
};
var clearCart = function clearCart(userId) {
  return {
    type: 'CLEAR_CART',
    userId: userId
  };
};
var changeTotalCartItems = function changeTotalCartItems(total) {
  return {
    type: 'CHANGE_TOTAL_CART_ITEMS',
    total: total
  };
};
var addOrder = function addOrder(order) {
  return {
    type: 'ADD_ORDER',
    order: order
  };
};
var changeOrderStatus = function changeOrderStatus(orderId, status) {
  return {
    type: 'ORDER_STATUS_CHANGE',
    status: status,
    orderId: orderId
  };
};
var modalOpen = function modalOpen() {
  return {
    type: 'MODAL_OPEN'
  };
};
var modalClose = function modalClose() {
  return {
    type: 'MODAL_CLOSE'
  };
};
var dialogOpen = function dialogOpen() {
  return {
    type: 'DIALOG_OPEN'
  };
};
var dialogClose = function dialogClose() {
  return {
    type: 'DIALOG_CLOSE'
  };
};

/***/ }),

/***/ "./src/redux/reducers/book.ts":
/*!************************************!*\
  !*** ./src/redux/reducers/book.ts ***!
  \************************************/
/*! exports provided: book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "book", function() { return book; });
var book = function book() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('action');
  console.log(action);

  switch (action.type) {
    case 'SELECT_BOOK':
      return action.book;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/books.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/books.ts ***!
  \*************************************/
/*! exports provided: books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "books", function() { return books; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var books = function books() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(action.books);

    case 'DEDUCT_BOOK_QUANTITY':
      return state.map(function (book) {
        if (book.id === action.bookId) {
          book.quantity -= 1;
        }

        return book;
      });

    case 'ADD_BOOK_QUANTITY':
      return state.map(function (book) {
        if (book.id === action.bookId) {
          book.quantity += 1;
        }

        return book;
      });

    case 'CHANGE_BOOK_DETAILS':
      return state.map(function (book) {
        if (book.id === action.book.id) {
          Object.assign(book, action.book);
        }

        return book;
      });

    case 'DELETE_BOOK':
      return state.map(function (book) {
        if (book.id === action.bookId) {
          book.deleted = true;
        }

        return book;
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/carts.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/carts.ts ***!
  \*************************************/
/*! exports provided: carts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carts", function() { return carts; });
var carts = function carts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var userId = action.userId,
      book = action.book;
  console.log('book');
  console.log(book);

  switch (action.type) {
    case 'ADD_BOOK_TO_CART':
      var addBook = function addBook() {
        var bookInCartIndex = state[userId].findIndex(function (bk) {
          return bk.id === book.id;
        });

        if (bookInCartIndex >= 0) {
          state[userId][bookInCartIndex].quantity += 1;
        } else {
          state[userId].push({
            id: book.id,
            quantity: 1,
            price: book.price
          });
        }
      };

      if (userId in state) {
        addBook();
      } else {
        state[userId] = [];
        addBook();
      }

      return state;

    case 'REMOVE_BOOK_FROM_CART':
      var userCart = state[userId];
      var bookInCartIndex = userCart.findIndex(function (bk) {
        return bk.id === book.id;
      });

      if (userCart[bookInCartIndex].quantity === 1) {
        userCart.splice(bookInCartIndex, 1);
      } else {
        userCart[bookInCartIndex].quantity -= 1;
      }

      return state;

    case 'CLEAR_CART':
      delete state[userId];
      return state;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/dialog.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/dialog.ts ***!
  \**************************************/
/*! exports provided: dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return dialog; });
var dialog = function dialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DIALOG_OPEN':
      return true;

    case 'DIALOG_CLOSE':
      return false;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./src/redux/reducers/users.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/redux/reducers/user.ts");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session */ "./src/redux/reducers/session.ts");
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books */ "./src/redux/reducers/books.ts");
/* harmony import */ var _carts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carts */ "./src/redux/reducers/carts.ts");
/* harmony import */ var _total__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./total */ "./src/redux/reducers/total.ts");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders */ "./src/redux/reducers/orders.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal */ "./src/redux/reducers/modal.ts");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book */ "./src/redux/reducers/book.ts");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog */ "./src/redux/reducers/dialog.ts");











/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user__WEBPACK_IMPORTED_MODULE_2__["user"],
  users: _users__WEBPACK_IMPORTED_MODULE_1__["users"],
  session: _session__WEBPACK_IMPORTED_MODULE_3__["session"],
  books: _books__WEBPACK_IMPORTED_MODULE_4__["books"],
  book: _book__WEBPACK_IMPORTED_MODULE_9__["book"],
  carts: _carts__WEBPACK_IMPORTED_MODULE_5__["carts"],
  total: _total__WEBPACK_IMPORTED_MODULE_6__["total"],
  orders: _orders__WEBPACK_IMPORTED_MODULE_7__["orders"],
  modal: _modal__WEBPACK_IMPORTED_MODULE_8__["modal"],
  dialog: _dialog__WEBPACK_IMPORTED_MODULE_10__["dialog"]
}));

/***/ }),

/***/ "./src/redux/reducers/modal.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/modal.ts ***!
  \*************************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
var modal = function modal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'MODAL_OPEN':
      return true;

    case 'MODAL_CLOSE':
      return false;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/orders.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/orders.ts ***!
  \**************************************/
/*! exports provided: orders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orders", function() { return orders; });
var orders = function orders() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var order = action.order,
      status = action.status,
      orderId = action.orderId;

  switch (action.type) {
    case 'ADD_ORDER':
      state.push(order);
      return state;

    case 'REMOVE_ORDER':
      state.splice(order);
      return state;

    case 'ORDER_STATUS_CHANGE':
      var selectedOrder = state.find(function (ordr) {
        return ordr.id === orderId;
      });
      selectedOrder.status = status;
      return state;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/session.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/session.ts ***!
  \***************************************/
/*! exports provided: session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
var session = function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SESSION_CHANGE':
      return action.session;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/total.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/total.ts ***!
  \*************************************/
/*! exports provided: total */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "total", function() { return total; });
var total = function total() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHANGE_TOTAL_CART_ITEMS':
      return action.total;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/user.ts":
/*!************************************!*\
  !*** ./src/redux/reducers/user.ts ***!
  \************************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'USER_CHANGED':
      return action.user;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/reducers/users.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/users.ts ***!
  \*************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(action.users);

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/reducers */ "./src/redux/reducers/index.ts");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.ts");



var persistedState = Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__["loadState"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], persistedState);
store.subscribe(function () {
  Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__["saveState"])({
    users: store.getState().users,
    user: store.getState().user,
    session: store.getState().session,
    books: store.getState().books,
    carts: store.getState().carts,
    total: store.getState().total,
    orders: store.getState().orders
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/ZDljZCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9vcmRlci1zdGF0dXNlcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9wYXltZW50LW1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXNlL3VzZXItcm9sZS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb29rSW5mb0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm9va0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jvb2tUaWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25maXJtRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHVzQ2hhbmdlU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50cy9wcm9kdWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NhcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9PcmRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QYXltZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2FydHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9vcmRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3RvdGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZVdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiXSwibmFtZXMiOlsibG9hZGVyU3RhdGUkIiwiQmVoYXZpb3JTdWJqZWN0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJlbnZpcm9ubWVudCIsInVzZXJzIiwibGVuZ3RoIiwidXNlcnNGZXRjaGVkIiwidXNlcnNBcGkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwibWFwIiwidXNlciIsImkiLCJpZCIsImxvZ2luIiwidXVpZCIsIm5hbWUiLCJmaXJzdCIsInN1cm5hbWUiLCJsYXN0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJvbGUiLCJVU0VSX1JPTEUiLCJhZG1pbiIsImNsaWVudCIsInBpY3R1cmVVcmwiLCJwaWN0dXJlIiwibGFyZ2UiLCJzdWJzY3JpYmUiLCJzZXRTdGF0ZSIsImhpc3RvcnkiLCJIb21lUGFnZSIsIkxvZ2luUGFnZSIsIkNhcnRQYWdlIiwiUGF5bWVudFBhZ2UiLCJPcmRlckhpc3RvcnlQYWdlIiwiVXNlcnNQYWdlIiwiUmVhY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJ1c2VyQ2hhbmdlZCIsIkFwcENvbnRhaW5lciIsImNvbm5lY3QiLCJPUkRFUl9TVEFUVVNFUyIsIlBheW1lbnRNb2RlbCIsIkxvY2FsU3RhdGUiLCJTaW1wbGVEaWFsb2ciLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DbG9zZSIsImNoYW5nZUJvb2tEZXRhaWxzIiwidG9hc3QiLCJzdWNjZXNzIiwib3BlbiIsImJvb2siLCJ0aXRsZSIsImF1dGhvciIsInF1YW50aXR5IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJvb2tfY292ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZVNhdmVDaGFuZ2VzIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiQ29tcG9uZW50IiwiQm9va0luZm9EaWFsb2dDb250YWluZXIiLCJQYXJlbnRQcm9wcyIsIkJvb2tMaXN0IiwicmVtb3ZlQm9va0Zyb21DYXJ0IiwiYWRkQm9va1F1YW50aXR5IiwiY2hhbmdlVG90YWxDYXJ0SXRlbXMiLCJjYXJ0cyIsInJlZHVjZSIsInAiLCJjIiwiYWRkQm9va1RvQ2FydCIsImRlZHVjdEJvb2tRdWFudGl0eSIsImJvb2tzIiwibW9kZSIsInVzZXJDYXJ0IiwidXNlckJvb2tzIiwiaXRlbSIsImZpbmQiLCJnZXRUb3RhbEZvclJvdyIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInRvRml4ZWQiLCJnZXRUb3RhbCIsIk51bWJlciIsImhhbmRsZVJlbW92ZUl0ZW0iLCJoYW5kbGVBZGRJdGVtIiwidG90YWwiLCJCb29rTGlzdENvbnRhaW5lciIsIkJvb2tUaWxlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsImltZyIsIm1heFdpZHRoIiwiaGVhZGVyIiwibWFyZ2luIiwiaGFuZGxlQm9va0RpYWxvZ09wZW4iLCJzZWxlY3RlZEJvb2siLCJvbk1vZGFsT3BlbiIsInVzZXJSb2xlIiwiY2xhc3NlcyIsImFkZFRvQ2FydCIsIm9uQm9va0RlbGV0ZSIsIkNvbmZpcm1EaWFsb2ciLCJkaWFsb2dUaXRsZSIsImRpYWxvZ1RleHQiLCJvbkNvbmZpcm0iLCJkYXRhIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwic3BhbiIsIm1hcmdpbkxlZnQiLCJIZWFkZXIiLCJzZXNzaW9uIiwiaGFuZGxlR29Ub0hpc3RvcnkiLCJwdXNoIiwiaGFuZGxlR29Ub1VzZXJzIiwiY29sb3IiLCJIZWFkZXJDb250YWluZXIiLCJTcGlubmVyIiwiU3RhdHVzQ2hhbmdlU2VsZWN0IiwibmV3U3RhdHVzIiwiY2hhbmdlT3JkZXJTdGF0dXMiLCJvcmRlcklkIiwic3RhdHVzIiwibWluV2lkdGgiLCJoYW5kbGVDaGFuZ2UiLCJTdGF0dXNDaGFuZ2VTZWxlY3RDb250YWluZXIiLCJVc2VyQWN0aW9ucyIsInVzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIkJvb2xlYW4iLCJzZXNzaW9uQ2hhbmdlIiwiaXNBZG1pbiIsImhhbmRsZU1lbnUiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVMb2dvdXQiLCJnb1RvSGlzdG9yeSIsImhhbmRsZUdvVG9Vc2VyTGlzdCIsImdvVG9Vc2VycyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlVzZXJBY3Rpb25zQ29udGFpbmVyIiwiYm9va3NBcGkiLCJpc1Byb2R1Y3Rpb24iLCJpc0RldmVsb3BtZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJzdG9yZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXJ2aWNlV29ya2VyIiwiaW5pdGlhbFN0b3JlU3RhdGUiLCJvcmRlcnMiLCJsb2FkU3RhdGUiLCJzZXJpYWxpemVkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwic2F2ZVN0YXRlIiwibmV4dCIsInRpbWVvdXQiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJDYXJ0IiwiY2xlYXJDYXJ0IiwiZ29Ib21lIiwiY2xlYXJBbGxDYXJ0SXRlbXMiLCJnb1RvUGF5bWVudCIsIkhvbWUiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwibW9kYWxPcGVuIiwic2VsZWN0Qm9vayIsImRpYWxvZ09wZW4iLCJtb2RhbENsb3NlIiwiZGlhbG9nQ2xvc2UiLCJkZWxldGVCb29rIiwiaGFuZGxlQ29uZmlybUNsb3NlIiwiYm9va3NGZXRjaGVkIiwicHJpbWFyeV9pc2JuMTAiLCJwdWJsaXNoZWRfZGF0ZSIsImJvb2tfaW1hZ2UiLCJnZXRSYW5kb21QcmljZSIsIm1vZGFsIiwiZGlhbG9nIiwiYWN0aXZlQm9va3MiLCJmaWx0ZXIiLCJkZWxldGVkIiwicGFkZGluZyIsImhhbmRsZUNvbmZpcm1PcGVuIiwiaGFuZGxlTW9kYWxPcGVuIiwiaGFuZGxlQWRkVG9DYXJ0IiwiaGFuZGxlTW9kYWxDbG9zZSIsImhhbmRsZUJvb2tEZWxldGUiLCJ3aWR0aCIsImhlaWdodCIsIkxvZ2luIiwic2VsZWN0VXNlciIsInNlbGVjdGVkVXNlciIsInVzciIsIk9yZGVycyIsImFsbE9yZGVycyIsIm9yZGVyIiwiaW5jbHVkZXMiLCJkYXRlIiwiZGlzcGxheSIsImZ1bGxCb29rSW5mbyIsImJrIiwiUGF5bWVudCIsImFkZE9yZGVyIiwicGF5bWVudCIsImNhcmQiLCJwYWlkIiwibmV3IiwiRGF0ZSIsIm5vdyIsImlzRGlhbG9nT3BlbiIsImRlbGl2ZXJ5IiwiY2FydCIsImhhbmRsZVBheW1lbnRDaGFuZ2UiLCJnb1RvQ2FydCIsImdldERpYWxvZ1RleHQiLCJoYW5kbGVQYXltZW50IiwiVXNlcnMiLCJ0eXBlIiwiYm9va0lkIiwidXNlcklkIiwiYWN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYWRkQm9vayIsImJvb2tJbkNhcnRJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImNvbWJpbmVSZWR1Y2VycyIsInNlbGVjdGVkT3JkZXIiLCJvcmRyIiwiaXNMb2NhbGhvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibWF0Y2giLCJyZWdpc3RlciIsImNvbmZpZyIsInByb2Nlc3MiLCJyZWdpc3RlclZhbGlkU1ciLCJzd1VybCIsIm5hdmlnYXRvciIsInJlZ2lzdHJhdGlvbiIsIm9udXBkYXRlZm91bmQiLCJpbnN0YWxsaW5nV29ya2VyIiwiaW5zdGFsbGluZyIsIm9uc3RhdGVjaGFuZ2UiLCJjb250cm9sbGVyIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIiLCJoZWFkZXJzIiwiY29udGVudFR5cGUiLCJnZXQiLCJpbmRleE9mIiwicmVhZHkiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIiwicGVyc2lzdGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDblJBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJB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Q0FBVDtBQVNELENBVkQsRSIsImZpbGUiOiJqcy9tYWluLmZjY2I2NDJmNWE5YWEyNGVlNzFmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaC1mbGV4IHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmgtZmxleCA+IGRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnB5LTEge1xcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTQge1xcbiAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdC0zIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYi0zIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdC0tMiB7XFxuICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgwO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXG4gICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJ2Vudmlyb25tZW50JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgdXNlckNoYW5nZWQsIHVzZXJzRmV0Y2hlZCB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vYmFzZS91c2VyLm1vZGVsJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9wYWdlcy9Mb2dpbic7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgeyBQYXltZW50UGFnZSB9IGZyb20gJy4vcGFnZXMvUGF5bWVudCc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlQYWdlIH0gZnJvbSAnLi9wYWdlcy9PcmRlcnMnO1xuaW1wb3J0IHsgQ2FydFBhZ2UgfSBmcm9tICcuL3BhZ2VzL0NhcnQnO1xuaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IHsgVXNlcnNQYWdlIH0gZnJvbSAnLi9wYWdlcy9Vc2Vycyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlclN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2Vudmlyb25tZW50KCknKTtcbiAgICBjb25zb2xlLmxvZyhlbnZpcm9ubWVudCgpKTtcbiAgICBjb25zdCB7IHVzZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghdXNlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHVzZXJzRmV0Y2hlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgdXNlcnNBcGkgfSA9IGVudmlyb25tZW50KCk7XG4gICAgICBmZXRjaChgJHt1c2Vyc0FwaX0/Zm9ybWF0PWpzb24mcmVzdWx0cz01Jm5hdD1nYiZpbmM9bmFtZSxsb2dpbixwaWN0dXJlYClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlcnMgPSByZXNwb25zZS5yZXN1bHRzLm1hcCgodXNlcjogYW55LCBpOiBudW1iZXIpID0+ICh7XG4gICAgICAgICAgICBpZDogdXNlci5sb2dpbi51dWlkLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLmZpcnN0LFxuICAgICAgICAgICAgc3VybmFtZTogdXNlci5uYW1lLmxhc3QsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci5sb2dpbi51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLmxvZ2luLnBhc3N3b3JkLFxuICAgICAgICAgICAgcm9sZTogaSAlIDIgPyBVU0VSX1JPTEUuYWRtaW4gOiBVU0VSX1JPTEUuY2xpZW50LFxuICAgICAgICAgICAgcGljdHVyZVVybDogdXNlci5waWN0dXJlLmxhcmdlLFxuICAgICAgICAgIH0gYXMgVXNlck1vZGVsKSk7XG4gICAgICAgICAgdXNlcnNGZXRjaGVkKHVzZXJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRlclN0YXRlJC5zdWJzY3JpYmUoKGlzTG9hZGluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZyB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNMb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyIGhpc3Rvcnk9e2hpc3RvcnkgYXMgSGlzdG9yeX0gLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2NhcnQnIGNvbXBvbmVudD17Q2FydFBhZ2V9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wYXltZW50JyBjb21wb25lbnQ9e1BheW1lbnRQYWdlfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvb3JkZXJzLWhpc3RvcnknIGNvbXBvbmVudD17T3JkZXJIaXN0b3J5UGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL3VzZXJzJyBjb21wb25lbnQ9e1VzZXJzUGFnZX0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyB1c2Vyc0ZldGNoZWQsIHVzZXJDaGFuZ2VkIH07XG5leHBvcnQgY29uc3QgQXBwQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcbiIsImV4cG9ydCBlbnVtIE9SREVSX1NUQVRVU0VTIHtcbiAgICBuZXcgPSAnbmV3JyxcbiAgICBwYWlkID0gJ3BhaWQnLFxuICAgIHNlbnQgPSAnc2VudCcsXG4gICAgY2FuY2VsbGVkID0gJ2NhbmNlbGxlZCdcbn1cbiIsImV4cG9ydCBlbnVtIFBheW1lbnRNb2RlbCB7XG4gICAgZGVsaXZlcnkgPSAnZGVsaXZlcnknLFxuICAgIGNhcmQgPSAnY2FyZCdcbn1cbiIsImV4cG9ydCBlbnVtIFVTRVJfUk9MRSB7XG4gICAgYWRtaW4gPSAnQURNSU4nLFxuICAgIGNsaWVudCA9ICdDTElFTlQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIEdyaWQsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IGNoYW5nZUJvb2tEZXRhaWxzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb3BlbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTG9jYWxTdGF0ZSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgYXV0aG9yPzogc3RyaW5nO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgcHJpY2U/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuY2xhc3MgU2ltcGxlRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBMb2NhbFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gbmV3IExvY2FsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzOiBhbnksIHByZXZTdGF0ZTogYW55KSB7XG4gICAgaWYgKG5leHRQcm9wcy5ib29rICYmIG5leHRQcm9wcy5ib29rLmlkICE9PSBwcmV2U3RhdGUuaWQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGl0bGUsIGlkLCBhdXRob3IsIHF1YW50aXR5LCBwcmljZSwgZGVzY3JpcHRpb24sXG4gICAgICB9ID0gbmV4dFByb3BzLmJvb2sgYXMgQm9va01vZGVsO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIGlkLCBhdXRob3IsIHF1YW50aXR5LCBwcmljZSwgZGVzY3JpcHRpb24sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyB9PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSBhcyBQaWNrPExvY2FsU3RhdGUsIGtleW9mIExvY2FsU3RhdGU+KTtcbiAgfTtcblxuICBoYW5kbGVTYXZlQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UsIGNoYW5nZUJvb2tEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNoYW5nZUJvb2tEZXRhaWxzKHRoaXMuc3RhdGUgYXMgQm9va01vZGVsKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdCb29rIGRldGFpbHMgaGF2ZSBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZyB8IG51bWJlciB8IHt9IHwgUmVhY3QuUmVhY3ROb2RlQXJyYXkgfCBSZWFjdC5SZWFjdFBvcnRhbCB8XG4gICAgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBvcGVuLFxuICAgICAgYm9vayxcbiAgICAgIHVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIGF1dGhvcixcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcHJpY2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT0nc2ltcGxlLWRpYWxvZy10aXRsZScgb3Blbj17b3Blbn0gZnVsbFdpZHRoIG1heFdpZHRoPSdtZCc+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gZGlyZWN0aW9uPSdyb3cnIHdyYXA9J25vd3JhcCcgY2xhc3NOYW1lPSdweS0zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtib29rLmJvb2tfY292ZXJ9IGFsdD17Ym9vay50aXRsZX0gLz5cbiAgICAgICAgICAgIHt1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5jbGllbnQgJiYgKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBjbGFzc05hbWU9J3B4LTQnPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz57Ym9vay50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPntib29rLmF1dGhvcn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPntib29rLmRlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5hZG1pblxuICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBjbGFzc05hbWU9J3B4LTQnPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Jvb2sgdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCb29rIGF1dGhvcidcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXV0aG9yJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQXZhaWxhYmxlIHBpZWNlcydcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdxdWFudGl0eSdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHJpY2UnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J215LTInXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVDaGFuZ2VzfT5TYXZlIGNoYW5nZXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgYm9vazogc3RhdGUuYm9vayxcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGNoYW5nZUJvb2tEZXRhaWxzIH07XG5cbmV4cG9ydCBjb25zdCBCb29rSW5mb0RpYWxvZ0NvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpbXBsZURpYWxvZyk7XG4iLCJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEljb25CdXR0b24sXG4gIExpc3RJdGVtQXZhdGFyLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge1xuICBhZGRCb29rUXVhbnRpdHksXG4gIGFkZEJvb2tUb0NhcnQsXG4gIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLFxuICBkZWR1Y3RCb29rUXVhbnRpdHksXG4gIHJlbW92ZUJvb2tGcm9tQ2FydCxcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmNsYXNzIFBhcmVudFByb3BzIHtcbiAgbW9kZSE6IHN0cmluZztcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgaGFuZGxlUmVtb3ZlSXRlbSA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZW1vdmVCb29rRnJvbUNhcnQsIGFkZEJvb2tRdWFudGl0eSwgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIHVzZXIsIGNhcnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbW92ZUJvb2tGcm9tQ2FydChib29rLCB1c2VyLmlkKTtcbiAgICBhZGRCb29rUXVhbnRpdHkoYm9vay5pZCk7XG4gICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoY2FydHNbdXNlci5pZF1cbiAgICAgIC5yZWR1Y2UoKHA6IG51bWJlciwgYzogQ2FydEl0ZW1Nb2RlbCkgPT4gcCArIGMucXVhbnRpdHksIDApKTtcbiAgfTtcblxuICBoYW5kbGVBZGRJdGVtKGJvb2s6IEJvb2tNb2RlbCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZEJvb2tUb0NhcnQsIGRlZHVjdEJvb2tRdWFudGl0eSwgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIHVzZXIsIGNhcnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGFkZEJvb2tUb0NhcnQoYm9vaywgdXNlci5pZCk7XG4gICAgZGVkdWN0Qm9va1F1YW50aXR5KGJvb2suaWQpO1xuICAgIGNoYW5nZVRvdGFsQ2FydEl0ZW1zKGNhcnRzW3VzZXIuaWRdXG4gICAgICAucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHAgKyBjLnF1YW50aXR5LCAwKSk7XG4gIH1cblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyIHwge30gfCBSZWFjdC5SZWFjdE5vZGVBcnJheSB8IFJlYWN0LlJlYWN0UG9ydGFsIHxcbiAgICBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcixcbiAgICAgIGNhcnRzLFxuICAgICAgYm9va3MsXG4gICAgICBtb2RlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVzZXJDYXJ0ID0gdXNlci5pZCBpbiBjYXJ0cyA/IGNhcnRzW3VzZXIuaWRdIDogbnVsbDtcbiAgICBjb25zdCB1c2VyQm9va3MgPSB1c2VyQ2FydCA/IHVzZXJDYXJ0XG4gICAgICAubWFwKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBib29rcy5maW5kKChib29rOiBCb29rTW9kZWwpID0+IGJvb2suaWQgPT09IGl0ZW0uaWQpKSA6IFtdO1xuICAgIGNvbnN0IGdldFRvdGFsRm9yUm93ID0gKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgaWYgKHVzZXJDYXJ0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB1c2VyQ2FydC5maW5kKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBpdGVtLmlkID09PSBib29rLmlkKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gKGl0ZW0ucXVhbnRpdHkgKiBwYXJzZUZsb2F0KChib29rLnByaWNlKS50b1N0cmluZygpKSkudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzAuMDAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb3RhbCA9ICgpID0+IHtcbiAgICAgIGlmICh1c2VyQ2FydCkge1xuICAgICAgICByZXR1cm4gdXNlckNhcnQucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBwICs9IChOdW1iZXIoYy5wcmljZSkgKiBjLnF1YW50aXR5KTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwgMCkudG9GaXhlZCgyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q292ZXI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+VGl0bGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+QXV0aG9yPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPlByaWNlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkFtb3VudDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHt1c2VyQm9va3MubWFwKChib29rOiBCb29rTW9kZWwpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2Jvb2suaWR9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtib29rLnRpdGxlfSBzcmM9e2Jvb2suYm9va19jb3Zlcn0gLz5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Ym9vay50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Ym9vay5hdXRob3J9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2BcXHUyMEFDJHtib29rLnByaWNlfWB9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIHttb2RlID09PSAnZWRpdCdcbiAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVJdGVtKGJvb2spfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdhZGQgdG8gc2hvcHBpbmcgY2FydCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHt1c2VyQ2FydC5maW5kKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBpdGVtLmlkID09PSBib29rLmlkKS5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZEl0ZW0oYm9vayl9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2FkZCB0byBzaG9wcGluZyBjYXJ0J1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7bW9kZSA9PT0gJ3ByZXZpZXcnXG4gICAgICAgICAgICAgICYmIDxUYWJsZUNlbGw+e3VzZXJDYXJ0LmZpbmQoKGl0ZW06IENhcnRJdGVtTW9kZWwpID0+IGl0ZW0uaWQgPT09IGJvb2suaWQpLnF1YW50aXR5fTwvVGFibGVDZWxsPn1cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57YFxcdTIwQUMke2dldFRvdGFsRm9yUm93KGJvb2spfWB9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NH0gLz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz48c3Ryb25nPlRvdGFsOjwvc3Ryb25nPjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD57Z2V0VG90YWwoKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIHshdXNlckJvb2tzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGFsaWduPSdjZW50ZXInPllvdXIgY2FydCBpcyBlbXB0eS48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIsXG4gIHRvdGFsOiBzdGF0ZS50b3RhbCxcbiAgY2FydHM6IHN0YXRlLmNhcnRzLFxuICBib29rczogc3RhdGUuYm9va3MsXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkQm9va1F1YW50aXR5LFxuICBkZWR1Y3RCb29rUXVhbnRpdHksXG4gIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLFxuICByZW1vdmVCb29rRnJvbUNhcnQsXG4gIGFkZEJvb2tUb0NhcnQsXG59O1xuXG5leHBvcnQgY29uc3QgQm9va0xpc3RDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29rTGlzdCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgR3JpZCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRTaG9wcGluZ0NhcnQnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4uL2Jhc2UvdXNlci1yb2xlLm1vZGVsJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgb25Nb2RhbE9wZW46IEZ1bmN0aW9uO1xuICBvbkJvb2tEZWxldGU6IEZ1bmN0aW9uO1xuICBhZGRUb0NhcnQ6IEZ1bmN0aW9uO1xuICBzZWxlY3RlZEJvb2s6IEJvb2tNb2RlbDtcbiAgdXNlclJvbGU6IFVTRVJfUk9MRTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBCb29rVGlsZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiBjcmVhdGVTdHlsZXMoe1xuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgbWFyZ2luOiAnMnB4IDAnLFxuICAgIH0sXG4gIH0pKTtcblxuICBjb25zdCBoYW5kbGVCb29rRGlhbG9nT3BlbiA9IChzZWxlY3RlZEJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHsgb25Nb2RhbE9wZW4gfSA9IHByb3BzO1xuICAgIG9uTW9kYWxPcGVuKHNlbGVjdGVkQm9vayk7XG4gIH07XG5cbiAgY29uc3QgeyBzZWxlY3RlZEJvb2ssIHVzZXJSb2xlIH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezR9IHNtPXszfSBtZD17Mn0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgZGlyZWN0aW9uPSdjb2x1bW4nPlxuICAgICAgPEdyaWQgb25DbGljaz17KCkgPT4gaGFuZGxlQm9va0RpYWxvZ09wZW4oc2VsZWN0ZWRCb29rKX0gY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZEJvb2suYm9va19jb3Zlcn0gYWx0PXtzZWxlY3RlZEJvb2sudGl0bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT57c2VsZWN0ZWRCb29rLnRpdGxlfTwvaDQ+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT57c2VsZWN0ZWRCb29rLmF1dGhvcn08L2g1PlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPSdjb2x1bW4nPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxuICAgICAgICAgIHt1c2VyUm9sZSA9PT0gVVNFUl9ST0xFLmNsaWVudCAmJiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249J2NvbHVtbic+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2BcXHUyMEFDJHtzZWxlY3RlZEJvb2sucHJpY2V9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nYWRkIHRvIHNob3BwaW5nIGNhcnQnXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5hZGRUb0NhcnQoc2VsZWN0ZWRCb29rKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEJvb2sucXVhbnRpdHkgPCAxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZGRTaG9wcGluZ0NhcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT0nbXQtLTInPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEJvb2sucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3VzZXJSb2xlID09PSBVU0VSX1JPTEUuYWRtaW4gJiYgKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj0nc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J3JlbW92ZSBib29rJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQm9va0RlbGV0ZShzZWxlY3RlZEJvb2spfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2VkaXQgYm9vayBpbmZvJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJvb2tEaWFsb2dPcGVuKHNlbGVjdGVkQm9vayl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBHcmlkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi9iYXNlL2Jvb2subW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkLFxuICBvcGVuOiBib29sZWFuLFxuICBkaWFsb2dUaXRsZTogc3RyaW5nLFxuICBkaWFsb2dUZXh0OiBzdHJpbmcsXG4gIG9uQ29uZmlybTogKGJvb2s6IEJvb2tNb2RlbCkgPT4gdm9pZCxcbiAgZGF0YTogYW55O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybURpYWxvZyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIG9uQ2xvc2UsIG9wZW4sIGRpYWxvZ1RpdGxlLCBkaWFsb2dUZXh0LCBvbkNvbmZpcm0sIGRhdGEsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgb25DbG9zZT17b25DbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PSdzaW1wbGUtZGlhbG9nLXRpdGxlJyBvcGVuPXtvcGVufSBtYXhXaWR0aD0neHMnPlxuICAgICAgPERpYWxvZ1RpdGxlPntkaWFsb2dUaXRsZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gY2xhc3NOYW1lPSdweS00Jz57ZGlhbG9nVGV4dH08L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3NOYW1lPSdweS0zJz5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17KCkgPT4gb25Db25maXJtKGRhdGEpfT5Db25maXJtPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgQXZhdGFyLCBCYWRnZSwgY3JlYXRlU3R5bGVzLCBHcmlkLCBJY29uQnV0dG9uLCBUaGVtZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCc7XG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9uc0NvbnRhaW5lciB9IGZyb20gJy4vVXNlckFjdGlvbnMnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgUGFyZW50UHJvcHM7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHNwYW46IHtcbiAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7XG4gICAgdXNlciwgc2Vzc2lvbiwgdG90YWwsIGhpc3RvcnksXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVHb1RvSGlzdG9yeSA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy9vcmRlcnMtaGlzdG9yeScpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdvVG9Vc2VycyA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy91c2VycycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSBhcmlhLWxhYmVsPSdhZGQgdG8gc2hvcHBpbmcgY2FydCc+XG4gICAgICAgICAgICAgIDxIb21lSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgIEF3ZXNvbWUgQm9va3N0b3JlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHtzZXNzaW9uICYmIHVzZXJcbiAgICAgICAgICAmJiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17N30gZGlyZWN0aW9uPSdyb3cnIGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXs2fSBhbGlnbkl0ZW1zPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt1c2VyLnVzZXJuYW1lfSBzcmM9e3VzZXIucGljdHVyZVVybH0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3Bhbn0+e2Ake3VzZXIubmFtZX0gJHt1c2VyLnN1cm5hbWV9YH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezZ9IGp1c3RpZnk9J2ZsZXgtZW5kJz5cbiAgICAgICAgICAgICAgICB7dXNlci5yb2xlID09PSBVU0VSX1JPTEUuY2xpZW50ICYmIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvY2FydCc+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IGFyaWEtbGFiZWw9J2FkZCB0byBzaG9wcGluZyBjYXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXt0b3RhbH0gY29sb3I9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxVc2VyQWN0aW9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgZ29Ub0hpc3Rvcnk9eygpID0+IGhhbmRsZUdvVG9IaXN0b3J5KCl9XG4gICAgICAgICAgICAgICAgICBnb1RvVXNlcnM9eygpID0+IGhhbmRsZUdvVG9Vc2VycygpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICAgIHshc2Vzc2lvbiAmJiA8UmVkaXJlY3QgdG89Jy9sb2dpbicgLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgdG90YWw6IHN0YXRlLnRvdGFsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL2Nzcy9yZWFjdC1zcGlubmVyLWxvYWRlci5jc3MnO1xuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NwaW5uZXItY29udGFpbmVyJz5cbiAgICAgIDxMb2FkZXJcbiAgICAgICAgdHlwZT0nVGFpbFNwaW4nXG4gICAgICAgIGNvbG9yPScjMDBCRkZGJ1xuICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBjaGFuZ2VPcmRlclN0YXR1cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBvcmRlcklkOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuY2xhc3MgU3RhdHVzQ2hhbmdlU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IG51bGwsXG4gICAgICBvcmRlcklkOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wczogYW55LCBwcmV2U3RhdGU6IGFueSkge1xuICAgIGlmICgnb3JkZXJJZCcgaW4gbmV4dFByb3BzICYmIG5leHRQcm9wcy5vcmRlcklkICE9PSBwcmV2U3RhdGUub3JkZXJJZCkge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiBuZXh0UHJvcHMuc3RhdHVzLCBvcmRlcklkOiBuZXh0UHJvcHMub3JkZXJJZCB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogYW55IH0+KSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdHVzID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgY2hhbmdlT3JkZXJTdGF0dXMsIG9yZGVySWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogbmV3U3RhdHVzIH0pO1xuICAgIGNoYW5nZU9yZGVyU3RhdHVzKG9yZGVySWQsIG5ld1N0YXR1cyk7XG4gICAgdG9hc3Quc3VjY2VzcygnT3JkZXIgc3RhdHVzIGNoYW5nZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZyB8IG51bWJlciB8IHt9IHwgUmVhY3QuUmVhY3ROb2RlQXJyYXkgfCBSZWFjdC5SZWFjdFBvcnRhbCB8XG4gICAgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD0nb3V0bGluZWQnIHN0eWxlPXt7IG1pbldpZHRoOiAxMjAgfX0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBsYWJlbElkPSdsYWJlbCdcbiAgICAgICAgICBpZD0nc2VsZWN0MSdcbiAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nbmV3JyBkaXNhYmxlZD5OZXc8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0ncGFpZCcgZGlzYWJsZWQ+UGFpZDwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdzZW50Jz5TZW50PC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J2NhbmNlbGxlZCc+Q2FuY2VsbGVkPC9NZW51SXRlbT5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBjaGFuZ2VPcmRlclN0YXR1cyB9O1xuXG5leHBvcnQgY29uc3QgU3RhdHVzQ2hhbmdlU2VsZWN0Q29udGFpbmVyID0gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFN0YXR1c0NoYW5nZVNlbGVjdCk7XG4iLCJpbXBvcnQgeyBJY29uQnV0dG9uLCBNZW51LCBNZW51SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEFjY291bnRDaXJjbGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcbmltcG9ydCB7IHNlc3Npb25DaGFuZ2UgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4uL2Jhc2UvdXNlci1yb2xlLm1vZGVsJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxudHlwZSBQYXJlbnRQcm9wcyA9IHtcbiAgZ29Ub0hpc3Rvcnk6ICgpID0+IHZvaWQ7XG4gIGdvVG9Vc2VyczogKCkgPT4gdm9pZDtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmZ1bmN0aW9uIFVzZXJBY3Rpb25zKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgeyBzZXNzaW9uQ2hhbmdlLCB1c2VyIH0gPSBwcm9wcztcbiAgY29uc3QgaXNBZG1pbiA9IHVzZXIucm9sZSA9PT0gVVNFUl9ST0xFLmFkbWluO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnUgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgc2Vzc2lvbkNoYW5nZShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR29Ub0hpc3RvcnkgPSAoKSA9PiB7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICBwcm9wcy5nb1RvSGlzdG9yeSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdvVG9Vc2VyTGlzdCA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHByb3BzLmdvVG9Vc2VycygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9J2FjY291bnQgb2YgY3VycmVudCB1c2VyJ1xuICAgICAgICBhcmlhLWNvbnRyb2xzPSdtZW51LWFwcGJhcidcbiAgICAgICAgYXJpYS1oYXNwb3B1cD0ndHJ1ZSdcbiAgICAgICAgb25DbGljaz17aGFuZGxlTWVudX1cbiAgICAgICAgY29sb3I9J2luaGVyaXQnXG4gICAgICA+XG4gICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8TWVudVxuICAgICAgICBpZD0nbWVudS1hcHBiYXInXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgIH19XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICB9fVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUdvVG9IaXN0b3J5fT57aXNBZG1pbiA/ICdPcmRlcnMgbWFuYWdlbWVudCcgOiAnT3JkZXIgaGlzdG9yeSd9PC9NZW51SXRlbT5cbiAgICAgICAge2lzQWRtaW4gJiYgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUdvVG9Vc2VyTGlzdH0+VXNlcnMgbWFuYWdlbWVudDwvTWVudUl0ZW0+fVxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2cgb3V0PC9NZW51SXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICB1c2VyOiBzdGF0ZS51c2VyLFxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IHNlc3Npb25DaGFuZ2UgfTtcblxuZXhwb3J0IGNvbnN0IFVzZXJBY3Rpb25zQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlckFjdGlvbnMpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHVzZXJzQXBpOiAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nLFxuICAgIGJvb2tzQXBpOiAnaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL2N1cnJlbnQvbWFzcy1tYXJrZXQtcGFwZXJiYWNrLmpzb24/YXBpLWtleT00bFZFQlNDZEZOSEVxd3hYTXVwNThKZHhyQ1NnSjFESycsXG4gICAgaXNQcm9kdWN0aW9uOiB0cnVlLFxuICAgIGlzRGV2ZWxvcG1lbnQ6IGZhbHNlLFxuICB9O1xufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSAnLi9zZXJ2aWNlV29ya2VyJztcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJy4vQXBwJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwQ29udGFpbmVyfS8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5zZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcbiIsImltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge2xvYWRlclN0YXRlJH0gZnJvbSAnLi9BcHAnXG5cbmNvbnN0IGluaXRpYWxTdG9yZVN0YXRlID0ge1xuICAgIHVzZXJzOiBbXSxcbiAgICB1c2VyOiAnJyxcbiAgICBzZXNzaW9uOiBmYWxzZSxcbiAgICBjYXJ0czoge30sXG4gICAgdG90YWw6IDAsXG4gICAgb3JkZXJzOiBbXSxcbiAgICBib29rczogW11cbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU3RhdGUgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRlJyk7XG4gICAgICAgIGlmIChzZXJpYWxpemVkU3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RvcmVTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkU3RhdGUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gaW5pdGlhbFN0b3JlU3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVTdGF0ZSA9IGFzeW5jIChzdGF0ZTogU3RhdGVNb2RlbCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxvYWRlclN0YXRlJC5uZXh0KHRydWUpO1xuICAgICAgICBhd2FpdCB0aW1lb3V0KDEwMDApO1xuICAgICAgICBsb2FkZXJTdGF0ZSQubmV4dChmYWxzZSk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgc2VyaWFsaXplZFN0YXRlKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gaWdub3JlIHdyaXRlIGVycm9yc1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXM6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sIENvbnRhaW5lciwgR3JpZCwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgQm9va0xpc3RDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tMaXN0JztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIGNsZWFyQ2FydCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVQcm9wcywgRGlzcGF0Y2hQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZnVuY3Rpb24gQ2FydChwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNhcnRzLCB1c2VyLCBjbGVhckNhcnQsIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBoaXN0b3J5LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHVzZXJDYXJ0ID0gY2FydHNbdXNlci5pZF07XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQWxsQ2FydEl0ZW1zID0gKCkgPT4ge1xuICAgIGNsZWFyQ2FydCh1c2VyLmlkKTtcbiAgICBjaGFuZ2VUb3RhbENhcnRJdGVtcygwKTtcbiAgICBnb0hvbWUoKTtcbiAgfTtcblxuICBjb25zdCBnb1RvUGF5bWVudCA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy9wYXltZW50Jyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIHhzPXsxMn0gY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcic+SXRlbXMgaW4geW91ciBjYXJ0OjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEJvb2tMaXN0Q29udGFpbmVyIG1vZGU9J2VkaXQnIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT0ncHktNCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9e2dvSG9tZX0+QmFjazwvQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsZWFyQWxsQ2FydEl0ZW1zKCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17IXVzZXJDYXJ0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICBvbkNsaWNrPXtnb1RvUGF5bWVudH1cbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJDYXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgUHJvY2VlZCB0byBwYXltZW50XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIGNhcnRzOiBzdGF0ZS5jYXJ0cyxcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQgfTtcblxuZXhwb3J0IGNvbnN0IENhcnRQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge1xuICBhZGRCb29rVG9DYXJ0LFxuICBib29rc0ZldGNoZWQsXG4gIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLFxuICBkZWR1Y3RCb29rUXVhbnRpdHksXG4gIGRlbGV0ZUJvb2ssIGRpYWxvZ0Nsb3NlLCBkaWFsb2dPcGVuLFxuICBtb2RhbENsb3NlLFxuICBtb2RhbE9wZW4sXG4gIHNlbGVjdEJvb2ssXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IENhcnRJdGVtTW9kZWwgfSBmcm9tICcuLi9iYXNlL2NhcnQtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBCb29rSW5mb0RpYWxvZ0NvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0luZm9EaWFsb2cnO1xuaW1wb3J0IHsgQm9va1RpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tUaWxlJztcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgW10+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBib29rcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWJvb2tzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyBib29rc0ZldGNoZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGJvb2tzQXBpIH0gPSBlbnZpcm9ubWVudCgpO1xuICAgICAgZmV0Y2goYm9va3NBcGkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJvb2tzID0gcmVzcG9uc2UucmVzdWx0cy5ib29rcy5tYXAoKGJvb2s6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBib29rLnByaW1hcnlfaXNibjEwLFxuICAgICAgICAgICAgdGl0bGU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLFxuICAgICAgICAgICAgcHVibGlzaGVkX2RhdGU6ICduL2EnLFxuICAgICAgICAgICAgYm9va19jb3ZlcjogYm9vay5ib29rX2ltYWdlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEwLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMuZ2V0UmFuZG9tUHJpY2UoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBib29rLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIH0gYXMgQm9va01vZGVsKSk7XG4gICAgICAgICAgYm9va3NGZXRjaGVkKGJvb2tzKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVG90YWxDYXJ0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRSYW5kb21QcmljZSA9ICgpID0+IHtcbiAgICBjb25zdCBtaW4gPSA1O1xuICAgIGNvbnN0IG1heCA9IDIwO1xuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKS50b0ZpeGVkKDIpO1xuICB9O1xuXG4gIGhhbmRsZUFkZFRvQ2FydCA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7IGRlZHVjdEJvb2tRdWFudGl0eSwgYWRkQm9va1RvQ2FydCwgdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBkZWR1Y3RCb29rUXVhbnRpdHkoYm9vay5pZCk7XG4gICAgYWRkQm9va1RvQ2FydChib29rLCB1c2VyLmlkKTtcbiAgICB0aGlzLmNoYW5nZVRvdGFsQ2FydEl0ZW1zKCk7XG4gIH07XG5cbiAgaGFuZGxlTW9kYWxPcGVuID0gKHNlbGVjdGVkQm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBtb2RhbE9wZW4sIHNlbGVjdEJvb2sgfSA9IHRoaXMucHJvcHM7XG4gICAgc2VsZWN0Qm9vayhzZWxlY3RlZEJvb2spO1xuICAgIG1vZGFsT3BlbigpO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm1PcGVuID0gKHNlbGVjdGVkQm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBkaWFsb2dPcGVuLCBzZWxlY3RCb29rIH0gPSB0aGlzLnByb3BzO1xuICAgIHNlbGVjdEJvb2soc2VsZWN0ZWRCb29rKTtcbiAgICBkaWFsb2dPcGVuKCk7XG4gIH07XG5cbiAgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1vZGFsQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm1DbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRpYWxvZ0Nsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpYWxvZ0Nsb3NlKCk7XG4gIH07XG5cbiAgaGFuZGxlQm9va0RlbGV0ZSA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7IGRlbGV0ZUJvb2sgfSA9IHRoaXMucHJvcHM7XG4gICAgZGVsZXRlQm9vayhib29rLmlkKTtcbiAgICB0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZSgpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ0Jvb2sgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgfTtcblxuICBjaGFuZ2VUb3RhbENhcnRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjYXJ0cywgdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodXNlci5pZCBpbiBjYXJ0cykge1xuICAgICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoY2FydHNbdXNlci5pZF1cbiAgICAgICAgLnJlZHVjZSgocDogbnVtYmVyLCBjOiBDYXJ0SXRlbU1vZGVsKSA9PiBwICsgYy5xdWFudGl0eSwgMCkpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyIHwge30gfCBSZWFjdC5SZWFjdE5vZGVBcnJheSB8IFJlYWN0LlJlYWN0UG9ydGFsIHxcbiAgICBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qge1xuICAgICAgYm9va3MsIG1vZGFsLCB1c2VyLCBkaWFsb2csIGJvb2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlQm9va3MgPSBib29rcy5maWx0ZXIoKGJvb2s6IEJvb2tNb2RlbCkgPT4gIWJvb2suZGVsZXRlZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgIHthY3RpdmVCb29rcy5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4gKFxuICAgICAgICAgICAgPEJvb2tUaWxlXG4gICAgICAgICAgICAgIHNlbGVjdGVkQm9vaz17Ym9va31cbiAgICAgICAgICAgICAga2V5PXtib29rLmlkfVxuICAgICAgICAgICAgICB1c2VyUm9sZT17dXNlci5yb2xlfVxuICAgICAgICAgICAgICBvbkJvb2tEZWxldGU9e3RoaXMuaGFuZGxlQ29uZmlybU9wZW59XG4gICAgICAgICAgICAgIG9uTW9kYWxPcGVuPXt0aGlzLmhhbmRsZU1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgYWRkVG9DYXJ0PXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEJvb2tJbmZvRGlhbG9nQ29udGFpbmVyXG4gICAgICAgICAgb3Blbj17bW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAvPlxuICAgICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICAgIG9wZW49e2RpYWxvZ31cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZX1cbiAgICAgICAgICBkaWFsb2dUaXRsZT0nUmVtb3ZlIGJvb2snXG4gICAgICAgICAgZGF0YT17Ym9va31cbiAgICAgICAgICBkaWFsb2dUZXh0PXtgRG8geW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZSAke2Jvb2sudGl0bGV9P2B9XG4gICAgICAgICAgb25Db25maXJtPXt0aGlzLmhhbmRsZUJvb2tEZWxldGV9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgYm9va3M6IHN0YXRlLmJvb2tzLFxuICBib29rOiBzdGF0ZS5ib29rLFxuICBjYXJ0czogc3RhdGUuY2FydHMsXG4gIG1vZGFsOiBzdGF0ZS5tb2RhbCxcbiAgZGlhbG9nOiBzdGF0ZS5kaWFsb2csXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBib29rc0ZldGNoZWQsXG4gIGRlZHVjdEJvb2tRdWFudGl0eSxcbiAgYWRkQm9va1RvQ2FydCxcbiAgY2hhbmdlVG90YWxDYXJ0SXRlbXMsXG4gIG1vZGFsT3BlbixcbiAgbW9kYWxDbG9zZSxcbiAgc2VsZWN0Qm9vayxcbiAgZGVsZXRlQm9vayxcbiAgZGlhbG9nT3BlbixcbiAgZGlhbG9nQ2xvc2UsXG59O1xuXG5leHBvcnQgY29uc3QgSG9tZVBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBBdmF0YXIsIENvbnRhaW5lciwgY3JlYXRlU3R5bGVzLCBHcmlkLCBUaGVtZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9iYXNlL3VzZXIubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBzZXNzaW9uQ2hhbmdlLCB1c2VyQ2hhbmdlZCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHM7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcbiAgbGFyZ2U6IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gTG9naW4ocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qge3Nlc3Npb24sIHVzZXIsIHVzZXJzfSA9IHByb3BzO1xuXG4gIGNvbnN0IHNlbGVjdFVzZXIgPSAoc2VsZWN0ZWRVc2VyOiBVc2VyTW9kZWwpID0+IHtcbiAgICBjb25zdCB7dXNlckNoYW5nZWQsIHNlc3Npb25DaGFuZ2V9ID0gcHJvcHM7XG4gICAgdXNlckNoYW5nZWQoc2VsZWN0ZWRVc2VyKTtcbiAgICBzZXNzaW9uQ2hhbmdlKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9J2gtZmxleCc+XG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXs0fVxuICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXG4gICAgICAgICAgY2xhc3NOYW1lPSdwYi0zJ1xuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncGItMyc+TG9nIGluIGFzIG9uZSBvZiB0aGUgZm9sbG93aW5nIHVzZXJzOjwvaDI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICAgICAgICA+XG4gICAgICAgICAge3VzZXJzLm1hcCgodXNyOiBVc2VyTW9kZWwpID0+IChcbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcbiAgICAgICAgICAgICAgeHM9ezJ9XG4gICAgICAgICAgICAgIGtleT17dXNyLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RVc2VyKHVzcil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICBhbHQ9e3Vzci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9e3Vzci5waWN0dXJlVXJsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXJnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGg0PntgJHt1c3IubmFtZX0gJHt1c3Iuc3VybmFtZX1gfTwvaDQ+XG4gICAgICAgICAgICAgIDxzcGFuPnt1c3Iucm9sZX08L3NwYW4+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3Nlc3Npb24gJiYgdXNlciAmJiA8UmVkaXJlY3QgdG89Jy8nLz59XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICB1c2Vyczogc3RhdGUudXNlcnMsXG4gIHVzZXI6IHN0YXRlLnVzZXIsXG4gIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge3VzZXJDaGFuZ2VkLCBzZXNzaW9uQ2hhbmdlfTtcblxuZXhwb3J0IGNvbnN0IExvZ2luUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBHcmlkLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFRvb2x0aXAsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBPcmRlck1vZGVsIH0gZnJvbSAnLi4vYmFzZS9vcmRlci5tb2RlbCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcbmltcG9ydCB7IENhcnRJdGVtTW9kZWwgfSBmcm9tICcuLi9iYXNlL2NhcnQtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi9iYXNlL2Jvb2subW9kZWwnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgU3RhdHVzQ2hhbmdlU2VsZWN0Q29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdGF0dXNDaGFuZ2VTZWxlY3QnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZXhwb3J0IGZ1bmN0aW9uIE9yZGVycyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIG9yZGVycywgdXNlciwgYm9va3MsIGhpc3RvcnksXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgaXNBZG1pbiA9IHVzZXIucm9sZSA9PT0gVVNFUl9ST0xFLmFkbWluO1xuICBjb25zdCBhbGxPcmRlcnMgPSBpc0FkbWluID8gb3JkZXJzIDogb3JkZXJzXG4gICAgLmZpbHRlcigob3JkZXI6IE9yZGVyTW9kZWwpID0+IG9yZGVyLmlkLmluY2x1ZGVzKCh1c2VyLmlkKS50b1N0cmluZygpKSk7XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J2NlbnRlcicgeHM9ezEyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD0naDUnXG4gICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdweS00J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0FkbWluID8gJ0N1c3RvbWVyIG9yZGVyczonIDogJ1lvdXIgcHJldmlvdXMgb3JkZXJzIHdpdGggdXM6J31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9J3NpbXBsZSB0YWJsZSc+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EYXRlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIHtpc0FkbWluICYmIDxUYWJsZUNlbGw+VXNlcjwvVGFibGVDZWxsPn1cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TdGF0dXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbCBQcmljZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPkJvb2tzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7YWxsT3JkZXJzLm1hcCgob3JkZXI6IE9yZGVyTW9kZWwpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17b3JkZXIuaWR9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+PE1vbWVudCBmb3JtYXQ9J0xMTCc+e29yZGVyLmRhdGV9PC9Nb21lbnQ+PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAge2lzQWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAge29yZGVyLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAge29yZGVyLnVzZXIuc3VybmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2lzQWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXR1c0NoYW5nZVNlbGVjdENvbnRhaW5lciBzdGF0dXM9e29yZGVyLnN0YXR1c30gb3JkZXJJZD17b3JkZXIuaWR9Lz5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyFpc0FkbWluICYmIDxUYWJsZUNlbGw+e29yZGVyLnN0YXR1c308L1RhYmxlQ2VsbD59XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57YFxcdTIwQUMke29yZGVyLnRvdGFsfWB9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICAgICAgICAgICAge29yZGVyLmJvb2tzLm1hcCgoYm9vazogQ2FydEl0ZW1Nb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxCb29rSW5mbzogQm9va01vZGVsID0gYm9va3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKChiazogQm9va01vZGVsKSA9PiBiay5pZCA9PT0gYm9vay5pZCkgYXMgQm9va01vZGVsO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Z1bGxCb29rSW5mby5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake2Z1bGxCb29rSW5mby50aXRsZX0sICR7ZnVsbEJvb2tJbmZvLmF1dGhvcn0gfCBRdWFudGl0eTogJHtib29rLnF1YW50aXR5fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jvb2suaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtmdWxsQm9va0luZm8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmdWxsQm9va0luZm8uYm9va19jb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7IWFsbE9yZGVycy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs1fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2g2J1xuICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNBZG1pbiA/ICdUaGVyZVxcJ3Mgbm90aGluZyB0byBzaG93JyA6ICdZb3VyIGRvblxcJ3QgaGF2ZSBhbnkgcGFzdCBvcmRlcnMuJ31cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT0ncHktNCc+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBvbkNsaWNrPXtnb0hvbWV9PkJhY2s8L0J1dHRvbj5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxuICBvcmRlcnM6IHN0YXRlLm9yZGVycyxcbiAgYm9va3M6IHN0YXRlLmJvb2tzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBPcmRlckhpc3RvcnlQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE9yZGVycyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtQ29udHJvbExhYmVsLFxuICBGb3JtTGFiZWwsXG4gIEdyaWQsXG4gIFJhZGlvLFxuICBSYWRpb0dyb3VwLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBCb29rTGlzdENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0xpc3QnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBhZGRPcmRlciwgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIGNsZWFyQ2FydCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgT3JkZXJNb2RlbCB9IGZyb20gJy4uL2Jhc2Uvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT1JERVJfU1RBVFVTRVMgfSBmcm9tICcuLi9iYXNlL29yZGVyLXN0YXR1c2VzLm1vZGVsJztcbmltcG9ydCB7IENhcnRJdGVtTW9kZWwgfSBmcm9tICcuLi9iYXNlL2NhcnQtaXRlbS5tb2RlbCc7XG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICcuLi9jb21wb25lbnRzL0NvbmZpcm1EaWFsb2cnO1xuaW1wb3J0IHsgUGF5bWVudE1vZGVsIH0gZnJvbSAnLi4vYmFzZS9wYXltZW50LW1vZGVsJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgaGlzdG9yeTogSGlzdG9yeTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmNsYXNzIFBheW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxuICAgICAgcGF5bWVudDogUGF5bWVudE1vZGVsLmNhcmQsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVBheW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIGNsZWFyQ2FydCwgYWRkT3JkZXIsIHVzZXIsIGNhcnRzLCBoaXN0b3J5LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBheW1lbnQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgYWRkT3JkZXIoe1xuICAgICAgc3RhdHVzOiBwYXltZW50ID09PSBQYXltZW50TW9kZWwuY2FyZCA/IE9SREVSX1NUQVRVU0VTLnBhaWQgOiBPUkRFUl9TVEFUVVNFUy5uZXcsXG4gICAgICBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgaWQ6IGAke3VzZXIuaWR9XyR7RGF0ZS5ub3coKX1gLFxuICAgICAgYm9va3M6IGNhcnRzW3VzZXIuaWRdLFxuICAgICAgdG90YWw6IHRoaXMuZ2V0VG90YWwoY2FydHNbdXNlci5pZF0pLFxuICAgICAgdXNlcixcbiAgICB9IGFzIE9yZGVyTW9kZWwpO1xuICAgIGNsZWFyQ2FydCh1c2VyLmlkKTtcbiAgICBjaGFuZ2VUb3RhbENhcnRJdGVtcygwKTtcbiAgICB0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZSgpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ09yZGVyIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBwbGFjZWQuIFRoYW5rIHlvdSEnKTtcbiAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgfTtcblxuICBoYW5kbGVDb25maXJtT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm1DbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEaWFsb2dPcGVuOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVQYXltZW50Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50OiAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIH0pO1xuICB9O1xuXG4gIGdldERpYWxvZ1RleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYXltZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChwYXltZW50ID09PSBQYXltZW50TW9kZWwuZGVsaXZlcnkpIHtcbiAgICAgIHJldHVybiAnRG8geW91IHdhbnQgdG8gY29uZmlybSB0aGUgcHVyY2hhc2UgYW5kIHBheSB0aGUgb3JkZXIgYXQgdGhlIHBpY2sgdXA/JztcbiAgICB9XG4gICAgcmV0dXJuICdEbyB5b3UgY29uZmlybSB0aGF0IHRoZSBhbW91bnQgZHVlIHdpbGwgYmUgZGViaXRlZCBmcm9tIHlvdSBjcmVkaXQgY2FyZD8nO1xuICB9O1xuXG4gIGdldFRvdGFsID0gKGNhcnQ6IENhcnRJdGVtTW9kZWxbXSkgPT4gY2FydC5yZWR1Y2UoKHA6IG51bWJlciwgYzogQ2FydEl0ZW1Nb2RlbCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHAgKz0gKE51bWJlcihjLnByaWNlKSAqIGMucXVhbnRpdHkpO1xuICAgIHJldHVybiBwO1xuICB9LCAwKS50b0ZpeGVkKDIpO1xuXG4gIGdvVG9DYXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBoaXN0b3J5LnB1c2goJy9jYXJ0Jyk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZyB8IG51bWJlciB8IHt9IHwgUmVhY3QuUmVhY3ROb2RlQXJyYXkgfCBSZWFjdC5SZWFjdFBvcnRhbCB8XG4gICAgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHsgcGF5bWVudCwgaXNEaWFsb2dPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nY2VudGVyJyB4cz17MTJ9IGNsYXNzTmFtZT0ncHktNCc+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcic+UGxlYXNlIGNoZWNrIGFsbCBpdGVtcyBpbiB0aGUgY2FydDo8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8Qm9va0xpc3RDb250YWluZXIgbW9kZT0ncHJldmlldycgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9J3B5LTQnIGp1c3RpZnk9J2ZsZXgtZW5kJz5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9J2ZpZWxkc2V0Jz5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+UGljayBwYXltZW50IG1ldGhvZDo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdnZW5kZXInXG4gICAgICAgICAgICAgICAgbmFtZT0nZ2VuZGVyMSdcbiAgICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXltZW50Q2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J2RlbGl2ZXJ5JyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPSdQYXkgYXQgZGVsaXZlcnknIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J2NhcmQnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9J1BheSBieSBjcmVkaXQgY2FyZCcgLz5cbiAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9e3RoaXMuZ29Ub0NhcnR9PkJhY2s8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dGhpcy5oYW5kbGVDb25maXJtT3Blbn0+UGF5PC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxDb25maXJtRGlhbG9nXG4gICAgICAgICAgb3Blbj17aXNEaWFsb2dPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ29uZmlybUNsb3NlfVxuICAgICAgICAgIGRpYWxvZ1RpdGxlPSdQYXltZW50IGNvbmZpcm1hdGlvbidcbiAgICAgICAgICBkaWFsb2dUZXh0PXt0aGlzLmdldERpYWxvZ1RleHQoKX1cbiAgICAgICAgICBvbkNvbmZpcm09e3RoaXMuaGFuZGxlUGF5bWVudH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxuICBjYXJ0czogc3RhdGUuY2FydHMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBjaGFuZ2VUb3RhbENhcnRJdGVtcywgY2xlYXJDYXJ0LCBhZGRPcmRlciB9O1xuXG5leHBvcnQgY29uc3QgUGF5bWVudFBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYXltZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBHcmlkLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBIaXN0b3J5LCBMb2NhdGlvblN0YXRlIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vYmFzZS91c2VyLm1vZGVsJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgICBoaXN0b3J5OiBIaXN0b3J5PExvY2F0aW9uU3RhdGU+O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJzKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IHVzZXJzLCBoaXN0b3J5IH0gPSBwcm9wcztcblxuICBjb25zdCBnb0hvbWUgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nY2VudGVyJyB4cz17MTJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBhbGlnbj0nY2VudGVyJyBjbGFzc05hbWU9J3B5LTQnPkxpc3Qgb2YgdXNlcnM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9J3NpbXBsZSB0YWJsZSc+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3VybmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlVzZXJuYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+Um9sZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlBpY3R1cmU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXI6IFVzZXJNb2RlbCkgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt1c2VyLm5hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dXNlci5zdXJuYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3VzZXIudXNlcm5hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dXNlci5yb2xlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17dXNlci5uYW1lfSBzcmM9e3VzZXIucGljdHVyZVVybH0gLz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgb25DbGljaz17Z29Ib21lfT5CYWNrPC9CdXR0b24+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBVc2Vyc1BhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVXNlcnMpO1xuIiwiaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi9iYXNlL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9SREVSX1NUQVRVU0VTIH0gZnJvbSAnLi4vLi4vYmFzZS9vcmRlci1zdGF0dXNlcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCB1c2Vyc0ZldGNoZWQgPSAodXNlcnM6IFVzZXJNb2RlbFtdKSA9PiAoe1xuICB0eXBlOiAnRkVUQ0hfVVNFUlNfU1VDQ0VTUycsXG4gIHVzZXJzXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZXJDaGFuZ2VkID0gKHVzZXI6IFVzZXJNb2RlbCkgPT4gKHtcbiAgdHlwZTogJ1VTRVJfQ0hBTkdFRCcsXG4gIHVzZXJcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkNoYW5nZSA9IChzZXNzaW9uOiBib29sZWFuKSA9PiAoe1xuICB0eXBlOiAnU0VTU0lPTl9DSEFOR0UnLFxuICBzZXNzaW9uXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvb2tzRmV0Y2hlZCA9IChib29rczogQm9va01vZGVsW10pID0+ICh7XG4gIHR5cGU6ICdGRVRDSF9CT09LU19TVUNDRVNTJyxcbiAgYm9va3Ncbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Qm9vayA9IChib29rOiBCb29rTW9kZWwpID0+ICh7XG4gIHR5cGU6ICdTRUxFQ1RfQk9PSycsXG4gIGJvb2tcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVkdWN0Qm9va1F1YW50aXR5ID0gKGJvb2tJZDogc3RyaW5nKSA9PiAoe1xuICB0eXBlOiAnREVEVUNUX0JPT0tfUVVBTlRJVFknLFxuICBib29rSWRcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQm9va1F1YW50aXR5ID0gKGJvb2tJZDogc3RyaW5nKSA9PiAoe1xuICB0eXBlOiAnQUREX0JPT0tfUVVBTlRJVFknLFxuICBib29rSWRcbn0pO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlQm9va0RldGFpbHMgPSAoYm9vazogQm9va01vZGVsKSA9PiAoe1xuICB0eXBlOiAnQ0hBTkdFX0JPT0tfREVUQUlMUycsXG4gIGJvb2tcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQm9vayA9IChib29rSWQ6IHN0cmluZykgPT4gKHtcbiAgdHlwZTogJ0RFTEVURV9CT09LJyxcbiAgYm9va0lkXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZEJvb2tUb0NhcnQgPSAoYm9vazogQm9va01vZGVsLCB1c2VySWQ6IG51bWJlcikgPT4gKHtcbiAgdHlwZTogJ0FERF9CT09LX1RPX0NBUlQnLFxuICBib29rLFxuICB1c2VySWRcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQm9va0Zyb21DYXJ0ID0gKGJvb2s6IEJvb2tNb2RlbCwgdXNlcklkOiBudW1iZXIpID0+ICh7XG4gIHR5cGU6ICdSRU1PVkVfQk9PS19GUk9NX0NBUlQnLFxuICBib29rLFxuICB1c2VySWRcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xlYXJDYXJ0ID0gKHVzZXJJZDogbnVtYmVyKSA9PiAoe1xuICB0eXBlOiAnQ0xFQVJfQ0FSVCcsXG4gIHVzZXJJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VUb3RhbENhcnRJdGVtcyA9ICh0b3RhbDogbnVtYmVyKSA9PiAoe1xuICB0eXBlOiAnQ0hBTkdFX1RPVEFMX0NBUlRfSVRFTVMnLFxuICB0b3RhbFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRPcmRlciA9IChvcmRlcjogT3JkZXJNb2RlbCkgPT4gKHtcbiAgdHlwZTogJ0FERF9PUkRFUicsXG4gIG9yZGVyXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9yZGVyU3RhdHVzID0gKG9yZGVySWQ6IHN0cmluZywgc3RhdHVzOiBPUkRFUl9TVEFUVVNFUykgPT4gKHtcbiAgdHlwZTogJ09SREVSX1NUQVRVU19DSEFOR0UnLFxuICBzdGF0dXMsXG4gIG9yZGVySWRcbn0pO1xuXG5leHBvcnQgY29uc3QgbW9kYWxPcGVuID0gKCkgPT4gKHtcbiAgdHlwZTogJ01PREFMX09QRU4nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtb2RhbENsb3NlID0gKCkgPT4gKHtcbiAgdHlwZTogJ01PREFMX0NMT1NFJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nT3BlbiA9ICgpID0+ICh7XG4gIHR5cGU6ICdESUFMT0dfT1BFTicsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZ0Nsb3NlID0gKCkgPT4gKHtcbiAgdHlwZTogJ0RJQUxPR19DTE9TRScsXG59KTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgYm9vayA9IChzdGF0ZTogYW55ID0ge30sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWN0aW9uJyk7XG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1NFTEVDVF9CT09LJzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uYm9vaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBib29rcyA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0ZFVENIX0JPT0tTX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24uYm9va3NcbiAgICAgICAgICAgIF07XG4gICAgICAgIGNhc2UgJ0RFRFVDVF9CT09LX1FVQU5USVRZJzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib29rLmlkID09PSBhY3Rpb24uYm9va0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2sucXVhbnRpdHkgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnQUREX0JPT0tfUVVBTlRJVFknOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoYm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJvb2suaWQgPT09IGFjdGlvbi5ib29rSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9vay5xdWFudGl0eSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdDSEFOR0VfQk9PS19ERVRBSUxTJzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib29rLmlkID09PSBhY3Rpb24uYm9vay5pZCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGJvb2ssIGFjdGlvbi5ib29rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnREVMRVRFX0JPT0snOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoYm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICBpZiAoYm9vay5pZCA9PT0gYWN0aW9uLmJvb2tJZCkge1xuICAgICAgICAgICAgICAgICAgIGJvb2suZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICByZXR1cm4gYm9vaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvY2FydC1pdGVtLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGNhcnRzID0gKHN0YXRlOiBhbnkgPSBbXSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICAgIGNvbnN0IHt1c2VySWQsIGJvb2t9ID0gYWN0aW9uO1xuICAgIGNvbnNvbGUubG9nKCdib29rJyk7XG4gICAgY29uc29sZS5sb2coYm9vayk7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfQk9PS19UT19DQVJUJzpcbiAgICAgICAgICAgIGNvbnN0IGFkZEJvb2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9va0luQ2FydEluZGV4ID0gc3RhdGVbdXNlcklkXS5maW5kSW5kZXgoKGJrOiBDYXJ0SXRlbU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiay5pZCA9PT0gYm9vay5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoYm9va0luQ2FydEluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVbdXNlcklkXVtib29rSW5DYXJ0SW5kZXhdLnF1YW50aXR5ICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVbdXNlcklkXS5wdXNoKHtpZDogYm9vay5pZCwgcXVhbnRpdHk6IDEsIHByaWNlOiBib29rLnByaWNlfSBhcyBDYXJ0SXRlbU1vZGVsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXNlcklkIGluIHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYWRkQm9vaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVt1c2VySWRdID0gW107XG4gICAgICAgICAgICAgICAgYWRkQm9vaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlICdSRU1PVkVfQk9PS19GUk9NX0NBUlQnOlxuICAgICAgICAgICAgY29uc3QgdXNlckNhcnQgPSBzdGF0ZVt1c2VySWRdO1xuICAgICAgICAgICAgY29uc3QgYm9va0luQ2FydEluZGV4ID0gdXNlckNhcnQuZmluZEluZGV4KChiazogQ2FydEl0ZW1Nb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBiay5pZCA9PT0gYm9vay5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJDYXJ0W2Jvb2tJbkNhcnRJbmRleF0ucXVhbnRpdHkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB1c2VyQ2FydC5zcGxpY2UoYm9va0luQ2FydEluZGV4LCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXNlckNhcnRbYm9va0luQ2FydEluZGV4XS5xdWFudGl0eSAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlICdDTEVBUl9DQVJUJzpcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZVt1c2VySWRdO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZGlhbG9nID0gKHN0YXRlOiBib29sZWFuID0gZmFsc2UsIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0RJQUxPR19PUEVOJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdESUFMT0dfQ0xPU0UnOlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi91c2VyJztcbmltcG9ydCB7IHNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nO1xuaW1wb3J0IHsgYm9va3MgfSBmcm9tICcuL2Jvb2tzJztcbmltcG9ydCB7IGNhcnRzIH0gZnJvbSAnLi9jYXJ0cyc7XG5pbXBvcnQgeyB0b3RhbCB9IGZyb20gJy4vdG90YWwnO1xuaW1wb3J0IHsgb3JkZXJzIH0gZnJvbSAnLi9vcmRlcnMnO1xuaW1wb3J0IHsgbW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IGJvb2sgfSBmcm9tICcuL2Jvb2snO1xuaW1wb3J0IHsgZGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHVzZXIsXG4gICAgdXNlcnMsXG4gICAgc2Vzc2lvbixcbiAgICBib29rcyxcbiAgICBib29rLFxuICAgIGNhcnRzLFxuICAgIHRvdGFsLFxuICAgIG9yZGVycyxcbiAgICBtb2RhbCxcbiAgICBkaWFsb2dcbn0pO1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBtb2RhbCA9IChzdGF0ZTogYm9vbGVhbiA9IGZhbHNlLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdNT0RBTF9PUEVOJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdNT0RBTF9DTE9TRSc6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlck1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBvcmRlcnMgPSAoc3RhdGU6IGFueSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgY29uc3Qge29yZGVyLCBzdGF0dXMsIG9yZGVySWR9ID0gYWN0aW9uO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX09SREVSJzpcbiAgICAgICAgICAgIHN0YXRlLnB1c2gob3JkZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlICdSRU1PVkVfT1JERVInOlxuICAgICAgICAgICAgc3RhdGUuc3BsaWNlKG9yZGVyKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgY2FzZSAnT1JERVJfU1RBVFVTX0NIQU5HRSc6XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9yZGVyID0gc3RhdGUuZmluZCgob3JkcjogT3JkZXJNb2RlbCkgPT4gb3Jkci5pZCA9PT0gb3JkZXJJZCk7XG4gICAgICAgICAgICBzZWxlY3RlZE9yZGVyLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHNlc3Npb24gPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VTU0lPTl9DSEFOR0UnOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5zZXNzaW9uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCB0b3RhbCA9IChzdGF0ZTogbnVtYmVyID0gMCwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQ0hBTkdFX1RPVEFMX0NBUlRfSVRFTVMnOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi50b3RhbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHVzZXIgPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVVNFUl9DSEFOR0VEJzpcbiAgICAgIHJldHVybiBhY3Rpb24udXNlcjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHVzZXJzID0gKHN0YXRlID0gW10sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0ZFVENIX1VTRVJTX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uYWN0aW9uLnVzZXJzXG4gICAgICBdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufTtcbiIsIi8vIFRoaXMgb3B0aW9uYWwgY29kZSBpcyB1c2VkIHRvIHJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIuXG4vLyByZWdpc3RlcigpIGlzIG5vdCBjYWxsZWQgYnkgZGVmYXVsdC5cblxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2Vycylcbi8vIHdpbGwgb25seSBzZWUgZGVwbG95ZWQgdXBkYXRlcyBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byBhIHBhZ2UsIGFmdGVyIGFsbCB0aGVcbi8vIGV4aXN0aW5nIHRhYnMgb3BlbiBvbiB0aGUgcGFnZSBoYXZlIGJlZW4gY2xvc2VkLCBzaW5jZSBwcmV2aW91c2x5IGNhY2hlZFxuLy8gcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxuXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBiZW5lZml0cyBvZiB0aGlzIG1vZGVsIGFuZCBpbnN0cnVjdGlvbnMgb24gaG93IHRvXG4vLyBvcHQtaW4sIHJlYWQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcbiAgICAvLyAxMjcuMC4wLjAvOCBhcmUgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTtcblxudHlwZSBDb25maWcgPSB7XG4gIG9uU3VjY2Vzcz86IChyZWdpc3RyYXRpb246IFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pID0+IHZvaWQ7XG4gIG9uVXBkYXRlPzogKHJlZ2lzdHJhdGlvbjogU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWc/OiBDb25maWcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChcbiAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICk7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyhzd1VybDogc3RyaW5nLCBjb25maWc/OiBDb25maWcpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlID09PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHVwZGF0ZWQgcHJlY2FjaGVkIGNvbnRlbnQgaGFzIGJlZW4gZmV0Y2hlZCxcbiAgICAgICAgICAgICAgLy8gYnV0IHRoZSBwcmV2aW91cyBzZXJ2aWNlIHdvcmtlciB3aWxsIHN0aWxsIHNlcnZlIHRoZSBvbGRlclxuICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlIGFuZCB3aWxsIGJlIHVzZWQgd2hlbiBhbGwgJyArXG4gICAgICAgICAgICAgICAgICAndGFicyBmb3IgdGhpcyBwYWdlIGFyZSBjbG9zZWQuIFNlZSBodHRwczovL2JpdC5seS9DUkEtUFdBLidcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uVXBkYXRlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gcHJlY2FjaGVkLlxuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgIC8vIFwiQ29udGVudCBpcyBjYWNoZWQgZm9yIG9mZmxpbmUgdXNlLlwiIG1lc3NhZ2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG5cbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25TdWNjZXNzKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybDogc3RyaW5nLCBjb25maWc/OiBDb25maWcpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGNhbiBiZSBmb3VuZC4gSWYgaXQgY2FuJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICBmZXRjaChzd1VybCwge1xuICAgIGhlYWRlcnM6IHsgJ1NlcnZpY2UtV29ya2VyJzogJ3NjcmlwdCcgfVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICAvLyBObyBzZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvYmFibHkgYSBkaWZmZXJlbnQgYXBwLiBSZWxvYWQgdGhlIHBhZ2UuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnTm8gaW50ZXJuZXQgY29ubmVjdGlvbiBmb3VuZC4gQXBwIGlzIHJ1bm5pbmcgaW4gb2ZmbGluZSBtb2RlLidcbiAgICAgICk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdXgvcmVkdWNlcnMnO1xuaW1wb3J0IHsgbG9hZFN0YXRlLCBzYXZlU3RhdGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IHBlcnNpc3RlZFN0YXRlID0gbG9hZFN0YXRlKCk7XG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgcGVyc2lzdGVkU3RhdGUpO1xuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICBzYXZlU3RhdGUoe1xuICAgIHVzZXJzOiBzdG9yZS5nZXRTdGF0ZSgpLnVzZXJzLFxuICAgIHVzZXI6IHN0b3JlLmdldFN0YXRlKCkudXNlcixcbiAgICBzZXNzaW9uOiBzdG9yZS5nZXRTdGF0ZSgpLnNlc3Npb24sXG4gICAgYm9va3M6IHN0b3JlLmdldFN0YXRlKCkuYm9va3MsXG4gICAgY2FydHM6IHN0b3JlLmdldFN0YXRlKCkuY2FydHMsXG4gICAgdG90YWw6IHN0b3JlLmdldFN0YXRlKCkudG90YWwsXG4gICAgb3JkZXJzOiBzdG9yZS5nZXRTdGF0ZSgpLm9yZGVycyxcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=