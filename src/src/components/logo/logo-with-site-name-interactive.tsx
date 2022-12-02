import CanvasDisplay from "@root/src/pages/home/components/HeroSection/components/CanvasDisplay";
import { Point3D } from "@root/src/pages/home/components/HeroSection/components/classes";

import styled from "styled-components";

import NextLink from "next/link";

import {
  ChakraProps,
  chakra,
  Flex,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

import Site from "@definitions/site";

const StyledGlobe = styled(CanvasDisplay)`
  position: relative;
  top: -3px;
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledName = styled.span`
  font-size: 56px;
  font-family: "Pattanakarn-Regular";

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const LogoWithSiteName: React.FC<ChakraProps> = (props): JSX.Element => {
  const color = useColorModeValue("gray.800", "white");
  return (
    <Flex
      color={color}
      display="flex"
      alignItems="center"
      position="relative"
      left="-14px"
      {...props}
    >
      <StyledGlobe
        width={72}
        height={72}
        globeConfig={{
          radius: 3,
          rings: 8,
          slices: 12,
          globeRenderOffsetPercentage: new Point3D(0.5, 0.5),
        }}
      />
      <NextLink href="/" passHref>
        <chakra.a title="Mercury Home Page">
          <StyledName>SBX</StyledName>
          <VisuallyHidden>{Site.name}</VisuallyHidden>
        </chakra.a>
      </NextLink>
    </Flex>
  );
};
