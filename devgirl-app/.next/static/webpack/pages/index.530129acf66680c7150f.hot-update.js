self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UI/Layout/layout.js":
/*!****************************************!*\
  !*** ./components/UI/Layout/layout.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imgProfile_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgProfile.jpeg */ "./components/UI/Layout/imgProfile.jpeg");
/* harmony import */ var _notification_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.svg */ "./components/UI/Layout/notification.svg");
/* harmony import */ var _style_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.jsx */ "./components/UI/Layout/style.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\UI\\Layout\\layout.js";





function Layout(_ref) {
  var _this = this;

  var children = _ref.children;
  var menu = ['Tutoriais', 'Dicas', 'Motivacional', 'Estudos']; // TUDO EM NAVAR VAI SER SUBSTITUIDO POR API

  var navbar = [_imgProfile_jpeg__WEBPACK_IMPORTED_MODULE_3__.default, _notification_svg__WEBPACK_IMPORTED_MODULE_4__.default];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.nav, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [navbar.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: item,
              width: 40,
              height: 40,
              alt: "Icon for auth ".concat(item)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 32
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Fernando"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.menu, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.ul, {
        children: ["Categorias", menu.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.li, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 32
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ "./components/UI/Layout/imgProfile.jpeg":
/*!**********************************************!*\
  !*** ./components/UI/Layout/imgProfile.jpeg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/UI/Layout/imgProfile.0847a8d5f14f8f560ad66cbcaed27e7d.jpeg","height":750,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAdEAABAwUBAAAAAAAAAAAAAAADAQQSAAITISJR/9oACAEBAAE/ACNnquTyCLFzBbipv2v/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});

/***/ }),

/***/ "./components/UI/Layout/notification.svg":
/*!***********************************************!*\
  !*** ./components/UI/Layout/notification.svg ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/components/UI/Layout/notification.7a46e10037692608f617930c5eee666f.svg","height":24,"width":24});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0xheW91dC9pbWdQcm9maWxlLmpwZWciLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVUkvTGF5b3V0L25vdGlmaWNhdGlvbi5zdmciXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJtZW51IiwibmF2YmFyIiwiaW1nUHJvZmlsZSIsImljb25Ob3RpZmljYXRpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRWUsU0FBU0EsTUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTtBQUV0QyxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxXQUFELEVBQWMsT0FBZCxFQUF1QixjQUF2QixFQUF3QyxTQUF4QyxDQUFiLENBRnNDLENBSXRDOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDQyxxREFBRCxFQUFhQyxzREFBYixDQUFmO0FBRUEsc0JBQ0ksOERBQUMsaURBQUQ7QUFBQSw0QkFDSSw4REFBQywyQ0FBRDtBQUFBLDZCQUNJO0FBQUEsbUJBQ0tGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFnQjtBQUN4Qiw4QkFBTztBQUFBLG1DQUNILDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBRUQsSUFBWjtBQUNJLG1CQUFLLEVBQUUsRUFEWDtBQUVJLG9CQUFNLEVBQUUsRUFGWjtBQUdJLGlCQUFHLDBCQUFtQkEsSUFBbkI7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsYUFBU0MsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBT0gsU0FSQSxDQURMLGVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBaUJJLDhEQUFDLDRDQUFEO0FBQUEsNkJBRUksOERBQUMsMENBQUQ7QUFBQSxpQ0FDS04sSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWdCO0FBQ3RCLDhCQUFPLDhEQUFDLDBDQUFEO0FBQUEsbUNBQ0gsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDSTtBQUFBLDBCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsYUFBZUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBS0gsU0FOQSxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkosRUE2QktQLFFBN0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUNIO0tBeEN1QkQsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHhCLCtEQUFnQixDQUFDLDBKQUEwSix5aEJBQXloQixFOzs7Ozs7Ozs7Ozs7QUNBcHNCLCtEQUFnQixDQUFDLDBIQUEwSCxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUzMDEyOWFjZjY2NjgwYzcxNTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IGltZ1Byb2ZpbGUgZnJvbSAnLi9pbWdQcm9maWxlLmpwZWcnXHJcbmltcG9ydCBpY29uTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uLnN2ZydcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuL3N0eWxlLmpzeCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7Y2hpbGRyZW59KXtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gWydUdXRvcmlhaXMnLCAnRGljYXMnLCAnTW90aXZhY2lvbmFsJyAsICdFc3R1ZG9zJ11cclxuXHJcbiAgICAvLyBUVURPIEVNIE5BVkFSIFZBSSBTRVIgU1VCU1RJVFVJRE8gUE9SIEFQSVxyXG4gICAgY29uc3QgbmF2YmFyID0gW2ltZ1Byb2ZpbGUsIGljb25Ob3RpZmljYXRpb25dXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzdHlsZS5jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZS5uYXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmJhci5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSWNvbiBmb3IgYXV0aCAke2l0ZW19YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmVybmFuZG9cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zdHlsZS5uYXY+XHJcbiAgICAgICAgICAgIDxzdHlsZS5tZW51PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUudWw+Q2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHN0eWxlLmxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlLmxpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZS51bD5cclxuICAgICAgICAgICAgPC9zdHlsZS5tZW51PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvVUkvTGF5b3V0L2ltZ1Byb2ZpbGUuMDg0N2E4ZDVmMTRmOGY1NjBhZDY2Y2JjYWVkMjdlN2QuanBlZ1wiLFwiaGVpZ2h0XCI6NzUwLFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0tDZ29LQ2dzTURBc1BFQTRRRHhZVUV4TVVGaUlZR2hnYUdDSXpJQ1VnSUNVZ015MDNMQ2tzTnkxUlFEZzRRRkZlVDBwUFhuRmxaWEdQaUkrN3Uvc0JDZ29LQ2dvS0N3d01DdzhRRGhBUEZoUVRFeFFXSWhnYUdCb1lJak1nSlNBZ0pTQXpMVGNzS1N3M0xWRkFPRGhBVVY1UFNrOWVjV1ZsY1krSWo3dTcrLy9DQUJFSUFBZ0FCUU1CSWdBQ0VRRURFUUgveEFBVUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBRi85b0FDQUVCQUFBQUFILy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFCLzlvQUNBRUNFQUFBQUgvL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFREVBQUFBSC8veEFBZEVBQUJBd1VCQUFBQUFBQUFBQUFBQUFBREFRUVNBQUlUSVNKUi85b0FDQUVCQUFFL0FDTm5xdVR5Q0xGekJiaXB2MnYveEFBVkVRRUJBQUFBQUFBQUFBQUFBQUFBQUFBQUVmL2FBQWdCQWdFQlB3Q3YvOFFBRkJFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvYUFBZ0JBd0VCUHdCLy85az1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9jb21wb25lbnRzL1VJL0xheW91dC9ub3RpZmljYXRpb24uN2E0NmUxMDAzNzY5MjYwOGY2MTc5MzBjNWVlZTY2NmYuc3ZnXCIsXCJoZWlnaHRcIjoyNCxcIndpZHRoXCI6MjR9OyJdLCJzb3VyY2VSb290IjoiIn0=