import { Box, Grid, Heading } from "@chakra-ui/react";

import { useArticles } from "../hooks/ArticlesProvider";

import ArticleCard from "./ArticleCard";

function MainContent() {
  const { articles } = useArticles();

  return (
    <Box>
      {/* Carousel for Top 3 Articles */}
      <Box mb={8}>
        <Heading size="lg" mb={4} color="brand.accent">
          Top 3 Articles
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Grid>
      </Box>

      {/* Grid of Articles */}
      <Box>
        <Heading size="lg" mb={4} color="brand.accent">
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

export default MainContent;
