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

const ModalTemplate: React.FC<typeof ARGS> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <>
    <Button onClick={onOpen}>Open Modal</Button>
    <MibaoModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{args.title}</ModalHeader>
        <ModalCloseButton rounded="100%" border="2px" borderColor="var(--chakra-colors-gray-100)" top={8} right={8} />
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
  </>
}

const Template: Story<typeof ARGS> = (args) => <MibaoProvider>
  <ModalTemplate {...args} />
</MibaoProvider>

const ARGS = {
  title: 'Modal Title',
  body: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text.'
} as const

export const Modal = Template.bind({})
Modal.args = ARGS
