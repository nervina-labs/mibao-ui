import React from 'react';
import {
  Tabs as ChakraTabs,
  Tab as ChakraTab,
  TabList,
  TabPanels,
  TabPanel,
  TabsProps,
} from '@chakra-ui/react';

export { TabList, TabPanel, TabPanels, TabsProps };

export const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <ChakraTabs {...props} colorScheme="primary">
      {props.children}
    </ChakraTabs>
  );
};

export const Tab: React.FC = (props) => {
  return <ChakraTab {...props}>{props.children}</ChakraTab>;
};
