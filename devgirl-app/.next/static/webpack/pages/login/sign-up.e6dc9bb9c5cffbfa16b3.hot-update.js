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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_jsx__WEBPACK_IMPORTED_MODULE_1__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_github_svg__WEBPACK_IMPORTED_MODULE_4__.default,
      alt: "Icon for auth github",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_google_svg__WEBPACK_IMPORTED_MODULE_5__.default,
      alt: "Icon for auth google",
      width: 50,
      height: 50,
      onClick: login()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_apple_svg__WEBPACK_IMPORTED_MODULE_6__.default,
      alt: "Icon for auth apple",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiZ2l0aHViIiwiZ29vZ2xlIiwibG9naW4iLCJhcHBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWU7QUFJMUIsc0JBQ0ksOERBQUMsZ0RBQUQ7QUFBQSw0QkFFSSw4REFBQyxtREFBRDtBQUNJLFNBQUcsRUFBRUMsdURBRFQ7QUFFSSxTQUFHLHdCQUZQO0FBR0ksV0FBSyxFQUFFLEVBSFg7QUFJSSxZQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFRSSw4REFBQyxtREFBRDtBQUNJLFNBQUcsRUFBRUMsdURBRFQ7QUFFSSxTQUFHLHdCQUZQO0FBR0ksV0FBSyxFQUFFLEVBSFg7QUFJSSxZQUFNLEVBQUUsRUFKWjtBQUtJLGFBQU8sRUFBRUMsS0FBSztBQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFjSSw4REFBQyxtREFBRDtBQUNJLFNBQUcsRUFBRUMsc0RBRFQ7QUFFSSxTQUFHLHVCQUZQO0FBR0ksV0FBSyxFQUFFLEVBSFg7QUFJSSxZQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7S0ExQnVCSixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luL3NpZ24tdXAuZTZkYzliYjljNWNmZmJmYTE2YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlIGZyb20gJy4vYXV0aC5qc3gnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgZ2l0aHViIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5zdmcnXHJcbmltcG9ydCBnb29nbGUgZnJvbSAnLi9pbWFnZXMvZ29vZ2xlLnN2ZydcclxuaW1wb3J0IGFwcGxlIGZyb20gJy4vaW1hZ2VzL2FwcGxlLnN2ZydcclxuXHJcbmltcG9ydCB7ZmlyZWJhc2UsIGF1dGh9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL2FwaS9maXJlYmFzZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgoKXtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgey8qIEFkaWNpb25hciB0YWcgbGluayAqL31cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2dpdGh1Yn0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BJY29uIGZvciBhdXRoIGdpdGh1YmB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW1hZ2UgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z29vZ2xlfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggZ29vZ2xlYH0gXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luKCl9Lz5cclxuICAgICAgICAgICAgPEltYWdlICAgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2FwcGxlfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggYXBwbGVgfSBcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0gXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfS8+XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9