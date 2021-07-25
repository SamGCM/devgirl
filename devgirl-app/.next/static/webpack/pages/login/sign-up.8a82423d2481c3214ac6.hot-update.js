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
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_google_svg__WEBPACK_IMPORTED_MODULE_5__.default,
      alt: "Icon for auth google",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: _images_apple_svg__WEBPACK_IMPORTED_MODULE_6__.default,
      alt: "Icon for auth apple",
      width: 50,
      height: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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

/***/ "./components/User/auth/auth.jsx":
/*!***************************************!*\
  !*** ./components/User/auth/auth.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": function() { return /* binding */ container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "auth__container",
  componentId: "sc-1f7ahtx-0"
})(["display:flex;justify-content:space-between;width:44.0rem;margin-top:4.5rem;margin-bottom:5rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qc3giXSwibmFtZXMiOlsiQXV0aCIsImdpdGh1YiIsImdvb2dsZSIsImFwcGxlIiwiY29udGFpbmVyIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLElBQVQsR0FBZTtBQUcxQixzQkFDSSw4REFBQyxnREFBRDtBQUFBLDRCQUVJLDhEQUFDLG1EQUFEO0FBQ0ksU0FBRyxFQUFFQyx1REFEVDtBQUVJLFNBQUcsd0JBRlA7QUFHSSxXQUFLLEVBQUUsRUFIWDtBQUlJLFlBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU9JLDhEQUFDLG1EQUFEO0FBQ0ksU0FBRyxFQUFFQyx1REFEVDtBQUVJLFNBQUcsd0JBRlA7QUFHSSxXQUFLLEVBQUUsRUFIWDtBQUlJLFlBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVlJLDhEQUFDLG1EQUFEO0FBQ0ksU0FBRyxFQUFFQyxzREFEVDtBQUVJLFNBQUcsdUJBRlA7QUFHSSxXQUFLLEVBQUUsRUFIWDtBQUlJLFlBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDtLQXZCdUJILEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCO0FBRU8sSUFBTUksU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxzR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi9zaWduLXVwLjhhODI0MjNkMjQ4MWMzMjE0YWM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuL2F1dGguanN4J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IGdpdGh1YiBmcm9tICcuL2ltYWdlcy9naXRodWIuc3ZnJ1xyXG5pbXBvcnQgZ29vZ2xlIGZyb20gJy4vaW1hZ2VzL2dvb2dsZS5zdmcnXHJcbmltcG9ydCBhcHBsZSBmcm9tICcuL2ltYWdlcy9hcHBsZS5zdmcnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGgoKXtcclxuXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUuY29udGFpbmVyPlxyXG4gICAgICAgICAgICB7LyogQWRpY2lvbmFyIHRhZyBsaW5rICovfVxyXG4gICAgICAgICAgICA8SW1hZ2UgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z2l0aHVifSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggZ2l0aHViYH0gXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH0vPlxyXG4gICAgICAgICAgICA8SW1hZ2UgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z29vZ2xlfSBcclxuICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggZ29vZ2xlYH0gXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH0vPlxyXG4gICAgICAgICAgICA8SW1hZ2UgICBcclxuICAgICAgICAgICAgICAgIHNyYz17YXBwbGV9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXtgSWNvbiBmb3IgYXV0aCBhcHBsZWB9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9Lz5cclxuICAgICAgICA8L3N0eWxlLmNvbnRhaW5lcj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogNDQuMHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDQuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9