import { styled } from "@src/styles/system-styled";

const Container = styled("div", {
  maxWidth: "78rem",
  margin: "0 auto",
  marginTop: "$4",
  padding: "0 $6",
  color: "Black",
  "@desktop": {
    marginTop: "$16",
  },
});

export default Container;
