"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/users/me\"), data = ref1.data, error = ref1.error;\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/tweet\"), tweetData = ref2.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto w-[800px] relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-[100%] flex justify-between mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"my-4 text-2xl font-bold flex items-center gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                viewBox: \"0 0 48 48\",\n                                width: \"48px\",\n                                height: \"48px\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"#03A9F4\",\n                                    d: \"M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 99\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            \"Hello, \",\n                            data === null || data === void 0 ? void 0 : data.name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/tweet\",\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cursor-pointer bg-[#119ffb] text-lg px-16 py-2 rounded-3xl text-white font-bold my-4 hover:bg-blue-500\",\n                            children: \"Tweet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-lg font-semibold\",\n                children: \"Tweets\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            tweetData === null || tweetData === void 0 ? void 0 : (ref = tweetData.tweets) === null || ref === void 0 ? void 0 : ref.map(function(v) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/tweet/\".concat(v.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer border-2 my-5 w-[800px] p-3 rounded-lg relative hover:bg-gray-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-0.5 items-center text-sm text-gray-600 bottom-4 left-3 absolute\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-4 h-4\",\n                                        fill: \"none\",\n                                        stroke: \"currentColor\",\n                                        viewBox: \"0 0 24 24\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: v._count.favs\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 12\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute bottom-2 right-2 text-sm\",\n                                children: v.createAt.toString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 12\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-4 m-4 rounded-lg\",\n                                children: v.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 12\n                            }, _this1)\n                        ]\n                    }, v.id, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n}, \"W5lM+aTJxUI+NgyKVeKTBcLepew=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pIOzs7Ozs4Q0FDSjtrREFDTiw4REFBQ0csTUFBSTtrREFBRUksQ0FBQyxDQUFDTSxNQUFNLENBQUNDLElBQUk7Ozs7OzhDQUFROzs7Ozs7c0NBQ3hCOzBDQUNMLDhEQUFDWCxNQUFJO2dDQUFDWixTQUFTLEVBQUMsbUNBQW1DOzBDQUFFZ0IsQ0FBQyxDQUFDUSxRQUFRLENBQUNDLFFBQVEsRUFBRTs7Ozs7c0NBQVE7MENBQ2xGLDhEQUFDQyxHQUFDO2dDQUFDMUIsU0FBUyxFQUFDLG9CQUFvQjswQ0FBRWdCLENBQUMsQ0FBQ1csV0FBVzs7Ozs7c0NBQUs7O3VCQXBCbkRYLENBQUMsQ0FBQ0MsRUFBRTs7Ozs4QkFzQkg7Ozs7OzBCQUFPO2FBQ2QsQ0FBQzs7Ozs7O2FBRUUsQ0FDTjtDQUNIOztRQXJEZ0IzQixrREFBUztRQUNBRywyQ0FBTTtRQUNQQSwyQ0FBTTs7SUFtRDdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR3ZWV0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5pbnRlcmZhY2UgVHdlZXRXaXRoQ291bnQgZXh0ZW5kcyBUd2VldCB7XHJcbiAgX2NvdW50OntcclxuICAgIGZhdnM6bnVtYmVyO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFR3ZWV0c1Jlc3BvbnNlIHtcclxuICBvazpib29sZWFuO1xyXG4gdHdlZXRzOlR3ZWV0V2l0aENvdW50W107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3VzZXJzL21lXCIpO1xyXG4gIGNvbnN0IHtkYXRhOnR3ZWV0RGF0YX09dXNlU1dSPFR3ZWV0c1Jlc3BvbnNlPihcIi9hcGkvdHdlZXRcIik7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9jcmVhdGUtYWNjb3VudFwiKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLCBlcnJvcl0pO1xyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIDxkaXYgLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctWzgwMHB4XSByZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LVsxMDAlXSBmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC01XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTQgdGV4dC0yeGwgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIjAgMCA0OCA0OFwiIHdpZHRoPVwiNDhweFwiIGhlaWdodD1cIjQ4cHhcIj48cGF0aCBmaWxsPVwiIzAzQTlGNFwiIGQ9XCJNNDIsMTIuNDI5Yy0xLjMyMywwLjU4Ni0yLjc0NiwwLjk3Ny00LjI0NywxLjE2MmMxLjUyNi0wLjkwNiwyLjctMi4zNTEsMy4yNTEtNC4wNThjLTEuNDI4LDAuODM3LTMuMDEsMS40NTItNC42OTMsMS43NzZDMzQuOTY3LDkuODg0LDMzLjA1LDksMzAuOTI2LDljLTQuMDgsMC03LjM4NywzLjI3OC03LjM4Nyw3LjMyYzAsMC41NzIsMC4wNjcsMS4xMjksMC4xOTMsMS42N2MtNi4xMzgtMC4zMDgtMTEuNTgyLTMuMjI2LTE1LjIyNC03LjY1NGMtMC42NCwxLjA4Mi0xLDIuMzQ5LTEsMy42ODZjMCwyLjU0MSwxLjMwMSw0Ljc3OCwzLjI4NSw2LjA5NmMtMS4yMTEtMC4wMzctMi4zNTEtMC4zNzQtMy4zNDktMC45MTRjMCwwLjAyMiwwLDAuMDU1LDAsMC4wODZjMCwzLjU1MSwyLjU0Nyw2LjUwOCw1LjkyMyw3LjE4MWMtMC42MTcsMC4xNjktMS4yNjksMC4yNjMtMS45NDEsMC4yNjNjLTAuNDc3LDAtMC45NDItMC4wNTQtMS4zOTItMC4xMzVjMC45NCwyLjkwMiwzLjY2Nyw1LjAyMyw2Ljg5OCw1LjA4NmMtMi41MjgsMS45Ni01LjcxMiwzLjEzNC05LjE3NCwzLjEzNGMtMC41OTgsMC0xLjE4My0wLjAzNC0xLjc2MS0wLjEwNEM5LjI2OCwzNi43ODYsMTMuMTUyLDM4LDE3LjMyMSwzOGMxMy41ODUsMCwyMS4wMTctMTEuMTU2LDIxLjAxNy0yMC44MzRjMC0wLjMxNy0wLjAxLTAuNjMzLTAuMDI1LTAuOTQ1QzM5Ljc2MywxNS4xOTcsNDEuMDEzLDEzLjkwNSw0MiwxMi40MjlcIi8+PC9zdmc+SGVsbG8sIHtkYXRhPy5uYW1lfSE8L2gxPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90d2VldFwiIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy1bIzExOWZmYl0gdGV4dC1sZyBweC0xNiBweS0yIHJvdW5kZWQtM3hsIHRleHQtd2hpdGUgZm9udC1ib2xkIG15LTQgaG92ZXI6YmctYmx1ZS01MDBcIj5Ud2VldDwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5Ud2VldHM8L2gzPiBcclxuICAgICAge3R3ZWV0RGF0YT8udHdlZXRzPy5tYXAoKHYpPT4oXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC90d2VldC8ke3YuaWR9YH0+XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICBrZXk9e3YuaWR9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGJvcmRlci0yIG15LTUgdy1bODAwcHhdIHAtMyByb3VuZGVkLWxnIHJlbGF0aXZlIGhvdmVyOmJnLWdyYXktMzAwXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTAuNSBpdGVtcy1jZW50ZXIgdGV4dC1zbSAgdGV4dC1ncmF5LTYwMCBib3R0b20tNCBsZWZ0LTMgYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTRcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4+e3YuX2NvdW50LmZhdnN9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIgcmlnaHQtMiB0ZXh0LXNtXCI+e3YuY3JlYXRlQXQudG9TdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00IG0tNCByb3VuZGVkLWxnXCI+e3YuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+PC9MaW5rPlxyXG4gICAgICApKX1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU1dSIiwidHdlZXREYXRhIiwicm91dGVyIiwiZGF0YSIsImVycm9yIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94Iiwid2lkdGgiLCJoZWlnaHQiLCJwYXRoIiwiZmlsbCIsImQiLCJuYW1lIiwiaHJlZiIsInNwYW4iLCJoMyIsInR3ZWV0cyIsIm1hcCIsInYiLCJpZCIsInN0cm9rZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiX2NvdW50IiwiZmF2cyIsImNyZWF0ZUF0IiwidG9TdHJpbmciLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});