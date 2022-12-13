import { ImQuotesLeft, IoIosArrowForward } from "@react-icons";

import React, { useContext, memo } from "react";

import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  chakra,
  ChakraProps,
  ThemingProps,
  Text,
  Container,
  Flex,
  Heading,
  Stack,
  VStack,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  Wrap,
  WrapItem,
  Link,
  SimpleGrid,
  Divider,
  Button,
  useToken,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import Logo2 from "@definitions/brands/logo-2";
import Logo5 from "@definitions/brands/logo-5";
import { ThemeColorContext } from "@definitions/context";
import { __DEV__ } from "@definitions/utils";

import DividerCurve from "@components/divider/divider-curve";
import DividerTilt from "@components/divider/divider-tilt";
import ImageLazyload from "@components/image-lazyload";

import RainaLogo from "@assets/images/branding/raina-logo-dark.png";
import Office1 from "@assets/images/office-1.jpg?resize&img";
import Office2 from "@assets/images/office-2.jpg?resize&img";
import Office3 from "@assets/images/office-3.jpg?resize&img";
import RainaScreenshotMobile2 from "@assets/images/projects/raina/raina-2.png";
// import RainaScreenshot1 from "@assets/images/projects/raina/raina-1.png";
// import RainaScreenshot3 from "@assets/images/projects/raina/raina-3.png";
import RainaScreenshotHero from "@assets/images/projects/raina/raina-4.png";
import RainaScreenshotMobile1 from "@assets/images/projects/raina/raina-5.png";

import PartnershipWithGbx from "@blocks/partnership-with-gbx";

