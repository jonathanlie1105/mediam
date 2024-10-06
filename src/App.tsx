import { Box, ChakraProvider } from "@chakra-ui/react";
import { memo, StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import theme from "./theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import ArticlesByCategories from "./pages/ArticlesByCategories";
import ArticleDetails from "./pages/ArticleDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Box flex={1} maxHeight="80vh" width="100vw" pt={20} px={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
              <Route path="/article/:id" element={<ArticleDetails />} />
              <Route
                path="/category/:id/:title"
                element={<ArticlesByCategories />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Box minH={{ base: 40, md: 24 }} />
          </Box>
          <Footer />
        </Router>
      </ChakraProvider>
    </StrictMode>
  );
}

export default memo(App);
