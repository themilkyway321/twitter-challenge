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
exports.id = "pages/api/tweet";
exports.ids = ["pages/api/tweet"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = global.client || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.client = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUs5QyxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJLElBQUlELHdEQUFZLEVBQUU7QUFDbEQsSUFBR0csSUFBc0MsRUFBRUQsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQztBQUVsRSxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9jbGllbnQudHM/MTU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgY2xpZW50OlByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcclxufVxyXG5jb25zdCBjbGllbnQgPSBnbG9iYWwuY2xpZW50IHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLmNsaWVudCA9IGNsaWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNsaWVudCIsImdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/client.ts\n");

/***/ }),

/***/ "(api)/./lib/withHandler.ts":
/*!****************************!*\
  !*** ./lib/withHandler.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ methods , isPrivate =true , handler  }) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"Please log in.\"\n            });\n        }\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvd2l0aEhhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWFlLFNBQVNBLFdBQVcsQ0FBQyxFQUFDQyxPQUFPLEdBQUNDLFNBQVMsRUFBRyxJQUFJLEdBQUVDLE9BQU8sR0FBWSxFQUNoRjtJQUNBLE9BQU8sZUFBZ0JDLEdBQWtCLEVBQUVDLEdBQW1CLEVBQWU7UUFDM0UsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxRQUFRLENBQUNILEdBQUcsQ0FBQ0UsTUFBTSxDQUFRLEVBQUM7WUFDcEQsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1NBQzVCO1FBQ0gsSUFBR1AsU0FBUyxJQUFJLENBQUNFLEdBQUcsQ0FBQ00sT0FBTyxDQUFDQyxJQUFJLEVBQUM7WUFDaEMsT0FBT04sR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztnQkFBQ0MsRUFBRSxFQUFDLEtBQUs7Z0JBQUVDLEtBQUssRUFBQyxnQkFBZ0I7YUFBQyxDQUFDO1NBQ2hFO1FBQ0MsSUFBRztZQUNELE1BQU1YLE9BQU8sQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLENBQUMsQ0FBQztTQUN4QixRQUFNUyxLQUFLLEVBQUM7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU9ULEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7Z0JBQUNFLEtBQUs7YUFBQyxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi93aXRoSGFuZGxlci50cz8zNWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVR5cGUge1xyXG4gIG9rOmJvb2xlYW47XHJcbiAgW2tleTpzdHJpbmddOmFueTtcclxufVxyXG50eXBlIG1ldGhvZCA9IFwiR0VUXCIgfCBcIlBPU1RcIiB8XCJERUxFVEVcIjtcclxuaW50ZXJmYWNlIENvbmZpZ1R5cGV7XHJcbiAgbWV0aG9kczptZXRob2RbXSxcclxuICBoYW5kbGVyOihyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpPT52b2lkLFxyXG4gIGlzUHJpdmF0ZT86Ym9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSGFuZGxlcih7bWV0aG9kcyxpc1ByaXZhdGUgPSB0cnVlLCBoYW5kbGVyfTpDb25maWdUeXBlKVxyXG4gIHtcclxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOk5leHRBcGlSZXNwb25zZSk6IFByb21pc2U8YW55PntcclxuICAgIGlmKHJlcS5tZXRob2QgJiYgIW1ldGhvZHMuaW5jbHVkZXMocmVxLm1ldGhvZCBhcyBhbnkpKXtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICAgICAgfVxyXG4gICAgaWYoaXNQcml2YXRlICYmICFyZXEuc2Vzc2lvbi51c2VyKXtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtvazpmYWxzZSwgZXJyb3I6XCJQbGVhc2UgbG9nIGluLlwifSlcclxuICAgIH1cclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IGhhbmRsZXIocmVxLHJlcyk7XHJcbiAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3J9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwibWV0aG9kcyIsImlzUHJpdmF0ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpbmNsdWRlcyIsInN0YXR1cyIsImVuZCIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsIm9rIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/withHandler.ts\n");

/***/ }),

