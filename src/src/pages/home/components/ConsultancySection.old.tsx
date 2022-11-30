import React from "react";

import { Box, Button } from "@chakra-ui/react";

import FuildAnimatedDisplay from "@components/fuild-animated-display";
import { HeroBackgroundImage } from "@components/hero/hero-background-image";

import { useContactUsModal } from "@blocks/contact-us-modal";

// import OfficeImage from "@assets/images/office.jpg";

const ConsultancySection: React.FC = () => {
  const { onOpen } = useContactUsModal();

  return (
    <Box width="full" position="relative">
      {false && <FuildAnimatedDisplay />}

      <HeroBackgroundImage
        heading="Consultancy"
        body={[
          "Regardless of whether you have an existing project or one that is just beginning, our team of experts is qualified to help you create, improve and transform it.",
          "We offer a one-to-one consultancy service to take a strategic look into your project and reach your technological objectives. Our expertise includes",
          "Django, Graph Creat, Python, UI/UX Development, AWS, React, Rest, Vue, Node, Next.js, Express, Angular",
        ]}
        textColor="whiteAlpha.900"
        background="#ECF2F8"
        buttons={
          <>
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
              Schedule a Call
            </Button>
          </>
        }
        justifyContent={["center", "flex-start"]}
      />
    </Box>
  );
};

export default ConsultancySection;
