"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/home/components/TestimonySection.tsx":
/*!********************************************************!*\
  !*** ./src/pages/home/components/TestimonySection.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_icons_all_files_im_ImQuotesLeft_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-all-files/im/ImQuotesLeft.js */ \"./node_modules/react-icons-all-files/im/ImQuotesLeft.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _definitions_navigation_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @definitions/navigation/main */ \"./src/definitions/navigation/main.ts\");\n/* harmony import */ var _components_carousel_carousel_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/carousel/carousel-default */ \"./src/components/carousel/carousel-default.tsx\");\n/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/rating */ \"./src/components/rating/index.ts\");\n/* harmony import */ var _components_testimonials_testimonial_blurred_backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/testimonials/testimonial-blurred-backdrop */ \"./src/components/testimonials/testimonial-blurred-backdrop.tsx\");\n/* harmony import */ var _assets_testiomial_bg_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/testiomial-bg-1.svg */ \"./src/assets/testiomial-bg-1.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"D:\\\\dev\\\\sbx\\\\site\\\\source\\\\SBX-WEB\\\\src\\\\pages\\\\home\\\\components\\\\TestimonySection.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar TESTIMONY_LIST = [{\n  name: \"James\",\n  position: \"Executive Director\",\n  content: \"I see SBX as the perfect ally in software development. From the beginning idea to the final product we\\u2019ve felt completely guided and supported. We are excited to keep on working in future projects.\"\n}, {\n  name: \"Miguel A.\",\n  position: \"Project Manager\",\n  content: \"We developed a great partnership with SBX for the past two years and their dedication is evident in the upgrade of our company service.\"\n}];\n\nvar TestimonyCarousel = function TestimonyCarousel(_ref) {\n  var testimony = _ref.testimony;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n    w: \"full\",\n    my: 32,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n      display: \"block\",\n      w: \"full\",\n      mb: 10,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_carousel_carousel_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        settings: {\n          dots: true,\n          infinite: true,\n          slidesToShow: 1,\n          slidesToScroll: 1,\n          autoplay: true,\n          autoplaySpeed: 4000,\n          touchThreshold: 50,\n          cssEase: \"ease-in-out\"\n        },\n        children: testimony.map(function (t, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n              w: \"full\",\n              px: \"4\",\n              py: \"20\",\n              justify: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_testimonials_testimonial_blurred_backdrop__WEBPACK_IMPORTED_MODULE_3__.TestimonialBlurredBackdrop, {\n                avatarImage: '',\n                name: t.name,\n                body: t.content,\n                occupation: t.position,\n                backgroundImage: _assets_testiomial_bg_1_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                  as: react_icons_all_files_im_ImQuotesLeft_js__WEBPACK_IMPORTED_MODULE_7__.ImQuotesLeft,\n                  color: \"pink.500\",\n                  w: 10,\n                  h: 10\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 23\n                }, _this),\n                rating: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_rating__WEBPACK_IMPORTED_MODULE_2__.RatingDefault, {\n                  color: \"pink\",\n                  readonly: true,\n                  fontSize: \"xs\",\n                  initialRating: 5\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 23\n                }, _this)\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 17\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = TestimonyCarousel;\n\nvar TestimonySection = function TestimonySection() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    maxW: \"container.xl\",\n    id: _definitions_navigation_main__WEBPACK_IMPORTED_MODULE_0__.SECTION_ID.CLIENTS_SECTION,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n      fontSize: \"40px\",\n      children: \"What our clients have to say\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TestimonyCarousel, {\n      testimony: TESTIMONY_LIST\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = TestimonySection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonySection);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestimonyCarousel\");\n$RefreshReg$(_c2, \"TestimonySection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL1Rlc3RpbW9ueVNlY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNVyxjQUFjLEdBQUcsQ0FDckI7QUFDRUMsRUFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUMsRUFBQUEsUUFBUSxFQUFFLG9CQUZaO0FBR0VDLEVBQUFBLE9BQU87QUFIVCxDQURxQixFQU1yQjtBQUNFRixFQUFBQSxJQUFJLEVBQUUsV0FEUjtBQUVFQyxFQUFBQSxRQUFRLEVBQUUsaUJBRlo7QUFHRUMsRUFBQUEsT0FBTztBQUhULENBTnFCLENBQXZCOztBQWFBLElBQU1DLGlCQUVKLEdBQUcsU0FGQ0EsaUJBRUQsT0FBZ0M7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQ25DLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBYyxNQUFFLEVBQUUsRUFBbEI7QUFBQSwyQkFDRSw4REFBQyxvREFBRDtBQUFRLGFBQU8sRUFBQyxPQUFoQjtBQUF3QixPQUFDLEVBQUMsTUFBMUI7QUFBaUMsUUFBRSxFQUFFLEVBQXJDO0FBQUEsNkJBQ0UsOERBQUMsNkVBQUQ7QUFDRSxnQkFBUSxFQUFFO0FBQ1JDLFVBQUFBLElBQUksRUFBRSxJQURFO0FBRVJDLFVBQUFBLFFBQVEsRUFBRSxJQUZGO0FBR1JDLFVBQUFBLFlBQVksRUFBRSxDQUhOO0FBSVJDLFVBQUFBLGNBQWMsRUFBRSxDQUpSO0FBS1JDLFVBQUFBLFFBQVEsRUFBRSxJQUxGO0FBTVJDLFVBQUFBLGFBQWEsRUFBRSxJQU5QO0FBT1JDLFVBQUFBLGNBQWMsRUFBRSxFQVBSO0FBUVJDLFVBQUFBLE9BQU8sRUFBRTtBQVJELFNBRFo7QUFBQSxrQkFZR1IsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDdkIsOEJBQ0UsOERBQUMsaURBQUQ7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGVBQUMsRUFBQyxNQUFSO0FBQWUsZ0JBQUUsRUFBQyxHQUFsQjtBQUFzQixnQkFBRSxFQUFDLElBQXpCO0FBQThCLHFCQUFPLEVBQUMsUUFBdEM7QUFBQSxxQ0FDRSw4REFBQyw2R0FBRDtBQUVFLDJCQUFXLEVBQUUsRUFGZjtBQUdFLG9CQUFJLEVBQUVELENBQUMsQ0FBQ2QsSUFIVjtBQUlFLG9CQUFJLEVBQUVjLENBQUMsQ0FBQ1osT0FKVjtBQUtFLDBCQUFVLEVBQUVZLENBQUMsQ0FBQ2IsUUFMaEI7QUFNRSwrQkFBZSxFQUFFSCxtRUFObkI7QUFPRSxvQkFBSSxlQUNGLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUUsb0ZBQVI7QUFBd0IsdUJBQUssRUFBQyxVQUE5QjtBQUF5QyxtQkFBQyxFQUFFLEVBQTVDO0FBQWdELG1CQUFDLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSSjtBQVVFLHNCQUFNLGVBQ0osOERBQUMsNkRBQUQ7QUFDRSx1QkFBSyxFQUFDLE1BRFI7QUFFRSwwQkFBUSxNQUZWO0FBR0UsMEJBQVEsRUFBQyxJQUhYO0FBSUUsK0JBQWEsRUFBRTtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEosaUJBQ09pQixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBeUJELFNBMUJBO0FBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FqREQ7O0tBQU1aOztBQW1ETixJQUFNYSxnQkFBMEIsR0FBRyxTQUE3QkEsZ0JBQTZCLEdBQW1CO0FBQ3BELHNCQUNFLDhEQUFDLHVEQUFEO0FBQVcsUUFBSSxFQUFDLGNBQWhCO0FBQStCLE1BQUUsRUFBRXRCLG9GQUFuQztBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQVMsY0FBUSxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxpQkFBRDtBQUFtQixlQUFTLEVBQUVLO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O01BQU1pQjtBQVVOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS9jb21wb25lbnRzL1Rlc3RpbW9ueVNlY3Rpb24udHN4P2JmYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1RdW90ZXNMZWZ0IH0gZnJvbSBcIkByZWFjdC1pY29uc1wiO1xuXG5pbXBvcnQgeyBJY29uLCBCb3gsIENvbnRhaW5lciwgQ2VudGVyLCBGbGV4LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgU0VDVElPTl9JRCB9IGZyb20gXCJAZGVmaW5pdGlvbnMvbmF2aWdhdGlvbi9tYWluXCI7XG5cbmltcG9ydCBDYXJvdXNlbERlZmF1bHQgZnJvbSBcIkBjb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLWRlZmF1bHRcIjtcbmltcG9ydCB7IFJhdGluZ0RlZmF1bHQgfSBmcm9tIFwiQGNvbXBvbmVudHMvcmF0aW5nXCI7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbEJsdXJyZWRCYWNrZHJvcCB9IGZyb20gXCJAY29tcG9uZW50cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWwtYmx1cnJlZC1iYWNrZHJvcFwiO1xuXG5pbXBvcnQgQXZhdGFySW1hZ2UgZnJvbSBcIkBhc3NldHMvaW1hZ2VzL2F2YXRhci0xLmpwZ1wiO1xuaW1wb3J0IEJhY2tncm91bmRPbmUgZnJvbSBcIkBhc3NldHMvdGVzdGlvbWlhbC1iZy0xLnN2Z1wiO1xuXG5jb25zdCBURVNUSU1PTllfTElTVCA9IFtcbiAge1xuICAgIG5hbWU6IFwiSmFtZXNcIixcbiAgICBwb3NpdGlvbjogXCJFeGVjdXRpdmUgRGlyZWN0b3JcIixcbiAgICBjb250ZW50OiBgSSBzZWUgU0JYIGFzIHRoZSBwZXJmZWN0IGFsbHkgaW4gc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEZyb20gdGhlIGJlZ2lubmluZyBpZGVhIHRvIHRoZSBmaW5hbCBwcm9kdWN0IHdl4oCZdmUgZmVsdCBjb21wbGV0ZWx5IGd1aWRlZCBhbmQgc3VwcG9ydGVkLiBXZSBhcmUgZXhjaXRlZCB0byBrZWVwIG9uIHdvcmtpbmcgaW4gZnV0dXJlIHByb2plY3RzLmAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1pZ3VlbCBBLlwiLFxuICAgIHBvc2l0aW9uOiBcIlByb2plY3QgTWFuYWdlclwiLFxuICAgIGNvbnRlbnQ6IGBXZSBkZXZlbG9wZWQgYSBncmVhdCBwYXJ0bmVyc2hpcCB3aXRoIFNCWCBmb3IgdGhlIHBhc3QgdHdvIHllYXJzIGFuZCB0aGVpciBkZWRpY2F0aW9uIGlzIGV2aWRlbnQgaW4gdGhlIHVwZ3JhZGUgb2Ygb3VyIGNvbXBhbnkgc2VydmljZS5gLFxuICB9LFxuXTtcblxuY29uc3QgVGVzdGltb255Q2Fyb3VzZWw6IFJlYWN0LkZDPHtcbiAgdGVzdGltb255OiB7IG5hbWU6IHN0cmluZzsgcG9zaXRpb246IHN0cmluZzsgY29udGVudDogc3RyaW5nIH1bXTtcbn0+ID0gKHsgdGVzdGltb255IH0pOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCB3PVwiZnVsbFwiIG15PXszMn0+XG4gICAgICA8Q2VudGVyIGRpc3BsYXk9XCJibG9ja1wiIHc9XCJmdWxsXCIgbWI9ezEwfT5cbiAgICAgICAgPENhcm91c2VsRGVmYXVsdFxuICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcbiAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1MCxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Rlc3RpbW9ueS5tYXAoKHQsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8RmxleCB3PVwiZnVsbFwiIHB4PVwiNFwiIHB5PVwiMjBcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWxCbHVycmVkQmFja2Ryb3BcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBhdmF0YXJJbWFnZT17Jyd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYm9keT17dC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBvY2N1cGF0aW9uPXt0LnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e0JhY2tncm91bmRPbmV9XG4gICAgICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtJbVF1b3Rlc0xlZnR9IGNvbG9yPVwicGluay41MDBcIiB3PXsxMH0gaD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtcbiAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxSYXRpbmc9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9DYXJvdXNlbERlZmF1bHQ+XG4gICAgICA8L0NlbnRlcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmNvbnN0IFRlc3RpbW9ueVNlY3Rpb246IFJlYWN0LkZDID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIueGxcIiBpZD17U0VDVElPTl9JRC5DTElFTlRTX1NFQ1RJT059PlxuICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCI0MHB4XCI+V2hhdCBvdXIgY2xpZW50cyBoYXZlIHRvIHNheTwvSGVhZGluZz5cblxuICAgICAgPFRlc3RpbW9ueUNhcm91c2VsIHRlc3RpbW9ueT17VEVTVElNT05ZX0xJU1R9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbnlTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIkljb24iLCJCb3giLCJDb250YWluZXIiLCJDZW50ZXIiLCJGbGV4IiwiSGVhZGluZyIsIlNFQ1RJT05fSUQiLCJDYXJvdXNlbERlZmF1bHQiLCJSYXRpbmdEZWZhdWx0IiwiVGVzdGltb25pYWxCbHVycmVkQmFja2Ryb3AiLCJCYWNrZ3JvdW5kT25lIiwiVEVTVElNT05ZX0xJU1QiLCJuYW1lIiwicG9zaXRpb24iLCJjb250ZW50IiwiVGVzdGltb255Q2Fyb3VzZWwiLCJ0ZXN0aW1vbnkiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInRvdWNoVGhyZXNob2xkIiwiY3NzRWFzZSIsIm1hcCIsInQiLCJpIiwiVGVzdGltb255U2VjdGlvbiIsIkNMSUVOVFNfU0VDVElPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/components/TestimonySection.tsx\n");

/***/ })

});