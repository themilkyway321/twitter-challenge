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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/useMutataion */ \"./lib/useMutataion.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var ref1 = _slicedToArray((0,_lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet\"), 2), uploadTweet = ref1[0], ref2 = ref1[1], loading = ref2.loading, data1 = ref2.data;\n    var onValid = function(data) {\n        if (loading) return;\n        uploadTweet(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data1 === null || data1 === void 0 ? void 0 : data1.ok) {\n            router.push(\"/tweet/\".concat(data1.tweet.id));\n        }\n    }, [\n        data1,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-300 h-[100vh] w-full absolute\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onValid),\n            className: \"bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[800px] border-2 text-center py-20 rounded-lg border-red-700 h-[300px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"description\", {\n                    required: true\n                }), {\n                    type: \"text\",\n                    placeholder: \"What is happening?!\",\n                    className: \"absolute top-0 left-4 w-[90%] h-[250px] outline-none text-[30px] px-7 border-b \"\n                }), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"absolute bottom-2 left-3 cursor-pointer text-[#03A9F4] hover:bg-blue-100 rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"h-12 w-12\",\n                                stroke: \"currentColor\",\n                                fill: \"none\",\n                                viewBox: \"0 0 48 48\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02\",\n                                    strokeWidth: 2,\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                className: \"hidden\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 15\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute bottom-0 right-4 cursor-pointer bg-[#119ffb] text-lg px-10 py-2 rounded-3xl text-white font-bold my-4 hover:bg-blue-500\",\n                    children: \"Tweet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 15\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n}, \"99jCjajNcoawZZ7e6H3QMlIAfNs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTDtBQUNRO0FBQ087O0FBVWpELGtFQUFjLFdBQU07O0lBQ2xCLElBQU1JLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUE4QkUsR0FBb0IsR0FBcEJBLHdEQUFPLEVBQWEsRUFBM0NHLFFBQVEsR0FBZUgsR0FBb0IsQ0FBM0NHLFFBQVEsRUFBQ0MsWUFBWSxHQUFFSixHQUFvQixDQUFsQ0ksWUFBWTtJQUM1QixJQUFxQ0gsSUFBOEMsa0JBQTlDQSw2REFBVyxDQUFzQixZQUFZLENBQUMsTUFBNUVJLFdBQVcsR0FBbUJKLElBQThDLEdBQWpFLFNBQW1CQSxJQUE4QyxLQUE5REssT0FBTyxRQUFQQSxPQUFPLEVBQUVDLEtBQUksUUFBSkEsSUFBSTtJQUNsQyxJQUFNQyxPQUFPLEdBQUUsU0FBQ0QsSUFBYyxFQUFHO1FBQ2hDLElBQUdELE9BQU8sRUFBRSxPQUFPO1FBQ25CRCxXQUFXLENBQUNFLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBQ0RSLGdEQUFTLENBQUMsV0FBSTtRQUNaLElBQUdRLEtBQUksYUFBSkEsS0FBSSxXQUFJLEdBQVJBLEtBQUFBLENBQVEsR0FBUkEsS0FBSSxDQUFFRSxFQUFFLEVBQUM7WUFDVlAsTUFBTSxDQUFDUSxJQUFJLENBQUMsU0FBUSxDQUFnQixPQUFkSCxLQUFJLENBQUNJLEtBQUssQ0FBQ0MsRUFBRSxDQUFFLENBQUMsQ0FBQztTQUN4QztLQUNGLEVBQUM7UUFBQ0wsS0FBSTtRQUFDTCxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRWpCLHFCQUNFLDhEQUFDVyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7a0JBQ2xELDRFQUFDQyxNQUFJO1lBQUNDLFFBQVEsRUFBRVosWUFBWSxDQUFDSSxPQUFPLENBQUM7WUFBRU0sU0FBUyxFQUFDLHVKQUF3Sjs7OEJBRW5NLDhEQUFDRyxPQUFLLG9CQUNEZCxRQUFRLENBQUMsYUFBYSxFQUFDO29CQUFDZSxRQUFRLEVBQUMsSUFBSTtpQkFBQyxDQUFDO29CQUM1Q0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLFdBQVcsRUFBQyxxQkFBcUI7b0JBQzdDTixTQUFTLEVBQUMsaUZBQWlGOzs7Ozt5QkFDekY7OEJBQ0YsOERBQUNELEtBQUc7OEJBQ0YsNEVBQUNRLE9BQUs7d0JBQUNQLFNBQVMsRUFBQyxxRkFBc0Y7OzBDQUNyRyw4REFBQ1EsS0FBRztnQ0FDRlIsU0FBUyxFQUFDLFdBQVc7Z0NBQ3JCUyxNQUFNLEVBQUMsY0FBYztnQ0FDckJDLElBQUksRUFBQyxNQUFNO2dDQUNYQyxPQUFPLEVBQUMsV0FBVztnQ0FDbkJDLGFBQVcsRUFBQyxNQUFNOzBDQUVsQiw0RUFBQ0MsTUFBSTtvQ0FDSEMsQ0FBQyxFQUFDLHdMQUF3TDtvQ0FDMUxDLFdBQVcsRUFBRSxDQUFDO29DQUNkQyxhQUFhLEVBQUMsT0FBTztvQ0FDckJDLGNBQWMsRUFBQyxPQUFPOzs7Ozt5Q0FDdEI7Ozs7O3FDQUNFOzBDQUNOLDhEQUFDZCxPQUFLO2dDQUFDRSxJQUFJLEVBQUMsTUFBTTtnQ0FBQ0wsU0FBUyxFQUFDLFFBQVE7Ozs7O3FDQUFHOzs7Ozs7NkJBQ2xDOzs7Ozt5QkFDTjs4QkFDSiw4REFBQ2tCLFFBQU07b0JBQUNsQixTQUFTLEVBQUMsa0lBQWtJOzhCQUFDLE9BQUs7Ozs7O3lCQUFTOzs7Ozs7aUJBRWxLOzs7OzthQUVMLENBQ1A7Q0FDRjs7UUEvQ2dCaEIsa0RBQVM7UUFDTUUsb0RBQU87UUFDQUMseURBQVc7O0lBNkNqRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9pbmRleC50c3g/ZjI2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gXCIuLi8uLi9saWIvdXNlTXV0YXRhaW9uXCI7XHJcbmltcG9ydCB7IFR3ZWV0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgVHdlZXRGb3JtIHtcclxuICBkZXNjcmlwdGlvbjpzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIFVwbG9hZFR3ZWV0TXV0YXRpb257XHJcbiAgb2s6Ym9vbGVhbjtcclxuICB0d2VldDpUd2VldDtcclxufVxyXG5leHBvcnQgZGVmYXVsdCgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7cmVnaXN0ZXIsaGFuZGxlU3VibWl0fT11c2VGb3JtPFR3ZWV0Rm9ybT4oKTtcclxuICBjb25zdCBbdXBsb2FkVHdlZXQsIHtsb2FkaW5nLCBkYXRhfV09dXNlTXV0YXRpb248VXBsb2FkVHdlZXRNdXRhdGlvbj4oXCIvYXBpL3R3ZWV0XCIpO1xyXG4gIGNvbnN0IG9uVmFsaWQgPShkYXRhOlR3ZWV0Rm9ybSk9PntcclxuICAgaWYobG9hZGluZykgcmV0dXJuO1xyXG4gICB1cGxvYWRUd2VldChkYXRhKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoZGF0YT8ub2spe1xyXG4gICAgICByb3V0ZXIucHVzaChgL3R3ZWV0LyR7ZGF0YS50d2VldC5pZH1gKTtcclxuICAgIH1cclxuICB9LFtkYXRhLHJvdXRlcl0pO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIGgtWzEwMHZoXSB3LWZ1bGwgYWJzb2x1dGVcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBhYnNvbHV0ZSB0b3AtWzUwJV0gbGVmdC1bNTAlXSAgdHJhbnNsYXRlLXgtWy01MCVdIHRyYW5zbGF0ZS15LVstNTAlXSB3LVs4MDBweF0gYm9yZGVyLTIgdGV4dC1jZW50ZXIgcHktMjAgcm91bmRlZC1sZyBib3JkZXItcmVkLTcwMCBoLVszMDBweF1cIj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRlc2NyaXB0aW9uXCIse3JlcXVpcmVkOnRydWV9KX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyBoYXBwZW5pbmc/IVwiIFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtNCB3LVs5MCVdIGgtWzI1MHB4XSBvdXRsaW5lLW5vbmUgdGV4dC1bMzBweF0gcHgtNyBib3JkZXItYiBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMiBsZWZ0LTMgY3Vyc29yLXBvaW50ZXIgdGV4dC1bIzAzQTlGNF0gIGhvdmVyOmJnLWJsdWUtMTAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OCA0OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI4IDhIMTJhNCA0IDAgMDAtNCA0djIwbTMyLTEydjhtMCAwdjhhNCA0IDAgMDEtNCA0SDEyYTQgNCAwIDAxLTQtNHYtNG0zMi00bC0zLjE3Mi0zLjE3MmE0IDQgMCAwMC01LjY1NiAwTDI4IDI4TTggMzJsOS4xNzItOS4xNzJhNCA0IDAgMDE1LjY1NiAwTDI4IDI4bTAgMGw0IDRtNC0yNGg4bS00LTR2OG0tMTIgNGguMDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTQgY3Vyc29yLXBvaW50ZXIgYmctWyMxMTlmZmJdIHRleHQtbGcgcHgtMTAgcHktMiByb3VuZGVkLTN4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteS00IGhvdmVyOmJnLWJsdWUtNTAwXCI+VHdlZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZUZvcm0iLCJ1c2VNdXRhdGlvbiIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkVHdlZXQiLCJsb2FkaW5nIiwiZGF0YSIsIm9uVmFsaWQiLCJvayIsInB1c2giLCJ0d2VldCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwic3ZnIiwic3Ryb2tlIiwiZmlsbCIsInZpZXdCb3giLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJkIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/index.tsx\n");

/***/ })

});