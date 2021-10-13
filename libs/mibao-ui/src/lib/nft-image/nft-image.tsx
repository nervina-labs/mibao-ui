import styles from './nft-image.module.scss'
import React, { useMemo } from 'react'
import { ImageProps, Image } from '../image/image'
import { Box, Flex, Stack } from '@chakra-ui/react'
import CARD_BACK_SRC from '../../../assets/images/cardback-icon.svg'
import VIDEO_SRC from '../../../assets/images/video-icon.svg'
import AUDIO_SRC from '../../../assets/images/audio-icon.svg'
import ICON_3D_SRC from '../../../assets/images/3d-icon.svg'

export const NFT_IMAGE_TYPE_SET = ['image', 'video', 'audio', '3d'] as const
export type NftImageType = typeof NFT_IMAGE_TYPE_SET[number]

export interface NftImageProps extends Omit<ImageProps, 'aspectRatio'> {
  type?: NftImageType
  hasCardBack?: boolean
}

export const NftImage: React.FC<NftImageProps> = (props) => {
  const icons = useMemo(() => [
    {
      show: props.hasCardBack,
      src: CARD_BACK_SRC
    },
    {
      show: props.type === 'video',
      src: VIDEO_SRC
    },
    {
      show: props.type === 'audio',
      src: AUDIO_SRC
    },
    {
      show: props.type === '3d',
      src: ICON_3D_SRC
    }
  ]
    .filter(item => item.show)
    .map(item => (
    <Flex className={styles.icon}>
      <img src={item.src} alt='icon' />
    </Flex>
    ))
  , [props])

  return (
    <Box className={styles.nftImageContainer}>
      <Image rounded="10%" {...props} aspectRatio />

      <Stack position="absolute" direction="column" top="8%" right="8%" spacing={2}>
        {icons}
      </Stack>
    </Box>
  )
}
