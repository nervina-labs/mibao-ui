import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'
import {
  MibaoProvider,
  Tab,
  Tabs as MibaoUiTabs,
  TabList,
  TabPanels,
  TabPanel
} from 'mibao-ui'

export default {
  component: MibaoUiTabs,
  title: 'Components/Tabs',
  argTypes: {
  }
} as Meta

export const LineTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const ColorsTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs colorScheme="black" {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>

    <MibaoUiTabs colorScheme="gray" {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>

    <MibaoUiTabs colorScheme="red" {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>

    <MibaoUiTabs colorScheme="blue" {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>

    <MibaoUiTabs colorScheme="yellow" {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const EnclosedTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs variant="enclosed">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const UnStyledTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs variant="unstyled">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const DisabledTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs>
      <TabList>
        <Tab>One</Tab>
        <Tab isDisabled>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const SpaceBetweenTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs align="space-between">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const SizeTabs: Story = (args) => {
  return <MibaoProvider>
    <MibaoUiTabs align="space-between" size="sm">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>

    <MibaoUiTabs align="space-between">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>

    <MibaoUiTabs align="space-between" size="lg">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Long long Long Three</Tab>
      </TabList>
    </MibaoUiTabs>
  </MibaoProvider>
}

export const ChangeTabs: Story = () => {
  const [index, setIndex] = useState(0)

  return <MibaoProvider>
    <input
      type="range"
      min="0"
      max="2"
      value={index}
      onChange={(event) => setIndex(parseInt(event.target.value, 10))}
    />
    <MibaoUiTabs index={index}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
    </MibaoUiTabs>
  </MibaoProvider>
}
