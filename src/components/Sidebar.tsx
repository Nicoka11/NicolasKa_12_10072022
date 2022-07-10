import {
  Flex,
  IconButton,
  IconButtonProps,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  MdDirectionsBike,
  MdFitnessCenter,
  MdPool,
  MdSelfImprovement,
} from "react-icons/md";

const IconStyles: Omit<IconButtonProps, "aria-label"> = {
  size: "lg",
  bg: "white",
};

const SideBar = () => {
  return (
    <Flex
      height="full"
      bg="deepblack.900"
      position="fixed"
      w="32"
      top="0"
      left="0"
      bottom="0"
      justifyContent="space-between"
      align="center"
      direction="column"
      paddingY="8"
      paddingX="8"
      zIndex="-1"
    >
      <Box />
      <VStack spacing="6">
        <IconButton
          {...IconStyles}
          aria-label="yoga page"
          icon={<MdSelfImprovement color="red" size="1.7rem" />}
        />
        <IconButton
          {...IconStyles}
          aria-label="swimming page"
          icon={<MdPool color="red" size="1.7rem" />}
        />
        <IconButton
          {...IconStyles}
          aria-label="biking page"
          icon={<MdDirectionsBike color="red" size="1.7rem" />}
        />
        <IconButton
          {...IconStyles}
          aria-label="fitness page"
          icon={<MdFitnessCenter color="red" size="1.7rem" />}
        />
      </VStack>
      <Text
        width="fit-content"
        color="white"
        sx={{ writingMode: "vertical-lr" }}
        height="fit-content"
      >
        Copyright, SportSee 2020
      </Text>
    </Flex>
  );
};

export default SideBar;
