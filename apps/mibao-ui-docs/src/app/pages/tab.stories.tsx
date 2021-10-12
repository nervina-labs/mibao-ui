import { Story, Meta } from '@storybook/react';
import { Tab, TabList, Tabs as MibaoUiTabs } from 'mibao-ui';
import { ChakraProvider } from '@chakra-ui/react';

export default {
  component: MibaoUiTabs,
  title: 'Components/Tabs',
  argTypes: {
  }
} as Meta;

const Template: Story = (args) => <ChakraProvider>
  <MibaoUiTabs {...args}>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
  </MibaoUiTabs>
</ChakraProvider>

export const Tabs = Template.bind({});
Tabs.args = {
};
