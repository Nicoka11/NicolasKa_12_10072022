import { styled } from "@src/styles/system-styled";

export const TopFlex = styled("div", {
  display: "flex",
  gap: "$8",
  flexDirection: "column",
  marginTop: "$16",
  marginBottom: "$16",
  "@desktop": {
    height: "$44rem",
    flexDirection: "row",
  },
});

export const Stack = styled("div", {
  display: "flex",
  flexDirection: "row",
  order: "1",
  gap: "$8",
  "@desktop": {
    justifyContent: "space-between",
    flexDirection: "column",
    order: "2",
  },
});

export const LeftPart = styled("div", {
  width: "54rem",
  height: "100%",
  display: "flex",
  order: "2",
  flexDirection: "column",
  gap: "$8",
  "@desktop": {
    order: "1",
  },
});

export const RowStack = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "$8",
});

export const NoConnectionBlock = styled("section", {
  width: "$full",
  height: "50vh",
  gap: "$6",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