/***/ "(api)/./lib/withSession.ts":
/*!****************************!*\
  !*** ./lib/withSession.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOptions = {\n    cookieName: \"twittersession\",\n    password: \"idontknowidontknowwhattodooooo!!!\"\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOptions);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvd2l0aFNlc3Npb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEQ7QUFVNUQsTUFBTUMsYUFBYSxHQUFHO0lBQ3BCQyxVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCQyxRQUFRLEVBQUUsbUNBQW1DO0NBQzlDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxFQUFPLEVBQUU7SUFDdEMsT0FBT0wsMEVBQXVCLENBQUNLLEVBQUUsRUFBRUosYUFBYSxDQUFDLENBQUM7Q0FDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbGliL3dpdGhTZXNzaW9uLnRzPzRlNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uQXBpUm91dGUgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiaXJvbi1zZXNzaW9uXCIge1xyXG4gIGludGVyZmFjZSBJcm9uU2Vzc2lvbkRhdGEge1xyXG4gICAgdXNlcj86IHtcclxuICAgICAgaWQ6IG51bWJlcjtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjb29raWVPcHRpb25zID0ge1xyXG4gIGNvb2tpZU5hbWU6IFwidHdpdHRlcnNlc3Npb25cIixcclxuICBwYXNzd29yZDogXCJpZG9udGtub3dpZG9udGtub3d3aGF0dG9kb29vb28hISFcIlxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcGlTZXNzaW9uKGZuOiBhbnkpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoZm4sIGNvb2tpZU9wdGlvbnMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsImNvb2tpZU9wdGlvbnMiLCJjb29raWVOYW1lIiwicGFzc3dvcmQiLCJ3aXRoQXBpU2Vzc2lvbiIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/withSession.ts\n");

/***/ }),

