import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

import ProfileImg from "../assets/profile.jpeg"; // Ensure the correct path to your image

function About() {
  return (
    <Box p={6} bg="brand.800" borderRadius="lg" color="brand.text">
      <Heading fontSize="2xl" mb={4} color="brand.accent">
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
          {/* Image Component */}
          <Image
            src={ProfileImg} // Use the imported image variable
            alt="Profile"
            borderRadius="full"
            boxSize="300px"
            objectFit="cover"
            mb={4}
          />
          <Text textAlign="center">
            Visit my website to learn more about me!
          </Text>
          <Button
            onClick={() =>
              window.open("https://jonathanlie1105.github.io/", "_blank")
            }
            colorScheme="brand"
            variant="outline"
            color="brand.text"
            borderColor="brand.accent"
            _hover={{ bg: "brand.accent", color: "brand.900" }}
          >
            See Jonathan's Websites
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default About;
