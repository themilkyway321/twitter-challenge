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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ tweetContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/useMutataion */ \"./lib/useMutataion.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction tweetContent() {\n    var ref, ref1;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\"), userName = ref2.data;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref3.data, mutate = ref3.mutate;\n    var ref4 = _slicedToArray((0,_lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet/\".concat(router.query.id, \"/fav\")), 1), toggleFav = ref4[0];\n    var onFavClick = function() {\n        if (!data) return;\n        mutate(function(prev) {\n            return prev && _objectSpread({}, prev, {\n                isLiked: !prev.isLiked\n            });\n        }, false);\n        toggleFav({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-gray-500top-2 left-1 text-2xl cursor-pointer bg-white hover:bg-gray-200 w-[35px] h-[35px] rounded-full\",\n                    children: \"\\u2190 See all your tweets\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 32,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[20%] left-[50%] translate-x-[-50%] bg-gray-50 w-[800px] border-2 rounded-lg p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl\",\n                        children: [\n                            userName === null || userName === void 0 ? void 0 : userName.name,\n                            \"'s Tweet\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"absolute bottom-0 right-2\",\n                        children: [\n                            \"Tweeted at \",\n                            data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.createAt.toString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"p-4 my-5 bg-blue-100 rounded-lg\",\n                        children: data === null || data === void 0 ? void 0 : (ref1 = data.tweet) === null || ref1 === void 0 ? void 0 : ref1.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onFavClick,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cls)(\"p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-blue-50 \", (data === null || data === void 0 ? void 0 : data.isLiked) ? \"text-red-400 hover:text-red-500\" : \"text-gray-400 hover:text-gray-500\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"h-6 w-6 \",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"currentColor\" : \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                                lineNumber: 40,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-2\",\n                                children: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"Like\" : \"Unlike\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alfl0\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 31,\n        columnNumber: 4\n    }, this);\n};\n_s(tweetContent, \"Naj7erAJ580/WdykmBM/PeC4nxc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_useMutataion__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsbUNBQW1DLENBQUM7OzBDQUN0TCw4REFBQ2EsS0FBRztnQ0FDRlQsU0FBUyxFQUFDLFVBQVU7Z0NBQ3BCVSxLQUFLLEVBQUMsNEJBQTRCO2dDQUNsQ0MsSUFBSSxFQUFFeEIsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVTLE9BQU8sSUFBRyxjQUFjLEdBQUMsTUFBTTtnQ0FDM0NnQixPQUFPLEVBQUMsV0FBVztnQ0FDbkJDLE1BQU0sRUFBQyxjQUFjO2dDQUNyQkMsYUFBVyxFQUFDLE1BQU07MENBRWxCLDRFQUFDQyxNQUFJO29DQUNIQyxhQUFhLEVBQUMsT0FBTztvQ0FDckJDLGNBQWMsRUFBQyxPQUFPO29DQUN0QkMsV0FBVyxFQUFDLEdBQUc7b0NBQ2ZDLENBQUMsRUFBQyw2SEFBNkg7Ozs7O3dDQUMvSDs7Ozs7b0NBQ0U7MENBQ04sOERBQUNwQixNQUFJO2dDQUFDQyxTQUFTLEVBQUMsTUFBTTswQ0FBRWIsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVTLE9BQU8sSUFBRSxNQUFNLEdBQUMsUUFBUTs7Ozs7b0NBQVE7Ozs7Ozs0QkFDdkQ7Ozs7OztvQkFDYjs7Ozs7O1lBQ0gsQ0FDTjtDQUNGO0dBMUN1QlYsWUFBWTs7UUFDbkJMLGtEQUFTO1FBQ0NDLDJDQUFNO1FBQ1BBLDJDQUFNO1FBR1hDLHlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciwgVHdlZXQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiXHJcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiLi4vLi4vbGliL3VzZU11dGF0YWlvblwiO1xyXG5pbXBvcnQgeyBjbHMgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBUd2VldFdpdGhVc2VyIGV4dGVuZHMgVHdlZXQge1xyXG4gIHVzZXI6VXNlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFR3ZWV0RGV0YWlsUmVzcG9uc2Uge1xyXG4gIG9rOmJvb2xlYW47XHJcbiAgdHdlZXQ6VHdlZXRXaXRoVXNlcjtcclxuICBpc0xpa2VkOmJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZWV0Q29udGVudCgpe1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YTp1c2VyTmFtZX0gPSB1c2VTV1IoXCIvYXBpL3VzZXJzL21lXCIpO1xyXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlfSA9IHVzZVNXUjxUd2VldERldGFpbFJlc3BvbnNlPihcclxuICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfWAgOiBudWxsXHJcbiAgKTtcclxuICBjb25zdCBbdG9nZ2xlRmF2XT0gdXNlTXV0YXRpb24oYC9hcGkvdHdlZXQvJHtyb3V0ZXIucXVlcnkuaWR9L2ZhdmApO1xyXG4gIGNvbnN0IG9uRmF2Q2xpY2sgPSgpPT57XHJcbiAgICBpZighZGF0YSlyZXR1cm47XHJcbiAgICBtdXRhdGUoKHByZXY6YW55KSA9PiBwcmV2ICYmIHsgLi4ucHJldiwgaXNMaWtlZDogIXByZXYuaXNMaWtlZCB9LCBmYWxzZSk7XHJcbiAgICB0b2dnbGVGYXYoe30pO1xyXG4gIH07XHJcbiAgcmV0dXJuKFxyXG4gICA8ZGl2PlxyXG4gICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDB0b3AtMiBsZWZ0LTEgdGV4dC0yeGwgIGN1cnNvci1wb2ludGVyIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMjAwIHctWzM1cHhdIGgtWzM1cHhdIHJvdW5kZWQtZnVsbFwiPiZsYXJyOyBTZWUgYWxsIHlvdXIgdHdlZXRzPC9zcGFuPjwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzIwJV0gbGVmdC1bNTAlXSAgdHJhbnNsYXRlLXgtWy01MCVdICBiZy1ncmF5LTUwIHctWzgwMHB4XSBib3JkZXItMiByb3VuZGVkLWxnIHAtNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj57dXNlck5hbWU/Lm5hbWV9J3MgVHdlZXQ8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMlwiPlR3ZWV0ZWQgYXQge2RhdGE/LnR3ZWV0Py5jcmVhdGVBdC50b1N0cmluZygpfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTQgbXktNSBiZy1ibHVlLTEwMCByb3VuZGVkLWxnXCI+e2RhdGE/LnR3ZWV0Py5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkZhdkNsaWNrfSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzKFwicC0zIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ibHVlLTUwIFwiLCBkYXRhPy5pc0xpa2VkID8gXCJ0ZXh0LXJlZC00MDAgaG92ZXI6dGV4dC1yZWQtNTAwXCI6XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIil9PlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9e2RhdGE/LmlzTGlrZWQgPyBcImN1cnJlbnRDb2xvclwiOlwibm9uZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTJcIj57ZGF0YT8uaXNMaWtlZD8gXCJMaWtlXCI6XCJVbmxpa2VcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsInVzZU11dGF0aW9uIiwiY2xzIiwiTGluayIsInR3ZWV0Q29udGVudCIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VyTmFtZSIsInF1ZXJ5IiwiaWQiLCJtdXRhdGUiLCJ0b2dnbGVGYXYiLCJvbkZhdkNsaWNrIiwicHJldiIsImlzTGlrZWQiLCJkaXYiLCJocmVmIiwic3BhbiIsImNsYXNzTmFtZSIsInAiLCJuYW1lIiwidHdlZXQiLCJjcmVhdGVBdCIsInRvU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsImFyaWEtaGlkZGVuIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});