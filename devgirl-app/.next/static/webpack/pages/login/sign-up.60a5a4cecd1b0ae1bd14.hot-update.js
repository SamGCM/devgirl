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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_github_svg__WEBPACK_IMPORTED_MODULE_4__.default,
      alt: "Icon for auth github",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_google_svg__WEBPACK_IMPORTED_MODULE_5__.default,
      alt: "Icon for auth google",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiYXV0aCIsImdpdGh1YiIsImdvb2dsZSIsImFwcGxlIiwiZ29vZ2xlU2lnbkluUG9wdXAiLCJwcm92aWRlciIsImZpcmViYXNlIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJ0b2tlbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJ1c2VyIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZTtBQUUxQixNQUFNQyxJQUFJLEdBQUcsQ0FBQ0MsdURBQUQsRUFBUUMsdURBQVIsRUFBZUMsc0RBQWYsQ0FBYjs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUM7QUFDakM7QUFDQUMsMERBQUEsR0FDR0MsZUFESCxDQUNtQkYsUUFEbkIsRUFFR0csSUFGSCxDQUVRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQjtBQUNBLFVBQUlDLFVBQVUsR0FBR0QsTUFBTSxDQUFDQyxVQUF4QixDQUZnQixDQUloQjs7QUFDQSxVQUFJQyxLQUFLLEdBQUdELFVBQVUsQ0FBQ0UsNEJBQXZCLENBTGdCLENBTWhCOztBQUNBLFVBQUlDLElBQUksR0FBR0osTUFBTSxDQUFDSSxJQUFsQixDQVBnQixDQVFoQjtBQUNELEtBWEgsV0FXVyxVQUFDQyxLQUFELEVBQVc7QUFDbEI7QUFDQSxVQUFJQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsSUFBdEI7QUFDQSxVQUFJQyxZQUFZLEdBQUdILEtBQUssQ0FBQ0ksT0FBekIsQ0FIa0IsQ0FJbEI7O0FBQ0EsVUFBSUMsS0FBSyxHQUFHTCxLQUFLLENBQUNLLEtBQWxCLENBTGtCLENBTWxCOztBQUNBLFVBQUlULFVBQVUsR0FBR0ksS0FBSyxDQUFDSixVQUF2QixDQVBrQixDQVFsQjtBQUNELEtBcEJILEVBRmlDLENBdUJqQztBQUNEOztBQUVILHNCQUNJLDhEQUFDLGdEQUFEO0FBQUEsNEJBRUksOERBQUMsbURBQUQ7QUFDSSxTQUFHLEVBQUVULHVEQURUO0FBRUksU0FBRyx3QkFGUDtBQUdJLFdBQUssRUFBRSxFQUhYO0FBSUksWUFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBT0ksOERBQUMsbURBQUQ7QUFDSSxTQUFHLEVBQUVDLHVEQURUO0FBRUksU0FBRyx3QkFGUDtBQUdJLFdBQUssRUFBRSxFQUhYO0FBSUksWUFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBWUksOERBQUMsbURBQUQ7QUFDSSxTQUFHLEVBQUVDLHNEQURUO0FBRUksU0FBRyx1QkFGUDtBQUdJLFdBQUssRUFBRSxFQUhYO0FBSUksWUFBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIO0tBbER1QkosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi9zaWduLXVwLjYwYTVhNGNlY2QxYjBhZTFiZDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuL2F1dGguanN4J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IGdpdGh1YiBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJ1xyXG5pbXBvcnQgZ29vZ2xlIGZyb20gJy4vaW1hZ2VzL2dvb2dsZS5zdmcnXHJcbmltcG9ydCBhcHBsZSBmcm9tICcuL2ltYWdlcy9hcHBsZS5zdmcnXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpe1xyXG5cclxuICAgIGNvbnN0IGF1dGggPSBbZ2l0aHViLGdvb2dsZSxhcHBsZV1cclxuXHJcbiAgICBmdW5jdGlvbiBnb29nbGVTaWduSW5Qb3B1cChwcm92aWRlcikge1xyXG4gICAgICAgIC8vIFtTVEFSVCBhdXRoX2dvb2dsZV9zaWduaW5fcG9wdXBdXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpXHJcbiAgICAgICAgICAuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAvKiogQHR5cGUge2ZpcmViYXNlLmF1dGguT0F1dGhDcmVkZW50aWFsfSAqL1xyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbCA9IHJlc3VsdC5jcmVkZW50aWFsO1xyXG4gICAgICBcclxuICAgICAgICAgICAgLy8gVGhpcyBnaXZlcyB5b3UgYSBHb29nbGUgQWNjZXNzIFRva2VuLiBZb3UgY2FuIHVzZSBpdCB0byBhY2Nlc3MgdGhlIEdvb2dsZSBBUEkuXHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGNyZWRlbnRpYWwuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWTtcclxuICAgICAgICAgICAgLy8gVGhlIHNpZ25lZC1pbiB1c2VyIGluZm8uXHJcbiAgICAgICAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xyXG4gICAgICAgICAgICAvLyBUaGUgZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCB0eXBlIHRoYXQgd2FzIHVzZWQuXHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyBbRU5EIGF1dGhfZ29vZ2xlX3NpZ25pbl9wb3B1cF1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIEFkaWNpb25hciB0YWcgbGluayAqL31cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dpdGh1Yn0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BJY29uIGZvciBhdXRoIGdpdGh1YmB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9Lz5cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dvb2dsZX0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BJY29uIGZvciBhdXRoIGdvb2dsZWB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9Lz5cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2FwcGxlfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggYXBwbGVgfSBcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0gXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfS8+XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9