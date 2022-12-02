import useScreenType from "@root/src/hooks/useScreenType";

import React from "react";

import {
  ChakraProps,
  Container,
  Flex,
  Heading,
  Text,
  ThemingProps,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";

import TextScrollAnimator from "@components/TextScrollAnimator";

import CanvasDisplay from "./components/CanvasDisplay";
import { Point3D } from "./components/classes";

const HeroSection: React.FC<ChakraProps & ThemingProps> = (props) => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <Box w="full" position="relative" overflow="hidden">
      <CanvasDisplay
        globeConfig={{
          globeRenderOffset: new Point3D(0, 45),
          // globeRenderOffsetPercentage: new Point3D(0.75, 0.5),
          globeRenderOffsetPercentage: isScreenSmallerThanTablet
            ? new Point3D(0.6, 0.5)
            : new Point3D(0.75, 0.5),
          radius: isScreenSmallerThanTablet ? 12 : 20,
        }}
      />

      <Flex
        pb={28}
        height="100vh"
        justify="center"
        align="center"
        width="full"
        pos="relative"
        maxW={2200}
        minH={685}
        maxH={825}
        pointerEvents="none"
        userSelect="none"
        {...props}
      >
        <Container
          maxW="container.xl"
          // background="rgba(255,255,255,0.2)"
          // backdropFilter="blur(1px)"
        >
          <VStack
            mt={[0, 0, 10]}
            position="relative"
            zIndex={1}
            align="start"
            spacing={6}
            maxWidth="640px"
          >
            <Heading
              as="h1"
              fontSize={["3xl", "4xl", "7xl"]}
              lineHeight={1.1}
              fontWeight={400}
              maxW={650}
              m={0}
            >
              We&nbsp;
              <TextScrollAnimator
                height={isScreenSmallerThanTablet ? "48px" : "83px"}
                itemList={["think", "develop", "create"]}
                style={{
                  position: "relative",
                  bottom: isScreenSmallerThanTablet ? "-22px" : "-19px",
                  textAlign: "left",
                  color: "#1250E2",
                }}
              />
              <br />
              On a higher level.
            </Heading>

            <Text as="p" fontSize={["2xl", "3xl", "3xl"]}>
              We make your journey in the world of Software development so much
              easier and inspiring. What problem can we help you solve?
            </Text>
            <Button
              variant="solid"
              color="#000000"
              background="#D9D9D9"
              border="1px solid A9A9A9"
              size="lg"
              fontSize={isScreenSmallerThanTablet ? "24px" : "28px"}
              p="8"
              fontWeight="500"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Get in touch
            </Button>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
};

export default HeroSection;
