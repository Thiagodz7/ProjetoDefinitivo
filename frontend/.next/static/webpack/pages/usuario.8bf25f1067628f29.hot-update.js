"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usuario",{

/***/ "./pages/api/usuarioAPi.jsx":
/*!**********************************!*\
  !*** ./pages/api/usuarioAPi.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usuarioApi; }\n/* harmony export */ });\n/* harmony import */ var C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction usuarioApi() {\n    _s();\n    var baseUrl = \"https://localhost:5001/api/Usuarios\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        usuarioId: 0,\n        usuario: \"\",\n        senha: \"\"\n    }), usuarioSelecionado = ref1[0], setUsuarioSelecionado = ref1[1];\n    usuarioPost = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    delete usuarioSelecionado.usuarioId;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseUrl, usuarioSelecionado).then(function(response) {\n                        setData(data.concat(response.data));\n                    }).catch(function(error) {\n                        console.log(error);\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var selecionarUsuario = function(usuario, opcao) {\n        setUsuarioSelecionado(usuario);\n    };\n    var usuarioGet = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseUrl).then(function(response) {\n                            setData(response.data);\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioGet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var usuarioPut = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().put(baseUrl + \"/\" + usuarioSelecionado.usuarioId, usuarioSelecionado).then(function(response) {\n                            var resposta = response.data;\n                            var dadosAuxiliar = data;\n                            dadosAuxiliar.map(function(usuarioo) {\n                                if (usuario.usuarioId === usuarioSelecionado.usuarioId) {\n                                    usuario.usuario = resposta.usuario;\n                                    usuario.senha = resposta.senha;\n                                }\n                            });\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioPut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var usuarioDelete = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default()[\"delete\"](baseUrl + \"/\" + cursoSelecionado.cursoId).then(function(response) {\n                            setData(data.filter(function(usuario) {\n                                return usuario.usuarioId !== response.data;\n                            }));\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioDelete() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        usuarioGet();\n    });\n};\n_s(usuarioApi, \"DJLBmK6MoSxGopl0CNdhMHnJpzo=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXN1YXJpb0FQaS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLFFBQVEsQ0FBQ0csVUFBVSxHQUFHLENBQUM7O0lBQ3BDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQXFDO0lBQ3JELEdBQUssQ0FBbUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJHLElBQUksR0FBYUgsR0FBWSxLQUF2QkksT0FBTyxHQUFJSixHQUFZO0lBRXBDLEdBQUssQ0FBK0NBLElBSWxELEdBSmtEQSwrQ0FBUSxDQUFDLENBQUM7UUFDNURLLFNBQVMsRUFBRSxDQUFDO1FBQ1pDLE9BQU8sRUFBRSxDQUFFO1FBQ1hDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQyxHQUpNQyxrQkFBa0IsR0FBMkJSLElBSWxELEtBSnlCUyxxQkFBcUIsR0FBSVQsSUFJbEQ7SUFFRFUsV0FBVyx5TUFBRyxRQUFRLFdBQUksQ0FBQzs7OztvQkFDMUIsTUFBTSxDQUFDRixrQkFBa0IsQ0FBQ0gsU0FBUzs7MkJBQzdCUCxpREFDQyxDQUFDSSxPQUFPLEVBQUVNLGtCQUFrQixFQUNoQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7d0JBQ25CVCxPQUFPLENBQUNELElBQUksQ0FBQ1csTUFBTSxDQUFDRCxRQUFRLENBQUNWLElBQUk7b0JBQ25DLENBQUMsRUFDQVksS0FBSyxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7d0JBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztvQkFDbkIsQ0FBQzs7Ozs7O0lBQ0wsQ0FBQztJQUdELEdBQUssQ0FBQ0csaUJBQWlCLEdBQUcsUUFBUSxDQUFQYixPQUFPLEVBQUVjLEtBQUssRUFBSyxDQUFDO1FBQzdDWCxxQkFBcUIsQ0FBQ0gsT0FBTztJQUMvQixDQUFDO0lBRUQsR0FBSyxDQUFDZSxVQUFVO3lOQUFHLFFBQVEsV0FBSSxDQUFDOzs7OzsrQkFDeEJ2QixnREFDQSxDQUFDSSxPQUFPLEVBQ1hVLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDOzRCQUNuQlQsT0FBTyxDQUFDUyxRQUFRLENBQUNWLElBQUk7d0JBQ3ZCLENBQUMsRUFDQVksS0FBSyxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7NEJBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSzt3QkFDbkIsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQzt3QkFUS0ssVUFBVTs7OztJQVdoQixHQUFLLENBQUNFLFVBQVU7eU5BQUcsUUFBUSxXQUFJLENBQUM7Ozs7OytCQUN4QnpCLGdEQUNBLENBQUNJLE9BQU8sR0FBRyxDQUFHLEtBQUdNLGtCQUFrQixDQUFDSCxTQUFTLEVBQUVHLGtCQUFrQixFQUNwRUksSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7NEJBQ25CLEdBQUcsQ0FBQ1ksUUFBUSxHQUFHWixRQUFRLENBQUNWLElBQUk7NEJBQzVCLEdBQUcsQ0FBQ3VCLGFBQWEsR0FBR3ZCLElBQUk7NEJBQ3hCdUIsYUFBYSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQztnQ0FDL0IsRUFBRSxFQUFFdEIsT0FBTyxDQUFDRCxTQUFTLEtBQUtHLGtCQUFrQixDQUFDSCxTQUFTLEVBQUUsQ0FBQztvQ0FDdkRDLE9BQU8sQ0FBQ0EsT0FBTyxHQUFHbUIsUUFBUSxDQUFDbkIsT0FBTztvQ0FDbENBLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHa0IsUUFBUSxDQUFDbEIsS0FBSztnQ0FDaEMsQ0FBQzs0QkFDSCxDQUFDO3dCQUNILENBQUMsRUFDQVEsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7NEJBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSzt3QkFDbkIsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQzt3QkFoQktPLFVBQVU7Ozs7SUFrQmhCLEdBQUssQ0FBQ00sYUFBYTt5TkFBRyxRQUFRLFdBQUksQ0FBQzs7Ozs7K0JBQzNCL0Isc0RBQ0csQ0FBQ0ksT0FBTyxHQUFHLENBQUcsS0FBRzZCLGdCQUFnQixDQUFDQyxPQUFPLEVBQy9DcEIsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7NEJBQ25CVCxPQUFPLENBQUNELElBQUksQ0FBQzhCLE1BQU0sQ0FBQyxRQUFRLENBQVAzQixPQUFPO2dDQUFLQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsU0FBUyxLQUFLUSxRQUFRLENBQUNWLElBQUk7O3dCQUN0RSxDQUFDLEVBQ0FZLEtBQUssQ0FBQyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzRCQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7d0JBQ25CLENBQUM7Ozs7OztRQUNMLENBQUM7d0JBVEthLGFBQWE7Ozs7SUFXbkI5QixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZzQixVQUFVO0lBQ1osQ0FBQztBQUNILENBQUM7R0F0RXVCcEIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvdXN1YXJpb0FQaS5qc3g/YjFhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzdWFyaW9BcGkoKSB7XHJcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvVXN1YXJpb3NcIjtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFt1c3VhcmlvU2VsZWNpb25hZG8sIHNldFVzdWFyaW9TZWxlY2lvbmFkb10gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c3VhcmlvSWQ6IDAsXHJcbiAgICB1c3VhcmlvOiBcIlwiLFxyXG4gICAgc2VuaGE6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gICB1c3VhcmlvUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGRlbGV0ZSB1c3VhcmlvU2VsZWNpb25hZG8udXN1YXJpb0lkO1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLnBvc3QoYmFzZVVybCwgdXN1YXJpb1NlbGVjaW9uYWRvKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREYXRhKGRhdGEuY29uY2F0KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IHNlbGVjaW9uYXJVc3VhcmlvID0gKHVzdWFyaW8sIG9wY2FvKSA9PiB7XHJcbiAgICBzZXRVc3VhcmlvU2VsZWNpb25hZG8odXN1YXJpbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXN1YXJpb0dldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5nZXQoYmFzZVVybClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXN1YXJpb1B1dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5wdXQoYmFzZVVybCArIFwiL1wiICsgdXN1YXJpb1NlbGVjaW9uYWRvLnVzdWFyaW9JZCwgdXN1YXJpb1NlbGVjaW9uYWRvKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB2YXIgcmVzcG9zdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHZhciBkYWRvc0F1eGlsaWFyID0gZGF0YTtcclxuICAgICAgICBkYWRvc0F1eGlsaWFyLm1hcCgodXN1YXJpb28pID0+IHtcclxuICAgICAgICAgIGlmICh1c3VhcmlvLnVzdWFyaW9JZCA9PT0gdXN1YXJpb1NlbGVjaW9uYWRvLnVzdWFyaW9JZCkge1xyXG4gICAgICAgICAgICB1c3VhcmlvLnVzdWFyaW8gPSByZXNwb3N0YS51c3VhcmlvO1xyXG4gICAgICAgICAgICB1c3VhcmlvLnNlbmhhID0gcmVzcG9zdGEuc2VuaGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzdWFyaW9EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAuZGVsZXRlKGJhc2VVcmwgKyBcIi9cIiArIGN1cnNvU2VsZWNpb25hZG8uY3Vyc29JZClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhLmZpbHRlcigodXN1YXJpbykgPT4gdXN1YXJpby51c3VhcmlvSWQgIT09IHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzdWFyaW9HZXQoKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzdWFyaW9BcGkiLCJiYXNlVXJsIiwiZGF0YSIsInNldERhdGEiLCJ1c3VhcmlvSWQiLCJ1c3VhcmlvIiwic2VuaGEiLCJ1c3VhcmlvU2VsZWNpb25hZG8iLCJzZXRVc3VhcmlvU2VsZWNpb25hZG8iLCJ1c3VhcmlvUG9zdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25jYXQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbGVjaW9uYXJVc3VhcmlvIiwib3BjYW8iLCJ1c3VhcmlvR2V0IiwiZ2V0IiwidXN1YXJpb1B1dCIsInB1dCIsInJlc3Bvc3RhIiwiZGFkb3NBdXhpbGlhciIsIm1hcCIsInVzdWFyaW9vIiwidXN1YXJpb0RlbGV0ZSIsImRlbGV0ZSIsImN1cnNvU2VsZWNpb25hZG8iLCJjdXJzb0lkIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/usuarioAPi.jsx\n");

/***/ })

});