const CustomerStoryOverviewPage: React.FC = () => {
  const { t } = useTranslation("raina");
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme;

  /* ----------------------------- Page Contents ---------------------------- */
  const content: T_Content[] = [
    {
      heading: t("our-work.heading", {
        defaultValue: "Our Work",
      }),
      body: [
        {
          content: t("our-work.content-1", {
            defaultValue:
              "Our client was looking for a total update of its system, which would improve the user experience of its customers and also exceed the current standards of the market with its unique and innovative features.",
          }),
        },
        {
          content: t("our-work.content-2", {
            defaultValue:
              "SBX's mission was to take the needs of our client and ground them in a clear and specific action plan, to work on both the Software development and Hardware development and achieve a reliable product, ready to go into the market and that could also be scaled with mass production.",
          }),
        },
      ],
      images: [
        {
          image: RainaScreenshotMobile1,
          imageDescription: "",
          style: {
            position: "absolute",
            top: "-10%",
            left: "56%",
            width: "130px",
          },
        },
        {
          image: RainaScreenshotMobile2,
          imageDescription: "",
          style: {
            position: "absolute",
            top: "2%",
            left: "20%",
            width: "130px",
          },
        },
      ],
    },
    {
      heading: t("sbx-provided.heading", {
        defaultValue: "SBX provided:",
      }),
      headingColor: "#1250E2",
      body: [
        {
          points: [
            t("sbx-provided.content-1.point-1", {
              defaultValue: "A complete solution, from Back-End to Front-End.",
            }),
            t("sbx-provided.content-1.point-2", {
              defaultValue: "Total project development to a final product.",
            }),
            t("sbx-provided.content-1.point-3", {
              defaultValue:
                "Teams management, meeting deadlines and reducing development costs.",
            }),
            t("sbx-provided.content-1.point-4", {
              defaultValue: "Reduction of manufacturing costs.",
            }),
            t("sbx-provided.content-1.point-5", {
              defaultValue:
                "Low-level programming, working directly with the hardware to achieve much faster and more reliable response times.",
            }),
          ],
          contentRight: (
            <CompanyInfo
              name={t("project-name", {
                defaultValue: "Raina Music",
              })}
              url="https://www.rainamusic.com/"
              logo={<img src={RainaLogo.src} alt="" />}
              info={[
                {
                  key: t("info-points.industry.label", {
                    defaultValue: "Industry",
                  }),
                  value: t("info-points.industry.value", {
                    defaultValue: "Music Tech",
                  }),
                },
                {
                  key: t("info-points.location.label", {
                    defaultValue: "Location",
                  }),
                  value: t("info-points.location.value", {
                    defaultValue: "New York, USA.",
                  }),
                },
              ]}
            />
          ),
        },
      ],
    },
  ];

  return (
    <Box>
      <NextSeo
        title={t("seo.name", {
          defaultValue: "Raina",
        })}
        description={t("seo.description", {
          defaultValue:
            "Music Streaming Platform. An in-store music streaming system for commercial and high-end venues with custom live DJ mixes.",
        })}
      />
      <chakra.main
        sx={{
          "*::selection": {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.200`, `${color}.700`),
          },
          mark: {
            color: useColorModeValue(`${color}.600`, `${color}.400`),
            background: useColorModeValue(`${color}.100`, `${color}.800`),
          },
        }}
      >
        {/* ----------------------------- Hero ----------------------------- */}
        <HeroBlock
          hideBg
          logo={<img src={RainaLogo.src} />}
          image={RainaScreenshotHero}
          company={t("company-name", {
            defaultValue: "Raina",
          })}
          title={t("hero-section.title", {
            defaultValue: "“Crafted by humans, perfected by technology”",
          })}
          body={t("hero-section.content-1", {
            defaultValue:
              "Raina is the ultimate in-store music streaming platform that provides custom DJ mixes for conventional and luxury venues all over the world. Raina gives its customers access to constantly updated and meticulously curated playlists for them to enjoy varied music with the best sound quality in their businesses.",
          })}
          colorScheme={color}
        />

        {/* -------------------------- Testimonial ------------------------- */}
        <Box mb={10} mt={-32}>
          <Container maxW="container.xl">
            {content.map((c, idx) => {
              const content_ = (c.body || []).map((b, i) => (
                <Content
                  key={i}
                  color={useColorModeValue("current", "whiteAlpha.700")}
                  {...b}
                />
              ));

              return (
                <Box fontSize="xl" maxW="auto" mb={[5, 10, 20, 20]} key={idx}>
                  <Heading as="h3" mb={6} color={c.headingColor}>
                    {c.heading}
                  </Heading>
                  {c.images ? (
                    <Flex>
                      <Box>{content_}</Box>
                      <Box position="relative" flex="1">
                        {c.images.map(({ image, style }, i) => {
                          return (
                            <Box style={style}>
                              <ImageLazyload
                                key={i}
                                rounded="md"
                                image={image}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    </Flex>
                  ) : (
                    content_
                  )}
                </Box>
              );
            })}
          </Container>
        </Box>

        {false && <Divider />}

        {/* ------------------------ Related Stories ----------------------- */}
        {false && (
          <RelatedStoriesBlock
            colorScheme={color}
            title="Continue with Related Stories"
            items={[
              {
                href: "#",
                logo: (
                  <Logo1 color={useColorModeValue(null, "whiteAlpha.800")} />
                ),
                image: Office1,
                company: "Company 1",
                body: "Company est omnis divisa in partes tres, quarum. At nos hinc posthac, sitientis piros Afros.",
              },
              {
                href: "#",
                logo: (
                  <Logo2 color={useColorModeValue(null, "whiteAlpha.800")} />
                ),
                image: Office2,
                company: "Company 2",
                body: "Company Cras mattis iudicium purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.",
              },
              {
                href: "#",
                logo: (
                  <Logo5 color={useColorModeValue(null, "whiteAlpha.800")} />
                ),
                image: Office3,
                company: "Company 3",
                body: "Company sociis natoque penatibus et magnis dis parturient. Hi omnes lingua, institutis, legibus inter se differunt.",
              },
            ]}
          />
        )}

        {/* ------------------------------ CTA ----------------------------- */}
        {false && (
          <CTABlock
            colorScheme={color}
            title={
              <>
                <Text
                  as="span"
                  fontSize={["1em", "1em", "1.5em"]}
                  display={["inline", "inline", "block"]}
                >
                  Questions?
                </Text>{" "}
                <Text as="span" display={["inline", "inline", "block"]}>
                  We will guide you.
                </Text>
              </>
            }
            body="Ask about Themebiotic products, pricing, implementation, or anything else. Our highly trained representatives are ready to help."
            button={
              <Wrap flex="1" spacing={5} justify="center" align="center">
                <WrapItem>
                  <Button
                    size="lg"
                    colorScheme={color}
                    textTransform="uppercase"
                  >
                    <Text fontSize="sm" fontWeight="700" as="span">
                      Contact Us
                    </Text>
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button whiteSpace="pre-wrap" variant="link">
                    OR CALL 00800 1234 5678 (FREEPHONE)
                  </Button>
                </WrapItem>
              </Wrap>
            }
          />
        )}

        <PartnershipWithGbx mt="12" mb="16" />
      </chakra.main>
    </Box>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

const HeroBlock: React.FC<
  {
    logo: React.ReactNode;
    image: imageObject;
    company: string;
    title: string;
    body: string;
    hideBg?: boolean;
  } & ChakraProps &
    ThemingProps
> = memo(
  ({ logo, title, body, company, image, colorScheme, hideBg, ...rest }) => {
    return (
      <Box pb={48} zIndex={-1} overflow="hidden" pos="relative" {...rest}>
        <Container pt={[28]} maxW="container.xl">
          <Stack
            align="center"
            spacing={[5, 5, 10, 20]}
            direction={["column", "column", "row", "row"]}
          >
            <Box w="full" flex="1">
              <VStack align="start" spacing={6}>
                {logo}
                {title && <Heading>{title}</Heading>}
                {body && <Text fontSize="lg">{body}</Text>}
              </VStack>
            </Box>

            <Flex w="full" flex="1">
              <Box shadow="2xl" flex="1">
                {image && (
                  <ImageLazyload rounded="md" alt={company} image={image} />
                )}
              </Box>
            </Flex>
          </Stack>
        </Container>
        {!hideBg && (
          <TornadoBackground
            colorScheme={colorScheme}
            top="0"
            pos="absolute"
            zIndex={-1}
          />
        )}
        <DividerTilt height="150px" position="bottom" />
      </Box>
    );
  },
);

if (__DEV__) {
  HeroBlock.displayName = "HeroBlock";
}

const TestimonialBlock: React.FC<
  {
    body: string;
    author: string;
    authorColor?: string;
    bodyColor?: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ author, authorColor, body, bodyColor, colorScheme, ...rest }) => {
  return (
    <Box
      maxW="700px"
      w={["full", "full", "full", "65%"]}
      mr={[0, 0, 10, 10]}
      {...rest}
    >
      <Flex direction={["column", "row", "row", "row"]}>
        <Icon
          mr={10}
          fontSize="48"
          as={ImQuotesLeft}
          color={useColorModeValue(`${colorScheme}.100`, `${colorScheme}.400`)}
        />
        <Box>
          {body && (
            <Text color={bodyColor} mb={2} fontSize="2xl">
              {body}
            </Text>
          )}
          {author && <Text color={authorColor}>— {author}</Text>}
        </Box>
      </Flex>
    </Box>
  );
});

if (__DEV__) {
  TestimonialBlock.displayName = "TestimonialBlock";
}

const CompanyInfo: React.FC<
  {
    name: string;
    url: string;
    logo: React.ReactNode;
    info: {
      key: string;
      value: string;
    }[];
  } & ChakraProps &
    ThemingProps
> = memo(({ name, url, logo, info, ...rest }) => {
  const { t } = useTranslation("global");
  const textMuted = useColorModeValue("gray.500", "gray.500");

  return (
    <Box
      flex="1"
      p={8}
      mt={[10, 10, 10, 0]}
      bg={useColorModeValue("whiteAlpha.800", "blackAlpha.600")}
      shadow="xl"
      rounded="md"
      ml={["unset", "unset", "unset", "auto"]}
      maxW={["full", "full", "auto", "364px"]}
      {...rest}
    >
      <Box filter={useColorModeValue("", "brightness(0) invert(1)")}>
        {logo}
      </Box>
      <Box mt={2} color={textMuted}>
        <List color={useColorModeValue("black", "whiteAlpha.800")}>
          <ListItem>
            <Link d="flex" alignItems="center" href={url}>
              {name}
            </Link>
          </ListItem>
          {info.map((i, idx) => (
            <ListItem key={idx}>
              <Flex fontSize="xl">
                <Text mr={1} fontWeight="bold">
                  {i.key}:
                </Text>
                <Text flex="1">{i.value}</Text>
              </Flex>
            </ListItem>
          ))}

          {!!url && (
            <ListItem fontSize="xl" mt={6}>
              <Link d="flex" alignItems="center" href={url} isExternal>
                {t("common-words.visit-website", {
                  defaultValue: "Visit Website",
                })}
              </Link>
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
});

if (__DEV__) {
  CompanyInfo.displayName = "CompanyInfo";
}

/* ------------------------------ Content Types ----------------------------- */

type T_Content = {
  heading?: string;
  headingColor?: string;
  body: T_ContentBody[];
  images?: T_ContentBodyImages[];
};

type T_ContentBody = {
  content?: string;
  points?: string[];
  image?: imageObject;
  imageDescription?: string;
  imageRatio?: number;
  images?: T_ContentBodyImages[];
  contentRight?: React.ReactNode;
};

type T_ContentBodyImages = {
  image: imageObject;
  imageDescription: string;
  style?: React.CSSProperties;
};

const Content: React.FC<T_ContentBody & ChakraProps> = memo(
  ({
    content,
    image,
    images,
    imageDescription,
    imageRatio,
    color,
    points,
    contentRight,
    ...rest
  }) => {
    const textMuted = useColorModeValue("gray.500", "gray.500");
    return (
      <Box {...rest}>
        <Flex
          justify="space-between"
          direction={["column", "column", "column", "row"]}
        >
          <Box fontSize="xl" maxW="700px" mb={4}>
            <Box fontSize="xl" maxW="700px" mb={4}>
              <Text
                color={color}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Box>
            {!!points && (
              <ul style={{ paddingLeft: "22px" }}>
                {points.map((p, i) => {
                  return <li key={i}>{p}</li>;
                })}
              </ul>
            )}
          </Box>

          <Box flex="1">
            {contentRight || (
              <>
                {image && (
                  <Box maxW="1000px" mt={10} mb={imageDescription ? 6 : 10}>
                    <ImageLazyload
                      rounded="md"
                      ratio={imageRatio}
                      image={image}
                    />
                    {imageDescription && (
                      <Text
                        textAlign={["center", "center", "end"]}
                        color={textMuted}
                        mt={2}
                        fontSize="sm"
                      >
                        {imageDescription}
                      </Text>
                    )}
                  </Box>
                )}
                {images && (
                  <Stack
                    spacing={[5, 5, 10]}
                    my={10}
                    direction={["column", "column", "row", "row"]}
                  >
                    {images.map((i, idx) => (
                      <ContentImages color={textMuted} key={idx} {...i} />
                    ))}
                  </Stack>
                )}
              </>
            )}
          </Box>
        </Flex>
      </Box>
    );
  },
);

if (__DEV__) {
  Content.displayName = "Content";
}

const ContentImages: React.FC<ChakraProps & T_ContentBodyImages> = memo(
  ({ image, imageDescription, color }) => {
    return (
      <Flex direction={"column"} w="full" flex="1">
        <Box w="full">
          <ImageLazyload rounded="md" image={image} />
        </Box>
        {imageDescription && (
          <Text
            textAlign={["center", "center", "end"]}
            color={color}
            mt={2}
            fontSize="sm"
          >
            {imageDescription}
          </Text>
        )}
      </Flex>
    );
  },
);

if (__DEV__) {
  ContentImages.displayName = "ContentImages";
}

const RelatedStoriesBlock: React.FC<
  {
    items: {
      body: string;
      company: string;
      href: string;
      image: imageObject;
      logo: React.ReactNode;
    }[];
    title: string;
  } & ChakraProps &
    ThemingProps
> = memo(({ items = [], title, colorScheme }) => {
  return (
    <Container my={[10, 10, 20, 20]} maxW="container.xl">
      {title && (
        <Heading
          textAlign={["center", "center", "start"]}
          mb={10}
          fontSize="2xl"
          as="h3"
        >
          {title}
        </Heading>
      )}

      <SimpleGrid spacing={10} columns={[1, 1, 2, 3]}>
        {items.map((item, idx) => (
          <Flex
            key={idx}
            direction="column"
            rounded="xl"
            overflow="hidden"
            bg={useColorModeValue("white", "gray.700")}
            shadow="xl"
          >
            <Box pos="relative">
              <Box flex="1">
                <ImageLazyload
                  w="100%"
                  h="100%"
                  ratio={3 / 2}
                  objectFit="cover"
                  alt={item.company}
                  image={item.image}
                />
              </Box>
              <DividerCurve
                invert
                height="60px"
                position="bottom"
                color={useColorModeValue("white", "gray.700")}
              />
            </Box>
            <Box p={10} pt={5} pb={0}>
              <Flex mb={5}>{item.logo}</Flex>
              <Text
                color={useColorModeValue("current", "whiteAlpha.700")}
                mb={5}
              >
                {item.body}
              </Text>
            </Box>
            {item.href && (
              <Box p={10} pt={0} mt="auto">
                <ReadMoreLink href={item.href} colorScheme={colorScheme}>
                  Read story
                </ReadMoreLink>
              </Box>
            )}
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
});

if (__DEV__) {
  RelatedStoriesBlock.displayName = "RelatedStoriesBlock";
}

const ReadMoreLink: React.FC<{ href: string } & ChakraProps & ThemingProps> =
  memo(({ colorScheme = "blue", children, href, ...rest }) => {
    return (
      <NextLink href={href} passHref>
        <Link
          display="flex"
          alignItems="center"
          role="group"
          fontWeight="600"
          color={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)}
          mt="auto"
          _hover={{
            textDecoration: "none",
          }}
          {...rest}
        >
          {children}
          <Icon
            as={IoIosArrowForward}
            transition="all 300ms ease"
            transform="translateX(-10px) scale(0)"
            opacity={0}
            _groupHover={{
              transform: "translateX(10px) scale(1.3)",
              opacity: 1,
            }}
          />
        </Link>
      </NextLink>
    );
  });

if (__DEV__) {
  ReadMoreLink.displayName = "ReadMoreLink";
}

const CTABlock: React.FC<
  {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    button: React.ReactNode;
  } & ChakraProps &
    ThemingProps
> = memo(({ title, body, button, colorScheme }) => {
  return (
    <Box overflow="hidden" pos="relative" py={[10, 20, 20]}>
      <Container maxW="container.xl">
        <Stack direction={["column", "column", "row"]} align="center">
          <Box flex="1">
            {title && (
              <Heading textAlign={["center", "center", "start"]} mb={5} as="h3">
                {title}
              </Heading>
            )}
            {body && (
              <Text
                mb={5}
                fontSize="lg"
                textAlign={["center", "center", "start"]}
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {body}
              </Text>
            )}
          </Box>
          {button}
        </Stack>
      </Container>
      <TornadoBackground
        colorScheme={colorScheme}
        top="0"
        pos="absolute"
        zIndex={-1}
      />
    </Box>
  );
});

if (__DEV__) {
  CTABlock.displayName = "CTABlock";
}

const TornadoBackground: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme = "blue", ...rest }) => {
    // Light
    const color1Light = useToken("colors", `whiteAlpha.900`);
    const color2Light = useToken("colors", `${colorScheme}.50`);
    // Dark
    const color1Dark = useToken("colors", `${colorScheme}.900`);
    const color2Dark = useToken("colors", `${colorScheme}.800`);

    const color1 = useColorModeValue(color1Light, color1Dark);
    const color2 = useColorModeValue(color2Light, color2Dark);

    return (
      <chakra.svg width="2000" height="1500" viewBox="0 0 2000 1500" {...rest}>
        <rect fill={color2} width="2000" height="1500" />
        <defs>
          <radialGradient id="a" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="750"
            x2="1550"
            y2="750"
          >
            <stop offset="0" stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
          <path
            id="s"
            fill="url(#b)"
            d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
          />
          <g id="g">
            <use href="#s" transform="scale(0.12) rotate(60)" />
            <use href="#s" transform="scale(0.2) rotate(10)" />
            <use href="#s" transform="scale(0.25) rotate(40)" />
            <use href="#s" transform="scale(0.3) rotate(-20)" />
            <use href="#s" transform="scale(0.4) rotate(-30)" />
            <use href="#s" transform="scale(0.5) rotate(20)" />
            <use href="#s" transform="scale(0.6) rotate(60)" />
            <use href="#s" transform="scale(0.7) rotate(10)" />
            <use href="#s" transform="scale(0.835) rotate(-40)" />
            <use href="#s" transform="scale(0.9) rotate(40)" />
            <use href="#s" transform="scale(1.05) rotate(25)" />
            <use href="#s" transform="scale(1.2) rotate(8)" />
            <use href="#s" transform="scale(1.333) rotate(-60)" />
            <use href="#s" transform="scale(1.45) rotate(-30)" />
            <use href="#s" transform="scale(1.6) rotate(10)" />
          </g>
        </defs>
        <g transform="">
          <g transform="">
            <circle fill="url(#a)" r="3000" />
            <g opacity="0.5">
              <circle fill="url(#a)" r="2000" />
              <circle fill="url(#a)" r="1800" />
              <circle fill="url(#a)" r="1700" />
              <circle fill="url(#a)" r="1651" />
              <circle fill="url(#a)" r="1450" />
              <circle fill="url(#a)" r="1250" />
              <circle fill="url(#a)" r="1175" />
              <circle fill="url(#a)" r="900" />
              <circle fill="url(#a)" r="750" />
              <circle fill="url(#a)" r="500" />
              <circle fill="url(#a)" r="380" />
              <circle fill="url(#a)" r="250" />
            </g>
            <g transform="rotate(-25.2 0 0)">
              <use href="#g" transform="rotate(10)" />
              <use href="#g" transform="rotate(120)" />
              <use href="#g" transform="rotate(240)" />
            </g>
            <circle fillOpacity="0.07" fill="url(#a)" r="3000" />
          </g>
        </g>
      </chakra.svg>
    );
  },
);

if (__DEV__) {
  TornadoBackground.displayName = "TornadoBackground";
}

export default CustomerStoryOverviewPage;
