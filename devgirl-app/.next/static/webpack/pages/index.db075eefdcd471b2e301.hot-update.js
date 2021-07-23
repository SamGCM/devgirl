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
  var menu = ['Tutoriais', 'Dicas', 'Motivacional', 'Estudos'];
  var navbar = ['./images/'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style_jsx__WEBPACK_IMPORTED_MODULE_2__.container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
                lineNumber: 23,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 32
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ "./components/UI/Layout/style.jsx":
/*!****************************************!*\
  !*** ./components/UI/Layout/style.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": function() { return /* binding */ container; },
/* harmony export */   "menu": function() { return /* binding */ menu; },
/* harmony export */   "ul": function() { return /* binding */ ul; },
/* harmony export */   "li": function() { return /* binding */ li; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "style__container",
  componentId: "sc-a0q1za-0"
})(["width:90vw;height:70.6rem;background:rgb(11,11,11,36%);border-radius:50px;"]);
var menu = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "style__menu",
  componentId: "sc-a0q1za-1"
})(["width:30vw;height:60rem;border-top:2px solid rgba(255,255,255,0.56);border-right:2px solid rgba(255,255,255,0.56);border-bottom-left-radius:50px;margin-top:10.3rem;"]);
var ul = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "style__ul",
  componentId: "sc-a0q1za-2"
})(["font-weight:300;font-size:2rem;color:rgba(255,255,255,0.5);margin-top:7rem;"]);
var li = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "style__li",
  componentId: "sc-a0q1za-3"
})(["font-weight:normal;font-size:2.2rem;color:#fff;margin:1rem 3rem;"]);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Container_container_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/Container/container.js */ "./components/UI/Container/container.js");
/* harmony import */ var _components_UI_Layout_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/Layout/layout.js */ "./components/UI/Layout/layout.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Samue\\Documents\\Github\\devgirl\\devgirl-app\\pages\\index.js";





function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Dev-Girl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Container_container_js__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Layout_layout_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0xheW91dC9zdHlsZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwibWVudSIsIm5hdmJhciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbnRhaW5lciIsInN0eWxlZCIsInVsIiwibGkiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTtBQUV0QyxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxXQUFELEVBQWMsT0FBZCxFQUF1QixjQUF2QixFQUF3QyxTQUF4QyxDQUFiO0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUMsV0FBRCxDQUFmO0FBRUEsc0JBQ0ksOERBQUMsaURBQUQ7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSSw4REFBQyw0Q0FBRDtBQUFBLDZCQUVJLDhEQUFDLDBDQUFEO0FBQUEsaUNBQ0tELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFnQjtBQUN0Qiw4QkFBTyw4REFBQywwQ0FBRDtBQUFBLG1DQUNILDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0k7QUFBQSwwQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLGFBQWVDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUtILFNBTkEsQ0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosRUFrQktMLFFBbEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JIO0tBNUJ1QkQsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFFTyxJQUFNTyxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtGQUFmO0FBT0EsSUFBTU4sSUFBSSxHQUFHTSxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0S0FBVjtBQVNBLElBQU1DLEVBQUUsR0FBR0Qsb0VBQUg7QUFBQTtBQUFBO0FBQUEsbUZBQVI7QUFPQSxJQUFNRSxFQUFFLEdBQUdGLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHdFQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJQO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFZSxTQUFTRyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsMEVBQUQ7QUFBQSw2QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUEsa0JBREY7QUFlRDtLQWhCdUJBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIwNzVlZWZkY2Q0NzFiMmUzMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9zdHlsZS5qc3gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSl7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IFsnVHV0b3JpYWlzJywgJ0RpY2FzJywgJ01vdGl2YWNpb25hbCcgLCAnRXN0dWRvcyddXHJcblxyXG4gICAgY29uc3QgbmF2YmFyID0gWycuL2ltYWdlcy8nXVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c3R5bGUuY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxzdHlsZS5tZW51PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUudWw+Q2F0ZWdvcmlhc1xyXG4gICAgICAgICAgICAgICAgICAgIHttZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHN0eWxlLmxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlLmxpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZS51bD5cclxuICAgICAgICAgICAgPC9zdHlsZS5tZW51PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9zdHlsZS5jb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGhlaWdodDogNzAuNnJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMSwxMSwxMSwgMzYlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBtZW51ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgaGVpZ2h0OiA2MHJlbTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMC4zcmVtO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgdWwgPSBzdHlsZWQudWxgXHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBsaSA9IHN0eWxlZC5saWBcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAxcmVtIDNyZW07XHJcbmAiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvVUkvQ29udGFpbmVyL2NvbnRhaW5lci5qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9VSS9MYXlvdXQvbGF5b3V0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RGV2LUdpcmw8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8TGF5b3V0PlxuXG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgXG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=