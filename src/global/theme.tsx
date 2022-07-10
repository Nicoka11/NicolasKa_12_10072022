import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    deepblack: {
      50: "#f0f0f5",
      100: "#d1d1db",
      200: "#b4b4c5",
      300: "#9595b0",
      400: "#77769a",
      500: "#5e5d81",
      600: "#484864",
      700: "#343447",
      800: "#201f2a",
      900: "#020203",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Roboto', sans-serif",
      },
    },
  },
});

export default theme;
