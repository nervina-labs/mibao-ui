import { Story, Meta } from '@storybook/react';
import { Dialog as MibaoDialog, DialogProps, Test } from 'mibao-ui';
import { ChakraProvider } from '@chakra-ui/react';
import { Button } from "@chakra-ui/button"

export default {
  component: Test,
  title: 'Components/Dialog',
  argTypes: {
  }
} as Meta;

const Template: Story<DialogProps> = (args) => <Test />

export const Dialog = Template.bind({});
Dialog.args = {
  isOpen: false,
};
