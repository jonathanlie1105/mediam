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
  Flex,
  IconButton,
  Icon,
  Input,
  Select,
} from "@chakra-ui/react";
import { memo } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch, FaTimes } from "react-icons/fa";

import { Article, Meta } from "../types";

type Props = {
  articles: Article[];
  meta: Meta | null;
  page: number;
  setSearch: (search: string) => void;
  searchMode: boolean;
  toggleSearch: () => void;
  handleClick: (id: number) => void;
  handleClickLimit: (limit: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};

function ArticlesDataView({
  articles,
  meta,
  page,
  setSearch,
  searchMode,
  toggleSearch,
  handleClick,
  handleClickLimit,
  nextPage,
  prevPage,
}: Props) {
  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="brand.backgroundDark"
      color="brand.textLight"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Heading fontSize="xx-large" mb={4} color="brand.accentGold">
          Articles List
        </Heading>
        <HStack spacing={2}>
          {searchMode && (
            <Input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              width="auto"
            />
          )}
          <IconButton
            onClick={toggleSearch}
            aria-label="search"
            icon={searchMode ? <Icon as={FaTimes} /> : <Icon as={FaSearch} />}
            colorScheme="yellow"
          />
        </HStack>
      </Flex>
      <Box minH="50vh" overflowY="auto">
        {/* Set fixed height for the table */}
        <Table variant="simple" colorScheme="yellow">
          <Thead>
            <Tr>
              <Th color="brand.accentGold">No</Th>
              <Th color="brand.accentGold">ID</Th>
              <Th color="brand.accentGold">Title</Th>
              <Th color="brand.accentGold">Slug</Th>
            </Tr>
          </Thead>
          <Tbody>
            {articles.map((article, index) => (
              <Tr
                key={article.id}
                onClick={() => handleClick(article.id)}
                _hover={{ bg: "brand.backgroundLight", cursor: "pointer" }}
              >
                <Td>{index + page}</Td>
                <Td>{article.id}</Td>
                <Td>{article.title}</Td>
                <Td>{article.slug}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <HStack spacing="3" mt={4} justify="center" alignContent="center">
        <Flex flex={2} />
        <Flex flex={2} gap={2}>
          <Button
            onClick={prevPage}
            isDisabled={page === 1}
            colorScheme="yellow"
          >
            <Icon as={FaArrowLeft} />
          </Button>
          <Button
            onClick={nextPage}
            isDisabled={!meta?.has_next_page}
            colorScheme="yellow"
          >
            <Icon as={FaArrowRight} />
          </Button>
        </Flex>
        <Flex flex={1}>
          <Select
            placeholder="Select option"
            colorScheme="yellow"
            defaultValue={3}
            onChange={(e) => handleClickLimit(parseInt(e.target.value))}
          >
            {[3, 5, 10].map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </Select>
        </Flex>
      </HStack>
    </Box>
  );
}

export default memo(ArticlesDataView);
