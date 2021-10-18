import styles from './avatar.module.scss'
import React from 'react'
import { Image, ImageProps } from '../image/image'
import { Box, BoxProps } from '@chakra-ui/react'
import DIAMONDS_SRC from '../../../assets/images/nft-avatar-diamonds.svg'
import VERIFIED_SRC from '../../../assets/images/avatar-verified.svg'

export type AvatarType = 'token' | 'image'

export type AvatarShape = 'circle' | 'square'

export interface AvatarProps extends ImageProps {
  src: string
  type?: AvatarType
  shape?: AvatarShape
  size?: string
  isBaned?: boolean
  isVerified?: boolean
  srcQueryParams?: { tid: number, locale: string }
  containerProps?: BoxProps
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  type = 'image',
  shape = 'circle',
  size,
  isBaned,
  isVerified,
  srcQueryParams,
  resizeScale,
  containerProps,
  ...imageProps
}) => {
  const isToken = type === 'token'
  return (
    <Box
      className={`${styles.avatarContainer} ${isToken ? styles.animation : ''} ${shape === 'square' ? styles.square : ''}`}
      width={size}
      maxW={size}
      maxH={size}
      {...containerProps}
    >
      <Image
        src={isBaned ? '' : src}
        rounded={shape === 'square' ? '3px' : '100%'}
        width="100%"
        aspectRatio
        srcQueryParams={srcQueryParams}
        resizeScale={resizeScale}
        minW={imageProps?.width}
        {...imageProps}
      />
      {
        isToken && !isBaned && <img className={`${styles.icon} ${styles.token}`} src={DIAMONDS_SRC} alt='diamonds' />
      }
      {
        isVerified && !isBaned
          ? (
          <img
            className={`${styles.icon} ${styles.verified}`}
            src={VERIFIED_SRC}
            alt='verified'
          />
            )
          : null
      }
    </Box>
  )
}
