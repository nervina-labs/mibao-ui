import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { MouseEvent, useCallback, useEffect, useState } from 'react'
import { ReactZoomPanPinchProps, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { AudioPreview } from './audio'
import styles from './preview.module.scss'
import { VideoPreview } from './video'
import { Image as MibaoImage, ImageProps } from '../image/image'

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
  const [imgSrc, setImgSrc] = useState<string |undefined>(undefined)
  useEffect(() => {
    if (preload) {
      const image = new Image()
      image.src = bgImgUrl ?? ''
      image.onload = () => setImgSrc(bgImgUrl)
      if (bgImageOnError) {
        image.onerror = bgImageOnError
      }
    }
  }, [bgImgUrl, isOpen, bgImageOnError, preload])

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="100%" h="100%" bg="rgba(0, 0, 0, 0)" maxW="unset" maxH="unset" m="0" onClick={onClickModalContent}>
      <ModalCloseButton zIndex={1} color="white" />
      {
        isOpen
          ? <>
            {
              type === 'image' || (type === 'audio' && bgImgUrl)
                ? (
                  <TransformWrapper
                    centerOnInit
                    centerZoomedOut
                    minScale={0.2}
                    {...imagePreviewProps}
                  >
                    <TransformComponent wrapperClass={styles.wrapper} contentClass={`${styles.component} ${styles.image}`}>
                      <MibaoImage src={imgSrc} onError={bgImageOnError} {...imageProps} />
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
