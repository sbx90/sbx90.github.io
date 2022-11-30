import { Container, Heading } from "@chakra-ui/react";

import ArticleSlideshow from "@components/article/article-slideshow";

import img1 from "@assets/images/background-1.jpg";
import img2 from "@assets/images/background-2.jpg";
import img3 from "@assets/images/background-3.jpg";

const PorfolioSection: React.FC = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Heading fontSize="40px">Our Latest Projects</Heading>

      <ArticleSlideshow
        mt="4"
        rounded="12"
        items={[
          { title: "Project 1", image: img1 },
          { title: "Project 2", image: img2 },
          { title: "Project 3", image: img3 },
        ]}
      />
    </Container>
  );
};

export default PorfolioSection;
