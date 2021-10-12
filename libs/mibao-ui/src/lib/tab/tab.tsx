import './tab.module.scss';
import React from 'react';
import { Tabs as ChakraTabs, Tab as ChakraTab, TabsProps as ChakraTabsProps, TabList as ChakraTabList } from '@chakra-ui/react';

export type TabsProps = ChakraTabsProps

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <ChakraTabs>{children}</ChakraTabs>
}

export const Tab: React.FC = ({ children }) => {
  return <ChakraTab>{children}</ChakraTab>
}

export const TabList = ChakraTabList
