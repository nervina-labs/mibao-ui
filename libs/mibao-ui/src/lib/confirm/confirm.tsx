import './confirm.module.scss'
import React, { ReactNode, createContext, useState, useContext } from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalFooterButtonGroup,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '../modal/modal'
import { Button } from '../button/button'

export interface ConfirmProps {
  title?: ReactNode
  content?: ReactNode
  icon?: string
  onConfirm?: () => void
  onConfirmError?: () => void
  confirmText?: ReactNode
  onCancel?: () => void
  cancelText?: ReactNode
}

const ConfirmContext = createContext<{ props: ConfirmProps | null, showModal: (props: ConfirmProps) => void}>({
  props: null,
  showModal (props: ConfirmProps) {
    this.props = props
  }
})

const ConfirmContextProvider = ConfirmContext.Provider

const ConfirmModal: React.FC<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}> = (props) => {
  const context = useContext(ConfirmContext)

  return <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{context.props?.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {context.props?.content}
      </ModalBody>

      <ModalFooter>
        <ModalFooterButtonGroup>
          <Button isFullWidth variant="solid" colorScheme="primary" onClick={() => {
            context.props?.onConfirm?.()
            props.onClose?.()
          }}>
            { context.props?.confirmText ?? 'OK' }
          </Button>

          {
            context.props?.onCancel && <Button isFullWidth onClick={() => {
              context.props?.onCancel?.()
              props.onClose?.()
            }}>
              { context.props?.cancelText ?? 'Cancel' }
            </Button>
          }
        </ModalFooterButtonGroup>
      </ModalFooter>
    </ModalContent>
  </Modal>
}

export const ConfirmProvider: React.FC = (props) => {
  const [modalProps, setModalProps] = useState<ConfirmProps | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ConfirmContextProvider value={{
      props: modalProps,
      showModal: (props) => {
        onOpen()
        setModalProps(props)
      }
    }}>
      <ConfirmModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      {props.children}
    </ConfirmContextProvider>
  )
}

export function useConfirm () {
  const context = useContext(ConfirmContext)
  return context.showModal
}
