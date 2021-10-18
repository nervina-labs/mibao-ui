import React from 'react'
import { FlexProps, Flex, Stack } from '../typography/typography'
import { IssuerProps, Issuer } from '../issuer/issuer'
import { LimitProps, Limited } from '../limited/limited'
import { NFTTitle, NFTTitleProps } from '../nft-title/nft-title'
import { NftImage, NftImageProps, NftImageType } from '../nft-image/nft-image'
import { Link } from '@chakra-ui/react'
import styles from './nft-list-item.module.scss'

export interface NFTListItemProps extends FlexProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  isIssuerBanned?: boolean
  isNFTBanned?: boolean
  hasCardback?: boolean
  resizeScale?: number
  type?: NftImageType
  title?: string
  bannedText?: string
  href?: string
  srcQueryParams?: { tid: number, locale: string }
  src?: string
  locale?: string
  issuerProps: IssuerProps
  limitProps?: LimitProps
  imageProps?: NftImageProps
  titleProps?: NFTTitleProps
}

export const NFTListItem: React.FC<NFTListItemProps> = ({
  isIssuerBanned,
  isNFTBanned,
  hasCardback,
  srcQueryParams,
  imageProps,
  className,
  locale,
  resizeScale = 300,
  src,
  href,
  onClick,
  bannedText,
  title,
  issuerProps,
  limitProps,
  titleProps,
  ...rest
}) => {
  const isBanned = !!isIssuerBanned || !!isNFTBanned
  const anchorProps = href && !isBanned ? { as: Link, href, isExternal: true } : undefined

  return (
    <Flex
      className={`${className ?? ''} ${styles.item}`}
      direction="row"
      alignItems="center"
      width="full"
      onClick={onClick}
      {...anchorProps}
      {...rest}
    >
      <NftImage
        isBaned={isBanned}
        hasCardBack={hasCardback}
        src={src}
        srcQueryParams={srcQueryParams}
        borderRadius="22px"
        resizeScale={resizeScale}
        width="100px"
        {...imageProps}
      />
      <Stack ml="8px" spacing="8px" direction="column" justifyContent="space-between">
        <NFTTitle
          fontWeight="normal"
          fontSize="14px"
          noOfLines={limitProps ? undefined : 2}
          title={title}
          isBanned={isBanned}
          bannedText={bannedText}
          {...titleProps}
        />
        {limitProps ? <Limited isBaned={isBanned} {...limitProps} /> : null}
        <Issuer size="25px" isBaned={isIssuerBanned} {...issuerProps} />
      </Stack>
    </Flex>
  )
}
