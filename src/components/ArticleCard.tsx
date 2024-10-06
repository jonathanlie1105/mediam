import { Text, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Article } from "../types";

type ArticleCardProps = {
  article: Article;
};

function ArticleCard({ article }: ArticleCardProps) {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/article/${article.id}`);
  }, [article.id, navigate]);

  return (
    <Card
      bg="brand.backgroundMedium"
      transition="transform 0.2s, box-shadow 0.2s"
      borderRadius="md"
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)",
        boxShadow: "lg",
        bg: "brand.backgroundLight",
      }}
      onClick={handleClick}
    >
      <CardHeader>
        <Text
          fontSize="extraLarge"
          fontFamily="typography.headingFont"
          color="brand.accentGold"
        >
          {article.title}
        </Text>
      </CardHeader>
      <CardBody>
        <Text
          fontSize="medium"
          fontFamily="typography.bodyFont"
          color="brand.textMuted"
        >
          {article.id} - {article.slug}
        </Text>
      </CardBody>
    </Card>
  );
}

export default memo(ArticleCard);
