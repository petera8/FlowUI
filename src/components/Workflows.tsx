import Card from './Card';
import { SimpleGrid, Box } from '@chakra-ui/react';

const list = [
  { name: 'Scrape Facebook', tag: 'Home Workflow' },
  { name: 'Download Image', tag: 'Home Workflow' },
  { name: 'Do Homework', tag: 'Home Workflow' },
  { name: 'Send Email', tag: 'Work' },
  { name: 'Download Pdf', tag: 'Work' },
  { name: 'Fill Forms', tag: 'Work' },
  { name: 'Respond to text', tag: 'Personal' },
  { name: 'Refresh Notes', tag: 'Personal' },
];

export default function Worklfows() {
  return (
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
  );
}
