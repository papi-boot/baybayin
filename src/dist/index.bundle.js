/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component-js/landing-page.js":
/*!******************************************!*\
  !*** ./src/component-js/landing-page.js ***!
  \******************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  //Gamitin ito pag pag mag call ng classname doc_query("classname sa html")
  var doc_query = function doc_query(class_name) {
    return document.querySelector(class_name);
  };

  var doc_query_all = function doc_query_all(class_name) {
    return document.querySelectorAll(class_name);
  };

  var baybayinLogo = doc_query(".baybayin__logo"); // <- ganito

  var circleVector = doc_query(".circle__vector");
  var handGestures = doc_query_all(".hand__gestures");
  var bannerTwoImage = doc_query_all(".banner__2-image");
  var cardLinkIcon = doc_query_all(".card__link-icon"); // Banner 1 images

  for (var i = 0; i < handGestures.length; i++) {
    handGestures[i].src = "/src/assets/landing-page/banner-1/hand_gest-".concat(i + 1, ".svg");
    handGestures[i].classList.add("z-index-1");
  } //Banner 2


  for (var _i = 0; _i < bannerTwoImage.length; _i++) {
    bannerTwoImage[_i].src = "/src/assets/landing-page/banner-2/icon".concat(_i + 1, ".svg");
  } //Banner 3


  for (var _i2 = 0; _i2 < cardLinkIcon.length; _i2++) {
    cardLinkIcon[_i2].src = "/src/assets/landing-page/banner-3/card-link-icon-".concat(_i2 + 1, ".svg");
  }

  baybayinLogo.src = "/src/assets/logo/logo.png";
  circleVector.src = "/src/assets/landing-page/banner-1/Ellipse_1.svg";
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// CSS
__webpack_require__(/*! ./style.scss */ "./src/style.scss"); // JS


