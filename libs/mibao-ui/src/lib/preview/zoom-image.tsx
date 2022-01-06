import { ReactZoomPanPinchProps, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import styles from './preview.module.scss'
import { Image as MibaoImage, ImageProps } from '../image/image'
import { useEffect, useState } from 'react'
import { Center, Spinner } from '@chakra-ui/react'
import { useInnerSize } from '../../hooks/useInnerSize'

interface ZoomImageProps extends ImageProps {
  src: string
  imagePreviewProps?: ReactZoomPanPinchProps
  imageOnError?: () => void
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  imagePreviewProps,
  imageOnError,
  ...imageProps
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const innerSize = useInnerSize()
  const initialSize = Math.min(innerSize.width, innerSize.height)
  const [imageSize, setImageSize] = useState({
    width: initialSize,
    height: initialSize
  })
  const imageScale = Math.min(innerSize.width / imageSize.width, innerSize.height / imageSize.height)
  useEffect(() => {
    const image = new Image()
    image.src = src
    setIsLoading(true)
    image.onload = () => {
      setIsLoading(false)
      setImageSize({ width: image.width, height: image.height })
    }
    image.onerror = () => {
      imageOnError?.()
      setIsLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])

  if (isLoading) {
    return (
      <Center w="full" h="full">
        <Spinner color="white" />
      </Center>
    )
  }

  return (
    <TransformWrapper
      centerOnInit
      centerZoomedOut
      minScale={0.2}
      maxScale={20}
      {...imagePreviewProps}
    >
      <TransformComponent wrapperClass={styles.wrapper} contentClass={`${styles.component} ${styles.image}`}>
        <MibaoImage
          src={src}
          {...imageProps}
          objectFit="contain"
          w="full"
          h="full"
          style={{
            width: `${Math.floor(imageScale * imageSize.width)}px`,
            height: `${Math.floor(imageScale * imageSize.height)}px`
          }}
        />
      </TransformComponent>
    </TransformWrapper>
  )
}
