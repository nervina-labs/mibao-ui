import {
  Box,
  BoxProps,
  Flex,
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
  Skeleton
} from '@chakra-ui/react'
import styles from './image.module.scss'
import { useState, useMemo, useEffect, useCallback, ReactNode } from 'react'
import FALLBACK_SRC from '../../../assets/images/fallback.svg'
import { addParamsToUrl, disableImageContext, getImagePreviewUrl } from '../../utils'

export interface ImageProps extends ChakraImageProps {
  loader?: ReactNode
  srcQueryParams?: Record<string, string | number>
  disableContextMenu?: boolean
  resizeScale?: number // Specifies the shortest edge of the target zoom graph.
  webp?: boolean
  containerProps?: BoxProps
}

export const Image: React.FC<ImageProps> = ({
  containerProps,
  srcQueryParams = {},
  resizeScale,
  loader,
  webp,
  src,
  ...props
}) => {
  const { fallbackSrc = FALLBACK_SRC } = props
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState(false)

  const loaderEl = useMemo(() => {
    if (loader) return loader
    return <Skeleton width="100%" height="100%" rounded={props.rounded} borderRadius={props.borderRadius} />
  }, [loader, props.borderRadius, props.rounded])

  const imageSrc = useMemo(() => {
    if (!src) return src
    if (resizeScale) {
      return addParamsToUrl(getImagePreviewUrl(src, {
        size: resizeScale,
        webp
      }), srcQueryParams)
    }
    return addParamsToUrl(src, srcQueryParams)
  }, [resizeScale, src, webp, srcQueryParams])

  useEffect(() => {
    if (src) {
      setIsLoading(true)
      setIsError(false)
    }
  }, [src])

  const onLoaded = useCallback((event) => {
    setIsLoading(false)
    if (props.onLoad) props.onLoad(event)
  }, [props])

  const onError = useCallback((event) => {
    setIsLoading(false)
    setIsError(true)
    if (props.onError) props.onError(event)
  }, [props])

  return (
    <Box
      w={props.width ?? props.w ?? 'auto'}
      h={props.height ?? props.h ?? 'auto'}
      position="relative"
      {...containerProps}
    >
      <>
        {
          isLoading && (
            <Flex
              w="full"
              h="full"
              position="absolute"
              zIndex={0}>
              {loaderEl}
            </Flex>
          )
        }
        <ChakraImage
          position="relative"
          zIndex={1}
          {...props}
          src={imageSrc}
          className={`${styles.image} ${props.className ? props.className : ''}`}
          onLoad={onLoaded}
          onError={onError}
          objectFit={props.objectFit ?? 'cover'}
          htmlWidth={props.width as string}
          htmlHeight={props.height as string}
          fallbackSrc={isError ? fallbackSrc : undefined}
          fallback={isError ? props.fallback : undefined}
          onContextMenu={props.disableContextMenu ? disableImageContext : undefined}
        />
      </>
    </Box>
  )
}
