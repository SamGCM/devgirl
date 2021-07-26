self["webpackHotUpdate_N_E"]("pages/login/sign-up",{

/***/ "./components/User/sign-up/form.js":
/*!*****************************************!*\
  !*** ./components/User/sign-up/form.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.jsx */ "./components/User/sign-up/form.jsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\User\\sign-up\\form.js";


function Form() {
  var firebaseCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: "dev-girl.firebaseapp.com",
    projectId: "dev-girl"
  };
  firebase__WEBPACK_IMPORTED_MODULE_2__.default.auth(firebaseCredentials).createUserWithEmailAndPassword(email, password).then(function (userCredential) {
    // Signed in
    var user = userCredential.user; // ...
  })["catch"](function (error) {
    var errorCode = error.code;
    var errorMessage = error.message; // ..
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.form, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.labelName, {
      htmlFor: "name",
      children: ["Nome:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.inputName, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.labelEmail, {
      htmlFor: "email",
      children: ["Email:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.inputEmail, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.labelPassword, {
      htmlFor: "password",
      children: ["Senha:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.inputPassword, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_form_jsx__WEBPACK_IMPORTED_MODULE_1__.inputBtn, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}
_c = Form;

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL3NpZ24tdXAvZm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwiZmlyZWJhc2VDcmVkZW50aWFscyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QVUJMSUNfQVBJX0tFWSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwiZmlyZWJhc2UiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwidXNlciIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBRTNCLE1BQU1DLG1CQUFtQixHQUFHO0FBQ3hCQyxVQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQ0FESTtBQUV4QkMsY0FBVSxFQUFFSCwwQkFGWTtBQUd4QkksYUFBUyxFQUFFSixVQUEyQ0s7QUFIOUIsR0FBNUI7QUFNQUMsb0RBQUEsQ0FBY1IsbUJBQWQsRUFBbUNTLDhCQUFuQyxDQUFrRUMsS0FBbEUsRUFBeUVDLFFBQXpFLEVBQ0tDLElBREwsQ0FDVSxVQUFDQyxjQUFELEVBQW9CO0FBQ3RCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRCxjQUFjLENBQUNDLElBQTFCLENBRnNCLENBR3RCO0FBQ0gsR0FMTCxXQU1XLFVBQUNDLEtBQUQsRUFBVztBQUNkLFFBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxJQUF0QjtBQUNBLFFBQUlDLFlBQVksR0FBR0gsS0FBSyxDQUFDSSxPQUF6QixDQUZjLENBR2Q7QUFDSCxHQVZMO0FBWUEsc0JBQ0ksOERBQUMsMkNBQUQ7QUFBQSw0QkFDSSw4REFBQyxnREFBRDtBQUFpQixhQUFPLEVBQUMsTUFBekI7QUFBQSx1Q0FFSSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSSw4REFBQyxpREFBRDtBQUFrQixhQUFPLEVBQUMsT0FBMUI7QUFBQSx3Q0FFSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFTSSw4REFBQyxvREFBRDtBQUFxQixhQUFPLEVBQUMsVUFBN0I7QUFBQSx3Q0FFSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFhSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7S0FyQ3VCcEIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi9zaWduLXVwLjRhZWIwNjhlZGViMjRmZmYxYWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZSBmcm9tIFwiLi9mb3JtLmpzeFwiXHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IGZpcmViYXNlQ3JlZGVudGlhbHMgPSB7XHJcbiAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QVUJMSUNfQVBJX0tFWSxcclxuICAgICAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxuICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgICAgIH1cclxuXHJcbiAgICBmaXJlYmFzZS5hdXRoKGZpcmViYXNlQ3JlZGVudGlhbHMpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFNpZ25lZCBpblxyXG4gICAgICAgICAgICB2YXIgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIC8vIC4uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3R5bGUuZm9ybT5cclxuICAgICAgICAgICAgPHN0eWxlLmxhYmVsTmFtZSBodG1sRm9yPSduYW1lJz5cclxuICAgICAgICAgICAgICAgIE5vbWU6XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUuaW5wdXROYW1lLz5cclxuICAgICAgICAgICAgPC9zdHlsZS5sYWJlbE5hbWU+XHJcbiAgICAgICAgICAgIDxzdHlsZS5sYWJlbEVtYWlsIGh0bWxGb3I9J2VtYWlsJz5cclxuICAgICAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlLmlucHV0RW1haWwvPlxyXG4gICAgICAgICAgICA8L3N0eWxlLmxhYmVsRW1haWw+XHJcbiAgICAgICAgICAgIDxzdHlsZS5sYWJlbFBhc3N3b3JkIGh0bWxGb3I9J3Bhc3N3b3JkJz5cclxuICAgICAgICAgICAgICAgIFNlbmhhOlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlLmlucHV0UGFzc3dvcmQvPlxyXG4gICAgICAgICAgICA8L3N0eWxlLmxhYmVsUGFzc3dvcmQ+XHJcbiAgICAgICAgICAgIDxzdHlsZS5pbnB1dEJ0bi8+XHJcbiAgICAgICAgPC9zdHlsZS5mb3JtPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==