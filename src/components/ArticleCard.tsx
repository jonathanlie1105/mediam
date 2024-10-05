import {
  Text,
  Card,
  CardHeader,
  CardBody,
  useStyleConfig,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { Article } from "../types";

type ArticleCardProps = {
  article: Article;
};

function ArticleCard({ article }: ArticleCardProps) {
  const cardStyles = useStyleConfig("Card", { variant: "outline" });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`); // Navigate to the article details page
  };
  return (
    <Card
      sx={cardStyles}
      bg="brand.800"
      borderColor="brand.700"
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={4}
      _hover={{ cursor: "pointer", scale: 1.5, transition: "all 0.3s ease" }}
      onClick={handleClick}
    >
      <CardHeader>
        <Text fontSize="xl" fontFamily="heading" color="brand.accent">
          {article.title}
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontSize="md" fontFamily="body" color="brand.secondaryText">
          {article.slug}
        </Text>
      </CardBody>
    </Card>
  );
}

export default ArticleCard;
