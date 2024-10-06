import { Grid, Spinner, Box, Heading, Button, Center } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";
import { getArticlesByCategory } from "../utils";
import { Article, Meta } from "../types";

const ArticlesByCategory = () => {
  const { id, title } = useParams();
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await getArticlesByCategory(Number(id));
        const result = await response.json();
        setArticles(result.data.data);
        setMeta(result.data.metadata);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => {
      setArticles([]); // Clean up the articles on component unmount
      setLoading(false);
    };
  }, [id]);

  const loadMore = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getArticlesByCategory(
        Number(id),
        (meta?.page || 0) + 5
      );
      const result = await response.json();
      setArticles((prev) => [...prev, ...result.data.data]);
      setMeta(result.data.metadata);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  }, [id, meta?.page]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={4} gap={6}>
      <Heading fontSize="xx-large" mb={4} color="brand.accentGold">
        Articles of {title}
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mb={20}
      >
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Grid>

      <Center>
        <Button onClick={loadMore} disabled={!meta?.has_next_page}>
          Load More
        </Button>
      </Center>
    </Box>
  );
};

export default memo(ArticlesByCategory);
