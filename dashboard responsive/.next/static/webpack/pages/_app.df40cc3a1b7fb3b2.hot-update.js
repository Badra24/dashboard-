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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/utils */ \"./node_modules/primereact/utils/utils.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_layoutcontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/layoutcontext */ \"./Layout/context/layoutcontext.js\");\n/* harmony import */ var _switchDarkMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switchDarkMode */ \"./Layout/switchDarkMode.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Topbar = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(_c = _s(function(props, ref) {\n    _s();\n    var _$ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_layoutcontext__WEBPACK_IMPORTED_MODULE_5__.LayoutContext), layoutConfig = _$ref.layoutConfig, layoutState = _$ref.layoutState, onMenuToggle = _$ref.onMenuToggle, showProfileSidebar = _$ref.showProfileSidebar;\n    var menubuttonRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var topbarmenuRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var topbarmenubuttonRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var contextPath = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig.contextPath;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, function() {\n        return {\n            menubutton: menubuttonRef.current,\n            topbarmenu: topbarmenuRef.current,\n            topbarmenubutton: topbarmenubuttonRef.current\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"layout-topbar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"layout-topbar-logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(contextPath, \"/layout/images/logo-\").concat(layoutConfig.colorScheme !== \"light\" ? \"white\" : \"dark\", \".svg\"),\n                                width: \"47.22px\",\n                                height: \"35px\",\n                                widt: \"true\",\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Ximply\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: menubuttonRef,\n                type: \"button\",\n                className: \"p-link layout-menu-button layout-topbar-button\",\n                onClick: onMenuToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"pi pi-bars\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: topbarmenubuttonRef,\n                type: \"button\",\n                className: \"p-link layout-topbar-menu-button layout-topbar-button\",\n                onClick: showProfileSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"pi pi-ellipsis-v\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_switchDarkMode__WEBPACK_IMPORTED_MODULE_6__.SwitchToggle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: topbarmenuRef,\n                className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_3__.classNames)(\"layout-topbar-menu\", {\n                    \"layout-topbar-menu-mobile-active\": layoutState.profileSidebarVisible\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"p-link layout-topbar-button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"pi pi-calendar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Calendar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"p-link layout-topbar-button\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"pi pi-user\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/documentation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"p-link layout-topbar-button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"pi pi-cog\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Settings\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\Topbar.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n}, \"zwLZKhpJ19QmMdwmSdNv27SnOzE=\")), \"zwLZKhpJ19QmMdwmSdNv27SnOzE=\");\n_c1 = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"Topbar$forwardRef\");\n$RefreshReg$(_c1, \"Topbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZCQUE2Qjs7MENBQ3pELDhEQUFDYyxHQUFDO2dDQUFDZCxTQUFTLEVBQUMsZ0JBQWdCOzs7OztxQ0FBSzswQ0FDbEMsOERBQUNVLE1BQUk7MENBQUMsVUFBUTs7Ozs7cUNBQU87Ozs7Ozs2QkFDaEI7a0NBQ1QsOERBQUNDLFFBQU07d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDWixTQUFTLEVBQUMsNkJBQTZCOzswQ0FDekQsOERBQUNjLEdBQUM7Z0NBQUNkLFNBQVMsRUFBQyxZQUFZOzs7OztxQ0FBSzswQ0FDOUIsOERBQUNVLE1BQUk7MENBQUMsU0FBTzs7Ozs7cUNBQU87Ozs7Ozs2QkFDZjtrQ0FDVCw4REFBQ3BDLGtEQUFJO3dCQUFDMkIsSUFBSSxFQUFDLGdCQUFnQjtrQ0FDdkIsNEVBQUNVLFFBQU07NEJBQUNDLElBQUksRUFBQyxRQUFROzRCQUFDWixTQUFTLEVBQUMsNkJBQTZCOzs4Q0FDekQsOERBQUNjLEdBQUM7b0NBQUNkLFNBQVMsRUFBQyxXQUFXOzs7Ozt5Q0FBSzs4Q0FDN0IsOERBQUNVLE1BQUk7OENBQUMsVUFBUTs7Ozs7eUNBQU87Ozs7OztpQ0FDaEI7Ozs7OzZCQUNOOzs7Ozs7cUJBQ0w7Ozs7OzthQUNKLENBQ1I7QUFDTixDQUFDLGtDQUFDOztBQUVGLCtEQUFlM0IsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0xheW91dC9Ub3BiYXIuanM/M2ZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwicHJpbWVyZWFjdC91dGlsc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0L2xheW91dGNvbnRleHRcIjtcclxuaW1wb3J0IHsgU3dpdGNoVG9nZ2xlIH0gZnJvbSBcIi4vc3dpdGNoRGFya01vZGVcIjtcclxuXHJcbmNvbnN0IFRvcGJhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IHsgbGF5b3V0Q29uZmlnLCBsYXlvdXRTdGF0ZSwgb25NZW51VG9nZ2xlLCBzaG93UHJvZmlsZVNpZGViYXIgfSA9IHVzZUNvbnRleHQoTGF5b3V0Q29udGV4dCk7XHJcbiAgICBjb25zdCBtZW51YnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdG9wYmFybWVudVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IHRvcGJhcm1lbnVidXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjb250ZXh0UGF0aCA9IGdldENvbmZpZygpLnB1YmxpY1J1bnRpbWVDb25maWcuY29udGV4dFBhdGg7XHJcblxyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcbiAgICAgICAgbWVudWJ1dHRvbjogbWVudWJ1dHRvblJlZi5jdXJyZW50LFxyXG4gICAgICAgIHRvcGJhcm1lbnU6IHRvcGJhcm1lbnVSZWYuY3VycmVudCxcclxuICAgICAgICB0b3BiYXJtZW51YnV0dG9uOiB0b3BiYXJtZW51YnV0dG9uUmVmLmN1cnJlbnQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC10b3BiYXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxheW91dC10b3BiYXItbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtjb250ZXh0UGF0aH0vbGF5b3V0L2ltYWdlcy9sb2dvLSR7bGF5b3V0Q29uZmlnLmNvbG9yU2NoZW1lICE9PSBcImxpZ2h0XCIgPyBcIndoaXRlXCIgOiBcImRhcmtcIn0uc3ZnYH0gd2lkdGg9XCI0Ny4yMnB4XCIgaGVpZ2h0PXtcIjM1cHhcIn0gd2lkdD17XCJ0cnVlXCJ9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5YaW1wbHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gcmVmPXttZW51YnV0dG9uUmVmfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicC1saW5rIGxheW91dC1tZW51LWJ1dHRvbiBsYXlvdXQtdG9wYmFyLWJ1dHRvblwiIG9uQ2xpY2s9e29uTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1iYXJzXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHJlZj17dG9wYmFybWVudWJ1dHRvblJlZn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInAtbGluayBsYXlvdXQtdG9wYmFyLW1lbnUtYnV0dG9uIGxheW91dC10b3BiYXItYnV0dG9uXCIgb25DbGljaz17c2hvd1Byb2ZpbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLWVsbGlwc2lzLXZcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hUb2dnbGUgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17dG9wYmFybWVudVJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwibGF5b3V0LXRvcGJhci1tZW51XCIsIHsgXCJsYXlvdXQtdG9wYmFyLW1lbnUtbW9iaWxlLWFjdGl2ZVwiOiBsYXlvdXRTdGF0ZS5wcm9maWxlU2lkZWJhclZpc2libGUgfSl9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicC1saW5rIGxheW91dC10b3BiYXItYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FsZW5kYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInAtbGluayBsYXlvdXQtdG9wYmFyLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJvZmlsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kb2N1bWVudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicC1saW5rIGxheW91dC10b3BiYXItYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInBpIHBpLWNvZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BiYXI7XHJcbiJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJMaW5rIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlUmVmIiwiTGF5b3V0Q29udGV4dCIsIlN3aXRjaFRvZ2dsZSIsIlRvcGJhciIsInByb3BzIiwicmVmIiwibGF5b3V0Q29uZmlnIiwibGF5b3V0U3RhdGUiLCJvbk1lbnVUb2dnbGUiLCJzaG93UHJvZmlsZVNpZGViYXIiLCJtZW51YnV0dG9uUmVmIiwidG9wYmFybWVudVJlZiIsInRvcGJhcm1lbnVidXR0b25SZWYiLCJjb250ZXh0UGF0aCIsInB1YmxpY1J1bnRpbWVDb25maWciLCJtZW51YnV0dG9uIiwiY3VycmVudCIsInRvcGJhcm1lbnUiLCJ0b3BiYXJtZW51YnV0dG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJpbWciLCJzcmMiLCJjb2xvclNjaGVtZSIsIndpZHRoIiwiaGVpZ2h0Iiwid2lkdCIsImFsdCIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImkiLCJwcm9maWxlU2lkZWJhclZpc2libGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Layout/Topbar.js\n"));

/***/ })

});