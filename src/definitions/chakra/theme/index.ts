import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import Table from "./components/table";
import colors from "./foundations/colors";
import fontSizes from "./foundations/fontSizes";
import styles from "./styles";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

// Color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  ...config,
  ...styles,
  colors,
  fontSizes,
  components: {
    Steps,
    Table,
  },

  styles: {
    global: {
      body: {
        fontFamily: `"SpaceGrotesk-Medium", "m42", sans-serif !important`,
      },

      fonts: {
        body: `"SpaceGrotesk-Medium", "m42", sans-serif !important`,
        p: `"Roboto Mono", "SpaceGrotesk-Medium", "m42", sans-serif !important`,
      },
    },
  },

  fonts: {
    body: `"SpaceGrotesk-Medium", "m42", sans-serif`,
    heading: `"SpaceGrotesk-Medium", "m42", sans-serif`,
    p: `"Roboto Mono", "SpaceGrotesk-Medium", "m42", sans-serif`,
  },
};

const theme = extendTheme(overrides);

export default theme;
