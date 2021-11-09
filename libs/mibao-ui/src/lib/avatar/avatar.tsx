import styles from './avatar.module.scss'
import React from 'react'
import { Image, ImageProps } from '../image/image'
import { AspectRatio, Box, BoxProps, useToken } from '@chakra-ui/react'
import { ReactComponent as DiamondSvg } from '../../../assets/images/nft-avatar-diamonds.svg'
import { ReactComponent as VerifiedSvg } from '../../../assets/images/avatar-verified.svg'

export type AvatarType = 'token' | 'image'

export type AvatarShape = 'circle' | 'square'

export interface AvatarProps extends ImageProps {
  src?: string
  type?: AvatarType
  shape?: AvatarShape
  size?: string
  isBanned?: boolean
  isVerified?: boolean
  srcQueryParams?: { tid: number, locale: string }
  containerProps?: BoxProps
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  type = 'image',
  shape = 'circle',
  size,
  isBanned,
  isVerified,
  srcQueryParams,
  resizeScale,
  containerProps,
  ...imageProps
}) => {
  const isToken = type === 'token'
  const fallbackSrc = useToken('fallbacks', 'avatar')

  return (
    <Box
      className={`${styles.avatarContainer} ${isToken ? styles.animation : ''} ${shape === 'square' ? styles.square : ''}`}
      width={size}
      maxW={size}
      maxH={size}
      {...containerProps}
    >
      <AspectRatio ratio={1 / 1} width={size} maxW={size} maxH={size}>
        <Image
          src={isBanned ? '' : src}
          rounded={shape === 'square' ? '3px' : '100%'}
          w="full"
          h="full"
          srcQueryParams={srcQueryParams}
          resizeScale={resizeScale}
          minW={imageProps?.width}
          fallbackSrc={fallbackSrc}
          border={isToken ? undefined : '3px solid #f6f6f6'}
          {...imageProps}
        />
      </AspectRatio>
      {
        isToken && !isBanned && <DiamondSvg className={`${styles.icon} ${styles.token}`} />
      }
      {
        isVerified && !isBanned
          ? (
            <VerifiedSvg className={`${styles.icon} ${styles.verified}`} />
            )
          : null
      }
    </Box>
  )
}
