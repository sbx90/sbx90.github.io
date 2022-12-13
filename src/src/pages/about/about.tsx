import React, { memo } from "react";

import { useTranslation } from "next-i18next";

import { Box, Container, Text } from "@chakra-ui/react";

import Layout from "@layouts/default";

import PartnershipWithGbx from "@blocks/partnership-with-gbx";

import OurExperienceSection from "../home/components/OurExperienceSection";
import OurTeamSection from "../home/components/OurTeamSection";

const About = (): JSX.Element => {
  const { t } = useTranslation("about");

  return (
    <Container maxW="container.xl">
      <Box maxW="756px" px="md" mx="auto" textAlign="center" fontSize="lg">
        <Text>
          {t("content-1", {
            defaultValue:
              "Based in Florida, SBX has it's roots in an American company and family business that has been operating in the Technology sector for over 40 years.",
          })}
        </Text>
        <Text mt="8">
          {t("content-2", {
            defaultValue:
              "SBX was born with a specialized focus on Software development, to deviler impactful & innovative Software solutions for worldwide clients.",
          })}
        </Text>
        <Text mt="8">
          {t("content-3", {
            defaultValue:
              "In partnership with GBX Technology we awork on ideas, projects and complete technological products, including Hardware and Software development. Currently we have more than 30 projects completed and delivered for international clients in different industries.",
          })}
        </Text>
      </Box>

      <OurExperienceSection mt="16" />

      <OurTeamSection my="16" />

      <PartnershipWithGbx my="16" />
    </Container>
  );
};

About.PageLayout = memo(({ children }: { children: React.ReactNode }) => {
  return <Layout stickyHeader>{children}</Layout>;
});

export default About;
