import { Story, Meta } from '@storybook/react';
import { Dialog as MibaoDialog, DialogProps, ChakraUI } from 'mibao-ui';
import { Button, ChakraProvider } from '@chakra-ui/react';

export default {
  component: MibaoDialog,
  title: 'Components/Dialog',
  argTypes: {
  }
} as Meta;

const FCC: React.FC<DialogProps> = (args) => {
  const { isOpen, onOpen, onClose } = ChakraUI.useDisclosure()
  return <ChakraProvider>
    <Button onClick={onOpen}>Open</Button>
    {/*<Dialog {...args} isOpen={isOpen} onClose={onClose}>Button</Dialog>*/}
  </ChakraProvider>
};

const Template: Story<DialogProps> = (args) => <ChakraProvider>
  <Button>Open</Button>
  <Dialog {...args}>Button</Dialog>
</ChakraProvider>

export const Dialog = Template.bind({});
Dialog.args = {
  isOpen: true,
};
