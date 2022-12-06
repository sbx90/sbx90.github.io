import React from "react";

import {
  Box,
  ChakraProps,
  Container,
  Heading,
  SimpleGrid,
  Text,
  ThemingProps,
} from "@chakra-ui/react";

import GiancarloBrigante from "@assets/images/team/Giancarlo-Bregante.png";
import MariaIsabelMorgas from "@assets/images/team/Maria-Isabel-Moragas.jpeg";
import SoniaGomez from "@assets/images/team/Sonia-Gomez.jpeg";
import StefanoBrigante from "@assets/images/team/Stefano-Bregante.png";

const MEMBER_LIST = [
  {
    name: "Stefano Bregante",
    title: "CEO & Co- Founder",
    image: StefanoBrigante.src,
  },
  {
    name: "Giancarlo Bregante",
    title: "Co-Founder & CEO",
    image: GiancarloBrigante.src,
  },
  {
    name: "Sonia Gómez",
    title: "COO",
    image: SoniaGomez.src,
  },
  {
    name: "Maria Isabel Moragas",
    title: "Asistant Director",
    image: MariaIsabelMorgas.src,
  },
  // {
  //   name: "John Doe",
  //   title: "Title",
  //   image: "",
  // },
];

const TeamMember: React.FC<{
  name: string;
  title: string;
  image: string;
}> = ({ name, title, image }) => {
  return (
    <Box width={["100%", "184px", "244px", "244px"]}>
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "360px",
          borderRadius: "1rem",
          backgroundColor: "#f1f1f1",
          objectFit: "cover",
        }}
      />
      <Text fontSize="md" fontWeight="bold" mt="2">
        {name}
      </Text>
      <Text>{title}</Text>
    </Box>
  );
};

interface IOurTeamSection extends ChakraProps, ThemingProps {}

const OurTeamSection: React.FC<IOurTeamSection> = (props) => {
  return (
    <Box width="full" position="relative" px="8" {...props}>
      <Container maxW="container.lg">
        <Heading mb="4">Our Team</Heading>

        <SimpleGrid columns={[1, 2, 4, 4]} gap={["12", "12", "16", "16"]}>
          {MEMBER_LIST.map((member, i) => {
            return (
              <TeamMember
                key={i}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OurTeamSection;
