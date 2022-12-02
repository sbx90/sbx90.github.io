import useScreenType from "@root/src/hooks/useScreenType";

import React from "react";

import styled from "styled-components";

import {
  Box,
  Heading,
  Container,
  Text,
  Grid,
  ChakraProps,
  ThemingProps,
} from "@chakra-ui/react";

import ExperienceImage from "@assets/images/home/experience.jpg";

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const EXPERIENCE_POINTS = [
  {
    title: "40+ years",
    description: "of experience in the Technology industry",
  },
  {
    title: "30+",
    description: "Software projects delivered",
  },
  {
    title: "15 years",
    description: "of experience in software development",
  },
  {
    title: "Our own designed and patented product.",
    description: "Indoor inventory tracking system.",
  },
];

const Feature: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Box py="1" mb="3">
      <Text fontSize="22" fontWeight="bold" color="black">
        {title}
      </Text>
      <Text color="black" fontSize="21" fontWeight="medium">
        {description}
      </Text>
    </Box>
  );
};

interface IOurExperienceSection extends ChakraProps, ThemingProps {}

const OurExperienceSection: React.FC<IOurExperienceSection> = (props) => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <Box width="full" {...props}>
      <Container maxW="container.lg">
        <Heading>Our Experience</Heading>

        <Grid
          templateColumns={
            isScreenSmallerThanTablet
              ? ""
              : ["1fr 1fr", "1fr 1fr", "5fr 4fr", "5fr 4fr"]
          }
          gap="8"
          mt="8"
        >
          <Box width="full" rounded="md" background="#F6F8FA" px="8" py="4">
            {EXPERIENCE_POINTS.map((item, i) => {
              return (
                <Box key={i}>
                  <Feature title={item.title} description={item.description} />
                </Box>
              );
            })}
          </Box>

          <Box>
            <StyledImage src={ExperienceImage.src} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurExperienceSection;
