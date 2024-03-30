import {
  Tag,
  TagLabel,
  HStack,
  Flex,
  VStack,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Box,
  Button,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTags } from "react-icons/fa";
import { RiFilter3Fill } from "react-icons/ri";

export default function Tags() {
  return (
    <Button
      rightIcon={<FaTags fontSize={["0.9rem", "1rem"]} />}
      fontSize={["xs", "xs", "sm", "md"]}
      colorScheme="gray"
      size="sm"
      variant="outline"
    >
      Tags
    </Button>
  );
}
