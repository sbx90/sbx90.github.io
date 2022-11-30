import NextLink from "next/link";

import {
  ChakraProps,
  chakra,
  Flex,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

import Site from "@definitions/site";

import Logo from "./index";

export const LogoWithSiteName: React.FC<ChakraProps> = (props): JSX.Element => {
  const color = useColorModeValue("gray.800", "white");
  return (
    <Flex color={color} alignItems="center" {...props}>
      <NextLink href="/" passHref>
        <chakra.a title="Mercury Home Page" display="flex" alignItems="center">
          <Logo />
          <VisuallyHidden>{Site.name}</VisuallyHidden>
        </chakra.a>
      </NextLink>
    </Flex>
  );
};
