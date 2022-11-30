import React from "react";

import { ChakraProps, Container, Text, ThemingProps } from "@chakra-ui/react";

import OurExperienceSection from "../home/components/OurExperienceSection";
import OurTeamSection from "../home/components/OurTeamSection";

interface IAboutPagePage extends ChakraProps, ThemingProps {}

const About: React.FC<IAboutPagePage> = (props) => {
  return (
    <Container maxW="container.xl" {...props}>
      <Text>
        Based in Florida, SBX has it's roots in an American company and family
        business that has been operating in the Technology sector for over 40
        years.
      </Text>

      <Text>
        SBX was born with a specialized focus on Software development, to
        deviler impactful & innovative Software solutions for worldwide clients.
      </Text>

      <Text>
        In partnership with GBX Technology we awork on ideas, projects and
        complete technological products, including Hardware and Software
        development. Currently we have more than 30 projects completed and
        delivered for international clients in different industries.
      </Text>

      <OurExperienceSection />

      <OurTeamSection />
    </Container>
  );
};

export default About;
