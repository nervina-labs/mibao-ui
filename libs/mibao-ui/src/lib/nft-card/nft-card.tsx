import React, { useMemo } from 'react'
import { Link } from '@chakra-ui/react'
import { IssuerProps, Issuer } from '../issuer/issuer'
import { LikeProps, Like } from '../like/like'
import { LimitProps, Limited } from '../limited/limited'
import { NftImage, NftImageProps, NftImageType } from '../nft-image/nft-image'
import { Flex, Text, FlexProps } from '../typography/typography'
import { NFTTitle, NFTTitleProps } from '../nft-title/nft-title'
import styles from './nft-card.module.scss'

export interface NFTCardProps extends FlexProps {
  isIssuerBanned?: boolean
  isNFTBanned?: boolean
  className?: string
  hasCardback?: boolean
  resizeScale?: number
  title?: string
  bannedText?: string
  href?: string
  price?: React.ReactNode
  srcQueryParams?: { tid: number, locale: string }
  type?: NftImageType
  src?: string
  locale?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  issuerProps?: IssuerProps
  limitProps?: LimitProps
  likeProps?: LikeProps
  imageProps?: NftImageProps
  titleProps?: NFTTitleProps
}

export const NFTCard: React.FC<NFTCardProps> = ({
  isIssuerBanned,
  isNFTBanned,
  hasCardback,
  srcQueryParams,
  imageProps,
  className,
  locale,
  resizeScale = 300,
  src,
  price,
  href,
  type,
  onClick,
  bannedText,
  title,
  likeProps,
  issuerProps,
  limitProps,
  titleProps,
  ...rest
}) => {
  const isBanned = !!isIssuerBanned || !!isNFTBanned
  const anchorProps = href && !isBanned ? { as: Link, href, isExternal: true } : undefined

  const info = useMemo(() => {
    if (likeProps && issuerProps && limitProps) {
      return (
        <>
          <Issuer size="25px" isBanned={isIssuerBanned} {...issuerProps} />
          <Flex mt="6px" direction="row" alignItems="center" justifyContent="space-between">
            <Limited locale={locale} isBaned={isBanned} {...limitProps} />
            <Like isBaned={isBanned} {...likeProps} />
          </Flex>
        </>
      )
    }
    if (price) {
      return (
        <Flex direction="row" alignItems="center" justifyContent="space-between">
          <Text fontWeight="500" fontSize="16px">{price}</Text>
          {likeProps ? <Like isBaned={isBanned} {...likeProps} /> : null}
        </Flex>
      )
    }
    if (issuerProps && likeProps) {
      return (
        <Flex direction="row" alignItems="center" justifyContent="space-between">
          <Issuer size="25px" isBanned={isIssuerBanned} {...issuerProps} />
          <Like isBaned={isBanned} {...likeProps} />
        </Flex>
      )
    }
    if (issuerProps && limitProps) {
      return (
        <Flex direction="row" alignItems="center" justifyContent="space-between">
          <Issuer size="25px" isBanned={isIssuerBanned} {...issuerProps} />
          <Limited locale={locale} isBaned={isBanned} {...limitProps} />
        </Flex>
      )
    }
    return null
  }, [isBanned, isIssuerBanned, issuerProps, likeProps, limitProps, price, locale])

  return (
    <Flex
      direction="column"
      spacing={0}
      className={`${styles.card} ${className ?? ''}`}
      onClick={onClick}
      {...anchorProps}
      {...rest}
    >
      <NftImage
        isBaned={isBanned}
        hasCardBack={hasCardback}
        src={src}
        srcQueryParams={srcQueryParams}
        type={type}
        borderRadius="30px"
        resizeScale={resizeScale}
        {...imageProps}
      />
      <NFTTitle mt="16px" mb="8px" title={title} isBanned={isBanned} bannedText={bannedText} {...titleProps} />
      {info}
    </Flex>
  )
}
