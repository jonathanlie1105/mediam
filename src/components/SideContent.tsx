import { Box, VStack, Text, Heading } from "@chakra-ui/react";

import { useCategories } from "../hooks/CategoriesProvider";

function SideContent() {
  const { categories } = useCategories();

  return (
    <VStack spacing={4} align="stretch">
      <Heading size="lg" color="brand.accent" mb={4}>
        Top 3 Categories
      </Heading>
      {categories.map((category) => (
        <Box
          key={category.id}
          bg="brand.700" // Darker background for better contrast
          p={4} // Consistent padding
          borderRadius="md"
          boxShadow="md"
          color="brand.text" // Light text color for readability
          textAlign="center"
          transition="transform 0.2s, box-shadow 0.2s" // Added transition for hover effect
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            bg: "brand.600", // Change background on hover for visual feedback
          }}
        >
          <Text fontSize="lg" fontWeight="bold">
            {category.name}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default SideContent;
