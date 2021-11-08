import React from 'react'
import { Text, TextProps } from '../typography/typography'
import { useToken } from '@chakra-ui/react'

export interface NFTTitleProps extends TextProps {
  title?: string
  isBanned?: boolean
  bannedText?: string
}

export const NFTTitle: React.FC<NFTTitleProps> = ({ title, isBanned, bannedText, ...props }) => {
  const banned = useToken('locales', 'nft.banned')
  return (
    <Text
      isTruncated
      fontWeight="500"
      fontSize="16px"
      color={isBanned ? 'banned.500' : undefined}
      {...props}
    >
      {!isBanned ? title : bannedText ?? banned}
    </Text>
  )
}
