import { memo, useEffect, useContext } from "react";

import { useRouter } from "next/router";

import { Box, ChakraProps, Container, useColorMode } from "@chakra-ui/react";

import {
  ModalAccountActions,
  ModalAccountCtx,
} from "@definitions/context/modal.account";

import Navbar from "@components/navbar/navbar-default";

import { IHeader } from "./header";

const Header: React.FC<IHeader.IProps> = ({
  isDark = false,
  isSticky = false,
}) => {
  const {
    state, // eslint-disable-line @typescript-eslint/no-unused-vars
    dispatch,
  } = useContext(ModalAccountCtx);
  const { colorMode } = useColorMode();

  const router = useRouter();
  const { modal } = router.query;
  const sticky: ChakraProps = isSticky
    ? {
        zIndex: "sticky",
        w: "full",
        pos: "fixed",
        bg: "transparent",
        background:
          colorMode === "light"
            ? "var(--chakra-colors-white)"
            : "var(--chakra-colors-gray-800)",
        transitionProperty: "background-color",
        transitionDuration: "var(--chakra-transition-duration-normal)",
      }
    : {};

  useEffect(() => {
    if (modal === "account") {
      dispatch({ type: ModalAccountActions.OPEN });
    }
  }, [modal]);

  return (
    <Box py={1} {...sticky}>
      <Container data-testid="container" maxW="container.xl">
        <Navbar isDark={isDark} />
      </Container>
    </Box>
  );
};

export default memo(Header);
