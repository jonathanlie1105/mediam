import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="nav"
      bg="brand.700"
      py={4}
      px={8}
      boxShadow="md"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="2xl" color="brand.accent" fontWeight="bold">
          HARDArticle
        </Text>
        <Flex gap={6}>
          <Link to="/" style={{ color: "brand.accent" }}>
            Home
          </Link>
          <Link to="/articles" style={{ color: "brand.accent" }}>
            Articles
          </Link>
          <Link to="/about" style={{ color: "brand.accent" }}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
