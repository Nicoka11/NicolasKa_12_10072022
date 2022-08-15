import { styled } from "@src/styles/system-styled";

const WrapperBlock = (color: string) =>
  styled("div", {
    height: "$60",
    width: "$60",
    backgroundColor: color,
    borderRadius: "$md",
    padding: "$2",
    paddingBottom: "$5",
    "@desktop": {
      height: "$72",
      width: "$72",
    },
  });

export default WrapperBlock;
