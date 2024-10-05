import { Box, Heading, Text, Badge, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import { Article } from "../types";

type Props = {
  article: Article;
};

function ArticleDetail({ article }: Props) {
  const navigate = useNavigate();

  return (
    <Box p={6} bg="brand.700" borderRadius="lg" color="brand.text">
      {/* Back Button */}
      <IconButton
        aria-label="Go back"
        icon={<ArrowBackIcon />}
        onClick={() => navigate(-1)} // Navigate back
        mb={4}
        colorScheme="teal" // You can customize this
        variant="outline" // You can also use "solid" or "ghost"
      />

      {/* Article Title */}
      <Heading fontSize="3xl" mb={4} color="brand.accent">
        {article.title}
      </Heading>

      {/* Article Metadata */}
      <Flex mb={4}>
        {article.categories?.map((category) => (
          <Badge key={category.id} colorScheme="teal" mr={2}>
            {category.name}
          </Badge>
        ))}
        <Text color="brand.secondaryText">
          {new Date(article.created_at).toLocaleDateString()}{" "}
          {/* Using the created_at field */}
        </Text>
      </Flex>

      {/* Render HTML content */}
      <Text
        fontSize="lg"
        lineHeight="1.6"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </Box>
  );
}

export default ArticleDetail;
