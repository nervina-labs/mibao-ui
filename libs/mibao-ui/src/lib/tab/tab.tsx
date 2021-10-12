import './tab.module.scss'
import React from 'react'
import {
  Tabs as ChakraTabs,
  Tab as ChakraTab,
  TabList as ChakraTabList,
  TabPanels as ChakraTabPanels,
  TabPanel as ChakraTabPanel,
  TabsProps as ChakraTabsProps
} from '@chakra-ui/react'

export type TabsProps = ChakraTabsProps

export const Tabs: React.FC<TabsProps> = (props) => <ChakraTabs {...props} colorScheme="primary">{props.children}</ChakraTabs>

export const Tab: React.FC = (props) => <ChakraTab {...props}>{props.children}</ChakraTab>

export const TabList = ChakraTabList
export const TabPanels = ChakraTabPanels
export const TabPanel = ChakraTabPanel
