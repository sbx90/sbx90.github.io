import { memo } from "react";

import {
  ThemingProps,
  ChakraProps,
  Box,
  Button,
  Text,
  Flex,
  Container,
} from "@chakra-ui/react";

import { GBX_SITE_LINK } from "@definitions/links";
import { __DEV__ } from "@definitions/utils";

import GbcPartnership from "@assets/images/home/gbx-partner.png";

import useScreenType from "../hooks/useScreenType";

interface ITagListBlock extends ChakraProps, ThemingProps {}

const PartnershipWithGbx: React.FC<ITagListBlock> = (props) => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <Container maxW="container.xl" {...props} px="16">
      <Text fontSize="26" fontWeight="bold">
        In partnership with:
      </Text>

      <Box maxWidth="320" mx="auto">
        <img src={GbcPartnership.src} alt="Partner with GBX" />
      </Box>

      <Flex justifyContent="center">
        <a href={GBX_SITE_LINK} target="_blank">
          <Button
            variant="solid"
            color="#000000"
            background="#D9D9D9"
            border="1px solid A9A9A9"
            size="28"
            fontSize={isScreenSmallerThanTablet ? "24px" : "28px"}
            px="6"
            py="6"
            fontWeight="500"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Visit Website
          </Button>
        </a>
      </Flex>
    </Container>
  );
};

if (__DEV__) {
  PartnershipWithGbx.displayName = "PartnershipWithGbx";
}

export default memo(PartnershipWithGbx);
