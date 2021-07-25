self["webpackHotUpdate_N_E"]("pages/login/sign-up",{

/***/ "./components/User/auth/auth.js":
/*!**************************************!*\
  !*** ./components/User/auth/auth.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auth; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.jsx */ "./components/User/auth/auth.jsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/github.svg */ "./components/User/auth/images/github.svg");
/* harmony import */ var _images_google_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/google.svg */ "./components/User/auth/images/google.svg");
/* harmony import */ var _images_apple_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/apple.svg */ "./components/User/auth/images/apple.svg");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\User\\auth\\auth.js";








function Auth() {
  var _this = this;

  var auth = [_images_github_svg__WEBPACK_IMPORTED_MODULE_4__.default, _images_google_svg__WEBPACK_IMPORTED_MODULE_5__.default, _images_apple_svg__WEBPACK_IMPORTED_MODULE_6__.default];

  function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase_app__WEBPACK_IMPORTED_MODULE_7__.default.auth().signInWithPopup(provider).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.NEXT_PUBLIC_FIREBASE_API_KEY; // The signed-in user info.

      var user = result.user; // ...
    })["catch"](function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential; // ...
    }); // [END auth_google_signin_popup]
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_jsx__WEBPACK_IMPORTED_MODULE_1__.container, {
    children: auth.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: item,
        alt: "Icon for auth ".concat(item),
        width: 50,
        height: 50
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 24
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}
_c = Auth;

var _c;

$RefreshReg$(_c, "Auth");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");



var name = "firebase";
var version = "8.8.0";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.registerVersion(name, version, 'app');
_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION = version;
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2F1dGgvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiQXV0aCIsImF1dGgiLCJnaXRodWIiLCJnb29nbGUiLCJhcHBsZSIsImdvb2dsZVNpZ25JblBvcHVwIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwidG9rZW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwidXNlciIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWFpbCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWU7QUFBQTs7QUFFMUIsTUFBTUMsSUFBSSxHQUFHLENBQUNDLHVEQUFELEVBQVFDLHVEQUFSLEVBQWVDLHNEQUFmLENBQWI7O0FBRUEsV0FBU0MsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDO0FBQ2pDO0FBQ0FDLDBEQUFBLEdBQ0dDLGVBREgsQ0FDbUJGLFFBRG5CLEVBRUdHLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDaEI7QUFDQSxVQUFJQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0MsVUFBeEIsQ0FGZ0IsQ0FJaEI7O0FBQ0EsVUFBSUMsS0FBSyxHQUFHRCxVQUFVLENBQUNFLDRCQUF2QixDQUxnQixDQU1oQjs7QUFDQSxVQUFJQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBbEIsQ0FQZ0IsQ0FRaEI7QUFDRCxLQVhILFdBV1csVUFBQ0MsS0FBRCxFQUFXO0FBQ2xCO0FBQ0EsVUFBSUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLElBQXRCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHSCxLQUFLLENBQUNJLE9BQXpCLENBSGtCLENBSWxCOztBQUNBLFVBQUlDLEtBQUssR0FBR0wsS0FBSyxDQUFDSyxLQUFsQixDQUxrQixDQU1sQjs7QUFDQSxVQUFJVCxVQUFVLEdBQUdJLEtBQUssQ0FBQ0osVUFBdkIsQ0FQa0IsQ0FRbEI7QUFDRCxLQXBCSCxFQUZpQyxDQXVCakM7QUFDRDs7QUFFSCxzQkFDSSw4REFBQyxnREFBRDtBQUFBLGNBRUtWLElBQUksQ0FBQ29CLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdkIsMEJBQU8sOERBQUMsbURBQUQ7QUFFUCxXQUFHLEVBQUVELElBRkU7QUFHUCxXQUFHLDBCQUFtQkEsSUFBbkIsQ0FISTtBQUlQLGFBQUssRUFBRSxFQUpBO0FBS1AsY0FBTSxFQUFFO0FBTEQsU0FDRkMsS0FERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFNSCxLQVBBO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7S0EzQ3VCdkIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1phO0FBQ0c7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBd0I7QUFDeEIsOERBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7OztBQ3hCd0I7QUFDeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4vc2lnbi11cC5hZThkMDNjMTg2MWVhNTI1NzAwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9hdXRoLmpzeCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBnaXRodWIgZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2ZydcclxuaW1wb3J0IGdvb2dsZSBmcm9tICcuL2ltYWdlcy9nb29nbGUuc3ZnJ1xyXG5pbXBvcnQgYXBwbGUgZnJvbSAnLi9pbWFnZXMvYXBwbGUuc3ZnJ1xyXG5cclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgoKXtcclxuXHJcbiAgICBjb25zdCBhdXRoID0gW2dpdGh1Yixnb29nbGUsYXBwbGVdXHJcblxyXG4gICAgZnVuY3Rpb24gZ29vZ2xlU2lnbkluUG9wdXAocHJvdmlkZXIpIHtcclxuICAgICAgICAvLyBbU1RBUlQgYXV0aF9nb29nbGVfc2lnbmluX3BvcHVwXVxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKVxyXG4gICAgICAgICAgLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgLyoqIEB0eXBlIHtmaXJlYmFzZS5hdXRoLk9BdXRoQ3JlZGVudGlhbH0gKi9cclxuICAgICAgICAgICAgdmFyIGNyZWRlbnRpYWwgPSByZXN1bHQuY3JlZGVudGlhbDtcclxuICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSBjcmVkZW50aWFsLk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVk7XHJcbiAgICAgICAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxyXG4gICAgICAgICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAgICAgICAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBlcnJvci5lbWFpbDtcclxuICAgICAgICAgICAgLy8gVGhlIGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gW0VORCBhdXRoX2dvb2dsZV9zaWduaW5fcG9wdXBdXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzdHlsZS5jb250YWluZXI+XHJcbiAgICAgICAgICAgIHsvKiBBZGljaW9uYXIgdGFnIGxpbmsgKi99XHJcbiAgICAgICAgICAgIHthdXRoLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8SW1hZ2UgICBcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggJHtpdGVtfWB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9Lz5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjguOC4wXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZpcmViYXNlLnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XHJcbmZpcmViYXNlLlNES19WRVJTSU9OID0gdmVyc2lvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCAnQGZpcmViYXNlL2F1dGgnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==