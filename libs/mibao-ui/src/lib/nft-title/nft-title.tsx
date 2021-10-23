import React from 'react'
import { Text, TextProps } from '../typography/typography'

export interface NFTTitleProps extends TextProps {
  title?: string
  isBanned?: boolean
  bannedText?: string
}

export const NFTTitle: React.FC<NFTTitleProps> = ({ title, isBanned, bannedText, ...props }) => {
  return (
    <Text
      isTruncated
      fontWeight="500"
      fontSize="16px"
      color={isBanned ? 'banned.500' : undefined}
      {...props}
    >
      {!isBanned ? title : bannedText}
    </Text>
  )
}
