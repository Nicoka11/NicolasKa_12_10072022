import { styled } from "@src/styles/system-styled";

const WrapperBlock = (color: string) =>
  styled("div", {
    height: "$72",
    width: "$72",
    backgroundColor: color,
    borderRadius: "$md",
    padding: "$2",
    paddingBottom: "$5",
  });

export default WrapperBlock;
