import { Flex } from "@chakra-ui/react";
import { memo } from "react";

import MainContent from "../components/MainContent";
import SideContent from "../components/SideContent";
import { ArticlesProvider } from "../hooks/ArticlesProvider";
import { CategoryProvider } from "../hooks/CategoriesProvider";

function Home() {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap={4}>
      <Container flex={4}>
        <ArticlesProvider>
          <MainContent />
        </ArticlesProvider>
      </Container>

      <Container flex={1}>
        <CategoryProvider>
          <SideContent />
        </CategoryProvider>
      </Container>
    </Flex>
  );
}

type ContainerProps = {
  flex: number;
  children: React.ReactNode;
};

function Container({ children, flex }: ContainerProps) {
  return (
    <Flex
      flex={flex}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      bg="brand.backgroundDark"
      color="brand.textLight"
      direction="column"
      overflowY="auto"
    >
      {children}
    </Flex>
  );
}

export default memo(Home);
