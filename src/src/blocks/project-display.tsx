import { memo, useRef } from "react";

import {
  motion,
  MotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

import NextLink from "next/link";

import {
  Box,
  BoxProps,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ChakraProps, ThemingProps } from "@chakra-ui/system";

import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import { __DEV__ } from "@definitions/utils";

const StyledScreenshot = styled.img`
  position: absolute;
`;

const StyledLogo = styled.img`
  height: 48px;
  object-fit: contain;
`;

export const MotionBox = motion<BoxProps>(Box);

const ProjectDisplay: React.FC<
  {
    logo: string;
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    screenshots: {
      image: string;
      style: React.CSSProperties;
      alt?: string;
    }[];
    projectPageUrl: string;
  } & ChakraProps &
    ThemingProps
> = ({
  logo,
  title,
  description,
  screenshots = [],
  projectPageUrl,
  height = "130vh",
  ...rest
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box = useRefScrollProgress(ref, 0);

  const { scrollYProgress } = useViewportScroll();

  const boxSize = box.end - box.start;
  const boxScaleStart = box.start + boxSize * 1.1;
  const boxScaleEnd = box.end + boxSize * 0.5;

  const boxScale = useTransform(
    scrollYProgress,
    [boxScaleStart, boxScaleEnd],
    [1, 1.5],
  ) as number & MotionValue<number>;

  const opacity = useTransform(
    scrollYProgress,
    [boxScaleStart, boxScaleEnd],
    [1, 0.3],
  ) as number & MotionValue<number>;

  return (
    <Box width="full" overflow="hidden" {...rest}>
      <MotionBox
        flex="1"
        style={{
          scale: boxScale,
          opacity: opacity,
        }}
      >
        <Box width="full" ref={ref} height={height} py={16} position="relative">
          <Container maxW="container.xl">
            <Box maxWidth="560px">
              {!!logo && (
                <Box mb="4">
                  <StyledLogo src={logo} alt="" />
                </Box>
              )}

              <Heading fontSize="5xl" mb="4">
                {title}
              </Heading>
              <Text fontSize="2xl" mb="6">
                {description}
              </Text>

              <NextLink href={projectPageUrl} passHref>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  variant="solid"
                  fontSize="xl"
                  p="6"
                >
                  Read more
                </Button>
              </NextLink>
            </Box>
          </Container>

          {screenshots.map((s, i) => {
            return (
              <StyledScreenshot
                key={i}
                src={s.image}
                alt={s.alt}
                style={s.style || {}}
              />
            );
          })}
        </Box>
      </MotionBox>
    </Box>
  );
};

if (__DEV__) {
  ProjectDisplay.displayName = "ProjectDisplay";
}

export default memo(ProjectDisplay);
