import useScreenType from "@root/src/hooks/useScreenType";

import React, { useCallback, useEffect, useRef } from "react";

import { useTranslation } from "next-i18next";

import {
  Box,
  createIcon,
  Heading,
  Text,
  Container,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { SECTION_ID } from "@definitions/navigation/main";

import Annotation from "@components/annotation";

import imgJs from "@assets/images/js.png";
import imgPython from "@assets/images/python.png";
import imgReact from "@assets/images/react.png";
import imgSwift from "@assets/images/swift.png";

const FeatureTile: React.FC<{ image: string; altText: string }> = ({
  image,
  altText,
}) => {
  return (
    <img
      src={image}
      alt={altText}
      width={96}
      height="auto"
      style={{ borderRadius: "777rem" }}
    />
  );
};

const AboutSection: React.FC = () => {
  const { t } = useTranslation("home");
  const { isScreenSmallerThanTablet } = useScreenType();
  const videoElRef = useRef<HTMLVideoElement>();

  const setupIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElRef.current.play();
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      },
    );

    observer.observe(videoElRef.current);
  }, []);

  useEffect(() => {
    setupIntersectionObserver();
  }, [setupIntersectionObserver]);

  return (
    <Box width="full" id={SECTION_ID.ABOUT_SECTION}>
      <Container maxW="container.lg">
        <Flex flexWrap={["wrap", "wrap", "wrap", "nowrap"]}>
          <VStack align="start" width="full" spacing={6}>
            <Heading>
              {t("about-section.title", {
                defaultValue:
                  "The world of Software and APP Development can be complex",
              })}
            </Heading>
          </VStack>

          <VStack
            align="start"
            width="full"
            spacing={6}
            height={isScreenSmallerThanTablet ? "100px" : "50px"}
            mt={["8", "8", "8", "0"]}
            ml={["16", "20", "20", "0"]}
            // transform={["rotate(7deg)", "rotate(7deg)", "rotate(7deg)", "0"]}
          >
            <Annotation
              as={CustomArrow} // custom annotation arrow
              color={"#1250E2"}
              strokeWidth={2}
              h={50}
              w={135}
              left={isScreenSmallerThanTablet ? "" : "-30px"}
              bottom="-50px"
              transform="rotate(335deg) scaleX(-1)"
            >
              <Text color={"#1250E2"} lineHeight="1" fontSize="40px">
                {t("about-section.arrow-text", {
                  defaultValue: "we get it.",
                })}
              </Text>
            </Annotation>
          </VStack>
        </Flex>

        <Text as="p" maxWidth="974px" fontSize="md" marginTop="6">
          {t("about-section.description.content-1", {
            defaultValue:
              "As a business owner, entrepreneur, or manager, you have your concerns about operating and growing a successful business but in a vast and changing industry, Technology can easily become an obstacle to achieving your own company goals.",
          })}
        </Text>

        <Text as="p" maxWidth="974px" fontSize="md" marginTop="6">
          {t("about-section.description.content-2", {
            defaultValue:
              "At SBX we put at your disposal our knowledge, our openness and our 8+ years of skills to bring logical and lasting solutions that create an impact. With our expertise and your vision, we are about to develop something great.",
          })}
        </Text>

        <Box mt="16">
          <video
            loop
            muted
            ref={videoElRef}
            src="/videos/about_sbx.mp4"
            style={{ width: "100%", margin: "0 auto" }}
          />
        </Box>

        {false && (
          <>
            <Text as="p" marginTop="12" textAlign="center" fontWeight="bold">
              Some of the technologies we work with:
            </Text>

            <Flex
              align="center"
              justifyContent="space-between"
              gap="8"
              marginTop="4"
              maxWidth="780px"
              mx="auto"
            >
              <FeatureTile image={imgReact.src} altText="React" />
              <FeatureTile image={imgJs.src} altText="Javascript" />
              <FeatureTile image={imgPython.src} altText="Python" />
              <FeatureTile image={imgSwift.src} altText="Swift" />
            </Flex>
          </>
        )}
      </Container>
    </Box>
  );
};
const CustomArrow = createIcon({
  displayName: "CustomArrow",
  viewBox: "0 0 135 50",
  path: (
    <g
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      fill="none"
      stroke="currentColor"
    >
      <path d="M3.6 26.899c3.694 5.184 9.621 15.633 17.38 12.592 7.644-2.996 11.653-14.865 17.115-20.495 16.084-16.58 32.796 8.781 43.256 19.736 3.001 3.142 10.561 12.011 15.742 8.005 5.405-4.18 3.588-31.23-3.925-32.245-5.168-.698-1.456 6.614 1.57 7.661 10.183 3.521 25.553-10.357 32.861-15.503" />
      <path d="M128.665 13.957c-.524-4.356 2.411-7.529 2.735-11.714-3.013 1.087-9.222 3.013-12.496 2.207" />
    </g>
  ),
});

export default AboutSection;
