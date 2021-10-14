import styles from './avatar.module.scss'
import React from 'react'
import { Image } from '../image/image'
import { Box } from '@chakra-ui/react'
import DIAMONDS_SRC from '../../../assets/images/nft-avatar-diamonds.svg'
import VERIFIED_SRC from '../../../assets/images/avatar-verified.svg'

export const AVATAR_TYPE_SET = ['token', 'image', 'image_verified'] as const
export type AvatarType = typeof AVATAR_TYPE_SET[number]

export const AVATAR_SHAPE_SET = ['circle', 'square'] as const
export type AvatarShape = typeof AVATAR_SHAPE_SET[number]

export interface AvatarProps {
  src: string
  type?: AvatarType
  shape?: AvatarShape
  size?: string
  srcQueryParams?: Record<string, string>
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  type = 'image',
  shape = 'circle',
  size,
  srcQueryParams
}) => {
  const isToken = type === 'token'
  const isVerified = type === 'image_verified'

  return (
    <Box
      className={`${styles.avatarContainer} ${isToken ? styles.animation : ''} ${shape === 'square' ? styles.square : ''}`}
      style={{ width: size }}
    >
      <Image
        src={src}
        rounded={shape === 'square' ? '3px' : '100%'}
        width="100%"
        aspectRatio
        srcQueryParams={srcQueryParams}
      />
      {
        isToken && <img className={`${styles.icon} ${styles.token}`} src={DIAMONDS_SRC} alt='diamonds' />
      }
      {
        isVerified && (
          <img
            className={`${styles.icon} ${styles.verified}`}
            src={VERIFIED_SRC}
            alt='verified'
          />
        )
      }
    </Box>
  )
}
