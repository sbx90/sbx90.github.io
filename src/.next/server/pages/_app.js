"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  titleTemplate: "%s",
  defaultTitle: "SBX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercury.themebiotic.com/",
    site_name: "SBX"
  },
  twitter: {
    handle: "@themebiotic",
    site: "@themebiotic",
    cardType: "summary_large_image"
  },
  additionalMetaTags: [{
    property: "dc:creator",
    content: "Themebiotic"
  }]
});

/***/ }),

/***/ 470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6000);
/* harmony import */ var focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _definitions_chakra_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4033);
/* harmony import */ var _definitions_context_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4048);
/* harmony import */ var _definitions_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1790);
/* harmony import */ var _components_color_mode_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7400);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5318);
/* harmony import */ var _blocks_contact_us_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2957);
/* harmony import */ var _blocks_shortcut_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9256);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(144);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_color_mode_switcher__WEBPACK_IMPORTED_MODULE_8__, _blocks_contact_us_modal__WEBPACK_IMPORTED_MODULE_10__, _blocks_shortcut_notification__WEBPACK_IMPORTED_MODULE_11__]);
([_components_color_mode_switcher__WEBPACK_IMPORTED_MODULE_8__, _blocks_contact_us_modal__WEBPACK_IMPORTED_MODULE_10__, _blocks_shortcut_notification__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const clientSideEmotionCache = (0,_definitions_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();

function MercuryApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {
    value: emotionCache,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_definitions_context_theme__WEBPACK_IMPORTED_MODULE_6__/* .ThemeColorProvider */ .e, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
        theme: _definitions_chakra_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_blocks_contact_us_modal__WEBPACK_IMPORTED_MODULE_10__/* .ContactUsModalProvider */ .RQ, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ColorModeScript, {
            initialColorMode: _definitions_chakra_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].config.initialColorMode */ .Z.config.initialColorMode
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.DefaultSeo, _objectSpread({}, _next_seo_config__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)), Component.PageLayout ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Component.PageLayout, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Component, _objectSpread({}, pageProps))
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_layouts_default__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Component, _objectSpread({}, pageProps))
          }),  false && /*#__PURE__*/0, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_color_mode_switcher__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            pos: "fixed",
            top: "calc(50% - 144px / 2)",
            zIndex: "sticky",
            width: "60px" // shadow="xl"
            ,
            boxShadow: "10px 0px 15px rgba(0,0,0,0.15)",
            rounded: "xl",
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("white", "blackAlpha.900")
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_blocks_contact_us_modal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {})]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.appWithTranslation)(MercuryApp));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9256:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_icons_all_files_bi_BiCommand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(742);
/* harmony import */ var react_icons_all_files_bi_BiCommand_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_all_files_bi_BiCommand_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box);
const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      // type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      // easeOutQuad
      // type: "spring",
      // stiffness: 100,
      // damping: 25,
      // mass: 0.5,
      duration: 1.55,
      staggerChildren: 0.45,
      delay: 5
    }
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  }
};

const ShortcutNotificationBlock = () => {
  const {
    0: show,
    1: setShow
  } = useState(true);
  return /*#__PURE__*/_jsx(AnimatePresence, {
    children: show ? /*#__PURE__*/_jsxs(MotionBox, {
      bg: useColorModeValue("white", "black"),
      bottom: [0, 5, 5, 5],
      left: [0, 4, 4, 4],
      p: 5,
      pos: "fixed",
      rounded: "lg",
      shadow: "xl",
      w: ["full", 320, 320, 320],
      zIndex: "sticky",
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: variants,
      children: [/*#__PURE__*/_jsxs(Flex, {
        mb: 3,
        align: "center",
        justify: "space-between",
        children: [/*#__PURE__*/_jsxs(Heading, {
          display: "flex",
          alignItems: "center",
          fontSize: "lg",
          children: [/*#__PURE__*/_jsx(Icon, {
            mr: 2,
            as: _BiCommand
          }), /*#__PURE__*/_jsx(Text, {
            as: "span",
            children: "Shortcut Tips"
          })]
        }), /*#__PURE__*/_jsx(CloseButton, {
          onClick: () => setShow(false),
          size: "sm"
        })]
      }), /*#__PURE__*/_jsxs(Text, {
        as: "span",
        children: ["You can use the ", /*#__PURE__*/_jsx(Kbd, {
          children: "CMD"
        }), " or ", /*#__PURE__*/_jsx(Kbd, {
          children: "CTRL"
        }), " + ", /*#__PURE__*/_jsx(Kbd, {
          children: "H"
        }), " ", "shortcut to open the color palette. You can try the default colors on all pages."]
      })]
    }) : null
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(ShortcutNotificationBlock))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MotionBox */
/* harmony import */ var react_icons_all_files_md_MdInvertColors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1802);
/* harmony import */ var react_icons_all_files_md_MdInvertColors_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_all_files_md_MdInvertColors_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(481);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _definitions_chakra_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4033);
/* harmony import */ var _definitions_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(183);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Excluded colors




