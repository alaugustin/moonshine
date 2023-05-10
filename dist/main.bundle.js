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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = {\n  siteName: 'Moonshine Unisex Hair Salon',\n  sitePhoto: 'https://moonshinehairsalon.com/img/moonshine.jpg',\n  contact: {\n    address: {\n      streetNumber: 1749,\n      unitNumber: 1,\n      street: 'Jane St.',\n      city: 'North York',\n      province: 'ON',\n      postalCode: 'M9N 2S5',\n    },\n    phone: '416.364.8544',\n    email: 'info@moonshinehairsalon.com',\n    social: {\n      faceBook: {\n        icon: 'https://moonshinehairsalon.com/img/facebook.png',\n        url: 'https://www.facebook.com/MoonshineHairSalon',\n      },\n      twitter: {\n        icon: 'https://moonshinehairsalon.com/img/twitter.png',\n        url: 'https://twitter.com/MoonshineSalon',\n      }\n    }\n  },\n  main: {\n    tagLine: 'The best in all types of hair designs',\n    services: ['Curls', 'Texturizing', 'Braids', 'Twists', 'Weave', 'Relaxer', 'Soft (Jheri) Curls', 'Colouring', 'Perm', 'Hot Press', 'Highlights', 'Creative Men\\'s Cut', 'Boy\\'s Cut', 'Kid\\'s Hairdo']\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);\n\n\n//# sourceURL=webpack://moonshine/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n\n\n/* -------------------- new JS template below -------------------- */\nlet moonshine = {\n  version: '2.0.0',\n  author: 'Al Agustin',\n  project: '',\n  Date: '2023',\n\n  // -------------------- INITIALIZATION --------------------\n  init: function () {\n    let context = this;\n\n    // GLOBAL VARIABLES --------------------\n    context.config = {\n      contentData: _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      headerHolder: document.getElementById('siteName'),\n    };\n\n    // CALL DOM INVOKING FUNCTIONS HERE --------------------\n    moonshine.onDomReady();\n    moonshine.eventHandlers();\n  },\n\n  onDomReady: () => {\n    const siteConfig = moonshine.config;\n\n    moonshine.header();\n    moonshine.main();\n    moonshine.footer();\n  },\n\n  header: () => {\n    const siteConfig = moonshine.config;\n\n    siteConfig.headerHolder.innerText = siteConfig.contentData.siteName;\n  },\n  main: () => {\n    console.log('this is the main');\n  },\n  footer: () => {\n    console.log('this is the footer');\n  },\n\n  // -------------------- HANDLE ALL PAGE LEVEL EVENTS --------------------\n  eventHandlers: () => {\n    const siteConfig = moonshine.config;\n\n    console.log(siteConfig);\n  },\n};\n\n// -------------------- LOAD init() --------------------\nwindow.addEventListener('load', () => {\n  moonshine.init();\n});\n\n\n//# sourceURL=webpack://moonshine/./src/index.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"style.css\";\n\n//# sourceURL=webpack://moonshine/./src/styles.scss?");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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