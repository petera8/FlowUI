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
    useColorModeValue
  } from '@chakra-ui/react';
  import { FaTags } from "react-icons/fa";
  import { RiFilter3Fill } from "react-icons/ri";
  
  export default function Tags() {
    return (
        // <HStack
        //     rounded="lg"
        //     w="100%"
        //     h="100%"
        //     p={2}
        //     alignItems="center"
        //     border="1px"
        //     borderColor={useColorModeValue('gray.200', 'gray.700')}
        // >
            <Button 
                rightIcon={<FaTags fontSize={["0.9rem", "1rem"]}/>} 
                fontSize={["xs", "xs", "sm", "md"]}
                colorScheme='gray'
                size="sm"
                variant='outline'
            >
                Tags
            </Button>
    //         <SimpleGrid minChildWidth="100px" spacing={1} w="100%">
    //             {['Home Workflow', 'Running', 'Stopped','Home Workflow', 'Running', 'Stopped'].map((tag) => (
    //             <Tag justifyContent="space-between" mt={1} py={1} size="sm" colorScheme="purple" borderRadius="full">
    //                 <TagLabel>{tag}</TagLabel>
    //                 <TagCloseButton />
    //             </Tag>
    //             ))}
    //         </SimpleGrid>
    //   </HStack>
    );
  }
  