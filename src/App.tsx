import { Box, ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
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
          <Box flex={1} maxHeight="100vh" width="100vw" pt={20} pb={24} px={4}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
              <Route path="/article/:id" element={<ArticleDetails />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ChakraProvider>
    </StrictMode>
  );
}

export default App;
