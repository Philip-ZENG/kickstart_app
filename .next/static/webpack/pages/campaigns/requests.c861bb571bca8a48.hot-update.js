"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar RequestRow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RequestRow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(RequestRow);\n    function RequestRow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, RequestRow);\n        var _this;\n        _this = _super.apply(this, arguments);\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_this), \"onApprove\", /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n            var campaign, accounts;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this1.props.address);\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        return [\n                            4,\n                            campaign.methods.approveRequest(_this1.props.id).send({\n                                from: accounts[0]\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        }));\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(RequestRow, [\n        {\n            key: \"render\",\n            value: function render() {\n                var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Table.Cell;\n                var _props = this.props, id = _props.id, request = _props.request, approversCount = _props.approversCount;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.description\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.recipient\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: [\n                                request.approvalCount,\n                                \" / \",\n                                approversCount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {\n                                color: \"green\",\n                                basic: true,\n                                onClick: this.onApprove,\n                                children: \"Approve\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ethereum\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return RequestRow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFBdUM7QUFDUztBQUNaO0FBQ3VCO0FBRTNELGNBQWdCLGlCQTZCZjs7OEVBN0JLTSxVQUFVOytGQUFWQSxVQUFVO2FBQVZBLFVBQVU7Z0dBQVZBLFVBQVU7Ozs7UUFDZEMsZ0ZBQUFBLENBQUFBLHdGQUFBQSxTQUFBQSxXQUFTLGdCQUFHLCtGQUFZO2dCQUNoQkMsUUFBUSxFQUVSQyxRQUFROzs7O3dCQUZSRCxRQUFRLEdBQUdILDhEQUF1QixDQUFDLE9BQUtLLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7d0JBRTVDOzs0QkFBTVAsc0VBQW9CLEVBQUU7MEJBQUE7O3dCQUF2Q0ssUUFBUSxHQUFHLGFBQTRCO3dCQUM3Qzs7NEJBQU1ELFFBQVEsQ0FBQ00sT0FBTyxDQUFDQyxjQUFjLENBQUMsT0FBS0wsS0FBSyxDQUFDTSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dDQUN4REMsSUFBSSxFQUFFVCxRQUFRLENBQUMsQ0FBQyxDQUFDOzZCQUNsQixDQUFDOzBCQUFBOzt3QkFGRixhQUVFOzs7Ozs7UUFDSixDQUFDLEVBQUM7OzttRkFSRUgsVUFBVTs7WUFVZGEsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBUUMsR0FBRyxHQUFXbEIseURBQVgsRUFBRW1CLElBQUksR0FBS25CLDBEQUFMO2dCQUNqQixJQUF3QyxNQUFVLEdBQVYsSUFBSSxDQUFDUSxLQUFLLEVBQTFDTSxFQUFFLEdBQThCLE1BQVUsQ0FBMUNBLEVBQUUsRUFBRU0sT0FBTyxHQUFxQixNQUFVLENBQXRDQSxPQUFPLEVBQUVDLGNBQWMsR0FBSyxNQUFVLENBQTdCQSxjQUFjO2dCQUVuQyxxQkFDRSw4REFBQ0gsR0FBRzs7c0NBQ0YsOERBQUNDLElBQUk7c0NBQUdMLEVBQUU7Ozs7O2dDQUFTO3NDQUNuQiw4REFBQ0ssSUFBSTtzQ0FBR0MsT0FBTyxDQUFDRSxXQUFXOzs7OztnQ0FBUztzQ0FDcEMsOERBQUNILElBQUk7c0NBQUdqQixvRUFBa0IsQ0FBQ2tCLE9BQU8sQ0FBQ0ssS0FBSyxFQUFDLE9BQU8sQ0FBQzs7Ozs7Z0NBQVE7c0NBQ3pELDhEQUFDTixJQUFJO3NDQUFHQyxPQUFPLENBQUNNLFNBQVM7Ozs7O2dDQUFTO3NDQUNsQyw4REFBQ1AsSUFBSTs7Z0NBQUdDLE9BQU8sQ0FBQ08sYUFBYTtnQ0FBRSxLQUFHO2dDQUFDTixjQUFjOzs7Ozs7Z0NBQVE7c0NBQ3pELDhEQUFDRixJQUFJO3NDQUNILDRFQUFDbEIsc0RBQU07Z0NBQUMyQixLQUFLLEVBQUMsT0FBTztnQ0FBQ0MsS0FBSztnQ0FBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ3pCLFNBQVM7MENBQUUsU0FBTzs7Ozs7b0NBQVM7Ozs7O2dDQUNoRTs7Ozs7O3dCQUNILENBQ047WUFDSixDQUFDOzs7V0ExQkdELFVBQVU7Q0EyQmYsQ0EzQndCTCw0Q0FBUyxDQTJCakM7QUFFRCwrREFBZUssVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcz9jYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VGFibGUsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IGNyZWF0ZUNhbXBhaWduSW50ZXJmYWNlIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5cclxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBjcmVhdGVDYW1wYWlnbkludGVyZmFjZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICAgIGNvbnN0IHsgaWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDZWxsPnsgaWQgfTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD57IHJlcXVlc3QuZGVzY3JpcHRpb24gfTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD57IHdlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCdldGhlcicpfTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD57IHJlcXVlc3QucmVjaXBpZW50IH08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+eyByZXF1ZXN0LmFwcHJvdmFsQ291bnQgfSAvIHthcHByb3ZlcnNDb3VudH08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdncmVlbicgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj5cclxuICAgICAgICA8L0NlbGw+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiY3JlYXRlQ2FtcGFpZ25JbnRlcmZhY2UiLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInJlbmRlciIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});