import { ImQuotesLeft } from "@react-icons";

import { Icon, Box, Container, Center, Flex, Heading } from "@chakra-ui/react";

import { SECTION_ID } from "@definitions/navigation/main";

import CarouselDefault from "@components/carousel/carousel-default";
import { RatingDefault } from "@components/rating";
import { TestimonialBlurredBackdrop } from "@components/testimonials/testimonial-blurred-backdrop";

import BackgroundOne from "@assets/testiomial-bg-1.svg";

const TESTIMONY_LIST = [
  {
    name: "James",
    position: "Executive Director",
    content: `I see SBX as the perfect ally in software development. From the beginning idea to the final product we’ve felt completely guided and supported. We are excited to keep on working in future projects.`,
  },
  {
    name: "Miguel A.",
    position: "Project Manager",
    content: `We developed a great partnership with SBX for the past two years and their dedication is evident in the upgrade of our company service.`,
  },
];

const TestimonyCarousel: React.FC<{
  testimony: { name: string; position: string; content: string }[];
}> = ({ testimony }): JSX.Element => {
  return (
    <Box w="full" my={8}>
      <Center display="block" w="full" mb={10}>
        <CarouselDefault
          settings={{
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            touchThreshold: 50,
            cssEase: "ease-in-out",
          }}
        >
          {testimony.map((t, i) => {
            return (
              <Box key={i}>
                <Flex w="full" px="4" py="20" justify="center">
                  <TestimonialBlurredBackdrop
                    key={i}
                    // avatarImage={AvatarImage}
                    name={t.name}
                    body={t.content}
                    occupation={t.position}
                    backgroundImage={BackgroundOne}
                    icon={
                      <Icon as={ImQuotesLeft} color="pink.500" w={10} h={10} />
                    }
                    rating={
                      <RatingDefault
                        color="pink"
                        readonly
                        fontSize="xs"
                        initialRating={5}
                      />
                    }
                  />
                </Flex>
              </Box>
            );
          })}
        </CarouselDefault>
      </Center>
    </Box>
  );
};

const TestimonySection: React.FC = (): JSX.Element => {
  return (
    <Container maxW="container.xl" id={SECTION_ID.CLIENTS_SECTION} py="16">
      <Heading fontSize="40px">What our clients have to say</Heading>

      <TestimonyCarousel testimony={TESTIMONY_LIST} />
    </Container>
  );
};

export default TestimonySection;
