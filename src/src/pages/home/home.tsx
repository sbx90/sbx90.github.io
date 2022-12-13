import { MdOutlineBrightness4, MdBolt, VscDebugConsole } from "@react-icons";

import React, { memo, useContext } from "react";

import { IconType } from "react-icons";

import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Text,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import { FadeUpGrid } from "@components/animations/fade-up";
import { FeaturesCard } from "@components/features";

import Layout from "@layouts/default";

import AboutSection from "./components/AboutSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ConsultancySection from "./components/ConsultancySection";
import { ContactTransitionPage } from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import OurExperienceSection from "./components/OurExperienceSection";
import OurTeamSection from "./components/OurTeamSection";
import PorfolioSection from "./components/PorfolioSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonySection from "./components/TestimonySection";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 35,
      mass: 1.75,
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0, y: 50 },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 35,
      mass: 1.75,
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const Homepage = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color
  const { t } = useTranslation("home");

  return (
    <>
      <NextSeo title={Site.slogan} description={Site.description} />

      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        <VStack mb={[10, 20, 32]} spacing={[10, 20, 32]}>
          <Box w="full">
            <HeroSection />

            <FeaturesBlock
              items={[
                {
                  icon: MdBolt,
                  title: t("features.end-to-end.title", {
                    defaultValue: "End-to-End Development",
                  }),
                  body: [
                    t("features.end-to-end.description.content-1", {
                      defaultValue:
                        "Do you have an idea that you want to develop and turn into a successful product or service?",
                    }),
                    t("features.end-to-end.description.content-2", {
                      defaultValue:
                        "We are ready to start from scratch and work by your side to deliver a world-class software product.",
                    }),
                  ],
                },
                {
                  icon: VscDebugConsole,
                  title: t("features.system-improvement.title", {
                    defaultValue: "System Improvement",
                  }),
                  body: t("features.system-improvement.description.content-1", {
                    defaultValue:
                      "We take care of the analysis and review of your existing project or product to make any required technological upgrades, reduce costs and meet deadlines.",
                  }),
                },
                {
                  icon: MdOutlineBrightness4,
                  title: t("features.consultancy.title", {
                    defaultValue: "Consultancy & Expertise:",
                  }),
                  body: t("features.consultancy.description.content-1", {
                    defaultValue:
                      "We can provide full consultancy services on any of your technological needs. We are more than happy to help you with professional feedback in any area of the technological development of your idea, project, or product.",
                  }),
                },
              ]}
            />
          </Box>

          <AboutSection />

          <OurExperienceSection />

          <Box width="full" overflow="hidden">
            <CapabilitiesSection />

            <ConsultancySection />

            {false && <PorfolioSection />}

            <ProjectsSection />

            <TestimonySection />
          </Box>

          <ContactTransitionPage />

          <OurTeamSection />
        </VStack>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

/**
 *  https://tympanus.net/codrops/tag/isometric/
 *https://github.com/codrops/IsometricGrids/
 */

const FeaturesBlock: React.FC<
  {
    items: { icon: IconType; title: string; body: string | string[] }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ items = [], ...rest }) => {
  return (
    <Flex width="full" {...rest}>
      <Container maxW="container.xl">
        <FadeUpGrid
          columns={[1, 1, 3, 3]}
          variants={variants}
          childVariants={childVariants}
          gap={["4", "4", "4", "8"]}
        >
          {items.map(({ title, body }, i) => (
            <FeaturesCard
              key={i}
              direction="column"
              height="full"
              width="full"
              p={10}
              border="1px solid"
              rounded="xl"
              borderColor="blackAlpha.100"
              maxWidth="480px"
              boxShadow="2xl"
              header={
                <Heading fontSize="25" as="h3" textAlign="center">
                  {title}
                </Heading>
              }
              body={(body instanceof Array ? body : [body]).map(
                (content, i) => {
                  return (
                    <Text key={i} textAlign="center" mt="6" fontSize="md">
                      {content}
                    </Text>
                  );
                },
              )}
            />
          ))}
        </FadeUpGrid>
      </Container>
    </Flex>
  );
});

Homepage.PageLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <Layout stickyHeader contentContainerProps={{ pt: "28px" }}>
      {children}
    </Layout>
  );
});

export default Homepage;
