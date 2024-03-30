import {
  HStack,
  Icon,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { IoInvertMode } from "react-icons/io5";

export default function ToggleMode() {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack
      cursor="pointer"
      p={1}
      justifyContent="center"
      border="1px solid gray"
      rounded="md"
      _hover={{
        bg: useColorModeValue("rgba(50,50,50,0.1)", "rgba(50,50,50,0.9)"),
      }}
      onClick={toggleColorMode}
    >
      <Icon
        variant="ghost"
        color={useColorModeValue("gray", "rgba(255,255,255,0.5)")}
        as={IoInvertMode}
      />
    </HStack>
  );
}
