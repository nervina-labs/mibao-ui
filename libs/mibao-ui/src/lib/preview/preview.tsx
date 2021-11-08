import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { MouseEvent, useCallback } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { AudioPreview } from './audio'
import styles from './preview.module.scss'
import { VideoPreview } from './video'
import { Image, ImageProps } from '../image/image'

export interface PreviewProps {
  isOpen: boolean
  onClose: () => void
  onError?: <T>(error: T) => void
  type?: 'image' | 'video' | 'audio' | '3d' | 'three_d'
  bgImgUrl?: string
  renderer: string
  imageProps?: ImageProps
  render3D: (renderer: string) => React.ReactNode
}

export const Preview: React.FC<PreviewProps> = ({
  isOpen,
  type = 'image',
  bgImgUrl,
  onClose,
  onError,
  renderer,
  render3D,
  imageProps
}) => {
  const onClickModalContent = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement
      const is3D = ['3d', 'three_d'].includes(type)
      if (!target.closest(`.${styles.component}`) && !is3D) {
        onClose()
      }
    },
    [onClose, type]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="100%" h="100%" bg="rgba(0, 0, 0, 0)" maxW="unset" maxH="unset" m="0" onClick={onClickModalContent}>
        <ModalCloseButton zIndex={1} color="white" />
        {
          type === 'image' || (type === 'audio' && bgImgUrl)
            ? (
              <TransformWrapper
                centerOnInit
                centerZoomedOut
                minScale={0.2}
              >
                <TransformComponent wrapperClass={styles.wrapper} contentClass={`${styles.component} ${styles.image}`}>
                  <Image src={bgImgUrl} onError={onError} {...imageProps} />
                </TransformComponent>
              </TransformWrapper>
              )
            : null
        }
        {
          type === 'audio'
            ? (<AudioPreview renderer={renderer} onError={onError} />)
            : null
        }
        {
          type === 'video'
            ? (<VideoPreview renderer={renderer} onError={onError} />)
            : null
        }
        {
          (type === '3d' || type === 'three_d') && renderer
            ? render3D(renderer)
            : null
        }
      </ModalContent>
    </Modal>
  )
}

export default Preview
