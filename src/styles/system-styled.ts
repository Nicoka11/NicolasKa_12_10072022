import { createStitches } from "@stitches/react";

const space = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  full: "100%",
};
const colors = {
  deepblack50: "#f0f0f5",
  deepblack100: "#d1d1db",
  deepblack200: "#b4b4c5",
  deepblack300: "#9595b0",
  deepblack400: "#77769a",
  deepblack500: "#5e5d81",
  deepblack600: "#484864",
  deepblack700: "#343447",
  deepblack800: "#201f2a",
  deepblack900: "#020203",
};

export const { styled, css } = createStitches({
  theme: {
    space,
    sizes: space,
    colors: colors,
  },
});