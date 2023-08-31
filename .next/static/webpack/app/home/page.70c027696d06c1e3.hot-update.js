"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    var _user;\n    _s();\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const userLocal = JSON.parse(localStorage.getItem(\"user\"));\n        console.log(\"userLocal\", userLocal);\n        setUser(userLocal);\n    }, []);\n    const handleLogOut = (e)=>{\n        e.preventDefault();\n        localStorage.setItem(\"user\", JSON.stringify({}));\n        route.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center lg:order-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                href: \"#\",\n                                className: \"text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800\",\n                                children: (_user = user) === null || _user === void 0 ? void 0 : _user.email\n                            }, void 0, false, {\n                                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogOut,\n                                className: \"text-red bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800\",\n                                children: \"\\xc7ıkış Yap\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1\",\n                        id: \"mobile-menu-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Tf3BhNuUOlRez9z9UaJQBnf917U=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUNBO0FBRTVDLE1BQU1JLFNBQVM7UUFzQkFDOztJQXJCYixNQUFNQyxRQUFRTCwwREFBU0E7SUFDdkIsTUFBTSxDQUFDSSxNQUFNRSxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLENBQUM7SUFDbENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sWUFBWUMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDbERDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhTjtRQUN6QkQsUUFBUUM7SUFDVixHQUFHLEVBQUU7SUFDTCxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCTixhQUFhTyxPQUFPLENBQUMsUUFBUVQsS0FBS1UsU0FBUyxDQUFDLENBQUM7UUFDN0NiLE1BQU1jLElBQUksQ0FBQztJQUNiO0lBQ0EscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQ0NDLE1BQUs7Z0NBQ0xILFdBQVU7MkNBRVRsQixRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1zQixLQUFLOzs7Ozs7MENBRWQsOERBQUNDO2dDQUNDQyxTQUFTZDtnQ0FDVFEsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDQzt3QkFDQ0QsV0FBVTt3QkFDVk8sSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBdkNNMUI7O1FBQ1VILHNEQUFTQTs7O0tBRG5CRztBQXdDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXJMb2NhbFwiLCB1c2VyTG9jYWwpO1xuICAgIHNldFVzZXIodXNlckxvY2FsKTtcbiAgfSwgW10pO1xuICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICByb3V0ZS5wdXNoKFwiL1wiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgcHgtNCBsZzpweC02IHB5LTIuNSBkYXJrOmJnLWdyYXktODAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvIG1heC13LXNjcmVlbi14bFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbGc6b3JkZXItMlwiPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWdyYXktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC00IGxnOnB4LTUgcHktMiBsZzpweS0yLjUgbXItMiBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmZvY3VzOnJpbmctZ3JheS04MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlcj8uZW1haWx9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQgYmctcHJpbWFyeS03MDAgaG92ZXI6YmctcHJpbWFyeS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTQgbGc6cHgtNSBweS0yIGxnOnB5LTIuNSBtci0yIGRhcms6YmctcHJpbWFyeS02MDAgZGFyazpob3ZlcjpiZy1wcmltYXJ5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpmb2N1czpyaW5nLXByaW1hcnktODAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgw4fEsWvEscWfIFlhcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGxnOmZsZXggbGc6dy1hdXRvIGxnOm9yZGVyLTFcIlxuICAgICAgICAgICAgaWQ9XCJtb2JpbGUtbWVudS0yXCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsInVzZXIiLCJyb3V0ZSIsInNldFVzZXIiLCJ1c2VyTG9jYWwiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ091dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwdXNoIiwiaGVhZGVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImhyZWYiLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.js\n"));

/***/ })

});