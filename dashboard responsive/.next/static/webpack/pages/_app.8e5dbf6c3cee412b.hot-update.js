"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Layout/Topbar.js":
/*!**************************!*\
  !*** ./Layout/Topbar.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/utils */ \"./node_modules/primereact/utils/utils.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/layoutcontext */ \"./Layout/context/layoutcontext.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import SwitchToggle from \"./SwitchDarkMode\";\nvar Topbar = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(_c = _s(function(props, ref) {\n    _s();\n    var _$ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_5__.LayoutContext), layoutConfig = _$ref.layoutConfig, layoutState = _$ref.layoutState, onMenuToggle = _$ref.onMenuToggle, showProfileSidebar = _$ref.showProfileSidebar;\n    var menubuttonRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var topbarmenuRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var topbarmenubuttonRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var contextPath = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.contextPath;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, function() {\n        return {\n            menubutton: menubuttonRef.current,\n            topbarmenu: topbarmenuRef.current,\n            topbarmenubutton: topbarmenubuttonRef.current\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"layout-topbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"layout-topbar-logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(contextPath, \"/layout/images/logo-\").concat(layoutConfig.colorScheme !== \"light\" ? \"white\" : \"dark\", \".svg\"),\n                                width: \"47.22px\",\n                                height: \"35px\",\n                                widt: \"true\",\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Ximply\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: menubuttonRef,\n                type: \"button\",\n                className: \"p-link layout-menu-button layout-topbar-button\",\n                onClick: onMenuToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"pi pi-bars\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: topbarmenubuttonRef,\n                type: \"button\",\n                className: \"p-link layout-topbar-menu-button layout-topbar-button\",\n                onClick: showProfileSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"pi pi-ellipsis-v\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SwitchToggle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: topbarmenuRef,\n                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_3__.classNames)(\"layout-topbar-menu\", {\n                    \"layout-topbar-menu-mobile-active\": layoutState.profileSidebarVisible\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"p-link layout-topbar-button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"pi pi-calendar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Calendar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"p-link layout-topbar-button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"pi pi-user\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/documentation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"p-link layout-topbar-button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"pi pi-cog\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Settings\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n}, \"zwLZKhpJ19QmMdwmSdNv27SnOzE=\")), \"zwLZKhpJ19QmMdwmSdNv27SnOzE=\");\n_c1 = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"Topbar$forwardRef\");\n$RefreshReg$(_c1, \"Topbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUM7Z0NBQUNkLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O3FDQUFLOzBDQUNsQyw4REFBQ1UsTUFBSTswQ0FBQyxVQUFROzs7OztxQ0FBTzs7Ozs7OzZCQUNoQjtrQ0FDVCw4REFBQ0MsUUFBTTt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7d0JBQUNaLFNBQVMsRUFBQyw2QkFBNkI7OzBDQUN6RCw4REFBQ2MsR0FBQztnQ0FBQ2QsU0FBUyxFQUFDLFlBQVk7Ozs7O3FDQUFLOzBDQUM5Qiw4REFBQ1UsTUFBSTswQ0FBQyxTQUFPOzs7OztxQ0FBTzs7Ozs7OzZCQUNmO2tDQUNULDhEQUFDbkMsa0RBQUk7d0JBQUMwQixJQUFJLEVBQUMsZ0JBQWdCO2tDQUN2Qiw0RUFBQ1UsUUFBTTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNaLFNBQVMsRUFBQyw2QkFBNkI7OzhDQUN6RCw4REFBQ2MsR0FBQztvQ0FBQ2QsU0FBUyxFQUFDLFdBQVc7Ozs7O3lDQUFLOzhDQUM3Qiw4REFBQ1UsTUFBSTs4Q0FBQyxVQUFROzs7Ozt5Q0FBTzs7Ozs7O2lDQUNoQjs7Ozs7NkJBQ047Ozs7OztxQkFDTDs7Ozs7O2FBQ0osQ0FDUjtBQUNOLENBQUMsa0NBQUM7O0FBRUYsK0RBQWUzQixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0L1RvcGJhci5qcz8zZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCJwcmltZXJlYWN0L3V0aWxzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvbGF5b3V0Y29udGV4dFwiO1xyXG4vLyBpbXBvcnQgU3dpdGNoVG9nZ2xlIGZyb20gXCIuL1N3aXRjaERhcmtNb2RlXCI7XHJcblxyXG5jb25zdCBUb3BiYXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7IGxheW91dENvbmZpZywgbGF5b3V0U3RhdGUsIG9uTWVudVRvZ2dsZSwgc2hvd1Byb2ZpbGVTaWRlYmFyIH0gPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpO1xyXG4gICAgY29uc3QgbWVudWJ1dHRvblJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRvcGJhcm1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCB0b3BiYXJtZW51YnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgY29udGV4dFBhdGggPSBnZXRDb25maWcoKS5wdWJsaWNSdW50aW1lQ29uZmlnLmNvbnRleHRQYXRoO1xyXG5cclxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xyXG4gICAgICAgIG1lbnVidXR0b246IG1lbnVidXR0b25SZWYuY3VycmVudCxcclxuICAgICAgICB0b3BiYXJtZW51OiB0b3BiYXJtZW51UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdG9wYmFybWVudWJ1dHRvbjogdG9wYmFybWVudWJ1dHRvblJlZi5jdXJyZW50LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtdG9wYmFyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXlvdXQtdG9wYmFyLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7Y29udGV4dFBhdGh9L2xheW91dC9pbWFnZXMvbG9nby0ke2xheW91dENvbmZpZy5jb2xvclNjaGVtZSAhPT0gXCJsaWdodFwiID8gXCJ3aGl0ZVwiIDogXCJkYXJrXCJ9LnN2Z2B9IHdpZHRoPVwiNDcuMjJweFwiIGhlaWdodD17XCIzNXB4XCJ9IHdpZHQ9e1widHJ1ZVwifSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+WGltcGx5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHJlZj17bWVudWJ1dHRvblJlZn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInAtbGluayBsYXlvdXQtbWVudS1idXR0b24gbGF5b3V0LXRvcGJhci1idXR0b25cIiBvbkNsaWNrPXtvbk1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktYmFyc1wiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiByZWY9e3RvcGJhcm1lbnVidXR0b25SZWZ9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwLWxpbmsgbGF5b3V0LXRvcGJhci1tZW51LWJ1dHRvbiBsYXlvdXQtdG9wYmFyLWJ1dHRvblwiIG9uQ2xpY2s9e3Nob3dQcm9maWxlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1lbGxpcHNpcy12XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXt0b3BiYXJtZW51UmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJsYXlvdXQtdG9wYmFyLW1lbnVcIiwgeyBcImxheW91dC10b3BiYXItbWVudS1tb2JpbGUtYWN0aXZlXCI6IGxheW91dFN0YXRlLnByb2ZpbGVTaWRlYmFyVmlzaWJsZSB9KX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwLWxpbmsgbGF5b3V0LXRvcGJhci1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DYWxlbmRhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicC1saW5rIGxheW91dC10b3BiYXItYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9maWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvY3VtZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwLWxpbmsgbGF5b3V0LXRvcGJhci1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktY29nXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcGJhcjtcclxuIl0sIm5hbWVzIjpbImdldENvbmZpZyIsIkxpbmsiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VSZWYiLCJMYXlvdXRDb250ZXh0IiwiVG9wYmFyIiwicHJvcHMiLCJyZWYiLCJsYXlvdXRDb25maWciLCJsYXlvdXRTdGF0ZSIsIm9uTWVudVRvZ2dsZSIsInNob3dQcm9maWxlU2lkZWJhciIsIm1lbnVidXR0b25SZWYiLCJ0b3BiYXJtZW51UmVmIiwidG9wYmFybWVudWJ1dHRvblJlZiIsImNvbnRleHRQYXRoIiwicHVibGljUnVudGltZUNvbmZpZyIsIm1lbnVidXR0b24iLCJjdXJyZW50IiwidG9wYmFybWVudSIsInRvcGJhcm1lbnVidXR0b24iLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImltZyIsInNyYyIsImNvbG9yU2NoZW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ3aWR0IiwiYWx0Iiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiaSIsIlN3aXRjaFRvZ2dsZSIsInByb2ZpbGVTaWRlYmFyVmlzaWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/Topbar.js\n"));

/***/ })

});