/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component-js/landing-page.js":
/*!******************************************!*\
  !*** ./src/component-js/landing-page.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

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
    handGestures[i].src = "../src/assets/landing-page/banner-1/hand_gest-".concat(i + 1, ".svg");
    handGestures[i].classList.add("z-index-1");
  } //Banner 2


  for (var _i = 0; _i < bannerTwoImage.length; _i++) {
    bannerTwoImage[_i].src = "../src/assets/landing-page/banner-2/icon".concat(_i + 1, ".svg");
  } //Banner 3


  for (var _i2 = 0; _i2 < cardLinkIcon.length; _i2++) {
    cardLinkIcon[_i2].src = "../src/assets/landing-page/banner-3/card-link-icon-".concat(_i2 + 1, ".svg");
  }

  baybayinLogo.src = "../src/assets/logo/logo.png";

  if (circleVector !== null) {
    circleVector.src = "../src/assets/landing-page/banner-1/Ellipse_1.svg";
  }
});

/***/ }),

/***/ "./src/component-js/learning-module-2.js":
/*!***********************************************!*\
  !*** ./src/component-js/learning-module-2.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image-l2");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "../src/assets/learning-module-2/image-".concat(i + 1, ".jpg");
  }
});

/***/ }),

/***/ "./src/component-js/learning-module.js":
/*!*********************************************!*\
  !*** ./src/component-js/learning-module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./query_method */ "./src/component-js/query_method.js"),
    doc_query = _require.doc_query,
    doc_query_all = _require.doc_query_all;

window.addEventListener("DOMContentLoaded", function () {
  var baybayinIntroImages = doc_query_all(".baybayin__def-image");
  var baybayinCultureAsset = doc_query(".baybayin__culture-asset");

  for (var i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = "../src/assets/learning-module/baybayin-def-".concat(i + 1, ".jpg");
  }

  if (baybayinCultureAsset !== null) {
    baybayinCultureAsset.src = "../src/assets/learning-module/culture_asset.jpg";
  }
});

/***/ }),

/***/ "./src/component-js/query_method.js":
/*!******************************************!*\
  !*** ./src/component-js/query_method.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc_query": () => (/* binding */ doc_query),
/* harmony export */   "doc_query_all": () => (/* binding */ doc_query_all)
/* harmony export */ });
var doc_query = function doc_query(class_name) {
  return document.querySelector(class_name);
};
var doc_query_all = function doc_query_all(class_name) {
  return document.querySelectorAll(class_name);
};

/***/ }),

/***/ "./src/component-js/translator.js":
/*!****************************************!*\
  !*** ./src/component-js/translator.js ***!
  \****************************************/
