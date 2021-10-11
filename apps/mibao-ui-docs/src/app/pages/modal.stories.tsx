import { Story, Meta } from '@storybook/react';
import { Dialog as MibaoDialog, DialogProps } from 'mibao-ui';
import { ChakraProvider } from '@chakra-ui/react';
import { Button } from "@chakra-ui/button"

export default {
  component: Button,
  title: 'Components/Dialog',
  argTypes: {
  }
} as Meta;

const Template: Story<DialogProps> = (args) => <ChakraProvider>
  <Button colorScheme="teal" size="xs">
    Button
  </Button>
  <Button colorScheme="teal" size="sm">
    Button
  </Button>
  <Button colorScheme="teal" size="md">
    Button
  </Button>
  <Button colorScheme="teal" size="lg">
    Button
  </Button>
</ChakraProvider>

export const Dialog = Template.bind({});
Dialog.args = {
  isOpen: false,
};
