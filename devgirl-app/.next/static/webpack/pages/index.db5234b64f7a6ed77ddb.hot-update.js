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

  var navbar = [_notification_svg__WEBPACK_IMPORTED_MODULE_4__.default, _imgProfile_jpeg__WEBPACK_IMPORTED_MODULE_3__.default];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.nav, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.navbar, {
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
          style: {
            fontSize: '2rem',
            fontWeight: 'bold'
          },
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudSIsIm5hdmJhciIsImljb25Ob3RpZmljYXRpb24iLCJpbWdQcm9maWxlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVlLFNBQVNBLE1BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7QUFFdEMsTUFBTUMsSUFBSSxHQUFHLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsY0FBdkIsRUFBd0MsU0FBeEMsQ0FBYixDQUZzQyxDQUl0Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQ0Msc0RBQUQsRUFBbUJDLHFEQUFuQixDQUFmO0FBRUEsc0JBQ0ksOERBQUMsaURBQUQ7QUFBQSw0QkFDSSw4REFBQywyQ0FBRDtBQUFBLDZCQUNJLDhEQUFDLDhDQUFEO0FBQUEsbUJBQ0tGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFnQjtBQUN4Qiw4QkFBTztBQUFBLG1DQUNILDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBRUQsSUFBWjtBQUNJLG1CQUFLLEVBQUUsRUFEWDtBQUVJLG9CQUFNLEVBQUUsRUFGWjtBQUdJLGlCQUFHLDBCQUFtQkEsSUFBbkI7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsYUFBU0MsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBT0gsU0FSQSxDQURMLGVBVUk7QUFBSSxlQUFLLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRSxNQUFYO0FBQW1CQyxzQkFBVSxFQUFFO0FBQS9CLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBaUJJLDhEQUFDLDRDQUFEO0FBQUEsNkJBRUksOERBQUMsMENBQUQ7QUFBQSxpQ0FDS1IsSUFBSSxDQUFDSSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWdCO0FBQ3RCLDhCQUFPLDhEQUFDLDBDQUFEO0FBQUEsbUNBQ0gsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDSTtBQUFBLDBCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsYUFBZUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBS0gsU0FOQSxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkosRUE2QktQLFFBN0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUNIO0tBeEN1QkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYjUyMzRiNjRmN2E2ZWQ3N2RkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCBpbWdQcm9maWxlIGZyb20gJy4vaW1nUHJvZmlsZS5qcGVnJ1xyXG5pbXBvcnQgaWNvbk5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbi5zdmcnXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9zdHlsZS5qc3gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSl7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IFsnVHV0b3JpYWlzJywgJ0RpY2FzJywgJ01vdGl2YWNpb25hbCcgLCAnRXN0dWRvcyddXHJcblxyXG4gICAgLy8gVFVETyBFTSBOQVZBUiBWQUkgU0VSIFNVQlNUSVRVSURPIFBPUiBBUElcclxuICAgIGNvbnN0IG5hdmJhciA9IFtpY29uTm90aWZpY2F0aW9uLCBpbWdQcm9maWxlIF1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHN0eWxlLmNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHN0eWxlLm5hdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZS5uYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmJhci5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSWNvbiBmb3IgYXV0aCAke2l0ZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7Zm9udFNpemU6ICcycmVtJywgZm9udFdlaWdodDogJ2JvbGQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZlcm5hbmRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGUubmF2YmFyPlxyXG4gICAgICAgICAgICA8L3N0eWxlLm5hdj5cclxuICAgICAgICAgICAgPHN0eWxlLm1lbnU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZS51bD5DYXRlZ29yaWFzXHJcbiAgICAgICAgICAgICAgICAgICAge21lbnUubWFwKChpdGVtLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3R5bGUubGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGUubGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlLnVsPlxyXG4gICAgICAgICAgICA8L3N0eWxlLm1lbnU+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3N0eWxlLmNvbnRhaW5lcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=