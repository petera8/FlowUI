import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  useColorModeValue,
} from "@chakra-ui/react";
import { Children } from "react";

export default function TabsComponent({ tabTitles, children }) {
  console.log({ children });
  const no_sel_clr = useColorModeValue("gray.500", "gray.500");
  const sel_clr = useColorModeValue("gray.900", "gray.100");

  return (
    <Tabs position="relative" variant="unstyled" defaultIndex={1}>
      <TabList>
        {tabTitles?.map((title) => (
          <Tab
            color={no_sel_clr}
            _selected={{
              color: sel_clr,
            }}
          >
            {title}
          </Tab>
        ))}
      </TabList>

      <TabIndicator mt="-2.5px" height="1px" bg="blue.500" borderRadius="1px" />

      <TabPanels>
        {Children.map(children, (child, index) => {
          return <TabPanel key={index}>{child}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  );
}