const excludes = ["current", "transparent", "white", "black", "whiteAlpha", "blackAlpha", "brand", "header", "main", "github", "discord"]; // color order

const order = {
  red: -20,
  pink: -19,
  purple: -18,
  deepPurple: -17,
  indigo: -16,
  blue: -15,
  deepBlue: -14,
  lightBlue: -13,
  cyan: -12,
  teal: -11,
  green: -10,
  lightGreen: -9,
  lime: -8,
  yellow: -7,
  amber: -6,
  orange: -5,
  deepOrange: -4,
  brown: -3,
  gray: -2,
  blueGray: -1
};
const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box);
const variants = {
  hidden: {
    x: -100,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
      // easeOutQuad
      duration: 0.55
    }
  },
  show: {
    x: 5,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
      // easeOutQuad
      duration: 0.55
    }
  }
};

const ColorModeSwitcher = props => {
  const colors = Object.keys(_definitions_chakra_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors */ .Z.colors).filter(c => excludes.indexOf(c) === -1).sort((a, b) => {
    const aOrder = order[a] ? order[a] : 0;
    const bOrder = order[b] ? order[b] : 0;
    return aOrder - bOrder;
  });
  const {
    colorScheme,
    setColorScheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_definitions_context__WEBPACK_IMPORTED_MODULE_6__/* .ThemeColorContext */ .r);
  const [flag, setFlag // eslint-disable-line @typescript-eslint/no-unused-vars
  ] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
  const [show, setShow] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBoolean)();
  const {
    0: intervalId,
    1: setIntervalId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Hotkey for toggle ColorModeSwitcher

  const isToggleHotkey = (0,is_hotkey__WEBPACK_IMPORTED_MODULE_3__.isHotkey)("mod+h"); // Hotkey for auto change color mode

  const isPlayHotkey = (0,is_hotkey__WEBPACK_IMPORTED_MODULE_3__.isHotkey)("mod+p");

  const handleKeyDown = event => {
    if (isToggleHotkey(event)) {
      event.stopPropagation();
      event.preventDefault();
      setShow.toggle();
    }

    if (isPlayHotkey(event)) {
      event.stopPropagation();
      event.preventDefault();
      setFlag.toggle();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("keydown", handleKeyDown, false); // cleanup this component

    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (flag) {
      handleClick();
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        return;
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
        return;
      }
    };
  }, [flag]);

  const handleClick = () => {
    let index = 0;
    const length = colors.length;
    const newIntervalId = setInterval(() => {
      setColorScheme(colors[index]);

      if (index + 1 < length) {
        index++;
      } else {
        index = 0;
      }
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    /*#__PURE__*/
    // <AnimatePresence exitBeforeEnter>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        display: ["inline-flex", "inline-flex", "none", "none"],
        alignItems: "center",
        justifyContent: "end",
        pos: "fixed",
        top: "calc(50% - 24px / 2)",
        left: show ? "65px" : 1,
        zIndex: "sticky",
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("white", "black"),
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
        rounded: "xl",
        shadow: "xl",
        w: 8,
        h: 8,
        p: 1,
        cursor: "pointer",
        onClick: () => setShow.toggle(),
        transition: "all 0.65s cubic-bezier(.25, .46, .45, .94)",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
          w: 6,
          h: 6,
          as: react_icons_all_files_md_MdInvertColors_js__WEBPACK_IMPORTED_MODULE_0__.MdInvertColors
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        exitBeforeEnter: true,
        children: show &&
        /*#__PURE__*/
        // <MotionBox initial="hidden" animate="show" variants={variants}>
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MotionBox, _objectSpread(_objectSpread({
          initial: "hidden",
          animate: "show",
          exit: "hidden",
          variants: variants,
          display: "initial",
          py: 4
        }, props), {}, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Wrap, {
            mx: 2,
            "data-testid": "ColorModeSwitcher",
            justify: "center",
            children: colors.map((c, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.WrapItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                "data-testid": idx === 0 && "first-button",
                onClick: () => setColorScheme(c),
                minWidth: 2,
                height: 2,
                width: 2,
                variant: "link",
                title: c // disabled={c === colorScheme ? true : false}
                ,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  bg: c === "black" ? c : `${c}.400`,
                  w: 1,
                  p: 1,
                  rounded: "full",
                  transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
                  transform: c === colorScheme ? "scale(2)" : "scale(1)",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, {
                    children: c
                  })
                })
              }, `ColorModeSwitcher--button-${c}`)
            }, `ColorModeSwitcher--item-${idx}`))
          })
        }))
      })]
    })
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ColorModeSwitcher));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ chakra_theme)
});

