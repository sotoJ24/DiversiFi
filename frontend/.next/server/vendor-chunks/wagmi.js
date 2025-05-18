"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wagmi";
exports.ids = ["vendor-chunks/wagmi"];
exports.modules = {

/***/ "(ssr)/./node_modules/wagmi/dist/esm/context.js":
/*!************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/context.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WagmiContext: () => (/* binding */ WagmiContext),\n/* harmony export */   WagmiProvider: () => (/* binding */ WagmiProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hydrate.js */ \"(ssr)/./node_modules/wagmi/dist/esm/hydrate.js\");\n/* __next_internal_client_entry_do_not_use__ WagmiContext,WagmiProvider auto */ \n\nconst WagmiContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\nfunction WagmiProvider(parameters) {\n    const { children, config } = parameters;\n    const props = {\n        value: config\n    };\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.Hydrate, parameters, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WagmiContext.Provider, props, children));\n} //# sourceMappingURL=context.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O2dGQUdvRDtBQUNkO0FBRS9CLE1BQU1HLDZCQUFlSCxvREFBQUEsQ0FFMUJJLFdBQVU7QUFRTixTQUFVQyxjQUNkQyxVQUF1RDtJQUV2RCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUdGO0lBRTdCLE1BQU1HLFFBQVE7UUFBRUMsT0FBT0Y7SUFBTTtJQUM3QixxQkFBT1Asb0RBQUFBLENBQ0xDLGdEQUFBQSxFQUNBSSwwQkFDQUwsb0RBQUFBLENBQWNFLGFBQWFRLFFBQVEsRUFBRUYsT0FBT0Y7QUFFaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXZlcnNpZmktZnJvbnRlbmQvLi4vLi4vc3JjL2NvbnRleHQudHM/YmY2ZiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiY3JlYXRlRWxlbWVudCIsIkh5ZHJhdGUiLCJXYWdtaUNvbnRleHQiLCJ1bmRlZmluZWQiLCJXYWdtaVByb3ZpZGVyIiwicGFyYW1ldGVycyIsImNoaWxkcmVuIiwiY29uZmlnIiwicHJvcHMiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/context.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/errors/base.js":
/*!****************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/errors/base.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseError: () => (/* binding */ BaseError)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/errors/base.js\");\n/* harmony import */ var _utils_getVersion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getVersion.js */ \"(ssr)/./node_modules/wagmi/dist/esm/utils/getVersion.js\");\n\n\nclass BaseError extends _wagmi_core__WEBPACK_IMPORTED_MODULE_0__.BaseError {\n    constructor() {\n        super(...arguments);\n        Object.defineProperty(this, \"name\", {\n            enumerable: true,\n            configurable: true,\n            writable: true,\n            value: 'WagmiError'\n        });\n    }\n    get docsBaseUrl() {\n        return 'https://wagmi.sh/react';\n    }\n    get version() {\n        return (0,_utils_getVersion_js__WEBPACK_IMPORTED_MODULE_1__.getVersion)();\n    }\n}\n//# sourceMappingURL=base.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vZXJyb3JzL2Jhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBQ0Q7QUFDN0Msd0JBQXdCLGtEQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFVO0FBQ3pCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpdmVyc2lmaS1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS9lcnJvcnMvYmFzZS5qcz84Nzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFcnJvciBhcyBDb3JlRXJyb3IgfSBmcm9tICdAd2FnbWkvY29yZSc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uIH0gZnJvbSAnLi4vdXRpbHMvZ2V0VmVyc2lvbi5qcyc7XG5leHBvcnQgY2xhc3MgQmFzZUVycm9yIGV4dGVuZHMgQ29yZUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1dhZ21pRXJyb3InXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgZG9jc0Jhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly93YWdtaS5zaC9yZWFjdCc7XG4gICAgfVxuICAgIGdldCB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0VmVyc2lvbigpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/errors/base.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/errors/context.js":
/*!*******************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/errors/context.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WagmiProviderNotFoundError: () => (/* binding */ WagmiProviderNotFoundError)\n/* harmony export */ });\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ \"(ssr)/./node_modules/wagmi/dist/esm/errors/base.js\");\n\nclass WagmiProviderNotFoundError extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseError {\n    constructor() {\n        super('`useConfig` must be used within `WagmiProvider`.', {\n            docsPath: '/api/WagmiProvider',\n        });\n        Object.defineProperty(this, \"name\", {\n            enumerable: true,\n            configurable: true,\n            writable: true,\n            value: 'WagmiProviderNotFoundError'\n        });\n    }\n}\n//# sourceMappingURL=context.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vZXJyb3JzL2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFDL0IseUNBQXlDLCtDQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpdmVyc2lmaS1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS9lcnJvcnMvY29udGV4dC5qcz8zYmFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJy4vYmFzZS5qcyc7XG5leHBvcnQgY2xhc3MgV2FnbWlQcm92aWRlck5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYHVzZUNvbmZpZ2AgbXVzdCBiZSB1c2VkIHdpdGhpbiBgV2FnbWlQcm92aWRlcmAuJywge1xuICAgICAgICAgICAgZG9jc1BhdGg6ICcvYXBpL1dhZ21pUHJvdmlkZXInLFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogJ1dhZ21pUHJvdmlkZXJOb3RGb3VuZEVycm9yJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/errors/context.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js":
/*!********************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hooks/useConfig.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useConfig: () => (/* binding */ useConfig)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context.js */ \"(ssr)/./node_modules/wagmi/dist/esm/context.js\");\n/* harmony import */ var _errors_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/context.js */ \"(ssr)/./node_modules/wagmi/dist/esm/errors/context.js\");\n/* __next_internal_client_entry_do_not_use__ useConfig auto */ \n\n\n/** https://wagmi.sh/react/api/hooks/useConfig */ function useConfig(parameters = {}) {\n    const config = parameters.config ?? (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_js__WEBPACK_IMPORTED_MODULE_1__.WagmiContext);\n    if (!config) throw new _errors_context_js__WEBPACK_IMPORTED_MODULE_2__.WagmiProviderNotFoundError();\n    return config;\n} //# sourceMappingURL=useConfig.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaG9va3MvdXNlQ29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7K0RBR2tDO0FBRVU7QUFDcUI7QUFRakUsa0RBQ00sU0FBVUcsVUFDZEMsYUFBMEMsRUFBRTtJQUU1QyxNQUFNQyxTQUFTRCxXQUFXQyxNQUFNLElBQUlMLGlEQUFBQSxDQUFXQyxxREFBQUE7SUFDL0MsSUFBSSxDQUFDSSxRQUFRLE1BQU0sSUFBSUgsMEVBQUFBO0lBQ3ZCLE9BQU9HO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXZlcnNpZmktZnJvbnRlbmQvLi4vLi4vLi4vc3JjL2hvb2tzL3VzZUNvbmZpZy50cz9lYTZlIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJXYWdtaUNvbnRleHQiLCJXYWdtaVByb3ZpZGVyTm90Rm91bmRFcnJvciIsInVzZUNvbmZpZyIsInBhcmFtZXRlcnMiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hooks/useConfig.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/hydrate.js":
/*!************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/hydrate.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hydrate: () => (/* binding */ Hydrate)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wagmi/core */ \"(ssr)/./node_modules/@wagmi/core/dist/esm/hydrate.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Hydrate auto */ \n\nfunction Hydrate(parameters) {\n    const { children, config, initialState, reconnectOnMount = true } = parameters;\n    const { onMount } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_1__.hydrate)(config, {\n        initialState,\n        reconnectOnMount\n    });\n    // Hydrate for non-SSR\n    if (!config._internal.ssr) onMount();\n    // Hydrate for SSR\n    const active = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);\n    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!active.current) return;\n        if (!config._internal.ssr) return;\n        onMount();\n        return ()=>{\n            active.current = false;\n        };\n    }, []);\n    return children;\n} //# sourceMappingURL=hydrate.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vaHlkcmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7NkRBRXdFO0FBQ1o7QUFRdEQsU0FBVUcsUUFBUUMsVUFBaUQ7SUFDdkUsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxtQkFBbUIsSUFBSSxFQUFFLEdBQUdKO0lBRXBFLE1BQU0sRUFBRUssT0FBTyxFQUFFLEdBQUdULG9EQUFBQSxDQUFRTSxRQUFRO1FBQ2xDQztRQUNBQzs7SUFHRixzQkFBc0I7SUFDdEIsSUFBSSxDQUFDRixPQUFPSSxTQUFTLENBQUNDLEdBQUcsRUFBRUY7SUFFM0Isa0JBQWtCO0lBQ2xCLE1BQU1HLFNBQVNWLDZDQUFBQSxDQUFPO0lBQ3RCLG1GQUFtRjtJQUNuRkQsZ0RBQUFBLENBQVU7UUFDUixJQUFJLENBQUNXLE9BQU9DLE9BQU8sRUFBRTtRQUNyQixJQUFJLENBQUNQLE9BQU9JLFNBQVMsQ0FBQ0MsR0FBRyxFQUFFO1FBQzNCRjtRQUNBLE9BQU87WUFDTEcsT0FBT0MsT0FBTyxHQUFHO1FBQ25CO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBT1I7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2RpdmVyc2lmaS1mcm9udGVuZC8uLi8uLi9zcmMvaHlkcmF0ZS50cz8yNTNiIl0sIm5hbWVzIjpbImh5ZHJhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIeWRyYXRlIiwicGFyYW1ldGVycyIsImNoaWxkcmVuIiwiY29uZmlnIiwiaW5pdGlhbFN0YXRlIiwicmVjb25uZWN0T25Nb3VudCIsIm9uTW91bnQiLCJfaW50ZXJuYWwiLCJzc3IiLCJhY3RpdmUiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/hydrate.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/utils/getVersion.js":
/*!*********************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/utils/getVersion.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVersion: () => (/* binding */ getVersion)\n/* harmony export */ });\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version.js */ \"(ssr)/./node_modules/wagmi/dist/esm/version.js\");\n\nconst getVersion = () => `wagmi@${_version_js__WEBPACK_IMPORTED_MODULE_0__.version}`;\n//# sourceMappingURL=getVersion.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vdXRpbHMvZ2V0VmVyc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUNqQyxrQ0FBa0MsZ0RBQU8sQ0FBQztBQUNqRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RpdmVyc2lmaS1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS91dGlscy9nZXRWZXJzaW9uLmpzP2UxZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiBgd2FnbWlAJHt2ZXJzaW9ufWA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRWZXJzaW9uLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/utils/getVersion.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wagmi/dist/esm/version.js":
/*!************************************************!*\
  !*** ./node_modules/wagmi/dist/esm/version.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = '2.15.3';\n//# sourceMappingURL=version.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2FnbWkvZGlzdC9lc20vdmVyc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2RpdmVyc2lmaS1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy93YWdtaS9kaXN0L2VzbS92ZXJzaW9uLmpzPzRlOGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZlcnNpb24gPSAnMi4xNS4zJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZlcnNpb24uanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wagmi/dist/esm/version.js\n");

/***/ })

};
;