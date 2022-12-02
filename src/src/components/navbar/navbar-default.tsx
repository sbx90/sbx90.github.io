import { memo, useCallback, useContext } from "react";

import styled from "styled-components";

import NextLink from "next/link";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  MobileMenuActions,
  MobileMenuProvider,
  MobileMenuCtx,
} from "@definitions/context/mobile.menu";
import { main } from "@definitions/navigation/main";
import { __DEV__ } from "@definitions/utils";
import customScrollbar from "@definitions/utils/scrollbar";

import HamburgerIcon from "@components/hamburger-icon";
import { LogoWithSiteName } from "@components/logo/logo-with-site-name-interactive";
import ThemeSwitch from "@components/theme-switch";

import MenuItemTag from "./menu-item-tag";
import MobileNavbar from "./mobile-navbar";
import { INavbar } from "./navbar";

const NavbarDefault: React.FC<INavbar.IProps> = ({
  isDark,
  justifyContent = "space-between",
  items,
  startItems,
  endItems,
  children,
  ...rest
}) => {
  const color = isDark ? "whiteAlpha.900" : "currentColor";
  return (
    <MobileMenuProvider>
      <Box
        // bg={useColorModeValue("transparent", "gray.900")}
        // rounded={"full"}
        // ref={scrollRef}
        py={5}
        sx={customScrollbar()}
        {...rest}
      >
        <Flex w="100%" alignItems={"center"} justifyContent={justifyContent}>
          {startItems ? startItems : <LogoWithSiteName color={color} />}
          <HStack
            ml="auto"
            as={"nav"}
            spacing={[0, 0, 1, 1]}
            display={{ base: "none", md: "flex" }}
          >
            <AllMenu isDark={isDark} items={items ? items : main} />
          </HStack>
          {endItems ? (
            endItems
          ) : (
            <HStack>
              <ThemeSwitch />
              <MobileNavButton />
            </HStack>
          )}
        </Flex>
        {children ? children : <MobileNavbar />}
      </Box>
    </MobileMenuProvider>
  );
};

if (__DEV__) {
  NavbarDefault.displayName = "NavbarDefault";
}

const AllMenu = memo(
  ({ isDark, items }: { isDark?: boolean; items: INavbar.IItem[] }) => {
    const buttonStyle = {
      color: isDark ? "whiteAlpha.900" : "inherit",
      _hover: {
        bg: isDark
          ? useColorModeValue("whiteAlpha.300", "whiteAlpha.200")
          : useColorModeValue("blackAlpha.100", "whiteAlpha.200"),
      },
      _active: {
        bg: isDark
          ? useColorModeValue("whiteAlpha.500", "whiteAlpha.300")
          : useColorModeValue("blackAlpha.200", "whiteAlpha.300"),
      },
    };

    return (
      <>
        {items.map((item, index) => {
          return item?.subitems ? (
            <Menu id={item.title} key={index} isLazy>
              <MenuButton
                variant="ghost"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                fontSize="xl"
                {...buttonStyle}
              >
                {item.title}
              </MenuButton>
              <MenuList
                overflowX="auto"
                maxHeight="75vh"
                zIndex="dropdown"
                sx={customScrollbar()}
              >
                {item.subitems.map((sub, idx) => {
                  return sub.title == "---" ? (
                    <MenuDivider key={`${sub.title}-${idx}`} />
                  ) : (
                    <MenuSubItem key={`${sub.title}-${idx}`} {...sub} />
                  );
                })}
              </MenuList>
            </Menu>
          ) : (
            <NextLink key={index} href={item.href} passHref>
              <Button variant="ghost" fontSize="xl" {...buttonStyle}>
                {item.title}
                <MenuItemTag title={item.title} />
              </Button>
            </NextLink>
          );
        })}
      </>
    );
  },
);

if (__DEV__) {
  AllMenu.displayName = "AllMenu";
}

const MenuSubItem: React.FC<INavbar.IItem> = ({ title, href }) => {
  return (
    <>
      {href ? (
        <NextLink href={href} passHref>
          <MenuItem justifyContent="space-between">
            {title}
            <MenuItemTag title={title} />
          </MenuItem>
        </NextLink>
      ) : (
        <Flex py={"0.4rem"} px={"0.8rem"} justifyContent="space-between">
          {title}
          <MenuItemTag title={title} />
        </Flex>
      )}
    </>
  );
};

if (__DEV__) {
  MenuSubItem.displayName = "MenuSubItem";
}

const StyledButton = styled.button<{ $dark?: boolean }>`
  --size: 80px;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);

  position: fixed;
  bottom: 5rem;
  right: 2rem;

  padding: 10px;
  background: #000;
  color: #fff;
  border-radius: 100rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    --size: 48px;
    bottom: 5rem;
    right: 1rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavButton = memo(() => {
  const { colorMode } = useColorMode();
  const { state, dispatch } = useContext(MobileMenuCtx);
  const toggleHandler = useCallback(() => {
    dispatch({
      type: MobileMenuActions.TOGGLE,
    });
  }, [dispatch]);

  return (
    <StyledButton onClick={toggleHandler} $dark={colorMode === "dark"}>
      <HamburgerIcon active={state.isOpen} color="#fff" />
    </StyledButton>
  );

  // return (
  //   <IconButton
  //     size={"md"}
  //     icon={state.isOpen ? <CloseIcon /> : <HamburgerIcon />}
  //     aria-label="Open Menu"
  //     display={{ md: "none" }}
  //     onClick={toggleHandler}
  //   />
  // );
});

if (__DEV__) {
  MobileNavButton.displayName = "MobileNavButton";
}

export default memo(NavbarDefault);
