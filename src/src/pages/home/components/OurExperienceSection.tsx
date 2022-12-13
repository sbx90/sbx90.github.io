import useScreenType from "@root/src/hooks/useScreenType";

import React, { useMemo } from "react";

import styled from "styled-components";

import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("global");
  const { isScreenSmallerThanTablet } = useScreenType();

  const EXPERIENCE_POINTS = useMemo(
    () => [
      {
        title: t("experience-section.info-points.tech-experience.value", {
          defaultValue: "40+ years",
        }),
        description: t(
          "experience-section.info-points.tech-experience.description",
          {
            defaultValue: "of experience in the Technology industry",
          },
        ),
      },
      {
        title: t("experience-section.info-points.projects.value", {
          defaultValue: "30+",
        }),
        description: t("experience-section.info-points.projects.description", {
          defaultValue: "Software projects delivered",
        }),
      },
      {
        title: t("experience-section.info-points.software-experience.value", {
          defaultValue: "15 years",
        }),
        description: t(
          "experience-section.info-points.software-experience.description",
          {
            defaultValue: "of experience in software development",
          },
        ),
      },
      {
        title: t("experience-section.info-points.patent.value", {
          defaultValue: "Our own designed and patented product.",
        }),
        description: t("experience-section.info-points.patent.description", {
          defaultValue: "Indoor inventory tracking system.",
        }),
      },
    ],
    [],
  );

  return (
    <Box width="full" {...props}>
      <Container maxW="container.lg">
        <Heading>
          {t("experience-section.title", {
            defaultValue: "Our Experience",
          })}
        </Heading>

        <Grid
          templateColumns={
            isScreenSmallerThanTablet
              ? ""
              : ["1fr 1fr", "1fr 1fr", "5fr 4fr", "5fr 4fr"]
          }
          gap="8"
          mt="8"
        >
          <Box width="full" rounded="md" background="#969696" px="8" py="4">
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
