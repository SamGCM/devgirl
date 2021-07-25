self["webpackHotUpdate_N_E"]("pages/login/sign-up",{

/***/ "./pages/login/sign-up-style.jsx":
/*!***************************************!*\
  !*** ./pages/login/sign-up-style.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": function() { return /* binding */ container; },
/* harmony export */   "modal": function() { return /* binding */ modal; },
/* harmony export */   "line": function() { return /* binding */ line; },
/* harmony export */   "p": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "sign-up-style__container",
  componentId: "sc-4aevjo-0"
})(["display:flex;align-items:center;justify-content:center;height:100vh;"]);
var modal = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "sign-up-style__modal",
  componentId: "sc-4aevjo-1"
})(["background:rgb(11,11,11,36%);width:65rem;height:62.9rem;border-radius:50px;display:flex;flex-direction:column;align-items:center;"]);
var line = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "sign-up-style__line",
  componentId: "sc-4aevjo-2"
})(["background:rgb(255,255,255,56%);width:50rem;height:.2rem;"]);
var p = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "sign-up-style__p",
  componentId: "sc-4aevjo-3"
})(["color:#fff;font-size:2.5rem;font-weight:600;margin-bottom:1.9rem;"]);

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

/***/ "./pages/login/sign-up.js":
/*!********************************!*\
  !*** ./pages/login/sign-up.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sign_up_style_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-style.jsx */ "./pages/login/sign-up-style.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_User_sign_up_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/User/sign-up/form.js */ "./components/User/sign-up/form.js");
/* harmony import */ var _components_User_auth_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/User/auth/auth.js */ "./components/User/auth/auth.js");
/* harmony import */ var _components_UI_Container_container_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Container/container.js */ "./components/UI/Container/container.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\pages\\login\\sign-up.js";






function Login() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cadastrar Conta"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sign_up_style_jsx__WEBPACK_IMPORTED_MODULE_1__.container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Container_container_js__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_User_auth_auth_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sign_up_style_jsx__WEBPACK_IMPORTED_MODULE_1__.line, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_User_sign_up_form_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vc2lnbi11cC1zdHlsZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luL3NpZ24tdXAuanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwic3R5bGVkIiwibW9kYWwiLCJsaW5lIiwicCIsIkxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNEVBQWY7QUFPQSxJQUFNQyxLQUFLLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlJQUFYO0FBVUEsSUFBTUUsSUFBSSxHQUFHRixxRUFBSDtBQUFBO0FBQUE7QUFBQSxpRUFBVjtBQU1BLElBQU1HLENBQUMsR0FBR0gsbUVBQUg7QUFBQTtBQUFBO0FBQUEseUVBQVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlA7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0ksS0FBVCxHQUFnQjtBQUMzQixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0ksOERBQUMsMEVBQUQ7QUFBQSxnQ0FDSSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUEsa0JBREo7QUFnQkg7S0FqQnVCQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luL3NpZ24tdXAuZGU5NjE1NjRjZTFkNzcwNDYwNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuYCBcclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTEsMTEsMTEsIDM2JSk7XHJcbiAgICB3aWR0aDogNjVyZW07XHJcbiAgICBoZWlnaHQ6IDYyLjlyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgbGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUsIDU2JSk7XHJcbiAgICB3aWR0aDogNTByZW07XHJcbiAgICBoZWlnaHQ6IC4ycmVtO1xyXG5gIFxyXG5cclxuZXhwb3J0IGNvbnN0IHAgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS45cmVtO1xyXG5gIiwiaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9zaWduLXVwLXN0eWxlLmpzeCdcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyL3NpZ24tdXAvZm9ybS5qcydcclxuaW1wb3J0IEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyL2F1dGgvYXV0aC5qcydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lci9jb250YWluZXIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNhZGFzdHJhciBDb250YTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRoLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUubGluZT48L3N0eWxlLmxpbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9