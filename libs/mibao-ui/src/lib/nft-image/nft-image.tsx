import React, { useMemo } from 'react'
import { ImageProps, Image } from '../image/image'
import { AspectRatio, Box, Stack, useToken } from '@chakra-ui/react'
import { ReactComponent as CardbackSvg } from '../../../assets/images/cardback-icon.svg'
import { ReactComponent as VideoSvg } from '../../../assets/images/video-icon.svg'
import { ReactComponent as AudioSvg } from '../../../assets/images/audio-icon.svg'
import { ReactComponent as ThreeDSvg } from '../../../assets/images/3d-icon.svg'
import { Tooltip } from '../tooltip/tooltip'
import styles from './nft-image.module.scss'

export const NFT_IMAGE_TYPE_SET = ['image', 'video', 'audio', '3d', 'three_d'] as const
export type NftImageType = typeof NFT_IMAGE_TYPE_SET[number]

export interface NftImageProps extends Omit<ImageProps, 'srcQueryParams'> {
  type?: NftImageType
  hasCardBack?: boolean
  srcQueryParams?: { tid: number, locale: string }
  isBaned?: boolean
  isCardBackTooltipLabel?: boolean
}

export const NftImage: React.FC<NftImageProps> = ({
  isBaned,
  hasCardBack,
  type,
  isCardBackTooltipLabel: useCardBackTooltipLabel = true,
  ...props
}) => {
  const cardBackTooltipLabel = useToken('locales', 'nft.cardBackTooltips')
  const icons = useMemo(() => {
    if (isBaned) {
      return null
    }
    return [
      {
        show: hasCardBack,
        Comp: CardbackSvg,
        isCardBack: true
      },
      {
        show: type === 'video',
        Comp: VideoSvg
      },
      {
        show: type === 'audio',
        Comp: AudioSvg
      },
      {
        show: type === '3d' || type === 'three_d',
        Comp: ThreeDSvg
      }
    ]
      .filter(item => item.show)
      .map((item, i) => {
        return (
          <AspectRatio
            w="full"
            h="full"
            ratio={1 / 1}
            bg="rgba(0, 0, 0, 0.7)"
            className={styles.icon}
            cursor={item.isCardBack ? 'pointer' : undefined}
            rounded="100%"
            key={i}
          >
            {item.isCardBack && useCardBackTooltipLabel
              ? (<Tooltip hasArrow label={cardBackTooltipLabel} placement="top">
                  <item.Comp />
                </Tooltip>)
              : <item.Comp />
            }
          </AspectRatio>
        )
      })
  }
  , [isBaned, hasCardBack, type, useCardBackTooltipLabel, cardBackTooltipLabel])

  const fallbackSrc = useToken('fallbacks', 'nft')

  return (
    <Box position="relative" w={props.w ?? props.width} h={props.h ?? props.height}>
      <AspectRatio ratio={1 / 1} w={props.w ?? props.width} h={props.h ?? props.height}>
        <Image
          rounded="10%"
          w="full"
          h="full"
          fallbackSrc={fallbackSrc}
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
