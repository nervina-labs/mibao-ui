import React, { useMemo } from 'react'
import { ImageProps, Image } from '../image/image'
import { AspectRatio, Box, Stack, Image as RowImage } from '@chakra-ui/react'
import CARD_BACK_SRC from '../../../assets/images/cardback-icon.svg'
import VIDEO_SRC from '../../../assets/images/video-icon.svg'
import AUDIO_SRC from '../../../assets/images/audio-icon.svg'
import ICON_3D_SRC from '../../../assets/images/3d-icon.svg'

export const NFT_IMAGE_TYPE_SET = ['image', 'video', 'audio', '3d', 'three_d'] as const
export type NftImageType = typeof NFT_IMAGE_TYPE_SET[number]

export interface NftImageProps extends Omit<ImageProps, 'srcQueryParams'> {
  type?: NftImageType
  hasCardBack?: boolean
  srcQueryParams?: { tid: number, locale: string }
  isBaned?: boolean
}

export const NftImage: React.FC<NftImageProps> = ({ isBaned, hasCardBack, type, ...props }) => {
  const icons = useMemo(() => {
    if (isBaned) {
      return null
    }
    return [
      {
        show: hasCardBack,
        src: CARD_BACK_SRC
      },
      {
        show: type === 'video',
        src: VIDEO_SRC
      },
      {
        show: type === 'audio',
        src: AUDIO_SRC
      },
      {
        show: type === '3d' || type === 'three_d',
        src: ICON_3D_SRC
      }
    ]
      .filter(item => item.show)
      .map((item, i) => (
        <AspectRatio
          w="full"
          ratio={1 / 1}
          bg="rgba(0, 0, 0, 0.7)"
          backdropFilter="blur(10px)"
          rounded="100%"
          key={i}
        >
          <Box w="full" h="full">
            <RowImage src={item.src} w="60%" h="60%" m="auto" objectFit="contain" />
          </Box>
        </AspectRatio>
      ))
  }
  , [isBaned, hasCardBack, type])

  return (
    <Box position="relative" w={props.w ?? props.width} h={props.h ?? props.height}>
      <AspectRatio ratio={1 / 1}>
        <Image
          rounded="10%"
          w="full"
          h="full"
          {...props}
          src={isBaned ? '' : props.src}
        />
      </AspectRatio>
      <Stack
        position="absolute"
        direction="column"
        top="5%"
        right="5%"
        spacing={2}
        w="8%"
        h="auto"
        minW="25px"
        maxW="30px"
        zIndex={2}>
        {icons}
      </Stack>
    </Box>
  )
}