/***/ "(api)/./pages/api/tweet/index.ts":
/*!**********************************!*\
  !*** ./pages/api/tweet/index.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_withSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/withSession */ \"(api)/./lib/withSession.ts\");\n/* harmony import */ var _lib_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/withHandler */ \"(api)/./lib/withHandler.ts\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/client */ \"(api)/./lib/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_withSession__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_withSession__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const tweets = await _lib_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tweet.findMany({\n            include: {\n                _count: {\n                    select: {\n                        favs: true\n                    }\n                }\n            }\n        });\n        res.json({\n            ok: true,\n            tweets\n        });\n    }\n    if (req.method === \"POST\") {\n        const { body: { description , createAt  } , session: { user  } ,  } = req;\n        const tweet = await _lib_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tweet.create({\n            data: {\n                description,\n                createAt,\n                user: {\n                    connect: {\n                        id: user?.id\n                    }\n                }\n            }\n        });\n        res.json({\n            ok: true,\n            tweet\n        });\n    }\n    return res.status(405).end();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withSession__WEBPACK_IMPORTED_MODULE_0__.withApiSession)((0,_lib_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    methods: [\n        \"GET\",\n        \"POST\"\n    ],\n    handler\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXQvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMwRDtBQUNXO0FBQzVCO0FBRXpDLGVBQWVHLE9BQU8sQ0FDcEJDLEdBQWtCLEVBQ2xCQyxHQUFpQyxFQUNqQztJQUNBLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBQztRQUN0QixNQUFNQyxNQUFNLEdBQUcsTUFBTUwsa0VBQXFCLENBQUM7WUFDekNRLE9BQU8sRUFBQztnQkFDTkMsTUFBTSxFQUFDO29CQUNMQyxNQUFNLEVBQUM7d0JBQ0xDLElBQUksRUFBQyxJQUFJO3FCQUNWO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBQ0ZSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO1lBQ1BDLEVBQUUsRUFBQyxJQUFJO1lBQ1BSLE1BQU07U0FDUCxDQUFDO0tBQ0g7SUFJRCxJQUFHSCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFDdkIsTUFBTSxFQUNKVSxJQUFJLEVBQUUsRUFBRUMsV0FBVyxHQUFDQyxRQUFRLEdBQUUsR0FDOUJDLE9BQU8sRUFBRSxFQUFFQyxJQUFJLEdBQUUsS0FDbEIsR0FBR2hCLEdBQUc7UUFDUCxNQUFNSSxLQUFLLEdBQUcsTUFBTU4sZ0VBQW1CLENBQUM7WUFDdENvQixJQUFJLEVBQUM7Z0JBQ0hMLFdBQVc7Z0JBQ1hDLFFBQVE7Z0JBQ1JFLElBQUksRUFBQztvQkFDSEcsT0FBTyxFQUFDO3dCQUNOQyxFQUFFLEVBQUNKLElBQUksRUFBRUksRUFBRTtxQkFDWjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUNGbkIsR0FBRyxDQUFDUyxJQUFJLENBQUM7WUFDUEMsRUFBRSxFQUFDLElBQUk7WUFDUFAsS0FBSztTQUNOLENBQUM7S0FDSDtJQUNELE9BQU9ILEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Q0FDOUI7QUFFRCxpRUFBZTFCLGdFQUFjLENBQzNCQyw0REFBVyxDQUFDO0lBQ1owQixPQUFPLEVBQUM7UUFBQyxLQUFLO1FBQUMsTUFBTTtLQUFDO0lBQ3RCeEIsT0FBTztDQUNSLENBQUMsQ0FDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS90d2VldC9pbmRleC50cz9jZjVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBpU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvd2l0aFNlc3Npb25cIjtcclxuaW1wb3J0IHdpdGhIYW5kbGVyLCB7IFJlc3BvbnNlVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvd2l0aEhhbmRsZXJcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL2NsaWVudFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6TmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOk5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XHJcbikge1xyXG4gIGlmKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpe1xyXG4gICAgY29uc3QgdHdlZXRzID0gYXdhaXQgY2xpZW50LnR3ZWV0LmZpbmRNYW55KHtcclxuICAgICAgaW5jbHVkZTp7XHJcbiAgICAgICAgX2NvdW50OntcclxuICAgICAgICAgIHNlbGVjdDp7XHJcbiAgICAgICAgICAgIGZhdnM6dHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgIG9rOnRydWUsXHJcbiAgICAgIHR3ZWV0cyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKXtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYm9keTogeyBkZXNjcmlwdGlvbixjcmVhdGVBdCB9LFxyXG4gICAgICBzZXNzaW9uOiB7IHVzZXIgfSxcclxuICAgIH0gPSByZXE7XHJcbiAgICBjb25zdCB0d2VldCA9IGF3YWl0IGNsaWVudC50d2VldC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOntcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBjcmVhdGVBdCxcclxuICAgICAgICB1c2VyOntcclxuICAgICAgICAgIGNvbm5lY3Q6e1xyXG4gICAgICAgICAgICBpZDp1c2VyPy5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgIG9rOnRydWUsXHJcbiAgICAgIHR3ZWV0LFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaVNlc3Npb24oXHJcbiAgd2l0aEhhbmRsZXIoe1xyXG4gIG1ldGhvZHM6W1wiR0VUXCIsXCJQT1NUXCJdLFxyXG4gIGhhbmRsZXIsXHJcbn0pXHJcbik7Il0sIm5hbWVzIjpbIndpdGhBcGlTZXNzaW9uIiwid2l0aEhhbmRsZXIiLCJjbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidHdlZXRzIiwidHdlZXQiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJfY291bnQiLCJzZWxlY3QiLCJmYXZzIiwianNvbiIsIm9rIiwiYm9keSIsImRlc2NyaXB0aW9uIiwiY3JlYXRlQXQiLCJzZXNzaW9uIiwidXNlciIsImNyZWF0ZSIsImRhdGEiLCJjb25uZWN0IiwiaWQiLCJzdGF0dXMiLCJlbmQiLCJtZXRob2RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweet/index.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzP2I3MWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweet/index.ts"));
module.exports = __webpack_exports__;

})();