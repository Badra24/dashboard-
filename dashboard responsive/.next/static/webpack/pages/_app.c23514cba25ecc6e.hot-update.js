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

/***/ "./Layout/switchDarkMode.js":
/*!**********************************!*\
  !*** ./Layout/switchDarkMode.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SwitchToggle\": function() { return /* binding */ SwitchToggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons */ \"./node_modules/@tabler/icons/icons-react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SwitchToggle() {\n    _s();\n    var ref = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineColorScheme)(), colorScheme = ref.colorScheme, toggleColorScheme = ref.toggleColorScheme;\n    var theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n        position: \"center\",\n        my: 30,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Switch, {\n            checked: colorScheme === \"dark\",\n            onChange: function() {\n                return toggleColorScheme();\n            },\n            size: \"lg\",\n            onLabel: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons__WEBPACK_IMPORTED_MODULE_2__.IconSun, {\n                color: theme.white,\n                size: 20,\n                stroke: 1.5\n            }, void 0, false, void 0, void 0),\n            offLabel: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons__WEBPACK_IMPORTED_MODULE_2__.IconMoonStars, {\n                color: theme.colors.gray[6],\n                size: 20,\n                stroke: 1.5\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\switchDarkMode.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\BADRA\\\\Desktop\\\\clone dashboard\\\\dashboard responsive\\\\Layout\\\\switchDarkMode.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(SwitchToggle, \"rGw8x4gjfVwLentX1cI1n4Go+GM=\", false, function() {\n    return [\n        _mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineColorScheme,\n        _mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme\n    ];\n});\n_c = SwitchToggle;\nvar _c;\n$RefreshReg$(_c, \"SwitchToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9MYXlvdXQvc3dpdGNoRGFya01vZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBc0Y7QUFDL0I7QUFFaEQsU0FBU00sWUFBWSxHQUFHOztJQUMzQixJQUEyQ0osR0FBdUIsR0FBdkJBLG9FQUFxQixFQUFFLEVBQTFESyxXQUFXLEdBQXdCTCxHQUF1QixDQUExREssV0FBVyxFQUFFQyxpQkFBaUIsR0FBS04sR0FBdUIsQ0FBN0NNLGlCQUFpQjtJQUN0QyxJQUFNQyxLQUFLLEdBQUdOLDhEQUFlLEVBQUU7SUFFL0IscUJBQ0ksOERBQUNILGdEQUFLO1FBQUNVLFFBQVEsRUFBQyxRQUFRO1FBQUNDLEVBQUUsRUFBRSxFQUFFO2tCQUMzQiw0RUFBQ1YsaURBQU07WUFBQ1csT0FBTyxFQUFFTCxXQUFXLEtBQUssTUFBTTtZQUFFTSxRQUFRLEVBQUU7dUJBQU1MLGlCQUFpQixFQUFFO2FBQUE7WUFBRU0sSUFBSSxFQUFDLElBQUk7WUFBQ0MsT0FBTyxnQkFBRSw4REFBQ1Ysa0RBQU87Z0JBQUNXLEtBQUssRUFBRVAsS0FBSyxDQUFDUSxLQUFLO2dCQUFFSCxJQUFJLEVBQUUsRUFBRTtnQkFBRUksTUFBTSxFQUFFLEdBQUc7NkNBQUk7WUFBRUMsUUFBUSxnQkFBRSw4REFBQ2Ysd0RBQWE7Z0JBQUNZLEtBQUssRUFBRVAsS0FBSyxDQUFDVyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUVQLElBQUksRUFBRSxFQUFFO2dCQUFFSSxNQUFNLEVBQUUsR0FBRzs2Q0FBSTs7Ozs7Z0JBQUk7Ozs7O1lBQ3hPLENBQ1Y7QUFDTixDQUFDO0dBVGVaLFlBQVk7O1FBQ21CSixnRUFBcUI7UUFDbERDLDBEQUFlOzs7QUFGakJHLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0L3N3aXRjaERhcmtNb2RlLmpzP2I2YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIFN3aXRjaCwgdXNlTWFudGluZUNvbG9yU2NoZW1lLCB1c2VNYW50aW5lVGhlbWUgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5pbXBvcnQgeyBJY29uTW9vblN0YXJzLCBJY29uU3VuIH0gZnJvbSBcIkB0YWJsZXIvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTd2l0Y2hUb2dnbGUoKSB7XHJcbiAgICBjb25zdCB7IGNvbG9yU2NoZW1lLCB0b2dnbGVDb2xvclNjaGVtZSB9ID0gdXNlTWFudGluZUNvbG9yU2NoZW1lKCk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZU1hbnRpbmVUaGVtZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyb3VwIHBvc2l0aW9uPVwiY2VudGVyXCIgbXk9ezMwfT5cclxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtjb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJ9IG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVDb2xvclNjaGVtZSgpfSBzaXplPVwibGdcIiBvbkxhYmVsPXs8SWNvblN1biBjb2xvcj17dGhlbWUud2hpdGV9IHNpemU9ezIwfSBzdHJva2U9ezEuNX0gLz59IG9mZkxhYmVsPXs8SWNvbk1vb25TdGFycyBjb2xvcj17dGhlbWUuY29sb3JzLmdyYXlbNl19IHNpemU9ezIwfSBzdHJva2U9ezEuNX0gLz59IC8+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdyb3VwIiwiU3dpdGNoIiwidXNlTWFudGluZUNvbG9yU2NoZW1lIiwidXNlTWFudGluZVRoZW1lIiwiSWNvbk1vb25TdGFycyIsIkljb25TdW4iLCJTd2l0Y2hUb2dnbGUiLCJjb2xvclNjaGVtZSIsInRvZ2dsZUNvbG9yU2NoZW1lIiwidGhlbWUiLCJwb3NpdGlvbiIsIm15IiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic2l6ZSIsIm9uTGFiZWwiLCJjb2xvciIsIndoaXRlIiwic3Ryb2tlIiwib2ZmTGFiZWwiLCJjb2xvcnMiLCJncmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Layout/switchDarkMode.js\n"));

/***/ })

});