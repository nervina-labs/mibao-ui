import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { MouseEvent, useCallback } from 'react'
import { ReactZoomPanPinchProps } from 'react-zoom-pan-pinch'
import { AudioPreview } from './audio'
import styles from './preview.module.scss'
import { VideoPreview } from './video'
import { ImageProps } from '../image/image'
import { ZoomImage } from './zoom-image'

export interface PreviewProps {
  isOpen: boolean
  onClose: () => void
  onError?: <T>(error: T) => void
  type?: 'image' | 'video' | 'audio' | '3d' | 'three_d'
  bgImgUrl?: string
  renderer: string
  imageProps?: ImageProps
  render3D: (renderer: string, bgImgUrl?: string) => React.ReactNode
  preload?: boolean
  bgImageOnError?: <T>(error: T) => void
  imagePreviewProps?: ReactZoomPanPinchProps
}

export const Preview: React.FC<PreviewProps> = ({
  isOpen,
  type = 'image',
  bgImgUrl,
  onClose,
  onError,
  renderer,
  render3D,
  imageProps,
  imagePreviewProps,
  bgImageOnError,
  preload = true
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
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="100%" h="100%" bg="rgba(0, 0, 0, 0)" maxW="unset" maxH="unset" m="0" onClick={onClickModalContent}>
      <ModalCloseButton zIndex={1} color="white" />
      {
        isOpen
          ? <>
            {
              bgImgUrl && (type === 'image' || type === 'audio')
                ? <ZoomImage
                    src={bgImgUrl}
                    onError={bgImageOnError}
                    imagePreviewProps={imagePreviewProps}
                    {...imageProps}
                  />
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
                ? render3D(renderer, bgImgUrl)
                : null
            }
          </>
          : null
      }
      </ModalContent>
    </Modal>
  )
}

export default Preview
