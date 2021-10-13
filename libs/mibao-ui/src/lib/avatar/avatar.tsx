import styles from './avatar.module.scss'
import React from 'react'
import { Image } from '../image/image'
import { Box } from '@chakra-ui/react'
import DIAMONDS_SRC from '../../../assets/images/nft-avatar-diamonds.svg'

export const AVATAR_TYPE_SET = ['token', 'image', 'image_verify'] as const
export type AvatarType = typeof AVATAR_TYPE_SET[number]

export interface AvatarProps {
  src: string
  type?: AvatarType
  shape?: 'circle' | 'square'
  size?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  type = 'image',
  shape = 'circle',
  size
}) => {
  return (
    <Box className={`${styles.avatarContainer} ${type === 'token' ? styles.animation : ''}`} style={{ width: size }}>
      <Image
        src={src}
        rounded={shape === 'square' ? '3px' : '100%'}
        width="100%"
        aspectRatio
      />

      <img className={`${styles.icon} ${styles.topRight}`} src={DIAMONDS_SRC} alt='diamonds' />
    </Box>
  )
}
