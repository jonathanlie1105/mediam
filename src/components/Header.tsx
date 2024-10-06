import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { memo } from "react";

function Header() {
  return (
    <Box
      as="nav"
      bg="brand.backgroundDark"
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
        <Text
          as={Link}
          href="/"
          fontSize="extraLarge"
          color="brand.accentGold"
          fontWeight="bold"
        >
          Mediam
        </Text>
        <Flex gap={6}>
          <Link
            href="/"
            style={{ color: "brand.accentGold" }}
            _hover={{ textDecoration: "underline" }}
          >
            Home
          </Link>
          <Link
            href="/articles"
            style={{ color: "brand.accentGold" }}
            _hover={{ textDecoration: "underline" }}
          >
            Articles
          </Link>
          <Link
            href="/about"
            style={{ color: "brand.accentGold" }}
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default memo(Header);
