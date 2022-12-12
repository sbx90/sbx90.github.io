import useScreenType from "@root/src/hooks/useScreenType";

import React from "react";

import { Box, createIcon, Heading, Container, Flex } from "@chakra-ui/react";

import { SECTION_ID } from "@definitions/navigation/main";

import Annotation from "@components/annotation";

import BackendImage from "@assets/images/home/backend.png";
import BrandingDesignImage from "@assets/images/home/branding-design.png";
import FrontendImage from "@assets/images/home/frontend.png";
import WebMobileAppsImage from "@assets/images/home/web-mobile-apps.png";

import AppFeatures from "@blocks/mobileapp/features";
import FeaturesListVertical from "@blocks/mobileapp/features-list-vertical";

const CapabilitiesSection: React.FC = () => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <Box width="full" id={SECTION_ID.OUR_SERVICES_SECTION}>
      <Container maxW="container.lg">
        {false && (
          <Flex justify="center">
            <Annotation
              as={CustomArrow} // custom annotation arrow
              color={"#1250E2"}
              strokeWidth={2}
              h={34}
              w={270}
              left="10px"
              bottom="-28px"
            >
              <Heading color={"#1250E2"} lineHeight="1" fontSize="40px">
                Our Capabitilies
              </Heading>
            </Annotation>
          </Flex>
        )}

        <Heading>Our Capabitilies</Heading>

        <Flex direction="column" alignItems="center" pt="20px">
          <Container py={0} maxWidth="container.xl">
            <FeaturesListVertical
              showContentFirst={!isScreenSmallerThanTablet}
              title="BackEnd Development"
              body="We believe BackEnd requires perfect synergy of teams and a full understanding of the complete project's picture in the long run. At SBX we are experts in achieving complex structures and working with flexibility to guarantee scalable work with continuous integration and sophistication."
              image={BackendImage}
              items={[]}
            />
          </Container>
        </Flex>

        <Flex direction="column" alignItems="center" mt={[0, 0, 0, "-40"]}>
          <Container py={0} maxWidth="container.xl">
            <AppFeatures
              title="FrontEnd Development"
              body={[
                "FrontEnd Development is a key component for a fast, smooth and optimized performance,which leads to a top user experience.",
                "You can expect from us functional work, fluid navigation and interactive features aimed to adapt to the continuous demands of your market to connect, inspire, engage and loyalize users anywhere.",
              ]}
              image={FrontendImage}
            />
          </Container>
        </Flex>

        <Container maxWidth="container.xl">
          <FeaturesListVertical
            showContentFirst={!isScreenSmallerThanTablet}
            title="Web & Mobile Apps"
            body={[
              "Apps connect users with products, valuable information and key services in real time but behind every APP, there is a huge technological effort and managerial challenge aimed to deliver seamless experiences.",
              "Our team merges technical talent with passion for building great apps that amaze users and significantly boost your brand's growth.",
            ]}
            image={WebMobileAppsImage}
            items={[]}
          />
        </Container>

        <Flex direction="column" alignItems="center" pb={[16, 16, 0, 0, 0]}>
          <Container py={0} maxWidth="container.xl">
            <AppFeatures
              title="Branding & Design"
              body={[
                "Through colour palettes, imagery and original design we help our clients consolidate the perfect brand “look & feel” that both inspires and engages customers.",
                "Our branding services focus on creating  a meaningful brand identity that succeeds in sharing your brand’s true voice, growing your business and making an impact.",
              ]}
              image={BrandingDesignImage}
            />
          </Container>
        </Flex>
      </Container>
    </Box>
  );
};

const CustomArrow = createIcon({
  displayName: "CustomArrow",
  viewBox: "0 0 197 11",
  path: (
    <line
      x1="0.0764948"
      y1="2.50117"
      x2="196.076"
      y2="8.50117"
      stroke="#1250E2"
      strokeWidth="5"
    />
  ),
});

export default CapabilitiesSection;
