import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { memo } from "react";

import ProfileImg from "../assets/profile.jpeg";

function About() {
  return (
    <Box
      p={6}
      bg="brand.backgroundDark"
      borderRadius="lg"
      color="brand.textLight"
    >
      <Heading fontSize="xx-large" mb={4} color="brand.accentGold">
        About Me!
      </Heading>
      <Center>
        <Flex
          direction="column"
          gap={6}
          alignItems="center"
          justifyContent="center"
          height="65vh"
        >
          <Image
            src={ProfileImg}
            alt="Profile"
            borderRadius="full"
            boxSize="300px"
            objectFit="cover"
            mb={4}
          />
          <Text textAlign="center" color="brand.textMuted">
            Visit my website to learn more about me!
          </Text>
          <Button
            onClick={() =>
              window.open("https://jonathanlie1105.github.io/", "_blank")
            }
            colorScheme="yellow"
            variant="outline"
          >
            See Jonathan's Websites
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default memo(About);
