import { yupResolver } from "@hookform/resolvers/yup";

import React, {
  memo,
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";

import { useViewportScroll } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  Button,
  ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  LinkBox,
  LinkOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { useRefScrollProgress } from "@definitions/hooks/useRefScrollProgress";
import { SECTION_ID } from "@definitions/navigation/main";
import { __DEV__ } from "@definitions/utils";

import TransitionScreen from "@components/TransitionScreen";

export const ContactTansitionPage: React.FC<ChakraProps & ThemingProps> = (
  props,
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const [hidden, setHidden] = useState(false);

  const box = useRefScrollProgress(ref, 0);
  const { scrollYProgress } = useViewportScroll();

  const scrollCallback = useCallback(() => {
    const y = window.pageYOffset;

    setHidden(y < box.offsetTop);
  }, [box.offsetTop]);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", scrollCallback);
    }

    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [box.offsetTop, scrollYProgress]);

  return (
    <TransitionScreen hidden={hidden}>
      <Container maxW="container.xl" ref={ref} {...props}>
        <Flex
          direction={["column-reverse", "column-reverse", "column"]}
          id={SECTION_ID.CONTACT_US_SECTION}
        >
          <Container maxW="container.md">
            <Heading mb={4} fontSize={["2xl"]} textAlign="left">
              Everything begins with an idea.
            </Heading>
            <Text maxWidth="400px" textAlign="left">
              Get in touch today.
            </Text>
            {/* Contact Form */}
            <ContactForm colorScheme={color} mt={[5, 5, 10]} />
          </Container>
        </Flex>
      </Container>
    </TransitionScreen>
  );
};

interface IContactSimplePage extends ChakraProps, ThemingProps {
  formProps?: IContactForm;
}

const ContactSimplePage: React.FC<IContactSimplePage> = ({
  formProps = {},
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  return (
    <Container maxW="container.xl" ref={ref} {...restProps}>
      <Flex direction={["column-reverse", "column-reverse", "column"]}>
        <Container maxW="container.md">
          <Heading mb={4} fontSize={["2xl"]} textAlign="left">
            Everything begins with an idea.
          </Heading>
          <Text maxWidth="400px" textAlign="left">
            Get in touch today.
          </Text>
          {/* Contact Form */}
          <ContactForm colorScheme={color} mt={[5, 5, 10]} {...formProps} />
        </Container>
      </Flex>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const ContactLinkBox = memo(
  ({
    title,
    body,
    link,
    href,
  }: {
    title: string;
    body: string;
    link: string;
    href: string;
  }) => {
    const brightBg = useColorModeValue("white", "gray.900");
    const passiveColor = useColorModeValue("gray.500", "gray.400");
    return (
      <LinkBox flex="1" as="article">
        <Flex
          direction="column"
          rounded="xl"
          shadow={["md", "md", "xl"]}
          bg={brightBg}
          p="10"
          flex="1"
          alignItems="center"
          zIndex="2"
          textAlign="center"
          transition="all 250ms ease"
          _hover={{
            transform: ["none", "none", "translateY(-20px)"],
          }}
        >
          <Text mb={5} fontWeight="bold" fontSize="xl">
            {title}
          </Text>
          <Text color={passiveColor} mb={5} fontSize="lg">
            {body}
          </Text>

          <LinkOverlay href={href}>
            <Text fontWeight="bold" fontSize="lg">
              {link}
            </Text>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    );
  },
);

if (__DEV__) {
  ContactLinkBox.displayName = "ContactLinkBox";
}

interface ContactFormValues {
  firstName: string;
  email: string;
  message: string;
  interstedIn: string;
}

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters long")
      .required("First name is a required field")
      .matches(/^[a-zA-Z]+$/, "First name must contain only letters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    message: yup.string().required("Message is a required field"),
    interstedIn: yup.string().required("Message is a required field"),
  })
  .required();

interface IContactForm extends ChakraProps, ThemingProps {
  vertical?: boolean;
}

const ContactForm: React.FC<IContactForm> = memo(
  ({ vertical, colorScheme = "gray", ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ContactFormValues>();

    const inactiveColor = useColorModeValue("gray.500", "gray.400");

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<ContactFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
      defaultValues: { interstedIn: "option5" },
    });

    const onSubmit = (data: ContactFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <VStack spacing={6} {...rest}>
          <Stack
            align={["strech", "strech", "start"]}
            direction={vertical ? "column" : ["column", "row", "row"]}
            w="full"
            spacing={vertical ? 2 : 4}
          >
            <FormControl isRequired isInvalid={!!errors?.firstName}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="John"
                focusBorderColor={`${colorScheme}.400`}
                {...register("firstName")}
              />
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.email}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                focusBorderColor={`${colorScheme}.400`}
                {...register("email")}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack
            align={["strech", "strech", "start"]}
            direction={["column", "row", "row"]}
            w="full"
            spacing={4}
          >
            <FormControl isRequired isInvalid={!!errors?.email}>
              <FormLabel>I’m interested in</FormLabel>
              <Select
                placeholder="Select an option"
                {...register("interstedIn")}
              >
                <option value="option1">BackEnd Development</option>
                <option value="option2">FrontEnd Development</option>
                <option value="option3">Web & Mobile Apps</option>
                <option value="option4">Branding & Design</option>
                <option value="option5">Consultancy</option>
              </Select>
            </FormControl>
          </Stack>

          <FormControl isRequired isInvalid={!!errors?.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              {...register("message")}
              placeholder="Briefly describe your current project or idea..."
              resize="vertical"
              focusBorderColor={`${colorScheme}.400`}
            />
            <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            size="lg"
            isFullWidth
            colorScheme={colorScheme}
            isLoading={isSubmitting}
          >
            SUBMIT
          </Button>
          <Text color={inactiveColor} mt={2} fontSize="sm">
            We will get back to you as soon as possible.
          </Text>
        </VStack>
      </form>
    );
  },
);

if (__DEV__) {
  ContactForm.displayName = "ContactForm";
}

export default ContactSimplePage;
