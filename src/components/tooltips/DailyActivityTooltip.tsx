import { styled } from "@src/styles/system-styled";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: string }[];
}

const Box = styled("div", {
  padding: "$4",
  backgroundColor: "#E60000",
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Box>
        <p>{`${payload[0]?.value}kg`}</p>
        <p>{`${payload[1]?.value}kCal`}</p>
      </Box>
    );
  }

  return null;
};

export default CustomTooltip;
