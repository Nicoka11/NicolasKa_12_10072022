import { styled } from "@src/styles/system-styled";
import { CustomTooltipProps } from "@src/types/utils";

const Box = styled("div", {
  backgroundColor: "White",
  padding: "$3",
});

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Box>
        <p>{`${payload[0]?.value}min`}</p>
      </Box>
    );
  }
  return null;
};

export default CustomTooltip;
