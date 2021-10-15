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
  ModalFooter,
  ModalFooterButtonGroup
} from 'mibao-ui'
import { useDisclosure } from '@chakra-ui/react'

export default {
  component: MibaoModal,
  title: 'Components/Modal',
  argTypes: {}
} as Meta

const Template: Story<typeof ARGS> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <MibaoProvider>
    <Button onClick={onOpen}>Open Modal</Button>
    <MibaoModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{args.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {args.body}
        </ModalBody>

        <ModalFooter>
          <ModalFooterButtonGroup>
            <Button isFullWidth variant="solid" colorScheme="primary">
              Save
            </Button>

            <Button isFullWidth onClick={onClose}>Cancel</Button>
          </ModalFooterButtonGroup>
        </ModalFooter>
      </ModalContent>
    </MibaoModal>
  </MibaoProvider>
}

const ARGS = {
  title: 'Modal Title',
  body: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text.'
} as const

export const Modal = Template.bind({})
Modal.args = ARGS
