import { Box, Button, Heading, Text, Center } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center height="100vh" flexDirection="column">
      <Box textAlign="center" padding="4">
        <Heading as="h1" size="2xl" mb="4">
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg" mb="4">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Button colorScheme="yellow" as={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Center>
  );
};

export default memo(NotFound);