__webpack_require__(/*! ./component-js/landing-page */ "./src/component-js/landing-page.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hEO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsVUFBRCxFQUFnQjtBQUNoQyxXQUFPQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJGLFVBQXZCLENBQVA7QUFDRCxHQUZEOztBQUdBLE1BQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0gsVUFBRCxFQUFnQjtBQUNwQyxXQUFPQyxRQUFRLENBQUNHLGdCQUFULENBQTBCSixVQUExQixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSyxZQUFZLEdBQUdOLFNBQVMsQ0FBQyxpQkFBRCxDQUE5QixDQVRnRCxDQVNHOztBQUNuRCxNQUFNTyxZQUFZLEdBQUdQLFNBQVMsQ0FBQyxpQkFBRCxDQUE5QjtBQUNBLE1BQU1RLFlBQVksR0FBR0osYUFBYSxDQUFDLGlCQUFELENBQWxDO0FBQ0EsTUFBTUssY0FBYyxHQUFHTCxhQUFhLENBQUMsa0JBQUQsQ0FBcEM7QUFDQSxNQUFNTSxZQUFZLEdBQUdOLGFBQWEsQ0FBQyxrQkFBRCxDQUFsQyxDQWJnRCxDQWVoRDs7QUFDQSxPQUFLLElBQUlPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFlBQVksQ0FBQ0ksTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7QUFDNUNILElBQUFBLFlBQVksQ0FBQ0csQ0FBRCxDQUFaLENBQWdCRSxHQUFoQix5REFBcUVGLENBQUMsR0FBRyxDQUF6RTtBQUNBSCxJQUFBQSxZQUFZLENBQUNHLENBQUQsQ0FBWixDQUFnQkcsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFdBQTlCO0FBQ0QsR0FuQitDLENBcUJoRDs7O0FBQ0EsT0FBSSxJQUFJSixFQUFDLEdBQUcsQ0FBWixFQUFlQSxFQUFDLEdBQUdGLGNBQWMsQ0FBQ0csTUFBbEMsRUFBMENELEVBQUMsRUFBM0MsRUFBOEM7QUFDNUNGLElBQUFBLGNBQWMsQ0FBQ0UsRUFBRCxDQUFkLENBQWtCRSxHQUFsQixtREFBaUVGLEVBQUMsR0FBRyxDQUFyRTtBQUNELEdBeEIrQyxDQTBCaEQ7OztBQUNBLE9BQUksSUFBSUEsR0FBQyxHQUFHLENBQVosRUFBZUEsR0FBQyxHQUFHRCxZQUFZLENBQUNFLE1BQWhDLEVBQXdDRCxHQUFDLEVBQXpDLEVBQTRDO0FBQzFDRCxJQUFBQSxZQUFZLENBQUNDLEdBQUQsQ0FBWixDQUFnQkUsR0FBaEIsOERBQTBFRixHQUFDLEdBQUcsQ0FBOUU7QUFDRDs7QUFFREwsRUFBQUEsWUFBWSxDQUFDTyxHQUFiLEdBQW1CLDJCQUFuQjtBQUNBTixFQUFBQSxZQUFZLENBQUNNLEdBQWIsR0FBbUIsaURBQW5CO0FBQ0QsQ0FqQ0Q7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTkE7QUFDQUcsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFQLEVBQ0E7OztBQUNBQSxtQkFBTyxDQUFDLHVFQUFELENBQVAsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2NvbXBvbmVudC1qcy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy9HYW1pdGluIGl0byBwYWcgcGFnIG1hZyBjYWxsIG5nIGNsYXNzbmFtZSBkb2NfcXVlcnkoXCJjbGFzc25hbWUgc2EgaHRtbFwiKVxyXG4gIGNvbnN0IGRvY19xdWVyeSA9IChjbGFzc19uYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc19uYW1lKTtcclxuICB9O1xyXG4gIGNvbnN0IGRvY19xdWVyeV9hbGwgPSAoY2xhc3NfbmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NfbmFtZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmF5YmF5aW5Mb2dvID0gZG9jX3F1ZXJ5KFwiLmJheWJheWluX19sb2dvXCIpOyAvLyA8LSBnYW5pdG9cclxuICBjb25zdCBjaXJjbGVWZWN0b3IgPSBkb2NfcXVlcnkoXCIuY2lyY2xlX192ZWN0b3JcIik7XHJcbiAgY29uc3QgaGFuZEdlc3R1cmVzID0gZG9jX3F1ZXJ5X2FsbChcIi5oYW5kX19nZXN0dXJlc1wiKTtcclxuICBjb25zdCBiYW5uZXJUd29JbWFnZSA9IGRvY19xdWVyeV9hbGwoXCIuYmFubmVyX18yLWltYWdlXCIpO1xyXG4gIGNvbnN0IGNhcmRMaW5rSWNvbiA9IGRvY19xdWVyeV9hbGwoXCIuY2FyZF9fbGluay1pY29uXCIpO1xyXG5cclxuICAvLyBCYW5uZXIgMSBpbWFnZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmRHZXN0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaGFuZEdlc3R1cmVzW2ldLnNyYyA9IGAvc3JjL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTEvaGFuZF9nZXN0LSR7aSArIDF9LnN2Z2A7XHJcbiAgICBoYW5kR2VzdHVyZXNbaV0uY2xhc3NMaXN0LmFkZChcInotaW5kZXgtMVwiKTtcclxuICB9XHJcblxyXG4gIC8vQmFubmVyIDJcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgYmFubmVyVHdvSW1hZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgYmFubmVyVHdvSW1hZ2VbaV0uc3JjID0gYC9zcmMvYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMi9pY29uJHtpICsgMX0uc3ZnYFxyXG4gIH1cclxuXHJcbiAgLy9CYW5uZXIgM1xyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBjYXJkTGlua0ljb24ubGVuZ3RoOyBpKyspe1xyXG4gICAgY2FyZExpbmtJY29uW2ldLnNyYyA9IGAvc3JjL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTMvY2FyZC1saW5rLWljb24tJHtpICsgMX0uc3ZnYFxyXG4gIH1cclxuXHJcbiAgYmF5YmF5aW5Mb2dvLnNyYyA9IFwiL3NyYy9hc3NldHMvbG9nby9sb2dvLnBuZ1wiO1xyXG4gIGNpcmNsZVZlY3Rvci5zcmMgPSBcIi9zcmMvYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMS9FbGxpcHNlXzEuc3ZnXCI7XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ1NTXHJcbnJlcXVpcmUoXCIuL3N0eWxlLnNjc3NcIik7XHJcbi8vIEpTXHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9sYW5kaW5nLXBhZ2VcIik7Il0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2NfcXVlcnkiLCJjbGFzc19uYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZG9jX3F1ZXJ5X2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYXliYXlpbkxvZ28iLCJjaXJjbGVWZWN0b3IiLCJoYW5kR2VzdHVyZXMiLCJiYW5uZXJUd29JbWFnZSIsImNhcmRMaW5rSWNvbiIsImkiLCJsZW5ndGgiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==