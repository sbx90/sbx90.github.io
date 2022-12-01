import React, { memo } from "react";

import { Box, Container, Text } from "@chakra-ui/react";

import Layout from "@layouts/default";

import OurExperienceSection from "../home/components/OurExperienceSection";
import OurTeamSection from "../home/components/OurTeamSection";

const About = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Box maxW="756px" px="md" mx="auto" textAlign="center" fontSize="lg">
        <Text>
          Based in Florida, SBX has it's roots in an American company and family
          business that has been operating in the Technology sector for over 40
          years.
        </Text>
        <Text mt="8">
          SBX was born with a specialized focus on Software development, to
          deviler impactful & innovative Software solutions for worldwide
          clients.
        </Text>
        <Text mt="8">
          In partnership with GBX Technology we awork on ideas, projects and
          complete technological products, including Hardware and Software
          development. Currently we have more than 30 projects completed and
          delivered for international clients in different industries.
        </Text>
      </Box>

      <OurExperienceSection mt="16" />

      <OurTeamSection my="16" />
    </Container>
  );
};

About.PageLayout = memo(({ children }: { children: React.ReactNode }) => {
  return <Layout stickyHeader>{children}</Layout>;
});

export default About;
