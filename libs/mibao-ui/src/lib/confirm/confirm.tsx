import './confirm.module.scss'
import React, { ReactNode, createContext, useState, useContext, useCallback } from 'react'
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
  onConfirm?: () => void
  confirmText?: ReactNode
  onCancel?: () => void
  cancelText?: ReactNode
  isCentered?: boolean
}

interface ConfirmContextValue {
  props: ConfirmProps | null
  openModal: (props: ConfirmProps) => void
  closeModal: () => void
}

const ConfirmContext = createContext<ConfirmContextValue>({
  props: null,
  openModal (props: ConfirmProps) {
    this.props = props
  },
  closeModal () {
    this.props = null
  }
})

const ConfirmContextProvider = ConfirmContext.Provider

const ConfirmModal: React.FC<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}> = (props) => {
  const context = useContext(ConfirmContext)
  const onClose = useCallback(() => {
    context.props?.onCancel?.()
    props.onClose?.()
  }, [context.props, props])

  return <Modal isOpen={props.isOpen} onClose={onClose} isCentered={context.props?.isCentered}>
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
            context.props?.onCancel && <Button isFullWidth onClick={onClose}>
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
  const openModal = useCallback((value) => {
    onOpen()
    setModalProps(value)
  }, [onOpen])
  const closeModal = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <ConfirmContextProvider value={{
      props: modalProps,
      openModal,
      closeModal
    }}>
      <ConfirmModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      {props.children}
    </ConfirmContextProvider>
  )
}

export function useConfirm () {
  const { openModal, closeModal } = useContext(ConfirmContext)
  return {
    openModal,
    closeModal
  }
}
