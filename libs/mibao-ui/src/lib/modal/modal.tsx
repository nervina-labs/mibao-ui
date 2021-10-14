import './modal.module.scss'
import React from 'react'
import {
  Modal,
  ModalProps,
  ModalOverlayProps,
  ModalOverlay as ChakraModalOverlay,
  ModalHeader as ChakraModalHeader,
  ModalCloseButton as ChakraModalCloseButton,
  ModalBody as ChakraModalBody,
  ModalFooter as ChakraModalFooter,
  ModalContent as ChakraModalContent,
  CloseButtonProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalContentProps,
  Stack,
  useDisclosure
} from '@chakra-ui/react'

export {
  Modal,
  ModalProps,
  ModalHeaderProps,
  CloseButtonProps,
  ModalBodyProps,
  ModalFooterProps,
  useDisclosure
}

export const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return <ChakraModalOverlay bgColor="rgba(10, 11, 38, 0.5)" {...props}/>
}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  return <ChakraModalHeader p={0} {...props}>{props.children}</ChakraModalHeader>
}

export const ModalCloseButton: React.FC<CloseButtonProps> = (props) => {
  return <ChakraModalCloseButton
    rounded="100%"
    border="2px"
    borderColor="var(--chakra-colors-gray-100)"
    top={8}
    right={8}
    {...props}
  />
}

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  return <ChakraModalContent p={8} {...props}>{props.children}</ChakraModalContent>
}

export const ModalBody: React.FC<ModalBodyProps> = (props) => {
  return <ChakraModalBody py={8} px={0} {...props}>{props.children}</ChakraModalBody>
}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  return <ChakraModalFooter p={0}{...props}>{props.children}</ChakraModalFooter>
}

export const ModalFooterButtonGroup: React.FC = (props) => {
  return <Stack spacing={2} w="full" direction="column" {...props}>{props.children}</Stack>
}
