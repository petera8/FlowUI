import Workflows from './components/Workflows';
import {
  ChakraProvider,
  Icon,
  VStack,
  Box,
  IconButton,
  Heading,
  useColorModeValue,
  HStack,
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import Tags from './components/Tags';
import { IoInvertMode } from "react-icons/io5";
import NavBar from "./components/NavBar";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const no_sel_clr = useColorModeValue('gray.500', 'gray.500');
  const sel_clr = useColorModeValue('gray.900', 'gray.100');

  return (
    <>
      <NavBar bg={bg} />
      <Box w="100vw" h="100vh" bg={bg} px={5} py={10}>

        <Tabs 
          position="relative" 
          variant="unstyled" 
          mt="55px"
          defaultIndex={1}
        >
          <TabList>
            <Tab
              color={no_sel_clr}
              _selected={{ 
                color: sel_clr,
              }}
            >Dashboard</Tab>

            <Tab 
             color={no_sel_clr}
             _selected={{ 
               color: sel_clr,
             }}
            >Workflows</Tab>
          </TabList>

          <TabIndicator
            mt="-2.5px"
            height="1px"
            bg="blue.500"
            borderRadius="1px"
          />

          <TabPanels>
            <TabPanel>
              <p>two!</p>
            </TabPanel>

            <TabPanel>
              <VStack
                flex="1 0 auto"
                mt={1}
              >
              <HStack
                cursor="pointer" 
                alignSelf="flex-end" 
                p={1}
                justifyContent="center" 
                border="1px solid gray"
                rounded="md"
                onClick={toggleColorMode}
              >
                {/* <Box sx={{ textTransform : 'capitalize'}} fontSize="0.75rem">{colorMode === "light" ? "dark" : "light"}</Box> */}
                <Icon
                  variant='ghost'
                  color={useColorModeValue('gray', 'rgba(255,255,255,0.5)')}
                  as={IoInvertMode}
                />
              </HStack>

              <VStack
                alignItems="flex-start"
                w="100%"  
                h="100%"
                gap={3}
              >
                {/* <Heading
                  as="h5"
                  size="lg"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  Workflows
                </Heading> */}
                <Tags />
                <Workflows />
              </VStack>
            </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}
