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

export interface NftImageProps extends Omit<ImageProps, 'aspectRatio' | 'srcQueryParams'> {
  type?: NftImageType
  hasCardBack?: boolean
  srcQueryParams?: { tid: number, locale: string }
  isBaned?: boolean
}

export const NftImage: React.FC<NftImageProps> = ({ isBaned, ...props }) => {
  const icons = useMemo(() => {
    if (isBaned) {
      return null
    }
    return [
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
  }
  , [props, isBaned])

  return (
    <Box className={styles.nftImageContainer}>
      <Image rounded="10%" w="full" aspectRatio {...props} src={isBaned ? '' : props.src} />

      <Stack position="absolute" direction="column" top="10px" right="10px" spacing={2}>
        {icons}
      </Stack>
    </Box>
  )
}