/***/ (() => {

var baybayinInputChecker = document.querySelector(".baybayinInputChecker");
var baybayinOutput = document.querySelector(".baybayinOutput");
baybayinInputChecker.addEventListener("input", function (e) {
  if (e.target.value !== null) {
    var item = [{
      key: "a",
      value: "red"
    }, {
      key: "b",
      value: "blue"
    }, {
      key: "c",
      value: "green"
    }, {
      key: "d",
      value: "orange"
    }, {
      key: "e",
      value: "skyblue"
    }, {
      key: "f",
      value: "teal"
    }, {
      key: "g",
      value: "tomatoe"
    }, {
      key: "h",
      value: "lavender"
    }, {
      key: "i",
      value: "black"
    }, {
      key: "j",
      value: "brown"
    }, {
      key: "k",
      value: "maroon"
    }, {
      key: "l",
      value: "navy"
    }];
    item.forEach(function (value) {
      if (e.target.value === value.key || e.target.value === value.key.toLowerCase()) {
        baybayinOutput.style.backgroundColor = value.value;
      }
    });
  }
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// CSS
__webpack_require__(/*! ./style.scss */ "./src/style.scss"); // JS
// require("./component-js/model");


__webpack_require__(/*! ./component-js/landing-page */ "./src/component-js/landing-page.js");

__webpack_require__(/*! ./component-js/learning-module */ "./src/component-js/learning-module.js");

__webpack_require__(/*! ./component-js/learning-module-2 */ "./src/component-js/learning-module-2.js");

__webpack_require__(/*! ./component-js/translator */ "./src/component-js/translator.js"); // require("./component-js/handwriting");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUE3QztBQUNEO0FBQ0YsS0FQRDtBQVFEO0FBQ0YsQ0F6QkQ7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOQTtBQUNBekIsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFQLEVBQ0E7QUFDQTs7O0FBQ0FBLG1CQUFPLENBQUMsdUVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw2RUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGlGQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUVBQUQsQ0FBUCxFQUNBLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlLTIuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvcXVlcnlfbWV0aG9kLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2NvbXBvbmVudC1qcy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JheWJheWluLWpyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRvY19xdWVyeSwgZG9jX3F1ZXJ5X2FsbCB9ID0gcmVxdWlyZShcIi4vcXVlcnlfbWV0aG9kXCIpO1xyXG5cclxuZG9jX3F1ZXJ5O1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGJheWJheWluTG9nbyA9IGRvY19xdWVyeShcIi5iYXliYXlpbl9fbG9nb1wiKTsgLy8gPC0gZ2FuaXRvXHJcbiAgY29uc3QgY2lyY2xlVmVjdG9yID0gZG9jX3F1ZXJ5KFwiLmNpcmNsZV9fdmVjdG9yXCIpO1xyXG4gIGNvbnN0IGhhbmRHZXN0dXJlcyA9IGRvY19xdWVyeV9hbGwoXCIuaGFuZF9fZ2VzdHVyZXNcIik7XHJcbiAgY29uc3QgYmFubmVyVHdvSW1hZ2UgPSBkb2NfcXVlcnlfYWxsKFwiLmJhbm5lcl9fMi1pbWFnZVwiKTtcclxuICBjb25zdCBjYXJkTGlua0ljb24gPSBkb2NfcXVlcnlfYWxsKFwiLmNhcmRfX2xpbmstaWNvblwiKTtcclxuXHJcbiAgLy8gQmFubmVyIDEgaW1hZ2VzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kR2VzdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGhhbmRHZXN0dXJlc1tpXS5zcmMgPSBgLi4vc3JjL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTEvaGFuZF9nZXN0LSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LnN2Z2A7XHJcbiAgICBoYW5kR2VzdHVyZXNbaV0uY2xhc3NMaXN0LmFkZChcInotaW5kZXgtMVwiKTtcclxuICB9XHJcblxyXG4gIC8vQmFubmVyIDJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbm5lclR3b0ltYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYW5uZXJUd29JbWFnZVtpXS5zcmMgPSBgLi4vc3JjL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTIvaWNvbiR7aSArIDF9LnN2Z2A7XHJcbiAgfVxyXG5cclxuICAvL0Jhbm5lciAzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkTGlua0ljb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIGNhcmRMaW5rSWNvbltpXS5zcmMgPSBgLi4vc3JjL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTMvY2FyZC1saW5rLWljb24tJHtcclxuICAgICAgaSArIDFcclxuICAgIH0uc3ZnYDtcclxuICB9XHJcblxyXG4gIGJheWJheWluTG9nby5zcmMgPSBcIi4uL3NyYy9hc3NldHMvbG9nby9sb2dvLnBuZ1wiO1xyXG4gIGlmIChjaXJjbGVWZWN0b3IgIT09IG51bGwpIHtcclxuICAgIGNpcmNsZVZlY3Rvci5zcmMgPSBcIi4uL3NyYy9hc3NldHMvbGFuZGluZy1wYWdlL2Jhbm5lci0xL0VsbGlwc2VfMS5zdmdcIjtcclxuICB9XHJcbn0pO1xyXG4iLCJjb25zdCB7IGRvY19xdWVyeSwgZG9jX3F1ZXJ5X2FsbCB9ID0gcmVxdWlyZShcIi4vcXVlcnlfbWV0aG9kXCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGJheWJheWluSW50cm9JbWFnZXMgPSBkb2NfcXVlcnlfYWxsKFwiLmJheWJheWluX19kZWYtaW1hZ2UtbDJcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXliYXlpbkludHJvSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYXliYXlpbkludHJvSW1hZ2VzW2ldLnNyYyA9IGAuLi9zcmMvYXNzZXRzL2xlYXJuaW5nLW1vZHVsZS0yL2ltYWdlLSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LmpwZ2A7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgeyBkb2NfcXVlcnksIGRvY19xdWVyeV9hbGwgfSA9IHJlcXVpcmUoXCIuL3F1ZXJ5X21ldGhvZFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBiYXliYXlpbkludHJvSW1hZ2VzID0gZG9jX3F1ZXJ5X2FsbChcIi5iYXliYXlpbl9fZGVmLWltYWdlXCIpO1xyXG4gIGNvbnN0IGJheWJheWluQ3VsdHVyZUFzc2V0ID0gZG9jX3F1ZXJ5KFwiLmJheWJheWluX19jdWx0dXJlLWFzc2V0XCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmF5YmF5aW5JbnRyb0ltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgYmF5YmF5aW5JbnRyb0ltYWdlc1tpXS5zcmMgPSBgLi4vc3JjL2Fzc2V0cy9sZWFybmluZy1tb2R1bGUvYmF5YmF5aW4tZGVmLSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LmpwZ2A7XHJcbiAgfVxyXG4gIGlmIChiYXliYXlpbkN1bHR1cmVBc3NldCAhPT0gbnVsbCkge1xyXG4gICAgYmF5YmF5aW5DdWx0dXJlQXNzZXQuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2xlYXJuaW5nLW1vZHVsZS9jdWx0dXJlX2Fzc2V0LmpwZ1wiO1xyXG4gIH1cclxufSk7XHJcbiIsIiAgZXhwb3J0IGNvbnN0IGRvY19xdWVyeSA9IChjbGFzc19uYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc19uYW1lKTtcclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBkb2NfcXVlcnlfYWxsID0gKGNsYXNzX25hbWUpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzX25hbWUpO1xyXG4gIH07IiwiY29uc3QgYmF5YmF5aW5JbnB1dENoZWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJheWJheWluSW5wdXRDaGVja2VyXCIpO1xyXG5jb25zdCBiYXliYXlpbk91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF5YmF5aW5PdXRwdXRcIik7XHJcbmJheWJheWluSW5wdXRDaGVja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgbGV0IGl0ZW0gPSBbXHJcbiAgICAgIHsga2V5OiBcImFcIiwgdmFsdWU6IFwicmVkXCIgfSxcclxuICAgICAgeyBrZXk6IFwiYlwiLCB2YWx1ZTogXCJibHVlXCIgfSxcclxuICAgICAgeyBrZXk6IFwiY1wiLCB2YWx1ZTogXCJncmVlblwiIH0sXHJcbiAgICAgIHsga2V5OiBcImRcIiwgdmFsdWU6IFwib3JhbmdlXCIgfSxcclxuICAgICAgeyBrZXk6IFwiZVwiLCB2YWx1ZTogXCJza3libHVlXCIgfSxcclxuICAgICAgeyBrZXk6IFwiZlwiLCB2YWx1ZTogXCJ0ZWFsXCIgfSxcclxuICAgICAgeyBrZXk6IFwiZ1wiLCB2YWx1ZTogXCJ0b21hdG9lXCIgfSxcclxuICAgICAgeyBrZXk6IFwiaFwiLCB2YWx1ZTogXCJsYXZlbmRlclwiIH0sXHJcbiAgICAgIHsga2V5OiBcImlcIiwgdmFsdWU6IFwiYmxhY2tcIiB9LFxyXG4gICAgICB7IGtleTogXCJqXCIsIHZhbHVlOiBcImJyb3duXCIgfSxcclxuICAgICAgeyBrZXk6IFwia1wiLCB2YWx1ZTogXCJtYXJvb25cIiB9LFxyXG4gICAgICB7IGtleTogXCJsXCIsIHZhbHVlOiBcIm5hdnlcIiB9LFxyXG4gICAgXTtcclxuICAgIGl0ZW0uZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSB2YWx1ZS5rZXkgfHxcclxuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gdmFsdWUua2V5LnRvTG93ZXJDYXNlKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgYmF5YmF5aW5PdXRwdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWUudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ1NTXHJcbnJlcXVpcmUoXCIuL3N0eWxlLnNjc3NcIik7XHJcbi8vIEpTXHJcbi8vIHJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9tb2RlbFwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZVwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZVwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS0yXCIpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnQtanMvdHJhbnNsYXRvclwiKTtcclxuLy8gcmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2hhbmR3cml0aW5nXCIpO1xyXG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY19xdWVyeSIsImRvY19xdWVyeV9hbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYmF5YmF5aW5Mb2dvIiwiY2lyY2xlVmVjdG9yIiwiaGFuZEdlc3R1cmVzIiwiYmFubmVyVHdvSW1hZ2UiLCJjYXJkTGlua0ljb24iLCJpIiwibGVuZ3RoIiwic3JjIiwiY2xhc3NMaXN0IiwiYWRkIiwiYmF5YmF5aW5JbnRyb0ltYWdlcyIsImJheWJheWluQ3VsdHVyZUFzc2V0IiwiY2xhc3NfbmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYXliYXlpbklucHV0Q2hlY2tlciIsImJheWJheWluT3V0cHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaXRlbSIsImtleSIsImZvckVhY2giLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==