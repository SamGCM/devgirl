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
/* harmony import */ var _style_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.jsx */ "./components/UI/Layout/style.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\components\\UI\\Layout\\layout.js";



function Layout(_ref) {
  var _this = this;

  var children = _ref.children;
  var menu = ['Tutoriais', 'Dicas', 'Motivacional', 'Estudos']; // TUDO EM NAVAR VAI SER SUBSTITUIDO POR API

  var navbar = ['/imgProfile.jpeg', '/notification.svg'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_3__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_3__.nav, {
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
              lineNumber: 20,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 32
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Fernando"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_3__.menu, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_3__.ul, {
        children: ["Categorias", menu.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_3__.li, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 32
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudSIsIm5hdmJhciIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFZSxTQUFTQSxNQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBVkMsUUFBVSxRQUFWQSxRQUFVO0FBRXRDLE1BQU1DLElBQUksR0FBRyxDQUFDLFdBQUQsRUFBYyxPQUFkLEVBQXVCLGNBQXZCLEVBQXdDLFNBQXhDLENBQWIsQ0FGc0MsQ0FJdEM7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUMsa0JBQUQsRUFBcUIsbUJBQXJCLENBQWY7QUFFQSxzQkFDSSw4REFBQyxpREFBRDtBQUFBLDRCQUNJLDhEQUFDLDJDQUFEO0FBQUEsNkJBQ0k7QUFBQSxtQkFDS0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWdCO0FBQ3hCLDhCQUFPO0FBQUEsbUNBQ0gsOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFRCxJQUFaO0FBQ0ksbUJBQUssRUFBRSxFQURYO0FBRUksb0JBQU0sRUFBRSxFQUZaO0FBR0ksaUJBQUcsMEJBQW1CQSxJQUFuQjtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxhQUFTQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFPSCxTQVJBLENBREwsZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFpQkksOERBQUMsNENBQUQ7QUFBQSw2QkFFSSw4REFBQywwQ0FBRDtBQUFBLGlDQUNLSixJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBZ0I7QUFDdEIsOEJBQU8sOERBQUMsMENBQUQ7QUFBQSxtQ0FDSCw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNJO0FBQUEsMEJBQUlEO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxhQUFlQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFLSCxTQU5BLENBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixFQTZCS0wsUUE3Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7S0F4Q3VCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiYTM5ODMyMTk5OGEyNjg5YjA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gJy4vc3R5bGUuanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBbJ1R1dG9yaWFpcycsICdEaWNhcycsICdNb3RpdmFjaW9uYWwnICwgJ0VzdHVkb3MnXVxyXG5cclxuICAgIC8vIFRVRE8gRU0gTkFWQVIgVkFJIFNFUiBTVUJTVElUVUlETyBQT1IgQVBJXHJcbiAgICBjb25zdCBuYXZiYXIgPSBbJy9pbWdQcm9maWxlLmpwZWcnLCAnL25vdGlmaWNhdGlvbi5zdmcnXVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUuY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3R5bGUubmF2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXIubWFwKChpdGVtLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YEljb24gZm9yIGF1dGggJHtpdGVtfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZlcm5hbmRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc3R5bGUubmF2PlxyXG4gICAgICAgICAgICA8c3R5bGUubWVudT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlLnVsPkNhdGVnb3JpYXNcclxuICAgICAgICAgICAgICAgICAgICB7bWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzdHlsZS5saSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZS5saT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGUudWw+XHJcbiAgICAgICAgICAgIDwvc3R5bGUubWVudT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvc3R5bGUuY29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==