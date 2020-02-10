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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.tsx");








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_5__["store"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/",
  component: _App__WEBPACK_IMPORTED_MODULE_7__["AppContainer"]
}))), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/ZDljZCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9vcmRlci1zdGF0dXNlcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9wYXltZW50LW1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXNlL3VzZXItcm9sZS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb29rSW5mb0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm9va0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jvb2tUaWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db25maXJtRGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHVzQ2hhbmdlU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50cy9wcm9kdWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0NhcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9PcmRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QYXltZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29rLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2FydHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL21vZGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9vcmRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3RvdGFsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZVdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiXSwibmFtZXMiOlsibG9hZGVyU3RhdGUkIiwiQmVoYXZpb3JTdWJqZWN0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsInVzZXJzIiwibGVuZ3RoIiwidXNlcnNGZXRjaGVkIiwiZW52aXJvbm1lbnQiLCJ1c2Vyc0FwaSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJtYXAiLCJ1c2VyIiwiaSIsImlkIiwibG9naW4iLCJ1dWlkIiwibmFtZSIsImZpcnN0Iiwic3VybmFtZSIsImxhc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicm9sZSIsIlVTRVJfUk9MRSIsImFkbWluIiwiY2xpZW50IiwicGljdHVyZVVybCIsInBpY3R1cmUiLCJsYXJnZSIsInN1YnNjcmliZSIsInNldFN0YXRlIiwiaGlzdG9yeSIsIkhvbWVQYWdlIiwiTG9naW5QYWdlIiwiQ2FydFBhZ2UiLCJQYXltZW50UGFnZSIsIk9yZGVySGlzdG9yeVBhZ2UiLCJVc2Vyc1BhZ2UiLCJSZWFjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInVzZXJDaGFuZ2VkIiwiQXBwQ29udGFpbmVyIiwiY29ubmVjdCIsIk9SREVSX1NUQVRVU0VTIiwiUGF5bWVudE1vZGVsIiwiTG9jYWxTdGF0ZSIsIlNpbXBsZURpYWxvZyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsb3NlIiwiY2hhbmdlQm9va0RldGFpbHMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJvcGVuIiwiYm9vayIsInRpdGxlIiwiYXV0aG9yIiwicXVhbnRpdHkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiYm9va19jb3ZlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlU2F2ZUNoYW5nZXMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJDb21wb25lbnQiLCJCb29rSW5mb0RpYWxvZ0NvbnRhaW5lciIsIlBhcmVudFByb3BzIiwiQm9va0xpc3QiLCJyZW1vdmVCb29rRnJvbUNhcnQiLCJhZGRCb29rUXVhbnRpdHkiLCJjaGFuZ2VUb3RhbENhcnRJdGVtcyIsImNhcnRzIiwicmVkdWNlIiwicCIsImMiLCJhZGRCb29rVG9DYXJ0IiwiZGVkdWN0Qm9va1F1YW50aXR5IiwiYm9va3MiLCJtb2RlIiwidXNlckNhcnQiLCJ1c2VyQm9va3MiLCJpdGVtIiwiZmluZCIsImdldFRvdGFsRm9yUm93IiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwidG9GaXhlZCIsImdldFRvdGFsIiwiTnVtYmVyIiwiaGFuZGxlUmVtb3ZlSXRlbSIsImhhbmRsZUFkZEl0ZW0iLCJ0b3RhbCIsIkJvb2tMaXN0Q29udGFpbmVyIiwiQm9va1RpbGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY3JlYXRlU3R5bGVzIiwiaW1nIiwibWF4V2lkdGgiLCJoZWFkZXIiLCJtYXJnaW4iLCJoYW5kbGVCb29rRGlhbG9nT3BlbiIsInNlbGVjdGVkQm9vayIsIm9uTW9kYWxPcGVuIiwidXNlclJvbGUiLCJjbGFzc2VzIiwiYWRkVG9DYXJ0Iiwib25Cb29rRGVsZXRlIiwiQ29uZmlybURpYWxvZyIsImRpYWxvZ1RpdGxlIiwiZGlhbG9nVGV4dCIsIm9uQ29uZmlybSIsImRhdGEiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJzcGFuIiwibWFyZ2luTGVmdCIsIkhlYWRlciIsInNlc3Npb24iLCJoYW5kbGVHb1RvSGlzdG9yeSIsInB1c2giLCJoYW5kbGVHb1RvVXNlcnMiLCJjb2xvciIsIkhlYWRlckNvbnRhaW5lciIsIlNwaW5uZXIiLCJTdGF0dXNDaGFuZ2VTZWxlY3QiLCJuZXdTdGF0dXMiLCJjaGFuZ2VPcmRlclN0YXR1cyIsIm9yZGVySWQiLCJzdGF0dXMiLCJtaW5XaWR0aCIsImhhbmRsZUNoYW5nZSIsIlN0YXR1c0NoYW5nZVNlbGVjdENvbnRhaW5lciIsIlVzZXJBY3Rpb25zIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiQm9vbGVhbiIsInNlc3Npb25DaGFuZ2UiLCJpc0FkbWluIiwiaGFuZGxlTWVudSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUxvZ291dCIsImdvVG9IaXN0b3J5IiwiaGFuZGxlR29Ub1VzZXJMaXN0IiwiZ29Ub1VzZXJzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiVXNlckFjdGlvbnNDb250YWluZXIiLCJib29rc0FwaSIsImlzUHJvZHVjdGlvbiIsImlzRGV2ZWxvcG1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsInN0b3JlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlcnZpY2VXb3JrZXIiLCJpbml0aWFsU3RvcmVTdGF0ZSIsIm9yZGVycyIsImxvYWRTdGF0ZSIsInNlcmlhbGl6ZWRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnIiLCJzYXZlU3RhdGUiLCJuZXh0IiwidGltZW91dCIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkNhcnQiLCJjbGVhckNhcnQiLCJnb0hvbWUiLCJjbGVhckFsbENhcnRJdGVtcyIsImdvVG9QYXltZW50IiwiSG9tZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJtb2RhbE9wZW4iLCJzZWxlY3RCb29rIiwiZGlhbG9nT3BlbiIsIm1vZGFsQ2xvc2UiLCJkaWFsb2dDbG9zZSIsImRlbGV0ZUJvb2siLCJoYW5kbGVDb25maXJtQ2xvc2UiLCJib29rc0ZldGNoZWQiLCJwcmltYXJ5X2lzYm4xMCIsInB1Ymxpc2hlZF9kYXRlIiwiYm9va19pbWFnZSIsImdldFJhbmRvbVByaWNlIiwibW9kYWwiLCJkaWFsb2ciLCJhY3RpdmVCb29rcyIsImZpbHRlciIsImRlbGV0ZWQiLCJwYWRkaW5nIiwiaGFuZGxlQ29uZmlybU9wZW4iLCJoYW5kbGVNb2RhbE9wZW4iLCJoYW5kbGVBZGRUb0NhcnQiLCJoYW5kbGVNb2RhbENsb3NlIiwiaGFuZGxlQm9va0RlbGV0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiTG9naW4iLCJzZWxlY3RVc2VyIiwic2VsZWN0ZWRVc2VyIiwidXNyIiwiT3JkZXJzIiwiYWxsT3JkZXJzIiwib3JkZXIiLCJpbmNsdWRlcyIsImRhdGUiLCJkaXNwbGF5IiwiZnVsbEJvb2tJbmZvIiwiYmsiLCJQYXltZW50IiwiYWRkT3JkZXIiLCJwYXltZW50IiwiY2FyZCIsInBhaWQiLCJuZXciLCJEYXRlIiwibm93IiwiaXNEaWFsb2dPcGVuIiwiZGVsaXZlcnkiLCJjYXJ0IiwiaGFuZGxlUGF5bWVudENoYW5nZSIsImdvVG9DYXJ0IiwiZ2V0RGlhbG9nVGV4dCIsImhhbmRsZVBheW1lbnQiLCJVc2VycyIsInR5cGUiLCJib29rSWQiLCJ1c2VySWQiLCJhY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJhZGRCb29rIiwiYm9va0luQ2FydEluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiY29tYmluZVJlZHVjZXJzIiwic2VsZWN0ZWRPcmRlciIsIm9yZHIiLCJpc0xvY2FsaG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtYXRjaCIsInJlZ2lzdGVyIiwiY29uZmlnIiwicHJvY2VzcyIsInJlZ2lzdGVyVmFsaWRTVyIsInN3VXJsIiwibmF2aWdhdG9yIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsImNvbnRyb2xsZXIiLCJjb25zb2xlIiwibG9nIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIiLCJoZWFkZXJzIiwiY29udGVudFR5cGUiLCJnZXQiLCJpbmRleE9mIiwicmVhZHkiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIiwicGVyc2lzdGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDblJBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJB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VixDQUF3QjJILEtBQXhCLENBQThCM1IsSUFBOUIsQ0FBbUMsVUFBQTBRLFlBQVksRUFBSTtBQUNqREEsa0JBQVksQ0FBQ2tCLFVBQWI7QUFDRCxLQUZEO0FBR0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUNoSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLGNBQWMsR0FBRzNILCtEQUFTLEVBQWhDO0FBQ08sSUFBTU4sS0FBSyxHQUFHa0kseURBQVcsQ0FBQ0MsdURBQUQsRUFBV0YsY0FBWCxDQUF6QjtBQUVQakksS0FBSyxDQUFDckksU0FBTixDQUFnQixZQUFNO0FBQ3BCa0osaUVBQVMsQ0FBQztBQUNSaEwsU0FBSyxFQUFFbUssS0FBSyxDQUFDb0ksUUFBTixHQUFpQnZTLEtBRGhCO0FBRVJZLFFBQUksRUFBRXVKLEtBQUssQ0FBQ29JLFFBQU4sR0FBaUIzUixJQUZmO0FBR1JrSCxXQUFPLEVBQUVxQyxLQUFLLENBQUNvSSxRQUFOLEdBQWlCekssT0FIbEI7QUFJUjdDLFNBQUssRUFBRWtGLEtBQUssQ0FBQ29JLFFBQU4sR0FBaUJ0TixLQUpoQjtBQUtSTixTQUFLLEVBQUV3RixLQUFLLENBQUNvSSxRQUFOLEdBQWlCNU4sS0FMaEI7QUFNUm9CLFNBQUssRUFBRW9FLEtBQUssQ0FBQ29JLFFBQU4sR0FBaUJ4TSxLQU5oQjtBQU9SeUUsVUFBTSxFQUFFTCxLQUFLLENBQUNvSSxRQUFOLEdBQWlCL0g7QUFQakIsR0FBRCxDQUFUO0FBU0QsQ0FWRCxFIiwiZmlsZSI6ImpzL21haW4uZDUwNjgwZjI1MmNlMDRkYzNlY2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oLWZsZXgge1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaC1mbGV4ID4gZGl2IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weS0zIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktNCB7XFxuICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHggIWltcG9ydGFudDtcXG59XFxuXFxuLnB4LTQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teS0yIHtcXG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcXG59XFxuXFxuLnB0LTMge1xcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnBiLTMge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLm10LS0yIHtcXG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcGlubmVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODA7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLFxcbiAgICBcXFwiVWJ1bnR1XFxcIiwgXFxcIkNhbnRhcmVsbFxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyB1c2VyQ2hhbmdlZCwgdXNlcnNGZXRjaGVkIH0gZnJvbSAnLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi9iYXNlL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi9iYXNlL3VzZXItcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuL3BhZ2VzL0xvZ2luJztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBIZWFkZXJDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9Ib21lJztcbmltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi9wYWdlcy9QYXltZW50JztcbmltcG9ydCB7IE9yZGVySGlzdG9yeVBhZ2UgfSBmcm9tICcuL3BhZ2VzL09yZGVycyc7XG5pbXBvcnQgeyBDYXJ0UGFnZSB9IGZyb20gJy4vcGFnZXMvQ2FydCc7XG5pbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgeyBVc2Vyc1BhZ2UgfSBmcm9tICcuL3BhZ2VzL1VzZXJzJztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL2NvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyU3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHVzZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghdXNlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHVzZXJzRmV0Y2hlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgdXNlcnNBcGkgfSA9IGVudmlyb25tZW50KCk7XG4gICAgICBmZXRjaChgJHt1c2Vyc0FwaX0/Zm9ybWF0PWpzb24mcmVzdWx0cz01Jm5hdD1nYiZpbmM9bmFtZSxsb2dpbixwaWN0dXJlYClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlcnMgPSByZXNwb25zZS5yZXN1bHRzLm1hcCgodXNlcjogYW55LCBpOiBudW1iZXIpID0+ICh7XG4gICAgICAgICAgICBpZDogdXNlci5sb2dpbi51dWlkLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLmZpcnN0LFxuICAgICAgICAgICAgc3VybmFtZTogdXNlci5uYW1lLmxhc3QsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci5sb2dpbi51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLmxvZ2luLnBhc3N3b3JkLFxuICAgICAgICAgICAgcm9sZTogaSAlIDIgPyBVU0VSX1JPTEUuYWRtaW4gOiBVU0VSX1JPTEUuY2xpZW50LFxuICAgICAgICAgICAgcGljdHVyZVVybDogdXNlci5waWN0dXJlLmxhcmdlLFxuICAgICAgICAgIH0gYXMgVXNlck1vZGVsKSk7XG4gICAgICAgICAgdXNlcnNGZXRjaGVkKHVzZXJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRlclN0YXRlJC5zdWJzY3JpYmUoKGlzTG9hZGluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZyB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNMb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyIGhpc3Rvcnk9e2hpc3RvcnkgYXMgSGlzdG9yeX0gLz5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2NhcnQnIGNvbXBvbmVudD17Q2FydFBhZ2V9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9Jy9wYXltZW50JyBjb21wb25lbnQ9e1BheW1lbnRQYWdlfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPScvb3JkZXJzLWhpc3RvcnknIGNvbXBvbmVudD17T3JkZXJIaXN0b3J5UGFnZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL3VzZXJzJyBjb21wb25lbnQ9e1VzZXJzUGFnZX0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyB1c2Vyc0ZldGNoZWQsIHVzZXJDaGFuZ2VkIH07XG5leHBvcnQgY29uc3QgQXBwQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcbiIsImV4cG9ydCBlbnVtIE9SREVSX1NUQVRVU0VTIHtcbiAgICBuZXcgPSAnbmV3JyxcbiAgICBwYWlkID0gJ3BhaWQnLFxuICAgIHNlbnQgPSAnc2VudCcsXG4gICAgY2FuY2VsbGVkID0gJ2NhbmNlbGxlZCdcbn1cbiIsImV4cG9ydCBlbnVtIFBheW1lbnRNb2RlbCB7XG4gICAgZGVsaXZlcnkgPSAnZGVsaXZlcnknLFxuICAgIGNhcmQgPSAnY2FyZCdcbn1cbiIsImV4cG9ydCBlbnVtIFVTRVJfUk9MRSB7XG4gICAgYWRtaW4gPSAnQURNSU4nLFxuICAgIGNsaWVudCA9ICdDTElFTlQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLCBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIEdyaWQsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IGNoYW5nZUJvb2tEZXRhaWxzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb3BlbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgTG9jYWxTdGF0ZSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgYXV0aG9yPzogc3RyaW5nO1xuICBxdWFudGl0eT86IG51bWJlcjtcbiAgcHJpY2U/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuY2xhc3MgU2ltcGxlRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBMb2NhbFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gbmV3IExvY2FsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzOiBhbnksIHByZXZTdGF0ZTogYW55KSB7XG4gICAgaWYgKG5leHRQcm9wcy5ib29rICYmIG5leHRQcm9wcy5ib29rLmlkICE9PSBwcmV2U3RhdGUuaWQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGl0bGUsIGlkLCBhdXRob3IsIHF1YW50aXR5LCBwcmljZSwgZGVzY3JpcHRpb24sXG4gICAgICB9ID0gbmV4dFByb3BzLmJvb2sgYXMgQm9va01vZGVsO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIGlkLCBhdXRob3IsIHF1YW50aXR5LCBwcmljZSwgZGVzY3JpcHRpb24sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyB9PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSBhcyBQaWNrPExvY2FsU3RhdGUsIGtleW9mIExvY2FsU3RhdGU+KTtcbiAgfTtcblxuICBoYW5kbGVTYXZlQ2hhbmdlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UsIGNoYW5nZUJvb2tEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNoYW5nZUJvb2tEZXRhaWxzKHRoaXMuc3RhdGUgYXMgQm9va01vZGVsKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdCb29rIGRldGFpbHMgaGF2ZSBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZyB8IG51bWJlciB8IHt9IHwgUmVhY3QuUmVhY3ROb2RlQXJyYXkgfCBSZWFjdC5SZWFjdFBvcnRhbCB8XG4gICAgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBvcGVuLFxuICAgICAgYm9vayxcbiAgICAgIHVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIGF1dGhvcixcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcHJpY2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nIG9uQ2xvc2U9e29uQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT0nc2ltcGxlLWRpYWxvZy10aXRsZScgb3Blbj17b3Blbn0gZnVsbFdpZHRoIG1heFdpZHRoPSdtZCc+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gZGlyZWN0aW9uPSdyb3cnIHdyYXA9J25vd3JhcCcgY2xhc3NOYW1lPSdweS0zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtib29rLmJvb2tfY292ZXJ9IGFsdD17Ym9vay50aXRsZX0gLz5cbiAgICAgICAgICAgIHt1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5jbGllbnQgJiYgKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBjbGFzc05hbWU9J3B4LTQnPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz57Ym9vay50aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPntib29rLmF1dGhvcn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPntib29rLmRlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5hZG1pblxuICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIGRpcmVjdGlvbj0nY29sdW1uJyBjbGFzc05hbWU9J3B4LTQnPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Jvb2sgdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCb29rIGF1dGhvcidcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXV0aG9yJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQXZhaWxhYmxlIHBpZWNlcydcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdxdWFudGl0eSdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktMidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHJpY2UnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteS0yJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J215LTInXG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVDaGFuZ2VzfT5TYXZlIGNoYW5nZXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8L0RpYWxvZz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgYm9vazogc3RhdGUuYm9vayxcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGNoYW5nZUJvb2tEZXRhaWxzIH07XG5cbmV4cG9ydCBjb25zdCBCb29rSW5mb0RpYWxvZ0NvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpbXBsZURpYWxvZyk7XG4iLCJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEljb25CdXR0b24sXG4gIExpc3RJdGVtQXZhdGFyLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge1xuICBhZGRCb29rUXVhbnRpdHksXG4gIGFkZEJvb2tUb0NhcnQsXG4gIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLFxuICBkZWR1Y3RCb29rUXVhbnRpdHksXG4gIHJlbW92ZUJvb2tGcm9tQ2FydCxcbn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmNsYXNzIFBhcmVudFByb3BzIHtcbiAgbW9kZSE6IHN0cmluZztcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgaGFuZGxlUmVtb3ZlSXRlbSA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZW1vdmVCb29rRnJvbUNhcnQsIGFkZEJvb2tRdWFudGl0eSwgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIHVzZXIsIGNhcnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbW92ZUJvb2tGcm9tQ2FydChib29rLCB1c2VyLmlkKTtcbiAgICBhZGRCb29rUXVhbnRpdHkoYm9vay5pZCk7XG4gICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoY2FydHNbdXNlci5pZF1cbiAgICAgIC5yZWR1Y2UoKHA6IG51bWJlciwgYzogQ2FydEl0ZW1Nb2RlbCkgPT4gcCArIGMucXVhbnRpdHksIDApKTtcbiAgfTtcblxuICBoYW5kbGVBZGRJdGVtKGJvb2s6IEJvb2tNb2RlbCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZEJvb2tUb0NhcnQsIGRlZHVjdEJvb2tRdWFudGl0eSwgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIHVzZXIsIGNhcnRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGFkZEJvb2tUb0NhcnQoYm9vaywgdXNlci5pZCk7XG4gICAgZGVkdWN0Qm9va1F1YW50aXR5KGJvb2suaWQpO1xuICAgIGNoYW5nZVRvdGFsQ2FydEl0ZW1zKGNhcnRzW3VzZXIuaWRdXG4gICAgICAucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHAgKyBjLnF1YW50aXR5LCAwKSk7XG4gIH1cblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyIHwge30gfCBSZWFjdC5SZWFjdE5vZGVBcnJheSB8IFJlYWN0LlJlYWN0UG9ydGFsIHxcbiAgICBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcixcbiAgICAgIGNhcnRzLFxuICAgICAgYm9va3MsXG4gICAgICBtb2RlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHVzZXJDYXJ0ID0gdXNlci5pZCBpbiBjYXJ0cyA/IGNhcnRzW3VzZXIuaWRdIDogbnVsbDtcbiAgICBjb25zdCB1c2VyQm9va3MgPSB1c2VyQ2FydCA/IHVzZXJDYXJ0XG4gICAgICAubWFwKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBib29rcy5maW5kKChib29rOiBCb29rTW9kZWwpID0+IGJvb2suaWQgPT09IGl0ZW0uaWQpKSA6IFtdO1xuICAgIGNvbnN0IGdldFRvdGFsRm9yUm93ID0gKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgaWYgKHVzZXJDYXJ0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB1c2VyQ2FydC5maW5kKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBpdGVtLmlkID09PSBib29rLmlkKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gKGl0ZW0ucXVhbnRpdHkgKiBwYXJzZUZsb2F0KChib29rLnByaWNlKS50b1N0cmluZygpKSkudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzAuMDAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb3RhbCA9ICgpID0+IHtcbiAgICAgIGlmICh1c2VyQ2FydCkge1xuICAgICAgICByZXR1cm4gdXNlckNhcnQucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBwICs9IChOdW1iZXIoYy5wcmljZSkgKiBjLnF1YW50aXR5KTtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwgMCkudG9GaXhlZCgyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q292ZXI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+VGl0bGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+QXV0aG9yPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPlByaWNlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkFtb3VudDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub3RhbDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHt1c2VyQm9va3MubWFwKChib29rOiBCb29rTW9kZWwpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2Jvb2suaWR9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtib29rLnRpdGxlfSBzcmM9e2Jvb2suYm9va19jb3Zlcn0gLz5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Ym9vay50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57Ym9vay5hdXRob3J9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2BcXHUyMEFDJHtib29rLnByaWNlfWB9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIHttb2RlID09PSAnZWRpdCdcbiAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmVJdGVtKGJvb2spfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdhZGQgdG8gc2hvcHBpbmcgY2FydCdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIHt1c2VyQ2FydC5maW5kKChpdGVtOiBDYXJ0SXRlbU1vZGVsKSA9PiBpdGVtLmlkID09PSBib29rLmlkKS5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZEl0ZW0oYm9vayl9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J2FkZCB0byBzaG9wcGluZyBjYXJ0J1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7bW9kZSA9PT0gJ3ByZXZpZXcnXG4gICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICB7dXNlckNhcnQuZmluZCgoaXRlbTogQ2FydEl0ZW1Nb2RlbCkgPT4gaXRlbS5pZCA9PT0gYm9vay5pZCkucXVhbnRpdHl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntgXFx1MjBBQyR7Z2V0VG90YWxGb3JSb3coYm9vayl9YH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fSAvPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPjxzdHJvbmc+VG90YWw6PC9zdHJvbmc+PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPntnZXRUb3RhbCgpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgeyF1c2VyQm9va3MubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs2fT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgYWxpZ249J2NlbnRlcic+WW91ciBjYXJ0IGlzIGVtcHR5LjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgdG90YWw6IHN0YXRlLnRvdGFsLFxuICBjYXJ0czogc3RhdGUuY2FydHMsXG4gIGJvb2tzOiBzdGF0ZS5ib29rcyxcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRCb29rUXVhbnRpdHksXG4gIGRlZHVjdEJvb2tRdWFudGl0eSxcbiAgY2hhbmdlVG90YWxDYXJ0SXRlbXMsXG4gIHJlbW92ZUJvb2tGcm9tQ2FydCxcbiAgYWRkQm9va1RvQ2FydCxcbn07XG5cbmV4cG9ydCBjb25zdCBCb29rTGlzdENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvb2tMaXN0KTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZFNob3BwaW5nQ2FydCc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi9iYXNlL2Jvb2subW9kZWwnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBvbk1vZGFsT3BlbjogRnVuY3Rpb247XG4gIG9uQm9va0RlbGV0ZTogRnVuY3Rpb247XG4gIGFkZFRvQ2FydDogRnVuY3Rpb247XG4gIHNlbGVjdGVkQm9vazogQm9va01vZGVsO1xuICB1c2VyUm9sZTogVVNFUl9ST0xFO1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tUaWxlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IGNyZWF0ZVN0eWxlcyh7XG4gICAgaW1nOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBtYXJnaW46ICcycHggMCcsXG4gICAgfSxcbiAgfSkpO1xuXG4gIGNvbnN0IGhhbmRsZUJvb2tEaWFsb2dPcGVuID0gKHNlbGVjdGVkQm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBvbk1vZGFsT3BlbiB9ID0gcHJvcHM7XG4gICAgb25Nb2RhbE9wZW4oc2VsZWN0ZWRCb29rKTtcbiAgfTtcblxuICBjb25zdCB7IHNlbGVjdGVkQm9vaywgdXNlclJvbGUgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17NH0gc209ezN9IG1kPXsyfSBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBkaXJlY3Rpb249J2NvbHVtbic+XG4gICAgICA8R3JpZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCb29rRGlhbG9nT3BlbihzZWxlY3RlZEJvb2spfSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz5cbiAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkQm9vay5ib29rX2NvdmVyfSBhbHQ9e3NlbGVjdGVkQm9vay50aXRsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gLz5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PntzZWxlY3RlZEJvb2sudGl0bGV9PC9oND5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PntzZWxlY3RlZEJvb2suYXV0aG9yfTwvaDU+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBkaXJlY3Rpb249J2NvbHVtbic+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAge3VzZXJSb2xlID09PSBVU0VSX1JPTEUuY2xpZW50ICYmIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57YFxcdTIwQUMke3NlbGVjdGVkQm9vay5wcmljZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdhZGQgdG8gc2hvcHBpbmcgY2FydCdcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmFkZFRvQ2FydChzZWxlY3RlZEJvb2spfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkQm9vay5xdWFudGl0eSA8IDF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFkZFNob3BwaW5nQ2FydEljb24gLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPSdtdC0tMic+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQm9vay5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dXNlclJvbGUgPT09IFVTRVJfUk9MRS5hZG1pbiAmJiAoXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ncmVtb3ZlIGJvb2snXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25Cb29rRGVsZXRlKHNlbGVjdGVkQm9vayl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nZWRpdCBib29rIGluZm8nXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQm9va0RpYWxvZ09wZW4oc2VsZWN0ZWRCb29rKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sIERpYWxvZywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIEdyaWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQsXG4gIG9wZW46IGJvb2xlYW4sXG4gIGRpYWxvZ1RpdGxlOiBzdHJpbmcsXG4gIGRpYWxvZ1RleHQ6IHN0cmluZyxcbiAgb25Db25maXJtOiAoYm9vazogQm9va01vZGVsKSA9PiB2b2lkLFxuICBkYXRhOiBhbnk7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maXJtRGlhbG9nKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7XG4gICAgb25DbG9zZSwgb3BlbiwgZGlhbG9nVGl0bGUsIGRpYWxvZ1RleHQsIG9uQ29uZmlybSwgZGF0YSxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvbkNsb3NlPXtvbkNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9J3NpbXBsZS1kaWFsb2ctdGl0bGUnIG9wZW49e29wZW59IG1heFdpZHRoPSd4cyc+XG4gICAgICA8RGlhbG9nVGl0bGU+e2RpYWxvZ1RpdGxlfTwvRGlhbG9nVGl0bGU+XG4gICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBjbGFzc05hbWU9J3B5LTQnPntkaWFsb2dUZXh0fTwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBjbGFzc05hbWU9J3B5LTMnPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdzZWNvbmRhcnknIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5JyBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0oZGF0YSl9PkNvbmZpcm08L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1xuICBBdmF0YXIsIEJhZGdlLCBjcmVhdGVTdHlsZXMsIEdyaWQsIEljb25CdXR0b24sIFRoZW1lLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IFVzZXJBY3Rpb25zQ29udGFpbmVyIH0gZnJvbSAnLi9Vc2VyQWN0aW9ucyc7XG5pbXBvcnQgeyBVU0VSX1JPTEUgfSBmcm9tICcuLi9iYXNlL3VzZXItcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi9iYXNlL3N0YXRlLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgaGlzdG9yeTogSGlzdG9yeTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiBjcmVhdGVTdHlsZXMoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIG1lbnVCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgc3Bhbjoge1xuICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzOiBQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHtcbiAgICB1c2VyLCBzZXNzaW9uLCB0b3RhbCwgaGlzdG9yeSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUdvVG9IaXN0b3J5ID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnL29yZGVycy1oaXN0b3J5Jyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR29Ub1VzZXJzID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnL3VzZXJzJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYyc+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IGFyaWEtbGFiZWw9J2FkZCB0byBzaG9wcGluZyBjYXJ0Jz5cbiAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgQXdlc29tZSBCb29rc3RvcmVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3Nlc3Npb24gJiYgdXNlclxuICAgICAgICAgICYmIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXs3fSBkaXJlY3Rpb249J3JvdycgYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezZ9IGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXIudXNlcm5hbWV9IHNyYz17dXNlci5waWN0dXJlVXJsfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFufT57YCR7dXNlci5uYW1lfSAke3VzZXIuc3VybmFtZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17Nn0ganVzdGlmeT0nZmxleC1lbmQnPlxuICAgICAgICAgICAgICAgIHt1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5jbGllbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9jYXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gYXJpYS1sYWJlbD0nYWRkIHRvIHNob3BwaW5nIGNhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e3RvdGFsfSBjb2xvcj0nc2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFVzZXJBY3Rpb25zQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBnb1RvSGlzdG9yeT17KCkgPT4gaGFuZGxlR29Ub0hpc3RvcnkoKX1cbiAgICAgICAgICAgICAgICAgIGdvVG9Vc2Vycz17KCkgPT4gaGFuZGxlR29Ub1VzZXJzKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgeyFzZXNzaW9uICYmIDxSZWRpcmVjdCB0bz0nL2xvZ2luJyAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZU1vZGVsKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxuICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICB0b3RhbDogc3RhdGUudG90YWwsXG59KTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAncmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvY3NzL3JlYWN0LXNwaW5uZXItbG9hZGVyLmNzcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3Bpbm5lci1jb250YWluZXInPlxuICAgICAgPExvYWRlclxuICAgICAgICB0eXBlPSdUYWlsU3BpbidcbiAgICAgICAgY29sb3I9JyMwMEJGRkYnXG4gICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IGNoYW5nZU9yZGVyU3RhdHVzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIG9yZGVySWQ6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5jbGFzcyBTdGF0dXNDaGFuZ2VTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgIG9yZGVySWQ6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzOiBhbnksIHByZXZTdGF0ZTogYW55KSB7XG4gICAgaWYgKCdvcmRlcklkJyBpbiBuZXh0UHJvcHMgJiYgbmV4dFByb3BzLm9yZGVySWQgIT09IHByZXZTdGF0ZS5vcmRlcklkKSB7XG4gICAgICByZXR1cm4geyBzdGF0dXM6IG5leHRQcm9wcy5zdGF0dXMsIG9yZGVySWQ6IG5leHRQcm9wcy5vcmRlcklkIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiBhbnkgfT4pID0+IHtcbiAgICBjb25zdCBuZXdTdGF0dXMgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBjaGFuZ2VPcmRlclN0YXR1cywgb3JkZXJJZCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBuZXdTdGF0dXMgfSk7XG4gICAgY2hhbmdlT3JkZXJTdGF0dXMob3JkZXJJZCwgbmV3U3RhdHVzKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdPcmRlciBzdGF0dXMgY2hhbmdlZCBzdWNjZXNzZnVsbHknKTtcbiAgfTtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyIHwge30gfCBSZWFjdC5SZWFjdE5vZGVBcnJheSB8IFJlYWN0LlJlYWN0UG9ydGFsIHxcbiAgICBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PSdvdXRsaW5lZCcgc3R5bGU9e3sgbWluV2lkdGg6IDEyMCB9fT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIGxhYmVsSWQ9J2xhYmVsJ1xuICAgICAgICAgIGlkPSdzZWxlY3QxJ1xuICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSduZXcnIGRpc2FibGVkPk5ldzwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdwYWlkJyBkaXNhYmxlZD5QYWlkPC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J3NlbnQnPlNlbnQ8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nY2FuY2VsbGVkJz5DYW5jZWxsZWQ8L01lbnVJdGVtPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGNoYW5nZU9yZGVyU3RhdHVzIH07XG5cbmV4cG9ydCBjb25zdCBTdGF0dXNDaGFuZ2VTZWxlY3RDb250YWluZXIgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3RhdHVzQ2hhbmdlU2VsZWN0KTtcbiIsImltcG9ydCB7IEljb25CdXR0b24sIE1lbnUsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3VudENpcmNsZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgc2Vzc2lvbkNoYW5nZSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgVVNFUl9ST0xFIH0gZnJvbSAnLi4vYmFzZS91c2VyLXJvbGUubW9kZWwnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG50eXBlIFBhcmVudFByb3BzID0ge1xuICBnb1RvSGlzdG9yeTogKCkgPT4gdm9pZDtcbiAgZ29Ub1VzZXJzOiAoKSA9PiB2b2lkO1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZnVuY3Rpb24gVXNlckFjdGlvbnMocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xuICBjb25zdCB7IHNlc3Npb25DaGFuZ2UsIHVzZXIgfSA9IHByb3BzO1xuICBjb25zdCBpc0FkbWluID0gdXNlci5yb2xlID09PSBVU0VSX1JPTEUuYWRtaW47XG5cbiAgY29uc3QgaGFuZGxlTWVudSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgICBzZXNzaW9uQ2hhbmdlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVHb1RvSGlzdG9yeSA9ICgpID0+IHtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICAgIHByb3BzLmdvVG9IaXN0b3J5KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR29Ub1VzZXJMaXN0ID0gKCkgPT4ge1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgcHJvcHMuZ29Ub1VzZXJzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD0nYWNjb3VudCBvZiBjdXJyZW50IHVzZXInXG4gICAgICAgIGFyaWEtY29udHJvbHM9J21lbnUtYXBwYmFyJ1xuICAgICAgICBhcmlhLWhhc3BvcHVwPSd0cnVlJ1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxuICAgICAgICBjb2xvcj0naW5oZXJpdCdcbiAgICAgID5cbiAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxNZW51XG4gICAgICAgIGlkPSdtZW51LWFwcGJhcidcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgfX1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgIH19XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlR29Ub0hpc3Rvcnl9Pntpc0FkbWluID8gJ09yZGVycyBtYW5hZ2VtZW50JyA6ICdPcmRlciBoaXN0b3J5J308L01lbnVJdGVtPlxuICAgICAgICB7aXNBZG1pbiAmJiA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlR29Ub1VzZXJMaXN0fT5Vc2VycyBtYW5hZ2VtZW50PC9NZW51SXRlbT59XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBvdXQ8L01lbnVJdGVtPlxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gIHVzZXI6IHN0YXRlLnVzZXIsXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgc2Vzc2lvbkNoYW5nZSB9O1xuXG5leHBvcnQgY29uc3QgVXNlckFjdGlvbnNDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyQWN0aW9ucyk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdXNlcnNBcGk6ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycsXG4gICAgYm9va3NBcGk6ICdodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvY3VycmVudC9tYXNzLW1hcmtldC1wYXBlcmJhY2suanNvbj9hcGkta2V5PTRsVkVCU0NkRk5IRXF3eFhNdXA1OEpkeHJDU2dKMURLJyxcbiAgICBpc1Byb2R1Y3Rpb246IHRydWUsXG4gICAgaXNEZXZlbG9wbWVudDogZmFsc2UsXG4gIH07XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJy4vc2VydmljZVdvcmtlcic7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICcuL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlcj5cbiAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcENvbnRhaW5lcn0gLz5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4pO1xuXG5zZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcbiIsImltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBsb2FkZXJTdGF0ZSQgfSBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IGluaXRpYWxTdG9yZVN0YXRlID0ge1xuICB1c2VyczogW10sXG4gIHVzZXI6ICcnLFxuICBzZXNzaW9uOiBmYWxzZSxcbiAgY2FydHM6IHt9LFxuICB0b3RhbDogMCxcbiAgb3JkZXJzOiBbXSxcbiAgYm9va3M6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUnKTtcbiAgICBpZiAoc2VyaWFsaXplZFN0YXRlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0b3JlU3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRTdGF0ZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBpbml0aWFsU3RvcmVTdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVTdGF0ZSA9IGFzeW5jIChzdGF0ZTogU3RhdGVNb2RlbCkgPT4ge1xuICB0cnkge1xuICAgIGxvYWRlclN0YXRlJC5uZXh0KHRydWUpO1xuICAgIGF3YWl0IHRpbWVvdXQoMTAwMCk7XG4gICAgbG9hZGVyU3RhdGUkLm5leHQoZmFsc2UpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCBzZXJpYWxpemVkU3RhdGUpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBpZ25vcmUgd3JpdGUgZXJyb3JzXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXM6IG51bWJlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sIENvbnRhaW5lciwgR3JpZCwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgQm9va0xpc3RDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tMaXN0JztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIGNsZWFyQ2FydCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgU3RhdGVQcm9wcywgRGlzcGF0Y2hQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG5pbnRlcmZhY2UgUGFyZW50UHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHMgJiBQYXJlbnRQcm9wcztcblxuZnVuY3Rpb24gQ2FydChwcm9wczogUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNhcnRzLCB1c2VyLCBjbGVhckNhcnQsIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBoaXN0b3J5LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHVzZXJDYXJ0ID0gY2FydHNbdXNlci5pZF07XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQWxsQ2FydEl0ZW1zID0gKCkgPT4ge1xuICAgIGNsZWFyQ2FydCh1c2VyLmlkKTtcbiAgICBjaGFuZ2VUb3RhbENhcnRJdGVtcygwKTtcbiAgICBnb0hvbWUoKTtcbiAgfTtcblxuICBjb25zdCBnb1RvUGF5bWVudCA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy9wYXltZW50Jyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIHhzPXsxMn0gY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcic+SXRlbXMgaW4geW91ciBjYXJ0OjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEJvb2tMaXN0Q29udGFpbmVyIG1vZGU9J2VkaXQnIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGNsYXNzTmFtZT0ncHktNCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9e2dvSG9tZX0+QmFjazwvQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsZWFyQWxsQ2FydEl0ZW1zKCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17IXVzZXJDYXJ0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICBvbkNsaWNrPXtnb1RvUGF5bWVudH1cbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJDYXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgUHJvY2VlZCB0byBwYXltZW50XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIGNhcnRzOiBzdGF0ZS5jYXJ0cyxcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQgfTtcblxuZXhwb3J0IGNvbnN0IENhcnRQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge1xuICBhZGRCb29rVG9DYXJ0LFxuICBib29rc0ZldGNoZWQsXG4gIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLFxuICBkZWR1Y3RCb29rUXVhbnRpdHksXG4gIGRlbGV0ZUJvb2ssIGRpYWxvZ0Nsb3NlLCBkaWFsb2dPcGVuLFxuICBtb2RhbENsb3NlLFxuICBtb2RhbE9wZW4sXG4gIHNlbGVjdEJvb2ssXG59IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IENhcnRJdGVtTW9kZWwgfSBmcm9tICcuLi9iYXNlL2NhcnQtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBCb29rSW5mb0RpYWxvZ0NvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQm9va0luZm9EaWFsb2cnO1xuaW1wb3J0IHsgQm9va1RpbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tUaWxlJztcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZyc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgW10+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBib29rcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWJvb2tzLmxlbmd0aCkge1xuICAgICAgY29uc3QgeyBib29rc0ZldGNoZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGJvb2tzQXBpIH0gPSBlbnZpcm9ubWVudCgpO1xuICAgICAgZmV0Y2goYm9va3NBcGkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJvb2tzID0gcmVzcG9uc2UucmVzdWx0cy5ib29rcy5tYXAoKGJvb2s6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBib29rLnByaW1hcnlfaXNibjEwLFxuICAgICAgICAgICAgdGl0bGU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLFxuICAgICAgICAgICAgcHVibGlzaGVkX2RhdGU6ICduL2EnLFxuICAgICAgICAgICAgYm9va19jb3ZlcjogYm9vay5ib29rX2ltYWdlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEwLFxuICAgICAgICAgICAgcHJpY2U6IHRoaXMuZ2V0UmFuZG9tUHJpY2UoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBib29rLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIH0gYXMgQm9va01vZGVsKSk7XG4gICAgICAgICAgYm9va3NGZXRjaGVkKGJvb2tzKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlVG90YWxDYXJ0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRSYW5kb21QcmljZSA9ICgpID0+IHtcbiAgICBjb25zdCBtaW4gPSA1O1xuICAgIGNvbnN0IG1heCA9IDIwO1xuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKS50b0ZpeGVkKDIpO1xuICB9O1xuXG4gIGhhbmRsZUFkZFRvQ2FydCA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7IGRlZHVjdEJvb2tRdWFudGl0eSwgYWRkQm9va1RvQ2FydCwgdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBkZWR1Y3RCb29rUXVhbnRpdHkoYm9vay5pZCk7XG4gICAgYWRkQm9va1RvQ2FydChib29rLCB1c2VyLmlkKTtcbiAgICB0aGlzLmNoYW5nZVRvdGFsQ2FydEl0ZW1zKCk7XG4gIH07XG5cbiAgaGFuZGxlTW9kYWxPcGVuID0gKHNlbGVjdGVkQm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBtb2RhbE9wZW4sIHNlbGVjdEJvb2sgfSA9IHRoaXMucHJvcHM7XG4gICAgc2VsZWN0Qm9vayhzZWxlY3RlZEJvb2spO1xuICAgIG1vZGFsT3BlbigpO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm1PcGVuID0gKHNlbGVjdGVkQm9vazogQm9va01vZGVsKSA9PiB7XG4gICAgY29uc3QgeyBkaWFsb2dPcGVuLCBzZWxlY3RCb29rIH0gPSB0aGlzLnByb3BzO1xuICAgIHNlbGVjdEJvb2soc2VsZWN0ZWRCb29rKTtcbiAgICBkaWFsb2dPcGVuKCk7XG4gIH07XG5cbiAgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1vZGFsQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbW9kYWxDbG9zZSgpO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm1DbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRpYWxvZ0Nsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIGRpYWxvZ0Nsb3NlKCk7XG4gIH07XG5cbiAgaGFuZGxlQm9va0RlbGV0ZSA9IChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICBjb25zdCB7IGRlbGV0ZUJvb2sgfSA9IHRoaXMucHJvcHM7XG4gICAgZGVsZXRlQm9vayhib29rLmlkKTtcbiAgICB0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZSgpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoJ0Jvb2sgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgfTtcblxuICBjaGFuZ2VUb3RhbENhcnRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjYXJ0cywgdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodXNlci5pZCBpbiBjYXJ0cykge1xuICAgICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoY2FydHNbdXNlci5pZF1cbiAgICAgICAgLnJlZHVjZSgocDogbnVtYmVyLCBjOiBDYXJ0SXRlbU1vZGVsKSA9PiBwICsgYy5xdWFudGl0eSwgMCkpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nIHwgbnVtYmVyIHwge30gfCBSZWFjdC5SZWFjdE5vZGVBcnJheSB8IFJlYWN0LlJlYWN0UG9ydGFsIHxcbiAgICBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qge1xuICAgICAgYm9va3MsIG1vZGFsLCB1c2VyLCBkaWFsb2csIGJvb2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlQm9va3MgPSBib29rcy5maWx0ZXIoKGJvb2s6IEJvb2tNb2RlbCkgPT4gIWJvb2suZGVsZXRlZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5PSdjZW50ZXInPlxuICAgICAgICAgIHthY3RpdmVCb29rcy5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4gKFxuICAgICAgICAgICAgPEJvb2tUaWxlXG4gICAgICAgICAgICAgIHNlbGVjdGVkQm9vaz17Ym9va31cbiAgICAgICAgICAgICAga2V5PXtib29rLmlkfVxuICAgICAgICAgICAgICB1c2VyUm9sZT17dXNlci5yb2xlfVxuICAgICAgICAgICAgICBvbkJvb2tEZWxldGU9e3RoaXMuaGFuZGxlQ29uZmlybU9wZW59XG4gICAgICAgICAgICAgIG9uTW9kYWxPcGVuPXt0aGlzLmhhbmRsZU1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgYWRkVG9DYXJ0PXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEJvb2tJbmZvRGlhbG9nQ29udGFpbmVyXG4gICAgICAgICAgb3Blbj17bW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVNb2RhbENsb3NlfVxuICAgICAgICAvPlxuICAgICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICAgIG9wZW49e2RpYWxvZ31cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZX1cbiAgICAgICAgICBkaWFsb2dUaXRsZT0nUmVtb3ZlIGJvb2snXG4gICAgICAgICAgZGF0YT17Ym9va31cbiAgICAgICAgICBkaWFsb2dUZXh0PXtgRG8geW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZSAke2Jvb2sudGl0bGV9P2B9XG4gICAgICAgICAgb25Db25maXJtPXt0aGlzLmhhbmRsZUJvb2tEZWxldGV9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgYm9va3M6IHN0YXRlLmJvb2tzLFxuICBib29rOiBzdGF0ZS5ib29rLFxuICBjYXJ0czogc3RhdGUuY2FydHMsXG4gIG1vZGFsOiBzdGF0ZS5tb2RhbCxcbiAgZGlhbG9nOiBzdGF0ZS5kaWFsb2csXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBib29rc0ZldGNoZWQsXG4gIGRlZHVjdEJvb2tRdWFudGl0eSxcbiAgYWRkQm9va1RvQ2FydCxcbiAgY2hhbmdlVG90YWxDYXJ0SXRlbXMsXG4gIG1vZGFsT3BlbixcbiAgbW9kYWxDbG9zZSxcbiAgc2VsZWN0Qm9vayxcbiAgZGVsZXRlQm9vayxcbiAgZGlhbG9nT3BlbixcbiAgZGlhbG9nQ2xvc2UsXG59O1xuXG5leHBvcnQgY29uc3QgSG9tZVBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBBdmF0YXIsIENvbnRhaW5lciwgY3JlYXRlU3R5bGVzLCBHcmlkLCBUaGVtZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9iYXNlL3VzZXIubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBzZXNzaW9uQ2hhbmdlLCB1c2VyQ2hhbmdlZCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuaW1wb3J0IHsgRGlzcGF0Y2hQcm9wcywgU3RhdGVQcm9wcyB9IGZyb20gJy4uL2Jhc2UvcHJvcHMubW9kZWwnO1xuXG50eXBlIFByb3BzID0gU3RhdGVQcm9wcyAmIERpc3BhdGNoUHJvcHM7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gY3JlYXRlU3R5bGVzKHtcbiAgbGFyZ2U6IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gTG9naW4ocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBzZXNzaW9uLCB1c2VyLCB1c2VycyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgc2VsZWN0VXNlciA9IChzZWxlY3RlZFVzZXI6IFVzZXJNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlckNoYW5nZWQsIHNlc3Npb25DaGFuZ2UgfSA9IHByb3BzO1xuICAgIHVzZXJDaGFuZ2VkKHNlbGVjdGVkVXNlcik7XG4gICAgc2Vzc2lvbkNoYW5nZSh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdoLWZsZXgnPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ncGItMydcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3BiLTMnPkxvZyBpbiBhcyBvbmUgb2YgdGhlIGZvbGxvd2luZyB1c2Vyczo8L2gyPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xuICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgICAgICAgPlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzcjogVXNlck1vZGVsKSA9PiAoXG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAgICAgIHhzPXsyfVxuICAgICAgICAgICAgICBrZXk9e3Vzci5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0VXNlcih1c3IpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgYWx0PXt1c3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgc3JjPXt1c3IucGljdHVyZVVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFyZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoND57YCR7dXNyLm5hbWV9ICR7dXNyLnN1cm5hbWV9YH08L2g0PlxuICAgICAgICAgICAgICA8c3Bhbj57dXNyLnJvbGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtzZXNzaW9uICYmIHVzZXIgJiYgPFJlZGlyZWN0IHRvPScvJyAvPn1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IHVzZXJDaGFuZ2VkLCBzZXNzaW9uQ2hhbmdlIH07XG5cbmV4cG9ydCBjb25zdCBMb2dpblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgR3JpZCxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUb29sdGlwLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgT3JkZXJNb2RlbCB9IGZyb20gJy4uL2Jhc2Uvb3JkZXIubW9kZWwnO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vYmFzZS9ib29rLm1vZGVsJztcbmltcG9ydCB7IFVTRVJfUk9MRSB9IGZyb20gJy4uL2Jhc2UvdXNlci1yb2xlLm1vZGVsJztcbmltcG9ydCB7IFN0YXR1c0NoYW5nZVNlbGVjdENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3RhdHVzQ2hhbmdlU2VsZWN0JztcbmltcG9ydCB7IERpc3BhdGNoUHJvcHMsIFN0YXRlUHJvcHMgfSBmcm9tICcuLi9iYXNlL3Byb3BzLm1vZGVsJztcblxuaW50ZXJmYWNlIFBhcmVudFByb3BzIHtcbiAgaGlzdG9yeTogSGlzdG9yeTtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBPcmRlcnMocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBvcmRlcnMsIHVzZXIsIGJvb2tzLCBoaXN0b3J5LFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGlzQWRtaW4gPSB1c2VyLnJvbGUgPT09IFVTRVJfUk9MRS5hZG1pbjtcbiAgY29uc3QgYWxsT3JkZXJzID0gaXNBZG1pbiA/IG9yZGVycyA6IG9yZGVyc1xuICAgIC5maWx0ZXIoKG9yZGVyOiBPcmRlck1vZGVsKSA9PiBvcmRlci5pZC5pbmNsdWRlcygodXNlci5pZCkudG9TdHJpbmcoKSkpO1xuXG4gIGNvbnN0IGdvSG9tZSA9ICgpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goJy8nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PSdjZW50ZXInIHhzPXsxMn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9J2g1J1xuICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktNCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNBZG1pbiA/ICdDdXN0b21lciBvcmRlcnM6JyA6ICdZb3VyIHByZXZpb3VzIG9yZGVycyB3aXRoIHVzOid9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGF0ZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICB7aXNBZG1pbiAmJiA8VGFibGVDZWxsPlVzZXI8L1RhYmxlQ2VsbD59XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3RhdHVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+VG90YWwgUHJpY2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Cb29rczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAge2FsbE9yZGVycy5tYXAoKG9yZGVyOiBPcmRlck1vZGVsKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e29yZGVyLmlkfT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxNb21lbnQgZm9ybWF0PSdMTEwnPntvcmRlci5kYXRlfTwvTW9tZW50PjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIHtpc0FkbWluICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci51c2VyLnN1cm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc0FkbWluICYmIChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0dXNDaGFuZ2VTZWxlY3RDb250YWluZXIgc3RhdHVzPXtvcmRlci5zdGF0dXN9IG9yZGVySWQ9e29yZGVyLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7IWlzQWRtaW4gJiYgPFRhYmxlQ2VsbD57b3JkZXIuc3RhdHVzfTwvVGFibGVDZWxsPn1cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntgXFx1MjBBQyR7b3JkZXIudG90YWx9YH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5ib29rcy5tYXAoKGJvb2s6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsQm9va0luZm86IEJvb2tNb2RlbCA9IGJvb2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgoYms6IEJvb2tNb2RlbCkgPT4gYmsuaWQgPT09IGJvb2suaWQpIGFzIEJvb2tNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtmdWxsQm9va0luZm8uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtmdWxsQm9va0luZm8udGl0bGV9LCAke2Z1bGxCb29rSW5mby5hdXRob3J9IHwgUXVhbnRpdHk6ICR7Ym9vay5xdWFudGl0eX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtib29rLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZnVsbEJvb2tJbmZvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZnVsbEJvb2tJbmZvLmJvb2tfY292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgeyFhbGxPcmRlcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17NX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdoNidcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzQWRtaW4gPyAnVGhlcmVcXCdzIG5vdGhpbmcgdG8gc2hvdycgOiAnWW91ciBkb25cXCd0IGhhdmUgYW55IHBhc3Qgb3JkZXJzLid9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJyBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgb25DbGljaz17Z29Ib21lfT5CYWNrPC9CdXR0b24+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgb3JkZXJzOiBzdGF0ZS5vcmRlcnMsXG4gIGJvb2tzOiBzdGF0ZS5ib29rcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgT3JkZXJIaXN0b3J5UGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShPcmRlcnMpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgRm9ybUxhYmVsLFxuICBHcmlkLFxuICBSYWRpbyxcbiAgUmFkaW9Hcm91cCxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHsgQm9va0xpc3RDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tMaXN0JztcbmltcG9ydCBTdGF0ZU1vZGVsIGZyb20gJy4uL2Jhc2Uvc3RhdGUubW9kZWwnO1xuaW1wb3J0IHsgYWRkT3JkZXIsIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7IE9yZGVyTW9kZWwgfSBmcm9tICcuLi9iYXNlL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9SREVSX1NUQVRVU0VTIH0gZnJvbSAnLi4vYmFzZS9vcmRlci1zdGF0dXNlcy5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9jYXJ0LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Db25maXJtRGlhbG9nJztcbmltcG9ydCB7IFBheW1lbnRNb2RlbCB9IGZyb20gJy4uL2Jhc2UvcGF5bWVudC1tb2RlbCc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gIGhpc3Rvcnk6IEhpc3Rvcnk7XG59XG5cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIFBhcmVudFByb3BzO1xuXG5jbGFzcyBQYXltZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZSxcbiAgICAgIHBheW1lbnQ6IFBheW1lbnRNb2RlbC5jYXJkLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVQYXltZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYW5nZVRvdGFsQ2FydEl0ZW1zLCBjbGVhckNhcnQsIGFkZE9yZGVyLCB1c2VyLCBjYXJ0cywgaGlzdG9yeSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBwYXltZW50LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGFkZE9yZGVyKHtcbiAgICAgIHN0YXR1czogcGF5bWVudCA9PT0gUGF5bWVudE1vZGVsLmNhcmQgPyBPUkRFUl9TVEFUVVNFUy5wYWlkIDogT1JERVJfU1RBVFVTRVMubmV3LFxuICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgIGlkOiBgJHt1c2VyLmlkfV8ke0RhdGUubm93KCl9YCxcbiAgICAgIGJvb2tzOiBjYXJ0c1t1c2VyLmlkXSxcbiAgICAgIHRvdGFsOiB0aGlzLmdldFRvdGFsKGNhcnRzW3VzZXIuaWRdKSxcbiAgICAgIHVzZXIsXG4gICAgfSBhcyBPcmRlck1vZGVsKTtcbiAgICBjbGVhckNhcnQodXNlci5pZCk7XG4gICAgY2hhbmdlVG90YWxDYXJ0SXRlbXMoMCk7XG4gICAgdGhpcy5oYW5kbGVDb25maXJtQ2xvc2UoKTtcbiAgICB0b2FzdC5zdWNjZXNzKCdPcmRlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcGxhY2VkLiBUaGFuayB5b3UhJyk7XG4gICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gIH07XG5cbiAgaGFuZGxlQ29uZmlybU9wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDb25maXJtQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlhbG9nT3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlUGF5bWVudENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudDogKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB9KTtcbiAgfTtcblxuICBnZXREaWFsb2dUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGF5bWVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAocGF5bWVudCA9PT0gUGF5bWVudE1vZGVsLmRlbGl2ZXJ5KSB7XG4gICAgICByZXR1cm4gJ0RvIHlvdSB3YW50IHRvIGNvbmZpcm0gdGhlIHB1cmNoYXNlIGFuZCBwYXkgdGhlIG9yZGVyIGF0IHRoZSBwaWNrIHVwPyc7XG4gICAgfVxuICAgIHJldHVybiAnRG8geW91IGNvbmZpcm0gdGhhdCB0aGUgYW1vdW50IGR1ZSB3aWxsIGJlIGRlYml0ZWQgZnJvbSB5b3UgY3JlZGl0IGNhcmQ/JztcbiAgfTtcblxuICBnZXRUb3RhbCA9IChjYXJ0OiBDYXJ0SXRlbU1vZGVsW10pID0+IGNhcnQucmVkdWNlKChwOiBudW1iZXIsIGM6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBwICs9IChOdW1iZXIoYy5wcmljZSkgKiBjLnF1YW50aXR5KTtcbiAgICByZXR1cm4gcDtcbiAgfSwgMCkudG9GaXhlZCgyKTtcblxuICBnb1RvQ2FydCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgaGlzdG9yeS5wdXNoKCcvY2FydCcpO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmcgfCBudW1iZXIgfCB7fSB8IFJlYWN0LlJlYWN0Tm9kZUFycmF5IHwgUmVhY3QuUmVhY3RQb3J0YWwgfFxuICAgIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7IHBheW1lbnQsIGlzRGlhbG9nT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J2NlbnRlcicgeHM9ezEyfSBjbGFzc05hbWU9J3B5LTQnPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGFsaWduPSdjZW50ZXInPlBsZWFzZSBjaGVjayBhbGwgaXRlbXMgaW4gdGhlIGNhcnQ6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPEJvb2tMaXN0Q29udGFpbmVyIG1vZGU9J3ByZXZpZXcnIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPSdweS00JyBqdXN0aWZ5PSdmbGV4LWVuZCc+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PSdmaWVsZHNldCc+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PSdsZWdlbmQnPlBpY2sgcGF5bWVudCBtZXRob2Q6PC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nZ2VuZGVyJ1xuICAgICAgICAgICAgICAgIG5hbWU9J2dlbmRlcjEnXG4gICAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGF5bWVudENoYW5nZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdkZWxpdmVyeScgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD0nUGF5IGF0IGRlbGl2ZXJ5JyAvPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPSdjYXJkJyBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPSdQYXkgYnkgY3JlZGl0IGNhcmQnIC8+XG4gICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBvbkNsaWNrPXt0aGlzLmdvVG9DYXJ0fT5CYWNrPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybU9wZW59PlBheTwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8Q29uZmlybURpYWxvZ1xuICAgICAgICAgIG9wZW49e2lzRGlhbG9nT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNvbmZpcm1DbG9zZX1cbiAgICAgICAgICBkaWFsb2dUaXRsZT0nUGF5bWVudCBjb25maXJtYXRpb24nXG4gICAgICAgICAgZGlhbG9nVGV4dD17dGhpcy5nZXREaWFsb2dUZXh0KCl9XG4gICAgICAgICAgb25Db25maXJtPXt0aGlzLmhhbmRsZVBheW1lbnR9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGVNb2RlbCkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgY2FydHM6IHN0YXRlLmNhcnRzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgY2hhbmdlVG90YWxDYXJ0SXRlbXMsIGNsZWFyQ2FydCwgYWRkT3JkZXIgfTtcblxuZXhwb3J0IGNvbnN0IFBheW1lbnRQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGF5bWVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgR3JpZCxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgSGlzdG9yeSwgTG9jYXRpb25TdGF0ZSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFN0YXRlTW9kZWwgZnJvbSAnLi4vYmFzZS9zdGF0ZS5tb2RlbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL2Jhc2UvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBEaXNwYXRjaFByb3BzLCBTdGF0ZVByb3BzIH0gZnJvbSAnLi4vYmFzZS9wcm9wcy5tb2RlbCc7XG5cbmludGVyZmFjZSBQYXJlbnRQcm9wcyB7XG4gICAgaGlzdG9yeTogSGlzdG9yeTxMb2NhdGlvblN0YXRlPjtcbn1cblxudHlwZSBQcm9wcyA9IFN0YXRlUHJvcHMgJiBEaXNwYXRjaFByb3BzICYgUGFyZW50UHJvcHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2Vycyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyB1c2VycywgaGlzdG9yeSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICAgIGhpc3RvcnkucHVzaCgnLycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J2NlbnRlcicgeHM9ezEyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgYWxpZ249J2NlbnRlcicgY2xhc3NOYW1lPSdweS00Jz5MaXN0IG9mIHVzZXJzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+TmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlN1cm5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Vc2VybmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlJvbGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5QaWN0dXJlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyOiBVc2VyTW9kZWwpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dXNlci5uYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3VzZXIuc3VybmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt1c2VyLnVzZXJuYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3VzZXIucm9sZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXIubmFtZX0gc3JjPXt1c2VyLnBpY3R1cmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPSdweS00Jz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9e2dvSG9tZX0+QmFjazwvQnV0dG9uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0YXRlTW9kZWwpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2Vycyxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlcnNQYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVzZXJzKTtcbiIsImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vYmFzZS91c2VyLm1vZGVsJztcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYm9vay5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlck1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPUkRFUl9TVEFUVVNFUyB9IGZyb20gJy4uLy4uL2Jhc2Uvb3JkZXItc3RhdHVzZXMubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlcnNGZXRjaGVkID0gKHVzZXJzOiBVc2VyTW9kZWxbXSkgPT4gKHtcbiAgdHlwZTogJ0ZFVENIX1VTRVJTX1NVQ0NFU1MnLFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyQ2hhbmdlZCA9ICh1c2VyOiBVc2VyTW9kZWwpID0+ICh7XG4gIHR5cGU6ICdVU0VSX0NIQU5HRUQnLFxuICB1c2VyXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25DaGFuZ2UgPSAoc2Vzc2lvbjogYm9vbGVhbikgPT4gKHtcbiAgdHlwZTogJ1NFU1NJT05fQ0hBTkdFJyxcbiAgc2Vzc2lvblxufSk7XG5cbmV4cG9ydCBjb25zdCBib29rc0ZldGNoZWQgPSAoYm9va3M6IEJvb2tNb2RlbFtdKSA9PiAoe1xuICB0eXBlOiAnRkVUQ0hfQk9PS1NfU1VDQ0VTUycsXG4gIGJvb2tzXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEJvb2sgPSAoYm9vazogQm9va01vZGVsKSA9PiAoe1xuICB0eXBlOiAnU0VMRUNUX0JPT0snLFxuICBib29rXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlZHVjdEJvb2tRdWFudGl0eSA9IChib29rSWQ6IHN0cmluZykgPT4gKHtcbiAgdHlwZTogJ0RFRFVDVF9CT09LX1FVQU5USVRZJyxcbiAgYm9va0lkXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZEJvb2tRdWFudGl0eSA9IChib29rSWQ6IHN0cmluZykgPT4gKHtcbiAgdHlwZTogJ0FERF9CT09LX1FVQU5USVRZJyxcbiAgYm9va0lkXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUJvb2tEZXRhaWxzID0gKGJvb2s6IEJvb2tNb2RlbCkgPT4gKHtcbiAgdHlwZTogJ0NIQU5HRV9CT09LX0RFVEFJTFMnLFxuICBib29rXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUJvb2sgPSAoYm9va0lkOiBzdHJpbmcpID0+ICh7XG4gIHR5cGU6ICdERUxFVEVfQk9PSycsXG4gIGJvb2tJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRCb29rVG9DYXJ0ID0gKGJvb2s6IEJvb2tNb2RlbCwgdXNlcklkOiBudW1iZXIpID0+ICh7XG4gIHR5cGU6ICdBRERfQk9PS19UT19DQVJUJyxcbiAgYm9vayxcbiAgdXNlcklkXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUJvb2tGcm9tQ2FydCA9IChib29rOiBCb29rTW9kZWwsIHVzZXJJZDogbnVtYmVyKSA9PiAoe1xuICB0eXBlOiAnUkVNT1ZFX0JPT0tfRlJPTV9DQVJUJyxcbiAgYm9vayxcbiAgdXNlcklkXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ2FydCA9ICh1c2VySWQ6IG51bWJlcikgPT4gKHtcbiAgdHlwZTogJ0NMRUFSX0NBUlQnLFxuICB1c2VySWRcbn0pO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlVG90YWxDYXJ0SXRlbXMgPSAodG90YWw6IG51bWJlcikgPT4gKHtcbiAgdHlwZTogJ0NIQU5HRV9UT1RBTF9DQVJUX0lURU1TJyxcbiAgdG90YWxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkT3JkZXIgPSAob3JkZXI6IE9yZGVyTW9kZWwpID0+ICh7XG4gIHR5cGU6ICdBRERfT1JERVInLFxuICBvcmRlclxufSk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VPcmRlclN0YXR1cyA9IChvcmRlcklkOiBzdHJpbmcsIHN0YXR1czogT1JERVJfU1RBVFVTRVMpID0+ICh7XG4gIHR5cGU6ICdPUkRFUl9TVEFUVVNfQ0hBTkdFJyxcbiAgc3RhdHVzLFxuICBvcmRlcklkXG59KTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsT3BlbiA9ICgpID0+ICh7XG4gIHR5cGU6ICdNT0RBTF9PUEVOJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgbW9kYWxDbG9zZSA9ICgpID0+ICh7XG4gIHR5cGU6ICdNT0RBTF9DTE9TRScsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpYWxvZ09wZW4gPSAoKSA9PiAoe1xuICB0eXBlOiAnRElBTE9HX09QRU4nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkaWFsb2dDbG9zZSA9ICgpID0+ICh7XG4gIHR5cGU6ICdESUFMT0dfQ0xPU0UnLFxufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGJvb2sgPSAoc3RhdGU6IGFueSA9IHt9LCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRUxFQ1RfQk9PSyc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmJvb2s7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2Jvb2subW9kZWwnO1xuXG5leHBvcnQgY29uc3QgYm9va3MgPSAoc3RhdGU6IGFueSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdGRVRDSF9CT09LU19TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLmJvb2tzXG4gICAgICAgICAgICBdO1xuICAgICAgICBjYXNlICdERURVQ1RfQk9PS19RVUFOVElUWSc6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm9vay5pZCA9PT0gYWN0aW9uLmJvb2tJZCkge1xuICAgICAgICAgICAgICAgICAgICBib29rLnF1YW50aXR5IC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0FERF9CT09LX1FVQU5USVRZJzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib29rLmlkID09PSBhY3Rpb24uYm9va0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2sucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnQ0hBTkdFX0JPT0tfREVUQUlMUyc6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKChib29rOiBCb29rTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm9vay5pZCA9PT0gYWN0aW9uLmJvb2suaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihib29rLCBhY3Rpb24uYm9vayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBib29rO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ0RFTEVURV9CT09LJzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGJvb2s6IEJvb2tNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgaWYgKGJvb2suaWQgPT09IGFjdGlvbi5ib29rSWQpIHtcbiAgICAgICAgICAgICAgICAgICBib29rLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IENhcnRJdGVtTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2NhcnQtaXRlbS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBjYXJ0cyA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBjb25zdCB7dXNlcklkLCBib29rfSA9IGFjdGlvbjtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9CT09LX1RPX0NBUlQnOlxuICAgICAgICAgICAgY29uc3QgYWRkQm9vayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBib29rSW5DYXJ0SW5kZXggPSBzdGF0ZVt1c2VySWRdLmZpbmRJbmRleCgoYms6IENhcnRJdGVtTW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJrLmlkID09PSBib29rLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChib29rSW5DYXJ0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVt1c2VySWRdW2Jvb2tJbkNhcnRJbmRleF0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVt1c2VySWRdLnB1c2goe2lkOiBib29rLmlkLCBxdWFudGl0eTogMSwgcHJpY2U6IGJvb2sucHJpY2V9IGFzIENhcnRJdGVtTW9kZWwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh1c2VySWQgaW4gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBhZGRCb29rKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW3VzZXJJZF0gPSBbXTtcbiAgICAgICAgICAgICAgICBhZGRCb29rKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9CT09LX0ZST01fQ0FSVCc6XG4gICAgICAgICAgICBjb25zdCB1c2VyQ2FydCA9IHN0YXRlW3VzZXJJZF07XG4gICAgICAgICAgICBjb25zdCBib29rSW5DYXJ0SW5kZXggPSB1c2VyQ2FydC5maW5kSW5kZXgoKGJrOiBDYXJ0SXRlbU1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJrLmlkID09PSBib29rLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodXNlckNhcnRbYm9va0luQ2FydEluZGV4XS5xdWFudGl0eSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHVzZXJDYXJ0LnNwbGljZShib29rSW5DYXJ0SW5kZXgsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VyQ2FydFtib29rSW5DYXJ0SW5kZXhdLnF1YW50aXR5IC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgJ0NMRUFSX0NBUlQnOlxuICAgICAgICAgICAgZGVsZXRlIHN0YXRlW3VzZXJJZF07XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBkaWFsb2cgPSAoc3RhdGU6IGJvb2xlYW4gPSBmYWxzZSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRElBTE9HX09QRU4nOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgJ0RJQUxPR19DTE9TRSc6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdXNlcnMgfSBmcm9tICcuL3VzZXJzJztcbmltcG9ydCB7IHVzZXIgfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHsgc2Vzc2lvbiB9IGZyb20gJy4vc2Vzc2lvbic7XG5pbXBvcnQgeyBib29rcyB9IGZyb20gJy4vYm9va3MnO1xuaW1wb3J0IHsgY2FydHMgfSBmcm9tICcuL2NhcnRzJztcbmltcG9ydCB7IHRvdGFsIH0gZnJvbSAnLi90b3RhbCc7XG5pbXBvcnQgeyBvcmRlcnMgfSBmcm9tICcuL29yZGVycyc7XG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgYm9vayB9IGZyb20gJy4vYm9vayc7XG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdXNlcixcbiAgICB1c2VycyxcbiAgICBzZXNzaW9uLFxuICAgIGJvb2tzLFxuICAgIGJvb2ssXG4gICAgY2FydHMsXG4gICAgdG90YWwsXG4gICAgb3JkZXJzLFxuICAgIG1vZGFsLFxuICAgIGRpYWxvZ1xufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IG1vZGFsID0gKHN0YXRlOiBib29sZWFuID0gZmFsc2UsIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ01PREFMX09QRU4nOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgJ01PREFMX0NMT1NFJzpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBBY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2Jhc2UvYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IG9yZGVycyA9IChzdGF0ZTogYW55ID0gW10sIGFjdGlvbjogQWN0aW9uTW9kZWwpID0+IHtcbiAgICBjb25zdCB7b3JkZXIsIHN0YXR1cywgb3JkZXJJZH0gPSBhY3Rpb247XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfT1JERVInOlxuICAgICAgICAgICAgc3RhdGUucHVzaChvcmRlcik7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgJ1JFTU9WRV9PUkRFUic6XG4gICAgICAgICAgICBzdGF0ZS5zcGxpY2Uob3JkZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlICdPUkRFUl9TVEFUVVNfQ0hBTkdFJzpcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3JkZXIgPSBzdGF0ZS5maW5kKChvcmRyOiBPcmRlck1vZGVsKSA9PiBvcmRyLmlkID09PSBvcmRlcklkKTtcbiAgICAgICAgICAgIHNlbGVjdGVkT3JkZXIuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbiA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVNTSU9OX0NIQU5HRSc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnNlc3Npb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9iYXNlL2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQgU3RhdGVNb2RlbCBmcm9tICcuLi8uLi9iYXNlL3N0YXRlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHRvdGFsID0gKHN0YXRlOiBudW1iZXIgPSAwLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdDSEFOR0VfVE9UQUxfQ0FSVF9JVEVNUyc6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnRvdGFsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlciA9IChzdGF0ZSA9IFtdLCBhY3Rpb246IEFjdGlvbk1vZGVsKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVU0VSX0NIQU5HRUQnOlxuICAgICAgcmV0dXJuIGFjdGlvbi51c2VyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufTtcbiIsImltcG9ydCB7IEFjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYmFzZS9hY3Rpb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlcnMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiBBY3Rpb25Nb2RlbCkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnRkVUQ0hfVVNFUlNfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5hY3Rpb24udXNlcnNcbiAgICAgIF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59O1xuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuXG4vLyBUaGlzIGxldHMgdGhlIGFwcCBsb2FkIGZhc3RlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyBpbiBwcm9kdWN0aW9uLCBhbmQgZ2l2ZXNcbi8vIGl0IG9mZmxpbmUgY2FwYWJpbGl0aWVzLiBIb3dldmVyLCBpdCBhbHNvIG1lYW5zIHRoYXQgZGV2ZWxvcGVycyAoYW5kIHVzZXJzKVxuLy8gd2lsbCBvbmx5IHNlZSBkZXBsb3llZCB1cGRhdGVzIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIGEgcGFnZSwgYWZ0ZXIgYWxsIHRoZVxuLy8gZXhpc3RpbmcgdGFicyBvcGVuIG9uIHRoZSBwYWdlIGhhdmUgYmVlbiBjbG9zZWQsIHNpbmNlIHByZXZpb3VzbHkgY2FjaGVkXG4vLyByZXNvdXJjZXMgYXJlIHVwZGF0ZWQgaW4gdGhlIGJhY2tncm91bmQuXG5cbi8vIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGJlbmVmaXRzIG9mIHRoaXMgbW9kZWwgYW5kIGluc3RydWN0aW9ucyBvbiBob3cgdG9cbi8vIG9wdC1pbiwgcmVhZCBodHRwczovL2JpdC5seS9DUkEtUFdBXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMC84IGFyZSBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goXG4gICAgICAvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC9cbiAgICApXG4pO1xuXG50eXBlIENvbmZpZyA9IHtcbiAgb25TdWNjZXNzPzogKHJlZ2lzdHJhdGlvbjogU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbikgPT4gdm9pZDtcbiAgb25VcGRhdGU/OiAocmVnaXN0cmF0aW9uOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGNvbmZpZz86IENvbmZpZykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKFxuICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgKTtcbiAgICBpZiAocHVibGljVXJsLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgLy8gT3VyIHNlcnZpY2Ugd29ya2VyIHdvbid0IHdvcmsgaWYgUFVCTElDX1VSTCBpcyBvbiBhIGRpZmZlcmVudCBvcmlnaW5cbiAgICAgIC8vIGZyb20gd2hhdCBvdXIgcGFnZSBpcyBzZXJ2ZWQgb24uIFRoaXMgbWlnaHQgaGFwcGVuIGlmIGEgQ0ROIGlzIHVzZWQgdG9cbiAgICAgIC8vIHNlcnZlIGFzc2V0czsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy8yMzc0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzd1VybCA9IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3NlcnZpY2Utd29ya2VyLmpzYDtcblxuICAgICAgaWYgKGlzTG9jYWxob3N0KSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcnVubmluZyBvbiBsb2NhbGhvc3QuIExldCdzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgLy8gc2VydmljZSB3b3JrZXIvUFdBIGRvY3VtZW50YXRpb24uXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAnd29ya2VyLiBUbyBsZWFybiBtb3JlLCB2aXNpdCBodHRwczovL2JpdC5seS9DUkEtUFdBJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsOiBzdHJpbmcsIGNvbmZpZz86IENvbmZpZykge1xuICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgIC5yZWdpc3Rlcihzd1VybClcbiAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcbiAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgdXBkYXRlZCBwcmVjYWNoZWQgY29udGVudCBoYXMgYmVlbiBmZXRjaGVkLFxuICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHNlcnZpY2Ugd29ya2VyIHdpbGwgc3RpbGwgc2VydmUgdGhlIG9sZGVyXG4gICAgICAgICAgICAgIC8vIGNvbnRlbnQgdW50aWwgYWxsIGNsaWVudCB0YWJzIGFyZSBjbG9zZWQuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICdOZXcgY29udGVudCBpcyBhdmFpbGFibGUgYW5kIHdpbGwgYmUgdXNlZCB3aGVuIGFsbCAnICtcbiAgICAgICAgICAgICAgICAgICd0YWJzIGZvciB0aGlzIHBhZ2UgYXJlIGNsb3NlZC4gU2VlIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EuJ1xuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcub25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWcub25VcGRhdGUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcblxuICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsOiBzdHJpbmcsIGNvbmZpZz86IENvbmZpZykge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsLCB7XG4gICAgaGVhZGVyczogeyAnU2VydmljZS1Xb3JrZXInOiAnc2NyaXB0JyB9XG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAoY29udGVudFR5cGUgIT0gbnVsbCAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICByZWdpc3RlclZhbGlkU1coc3dVcmwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBsb2FkU3RhdGUsIHNhdmVTdGF0ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3QgcGVyc2lzdGVkU3RhdGUgPSBsb2FkU3RhdGUoKTtcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwZXJzaXN0ZWRTdGF0ZSk7XG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gIHNhdmVTdGF0ZSh7XG4gICAgdXNlcnM6IHN0b3JlLmdldFN0YXRlKCkudXNlcnMsXG4gICAgdXNlcjogc3RvcmUuZ2V0U3RhdGUoKS51c2VyLFxuICAgIHNlc3Npb246IHN0b3JlLmdldFN0YXRlKCkuc2Vzc2lvbixcbiAgICBib29rczogc3RvcmUuZ2V0U3RhdGUoKS5ib29rcyxcbiAgICBjYXJ0czogc3RvcmUuZ2V0U3RhdGUoKS5jYXJ0cyxcbiAgICB0b3RhbDogc3RvcmUuZ2V0U3RhdGUoKS50b3RhbCxcbiAgICBvcmRlcnM6IHN0b3JlLmdldFN0YXRlKCkub3JkZXJzLFxuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==