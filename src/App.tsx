import { Box, ChakraProvider } from "@chakra-ui/react";
import { memo, StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import theme from "./theme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import About from "./pages/About";

function App() {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Router>
          <Header />
          <Box flex={1} maxHeight="80vh" width="100vw" pt={20} px={4}>
            {/* Added background for better visibility */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
              <Route path="/article/:id" element={<ArticleDetails />} />
            </Routes>
            <Box minH={24} />
          </Box>
          <Footer />
        </Router>
      </ChakraProvider>
    </StrictMode>
  );
}

export default memo(App);
