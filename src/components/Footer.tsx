import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { memo } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <Box
      bg="brand.backgroundDark"
      color="brand.textLight"
      py={6}
      position="fixed"
      bottom={0}
      width="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text fontSize="small">
          © {new Date().getFullYear()} HARDArticle. All rights reserved.
        </Text>

        <Flex gap={4} mt={{ base: 4, md: 0 }}>
          <Link href="https://github.com/jonathanlie1105" isExternal>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link href="https://wa.me/6282298721226" isExternal>
            <Icon as={FaWhatsapp} w={6} h={6} />
          </Link>
          <Link href="https://linkedin.com/in/jonathanlie1105" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </Flex>

        <Text fontSize="small">Made with ❤️ by Jonathan</Text>
      </Flex>
    </Box>
  );
}

export default memo(Footer);
