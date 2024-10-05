import { Flex } from "@chakra-ui/react";
import MainContent from "../components/MainContent";
import SideContent from "../components/SideContent";
import { ArticlesProvider } from "../hooks/ArticlesProvider";
import { CategoryProvider } from "../hooks/CategoriesProvider";

function Home() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Column on mobile, row on medium and larger
      gap={4} // Space between main and side content
      bg="brand.900"
    >
      {/* Main Content */}
      <Flex
        flex={2}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg="brand.800" // Slightly different background for contrast
        color="brand.text"
        direction="column"
        overflowY="auto" // Enable scrolling for long content
      >
        <ArticlesProvider>
          <MainContent />
        </ArticlesProvider>
      </Flex>

      {/* Side Content */}
      <Flex
        flex={1}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg="brand.800"
        color="brand.text"
        direction="column"
        overflowY="auto" // Enable scrolling for long content
      >
        <CategoryProvider>
          <SideContent />
        </CategoryProvider>
      </Flex>
    </Flex>
  );
}

export default Home;
