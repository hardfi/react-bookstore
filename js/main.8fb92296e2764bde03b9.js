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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/ZDljZCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9vcmRlci1zdGF0dXNlcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9wYXltZW50LW1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXNlL3VzZXItcm9sZS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb29rSW5mb0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm9va0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jvb2tUaWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25maXJtRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHVzQ2hhbmdlU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50cy9wcm9kdWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NhcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9PcmRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QYXltZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2FydHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9vcmRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3RvdGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZVdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiXSwibmFtZXMiOlsibG9hZGVyU3RhdGUkIiwiQmVoYXZpb3JTdWJqZWN0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsInVzZXJzIiwibGVuZ3RoIiwidXNlcnNGZXRjaGVkIiwiZW52aXJvbm1lbnQiLCJ1c2Vyc0FwaSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJtYXAiLCJ1c2VyIiwiaSIsImlkIiwibG9naW4iLCJ1dWlkIiwibmFtZSIsImZpcnN0Iiwic3VybmFtZSIsImxhc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicm9sZSIsIlVTRVJfUk9MRSIsImFkbWluIiwiY2xpZW50IiwicGljdHVyZVVybCIsInBpY3R1cmUiLCJsYXJnZSIsInN1YnNjcmliZSIsInNldFN0YXRlIiwiaGlzdG9yeSIsIkhvbWVQYWdlIiwiTG9naW5QYWdlIiwiQ2FydFBhZ2UiLCJQYXltZW50UGFnZSIsIk9yZGVySGlzdG9yeVBhZ2UiLCJVc2Vyc1BhZ2UiLCJSZWFjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInVzZXJDaGFuZ2VkIiwiQXBwQ29udGFpbmVyIiwiY29ubmVjdCIsIk9SREVSX1NUQVRVU0VTIiwiUGF5bWVudE1vZGVsIiwiTG9jYWxTdGF0ZSIsIlNpbXBsZURpYWxvZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsb3NlIiwiY2hhbmdlQm9va0RldGFpbHMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJvcGVuIiwiYm9vayIsInRpdGxlIiwiYXV0aG9yIiwicXVhbnRpdHkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiYm9va19jb3ZlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlU2F2ZUNoYW5nZXMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJDb21wb25lbnQiLCJCb29rSW5mb0RpYWxvZ0NvbnRhaW5lciIsIlBhcmVudFByb3BzIiwiQm9va0xpc3QiLCJyZW1vdmVCb29rRnJvbUNhcnQiLCJhZGRCb29rUXVhbnRpdHkiLCJjaGFuZ2VUb3RhbENhcnRJdGVtcyIsImNhcnRzIiwicmVkdWNlIiwicCIsImMiLCJhZGRCb29rVG9DYXJ0IiwiZGVkdWN0Qm9va1F1YW50aXR5IiwiYm9va3MiLCJtb2RlIiwidXNlckNhcnQiLCJ1c2VyQm9va3MiLCJpdGVtIiwiZmluZCIsImdldFRvdGFsRm9yUm93IiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwidG9GaXhlZCIsImdldFRvdGFsIiwiTnVtYmVyIiwiaGFuZGxlUmVtb3ZlSXRlbSIsImhhbmRsZUFkZEl0ZW0iLCJ0b3RhbCIsIkJvb2tMaXN0Q29udGFpbmVyIiwiQm9va1RpbGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwiaW1nIiwibWF4V2lkdGgiLCJoZWFkZXIiLCJtYXJnaW4iLCJoYW5kbGVCb29rRGlhbG9nT3BlbiIsInNlbGVjdGVkQm9vayIsIm9uTW9kYWxPcGVuIiwidXNlclJvbGUiLCJjbGFzc2VzIiwiYWRkVG9DYXJ0Iiwib25Cb29rRGVsZXRlIiwiQ29uZmlybURpYWxvZyIsImRpYWxvZ1RpdGxlIiwiZGlhbG9nVGV4dCIsIm9uQ29uZmlybSIsImRhdGEiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJzcGFuIiwibWFyZ2luTGVmdCIsIkhlYWRlciIsInNlc3Npb24iLCJoYW5kbGVHb1RvSGlzdG9yeSIsInB1c2giLCJoYW5kbGVHb1RvVXNlcnMiLCJjb2xvciIsIkhlYWRlckNvbnRhaW5lciIsIlNwaW5uZXIiLCJTdGF0dXNDaGFuZ2VTZWxlY3QiLCJuZXdTdGF0dXMiLCJjaGFuZ2VPcmRlclN0YXR1cyIsIm9yZGVySWQiLCJzdGF0dXMiLCJtaW5XaWR0aCIsImhhbmRsZUNoYW5nZSIsIlN0YXR1c0NoYW5nZVNlbGVjdENvbnRhaW5lciIsIlVzZXJBY3Rpb25zIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiQm9vbGVhbiIsInNlc3Npb25DaGFuZ2UiLCJpc0FkbWluIiwiaGFuZGxlTWVudSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUxvZ291dCIsImdvVG9IaXN0b3J5IiwiaGFuZGxlR29Ub1VzZXJMaXN0IiwiZ29Ub1VzZXJzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiVXNlckFjdGlvbnNDb250YWluZXIiLCJib29rc0FwaSIsImlzUHJvZHVjdGlvbiIsImlzRGV2ZWxvcG1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsInN0b3JlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlcnZpY2VXb3JrZXIiLCJpbml0aWFsU3RvcmVTdGF0ZSIsIm9yZGVycyIsImxvYWRTdGF0ZSIsInNlcmlhbGl6ZWRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJzYXZlU3RhdGUiLCJuZXh0IiwidGltZW91dCIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkNhcnQiLCJjbGVhckNhcnQiLCJnb0hvbWUiLCJjbGVhckFsbENhcnRJdGVtcyIsImdvVG9QYXltZW50IiwiSG9tZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJtb2RhbE9wZW4iLCJzZWxlY3RCb29rIiwiZGlhbG9nT3BlbiIsIm1vZGFsQ2xvc2UiLCJkaWFsb2dDbG9zZSIsImRlbGV0ZUJvb2siLCJoYW5kbGVDb25maXJtQ2xvc2UiLCJib29rc0ZldGNoZWQiLCJwcmltYXJ5X2lzYm4xMCIsInB1Ymxpc2hlZF9kYXRlIiwiYm9va19pbWFnZSIsImdldFJhbmRvbVByaWNlIiwibW9kYWwiLCJkaWFsb2ciLCJhY3RpdmVCb29rcyIsImZpbHRlciIsImRlbGV0ZWQiLCJwYWRkaW5nIiwiaGFuZGxlQ29uZmlybU9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVBZGRUb0NhcnQiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlQm9va0RlbGV0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiTG9naW4iLCJzZWxlY3RVc2VyIiwic2VsZWN0ZWRVc2VyIiwidXNyIiwiT3JkZXJzIiwiYWxsT3JkZXJzIiwib3JkZXIiLCJpbmNsdWRlcyIsImRhdGUiLCJkaXNwbGF5IiwiZnVsbEJvb2tJbmZvIiwiYmsiLCJQYXltZW50IiwiYWRkT3JkZXIiLCJwYXltZW50IiwiY2FyZCIsInBhaWQiLCJuZXciLCJEYXRlIiwibm93IiwiaXNEaWFsb2dPcGVuIiwiZGVsaXZlcnkiLCJjYXJ0IiwiaGFuZGxlUGF5bWVudENoYW5nZSIsImdvVG9DYXJ0IiwiZ2V0RGlhbG9nVGV4dCIsImhhbmRsZVBheW1lbnQiLCJVc2VycyIsInR5cGUiLCJib29rSWQiLCJ1c2VySWQiLCJhY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJhZGRCb29rIiwiYm9va0luQ2FydEluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiY29tYmluZVJlZHVjZXJzIiwic2VsZWN0ZWRPcmRlciIsIm9yZHIiLCJpc0xvY2FsaG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYXRjaCIsInJlZ2lzdGVyIiwiY29uZmlnIiwicHJvY2VzcyIsInJlZ2lzdGVyVmFsaWRTVyIsInN3VXJsIiwibmF2aWdhdG9yIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsImNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIiLCJoZWFkZXJzIiwiY29udGVudFR5cGUiLCJnZXQiLCJpbmRleE9mIiwicmVhZHkiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIiwicGVyc2lzdGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDblJBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJB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d0IySCxLQUF4QixDQUE4QjNSLElBQTlCLENBQW1DLFVBQUEwUSxZQUFZLEVBQUk7QUFDakRBLGtCQUFZLENBQUNrQixVQUFiO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDaEpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRSxjQUFjLEdBQUczSCwrREFBUyxFQUFoQztBQUNPLElBQU1OLEtBQUssR0FBR2tJLHlEQUFXLENBQUNDLHVEQUFELEVBQVdGLGNBQVgsQ0FBekI7QUFFUGpJLEtBQUssQ0FBQ3JJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQmtKLGlFQUFTLENBQUM7QUFDUmhMLFNBQUssRUFBRW1LLEtBQUssQ0FBQ29JLFFBQU4sR0FBaUJ2UyxLQURoQjtBQUVSWSxRQUFJLEVBQUV1SixLQUFLLENBQUNvSSxRQUFOLEdBQWlCM1IsSUFGZjtBQUdSa0gsV0FBTyxFQUFFcUMsS0FBSyxDQUFDb0ksUUFBTixHQUFpQnpLLE9BSGxCO0FBSVI3QyxTQUFLLEVBQUVrRixLQUFLLENBQUNvSSxRQUFOLEdBQWlCdE4sS0FKaEI7QUFLUk4sU0FBSyxFQUFFd0YsS0FBSyxDQUFDb0ksUUFBTixHQUFpQjVOLEtBTGhCO0FBTVJvQixTQUFLLEVBQUVvRSxLQUFLLENBQUNvSSxRQUFOLEdBQWlCeE0sS0FOaEI7QUFPUnlFLFVBQU0sRUFBRUwsS0FBSyxDQUFDb0ksUUFBTixHQUFpQi9IO0FBUGpCLEdBQUQsQ0FBVDtBQVNELENBVkQsRSIsImZpbGUiOiJqcy9tYWluLjhmYjkyMjk2ZTI3NjRiZGUwM2I5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaC1mbGV4IHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmgtZmxleCA+IGRpdiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnB5LTEge1xcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTQge1xcbiAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMjVweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1yaWdodDogMjVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdC0zIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYi0zIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdC0tMiB7XFxuICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3Bpbm5lci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgwO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIixcXG4gICAgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJ2Vudmlyb25tZW50JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgdXNlckNoYW5nZWQsIHVzZXJzRmV0Y2hlZCB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vYmFzZS91c2VyLm1vZGVsJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9wYWdlcy9Mb2dpbic7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgeyBQYXltZW50UGFnZSB9IGZyb20gJy4vcGFnZXMvUGF5bWVudCc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlQYWdlIH0gZnJvbSAnLi9wYWdlcy9PcmRlcnMnO1xuaW1wb3J0IHsgQ2FydFBhZ2UgfSBmcm9tICcuL3BhZ2VzL0NhcnQnO1xuaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IHsgVXNlcnNQYWdlIH0gZnJvbSAnLi9wYWdlcy9Vc2Vycyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlclN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyB1c2VycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXVzZXJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyB1c2Vyc0ZldGNoZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IHVzZXJzQXBpIH0gPSBlbnZpcm9ubWVudCgpO1xuICAgICAgZmV0Y2goYCR7dXNlcnNBcGl9P2Zvcm1hdD1qc29uJnJlc3VsdHM9NSZuYXQ9Z2ImaW5jPW5hbWUsbG9naW4scGljdHVyZWApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVzZXJzID0gcmVzcG9uc2UucmVzdWx0cy5tYXAoKHVzZXI6IGFueSwgaTogbnVtYmVyKSA9PiAoe1xuICAgICAgICAgICAgaWQ6IHVzZXIubG9naW4udXVpZCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZS5maXJzdCxcbiAgICAgICAgICAgIHN1cm5hbWU6IHVzZXIubmFtZS5sYXN0LFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIubG9naW4udXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5sb2dpbi5wYXNzd29yZCxcbiAgICAgICAgICAgIHJvbGU6IGkgJSAyID8gVVNFUl9ST0xFLmFkbWluIDogVVNFUl9ST0xFLmNsaWVudCxcbiAgICAgICAgICAgIHBpY3R1cmVVcmw6IHVzZXIucGljdHVyZS5sYXJnZSxcbiAgICAgICAgICB9IGFzIFVzZXJNb2RlbCkpO1xuICAgICAgICAgIHVzZXJzRmV0Y2hlZCh1c2Vycyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkZXJTdGF0ZSQuc3Vic2NyaWJlKChpc0xvYWRpbmcpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmcgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgICAgPEhlYWRlckNvbnRhaW5lciBoaXN0b3J5PXtoaXN0b3J5IGFzIEhpc3Rvcnl9IC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9sb2dpbicgY29tcG9uZW50PXtMb2dpblBhZ2V9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jYXJ0JyBjb21wb25lbnQ9e0NhcnRQYWdlfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvcGF5bWVudCcgY29tcG9uZW50PXtQYXltZW50UGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL29yZGVycy1oaXN0b3J5JyBjb21wb25lbnQ9e09yZGVySGlzdG9yeVBhZ2V9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy91c2VycycgY29tcG9uZW50PXtVc2Vyc1BhZ2V9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICB1c2Vyczogc3RhdGUudXNlcnMsXG4gIHVzZXI6IHN0YXRlLnVzZXIsXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgdXNlcnNGZXRjaGVkLCB1c2VyQ2hhbmdlZCB9O1xuZXhwb3J0IGNvbnN0IEFwcENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG4iLCJleHBvcnQgZW51bSBPUkRFUl9TVEFUVVNFUyB7XG4gICAgbmV3ID0gJ25ldycsXG4gICAgcGFpZCA9ICdwYWlkJyxcbiAgICBzZW50ID0gJ3NlbnQnLFxuICAgIGNhbmNlbGxlZCA9ICdjYW5jZWxsZWQnXG59XG4iLCJleHBvcnQgZW51bSBQYXltZW50TW9kZWwge1xuICAgIGRlbGl2ZXJ5ID0gJ2RlbGl2ZXJ5JyxcbiAgICBjYXJkID0gJ2NhcmQnXG59XG4iLCJleHBvcnQgZW51bSBVU0VSX1JPTEUge1xuICAgIGFkbWluID0gJ0FETUlOJyxcbiAgICBjbGllbnQgPSAnQ0xJRU5UJ1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dDb250ZW50LCBHcmlkLCBUZXh0RmllbGQsIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4uL2Jhc2UvdXNlci1yb2xlLm1vZGVsJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBjaGFuZ2VCb29rRGV0YWlscyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9wZW46IGJvb2xlYW47XG59XG5cbmNsYXNzIExvY2FsU3RhdGUge1xuICB0aXRsZT86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIGF1dGhvcj86IHN0cmluZztcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIHByaWNlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmNsYXNzIFNpbXBsZURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgTG9jYWxTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBMb2NhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wczogYW55LCBwcmV2U3RhdGU6IGFueSkge1xuICAgIGlmIChuZXh0UHJvcHMuYm9vayAmJiBuZXh0UHJvcHMuYm9vay5pZCAhPT0gcHJldlN0YXRlLmlkKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRpdGxlLCBpZCwgYXV0aG9yLCBxdWFudGl0eSwgcHJpY2UsIGRlc2NyaXB0aW9uLFxuICAgICAgfSA9IG5leHRQcm9wcy5ib29rIGFzIEJvb2tNb2RlbDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLCBpZCwgYXV0aG9yLCBxdWFudGl0eSwgcHJpY2UsIGRlc2NyaXB0aW9uLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcgfT4pID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0gYXMgUGljazxMb2NhbFN0YXRlLCBrZXlvZiBMb2NhbFN0YXRlPik7XG4gIH07XG5cbiAgaGFuZGxlU2F2ZUNoYW5nZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNsb3NlLCBjaGFuZ2VCb29rRGV0YWlscyB9ID0gdGhpcy5wcm9wcztcbiAgICBjaGFuZ2VCb29rRGV0YWlscyh0aGlzLnN0YXRlIGFzIEJvb2tNb2RlbCk7XG4gICAgdG9hc3Quc3VjY2VzcygnQm9vayBkZXRhaWxzIGhhdmUgYmVlbiBlZGl0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmcgfCBudW1iZXIgfCB7fSB8IFJlYWN0LlJlYWN0Tm9kZUFycmF5IHwgUmVhY3QuUmVhY3RQb3J0YWwgfFxuICAgIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNsb3NlLFxuICAgICAgb3BlbixcbiAgICAgIGJvb2ssXG4gICAgICB1c2VyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICBhdXRob3IsXG4gICAgICBxdWFudGl0eSxcbiAgICAgIHByaWNlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9J3NpbXBsZS1kaWFsb2ctdGl0bGUnIG9wZW49e29wZW59IGZ1bGxXaWR0aCBtYXhXaWR0aD0nbWQnPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IGRpcmVjdGlvbj0ncm93JyB3cmFwPSdub3dyYXAnIGNsYXNzTmFtZT0ncHktMyc+XG4gICAgICAgICAgICA8aW1nIHNyYz17Ym9vay5ib29rX2NvdmVyfSBhbHQ9e2Jvb2sudGl0bGV9IC8+XG4gICAgICAgICAgICB7dXNlci5yb2xlID09PSBVU0VSX1JPTEUuY2xpZW50ICYmIChcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nY2VudGVyJyBkaXJlY3Rpb249J2NvbHVtbicgY2xhc3NOYW1lPSdweC00Jz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+e2Jvb2sudGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz57Ym9vay5hdXRob3J9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz57Ym9vay5kZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dXNlci5yb2xlID09PSBVU0VSX1JPTEUuYWRtaW5cbiAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nY2VudGVyJyBkaXJlY3Rpb249J2NvbHVtbicgY2xhc3NOYW1lPSdweC00Jz5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCb29rIHRpdGxlJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQm9vayBhdXRob3InXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2F1dGhvcidcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0F2YWlsYWJsZSBwaWVjZXMnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncXVhbnRpdHknXG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J215LTInXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1ByaWNlJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwcmljZSdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgICAgICAgcm93cz0nNCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nc2Vjb25kYXJ5JyBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlQ2hhbmdlc30+U2F2ZSBjaGFuZ2VzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIGJvb2s6IHN0YXRlLmJvb2ssXG4gIHVzZXI6IHN0YXRlLnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBjaGFuZ2VCb29rRGV0YWlscyB9O1xuXG5leHBvcnQgY29uc3QgQm9va0luZm9EaWFsb2dDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaW1wbGVEaWFsb2cpO1xuIiwiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBJY29uQnV0dG9uLFxuICBMaXN0SXRlbUF2YXRhcixcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LCBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi9iYXNlL2Jvb2subW9kZWwnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Nb2RlbCB9IGZyb20gJy4uL2Jhc2UvY2FydC1pdGVtLm1vZGVsJztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtcbiAgYWRkQm9va1F1YW50aXR5LFxuICBhZGRCb29rVG9DYXJ0LFxuICBjaGFuZ2VUb3RhbENhcnRJdGVtcyxcbiAgZGVkdWN0Qm9va1F1YW50aXR5LFxuICByZW1vdmVCb29rRnJvbUNhcnQsXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5jbGFzcyBQYXJlbnRQcm9wcyB7XG4gIG1vZGUhOiBzdHJpbmc7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5jbGFzcyBCb29rTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGhhbmRsZVJlbW92ZUl0ZW0gPSAoYm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcmVtb3ZlQm9va0Zyb21DYXJ0LCBhZGRCb29rUXVhbnRpdHksIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCB1c2VyLCBjYXJ0cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZW1vdmVCb29rRnJvbUNhcnQoYm9vaywgdXNlci5pZCk7XG4gICAgYWRkQm9va1F1YW50aXR5KGJvb2suaWQpO1xuICAgIGNoYW5nZVRvdGFsQ2FydEl0ZW1zKGNhcnRzW3VzZXIuaWRdXG4gICAgICAucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHAgKyBjLnF1YW50aXR5LCAwKSk7XG4gIH07XG5cbiAgaGFuZGxlQWRkSXRlbShib29rOiBCb29rTW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBhZGRCb29rVG9DYXJ0LCBkZWR1Y3RCb29rUXVhbnRpdHksIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCB1c2VyLCBjYXJ0cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBhZGRCb29rVG9DYXJ0KGJvb2ssIHVzZXIuaWQpO1xuICAgIGRlZHVjdEJvb2tRdWFudGl0eShib29rLmlkKTtcbiAgICBjaGFuZ2VUb3RhbENhcnRJdGVtcyhjYXJ0c1t1c2VyLmlkXVxuICAgICAgLnJlZHVjZSgocDogbnVtYmVyLCBjOiBDYXJ0SXRlbU1vZGVsKSA9PiBwICsgYy5xdWFudGl0eSwgMCkpO1xuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZyB8IG51bWJlciB8IHt9IHwgUmVhY3QuUmVhY3ROb2RlQXJyYXkgfCBSZWFjdC5SZWFjdFBvcnRhbCB8XG4gICAgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXIsXG4gICAgICBjYXJ0cyxcbiAgICAgIGJvb2tzLFxuICAgICAgbW9kZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1c2VyQ2FydCA9IHVzZXIuaWQgaW4gY2FydHMgPyBjYXJ0c1t1c2VyLmlkXSA6IG51bGw7XG4gICAgY29uc3QgdXNlckJvb2tzID0gdXNlckNhcnQgPyB1c2VyQ2FydFxuICAgICAgLm1hcCgoaXRlbTogQ2FydEl0ZW1Nb2RlbCkgPT4gYm9va3MuZmluZCgoYm9vazogQm9va01vZGVsKSA9PiBib29rLmlkID09PSBpdGVtLmlkKSkgOiBbXTtcbiAgICBjb25zdCBnZXRUb3RhbEZvclJvdyA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICAgIGlmICh1c2VyQ2FydCkge1xuICAgICAgICBjb25zdCBpdGVtID0gdXNlckNhcnQuZmluZCgoaXRlbTogQ2FydEl0ZW1Nb2RlbCkgPT4gaXRlbS5pZCA9PT0gYm9vay5pZCk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIChpdGVtLnF1YW50aXR5ICogcGFyc2VGbG9hdCgoYm9vay5wcmljZSkudG9TdHJpbmcoKSkpLnRvRml4ZWQoMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwLjAwJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG90YWwgPSAoKSA9PiB7XG4gICAgICBpZiAodXNlckNhcnQpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYXJ0LnJlZHVjZSgocDogbnVtYmVyLCBjOiBDYXJ0SXRlbU1vZGVsKSA9PiB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgcCArPSAoTnVtYmVyKGMucHJpY2UpICogYy5xdWFudGl0eSk7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sIDApLnRvRml4ZWQoMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGUgYXJpYS1sYWJlbD0nc2ltcGxlIHRhYmxlJz5cbiAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkNvdmVyPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPlRpdGxlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkF1dGhvcjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5QcmljZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5BbW91bnQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+VG90YWw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICB7dXNlckJvb2tzLm1hcCgoYm9vazogQm9va01vZGVsKSA9PiAoXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtib29rLmlkfT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17Ym9vay50aXRsZX0gc3JjPXtib29rLmJvb2tfY292ZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2Jvb2sudGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2Jvb2suYXV0aG9yfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntgXFx1MjBBQyR7Ym9vay5wcmljZX1gfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICB7bW9kZSA9PT0gJ2VkaXQnXG4gICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlSXRlbShib29rKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nYWRkIHRvIHNob3BwaW5nIGNhcnQnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICB7dXNlckNhcnQuZmluZCgoaXRlbTogQ2FydEl0ZW1Nb2RlbCkgPT4gaXRlbS5pZCA9PT0gYm9vay5pZCkucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRJdGVtKGJvb2spfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdhZGQgdG8gc2hvcHBpbmcgY2FydCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge21vZGUgPT09ICdwcmV2aWV3J1xuICAgICAgICAgICAgICAmJiA8VGFibGVDZWxsPnt1c2VyQ2FydC5maW5kKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBpdGVtLmlkID09PSBib29rLmlkKS5xdWFudGl0eX08L1RhYmxlQ2VsbD59XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2BcXHUyMEFDJHtnZXRUb3RhbEZvclJvdyhib29rKX1gfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9IC8+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+PHN0cm9uZz5Ub3RhbDo8L3N0cm9uZz48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e2dldFRvdGFsKCl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICB7IXVzZXJCb29rcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezZ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBhbGlnbj0nY2VudGVyJz5Zb3VyIGNhcnQgaXMgZW1wdHkuPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxuICB0b3RhbDogc3RhdGUudG90YWwsXG4gIGNhcnRzOiBzdGF0ZS5jYXJ0cyxcbiAgYm9va3M6IHN0YXRlLmJvb2tzLFxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZEJvb2tRdWFudGl0eSxcbiAgZGVkdWN0Qm9va1F1YW50aXR5LFxuICBjaGFuZ2VUb3RhbENhcnRJdGVtcyxcbiAgcmVtb3ZlQm9va0Zyb21DYXJ0LFxuICBhZGRCb29rVG9DYXJ0LFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tMaXN0Q29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQm9va0xpc3QpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdyaWQsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSX1JPTEUgfSBmcm9tICcuLi9iYXNlL3VzZXItcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIG9uTW9kYWxPcGVuOiBGdW5jdGlvbjtcbiAgb25Cb29rRGVsZXRlOiBGdW5jdGlvbjtcbiAgYWRkVG9DYXJ0OiBGdW5jdGlvbjtcbiAgc2VsZWN0ZWRCb29rOiBCb29rTW9kZWw7XG4gIHVzZXJSb2xlOiBVU0VSX1JPTEU7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5leHBvcnQgZnVuY3Rpb24gQm9va1RpbGUocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gY3JlYXRlU3R5bGVzKHtcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIG1hcmdpbjogJzJweCAwJyxcbiAgICB9LFxuICB9KSk7XG5cbiAgY29uc3QgaGFuZGxlQm9va0RpYWxvZ09wZW4gPSAoc2VsZWN0ZWRCb29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7IG9uTW9kYWxPcGVuIH0gPSBwcm9wcztcbiAgICBvbk1vZGFsT3BlbihzZWxlY3RlZEJvb2spO1xuICB9O1xuXG4gIGNvbnN0IHsgc2VsZWN0ZWRCb29rLCB1c2VyUm9sZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXs0fSBzbT17M30gbWQ9ezJ9IGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgIDxHcmlkIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJvb2tEaWFsb2dPcGVuKHNlbGVjdGVkQm9vayl9IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRCb29rLmJvb2tfY292ZXJ9IGFsdD17c2VsZWN0ZWRCb29rLnRpdGxlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+e3NlbGVjdGVkQm9vay50aXRsZX08L2g0PlxuICAgICAgICA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+e3NlbGVjdGVkQm9vay5hdXRob3J9PC9oNT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJz5cbiAgICAgICAgICB7dXNlclJvbGUgPT09IFVTRVJfUk9MRS5jbGllbnQgJiYgKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0gZGlyZWN0aW9uPSdjb2x1bW4nPlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBhbGlnbkl0ZW1zPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxzcGFuPntgXFx1MjBBQyR7c2VsZWN0ZWRCb29rLnByaWNlfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2FkZCB0byBzaG9wcGluZyBjYXJ0J1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuYWRkVG9DYXJ0KHNlbGVjdGVkQm9vayl9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRCb29rLnF1YW50aXR5IDwgMX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWRkU2hvcHBpbmdDYXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9J210LS0yJz5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRCb29rLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyUm9sZSA9PT0gVVNFUl9ST0xFLmFkbWluICYmIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdyZW1vdmUgYm9vaydcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkJvb2tEZWxldGUoc2VsZWN0ZWRCb29rKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdlZGl0IGJvb2sgaW5mbydcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCb29rRGlhbG9nT3BlbihzZWxlY3RlZEJvb2spfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZSwgR3JpZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZCxcbiAgb3BlbjogYm9vbGVhbixcbiAgZGlhbG9nVGl0bGU6IHN0cmluZyxcbiAgZGlhbG9nVGV4dDogc3RyaW5nLFxuICBvbkNvbmZpcm06IChib29rOiBCb29rTW9kZWwpID0+IHZvaWQsXG4gIGRhdGE6IGFueTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1EaWFsb2cocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBvbkNsb3NlLCBvcGVuLCBkaWFsb2dUaXRsZSwgZGlhbG9nVGV4dCwgb25Db25maXJtLCBkYXRhLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT0nc2ltcGxlLWRpYWxvZy10aXRsZScgb3Blbj17b3Blbn0gbWF4V2lkdGg9J3hzJz5cbiAgICAgIDxEaWFsb2dUaXRsZT57ZGlhbG9nVGl0bGV9PC9EaWFsb2dUaXRsZT5cbiAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGNsYXNzTmFtZT0ncHktNCc+e2RpYWxvZ1RleHR9PC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGNsYXNzTmFtZT0ncHktMyc+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3NlY29uZGFyeScgb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybShkYXRhKX0+Q29uZmlybTwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gIEF2YXRhciwgQmFkZ2UsIGNyZWF0ZVN0eWxlcywgR3JpZCwgSWNvbkJ1dHRvbiwgVGhlbWUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQnO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgVXNlckFjdGlvbnNDb250YWluZXIgfSBmcm9tICcuL1VzZXJBY3Rpb25zJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4uL2Jhc2UvdXNlci1yb2xlLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBzcGFuOiB7XG4gICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qge1xuICAgIHVzZXIsIHNlc3Npb24sIHRvdGFsLCBoaXN0b3J5LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGFuZGxlR29Ub0hpc3RvcnkgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKCcvb3JkZXJzLWhpc3RvcnknKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHb1RvVXNlcnMgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKCcvdXNlcnMnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJz5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPExpbmsgdG89Jy8nPlxuICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gYXJpYS1sYWJlbD0nYWRkIHRvIHNob3BwaW5nIGNhcnQnPlxuICAgICAgICAgICAgICA8SG9tZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICBBd2Vzb21lIEJvb2tzdG9yZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7c2Vzc2lvbiAmJiB1c2VyXG4gICAgICAgICAgJiYgKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezd9IGRpcmVjdGlvbj0ncm93JyBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17Nn0gYWxpZ25JdGVtcz0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17dXNlci51c2VybmFtZX0gc3JjPXt1c2VyLnBpY3R1cmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW59PntgJHt1c2VyLm5hbWV9ICR7dXNlci5zdXJuYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXs2fSBqdXN0aWZ5PSdmbGV4LWVuZCc+XG4gICAgICAgICAgICAgICAge3VzZXIucm9sZSA9PT0gVVNFUl9ST0xFLmNsaWVudCAmJiAoXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2NhcnQnPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSBhcmlhLWxhYmVsPSdhZGQgdG8gc2hvcHBpbmcgY2FydCc+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17dG90YWx9IGNvbG9yPSdzZWNvbmRhcnknPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VXNlckFjdGlvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIGdvVG9IaXN0b3J5PXsoKSA9PiBoYW5kbGVHb1RvSGlzdG9yeSgpfVxuICAgICAgICAgICAgICAgICAgZ29Ub1VzZXJzPXsoKSA9PiBoYW5kbGVHb1RvVXNlcnMoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICB7IXNlc3Npb24gJiYgPFJlZGlyZWN0IHRvPScvbG9naW4nIC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIsXG4gIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gIHRvdGFsOiBzdGF0ZS50b3RhbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdyZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9jc3MvcmVhY3Qtc3Bpbm5lci1sb2FkZXIuY3NzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzcGlubmVyLWNvbnRhaW5lcic+XG4gICAgICA8TG9hZGVyXG4gICAgICAgIHR5cGU9J1RhaWxTcGluJ1xuICAgICAgICBjb2xvcj0nIzAwQkZGRidcbiAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgY2hhbmdlT3JkZXJTdGF0dXMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgb3JkZXJJZDogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmNsYXNzIFN0YXR1c0NoYW5nZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgb3JkZXJJZDogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHM6IGFueSwgcHJldlN0YXRlOiBhbnkpIHtcbiAgICBpZiAoJ29yZGVySWQnIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMub3JkZXJJZCAhPT0gcHJldlN0YXRlLm9yZGVySWQpIHtcbiAgICAgIHJldHVybiB7IHN0YXR1czogbmV4dFByb3BzLnN0YXR1cywgb3JkZXJJZDogbmV4dFByb3BzLm9yZGVySWQgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IGFueSB9PikgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXR1cyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGNoYW5nZU9yZGVyU3RhdHVzLCBvcmRlcklkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IG5ld1N0YXR1cyB9KTtcbiAgICBjaGFuZ2VPcmRlclN0YXR1cyhvcmRlcklkLCBuZXdTdGF0dXMpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ09yZGVyIHN0YXR1cyBjaGFuZ2VkIHN1Y2Nlc3NmdWxseScpO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmcgfCBudW1iZXIgfCB7fSB8IFJlYWN0LlJlYWN0Tm9kZUFycmF5IHwgUmVhY3QuUmVhY3RQb3J0YWwgfFxuICAgIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Db250cm9sIHZhcmlhbnQ9J291dGxpbmVkJyBzdHlsZT17eyBtaW5XaWR0aDogMTIwIH19PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD0nbGFiZWwnXG4gICAgICAgICAgaWQ9J3NlbGVjdDEnXG4gICAgICAgICAgdmFsdWU9e3N0YXR1c31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J25ldycgZGlzYWJsZWQ+TmV3PC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J3BhaWQnIGRpc2FibGVkPlBhaWQ8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nc2VudCc+U2VudDwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdjYW5jZWxsZWQnPkNhbmNlbGxlZDwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgY2hhbmdlT3JkZXJTdGF0dXMgfTtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c0NoYW5nZVNlbGVjdENvbnRhaW5lciA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShTdGF0dXNDaGFuZ2VTZWxlY3QpO1xuIiwiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgTWVudSwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBzZXNzaW9uQ2hhbmdlIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgeyBVU0VSX1JPTEUgfSBmcm9tICcuLi9iYXNlL3VzZXItcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbnR5cGUgUGFyZW50UHJvcHMgPSB7XG4gIGdvVG9IaXN0b3J5OiAoKSA9PiB2b2lkO1xuICBnb1RvVXNlcnM6ICgpID0+IHZvaWQ7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5mdW5jdGlvbiBVc2VyQWN0aW9ucyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IHsgc2Vzc2lvbkNoYW5nZSwgdXNlciB9ID0gcHJvcHM7XG4gIGNvbnN0IGlzQWRtaW4gPSB1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5hZG1pbjtcblxuICBjb25zdCBoYW5kbGVNZW51ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHNlc3Npb25DaGFuZ2UoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdvVG9IaXN0b3J5ID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgcHJvcHMuZ29Ub0hpc3RvcnkoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHb1RvVXNlckxpc3QgPSAoKSA9PiB7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICBwcm9wcy5nb1RvVXNlcnMoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPSdhY2NvdW50IG9mIGN1cnJlbnQgdXNlcidcbiAgICAgICAgYXJpYS1jb250cm9scz0nbWVudS1hcHBiYXInXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9J3RydWUnXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnV9XG4gICAgICAgIGNvbG9yPSdpbmhlcml0J1xuICAgICAgPlxuICAgICAgICA8QWNjb3VudENpcmNsZSAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPE1lbnVcbiAgICAgICAgaWQ9J21lbnUtYXBwYmFyJ1xuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICB9fVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgfX1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVHb1RvSGlzdG9yeX0+e2lzQWRtaW4gPyAnT3JkZXJzIG1hbmFnZW1lbnQnIDogJ09yZGVyIGhpc3RvcnknfTwvTWVudUl0ZW0+XG4gICAgICAgIHtpc0FkbWluICYmIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVHb1RvVXNlckxpc3R9PlVzZXJzIG1hbmFnZW1lbnQ8L01lbnVJdGVtPn1cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nIG91dDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzZXNzaW9uQ2hhbmdlIH07XG5cbmV4cG9ydCBjb25zdCBVc2VyQWN0aW9uc0NvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJBY3Rpb25zKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2Vyc0FwaTogJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyxcbiAgICBib29rc0FwaTogJ2h0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy9jdXJyZW50L21hc3MtbWFya2V0LXBhcGVyYmFjay5qc29uP2FwaS1rZXk9NGxWRUJTQ2RGTkhFcXd4WE11cDU4SmR4ckNTZ0oxREsnLFxuICAgIGlzUHJvZHVjdGlvbjogdHJ1ZSxcbiAgICBpc0RldmVsb3BtZW50OiBmYWxzZSxcbiAgfTtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJy4vc2VydmljZVdvcmtlcic7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuL0FwcCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcENvbnRhaW5lcn0vPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XG4iLCJpbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtsb2FkZXJTdGF0ZSR9IGZyb20gJy4vQXBwJ1xuXG5jb25zdCBpbml0aWFsU3RvcmVTdGF0ZSA9IHtcbiAgICB1c2VyczogW10sXG4gICAgdXNlcjogJycsXG4gICAgc2Vzc2lvbjogZmFsc2UsXG4gICAgY2FydHM6IHt9LFxuICAgIHRvdGFsOiAwLFxuICAgIG9yZGVyczogW10sXG4gICAgYm9va3M6IFtdXG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFN0YXRlID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0b3JlU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZFN0YXRlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxTdG9yZVN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlU3RhdGUgPSBhc3luYyAoc3RhdGU6IFN0YXRlTW9kZWwpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsb2FkZXJTdGF0ZSQubmV4dCh0cnVlKTtcbiAgICAgICAgYXdhaXQgdGltZW91dCgxMDAwKTtcbiAgICAgICAgbG9hZGVyU3RhdGUkLm5leHQoZmFsc2UpO1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsIHNlcmlhbGl6ZWRTdGF0ZSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGlnbm9yZSB3cml0ZSBlcnJvcnNcbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lb3V0KG1zOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLCBDb250YWluZXIsIEdyaWQsIEljb25CdXR0b24sIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IEJvb2tMaXN0Q29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rTGlzdCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcbmltcG9ydCB7IGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IFN0YXRlUHJvcHMsIERpc3BhdGNoUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgaGlzdG9yeTogSGlzdG9yeTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmZ1bmN0aW9uIENhcnQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjYXJ0cywgdXNlciwgY2xlYXJDYXJ0LCBjaGFuZ2VUb3RhbENhcnRJdGVtcywgaGlzdG9yeSxcbiAgfSA9IHByb3BzO1xuICBjb25zdCB1c2VyQ2FydCA9IGNhcnRzW3VzZXIuaWRdO1xuXG4gIGNvbnN0IGdvSG9tZSA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckFsbENhcnRJdGVtcyA9ICgpID0+IHtcbiAgICBjbGVhckNhcnQodXNlci5pZCk7XG4gICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoMCk7XG4gICAgZ29Ib21lKCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1BheW1lbnQgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKCcvcGF5bWVudCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nY2VudGVyJyB4cz17MTJ9IGNsYXNzTmFtZT0ncHktNCc+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGFsaWduPSdjZW50ZXInPkl0ZW1zIGluIHlvdXIgY2FydDo8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxCb29rTGlzdENvbnRhaW5lciBtb2RlPSdlZGl0JyAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBvbkNsaWNrPXtnb0hvbWV9PkJhY2s8L0J1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbGVhckFsbENhcnRJdGVtcygpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF1c2VyQ2FydH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgb25DbGljaz17Z29Ub1BheW1lbnR9XG4gICAgICAgICAgZGlzYWJsZWQ9eyF1c2VyQ2FydH1cbiAgICAgICAgPlxuICAgICAgICAgIFByb2NlZWQgdG8gcGF5bWVudFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICBjYXJ0czogc3RhdGUuY2FydHMsXG4gIHVzZXI6IHN0YXRlLnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBjaGFuZ2VUb3RhbENhcnRJdGVtcywgY2xlYXJDYXJ0IH07XG5cbmV4cG9ydCBjb25zdCBDYXJ0UGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJ2Vudmlyb25tZW50JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtcbiAgYWRkQm9va1RvQ2FydCxcbiAgYm9va3NGZXRjaGVkLFxuICBjaGFuZ2VUb3RhbENhcnRJdGVtcyxcbiAgZGVkdWN0Qm9va1F1YW50aXR5LFxuICBkZWxldGVCb29rLCBkaWFsb2dDbG9zZSwgZGlhbG9nT3BlbixcbiAgbW9kYWxDbG9zZSxcbiAgbW9kYWxPcGVuLFxuICBzZWxlY3RCb29rLFxufSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQm9va0luZm9EaWFsb2dDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tJbmZvRGlhbG9nJztcbmltcG9ydCB7IEJvb2tUaWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rVGlsZSc7XG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICcuLi9jb21wb25lbnRzL0NvbmZpcm1EaWFsb2cnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHM7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFtdPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYm9va3MgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFib29rcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHsgYm9va3NGZXRjaGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBib29rc0FwaSB9ID0gZW52aXJvbm1lbnQoKTtcbiAgICAgIGZldGNoKGJvb2tzQXBpKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBib29rcyA9IHJlc3BvbnNlLnJlc3VsdHMuYm9va3MubWFwKChib29rOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBpZDogYm9vay5wcmltYXJ5X2lzYm4xMCxcbiAgICAgICAgICAgIHRpdGxlOiBib29rLnRpdGxlLFxuICAgICAgICAgICAgYXV0aG9yOiBib29rLmF1dGhvcixcbiAgICAgICAgICAgIHB1Ymxpc2hlZF9kYXRlOiAnbi9hJyxcbiAgICAgICAgICAgIGJvb2tfY292ZXI6IGJvb2suYm9va19pbWFnZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxMCxcbiAgICAgICAgICAgIHByaWNlOiB0aGlzLmdldFJhbmRvbVByaWNlKCksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5kZXNjcmlwdGlvbixcbiAgICAgICAgICB9IGFzIEJvb2tNb2RlbCkpO1xuICAgICAgICAgIGJvb2tzRmV0Y2hlZChib29rcyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVRvdGFsQ2FydEl0ZW1zKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UmFuZG9tUHJpY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWluID0gNTtcbiAgICBjb25zdCBtYXggPSAyMDtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbikudG9GaXhlZCgyKTtcbiAgfTtcblxuICBoYW5kbGVBZGRUb0NhcnQgPSAoYm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBkZWR1Y3RCb29rUXVhbnRpdHksIGFkZEJvb2tUb0NhcnQsIHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgZGVkdWN0Qm9va1F1YW50aXR5KGJvb2suaWQpO1xuICAgIGFkZEJvb2tUb0NhcnQoYm9vaywgdXNlci5pZCk7XG4gICAgdGhpcy5jaGFuZ2VUb3RhbENhcnRJdGVtcygpO1xuICB9O1xuXG4gIGhhbmRsZU1vZGFsT3BlbiA9IChzZWxlY3RlZEJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHsgbW9kYWxPcGVuLCBzZWxlY3RCb29rIH0gPSB0aGlzLnByb3BzO1xuICAgIHNlbGVjdEJvb2soc2VsZWN0ZWRCb29rKTtcbiAgICBtb2RhbE9wZW4oKTtcbiAgfTtcblxuICBoYW5kbGVDb25maXJtT3BlbiA9IChzZWxlY3RlZEJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHsgZGlhbG9nT3Blbiwgc2VsZWN0Qm9vayB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3RCb29rKHNlbGVjdGVkQm9vayk7XG4gICAgZGlhbG9nT3BlbigpO1xuICB9O1xuXG4gIGhhbmRsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtb2RhbENsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG1vZGFsQ2xvc2UoKTtcbiAgfTtcblxuICBoYW5kbGVDb25maXJtQ2xvc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkaWFsb2dDbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICBkaWFsb2dDbG9zZSgpO1xuICB9O1xuXG4gIGhhbmRsZUJvb2tEZWxldGUgPSAoYm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBkZWxldGVCb29rIH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZUJvb2soYm9vay5pZCk7XG4gICAgdGhpcy5oYW5kbGVDb25maXJtQ2xvc2UoKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdCb29rIGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIH07XG5cbiAgY2hhbmdlVG90YWxDYXJ0SXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGFuZ2VUb3RhbENhcnRJdGVtcywgY2FydHMsIHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHVzZXIuaWQgaW4gY2FydHMpIHtcbiAgICAgIGNoYW5nZVRvdGFsQ2FydEl0ZW1zKGNhcnRzW3VzZXIuaWRdXG4gICAgICAgIC5yZWR1Y2UoKHA6IG51bWJlciwgYzogQ2FydEl0ZW1Nb2RlbCkgPT4gcCArIGMucXVhbnRpdHksIDApKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZyB8IG51bWJlciB8IHt9IHwgUmVhY3QuUmVhY3ROb2RlQXJyYXkgfCBSZWFjdC5SZWFjdFBvcnRhbCB8XG4gICAgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGJvb2tzLCBtb2RhbCwgdXNlciwgZGlhbG9nLCBib29rLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFjdGl2ZUJvb2tzID0gYm9va3MuZmlsdGVyKChib29rOiBCb29rTW9kZWwpID0+ICFib29rLmRlbGV0ZWQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjb250YWluZXIgc3BhY2luZz17NH0ganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICB7YWN0aXZlQm9va3MubWFwKChib29rOiBCb29rTW9kZWwpID0+IChcbiAgICAgICAgICAgIDxCb29rVGlsZVxuICAgICAgICAgICAgICBzZWxlY3RlZEJvb2s9e2Jvb2t9XG4gICAgICAgICAgICAgIGtleT17Ym9vay5pZH1cbiAgICAgICAgICAgICAgdXNlclJvbGU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgb25Cb29rRGVsZXRlPXt0aGlzLmhhbmRsZUNvbmZpcm1PcGVufVxuICAgICAgICAgICAgICBvbk1vZGFsT3Blbj17dGhpcy5oYW5kbGVNb2RhbE9wZW59XG4gICAgICAgICAgICAgIGFkZFRvQ2FydD17dGhpcy5oYW5kbGVBZGRUb0NhcnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxCb29rSW5mb0RpYWxvZ0NvbnRhaW5lclxuICAgICAgICAgIG9wZW49e21vZGFsfVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlTW9kYWxDbG9zZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbmZpcm1EaWFsb2dcbiAgICAgICAgICBvcGVuPXtkaWFsb2d9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDb25maXJtQ2xvc2V9XG4gICAgICAgICAgZGlhbG9nVGl0bGU9J1JlbW92ZSBib29rJ1xuICAgICAgICAgIGRhdGE9e2Jvb2t9XG4gICAgICAgICAgZGlhbG9nVGV4dD17YERvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgJHtib29rLnRpdGxlfT9gfVxuICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5oYW5kbGVCb29rRGVsZXRlfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIsXG4gIGJvb2tzOiBzdGF0ZS5ib29rcyxcbiAgYm9vazogc3RhdGUuYm9vayxcbiAgY2FydHM6IHN0YXRlLmNhcnRzLFxuICBtb2RhbDogc3RhdGUubW9kYWwsXG4gIGRpYWxvZzogc3RhdGUuZGlhbG9nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYm9va3NGZXRjaGVkLFxuICBkZWR1Y3RCb29rUXVhbnRpdHksXG4gIGFkZEJvb2tUb0NhcnQsXG4gIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLFxuICBtb2RhbE9wZW4sXG4gIG1vZGFsQ2xvc2UsXG4gIHNlbGVjdEJvb2ssXG4gIGRlbGV0ZUJvb2ssXG4gIGRpYWxvZ09wZW4sXG4gIGRpYWxvZ0Nsb3NlLFxufTtcblxuZXhwb3J0IGNvbnN0IEhvbWVQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLCBDb250YWluZXIsIGNyZWF0ZVN0eWxlcywgR3JpZCwgVGhlbWUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vYmFzZS91c2VyLm1vZGVsJztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgc2Vzc2lvbkNoYW5nZSwgdXNlckNoYW5nZWQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XG4gIGxhcmdlOiB7XG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxMCksXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIExvZ2luKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHtzZXNzaW9uLCB1c2VyLCB1c2Vyc30gPSBwcm9wcztcblxuICBjb25zdCBzZWxlY3RVc2VyID0gKHNlbGVjdGVkVXNlcjogVXNlck1vZGVsKSA9PiB7XG4gICAgY29uc3Qge3VzZXJDaGFuZ2VkLCBzZXNzaW9uQ2hhbmdlfSA9IHByb3BzO1xuICAgIHVzZXJDaGFuZ2VkKHNlbGVjdGVkVXNlcik7XG4gICAgc2Vzc2lvbkNoYW5nZSh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdoLWZsZXgnPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ncGItMydcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3BiLTMnPkxvZyBpbiBhcyBvbmUgb2YgdGhlIGZvbGxvd2luZyB1c2Vyczo8L2gyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgICAgICAgPlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzcjogVXNlck1vZGVsKSA9PiAoXG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAgICAgIHhzPXsyfVxuICAgICAgICAgICAgICBrZXk9e3Vzci5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0VXNlcih1c3IpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYWx0PXt1c3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgc3JjPXt1c3IucGljdHVyZVVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoND57YCR7dXNyLm5hbWV9ICR7dXNyLnN1cm5hbWV9YH08L2g0PlxuICAgICAgICAgICAgICA8c3Bhbj57dXNyLnJvbGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtzZXNzaW9uICYmIHVzZXIgJiYgPFJlZGlyZWN0IHRvPScvJy8+fVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICB1c2VyOiBzdGF0ZS51c2VyLFxuICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHt1c2VyQ2hhbmdlZCwgc2Vzc2lvbkNoYW5nZX07XG5cbmV4cG9ydCBjb25zdCBMb2dpblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgR3JpZCxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUb29sdGlwLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgT3JkZXJNb2RlbCB9IGZyb20gJy4uL2Jhc2Uvb3JkZXIubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4uL2Jhc2UvdXNlci1yb2xlLm1vZGVsJztcbmltcG9ydCB7IFN0YXR1c0NoYW5nZVNlbGVjdENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3RhdHVzQ2hhbmdlU2VsZWN0JztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgaGlzdG9yeTogSGlzdG9yeTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBPcmRlcnMocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBvcmRlcnMsIHVzZXIsIGJvb2tzLCBoaXN0b3J5LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGlzQWRtaW4gPSB1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5hZG1pbjtcbiAgY29uc3QgYWxsT3JkZXJzID0gaXNBZG1pbiA/IG9yZGVycyA6IG9yZGVyc1xuICAgIC5maWx0ZXIoKG9yZGVyOiBPcmRlck1vZGVsKSA9PiBvcmRlci5pZC5pbmNsdWRlcygodXNlci5pZCkudG9TdHJpbmcoKSkpO1xuXG4gIGNvbnN0IGdvSG9tZSA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIHhzPXsxMn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xuICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktNCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNBZG1pbiA/ICdDdXN0b21lciBvcmRlcnM6JyA6ICdZb3VyIHByZXZpb3VzIG9yZGVycyB3aXRoIHVzOid9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGF0ZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICB7aXNBZG1pbiAmJiA8VGFibGVDZWxsPlVzZXI8L1RhYmxlQ2VsbD59XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3RhdHVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+VG90YWwgUHJpY2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Cb29rczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAge2FsbE9yZGVycy5tYXAoKG9yZGVyOiBPcmRlck1vZGVsKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e29yZGVyLmlkfT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxNb21lbnQgZm9ybWF0PSdMTEwnPntvcmRlci5kYXRlfTwvTW9tZW50PjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIHtpc0FkbWluICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci51c2VyLnN1cm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc0FkbWluICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNDaGFuZ2VTZWxlY3RDb250YWluZXIgc3RhdHVzPXtvcmRlci5zdGF0dXN9IG9yZGVySWQ9e29yZGVyLmlkfS8+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshaXNBZG1pbiAmJiA8VGFibGVDZWxsPntvcmRlci5zdGF0dXN9PC9UYWJsZUNlbGw+fVxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2BcXHUyMEFDJHtvcmRlci50b3RhbH1gfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5ib29rcy5tYXAoKGJvb2s6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsQm9va0luZm86IEJvb2tNb2RlbCA9IGJvb2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgoYms6IEJvb2tNb2RlbCkgPT4gYmsuaWQgPT09IGJvb2suaWQpIGFzIEJvb2tNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmdWxsQm9va0luZm8uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtmdWxsQm9va0luZm8udGl0bGV9LCAke2Z1bGxCb29rSW5mby5hdXRob3J9IHwgUXVhbnRpdHk6ICR7Ym9vay5xdWFudGl0eX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtib29rLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZnVsbEJvb2tJbmZvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZnVsbEJvb2tJbmZvLmJvb2tfY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgeyFhbGxPcmRlcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdoNidcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzQWRtaW4gPyAnVGhlcmVcXCdzIG5vdGhpbmcgdG8gc2hvdycgOiAnWW91ciBkb25cXCd0IGhhdmUgYW55IHBhc3Qgb3JkZXJzLid9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgb25DbGljaz17Z29Ib21lfT5CYWNrPC9CdXR0b24+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgb3JkZXJzOiBzdGF0ZS5vcmRlcnMsXG4gIGJvb2tzOiBzdGF0ZS5ib29rcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgT3JkZXJIaXN0b3J5UGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShPcmRlcnMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgRm9ybUxhYmVsLFxuICBHcmlkLFxuICBSYWRpbyxcbiAgUmFkaW9Hcm91cCxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgQm9va0xpc3RDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tMaXN0JztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgYWRkT3JkZXIsIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IE9yZGVyTW9kZWwgfSBmcm9tICcuLi9iYXNlL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9SREVSX1NUQVRVU0VTIH0gZnJvbSAnLi4vYmFzZS9vcmRlci1zdGF0dXNlcy5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Db25maXJtRGlhbG9nJztcbmltcG9ydCB7IFBheW1lbnRNb2RlbCB9IGZyb20gJy4uL2Jhc2UvcGF5bWVudC1tb2RlbCc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5jbGFzcyBQYXltZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIHBheW1lbnQ6IFBheW1lbnRNb2RlbC5jYXJkLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVQYXltZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQsIGFkZE9yZGVyLCB1c2VyLCBjYXJ0cywgaGlzdG9yeSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBwYXltZW50LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGFkZE9yZGVyKHtcbiAgICAgIHN0YXR1czogcGF5bWVudCA9PT0gUGF5bWVudE1vZGVsLmNhcmQgPyBPUkRFUl9TVEFUVVNFUy5wYWlkIDogT1JERVJfU1RBVFVTRVMubmV3LFxuICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgIGlkOiBgJHt1c2VyLmlkfV8ke0RhdGUubm93KCl9YCxcbiAgICAgIGJvb2tzOiBjYXJ0c1t1c2VyLmlkXSxcbiAgICAgIHRvdGFsOiB0aGlzLmdldFRvdGFsKGNhcnRzW3VzZXIuaWRdKSxcbiAgICAgIHVzZXIsXG4gICAgfSBhcyBPcmRlck1vZGVsKTtcbiAgICBjbGVhckNhcnQodXNlci5pZCk7XG4gICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoMCk7XG4gICAgdGhpcy5oYW5kbGVDb25maXJtQ2xvc2UoKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdPcmRlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcGxhY2VkLiBUaGFuayB5b3UhJyk7XG4gICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gIH07XG5cbiAgaGFuZGxlQ29uZmlybU9wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDb25maXJtQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlUGF5bWVudENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudDogKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB9KTtcbiAgfTtcblxuICBnZXREaWFsb2dUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGF5bWVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAocGF5bWVudCA9PT0gUGF5bWVudE1vZGVsLmRlbGl2ZXJ5KSB7XG4gICAgICByZXR1cm4gJ0RvIHlvdSB3YW50IHRvIGNvbmZpcm0gdGhlIHB1cmNoYXNlIGFuZCBwYXkgdGhlIG9yZGVyIGF0IHRoZSBwaWNrIHVwPyc7XG4gICAgfVxuICAgIHJldHVybiAnRG8geW91IGNvbmZpcm0gdGhhdCB0aGUgYW1vdW50IGR1ZSB3aWxsIGJlIGRlYml0ZWQgZnJvbSB5b3UgY3JlZGl0IGNhcmQ/JztcbiAgfTtcblxuICBnZXRUb3RhbCA9IChjYXJ0OiBDYXJ0SXRlbU1vZGVsW10pID0+IGNhcnQucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBwICs9IChOdW1iZXIoYy5wcmljZSkgKiBjLnF1YW50aXR5KTtcbiAgICByZXR1cm4gcDtcbiAgfSwgMCkudG9GaXhlZCgyKTtcblxuICBnb1RvQ2FydCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaGlzdG9yeS5wdXNoKCcvY2FydCcpO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmcgfCBudW1iZXIgfCB7fSB8IFJlYWN0LlJlYWN0Tm9kZUFycmF5IHwgUmVhY3QuUmVhY3RQb3J0YWwgfFxuICAgIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IHBheW1lbnQsIGlzRGlhbG9nT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J2NlbnRlcicgeHM9ezEyfSBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGFsaWduPSdjZW50ZXInPlBsZWFzZSBjaGVjayBhbGwgaXRlbXMgaW4gdGhlIGNhcnQ6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPEJvb2tMaXN0Q29udGFpbmVyIG1vZGU9J3ByZXZpZXcnIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdweS00JyBqdXN0aWZ5PSdmbGV4LWVuZCc+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PSdmaWVsZHNldCc+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PSdsZWdlbmQnPlBpY2sgcGF5bWVudCBtZXRob2Q6PC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nZ2VuZGVyJ1xuICAgICAgICAgICAgICAgIG5hbWU9J2dlbmRlcjEnXG4gICAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGF5bWVudENoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdkZWxpdmVyeScgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD0nUGF5IGF0IGRlbGl2ZXJ5JyAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdjYXJkJyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPSdQYXkgYnkgY3JlZGl0IGNhcmQnIC8+XG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBvbkNsaWNrPXt0aGlzLmdvVG9DYXJ0fT5CYWNrPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybU9wZW59PlBheTwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICAgIG9wZW49e2lzRGlhbG9nT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZX1cbiAgICAgICAgICBkaWFsb2dUaXRsZT0nUGF5bWVudCBjb25maXJtYXRpb24nXG4gICAgICAgICAgZGlhbG9nVGV4dD17dGhpcy5nZXREaWFsb2dUZXh0KCl9XG4gICAgICAgICAgb25Db25maXJtPXt0aGlzLmhhbmRsZVBheW1lbnR9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgY2FydHM6IHN0YXRlLmNhcnRzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIGNsZWFyQ2FydCwgYWRkT3JkZXIgfTtcblxuZXhwb3J0IGNvbnN0IFBheW1lbnRQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGF5bWVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgR3JpZCxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgSGlzdG9yeSwgTG9jYXRpb25TdGF0ZSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2Jhc2UvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gICAgaGlzdG9yeTogSGlzdG9yeTxMb2NhdGlvblN0YXRlPjtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2Vycyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyB1c2VycywgaGlzdG9yeSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J2NlbnRlcicgeHM9ezEyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcicgY2xhc3NOYW1lPSdweS00Jz5MaXN0IG9mIHVzZXJzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+TmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlN1cm5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Vc2VybmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlJvbGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QaWN0dXJlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyOiBVc2VyTW9kZWwpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dXNlci5uYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3VzZXIuc3VybmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt1c2VyLnVzZXJuYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3VzZXIucm9sZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXIubmFtZX0gc3JjPXt1c2VyLnBpY3R1cmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9e2dvSG9tZX0+QmFjazwvQnV0dG9uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2Vycyxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlcnNQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVzZXJzKTtcbiIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vYmFzZS91c2VyLm1vZGVsJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlck1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPUkRFUl9TVEFUVVNFUyB9IGZyb20gJy4uLy4uL2Jhc2Uvb3JkZXItc3RhdHVzZXMubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlcnNGZXRjaGVkID0gKHVzZXJzOiBVc2VyTW9kZWxbXSkgPT4gKHtcbiAgdHlwZTogJ0ZFVENIX1VTRVJTX1NVQ0NFU1MnLFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyQ2hhbmdlZCA9ICh1c2VyOiBVc2VyTW9kZWwpID0+ICh7XG4gIHR5cGU6ICdVU0VSX0NIQU5HRUQnLFxuICB1c2VyXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25DaGFuZ2UgPSAoc2Vzc2lvbjogYm9vbGVhbikgPT4gKHtcbiAgdHlwZTogJ1NFU1NJT05fQ0hBTkdFJyxcbiAgc2Vzc2lvblxufSk7XG5cbmV4cG9ydCBjb25zdCBib29rc0ZldGNoZWQgPSAoYm9va3M6IEJvb2tNb2RlbFtdKSA9PiAoe1xuICB0eXBlOiAnRkVUQ0hfQk9PS1NfU1VDQ0VTUycsXG4gIGJvb2tzXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEJvb2sgPSAoYm9vazogQm9va01vZGVsKSA9PiAoe1xuICB0eXBlOiAnU0VMRUNUX0JPT0snLFxuICBib29rXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlZHVjdEJvb2tRdWFudGl0eSA9IChib29rSWQ6IHN0cmluZykgPT4gKHtcbiAgdHlwZTogJ0RFRFVDVF9CT09LX1FVQU5USVRZJyxcbiAgYm9va0lkXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZEJvb2tRdWFudGl0eSA9IChib29rSWQ6IHN0cmluZykgPT4gKHtcbiAgdHlwZTogJ0FERF9CT09LX1FVQU5USVRZJyxcbiAgYm9va0lkXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUJvb2tEZXRhaWxzID0gKGJvb2s6IEJvb2tNb2RlbCkgPT4gKHtcbiAgdHlwZTogJ0NIQU5HRV9CT09LX0RFVEFJTFMnLFxuICBib29rXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUJvb2sgPSAoYm9va0lkOiBzdHJpbmcpID0+ICh7XG4gIHR5cGU6ICdERUxFVEVfQk9PSycsXG4gIGJvb2tJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRCb29rVG9DYXJ0ID0gKGJvb2s6IEJvb2tNb2RlbCwgdXNlcklkOiBudW1iZXIpID0+ICh7XG4gIHR5cGU6ICdBRERfQk9PS19UT19DQVJUJyxcbiAgYm9vayxcbiAgdXNlcklkXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUJvb2tGcm9tQ2FydCA9IChib29rOiBCb29rTW9kZWwsIHVzZXJJZDogbnVtYmVyKSA9PiAoe1xuICB0eXBlOiAnUkVNT1ZFX0JPT0tfRlJPTV9DQVJUJyxcbiAgYm9vayxcbiAgdXNlcklkXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ2FydCA9ICh1c2VySWQ6IG51bWJlcikgPT4gKHtcbiAgdHlwZTogJ0NMRUFSX0NBUlQnLFxuICB1c2VySWRcbn0pO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlVG90YWxDYXJ0SXRlbXMgPSAodG90YWw6IG51bWJlcikgPT4gKHtcbiAgdHlwZTogJ0NIQU5HRV9UT1RBTF9DQVJUX0lURU1TJyxcbiAgdG90YWxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkT3JkZXIgPSAob3JkZXI6IE9yZGVyTW9kZWwpID0+ICh7XG4gIHR5cGU6ICdBRERfT1JERVInLFxuICBvcmRlclxufSk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VPcmRlclN0YXR1cyA9IChvcmRlcklkOiBzdHJpbmcsIHN0YXR1czogT1JERVJfU1RBVFVTRVMpID0+ICh7XG4gIHR5cGU6ICdPUkRFUl9TVEFUVVNfQ0hBTkdFJyxcbiAgc3RhdHVzLFxuICBvcmRlcklkXG59KTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsT3BlbiA9ICgpID0+ICh7XG4gIHR5cGU6ICdNT0RBTF9PUEVOJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbW9kYWxDbG9zZSA9ICgpID0+ICh7XG4gIHR5cGU6ICdNT0RBTF9DTE9TRScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZ09wZW4gPSAoKSA9PiAoe1xuICB0eXBlOiAnRElBTE9HX09QRU4nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkaWFsb2dDbG9zZSA9ICgpID0+ICh7XG4gIHR5cGU6ICdESUFMT0dfQ0xPU0UnLFxufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGJvb2sgPSAoc3RhdGU6IGFueSA9IHt9LCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRUxFQ1RfQk9PSyc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmJvb2s7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2Jvb2subW9kZWwnO1xuXG5leHBvcnQgY29uc3QgYm9va3MgPSAoc3RhdGU6IGFueSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdGRVRDSF9CT09LU19TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLmJvb2tzXG4gICAgICAgICAgICBdO1xuICAgICAgICBjYXNlICdERURVQ1RfQk9PS19RVUFOVElUWSc6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm9vay5pZCA9PT0gYWN0aW9uLmJvb2tJZCkge1xuICAgICAgICAgICAgICAgICAgICBib29rLnF1YW50aXR5IC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0FERF9CT09LX1FVQU5USVRZJzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib29rLmlkID09PSBhY3Rpb24uYm9va0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2sucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnQ0hBTkdFX0JPT0tfREVUQUlMUyc6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm9vay5pZCA9PT0gYWN0aW9uLmJvb2suaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib29rLCBhY3Rpb24uYm9vayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0RFTEVURV9CT09LJzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgaWYgKGJvb2suaWQgPT09IGFjdGlvbi5ib29rSWQpIHtcbiAgICAgICAgICAgICAgICAgICBib29rLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IENhcnRJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2NhcnQtaXRlbS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBjYXJ0cyA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBjb25zdCB7dXNlcklkLCBib29rfSA9IGFjdGlvbjtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9CT09LX1RPX0NBUlQnOlxuICAgICAgICAgICAgY29uc3QgYWRkQm9vayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBib29rSW5DYXJ0SW5kZXggPSBzdGF0ZVt1c2VySWRdLmZpbmRJbmRleCgoYms6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJrLmlkID09PSBib29rLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChib29rSW5DYXJ0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVt1c2VySWRdW2Jvb2tJbkNhcnRJbmRleF0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVt1c2VySWRdLnB1c2goe2lkOiBib29rLmlkLCBxdWFudGl0eTogMSwgcHJpY2U6IGJvb2sucHJpY2V9IGFzIENhcnRJdGVtTW9kZWwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh1c2VySWQgaW4gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhZGRCb29rKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW3VzZXJJZF0gPSBbXTtcbiAgICAgICAgICAgICAgICBhZGRCb29rKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9CT09LX0ZST01fQ0FSVCc6XG4gICAgICAgICAgICBjb25zdCB1c2VyQ2FydCA9IHN0YXRlW3VzZXJJZF07XG4gICAgICAgICAgICBjb25zdCBib29rSW5DYXJ0SW5kZXggPSB1c2VyQ2FydC5maW5kSW5kZXgoKGJrOiBDYXJ0SXRlbU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJrLmlkID09PSBib29rLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodXNlckNhcnRbYm9va0luQ2FydEluZGV4XS5xdWFudGl0eSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHVzZXJDYXJ0LnNwbGljZShib29rSW5DYXJ0SW5kZXgsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VyQ2FydFtib29rSW5DYXJ0SW5kZXhdLnF1YW50aXR5IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgJ0NMRUFSX0NBUlQnOlxuICAgICAgICAgICAgZGVsZXRlIHN0YXRlW3VzZXJJZF07XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBkaWFsb2cgPSAoc3RhdGU6IGJvb2xlYW4gPSBmYWxzZSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRElBTE9HX09QRU4nOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgJ0RJQUxPR19DTE9TRSc6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdXNlcnMgfSBmcm9tICcuL3VzZXJzJztcbmltcG9ydCB7IHVzZXIgfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHsgc2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbic7XG5pbXBvcnQgeyBib29rcyB9IGZyb20gJy4vYm9va3MnO1xuaW1wb3J0IHsgY2FydHMgfSBmcm9tICcuL2NhcnRzJztcbmltcG9ydCB7IHRvdGFsIH0gZnJvbSAnLi90b3RhbCc7XG5pbXBvcnQgeyBvcmRlcnMgfSBmcm9tICcuL29yZGVycyc7XG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgYm9vayB9IGZyb20gJy4vYm9vayc7XG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdXNlcixcbiAgICB1c2VycyxcbiAgICBzZXNzaW9uLFxuICAgIGJvb2tzLFxuICAgIGJvb2ssXG4gICAgY2FydHMsXG4gICAgdG90YWwsXG4gICAgb3JkZXJzLFxuICAgIG1vZGFsLFxuICAgIGRpYWxvZ1xufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IG1vZGFsID0gKHN0YXRlOiBib29sZWFuID0gZmFsc2UsIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ01PREFMX09QRU4nOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgJ01PREFMX0NMT1NFJzpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IG9yZGVycyA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBjb25zdCB7b3JkZXIsIHN0YXR1cywgb3JkZXJJZH0gPSBhY3Rpb247XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfT1JERVInOlxuICAgICAgICAgICAgc3RhdGUucHVzaChvcmRlcik7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9PUkRFUic6XG4gICAgICAgICAgICBzdGF0ZS5zcGxpY2Uob3JkZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlICdPUkRFUl9TVEFUVVNfQ0hBTkdFJzpcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3JkZXIgPSBzdGF0ZS5maW5kKChvcmRyOiBPcmRlck1vZGVsKSA9PiBvcmRyLmlkID09PSBvcmRlcklkKTtcbiAgICAgICAgICAgIHNlbGVjdGVkT3JkZXIuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbiA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVNTSU9OX0NIQU5HRSc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnNlc3Npb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi8uLi9iYXNlL3N0YXRlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHRvdGFsID0gKHN0YXRlOiBudW1iZXIgPSAwLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdDSEFOR0VfVE9UQUxfQ0FSVF9JVEVNUyc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnRvdGFsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVU0VSX0NIQU5HRUQnOlxuICAgICAgcmV0dXJuIGFjdGlvbi51c2VyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlcnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY3Rpb24udXNlcnNcbiAgICAgIF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59O1xuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMC84IGFyZSBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goXG4gICAgICAvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC9cbiAgICApXG4pO1xuXG50eXBlIENvbmZpZyA9IHtcbiAgb25TdWNjZXNzPzogKHJlZ2lzdHJhdGlvbjogU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikgPT4gdm9pZDtcbiAgb25VcGRhdGU/OiAocmVnaXN0cmF0aW9uOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZz86IENvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKFxuICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsOiBzdHJpbmcsIGNvbmZpZz86IENvbmZpZykge1xuICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgIC5yZWdpc3Rlcihzd1VybClcbiAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcbiAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgdXBkYXRlZCBwcmVjYWNoZWQgY29udGVudCBoYXMgYmVlbiBmZXRjaGVkLFxuICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHNlcnZpY2Ugd29ya2VyIHdpbGwgc3RpbGwgc2VydmUgdGhlIG9sZGVyXG4gICAgICAgICAgICAgIC8vIGNvbnRlbnQgdW50aWwgYWxsIGNsaWVudCB0YWJzIGFyZSBjbG9zZWQuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICdOZXcgY29udGVudCBpcyBhdmFpbGFibGUgYW5kIHdpbGwgYmUgdXNlZCB3aGVuIGFsbCAnICtcbiAgICAgICAgICAgICAgICAgICd0YWJzIGZvciB0aGlzIHBhZ2UgYXJlIGNsb3NlZC4gU2VlIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EuJ1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsOiBzdHJpbmcsIGNvbmZpZz86IENvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsLCB7XG4gICAgaGVhZGVyczogeyAnU2VydmljZS1Xb3JrZXInOiAnc2NyaXB0JyB9XG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBsb2FkU3RhdGUsIHNhdmVTdGF0ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3QgcGVyc2lzdGVkU3RhdGUgPSBsb2FkU3RhdGUoKTtcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwZXJzaXN0ZWRTdGF0ZSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIHNhdmVTdGF0ZSh7XG4gICAgdXNlcnM6IHN0b3JlLmdldFN0YXRlKCkudXNlcnMsXG4gICAgdXNlcjogc3RvcmUuZ2V0U3RhdGUoKS51c2VyLFxuICAgIHNlc3Npb246IHN0b3JlLmdldFN0YXRlKCkuc2Vzc2lvbixcbiAgICBib29rczogc3RvcmUuZ2V0U3RhdGUoKS5ib29rcyxcbiAgICBjYXJ0czogc3RvcmUuZ2V0U3RhdGUoKS5jYXJ0cyxcbiAgICB0b3RhbDogc3RvcmUuZ2V0U3RhdGUoKS50b3RhbCxcbiAgICBvcmRlcnM6IHN0b3JlLmdldFN0YXRlKCkub3JkZXJzLFxuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==