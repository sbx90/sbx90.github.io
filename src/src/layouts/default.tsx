import React, { memo } from "react";

import { IHeader } from "src/components/header/header";

import dynamic from "next/dynamic";

import { Spinner, ChakraProps, Box } from "@chakra-ui/react";

import { ModalAccountProvider } from "@definitions/context/modal.account";
import { __DEV__ } from "@definitions/utils";

import useScreenType from "../hooks/useScreenType";
import { ILayout } from "./layouts";

const HeaderDefault = dynamic<IHeader.IProps>(
  () => import("@components/header"),
  {
    loading: () => <Spinner />,
  },
);

if (__DEV__) {
  HeaderDefault.displayName = "HeaderDefault";
}

const FooterDefault = dynamic<ChakraProps>(
  () => import("@components/footer/footer-large-navigation-appstore"),
  {
    loading: () => <Spinner />,
  },
);

if (__DEV__) {
  FooterDefault.displayName = "FooterDefault";
}

const DefaultLayout: React.FC<ILayout.IProps> = ({
  header,
  stickyHeader = true,
  darkHeader = false,
  footer,
  children,
  hideFooter,
  contentContainerProps,
}): JSX.Element => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <>
      {header ? (
        header
      ) : (
        <ModalAccountProvider>
          <HeaderDefault isDark={darkHeader} isSticky={stickyHeader} />
        </ModalAccountProvider>
      )}
      <Box
        pt={header ? "" : isScreenSmallerThanTablet ? "110px" : "156px"}
        {...contentContainerProps}
      >
        {children}
      </Box>
      {!hideFooter && (footer ? footer : <FooterDefault />)}
    </>
  );
};

if (__DEV__) {
  DefaultLayout.displayName = "DefaultLayout";
}

export default memo(DefaultLayout);
