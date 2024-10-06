import { Box, Heading, Text, Badge, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Article } from "../types";

type Props = {
  article: Article;
};

function ArticleDetail({ article }: Props) {
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton
        aria-label="Go back"
        icon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        mb={4}
        colorScheme="yellow"
        variant="outline"
      />

      <Heading fontSize="threeXLarge" mb={4} color="brand.accentGold">
        {article.title}
      </Heading>

      <Flex mb={4}>
        {article.categories?.map((category) => (
          <Badge key={category.id} colorScheme="yellow" mr={2}>
            {category.name}
          </Badge>
        ))}
        <Text color="brand.textMuted">
          {new Date(article.created_at).toLocaleDateString()}
        </Text>
      </Flex>

      <Flex pl={10}>
        <Text
          fontSize="lg"
          lineHeight="1.6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </Flex>
    </Box>
  );
}

export default memo(ArticleDetail);
