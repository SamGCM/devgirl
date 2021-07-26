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
/* harmony import */ var _pages_api_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pages/api/firebase */ "./pages/api/firebase.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\User\\auth\\auth.js";







function Auth() {
  _pages_api_firebase__WEBPACK_IMPORTED_MODULE_7__.default;

  function login() {
    var provider = new _pages_api_firebase__WEBPACK_IMPORTED_MODULE_7__.default.auth.GoogleAuthProvider();
    _pages_api_firebase__WEBPACK_IMPORTED_MODULE_7__.default.auth().signInWithPopup(provider).then(function (result) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

      var token = credential.accessToken; // The signed-in user info.

      var user = result.user; // ...
    })["catch"](function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // The email of the user's account used.

      var email = error.email; // The firebase.auth.AuthCredential type that was used.

      var credential = error.credential; // ...
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_jsx__WEBPACK_IMPORTED_MODULE_1__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_github_svg__WEBPACK_IMPORTED_MODULE_4__.default,
      alt: "Icon for auth github",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_google_svg__WEBPACK_IMPORTED_MODULE_5__.default,
      alt: "Icon for auth google",
      width: 50,
      height: 50,
      onClick: login()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_apple_svg__WEBPACK_IMPORTED_MODULE_6__.default,
      alt: "Icon for auth apple",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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

/***/ "./pages/api/firebase.js":
/*!*******************************!*\
  !*** ./pages/api/firebase.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: "dev-girl.firebaseapp.com",
  projectId: "dev-girl"
}; // if a Firebase instance doesn't exist, create one

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseCredentials);
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0__.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZpcmViYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXBwL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXV0aC9kaXN0L2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiZmlyZWJhc2UiLCJsb2dpbiIsInByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwidXNlciIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImdpdGh1YiIsImdvb2dsZSIsImFwcGxlIiwiZmlyZWJhc2VDcmVkZW50aWFscyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QVUJMSUNfQVBJX0tFWSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZTtBQUUxQkMsMERBQVE7O0FBRVIsV0FBU0MsS0FBVCxHQUFnQjtBQUNaLFFBQUlDLFFBQVEsR0FBRyxJQUFJRixnRkFBSixFQUFmO0FBRUpBLGlFQUFBLEdBQ0tHLGVBREwsQ0FDcUJELFFBRHJCLEVBRUtFLElBRkwsQ0FFVSxVQUFDQyxNQUFELEVBQVk7QUFDZDtBQUNBLFVBQUlDLFVBQVUsR0FBR0QsTUFBTSxDQUFDQyxVQUF4QixDQUZjLENBSWQ7O0FBQ0EsVUFBSUMsS0FBSyxHQUFHRCxVQUFVLENBQUNFLFdBQXZCLENBTGMsQ0FNZDs7QUFDQSxVQUFJQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBbEIsQ0FQYyxDQVFkO0FBQ0gsS0FYTCxXQVdhLFVBQUNDLEtBQUQsRUFBVztBQUNoQjtBQUNBLFVBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUF0QjtBQUNBLFVBQUlDLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUF6QixDQUhnQixDQUloQjs7QUFDQSxVQUFJQyxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBbEIsQ0FMZ0IsQ0FNaEI7O0FBQ0EsVUFBSVQsVUFBVSxHQUFHSSxLQUFLLENBQUNKLFVBQXZCLENBUGdCLENBUWhCO0FBQ0gsS0FwQkw7QUFxQkM7O0FBRUQsc0JBQ0ksOERBQUMsZ0RBQUQ7QUFBQSw0QkFFSSw4REFBQyxtREFBRDtBQUNJLFNBQUcsRUFBRVUsdURBRFQ7QUFFSSxTQUFHLHdCQUZQO0FBR0ksV0FBSyxFQUFFLEVBSFg7QUFJSSxZQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFPSSw4REFBQyxtREFBRDtBQUNJLFNBQUcsRUFBRUMsdURBRFQ7QUFFSSxTQUFHLHdCQUZQO0FBR0ksV0FBSyxFQUFFLEVBSFg7QUFJSSxZQUFNLEVBQUUsRUFKWjtBQUtJLGFBQU8sRUFBRWhCLEtBQUs7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBY0ksOERBQUMsbURBQUQ7QUFDSSxTQUFHLEVBQUVpQixzREFEVDtBQUVJLFNBQUcsdUJBRlA7QUFHSSxXQUFLLEVBQUUsRUFIWDtBQUlJLFlBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDtLQXBEdUJuQixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCO0FBQ0E7QUFFQSxJQUFNb0IsbUJBQW1CLEdBQUc7QUFDMUJDLFFBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1DQURNO0FBRTFCQyxZQUFVLEVBQUVILDBCQUZjO0FBRzFCSSxXQUFTLEVBQUVKLFVBQTJDSztBQUg1QixDQUE1QixDLENBS0E7O0FBQ0EsSUFBSSxDQUFDMUIsNkRBQUwsRUFBMkI7QUFDekJBLGlFQUFBLENBQXVCbUIsbUJBQXZCO0FBQ0Q7O0FBSUQsK0RBQWVuQixpREFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDO0FBQ0c7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBd0I7QUFDeEIsOERBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7OztBQ3hCd0I7QUFDeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4vc2lnbi11cC44MGVhNzQ1NDY0NjRiODJmOGE1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9hdXRoLmpzeCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBnaXRodWIgZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2ZydcclxuaW1wb3J0IGdvb2dsZSBmcm9tICcuL2ltYWdlcy9nb29nbGUuc3ZnJ1xyXG5pbXBvcnQgYXBwbGUgZnJvbSAnLi9pbWFnZXMvYXBwbGUuc3ZnJ1xyXG5cclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uLy4uLy4uL3BhZ2VzL2FwaS9maXJlYmFzZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgoKXtcclxuXHJcbiAgICBmaXJlYmFzZVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ2luKCl7XHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG4gICAgZmlyZWJhc2UuYXV0aCgpXHJcbiAgICAgICAgLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7ZmlyZWJhc2UuYXV0aC5PQXV0aENyZWRlbnRpYWx9ICovXHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFsID0gcmVzdWx0LmNyZWRlbnRpYWw7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICAgICAgICAgICAgdmFyIHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgICAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbiAgICAgICAgICAgIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBlcnJvci5lbWFpbDtcclxuICAgICAgICAgICAgLy8gVGhlIGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIEFkaWNpb25hciB0YWcgbGluayAqL31cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dpdGh1Yn0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BJY29uIGZvciBhdXRoIGdpdGh1YmB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9Lz5cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dvb2dsZX0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BJY29uIGZvciBhdXRoIGdvb2dsZWB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbigpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2FwcGxlfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggYXBwbGVgfSBcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0gXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfS8+XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXHJcblxyXG5jb25zdCBmaXJlYmFzZUNyZWRlbnRpYWxzID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFVCTElDX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG59XHJcbi8vIGlmIGEgRmlyZWJhc2UgaW5zdGFuY2UgZG9lc24ndCBleGlzdCwgY3JlYXRlIG9uZVxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNyZWRlbnRpYWxzKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCI4LjguMFwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5maXJlYmFzZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xyXG5maXJlYmFzZS5TREtfVkVSU0lPTiA9IHZlcnNpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgJ0BmaXJlYmFzZS9hdXRoJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=