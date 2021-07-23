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
/* harmony import */ var _style_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.jsx */ "./components/UI/Layout/style.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\UI\\Layout\\layout.js";


function Layout(_ref) {
  var _this = this;

  var children = _ref.children;
  var menu = ['Tutoriais', 'Dicas', 'Motivacional', 'Estudos']; // TUDO EM NAVAR VAI SER SUBSTITUIDO POR API

  var navbar = ['/imgProfile.jpeg', '/notification.svg', 'Fernando'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_2__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_2__.nav, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: navbar.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: item
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_2__.menu, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_2__.ul, {
        children: ["Categorias", menu.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_2__.li, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 32
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudSIsIm5hdmJhciIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7QUFFdEMsTUFBTUMsSUFBSSxHQUFHLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsY0FBdkIsRUFBd0MsU0FBeEMsQ0FBYixDQUZzQyxDQUl0Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxrQkFBRCxFQUFxQixtQkFBckIsRUFBMEMsVUFBMUMsQ0FBZjtBQUVBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQUEsNEJBQ0ksOERBQUMsMkNBQUQ7QUFBQSw2QkFDSTtBQUFBLGtCQUNLQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBZ0I7QUFDeEIsOEJBQU87QUFBQSxzQkFDRkQ7QUFERSxhQUFTQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFHSCxTQUpBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJLDhEQUFDLDRDQUFEO0FBQUEsNkJBRUksOERBQUMsMENBQUQ7QUFBQSxpQ0FDS0osSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWdCO0FBQ3RCLDhCQUFPLDhEQUFDLDBDQUFEO0FBQUEsbUNBQ0gsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDSTtBQUFBLDBCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsYUFBZUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBS0gsU0FOQSxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixFQXNCS0wsUUF0Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7S0FqQ3VCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiN2Q2MmQxMGFmMzllMDkwZWU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gJy4vc3R5bGUuanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBbJ1R1dG9yaWFpcycsICdEaWNhcycsICdNb3RpdmFjaW9uYWwnICwgJ0VzdHVkb3MnXVxyXG5cclxuICAgIC8vIFRVRE8gRU0gTkFWQVIgVkFJIFNFUiBTVUJTVElUVUlETyBQT1IgQVBJXHJcbiAgICBjb25zdCBuYXZiYXIgPSBbJy9pbWdQcm9maWxlLmpwZWcnLCAnL25vdGlmaWNhdGlvbi5zdmcnLCAnRmVybmFuZG8nXVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUuY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUubmF2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXIubWFwKChpdGVtLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc3R5bGUubmF2PlxyXG4gICAgICAgICAgICA8c3R5bGUubWVudT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlLnVsPkNhdGVnb3JpYXNcclxuICAgICAgICAgICAgICAgICAgICB7bWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdHlsZS5saSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZS5saT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGUudWw+XHJcbiAgICAgICAgICAgIDwvc3R5bGUubWVudT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvc3R5bGUuY29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==