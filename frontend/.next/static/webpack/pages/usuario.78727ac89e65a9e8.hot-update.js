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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ usuarioApi; }\n/* harmony export */ });\n/* harmony import */ var C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction usuarioApi() {\n    _s();\n    var baseUrl = \"https://localhost:5001/api/Usuarios\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var usuarioPost = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        delete usuarioSelecionado.usuarioId;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseUrl, usuarioSelecionado).then(function(response) {\n                            setData(data.concat(response.data));\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioPost() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        usuarioId: 0,\n        usuario: \"\",\n        senha: \"\"\n    }), usuarioSelecionado = ref1[0], setUsuarioSelecionado = ref1[1];\n    var selecionarUsuario = function(usuario, opcao) {\n        setUsuarioSelecionado(usuario);\n    };\n    var usuarioGet = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseUrl).then(function(response) {\n                            setData(response.data);\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioGet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var usuarioPut = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default().put(baseUrl + \"/\" + usuarioSelecionado.usuarioId, usuarioSelecionado).then(function(response) {\n                            var resposta = response.data;\n                            var dadosAuxiliar = data;\n                            dadosAuxiliar.map(function(usuarioo) {\n                                if (usuario.usuarioId === usuarioSelecionado.usuarioId) {\n                                    usuario.usuario = resposta.usuario;\n                                    usuario.senha = resposta.senha;\n                                }\n                            });\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioPut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var usuarioDelete = function() {\n        var _ref = _asyncToGenerator(C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_thiago_sousa_Documents_DEV_CursosNext_ProjetoDefinitivo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_1___default()[\"delete\"](baseUrl + \"/\" + cursoSelecionado.cursoId).then(function(response) {\n                            setData(data.filter(function(usuario) {\n                                return usuario.usuarioId !== response.data;\n                            }));\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function usuarioDelete() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        UsuarioGet();\n    });\n};\n_s(usuarioApi, \"DJLBmK6MoSxGopl0CNdhMHnJpzo=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7SUFrQmhCLEdBQUssQ0FBQ00sYUFBYTt5TkFBRyxRQUFRLFdBQUksQ0FBQzs7Ozs7K0JBQzNCL0Isc0RBQ0csQ0FBQ0ksT0FBTyxHQUFHLENBQUcsS0FBRzZCLGdCQUFnQixDQUFDQyxPQUFPLEVBQy9DdkIsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7NEJBQ25CTixPQUFPLENBQUNELElBQUksQ0FBQzhCLE1BQU0sQ0FBQyxRQUFRLENBQVBqQixPQUFPO2dDQUFLQSxNQUFNLENBQU5BLE9BQU8sQ0FBQ1QsU0FBUyxLQUFLRyxRQUFRLENBQUNQLElBQUk7O3dCQUN0RSxDQUFDLEVBQ0FTLEtBQUssQ0FBQyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzRCQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7d0JBQ25CLENBQUM7Ozs7OztRQUNMLENBQUM7d0JBVEtnQixhQUFhOzs7O0lBV25COUIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmbUMsVUFBVTtJQUNaLENBQUM7QUFDSCxDQUFDO0dBckV1QmpDLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3VzdWFyaW9BUGkuanN4P2IxYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c3VhcmlvQXBpKCkge1xyXG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL1VzdWFyaW9zXCI7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCB1c3VhcmlvUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGRlbGV0ZSB1c3VhcmlvU2VsZWNpb25hZG8udXN1YXJpb0lkO1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLnBvc3QoYmFzZVVybCwgdXN1YXJpb1NlbGVjaW9uYWRvKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREYXRhKGRhdGEuY29uY2F0KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3VzdWFyaW9TZWxlY2lvbmFkbywgc2V0VXN1YXJpb1NlbGVjaW9uYWRvXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzdWFyaW9JZDogMCxcclxuICAgIHVzdWFyaW86IFwiXCIsXHJcbiAgICBzZW5oYTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWNpb25hclVzdWFyaW8gPSAodXN1YXJpbywgb3BjYW8pID0+IHtcclxuICAgIHNldFVzdWFyaW9TZWxlY2lvbmFkbyh1c3VhcmlvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1c3VhcmlvR2V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLmdldChiYXNlVXJsKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1c3VhcmlvUHV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLnB1dChiYXNlVXJsICsgXCIvXCIgKyB1c3VhcmlvU2VsZWNpb25hZG8udXN1YXJpb0lkLCB1c3VhcmlvU2VsZWNpb25hZG8pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHZhciByZXNwb3N0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgdmFyIGRhZG9zQXV4aWxpYXIgPSBkYXRhO1xyXG4gICAgICAgIGRhZG9zQXV4aWxpYXIubWFwKCh1c3VhcmlvbykgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzdWFyaW8udXN1YXJpb0lkID09PSB1c3VhcmlvU2VsZWNpb25hZG8udXN1YXJpb0lkKSB7XHJcbiAgICAgICAgICAgIHVzdWFyaW8udXN1YXJpbyA9IHJlc3Bvc3RhLnVzdWFyaW87XHJcbiAgICAgICAgICAgIHVzdWFyaW8uc2VuaGEgPSByZXNwb3N0YS5zZW5oYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXN1YXJpb0RlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5kZWxldGUoYmFzZVVybCArIFwiL1wiICsgY3Vyc29TZWxlY2lvbmFkby5jdXJzb0lkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREYXRhKGRhdGEuZmlsdGVyKCh1c3VhcmlvKSA9PiB1c3VhcmlvLnVzdWFyaW9JZCAhPT0gcmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgVXN1YXJpb0dldCgpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXN1YXJpb0FwaSIsImJhc2VVcmwiLCJkYXRhIiwic2V0RGF0YSIsInVzdWFyaW9Qb3N0IiwidXN1YXJpb1NlbGVjaW9uYWRvIiwidXN1YXJpb0lkIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbmNhdCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXN1YXJpbyIsInNlbmhhIiwic2V0VXN1YXJpb1NlbGVjaW9uYWRvIiwic2VsZWNpb25hclVzdWFyaW8iLCJvcGNhbyIsInVzdWFyaW9HZXQiLCJnZXQiLCJ1c3VhcmlvUHV0IiwicHV0IiwicmVzcG9zdGEiLCJkYWRvc0F1eGlsaWFyIiwibWFwIiwidXN1YXJpb28iLCJ1c3VhcmlvRGVsZXRlIiwiZGVsZXRlIiwiY3Vyc29TZWxlY2lvbmFkbyIsImN1cnNvSWQiLCJmaWx0ZXIiLCJVc3VhcmlvR2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/usuarioAPi.jsx\n");

/***/ })

});