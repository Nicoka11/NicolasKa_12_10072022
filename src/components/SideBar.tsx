import { styled } from "@src/styles/system-styled";
import IconButton from "./IconButton";
import yoga from "@src/assets/icons/yoga.svg";
import swim from "@src/assets/icons/swim.svg";
import bike from "@src/assets/icons/bike.svg";
import dumbbell from "@src/assets/icons/dumbbell.svg";

const Box = styled("aside", {
  display: "flex",
  height: "$full",
  backgroundColor: "$deepblack900",
  position: "fixed",
  padding: "$8",
  width: "$32",
  top: "0",
  left: "0",
  bottom: "0",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  boxSizing: "border-box",
  zIndex: "-1",
});

const VerticalText = styled("p", {
  width: "fit-content",
  height: "fit-content",
  color: "White",
  writingMode: "vertical-lr",
});

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

const SideBar = () => {
  return (
    <Box>
      <div />
      <Stack>
        <IconButton href="#" icon={{ src: yoga, alt: "yoga icon" }} />
        <IconButton href="#" icon={{ src: swim, alt: "swim icon" }} />
        <IconButton href="#" icon={{ src: bike, alt: "bikee icon" }} />
        <IconButton href="#" icon={{ src: dumbbell, alt: "dumbbell icon" }} />
      </Stack>
      <VerticalText>Copyright, SportSee 2020</VerticalText>
    </Box>
  );
};

export default SideBar;
