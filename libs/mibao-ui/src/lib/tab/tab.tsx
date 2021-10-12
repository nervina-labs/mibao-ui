import './tab.module.scss';
import React from 'react';
import {
  Tabs as ChakraTabs,
  Tab as ChakraTab,
  TabList as ChakraTabList,
  TabPanels as ChakraTabPanels,
  TabPanel as ChakraTabPanel,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react';

export type TabsProps = ChakraTabsProps

export const Tabs: React.FC<TabsProps> = (props) => {
  return <ChakraTabs {...props}>{props.children}</ChakraTabs>
}

export const Tab: React.FC = (props) => {
  return <ChakraTab {...props}>{props.children}</ChakraTab>
}

export const TabList = ChakraTabList
export const TabPanels = ChakraTabPanels
export const TabPanel = ChakraTabPanel
