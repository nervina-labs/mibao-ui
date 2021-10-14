import { Story, Meta } from '@storybook/react'
import React from 'react'
import {
  Button,
  Modal as MibaoModal,
  MibaoProvider,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter, ModalFooterButtonGroup
} from 'mibao-ui'
import { useDisclosure } from '@chakra-ui/react'

export default {
  component: MibaoModal,
  title: 'Components/Modal',
  argTypes: {}
} as Meta

const ModalTemplate: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <>
    <Button onClick={onOpen}>Open Modal</Button>
    <MibaoModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton rounded="100%" border="2px" borderColor="var(--chakra-colors-gray-100)" top={8} right={8} />
        <ModalBody>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text.
        </ModalBody>

        <ModalFooter>
          <ModalFooterButtonGroup>
            <Button isFullWidth variant="solid" colorScheme="primary">
              Save
            </Button>

            <Button isFullWidth>Cancel</Button>
          </ModalFooterButtonGroup>
        </ModalFooter>
      </ModalContent>
    </MibaoModal>
  </>
}

const Template: Story = (args) => <MibaoProvider>
  <ModalTemplate />
</MibaoProvider>

export const Modal = Template.bind({})
Modal.args = {
}
