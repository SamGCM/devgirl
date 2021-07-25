self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UI/post/item.js":
/*!************************************!*\
  !*** ./components/UI/post/item.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ItemPost; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/UI/post/style.jsx");
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/image */ "./node_modules/next/dist/client/image.js");
/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgProfile_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgProfile.jpeg */ "./components/UI/post/imgProfile.jpeg");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\UI\\post\\item.js";



function ItemPost() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.flexBox, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.containerImg, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _imgProfile_jpeg__WEBPACK_IMPORTED_MODULE_3__.default,
          width: 70,
          height: 90,
          alt: "Image profile",
          objectFit: 'layout:"responsive"'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.userName, {
        children: "Fernando"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.titlePost, {
        children: "A import\xE2ncia de uma boa base na Programa\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.descriptionPost, {
        children: "Lorem ipsum lacinia ad egestas tellus, imperdiet sem pretium purus. Lorem ipsum lacinia ad egestas tellus, imperdiet sem prasas."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = ItemPost;

var _c;

$RefreshReg$(_c, "ItemPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9wb3N0L2l0ZW0uanMiXSwibmFtZXMiOlsiSXRlbVBvc3QiLCJpbWdQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFtQjtBQUM5QixzQkFDSSw4REFBQywyQ0FBRDtBQUFBLDRCQUNJLDhEQUFDLDZDQUFEO0FBQUEsOEJBQ0ksOERBQUMsZ0RBQUQ7QUFBQSwrQkFDSSw4REFBQywrREFBRDtBQUNJLGFBQUcsRUFBRUMscURBRFQ7QUFFSSxlQUFLLEVBQUUsRUFGWDtBQUdJLGdCQUFNLEVBQUUsRUFIWjtBQUlJLGFBQUcsaUJBSlA7QUFLSSxtQkFBUyxFQUFFO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVVJLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFhSSw4REFBQyw2Q0FBRDtBQUFBLDhCQUNJLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIO0tBekJ1QkQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDUwMDUxMzM5OTcwMjIyMTZmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvZGlzdC9jbGllbnQvaW1hZ2UnXHJcbmltcG9ydCBpbWdQcm9maWxlIGZyb20gJy4vaW1nUHJvZmlsZS5qcGVnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbVBvc3QoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUuZmxleEJveD5cclxuICAgICAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZS5jb250YWluZXJJbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nUHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BJbWFnZSBwcm9maWxlYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PXsnbGF5b3V0OlwicmVzcG9uc2l2ZVwiJ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZS5jb250YWluZXJJbWc+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUudXNlck5hbWU+RmVybmFuZG88L3N0eWxlLnVzZXJOYW1lPlxyXG4gICAgICAgICAgICA8L3N0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZS50aXRsZVBvc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgQSBpbXBvcnTDom5jaWEgZGUgdW1hIGJvYSBiYXNlIG5hIFByb2dyYW1hw6fDo29cclxuICAgICAgICAgICAgICAgIDwvc3R5bGUudGl0bGVQb3N0PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlLmRlc2NyaXB0aW9uUG9zdD5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGxhY2luaWEgYWQgZWdlc3RhcyB0ZWxsdXMsIGltcGVyZGlldCBzZW0gcHJldGl1bSBwdXJ1cy4gTG9yZW0gaXBzdW0gbGFjaW5pYSBhZCBlZ2VzdGFzIHRlbGx1cywgaW1wZXJkaWV0IHNlbSBwcmFzYXMuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlLmRlc2NyaXB0aW9uUG9zdD5cclxuICAgICAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICAgICAgPC9zdHlsZS5mbGV4Qm94PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==