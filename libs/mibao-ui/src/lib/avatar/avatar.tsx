import styles from './avatar.module.scss'
import React from 'react'
import { Image } from '../image/image'
import { Box } from '@chakra-ui/react'

export type AvatarType = 'token' | 'image'

export interface AvatarProps {
  src: string
  type?: 'token' | 'image' | 'image_verify'
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
    </Box>
  )
}
