import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    backgroundDarkest: "#0a0a0a",
    backgroundDark: "#1b1b1b",
    backgroundMedium: "#2e2e2e",
    backgroundLight: "#4a4a4a",
    backgroundLighter: "#6e6e6e",
    backgroundLightest: "#8e8e8e",
    accentGold: "#f6c65e",
    accentCoral: "#ff6f61",
    accentBlue: "#4a90e2",
    softYellow: "#f8fd91",
    lightPurple: "#cb9bfa",
    mintGreen: "#a3d69c",
    vividRed: "#ff4d4d",
    textLight: "#fefae0",
    textMuted: "#d9c99e",
    textSecondary: "#b0a89f",
    textDarkest: "#0a0a0a",
  },
};

const typography = {
  headingFont: "'Poppins', sans-serif",
  bodyFont: "'Inter', sans-serif",
};

const fontSizes = {
  extraSmall: "12px",
  small: "14px",
  medium: "16px",
  large: "18px",
  extraLarge: "20px",
  twoXLarge: "24px",
  threeXLarge: "28px",
  fourXLarge: "32px",
  fiveXLarge: "40px",
};

const spacing = {
  none: "0",
  pixel: "1px",
  tiny: "4px",
  extraSmall: "6px",
  small: "8px",
  medium: "12px",
  large: "16px",
  extraLarge: "20px",
  twoXLarge: "24px",
  threeXLarge: "32px",
  fourXLarge: "40px",
  fiveXLarge: "48px",
  sixXLarge: "64px",
  sevenXLarge: "80px",
  eightXLarge: "96px",
};

const theme = extendTheme({
  colors,
  typography,
  fontSizes,
  spacing,
  styles: {
    global: {
      body: {
        bg: "brand.backgroundDarkest",
        color: "brand.textLight",
        lineHeight: "1.6",
        pb: "60px",
      },
      a: {
        color: "brand.accentGold",
        _hover: {
          textDecoration: "underline",
          color: "brand.textMuted",
        },
      },
      p: {
        color: "brand.textMuted",
      },
      button: {
        bg: "brand.accentGold",
        color: "brand.backgroundDarkest",
        _hover: {
          bg: "#f5b83f",
          color: "brand.backgroundDark",
        },
      },
    },
  },
});

export default theme;