;// CONCATENATED MODULE: external "chakra-ui-steps"
const external_chakra_ui_steps_namespaceObject = require("chakra-ui-steps");
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/components/table.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};

const variantCelled = props => {
  const {
    colorScheme: c,
    rounded: r
  } = props;
  return {
    table: {
      border: "1px solid",
      borderColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
      borderRadius: r,
      borderCollapse: "separate",
      borderSpacing: 0
    },
    thead: {
      tr: {
        th: {
          bg: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.900`)(props),
          color: (0,theme_tools_namespaceObject.mode)(`${c}.500`, `${c}.400`)(props),
          borderTopRadius: r
        }
      }
    },
    tbody: {
      color: (0,theme_tools_namespaceObject.mode)(`${c}.700`, `${c}.50`)(props),
      //   color: mode(`${c}.600`, `${c}.400`)(props),
      //   tr: {
      //     "&:nth-of-type(even)": {
      //       "th, td": {
      //         borderBottomWidth: "1px",
      //         // borderColor: mode(`${c}.100`, `${c}.700`)(props),
      //       },
      //       td: {
      //         background: mode(`${c}.50`, `${c}.900`)(props),
      //       },
      //     },
      //   },
      tr: {
        "&:first-child": {
          td: {
            borderTop: "none"
          }
        }
      }
    },
    th: _objectSpread({}, numericStyles),
    td: _objectSpread({
      borderLeft: "1px solid",
      borderTop: "1px solid",
      borderColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
      "&:first-child": {
        borderLeft: "none"
      }
    }, numericStyles)
  };
};

const variantStructured = props => {
  const {
    colorScheme: c,
    rounded: r // eslint-disable-line @typescript-eslint/no-unused-vars

  } = props;
  return {
    table: {
      border: "1px solid",
      borderColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
      // borderRadius: r,
      borderCollapse: "separate",
      borderSpacing: 0
    },
    thead: {
      tr: {
        th: {
          bg: (0,theme_tools_namespaceObject.mode)(`${c}.50`, `${c}.900`)(props),
          color: (0,theme_tools_namespaceObject.mode)(`${c}.500`, `${c}.400`)(props),
          borderColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
          // borderTopRadius: r,
          borderBottom: "1px solid",
          borderBottomColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
          borderRight: "1px solid",
          borderRightColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
          // borderTop: "1px solid",
          // borderTopColor: mode(`${c}.200`, `${c}.800`)(props),
          "&:last-child": {
            borderRight: "none" // borderTop: "none",

          }
        },
        "&:nth-child(2)": {
          th: {
            // borderTopWidth: "1px",
            // borderTopStyle: "solid",
            borderTopColor: (0,theme_tools_namespaceObject.mode)(`${c}.200`, `${c}.700`)(props)
          }
        }
      }
    },
    tbody: {
      color: (0,theme_tools_namespaceObject.mode)(`${c}.600`, `${c}.50`)(props),
      tr: {
        "&:first-child": {
          td: {
            borderTop: "none"
          }
        }
      }
    },
    th: _objectSpread({
      // color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props)
    }, numericStyles),
    td: {
      borderRight: "1px solid",
      borderTop: "1px solid",
      borderColor: (0,theme_tools_namespaceObject.mode)(`${c}.100`, `${c}.700`)(props),
      "&:first-child": {// borderLeft: "none",
        // borderTop: "none",
      },
      "&:last-child": {
        borderRight: "none" // borderLeft: "none",

      }
    }
  };
};

const sizes = {
  sm: {
    thead: {
      tr: {
        th: {
          py: "3"
        }
      }
    }
  },
  md: {
    thead: {
      tr: {
        th: {
          pt: "5",
          pb: "4"
        }
      }
    }
  },
  lg: {
    thead: {
      tr: {
        th: {
          pt: "7",
          pb: "6"
        }
      }
    }
  }
};
const variants = {
  celled: variantCelled,
  structured: variantStructured
};
const defaultProps = {
  rounded: "sm"
};
/* harmony default export */ const table = ({
  variants,
  sizes,
  defaultProps
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/foundations/colors.ts
// import { theme as baseTheme } from "@chakra-ui/react";
// https://mui.com/customization/color/
const deepPurple = {
  50: "#EDE7F6",
  100: "#D1C4E9",
  200: "#B39DDB",
  300: "#9575CD",
  400: "#7E57C2",
  500: "#673AB7",
  600: "#5E35B1",
  700: "#512DA8",
  800: "#4527A0",
  900: "#311B92"
};
const lightBlue = {
  50: "#E1F5FE",
  100: "#B3E5FC",
  200: "#81D4FA",
  300: "#4FC3F7",
  400: "#29B6F6",
  500: "#03A9F4",
  600: "#039BE5",
  700: "#0288D1",
  800: "#0277BD",
  900: "#01579B"
};
const lightGreen = {
  50: "#F1F8E9",
  100: "#DCEDC8",
  200: "#C5E1A5",
  300: "#AED581",
  400: "#9CCC65",
  500: "#8BC34A",
  600: "#7CB342",
  700: "#689F38",
  800: "#558B2F",
  900: "#33691E"
};
const lime = {
  50: "#F9FBE7",
  100: "#F0F4C3",
  200: "#E6EE9C",
  300: "#DCE775",
  400: "#D4E157",
  500: "#CDDC39",
  600: "#C0CA33",
  700: "#AFB42B",
  800: "#9E9D24",
  900: "#827717"
};
const amber = {
  50: "#FFF8E1",
  100: "#FFECB3",
  200: "#FFE082",
  300: "#FFD54F",
  400: "#FFCA28",
  500: "#FFC107",
  600: "#FFB300",
  700: "#FFA000",
  800: "#FF8F00",
  900: "#FF6F00"
};
const deepOrange = {
  50: "#FBE9E7",
  100: "#FFCCBC",
  200: "#FFAB91",
  300: "#FF8A65",
  400: "#FF7043",
  500: "#FF5722",
  600: "#F4511E",
  700: "#E64A19",
  800: "#D84315",
  900: "#BF360C"
};
const brown = {
  50: "#EFEBE9",
  100: "#D7CCC8",
  200: "#BCAAA4",
  300: "#A1887F",
  400: "#8D6E63",
  500: "#795548",
  600: "#6D4C41",
  700: "#5D4037",
  800: "#4E342E",
  900: "#3E2723"
};
const deepBlue = {
  50: "#E8EDFD",
  100: "#BECCF8",
  200: "#95ABF4",
  300: "#6B8AF0",
  400: "#4169EB",
  500: "#1849E7",
  600: "#133AB9",
  700: "#0E2C8B",
  800: "#0A1D5C",
  900: "#050F2E"
};
const indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e"
};
const blueGray = {
  50: "#ECEFF1",
  100: "#CFD8DC",
  200: "#B0BEC5",
  300: "#90A4AE",
  400: "#78909C",
  500: "#607D8B",
  600: "#546E7A",
  700: "#455A64",
  800: "#37474F",
  900: "#263238"
};
/* harmony default export */ const colors = ({
  // custom: baseTheme.colors.yellow,
  brand: {
    50: "#DEEDCF",
    100: "#B8DEAA",
    200: "#88CE86",
    300: "#62BE73",
    400: "#3FAC6C",
    500: "#1D9A6C",
    600: "#188977",
    700: "#137177",
    800: "#0E4D64",
    900: "#0A2F51"
  },
  deepPurple,
  lightBlue,
  indigo,
  deepBlue,
  lightGreen,
  lime,
  amber,
  deepOrange,
  brown,
  blueGray,
  header: {
    100: "#20232a"
  },
  main: {
    100: "#282c34"
  },
  github: {
    400: "#333"
  },
  discord: {
    400: "rgba(88, 118, 224, 1)"
  }
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/foundations/fontSizes.ts
/* harmony default export */ const fontSizes = ({
  lg: "18px",
  "5xl": "46px"
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/styles.ts
/* harmony default export */ const styles = ({
  styles: {
    global: {
      h1: {
        fontWeight: 500,
        marginBottom: "0.5em"
      },
      p: {// marginBottom: "1em",
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/definitions/chakra/theme/index.ts
function theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(Object(source), true).forEach(function (key) { theme_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */
// Color mode config

const config = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const overrides = theme_objectSpread(theme_objectSpread(theme_objectSpread({}, config), styles), {}, {
  colors: colors,
  fontSizes: fontSizes,
  components: {
    Steps: external_chakra_ui_steps_namespaceObject.StepsStyleConfig,
    Table: table
  },
  styles: {
    global: {
      body: {
        fontFamily: `"SpaceGrotesk-Medium", "m42", sans-serif !important`
      },
      fonts: {
        body: `"SpaceGrotesk-Medium", "m42", sans-serif !important`,
        p: `"Roboto Mono", "SpaceGrotesk-Medium", "m42", sans-serif !important`
      }
    }
  },
  fonts: {
    body: `"SpaceGrotesk-Medium", "m42", sans-serif`,
    heading: `"SpaceGrotesk-Medium", "m42", sans-serif`,
    p: `"Roboto Mono", "SpaceGrotesk-Medium", "m42", sans-serif`
  }
});

const theme = (0,react_.extendTheme)(overrides);
/* harmony default export */ const chakra_theme = (theme);

/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4048);


/***/ }),

/***/ 1790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/definitions/utils/createEmotionCache.ts

function createEmotionCache() {
  return cache_default()({
    key: "css"
  });
}

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6000:
/***/ ((module) => {

module.exports = require("focus-visible/dist/focus-visible");

/***/ }),

/***/ 2640:
/***/ ((module) => {

module.exports = require("hammerjs");

/***/ }),

/***/ 481:
/***/ ((module) => {

module.exports = require("is-hotkey");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 4298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 742:
/***/ ((module) => {

module.exports = require("react-icons-all-files/bi/BiCommand.js");

/***/ }),

/***/ 4020:
/***/ ((module) => {

module.exports = require("react-icons-all-files/io5/IoMoon.js");

/***/ }),

/***/ 7956:
/***/ ((module) => {

module.exports = require("react-icons-all-files/io5/IoSunny.js");

/***/ }),

/***/ 1802:
/***/ ((module) => {

module.exports = require("react-icons-all-files/md/MdInvertColors.js");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,997,957,318], () => (__webpack_exec__(470)));
module.exports = __webpack_exports__;

})();