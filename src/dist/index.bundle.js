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
    handGestures[i].src = "../assets/landing-page/banner-1/hand_gest-".concat(i + 1, ".svg");
    handGestures[i].classList.add("z-index-1");
  } //Banner 2


  for (var _i = 0; _i < bannerTwoImage.length; _i++) {
    bannerTwoImage[_i].src = "../assets/landing-page/banner-2/icon".concat(_i + 1, ".svg");
  } //Banner 3


  for (var _i2 = 0; _i2 < cardLinkIcon.length; _i2++) {
    cardLinkIcon[_i2].src = "../assets/landing-page/banner-3/card-link-icon-".concat(_i2 + 1, ".svg");
  }

  baybayinLogo.src = "../assets/logo/logo.png";

  if (circleVector !== null) {
    circleVector.src = "../assets/landing-page/banner-1/Ellipse_1.svg";
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
    baybayinIntroImages[i].src = "../assets/learning-module-2/image-".concat(i + 1, ".jpg");
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
    baybayinIntroImages[i].src = "../assets/learning-module/baybayin-def-".concat(i + 1, ".jpg");
  }

  if (baybayinCultureAsset !== null) {
    baybayinCultureAsset.src = "../assets/learning-module/culture_asset.jpg";
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
      value: "a",
      key: "A"
    }, {
      value: "ba",
      key: "B"
    }, {
      value: "ka",
      key: "C"
    }, {
      value: "da",
      key: "C"
    }, {
      value: "ga",
      key: "C"
    }, {
      value: "ha",
      key: "C"
    }, {
      value: "la",
      key: "C"
    }, {
      value: "ma",
      key: "C"
    }, {
      value: "a",
      key: "C"
    }, {
      value: "Cat",
      key: "C"
    }, {
      value: "Cat",
      key: "C"
    }, {
      value: "Cat",
      key: "C"
    }, {
      value: "Cat",
      key: "C"
    }, {
      value: "Cat",
      key: "C"
    }];
    item.forEach(function (value) {
      if (e.target.value === value.key || e.target.value === value.key.toLowerCase()) {
        baybayinOutput.innerHTML = value.value;
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


__webpack_require__(/*! ./component-js/landing-page */ "./src/component-js/landing-page.js");

__webpack_require__(/*! ./component-js/learning-module */ "./src/component-js/learning-module.js");

__webpack_require__(/*! ./component-js/learning-module-2 */ "./src/component-js/learning-module-2.js");

__webpack_require__(/*! ./component-js/translator */ "./src/component-js/translator.js");

__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './component-js/model/model.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // require("./component-js/handwriting");
// require("./component-js/model")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQWdDSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQkEsS0FBSyxDQUFDRSxHQUFOLENBQVVFLFdBQVYsRUFBdEQsRUFBOEU7QUFDNUVQLFFBQUFBLGNBQWMsQ0FBQ1EsU0FBZixHQUEyQkwsS0FBSyxDQUFDQSxLQUFqQztBQUNEO0FBQ0YsS0FKRDtBQUtEO0FBRUYsQ0F6QkQ7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOQTtBQUNBekIsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFQLEVBQ0E7OztBQUNBQSxtQkFBTyxDQUFDLHVFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsNkVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxpRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG1FQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsOEpBQUQsQ0FBUCxFQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2NvbXBvbmVudC1qcy9sZWFybmluZy1tb2R1bGUtMi5qcyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci8uL3NyYy9jb21wb25lbnQtanMvbGVhcm5pbmctbW9kdWxlLmpzIiwid2VicGFjazovL2JheWJheWluLWpyLy4vc3JjL2NvbXBvbmVudC1qcy9xdWVyeV9tZXRob2QuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvY29tcG9uZW50LWpzL3RyYW5zbGF0b3IuanMiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvc3R5bGUuc2Nzcz8yZTg4Iiwid2VicGFjazovL2JheWJheWluLWpyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JheWJheWluLWpyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXliYXlpbi1qci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JheWJheWluLWpyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF5YmF5aW4tanIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkb2NfcXVlcnksIGRvY19xdWVyeV9hbGwgfSA9IHJlcXVpcmUoXCIuL3F1ZXJ5X21ldGhvZFwiKTtcclxuXHJcbmRvY19xdWVyeTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBiYXliYXlpbkxvZ28gPSBkb2NfcXVlcnkoXCIuYmF5YmF5aW5fX2xvZ29cIik7IC8vIDwtIGdhbml0b1xyXG4gIGNvbnN0IGNpcmNsZVZlY3RvciA9IGRvY19xdWVyeShcIi5jaXJjbGVfX3ZlY3RvclwiKTtcclxuICBjb25zdCBoYW5kR2VzdHVyZXMgPSBkb2NfcXVlcnlfYWxsKFwiLmhhbmRfX2dlc3R1cmVzXCIpO1xyXG4gIGNvbnN0IGJhbm5lclR3b0ltYWdlID0gZG9jX3F1ZXJ5X2FsbChcIi5iYW5uZXJfXzItaW1hZ2VcIik7XHJcbiAgY29uc3QgY2FyZExpbmtJY29uID0gZG9jX3F1ZXJ5X2FsbChcIi5jYXJkX19saW5rLWljb25cIik7XHJcblxyXG4gIC8vIEJhbm5lciAxIGltYWdlc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZEdlc3R1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBoYW5kR2VzdHVyZXNbaV0uc3JjID0gYC4uL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTEvaGFuZF9nZXN0LSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LnN2Z2A7XHJcbiAgICBoYW5kR2VzdHVyZXNbaV0uY2xhc3NMaXN0LmFkZChcInotaW5kZXgtMVwiKTtcclxuICB9XHJcblxyXG4gIC8vQmFubmVyIDJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbm5lclR3b0ltYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBiYW5uZXJUd29JbWFnZVtpXS5zcmMgPSBgLi4vYXNzZXRzL2xhbmRpbmctcGFnZS9iYW5uZXItMi9pY29uJHtpICsgMX0uc3ZnYDtcclxuICB9XHJcblxyXG4gIC8vQmFubmVyIDNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRMaW5rSWNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgY2FyZExpbmtJY29uW2ldLnNyYyA9IGAuLi9hc3NldHMvbGFuZGluZy1wYWdlL2Jhbm5lci0zL2NhcmQtbGluay1pY29uLSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LnN2Z2A7XHJcbiAgfVxyXG5cclxuICBiYXliYXlpbkxvZ28uc3JjID0gXCIuLi9hc3NldHMvbG9nby9sb2dvLnBuZ1wiO1xyXG4gIGlmIChjaXJjbGVWZWN0b3IgIT09IG51bGwpIHtcclxuICAgIGNpcmNsZVZlY3Rvci5zcmMgPSBcIi4uL2Fzc2V0cy9sYW5kaW5nLXBhZ2UvYmFubmVyLTEvRWxsaXBzZV8xLnN2Z1wiO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IHsgZG9jX3F1ZXJ5LCBkb2NfcXVlcnlfYWxsIH0gPSByZXF1aXJlKFwiLi9xdWVyeV9tZXRob2RcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmF5YmF5aW5JbnRyb0ltYWdlcyA9IGRvY19xdWVyeV9hbGwoXCIuYmF5YmF5aW5fX2RlZi1pbWFnZS1sMlwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJheWJheWluSW50cm9JbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJheWJheWluSW50cm9JbWFnZXNbaV0uc3JjID0gYC4uL2Fzc2V0cy9sZWFybmluZy1tb2R1bGUtMi9pbWFnZS0ke1xyXG4gICAgICBpICsgMVxyXG4gICAgfS5qcGdgO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IHsgZG9jX3F1ZXJ5LCBkb2NfcXVlcnlfYWxsIH0gPSByZXF1aXJlKFwiLi9xdWVyeV9tZXRob2RcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmF5YmF5aW5JbnRyb0ltYWdlcyA9IGRvY19xdWVyeV9hbGwoXCIuYmF5YmF5aW5fX2RlZi1pbWFnZVwiKTtcclxuICBjb25zdCBiYXliYXlpbkN1bHR1cmVBc3NldCA9IGRvY19xdWVyeShcIi5iYXliYXlpbl9fY3VsdHVyZS1hc3NldFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJheWJheWluSW50cm9JbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJheWJheWluSW50cm9JbWFnZXNbaV0uc3JjID0gYC4uL2Fzc2V0cy9sZWFybmluZy1tb2R1bGUvYmF5YmF5aW4tZGVmLSR7XHJcbiAgICAgIGkgKyAxXHJcbiAgICB9LmpwZ2A7XHJcbiAgfVxyXG4gIGlmIChiYXliYXlpbkN1bHR1cmVBc3NldCAhPT0gbnVsbCkge1xyXG4gICAgYmF5YmF5aW5DdWx0dXJlQXNzZXQuc3JjID0gXCIuLi9hc3NldHMvbGVhcm5pbmctbW9kdWxlL2N1bHR1cmVfYXNzZXQuanBnXCI7XHJcbiAgfVxyXG59KTtcclxuIiwiICBleHBvcnQgY29uc3QgZG9jX3F1ZXJ5ID0gKGNsYXNzX25hbWUpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzX25hbWUpO1xyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGRvY19xdWVyeV9hbGwgPSAoY2xhc3NfbmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NfbmFtZSk7XHJcbiAgfTsiLCJjb25zdCBiYXliYXlpbklucHV0Q2hlY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF5YmF5aW5JbnB1dENoZWNrZXJcIik7XHJcbmNvbnN0IGJheWJheWluT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXliYXlpbk91dHB1dFwiKTtcclxuYmF5YmF5aW5JbnB1dENoZWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBudWxsKSB7XHJcbiAgICBsZXQgaXRlbSA9IFtcclxuICAgICAgeyB2YWx1ZTogXCJhXCIsIGtleTogXCJBXCIgIH0sXHJcbiAgICAgIHsgdmFsdWU6IFwiYmFcIiwga2V5OiBcIkJcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBcImthXCIsIGtleTogXCJDXCIgfSxcclxuICAgICAgeyB2YWx1ZTogXCJkYVwiLCBrZXk6IFwiQ1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IFwiZ2FcIiwga2V5OiBcIkNcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBcImhhXCIsIGtleTogXCJDXCIgfSxcclxuICAgICAgeyB2YWx1ZTogXCJsYVwiLCBrZXk6IFwiQ1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IFwibWFcIiwga2V5OiBcIkNcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBcImFcIiwga2V5OiBcIkNcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBcIkNhdFwiLCBrZXk6IFwiQ1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IFwiQ2F0XCIsIGtleTogXCJDXCIgfSxcclxuICAgICAgeyB2YWx1ZTogXCJDYXRcIiwga2V5OiBcIkNcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBcIkNhdFwiLCBrZXk6IFwiQ1wiIH0sXHJcbiAgICAgIHsgdmFsdWU6IFwiQ2F0XCIsIGtleTogXCJDXCIgfSxcclxuICAgIF1cclxuICAgIGl0ZW0uZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSB2YWx1ZS5rZXkgfHwgZS50YXJnZXQudmFsdWUgPT09IHZhbHVlLmtleS50b0xvd2VyQ2FzZSgpKXtcclxuICAgICAgICBiYXliYXlpbk91dHB1dC5pbm5lckhUTUwgPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gXHJcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBDU1NcclxucmVxdWlyZShcIi4vc3R5bGUuc2Nzc1wiKTtcclxuLy8gSlNcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xhbmRpbmctcGFnZVwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZVwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL2xlYXJuaW5nLW1vZHVsZS0yXCIpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnQtanMvdHJhbnNsYXRvclwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50LWpzL21vZGVsL21vZGVsLmpzb25cIik7XHJcbi8vIHJlcXVpcmUoXCIuL2NvbXBvbmVudC1qcy9oYW5kd3JpdGluZ1wiKTtcclxuLy8gcmVxdWlyZShcIi4vY29tcG9uZW50LWpzL21vZGVsXCIpXHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jX3F1ZXJ5IiwiZG9jX3F1ZXJ5X2FsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYXliYXlpbkxvZ28iLCJjaXJjbGVWZWN0b3IiLCJoYW5kR2VzdHVyZXMiLCJiYW5uZXJUd29JbWFnZSIsImNhcmRMaW5rSWNvbiIsImkiLCJsZW5ndGgiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJiYXliYXlpbkludHJvSW1hZ2VzIiwiYmF5YmF5aW5DdWx0dXJlQXNzZXQiLCJjbGFzc19uYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImJheWJheWluSW5wdXRDaGVja2VyIiwiYmF5YmF5aW5PdXRwdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpdGVtIiwia2V5IiwiZm9yRWFjaCIsInRvTG93ZXJDYXNlIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==