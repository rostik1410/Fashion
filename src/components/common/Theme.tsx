import { createBox, createText, createTheme } from "@shopify/restyle";

const palette = {
  lightGreen: "#2CB9B0",
  darkBlueTitle: "#0C0D34",
  darkBlueBody: "rgba(12, 13, 52, 0.7)",
  grey: "rgba(12, 13, 52, 0.05)",
  lightGrey: "#F4F0EF",
  white: "white",
};

const theme = createTheme({
  colors: {
    primary: palette.lightGreen,
    title: palette.darkBlueTitle,
    text: palette.darkBlueBody,
    white: palette.white,
    grey: palette.grey,
    "slide.grey": palette.lightGrey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 20,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Semibold",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
