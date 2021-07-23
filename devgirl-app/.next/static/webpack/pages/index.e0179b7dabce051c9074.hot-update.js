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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.nav, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_5__.navbar, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _notification_svg__WEBPACK_IMPORTED_MODULE_4__.default,
          width: 40,
          height: 40,
          alt: "Notification Icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _imgProfile_jpeg__WEBPACK_IMPORTED_MODULE_3__.default,
            width: 40,
            height: 40,
            alt: "Image profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          style: {
            fontSize: '2rem',
            fontWeight: 'bold'
          },
          children: "Fernando"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
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
                lineNumber: 42,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 32
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudSIsImljb25Ob3RpZmljYXRpb24iLCJpbWdQcm9maWxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVlLFNBQVNBLE1BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7QUFFdEMsTUFBTUMsSUFBSSxHQUFHLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsY0FBdkIsRUFBd0MsU0FBeEMsQ0FBYixDQUZzQyxDQUl0Qzs7QUFHQSxzQkFDSSw4REFBQyxpREFBRDtBQUFBLDRCQUNJLDhEQUFDLDJDQUFEO0FBQUEsNkJBQ0ksOERBQUMsOENBQUQ7QUFBQSxnQ0FDQSw4REFBQyxtREFBRDtBQUFPLGFBQUcsRUFBRUMsc0RBQVo7QUFDb0IsZUFBSyxFQUFFLEVBRDNCO0FBRW9CLGdCQUFNLEVBQUUsRUFGNUI7QUFHb0IsYUFBRztBQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBTUk7QUFBQSxpQ0FBSSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBRUMscURBQVo7QUFDWSxpQkFBSyxFQUFFLEVBRG5CO0FBRVksa0JBQU0sRUFBRSxFQUZwQjtBQUdZLGVBQUc7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQVdJO0FBQUksZUFBSyxFQUFFO0FBQUNDLG9CQUFRLEVBQUUsTUFBWDtBQUFtQkMsc0JBQVUsRUFBRTtBQUEvQixXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWtCSSw4REFBQyw0Q0FBRDtBQUFBLDZCQUVJLDhEQUFDLDBDQUFEO0FBQUEsaUNBQ0tKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFnQjtBQUN0Qiw4QkFBTyw4REFBQywwQ0FBRDtBQUFBLG1DQUNILDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0k7QUFBQSwwQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLGFBQWVDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUtILFNBTkEsQ0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLEVBOEJLUixRQTlCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDtLQXpDdUJELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTAxNzliN2RhYmNlMDUxYzkwNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgaW1nUHJvZmlsZSBmcm9tICcuL2ltZ1Byb2ZpbGUuanBlZydcclxuaW1wb3J0IGljb25Ob3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24uc3ZnJ1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gJy4vc3R5bGUuanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBbJ1R1dG9yaWFpcycsICdEaWNhcycsICdNb3RpdmFjaW9uYWwnICwgJ0VzdHVkb3MnXVxyXG5cclxuICAgIC8vIFRVRE8gRU0gTkFWQVIgVkFJIFNFUiBTVUJTVElUVUlETyBQT1IgQVBJXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUuY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUubmF2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlLm5hdmJhcj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ljb25Ob3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgTm90aWZpY2F0aW9uIEljb25gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxJbWFnZSBzcmM9e2ltZ1Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSW1hZ2UgcHJvZmlsZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e2ZvbnRTaXplOiAnMnJlbScsIGZvbnRXZWlnaHQ6ICdib2xkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGZXJuYW5kb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlLm5hdmJhcj5cclxuICAgICAgICAgICAgPC9zdHlsZS5uYXY+XHJcbiAgICAgICAgICAgIDxzdHlsZS5tZW51PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUudWw+Q2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHN0eWxlLmxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlLmxpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZS51bD5cclxuICAgICAgICAgICAgPC9zdHlsZS5tZW51PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9