"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Tasks.js":
/*!*****************************!*\
  !*** ./components/Tasks.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"(app-pages-browser)/./components/Modal.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/api */ \"(app-pages-browser)/./app/api/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Task = (param)=>{\n    let { task } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [openModalEdit, setOpenModalEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openModalDeleted, setOpenModalDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [taskToEdit, setTaskToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task.text);\n    const handleSubmitEditTodo = async (e)=>{\n        e.preventDefault();\n        await (0,_app_api__WEBPACK_IMPORTED_MODULE_4__.editTodo)({\n            id: task.id,\n            text: taskToEdit\n        });\n        setOpenModalEdit(false);\n        router.refresh();\n    };\n    const handleDeleteTask = async (id)=>{\n        await (0,_app_api__WEBPACK_IMPORTED_MODULE_4__.deleteTodo)(id);\n        setOpenModalDeleted(false);\n        router.refresh();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"w-full\",\n                children: task.text\n            }, void 0, false, {\n                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                className: \"flex gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiEdit, {\n                        onClick: ()=>setOpenModalEdit(true),\n                        cursor: \"pointer\",\n                        className: \"text-blue-500\",\n                        size: 25\n                    }, void 0, false, {\n                        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        modalOpen: openModalEdit,\n                        setModalOpen: setOpenModalEdit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmitEditTodo,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-bold text-lg\",\n                                    children: \"G\\xf6rev G\\xfcncelle\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-action\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            value: taskToEdit,\n                                            onChange: (e)=>setTaskToEdit(e.target.value),\n                                            type: \"text\",\n                                            placeholder: \"Type here\",\n                                            className: \"input input-bordered w-full\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"btn\",\n                                            children: \"Submit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiTrash2, {\n                        onClick: ()=>setOpenModalDeleted(true),\n                        cursor: \"pointer\",\n                        className: \"text-red-500\",\n                        size: 25\n                    }, void 0, false, {\n                        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        modalOpen: openModalDeleted,\n                        setModalOpen: setOpenModalDeleted,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg\",\n                                children: \"Are you sure, you want to delete this task?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"modal-action\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleDeleteTask(task.id),\n                                    className: \"btn\",\n                                    children: \"Yes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, task.id, true, {\n        fileName: \"/Users/hakanacar/Documents/GitHub/nextJs-todo/components/Tasks.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"R0bEsvns7l9Tm8kUXPDvlVpLA50=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFza3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDRDtBQUN0QjtBQUNnQjtBQUNNO0FBQ2xELE1BQU1RLE9BQU87UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3BCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNZLGtCQUFrQkMsb0JBQW9CLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQ1EsS0FBS1EsSUFBSTtJQUV0RCxNQUFNQyx1QkFBdUIsT0FBT0M7UUFDbENBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTWIsa0RBQVFBLENBQUM7WUFDYmMsSUFBSVosS0FBS1ksRUFBRTtZQUNYSixNQUFNRjtRQUNSO1FBQ0FILGlCQUFpQjtRQUNqQkYsT0FBT1ksT0FBTztJQUNoQjtJQUVBLE1BQU1DLG1CQUFtQixPQUFPRjtRQUM5QixNQUFNZixvREFBVUEsQ0FBQ2U7UUFDakJQLG9CQUFvQjtRQUNwQkosT0FBT1ksT0FBTztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFVakIsS0FBS1EsSUFBSTs7Ozs7OzBCQUNqQyw4REFBQ1E7Z0JBQUdDLFdBQVU7O2tDQUNaLDhEQUFDeEIsa0RBQU1BO3dCQUNMeUIsU0FBUyxJQUFNZixpQkFBaUI7d0JBQ2hDZ0IsUUFBTzt3QkFDUEYsV0FBVTt3QkFDVkcsTUFBTTs7Ozs7O2tDQUVSLDhEQUFDekIsOENBQUtBO3dCQUFDMEIsV0FBV25CO3dCQUFlb0IsY0FBY25CO2tDQUM3Qyw0RUFBQ29COzRCQUFLQyxVQUFVZjs7OENBQ2QsOERBQUNnQjtvQ0FBR1IsV0FBVTs4Q0FBb0I7Ozs7Ozs4Q0FDbEMsOERBQUNTO29DQUFJVCxXQUFVOztzREFDYiw4REFBQ1U7NENBQ0NDLE9BQU90Qjs0Q0FDUHVCLFVBQVUsQ0FBQ25CLElBQU1ILGNBQWNHLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7NENBQzdDRyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNaZixXQUFVOzs7Ozs7c0RBRVosOERBQUNnQjs0Q0FBT0YsTUFBSzs0Q0FBU2QsV0FBVTtzREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTVDLDhEQUFDdkIsb0RBQVFBO3dCQUNQd0IsU0FBUyxJQUFNYixvQkFBb0I7d0JBQ25DYyxRQUFPO3dCQUNQRixXQUFVO3dCQUNWRyxNQUFNOzs7Ozs7a0NBRVIsOERBQUN6Qiw4Q0FBS0E7d0JBQUMwQixXQUFXakI7d0JBQWtCa0IsY0FBY2pCOzswQ0FDaEQsOERBQUNvQjtnQ0FBR1IsV0FBVTswQ0FBVTs7Ozs7OzBDQUd4Qiw4REFBQ1M7Z0NBQUlULFdBQVU7MENBQ2IsNEVBQUNnQjtvQ0FBT2YsU0FBUyxJQUFNSixpQkFBaUJkLEtBQUtZLEVBQUU7b0NBQUdLLFdBQVU7OENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXJDakVqQixLQUFLWSxFQUFFOzs7OztBQTZDcEI7R0FwRU1iOztRQUNXSCxzREFBU0E7OztLQURwQkc7QUFzRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrcy5qcz9iYjllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlFZGl0LCBGaVRyYXNoMiB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBkZWxldGVUb2RvLCBlZGl0VG9kbyB9IGZyb20gXCIuLi9hcHAvYXBpXCI7XG5jb25zdCBUYXNrID0gKHsgdGFzayB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbb3Blbk1vZGFsRWRpdCwgc2V0T3Blbk1vZGFsRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTW9kYWxEZWxldGVkLCBzZXRPcGVuTW9kYWxEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Rhc2tUb0VkaXQsIHNldFRhc2tUb0VkaXRdID0gdXNlU3RhdGUodGFzay50ZXh0KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0VG9kbyA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGVkaXRUb2RvKHtcbiAgICAgIGlkOiB0YXNrLmlkLFxuICAgICAgdGV4dDogdGFza1RvRWRpdCxcbiAgICB9KTtcbiAgICBzZXRPcGVuTW9kYWxFZGl0KGZhbHNlKTtcbiAgICByb3V0ZXIucmVmcmVzaCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSBhc3luYyAoaWQpID0+IHtcbiAgICBhd2FpdCBkZWxldGVUb2RvKGlkKTtcbiAgICBzZXRPcGVuTW9kYWxEZWxldGVkKGZhbHNlKTtcbiAgICByb3V0ZXIucmVmcmVzaCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHRyIGtleT17dGFzay5pZH0+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwidy1mdWxsXCI+e3Rhc2sudGV4dH08L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cImZsZXggZ2FwLTVcIj5cbiAgICAgICAgPEZpRWRpdFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2RhbEVkaXQodHJ1ZSl9XG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiXG4gICAgICAgICAgc2l6ZT17MjV9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb2RhbCBtb2RhbE9wZW49e29wZW5Nb2RhbEVkaXR9IHNldE1vZGFsT3Blbj17c2V0T3Blbk1vZGFsRWRpdH0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXRUb2RvfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPkfDtnJldiBHw7xuY2VsbGU8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2tUb0VkaXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrVG9FZGl0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPEZpVHJhc2gyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGFsRGVsZXRlZCh0cnVlKX1cbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIlxuICAgICAgICAgIHNpemU9ezI1fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwgbW9kYWxPcGVuPXtvcGVuTW9kYWxEZWxldGVkfSBzZXRNb2RhbE9wZW49e3NldE9wZW5Nb2RhbERlbGV0ZWR9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICBBcmUgeW91IHN1cmUsIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWFjdGlvblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2suaWQpfSBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iXSwibmFtZXMiOlsiRm9ybUV2ZW50SGFuZGxlciIsInVzZVN0YXRlIiwiRmlFZGl0IiwiRmlUcmFzaDIiLCJNb2RhbCIsInVzZVJvdXRlciIsImRlbGV0ZVRvZG8iLCJlZGl0VG9kbyIsIlRhc2siLCJ0YXNrIiwicm91dGVyIiwib3Blbk1vZGFsRWRpdCIsInNldE9wZW5Nb2RhbEVkaXQiLCJvcGVuTW9kYWxEZWxldGVkIiwic2V0T3Blbk1vZGFsRGVsZXRlZCIsInRhc2tUb0VkaXQiLCJzZXRUYXNrVG9FZGl0IiwidGV4dCIsImhhbmRsZVN1Ym1pdEVkaXRUb2RvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJyZWZyZXNoIiwiaGFuZGxlRGVsZXRlVGFzayIsInRyIiwidGQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3Vyc29yIiwic2l6ZSIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImZvcm0iLCJvblN1Ym1pdCIsImgzIiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Tasks.js\n"));

/***/ })

});