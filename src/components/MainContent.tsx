import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import Slider from "react-slick";

import { useArticles } from "../hooks/ArticlesProvider";

import ArticleCard from "./ArticleCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
};

function MainContent() {
  const { articles, setLimit } = useArticles();

  useEffect(() => {
    setLimit(12);
    return () => {
      setLimit(3);
    };
  });

  return (
    <Box>
      <Box mb={8}>
        <Heading fontSize="xx-large" mb={4} color="brand.accentGold">
          Top Articles
        </Heading>

        <Center>
          <Box w={{ base: "100%", md: "50%" }}>
            <Slider {...settings}>
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </Slider>
          </Box>
        </Center>
      </Box>

      <Box>
        <Heading fontSize="xx-large" mb={4} color="brand.accentGold">
          Latest Articles
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default memo(MainContent);
