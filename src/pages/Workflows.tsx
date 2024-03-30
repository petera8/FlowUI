import Card from "../components/Card";
import { SimpleGrid, VStack, useColorModeValue } from "@chakra-ui/react";
import Tags from "../components/Tags";

const list = [
  { name: "Scrape Facebook", tag: "Home Workflow" },
  { name: "Download Image", tag: "Home Workflow" },
  { name: "Do Homework", tag: "Home Workflow" },
  { name: "Send Email", tag: "Work" },
  { name: "Download Pdf", tag: "Work" },
  { name: "Fill Forms", tag: "Work" },
  { name: "Respond to text", tag: "Personal" },
  { name: "Refresh Notes", tag: "Personal" },
];

export default function Worklfows() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <VStack w="100%" h="100%" alignItems="flex-start" gap={3}>
      <Tags />
      <SimpleGrid minChildWidth="170px" spacing={2} w="100%">
        {list.map((item) => (
          <Card
            title={item.name}
            description="Some Description"
            tag={item.tag}
            url="https://google.com"
            key={item.name}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
