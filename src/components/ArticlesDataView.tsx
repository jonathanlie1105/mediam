import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useArticles } from "../hooks/ArticlesProvider";

const ArticlesDataView = () => {
  const navigate = useNavigate();

  const { articles, meta, page, setPage, limit } = useArticles();

  // Pagination handlers
  const nextPage = () => {
    if (meta?.has_next_page) {
      setPage(page + limit);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - limit);
    }
  };

  const handleClick = (id: number) => {
    navigate(`/article/${id}`); // Navigate to the article details page
  };

  return (
    <Box p={6} borderRadius="lg" bg="brand.800" color="brand.text">
      <Heading size="lg" mb={4} color="brand.accent">
        Articles List
      </Heading>
      <Box minH="50vh" overflowY="auto">
        {/* Set fixed height for the table */}
        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th color="brand.accent">No</Th>
              <Th color="brand.accent">ID</Th>
              <Th color="brand.accent">Title</Th>
              <Th color="brand.accent">Slug</Th>
            </Tr>
          </Thead>
          <Tbody>
            {articles.map((article, index) => (
              <Tr key={article.id} onClick={() => handleClick(article.id)}>
                <Td>{index + page}</Td>
                <Td>{article.id}</Td>
                <Td>{article.title}</Td>
                <Td>{article.slug}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Pagination Controls */}
      <HStack spacing={4} mt={4} justify="center">
        <Button onClick={prevPage} isDisabled={page === 1} colorScheme="teal">
          Previous
        </Button>
        <Button
          onClick={nextPage}
          isDisabled={!meta?.has_next_page}
          colorScheme="teal"
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default ArticlesDataView;
