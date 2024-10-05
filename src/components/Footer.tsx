import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <Box
      bg="brand.700"
      color="brand.text"
      py={6}
      position="fixed"
      bottom={0}
      width="100%"
      boxShadow="md" // Optional: Add a subtle shadow
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} HARDArticle. All rights reserved.
        </Text>

        <Flex gap={4} mt={{ base: 4, md: 0 }}>
          <Link
            href="/about"
            color="brand.accent" // Use the accent color for links
            _hover={{ textDecoration: "underline" }}
          >
            About Me
          </Link>
          <Link
            href="/articles"
            color="brand.accent"
            _hover={{ textDecoration: "underline" }}
          >
            Articles
          </Link>
        </Flex>

        {/* Social Media Icons */}
        <Flex gap={4} mt={{ base: 4, md: 0 }}>
          <Link href="https://github.com/jonathanlie1105" isExternal>
            <Icon as={FaGithub} w={6} h={6} color="brand.accent" />
          </Link>
          <Link href="https://wa.me/6282298721226" isExternal>
            <Icon as={FaWhatsapp} w={6} h={6} color="brand.accent" />
          </Link>
          <Link href="https://linkedin.com/in/jonathanlie1105" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} color="brand.accent" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
