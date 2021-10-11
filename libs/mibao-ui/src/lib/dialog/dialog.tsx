import './dialog.module.scss';
import { Button, ChakraProvider, Modal, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { ModalProps } from '@chakra-ui/modal/dist/types/modal';
import React from 'react';

export type DialogProps = ModalProps

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalFooter display="block">
          <Button colorScheme="blue" mr={3} onClick={props.onClose} isFullWidth>
            Close
          </Button>
          <Button variant="ghost" isFullWidth>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export const Test: React.FC = () => {
  return <ChakraProvider>
    <Button>Button</Button>
  </ChakraProvider>
}
