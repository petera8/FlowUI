import { Box, useColorModeValue } from "@chakra-ui/react";
import TabComponent from "./components/Tabs";
import NavBar from "./components/NavBar";
import Workflows from "./pages/Workflows";
import Dashboard from "./pages/Dashboard";
import { IoInvertMode } from "react-icons/io5";

export default function App() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <NavBar bg={bg} />
      <Box w="100vw" h="calc(100vh - 50px)" bg={bg} px={5} py={10} mt="50px">
        <TabComponent tabTitles={["Dashboard", "Workflows"]}>
          <Dashboard />
          <Workflows />
        </TabComponent>
      </Box>
    </>
  );
}
