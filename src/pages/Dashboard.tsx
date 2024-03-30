import {
  useColorModeValue,
  Center,
  Box,
  Button,
  IconButton,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

import { FaPlay } from "react-icons/fa";
import { PiQueueFill } from "react-icons/pi";
import { MdError } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { HiMiniQueueList } from "react-icons/hi2";
import { RiChatHistoryFill } from "react-icons/ri";
import Workflows from "./Workflows";

const Activities = [
  {
    mode: "Running",
    icon: FaPlay,
    color: "lightgreen",
    size: "0.8rem",
    count: 2,
  },
  {
    mode: "Queued",
    icon: HiMiniQueueList,
    color: "yellow",
    size: "1rem",
    count: 3,
  },
  { mode: "Error", icon: MdError, color: "red", size: "1rem", count: 0 },
  {
    mode: "Recent",
    icon: RiChatHistoryFill,
    color: "teal",
    size: "1rem",
    count: 2,
  },
];

function NoActivity() {
  return (
    <Center
      w="100%"
      h="100%"
      px={0}
      rounded="sm"
      color={useColorModeValue("gray", "gray")}
      // overflowY="scroll"
    >
      <VStack>
        <Box>Nothing to Show</Box>
        <Button
          leftIcon={<IoArrowRedoSharp />}
          variant="outline"
          colorScheme={useColorModeValue("green", "gray")}
        >
          Go to Worklfows
        </Button>
      </VStack>
    </Center>
  );
}

function Activity({ modeIndex }) {
  return Activities.filter((_a, index) => index === modeIndex).map((a) => (
    <Box
      w="100%"
      h="calc(100vh - 257px)"
      border="0px solid rgba(100,100,100, 0.3)"
      p={0}
      rounded="md"
      mt={5}
    >
      <Workflows />
      {/* <NoActivity /> */}
    </Box>
  ));
}

export default function Dashboard() {
  const [mode, setMode] = useState(0);
  return (
    <VStack alignItems="flex-start" mt={5} border="0px solid gray">
      <VStack color={useColorModeValue("gray.500", "gray.400")}>
        <Box fontSize="0.75rem" fontWeight="bold">
          Select Activity
        </Box>
      </VStack>
      <HStack
        w="fit-content"
        alignItems="flex-start"
        border="1px solid rgba(100,100,100,0.2)"
        p={1}
        rounded="md"
        // ml={-5}
      >
        {Activities.map((a, index) => (
          <IconButton
            fontSize="0.85rem"
            fontWeight="normal"
            icon={<a.icon fontSize={a.size} />}
            color={useColorModeValue("gray.500", "gray.400")}
            onClick={() => setMode(index)}
            variant={"ghost"}
            w="100%"
            bg={
              index === mode &&
              useColorModeValue("gray.200", "rgba(100,100,180,0.4)")
            }
            // _hover={{ bg: "none" }}
          />
        ))}
      </HStack>
      <Activity modeIndex={mode} />
    </VStack>
  );
}
