"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet",{

/***/ "./pages/tweet/index.tsx":
/*!*******************************!*\
  !*** ./pages/tweet/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/useMutataion */ \"./lib/useMutataion.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var ref1 = _slicedToArray((0,_lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet\"), 2), uploadTweet = ref1[0], ref2 = ref1[1], loading = ref2.loading, data1 = ref2.data;\n    var onValid = function(data) {\n        if (loading) return;\n        uploadTweet(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data1 === null || data1 === void 0 ? void 0 : data1.ok) {\n            router.push(\"/tweet/\".concat(data1.tweet.id));\n        }\n    }, [\n        data1,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-300 h-[100vh] w-full absolute\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onValid),\n            className: \"bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[800px] border-2 text-center py-20 rounded-lg h-[300px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-500 absolute top-0 left-0 text-2xl border-2 cursor-pointer bg-white hover:bg-gray-200 px-1 py-1 \",\n                        children: \"\\u2190\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 24\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"description\", {\n                    required: true\n                }), {\n                    type: \"text\",\n                    placeholder: \"What is happening?!\",\n                    className: \"absolute top-0 left-[50%] translate-x-[-50%] w-[90%] h-[220px] outline-none text-[30px] px-7 border-b my-\"\n                }), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 15\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"absolute bottom-2 left-3 cursor-pointer text-[#03A9F4] hover:bg-blue-100 rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"h-12 w-12\",\n                                stroke: \"currentColor\",\n                                fill: \"none\",\n                                viewBox: \"0 0 48 48\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02\",\n                                    strokeWidth: 2,\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                className: \"hidden\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 15\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute bottom-0 right-4 cursor-pointer bg-[#119ffb] text-lg px-10 py-2 rounded-3xl text-white font-bold my-4 hover:bg-blue-500\",\n                    children: \"Tweet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 15\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n}, \"99jCjajNcoawZZ7e6H3QMlIAfNs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm,\n        _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9pbmRleC50c3g/ZjI2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi8uLi9saWIvdXNlTXV0YXRhaW9uXCI7XHJcbmltcG9ydCB7IFR3ZWV0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBUd2VldEZvcm0ge1xyXG4gIGRlc2NyaXB0aW9uOnN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgVXBsb2FkVHdlZXRNdXRhdGlvbntcclxuICBvazpib29sZWFuO1xyXG4gIHR3ZWV0OlR3ZWV0O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0KCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtyZWdpc3RlcixoYW5kbGVTdWJtaXR9PXVzZUZvcm08VHdlZXRGb3JtPigpO1xyXG4gIGNvbnN0IFt1cGxvYWRUd2VldCwge2xvYWRpbmcsIGRhdGF9XT11c2VNdXRhdGlvbjxVcGxvYWRUd2VldE11dGF0aW9uPihcIi9hcGkvdHdlZXRcIik7XHJcbiAgY29uc3Qgb25WYWxpZCA9KGRhdGE6VHdlZXRGb3JtKT0+e1xyXG4gICBpZihsb2FkaW5nKSByZXR1cm47XHJcbiAgIHVwbG9hZFR3ZWV0KGRhdGEpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihkYXRhPy5vayl7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvdHdlZXQvJHtkYXRhLnR3ZWV0LmlkfWApO1xyXG4gICAgfVxyXG4gIH0sW2RhdGEscm91dGVyXSk7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgaC1bMTAwdmhdIHctZnVsbCBhYnNvbHV0ZVwiPlxyXG4gICAgICAgXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgYWJzb2x1dGUgdG9wLVs1MCVdIGxlZnQtWzUwJV0gIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gdy1bODAwcHhdIGJvcmRlci0yIHRleHQtY2VudGVyIHB5LTIwIHJvdW5kZWQtbGcgaC1bMzAwcHhdXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGFic29sdXRlIHRvcC0wIGxlZnQtMCB0ZXh0LTJ4bCBib3JkZXItMiBjdXJzb3ItcG9pbnRlciBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTIwMCBweC0xIHB5LTEgXCI+JmxhcnI7PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRlc2NyaXB0aW9uXCIse3JlcXVpcmVkOnRydWV9KX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyBoYXBwZW5pbmc/IVwiIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtWzUwJV0gdHJhbnNsYXRlLXgtWy01MCVdIHctWzkwJV0gaC1bMjIwcHhdIG91dGxpbmUtbm9uZSB0ZXh0LVszMHB4XSBweC03IGJvcmRlci1iIG15LVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIGxlZnQtMyBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjMDNBOUY0XSAgaG92ZXI6YmctYmx1ZS0xMDAgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiB3LTEyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjggOEgxMmE0IDQgMCAwMC00IDR2MjBtMzItMTJ2OG0wIDB2OGE0IDQgMCAwMS00IDRIMTJhNCA0IDAgMDEtNC00di00bTMyLTRsLTMuMTcyLTMuMTcyYTQgNCAwIDAwLTUuNjU2IDBMMjggMjhNOCAzMmw5LjE3Mi05LjE3MmE0IDQgMCAwMTUuNjU2IDBMMjggMjhtMCAwbDQgNG00LTI0aDhtLTQtNHY4bS0xMiA0aC4wMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtNCBjdXJzb3ItcG9pbnRlciBiZy1bIzExOWZmYl0gdGV4dC1sZyBweC0xMCBweS0yIHJvdW5kZWQtM3hsIHRleHQtd2hpdGUgZm9udC1ib2xkIG15LTQgaG92ZXI6YmctYmx1ZS01MDBcIj5Ud2VldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlRm9ybSIsInVzZU11dGF0aW9uIiwiTGluayIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkVHdlZXQiLCJsb2FkaW5nIiwiZGF0YSIsIm9uVmFsaWQiLCJvayIsInB1c2giLCJ0d2VldCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaHJlZiIsInNwYW4iLCJpbnB1dCIsInJlcXVpcmVkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJzdmciLCJzdHJva2UiLCJmaWxsIiwidmlld0JveCIsImFyaWEtaGlkZGVuIiwicGF0aCIsImQiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/index.tsx\n");

/***/ })

});