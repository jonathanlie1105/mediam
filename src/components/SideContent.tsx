import {
  VStack,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { memo } from "react";

import { useCategories } from "../hooks/CategoriesProvider";

function SideContent() {
  const { categories } = useCategories();

  return (
    <VStack align="stretch">
      <Heading fontSize="xx-large" color="brand.accentCoral" mb={2}>
        Categories
      </Heading>
      <Accordion allowToggle={true} allowMultiple={true}>
        {categories.map((category) => (
          <AccordionItem key={category.id}>
            <Heading fontSize={"large"} color="brand.accentCoral" mb={2}>
              <AccordionButton
                bg={"brand.backgroundDark"}
                _hover={{ bg: "brand.accentGold" }}
              >
                <Text fontSize="large" fontWeight="bold">
                  {category.name}
                </Text>
              </AccordionButton>
            </Heading>
            <AccordionPanel>
              <List>
                {category.articles.map((article) => (
                  <ListItem key={article.id}>
                    <Link href={`/article/${article.id}`}>{article.slug}</Link>
                  </ListItem>
                ))}
              </List>
              <Link color="brand.textMuted" colorScheme="yellow">
                See more...
              </Link>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
}

export default memo(SideContent);
