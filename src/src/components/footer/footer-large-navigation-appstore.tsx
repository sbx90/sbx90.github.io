import React, { ReactNode, memo, useMemo } from "react";

import { useTranslation } from "next-i18next";

import {
  Box,
  Button,
  ChakraProps,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { IFooterLinks } from "@definitions/navigation/footer";

import { useContactUsModal } from "@blocks/contact-us-modal";

const FooterLargeNavigationAppstore: React.FC<ChakraProps> = (props) => {
  const { onOpen } = useContactUsModal();
  const { t } = useTranslation("global");

  const Company: IFooterLinks = useMemo(
    () => ({
      title: t("footer.company", {
        defaultValue: "Company",
      }),
      items: [
        {
          title: t("footer.about-us", {
            defaultValue: "About us",
          }),
          href: "/about",
        },
      ],
    }),
    [],
  );

  const Address: IFooterLinks = useMemo(
    () => ({
      title: t("footer.based-in", {
        defaultValue: "BASED IN",
      }),
      items: [
        {
          title: t("footer.address", {
            defaultValue: "0206 NW 47th, Street Sunrise, FL 33351 US",
          }),
          href: "",
        },
      ],
    }),
    [],
  );

  const BusinessEnquiries: IFooterLinks = useMemo(
    () => ({
      title: t("footer.business-inquiries", {
        defaultValue: "BUSINESS INQUIRIES",
      }),
      items: [
        {
          title: t("footer.email", {
            defaultValue: "HELLO@GBXTECHNOLOGY.NET",
          }),
          href: "mailto:hello@gbxtechnlogy.net",
        },
        {
          title: t("footer.contact-us", {
            defaultValue: "CONTACT US",
          }),
          onClick: onOpen,
          href: "",
        },
      ],
    }),
    [],
  );

  return (
    <Box bg="#969696" color="#000000" {...props}>
      <Container as={Stack} maxW={"container.lg"} py={10}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {[Company, Address, BusinessEnquiries].map((i, index) => {
            return (
              <Stack key={index} align={"flex-start"} textTransform="uppercase">
                <ListHeader>{i.title}</ListHeader>
                {i.items.map(({ href, title, onClick }, idx) =>
                  onClick ? (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onClick();
                      }}
                      key={index}
                      color="#000"
                      background="transparent !important"
                      fontWeight="100"
                      fontSize={["18px", "18px", "20px", "20px"]}
                      padding="0"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {title}
                    </Button>
                  ) : (
                    <Link
                      key={idx}
                      href={href}
                      color="#000"
                      fontWeight="100"
                      fontSize={["18px", "18px", "20px", "20px"]}
                    >
                      {title}
                    </Link>
                  ),
                )}
              </Stack>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ListHeader = memo(({ children }: { children: ReactNode }) => {
  return (
    <Text color="#000" fontWeight={"500"} fontSize={"25px"} mb={2}>
      {children}
    </Text>
  );
});

export default memo(FooterLargeNavigationAppstore);
