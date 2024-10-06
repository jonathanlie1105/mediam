import { Box, Text, Spinner, Center } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleDetail from "../components/ArticleDetail";
import { getArticle } from "../utils";

function ArticleDetails() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await getArticle(Number(id));
        const result = await response.json();
        setArticle(result.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();

    return () => {
      setArticle(null);
      setLoading(false);
    };
  }, [id]);

  if (!article) {
    return (
      <Box p={6} bg="brand.backgroundDark" color="brand.textLight">
        <Text fontSize="xl" textAlign="center">
          Article not found.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      p={6}
      bg="brand.backgroundDark"
      borderRadius="lg"
      color="brand.textLight"
      minHeight="100vh"
    >
      {loading ? (
        <Center>
          <Spinner color="brand.accentGold" />
        </Center>
      ) : (
        <ArticleDetail article={article} />
      )}
    </Box>
  );
}

export default memo(ArticleDetails);
