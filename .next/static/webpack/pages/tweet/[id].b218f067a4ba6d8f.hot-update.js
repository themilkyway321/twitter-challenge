"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweetContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/useMutataion */ \"./lib/useMutataion.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweetContent() {\n    var ref, ref1;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\"), userName = ref2.data;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref3.data, mutate = ref3.mutate;\n    var ref4 = _slicedToArray((0,_lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet/\".concat(router.query.id, \"/fav\")), 1), toggleFav = ref4[0];\n    var onFavClick = function() {\n        if (!data) return;\n        mutate(function(prev) {\n            return prev && _objectSpread({}, prev, {\n                isLiked: !prev.isLiked\n            });\n        }, false);\n        toggleFav({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-500 text-2xl cursor-pointer px-3 py-5 hover:text-black\",\n                    children: \"\\u2190 See all your tweets\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 32,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[20%] left-[50%] translate-x-[-50%] bg-gray-50 w-[800px] border-2 rounded-lg p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl\",\n                        children: [\n                            userName === null || userName === void 0 ? void 0 : userName.name,\n                            \"'s Tweet\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"absolute bottom-0 right-2\",\n                        children: [\n                            \"Tweeted at \",\n                            data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.createAt.toString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"p-4 my-5 bg-blue-100 rounded-lg\",\n                        children: data === null || data === void 0 ? void 0 : (ref1 = data.tweet) === null || ref1 === void 0 ? void 0 : ref1.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onFavClick,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cls)(\"p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-blue-50 \", (data === null || data === void 0 ? void 0 : data.isLiked) ? \"text-red-400 hover:text-red-500\" : \"text-gray-400 hover:text-gray-500\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"h-6 w-6 \",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"currentColor\" : \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                                lineNumber: 40,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-2\",\n                                children: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"Like\" : \"Unlike\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 31,\n        columnNumber: 4\n    }, this);\n};\n_s(tweetContent, \"Naj7erAJ580/WdykmBM/PeC4nxc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBbUMsQ0FBQzs7MENBQ3RMLDhEQUFDWSxLQUFHO2dDQUNGUixTQUFTLEVBQUMsVUFBVTtnQ0FDcEJTLEtBQUssRUFBQyw0QkFBNEI7Z0NBQ2xDQyxJQUFJLEVBQUV2QixDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRVMsT0FBTyxJQUFHLGNBQWMsR0FBQyxNQUFNO2dDQUMzQ2UsT0FBTyxFQUFDLFdBQVc7Z0NBQ25CQyxNQUFNLEVBQUMsY0FBYztnQ0FDckJDLGFBQVcsRUFBQyxNQUFNOzBDQUVsQiw0RUFBQ0MsTUFBSTtvQ0FDSEMsYUFBYSxFQUFDLE9BQU87b0NBQ3JCQyxjQUFjLEVBQUMsT0FBTztvQ0FDdEJDLFdBQVcsRUFBQyxHQUFHO29DQUNmQyxDQUFDLEVBQUMsNkhBQTZIOzs7Ozt3Q0FDL0g7Ozs7O29DQUNFOzBDQUNOLDhEQUFDQyxNQUFJO2dDQUFDbkIsU0FBUyxFQUFDLE1BQU07MENBQUViLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFTLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsSUFBSSxDQUFFUyxPQUFPLElBQUUsTUFBTSxHQUFDLFFBQVE7Ozs7O29DQUFROzs7Ozs7NEJBQ3ZEOzs7Ozs7b0JBQ2I7Ozs7OztZQUNILENBQ047Q0FDRjtHQTFDdUJWLFlBQVk7O1FBQ25CTCxrREFBUztRQUNDQywyQ0FBTTtRQUNQQSwyQ0FBTTtRQUdYQyx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIFR3ZWV0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIlxyXG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSBcIi4uLy4uL2xpYi91c2VNdXRhdGFpb25cIjtcclxuaW1wb3J0IHsgY2xzIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbnRlcmZhY2UgVHdlZXRXaXRoVXNlciBleHRlbmRzIFR3ZWV0IHtcclxuICB1c2VyOlVzZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUd2VldERldGFpbFJlc3BvbnNlIHtcclxuICBvazpib29sZWFuO1xyXG4gIHR3ZWV0OlR3ZWV0V2l0aFVzZXI7XHJcbiAgaXNMaWtlZDpib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d2VldENvbnRlbnQoKXtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGE6dXNlck5hbWV9ID0gdXNlU1dSKFwiL2FwaS91c2Vycy9tZVwiKTtcclxuICBjb25zdCB7IGRhdGEsIG11dGF0ZX0gPSB1c2VTV1I8VHdlZXREZXRhaWxSZXNwb25zZT4oXHJcbiAgICByb3V0ZXIucXVlcnkuaWQgPyBgL2FwaS90d2VldC8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxyXG4gICk7XHJcbiAgY29uc3QgW3RvZ2dsZUZhdl09IHVzZU11dGF0aW9uKGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfS9mYXZgKTtcclxuICBjb25zdCBvbkZhdkNsaWNrID0oKT0+e1xyXG4gICAgaWYoIWRhdGEpcmV0dXJuO1xyXG4gICAgbXV0YXRlKChwcmV2OmFueSkgPT4gcHJldiAmJiB7IC4uLnByZXYsIGlzTGlrZWQ6ICFwcmV2LmlzTGlrZWQgfSwgZmFsc2UpO1xyXG4gICAgdG9nZ2xlRmF2KHt9KTtcclxuICB9O1xyXG4gIHJldHVybihcclxuICAgPGRpdj5cclxuICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtMnhsIGN1cnNvci1wb2ludGVyIHB4LTMgcHktNSBob3Zlcjp0ZXh0LWJsYWNrXCI+JmxhcnI7IFNlZSBhbGwgeW91ciB0d2VldHM8L3A+PC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bMjAlXSBsZWZ0LVs1MCVdICB0cmFuc2xhdGUteC1bLTUwJV0gIGJnLWdyYXktNTAgdy1bODAwcHhdIGJvcmRlci0yIHJvdW5kZWQtbGcgcC00XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPnt1c2VyTmFtZT8ubmFtZX0ncyBUd2VldDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0yXCI+VHdlZXRlZCBhdCB7ZGF0YT8udHdlZXQ/LmNyZWF0ZUF0LnRvU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInAtNCBteS01IGJnLWJsdWUtMTAwIHJvdW5kZWQtbGdcIj57ZGF0YT8udHdlZXQ/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRmF2Q2xpY2t9IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHMoXCJwLTMgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwIGhvdmVyOmJnLWJsdWUtNTAgXCIsIGRhdGE/LmlzTGlrZWQgPyBcInRleHQtcmVkLTQwMCBob3Zlcjp0ZXh0LXJlZC01MDBcIjpcInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17ZGF0YT8uaXNMaWtlZCA/IFwiY3VycmVudENvbG9yXCI6XCJub25lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMlwiPntkYXRhPy5pc0xpa2VkPyBcIkxpa2VcIjpcIlVubGlrZVwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU1dSIiwidXNlTXV0YXRpb24iLCJjbHMiLCJMaW5rIiwidHdlZXRDb250ZW50IiwiZGF0YSIsInJvdXRlciIsInVzZXJOYW1lIiwicXVlcnkiLCJpZCIsIm11dGF0ZSIsInRvZ2dsZUZhdiIsIm9uRmF2Q2xpY2siLCJwcmV2IiwiaXNMaWtlZCIsImRpdiIsImhyZWYiLCJwIiwiY2xhc3NOYW1lIiwibmFtZSIsInR3ZWV0IiwiY3JlYXRlQXQiLCJ0b1N0cmluZyIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});