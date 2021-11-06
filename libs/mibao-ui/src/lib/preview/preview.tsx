import { Box, Flex, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { MouseEvent, useCallback, useRef } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import styles from './preview.module.scss'
import { Image } from '../image/image'
import { ProgressBar } from './progress-bar'

export interface PreviewProps {
  isOpen: boolean
  onClose: () => void
  type?: 'image' | 'video' | 'audio' | '3d' | 'three_d'
  bgImgUrl?: string
  renderer: string
}

export const Preview: React.FC<PreviewProps> = ({
  isOpen,
  onClose,
  type = 'image',
  bgImgUrl,
  renderer
}) => {
  const onClickModalContent = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement
      if (!target.closest(`.${styles.component}`)) {
        onClose()
      }
    },
    [onClose]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="100%" h="100%" bg="rgba(0, 0, 0, 0)" maxW="unset" maxH="unset" m="0" onClick={onClickModalContent}>
        {
          type === 'image'
            ? (
              <TransformWrapper
                centerOnInit
                centerZoomedOut
                minScale={0.2}
              >
                <TransformComponent wrapperClass={styles.wrapper} contentClass={`${styles.component} ${styles.image}`}>
                  <img src={bgImgUrl} alt="test" />
                </TransformComponent>
              </TransformWrapper>
              )
            : null
        }
        {
          type === 'audio'
            ? (
                <AudioPreview
                  renderer={renderer}
                  bgImgUrl={bgImgUrl}
                />
              )
            : null
        }
      </ModalContent>
    </Modal>
  )
}

const AudioPreview: React.FC<Pick<PreviewProps, 'renderer' | 'bgImgUrl'>> = ({
  renderer,
  bgImgUrl
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const togglePlay = useCallback(async () => {
    if (audioRef.current?.paused) {
      await audioRef.current?.play()
    } else {
      await audioRef.current?.pause()
    }
  }, [])

  return (
    <Flex
      className={styles.component}
      direction="column"
      maxW="460px"
      w="calc(100% - 30px)"
      m="auto"
      bg="#F6F6F6"
      overflow="hidden"
      rounded="20px"
      userSelect="none"
    >
      <audio src={renderer} ref={audioRef} />
      <Image src={bgImgUrl} w="100%" h="auto" maxH="80vh" userSelect="none" />
      <Flex h="40px" p="20px" pb="30px">
        <Box onClick={togglePlay} my="auto" mr="10px">{audioRef.current?.played ? 'Pause' : 'Play'}</Box>
        <ProgressBar percent={50} my="auto" />
      </Flex>
    </Flex>
  )
}

export default Preview
