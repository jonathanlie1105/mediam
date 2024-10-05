import { extendTheme } from "@chakra-ui/react";

// Custom colors for a yellowish aesthetic theme
const colors = {
  brand: {
    900: "#1b1b1b", // Dark background
    800: "#2e2e2e", // Slightly lighter for elements
    700: "#3e3e3e", // Border and contrast elements
    accent: "#f6c65e", // Bright accent color for highlights (links, buttons)
    text: "#fefae0", // Light text color (off-white)
    secondaryText: "#d9c99e", // Muted text color (soft beige)
  },
};

// Custom typography for modern font sizes
const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Inter', sans-serif",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "32px",
  "5xl": "40px",
};

// Custom spacing for modern layouts
const space = {
  px: "1px",
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
};

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  space,
  styles: {
    global: {
      body: {
        bg: "brand.900",
        color: "brand.text",
        lineHeight: "1.6",
      },
      a: {
        color: "brand.accent",
        _hover: {
          textDecoration: "underline",
          color: "brand.secondaryText", // Change color on hover for better contrast
        },
      },
      p: {
        color: "brand.secondaryText",
      },
      button: {
        bg: "brand.accent",
        color: "brand.900",
        _hover: {
          bg: "#f5b83f", // Slightly darker accent on hover
        },
      },
    },
  },
});

export default theme;
