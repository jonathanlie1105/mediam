import { Box, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
      const response = await getArticle(Number(id));
      const result = await response.json();
      setArticle(result.data);
      setLoading(false);
    };
    fetchArticle();

    return () => {
      setArticle(null);
      setLoading(false);
    };
  }, [id]);

  if (!article) {
    return (
      <Box p={6} bg="brand.800" color="brand.text">
        <Text fontSize="xl">Article not found.</Text>
      </Box>
    );
  }

  return (
    <Box p={6} bg="brand.900" minHeight="100vh">
      {loading ? <Spinner /> : <ArticleDetail article={article} />}
    </Box>
  );
}

export default ArticleDetails;
