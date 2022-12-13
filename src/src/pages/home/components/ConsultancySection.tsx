import useScreenType from "@root/src/hooks/useScreenType";

import React from "react";

import { useTranslation } from "next-i18next";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import FuildAnimatedDisplay from "@components/fuild-animated-display";

import ConsultancyImage from "@assets/images/home/consultancy.jpg";

import { useContactUsModal } from "@blocks/contact-us-modal";

const ConsultancySection: React.FC = () => {
  const { t } = useTranslation("home");
  const { onOpen } = useContactUsModal();
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <Box width="full" position="relative" background="#969696">
      {false && <FuildAnimatedDisplay />}

      <Container maxW="container.xl">
        <Flex
          w="full"
          minHeight={"100vh"}
          py={[8, 8, 12]}
          gap={[8, 8, 12]}
          flexDirection={isScreenSmallerThanTablet ? "column" : "row"}
        >
          <VStack justify="center" px={[4, 4, 8]}>
            <Stack color="black" maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Heading>
                {t("consultency-section.title", {
                  defaultValue: "Consultancy",
                })}
              </Heading>

              <Text fontSize="18px">
                {t("consultency-section.description.content-1", {
                  defaultValue:
                    "Regardless of whether you have an existing project or one that is just beginning, our team of experts is qualified to help you create, improve and transform it. We offer a one-to-one consultancy service to take a strategic look into your project and reach your technological objectives.",
                })}
              </Text>

              <Text fontSize="18px" marginTop="4">
                {t("consultency-section.description.content-2", {
                  defaultValue: "Our expertise includes:",
                })}
              </Text>

              <Text fontSize="18px" marginTop="4">
                {t("consultency-section.description.content-3", {
                  defaultValue:
                    "Django, Graph Creat, Python, UI/UX Development, AWS, React,Rest, Vue, Node, Next.js, Express, Angular",
                })}
              </Text>

              <Stack direction={"row"}>
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  px={10}
                  py={6}
                  onClick={() => {
                    onOpen();
                  }}
                >
                  {t("consultency-section.cta-text", {
                    defaultValue: "Schedule a Call",
                  })}
                </Button>
              </Stack>
            </Stack>
          </VStack>

          <VStack justify="center" px={[4, 4, 8]}>
            <img
              src={ConsultancyImage.src}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default ConsultancySection;
