/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component-js/landing-page.js":
/*!******************************************!*\
  !*** ./src/component-js/landing-page.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

doc_query;
window.addEventListener("DOMContentLoaded", function () {
  var baybayinLogo = doc_query(".baybayin__logo"); // <- ganito

  var circleVector = doc_query(".circle__vector");
  var handGestures = doc_query_all(".hand__gestures");
  var bannerTwoImage = doc_query_all(".banner__2-image");
  var cardLinkIcon = doc_query_all(".card__link-icon"); // Banner 1 images

  for (var i = 0; i < handGestures.length; i++) {
    handGestures[i].src = "./assets/landing-page/banner-1/hand_gest-".concat(i + 1, ".svg");
    handGestures[i].classList.add("z-index-1");
  } //Banner 2


  for (var _i = 0; _i < bannerTwoImage.length; _i++) {
    bannerTwoImage[_i].src = "./assets/landing-page/banner-2/icon".concat(_i + 1, ".svg");
  } //Banner 3


  for (var _i2 = 0; _i2 < cardLinkIcon.length; _i2++) {
    cardLinkIcon[_i2].src = "./assets/landing-page/banner-3/card-link-icon-".concat(_i2 + 1, ".svg");
  }

  baybayinLogo.src = "./assets/logo/logo.png";

  if (circleVector !== null) {
    circleVector.src = "./assets/landing-page/banner-1/Ellipse_1.svg";
  }
});

/***/ }),

/***/ "./src/component-js/learning-module-2.js":
/*!***********************************************!*\
  !*** ./src/component-js/learning-module-2.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image-l2");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "./assets/learning-module-2/image-".concat(i + 1, ".jpg");
  }
});

/***/ }),

/***/ "./src/component-js/learning-module.js":
/*!*********************************************!*\
  !*** ./src/component-js/learning-module.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image");
  var baybayinCultureAsset = doc_query(".baybayin__culture-asset");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "./assets/learning-module/baybayin-def-".concat(i + 1, ".jpg");
  }

  if (baybayinCultureAsset !== null) {
    baybayinCultureAsset.src = "./assets/learning-module/culture_asset.jpg";
  }
});

/***/ }),

/***/ "./src/component-js/query_method.js":
/*!******************************************!*\
  !*** ./src/component-js/query_method.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc_query": function() { return /* binding */ doc_query; },
