import React, { ReactNode, memo } from "react";

import {
  Box,
  ChakraProps,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  Company,
  Address,
  BusinessEnquiries,
} from "@definitions/navigation/footer";

const FooterLargeNavigationAppstore: React.FC<ChakraProps> = (props) => {
  return (
    <Box bg="#969696" color="#000000" {...props}>
      <Container as={Stack} maxW={"container.lg"} py={10}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {[Company, Address, BusinessEnquiries].map((i, index) => {
            return (
              <Stack key={index} align={"flex-start"} textTransform="uppercase">
                <ListHeader>{i.title}</ListHeader>
                {i.items.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    color="#000"
                    fontWeight="100"
                    fontSize={["18px", "18px", "20px", "20px"]}
                  >
                    {link.title}
                  </Link>
                ))}
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
