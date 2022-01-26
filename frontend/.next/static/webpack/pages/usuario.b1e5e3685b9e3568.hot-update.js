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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usuarioApi; }\n/* harmony export */ });\n/* harmony import */ var C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction usuarioApi() {\n    _s();\n    var baseUrl = \"https://localhost:5001/api/Usuarios\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        usuarioId: 0,\n        usuario: \"\",\n        senha: \"\"\n    }), usuarioSelecionado = ref1[0], setUsuarioSelecionado = ref1[1];\n    handleChange = function(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setUsuarioSelecionado(_objectSpread({}, usuarioSelecionado, _defineProperty({}, name, value)));\n        console.log(usuarioSelecionado);\n    };\n    var usuarioPost = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        delete usuarioSelecionado.usuarioId;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseUrl, usuarioSelecionado).then(function(response) {\n                            setData(data.concat(response.data));\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioPost() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var selecionarUsuario = function(usuario, opcao) {\n        setUsuarioSelecionado(usuario);\n    };\n    var usuarioGet = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseUrl).then(function(response) {\n                            setData(response.data);\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioGet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var usuarioPut = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().put(baseUrl + \"/\" + usuarioSelecionado.usuarioId, usuarioSelecionado).then(function(response) {\n                            var resposta = response.data;\n                            var dadosAuxiliar = data;\n                            dadosAuxiliar.map(function(usuarioo) {\n                                if (usuario.usuarioId === usuarioSelecionado.usuarioId) {\n                                    usuario.usuario = resposta.usuario;\n                                    usuario.senha = resposta.senha;\n                                }\n                            });\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioPut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var usuarioDelete = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default()[\"delete\"](baseUrl + \"/\" + cursoSelecionado.cursoId).then(function(response) {\n                            setData(data.filter(function(usuario) {\n                                return usuario.usuarioId !== response.data;\n                            }));\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioDelete() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        usuarioGet();\n    });\n};\n_s(usuarioApi, \"DJLBmK6MoSxGopl0CNdhMHnJpzo=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPLENBQUNELFNBQVMsS0FBS0csa0JBQWtCLENBQUNILFNBQVMsRUFBRSxDQUFDO29DQUN2REMsT0FBTyxDQUFDQSxPQUFPLEdBQUd3QixRQUFRLENBQUN4QixPQUFPO29DQUNsQ0EsT0FBTyxDQUFDQyxLQUFLLEdBQUd1QixRQUFRLENBQUN2QixLQUFLO2dDQUNoQyxDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQyxFQUNBZSxLQUFLLENBQUMsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs0QkFDakJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxLQUFLO3dCQUNuQixDQUFDOzs7Ozs7UUFDTCxDQUFDO3dCQWhCS0ssVUFBVTs7OztJQWtCaEIsR0FBSyxDQUFDTSxhQUFhO3lOQUFHLFFBQVEsV0FBSSxDQUFDOzs7OzsrQkFDM0JwQyxzREFDRyxDQUFDSSxPQUFPLEdBQUcsQ0FBRyxLQUFHa0MsZ0JBQWdCLENBQUNDLE9BQU8sRUFDL0NsQixJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQzs0QkFDbkJoQixPQUFPLENBQUNELElBQUksQ0FBQ21DLE1BQU0sQ0FBQyxRQUFRLENBQVBoQyxPQUFPO2dDQUFLQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsU0FBUyxLQUFLZSxRQUFRLENBQUNqQixJQUFJOzt3QkFDdEUsQ0FBQyxFQUNBbUIsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7NEJBQ2pCUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sS0FBSzt3QkFDbkIsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQzt3QkFUS1csYUFBYTs7OztJQVduQm5DLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZjJCLFVBQVU7SUFDWixDQUFDO0FBQ0gsQ0FBQztHQS9FdUJ6QixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS91c3VhcmlvQVBpLmpzeD9iMWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXN1YXJpb0FwaSgpIHtcclxuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9Vc3Vhcmlvc1wiO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW3VzdWFyaW9TZWxlY2lvbmFkbywgc2V0VXN1YXJpb1NlbGVjaW9uYWRvXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzdWFyaW9JZDogMCxcclxuICAgIHVzdWFyaW86IFwiXCIsXHJcbiAgICBzZW5oYTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0VXN1YXJpb1NlbGVjaW9uYWRvKHtcclxuICAgICAgLi4udXN1YXJpb1NlbGVjaW9uYWRvLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c3VhcmlvU2VsZWNpb25hZG8pO1xyXG4gIH07XHJcblxyXG4gICAgY29uc3QgdXN1YXJpb1Bvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBkZWxldGUgdXN1YXJpb1NlbGVjaW9uYWRvLnVzdWFyaW9JZDtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5wb3N0KGJhc2VVcmwsIHVzdWFyaW9TZWxlY2lvbmFkbylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhLmNvbmNhdChyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBzZWxlY2lvbmFyVXN1YXJpbyA9ICh1c3VhcmlvLCBvcGNhbykgPT4ge1xyXG4gICAgc2V0VXN1YXJpb1NlbGVjaW9uYWRvKHVzdWFyaW8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzdWFyaW9HZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAuZ2V0KGJhc2VVcmwpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzdWFyaW9QdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAucHV0KGJhc2VVcmwgKyBcIi9cIiArIHVzdWFyaW9TZWxlY2lvbmFkby51c3VhcmlvSWQsIHVzdWFyaW9TZWxlY2lvbmFkbylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdmFyIHJlc3Bvc3RhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB2YXIgZGFkb3NBdXhpbGlhciA9IGRhdGE7XHJcbiAgICAgICAgZGFkb3NBdXhpbGlhci5tYXAoKHVzdWFyaW9vKSA9PiB7XHJcbiAgICAgICAgICBpZiAodXN1YXJpby51c3VhcmlvSWQgPT09IHVzdWFyaW9TZWxlY2lvbmFkby51c3VhcmlvSWQpIHtcclxuICAgICAgICAgICAgdXN1YXJpby51c3VhcmlvID0gcmVzcG9zdGEudXN1YXJpbztcclxuICAgICAgICAgICAgdXN1YXJpby5zZW5oYSA9IHJlc3Bvc3RhLnNlbmhhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1c3VhcmlvRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLmRlbGV0ZShiYXNlVXJsICsgXCIvXCIgKyBjdXJzb1NlbGVjaW9uYWRvLmN1cnNvSWQpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoZGF0YS5maWx0ZXIoKHVzdWFyaW8pID0+IHVzdWFyaW8udXN1YXJpb0lkICE9PSByZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1c3VhcmlvR2V0KCk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c3VhcmlvQXBpIiwiYmFzZVVybCIsImRhdGEiLCJzZXREYXRhIiwidXN1YXJpb0lkIiwidXN1YXJpbyIsInNlbmhhIiwidXN1YXJpb1NlbGVjaW9uYWRvIiwic2V0VXN1YXJpb1NlbGVjaW9uYWRvIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c3VhcmlvUG9zdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25jYXQiLCJjYXRjaCIsImVycm9yIiwic2VsZWNpb25hclVzdWFyaW8iLCJvcGNhbyIsInVzdWFyaW9HZXQiLCJnZXQiLCJ1c3VhcmlvUHV0IiwicHV0IiwicmVzcG9zdGEiLCJkYWRvc0F1eGlsaWFyIiwibWFwIiwidXN1YXJpb28iLCJ1c3VhcmlvRGVsZXRlIiwiZGVsZXRlIiwiY3Vyc29TZWxlY2lvbmFkbyIsImN1cnNvSWQiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/usuarioAPi.jsx\n");

/***/ })

});