/* harmony export */   "doc_query_all": function() { return /* binding */ doc_query_all; }
/* harmony export */ });
var doc_query = function doc_query(class_name) {
  return document.querySelector(class_name);
};
var doc_query_all = function doc_query_all(class_name) {
  return document.querySelectorAll(class_name);
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// CSS
__webpack_require__(/*! ./style.scss */ "./src/style.scss"); // JS
// require("./component-js/model");


__webpack_require__(/*! ./component-js/landing-page */ "./src/component-js/landing-page.js");

__webpack_require__(/*! ./component-js/learning-module */ "./src/component-js/learning-module.js");

__webpack_require__(/*! ./component-js/learning-module-2 */ "./src/component-js/learning-module-2.js"); // require("./component-js/translator");
// require("./component-js/handwriting");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlGQUFELENBQVAsRUFDQTtBQUNBLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlLTIuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvcXVlcnlfbWV0aG9kLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JheWJheWluLWpyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRvY19xdWVyeSwgZG9jX3F1ZXJ5X2FsbCB9ID0gcmVxdWlyZShcIi4vcXVlcnlfbWV0aG9kXCIpO1xyXG5cclxuZG9jX3F1ZXJ5O1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGJheWJheWluTG9nbyA9IGRvY19xdWVyeShcIi5iYXliYXlpbl9fbG9nb1wiKTsgLy8gPC0gZ2FuaXRvXHJcbiAgY29uc3QgY2lyY2xlVmVjdG9yID0gZG9jX3F1ZXJ5KFwiLmNpcmNsZV9fdmVjdG9yXCIpO1xyXG4gIGNvbnN0IGhhbmRHZXN0dXJlcyA9IGRvY19xdWVyeV9hbGwoXCIuaGFuZF9fZ2VzdHVyZXNcIik7XHJcbiAgY29uc3QgYmFubmVyVHdvSW1hZ2UgPSBkb2NfcXVlcnlfYWxsKFwiLmJhbm5lcl9fMi1pbWFnZVwiKTtcclxuICBjb25zdCBjYXJkTGlua0ljb24gPSBkb2NfcXVlcnlfYWxsKFwiLmNhcmRfX2xpbmstaWNvblwiKTtcclxuXHJcbiAgLy8gQmFubmVyIDEgaW1hZ2VzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kR2VzdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGhhbmRHZXN0dXJlc1tpXS5zcmMgPSBgLi9hc3NldHMvbGFuZGluZy1wYWdlL2Jhbm5lci0xL2hhbmRfZ2VzdC0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5zdmdgO1xyXG4gICAgaGFuZEdlc3R1cmVzW2ldLmNsYXNzTGlzdC5hZGQoXCJ6LWluZGV4LTFcIik7XHJcbiAgfVxyXG5cclxuICAvL0Jhbm5lciAyXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5uZXJUd29JbWFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgYmFubmVyVHdvSW1hZ2VbaV0uc3JjID0gYC4vYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMi9pY29uJHtpICsgMX0uc3ZnYDtcclxuICB9XHJcblxyXG4gIC8vQmFubmVyIDNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRMaW5rSWNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgY2FyZExpbmtJY29uW2ldLnNyYyA9IGAuL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTMvY2FyZC1saW5rLWljb24tJHtcclxuICAgICAgaSArIDFcclxuICAgIH0uc3ZnYDtcclxuICB9XHJcblxyXG4gIGJheWJheWluTG9nby5zcmMgPSBcIi4vYXNzZXRzL2xvZ28vbG9nby5wbmdcIjtcclxuICBpZiAoY2lyY2xlVmVjdG9yICE9PSBudWxsKSB7XHJcbiAgICBjaXJjbGVWZWN0b3Iuc3JjID0gXCIuL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTEvRWxsaXBzZV8xLnN2Z1wiO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IHsgZG9jX3F1ZXJ5LCBkb2NfcXVlcnlfYWxsIH0gPSByZXF1aXJlKFwiLi9xdWVyeV9tZXRob2RcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmF5YmF5aW5JbnRyb0ltYWdlcyA9IGRvY19xdWVyeV9hbGwoXCIuYmF5YmF5aW5fX2RlZi1pbWFnZS1sMlwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJheWJheWluSW50cm9JbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJheWJheWluSW50cm9JbWFnZXNbaV0uc3JjID0gYC4vYXNzZXRzL2xlYXJuaW5nLW1vZHVsZS0yL2ltYWdlLSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LmpwZ2A7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgeyBkb2NfcXVlcnksIGRvY19xdWVyeV9hbGwgfSA9IHJlcXVpcmUoXCIuL3F1ZXJ5X21ldGhvZFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBiYXliYXlpbkludHJvSW1hZ2VzID0gZG9jX3F1ZXJ5X2FsbChcIi5iYXliYXlpbl9fZGVmLWltYWdlXCIpO1xyXG4gIGNvbnN0IGJheWJheWluQ3VsdHVyZUFzc2V0ID0gZG9jX3F1ZXJ5KFwiLmJheWJheWluX19jdWx0dXJlLWFzc2V0XCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmF5YmF5aW5JbnRyb0ltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgYmF5YmF5aW5JbnRyb0ltYWdlc1tpXS5zcmMgPSBgLi9hc3NldHMvbGVhcm5pbmctbW9kdWxlL2JheWJheWluLWRlZi0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5qcGdgO1xyXG4gIH1cclxuICBpZiAoYmF5YmF5aW5DdWx0dXJlQXNzZXQgIT09IG51bGwpIHtcclxuICAgIGJheWJheWluQ3VsdHVyZUFzc2V0LnNyYyA9IFwiLi9hc3NldHMvbGVhcm5pbmctbW9kdWxlL2N1bHR1cmVfYXNzZXQuanBnXCI7XHJcbiAgfVxyXG59KTtcclxuIiwiICBleHBvcnQgY29uc3QgZG9jX3F1ZXJ5ID0gKGNsYXNzX25hbWUpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzX25hbWUpO1xyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGRvY19xdWVyeV9hbGwgPSAoY2xhc3NfbmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NfbmFtZSk7XHJcbiAgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBDU1NcclxucmVxdWlyZShcIi4vc3R5bGUuc2Nzc1wiKTtcclxuLy8gSlNcclxuLy8gcmVxdWlyZShcIi4vY29tcG9uZW50LWpzL21vZGVsXCIpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnQtanMvbGFuZGluZy1wYWdlXCIpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlXCIpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlLTJcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy90cmFuc2xhdG9yXCIpO1xyXG4vLyByZXF1aXJlKFwiLi9jb21wb25lbnQtanMvaGFuZHdyaXRpbmdcIik7XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jX3F1ZXJ5IiwiZG9jX3F1ZXJ5X2FsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYXliYXlpbkxvZ28iLCJjaXJjbGVWZWN0b3IiLCJoYW5kR2VzdHVyZXMiLCJiYW5uZXJUd29JbWFnZSIsImNhcmRMaW5rSWNvbiIsImkiLCJsZW5ndGgiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJiYXliYXlpbkludHJvSW1hZ2VzIiwiYmF5YmF5aW5DdWx0dXJlQXNzZXQiLCJjbGFzc19uYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCJdLCJzb3VyY2VSb290IjoiIn0=