import { Box, Spinner, Image as ChakraImage, ImageProps as ChakraImageProps } from '@chakra-ui/react'
import styles from './image.module.scss'
import { useState, useMemo, useEffect, useCallback, ReactNode } from 'react'
import FALLBACK_SRC from '../../../assets/images/fallback.svg'
import { addParamsToUrl, omit } from '../../utils'

export interface ImageProps extends ChakraImageProps {
  aspectRatio?: boolean
  loader?: ReactNode
  srcQueryParams?: { [key: string]: string }
}

export const Image = (props: ImageProps) => {
  const { fallbackSrc = FALLBACK_SRC } = props
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState(false)
  // image classname
  const classNames = useMemo(() =>
    [
      styles.image,
      props.className,
      !props.src ? styles.hide : undefined,
      props.aspectRatio ? styles.aspectRatio : undefined
    ].filter(c => c).join(' '),
  [props])
  // loading element
  const loaderEl = useMemo(() => {
    if (props.loader) {
      return props.loader
    }
    return <Spinner className={styles.spinner} color="primary.600" emptyColor="gray.200" />
  }, [props.loader])
  // src
  const imageSrc = useMemo(() => {
    if (!props.srcQueryParams || !props.src) {
      return props.src
    }
    return addParamsToUrl(props.src, props.srcQueryParams)
  }, [props])
  // omit props
  const imageProps = useMemo(() => omit(props, [
    'aspectRatio',
    'loader',
    'srcQueryParams'
  ]), [props])

  useEffect(() => {
    if (props.src) {
      setIsLoading(true)
      setIsError(false)
    }
  }, [props.src])

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
    <Box className={styles.container} style={{
      width: props.width as string,
      height: props.height as string
    }}>
      {
        isLoading && (
          <Box className={styles.loading}>
            {loaderEl}
          </Box>
        )
      }
      <ChakraImage
        {...imageProps}
        src={imageSrc}
        className={classNames}
        onLoad={onLoaded}
        onError={onError}
        objectFit={props.objectFit ?? 'cover'}
        htmlWidth={props.width as string}
        htmlHeight={props.height as string}
        fallbackSrc={isError ? fallbackSrc : undefined}
        fallback={isError ? props.fallback : undefined}
      />
    </Box>
  )
}
