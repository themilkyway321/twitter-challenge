"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/create-account";
exports.ids = ["pages/api/users/create-account"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/create-account.ts":
/*!*******************************************!*\
  !*** ./pages/api/users/create-account.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email  } = req.body;\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (user) {\n            return res.status(200).end();\n        }\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n            data: {\n                name,\n                email\n            }\n        });\n        return res.status(201).end();\n    }\n    return res.status(405).end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLWFjY291bnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUM7QUFFbEIsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBa0IsRUFDbEJDLEdBQW1CLEVBQ25CO0lBQ0EsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFDO1FBQ3ZCLE1BQU0sRUFBQ0MsSUFBSSxHQUFFQyxLQUFLLEdBQUMsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBQzlCLE1BQU1DLElBQUksR0FBRyxNQUFNUiwrREFBa0IsQ0FBQztZQUNwQ1UsS0FBSyxFQUFDO2dCQUNKSixLQUFLO2FBQ047U0FDRixDQUFDO1FBQ0YsSUFBR0UsSUFBSSxFQUFDO1lBQ04sT0FBT0wsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsTUFBTVosMkRBQWMsQ0FBQztZQUNuQmMsSUFBSSxFQUFDO2dCQUNIVCxJQUFJO2dCQUNKQyxLQUFLO2FBQ047U0FDRixDQUFDLENBQUM7UUFDSCxPQUFPSCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7S0FDOUI7SUFDSCxPQUFPVCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXJzL2NyZWF0ZS1hY2NvdW50LnRzPzczODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTpOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6TmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKXtcclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTp7XHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcclxuICAgIH1cclxuICAgIGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcclxuICAgICAgZGF0YTp7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuZW5kKCk7XHJcbiAgfVxyXG5yZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG59Il0sIm5hbWVzIjpbImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic3RhdHVzIiwiZW5kIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/create-account.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/create-account.ts"));
module.exports = __webpack_exports__;

})();