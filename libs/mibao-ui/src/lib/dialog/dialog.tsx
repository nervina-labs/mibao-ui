import './dialog.module.scss';
import { Button, Modal, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { ModalProps } from '@chakra-ui/modal/dist/types/modal';

export type DialogProps = ModalProps

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose} isFullWidth>
            Close
          </Button>
          <Button variant="ghost" isFullWidth>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
