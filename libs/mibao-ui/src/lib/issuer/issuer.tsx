import { Link } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarProps } from '../avatar/avatar'
import Copyzone from '../copyzone/copyzone'
import { Flex, Stack, Text, TextProps } from '../typography/typography'

export interface IssuerProps extends AvatarProps {
  name: string
  className?: string
  nameProps?: TextProps
  isBaned?: boolean
  bannedText?: string
  id?: string
  verifiedTitle?: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  disableCopy?: boolean
  displayId?: string
}

export const Issuer: React.FC<IssuerProps> = ({
  name,
  id,
  verifiedTitle,
  isVerified,
  href,
  onClick,
  displayId,
  isBaned,
  bannedText,
  className,
  nameProps,
  disableCopy = false,
  size = '60px',
  resizeScale = 150,
  ...avatarProps
}) => {
  const anchorProps = href && !isBaned ? { as: Link, href, isExternal: true } : undefined
  const isOneline = id == null && verifiedTitle == null
  return (
    <Flex
      className={className}
      direction="row"
      alignItems="center"
      onClick={onClick}
      {...anchorProps}
    >
      <Avatar
        isVerified={isVerified}
        resizeScale={resizeScale}
        size={size}
        isBaned={isBaned}
        containerProps={{ mr: isOneline ? '4px' : '16px' }}
        {...avatarProps}
      />
      <Stack spacing="4px" direction="column" justifyContent="space-between">
        <Text
          isTruncated
          color={isBaned ? 'banned.main' : undefined}
          fontSize={isOneline ? '12px' : '14px' }
          fontWeight={isOneline ? 'normal' : 500}
          {...nameProps}
        >
          {isBaned ? bannedText : name}
        </Text>
        {id
          ? (
              disableCopy
                ? <Text fontSize="12px" color="gray.main">
                    {displayId ?? id}
                  </Text>
                : <Copyzone value={id} fontSize="12px" color="gray.main">
                    {displayId ?? id}
                  </Copyzone>
            )
          : null}
        {verifiedTitle && isVerified
          ? (
          <Text isTruncated value={id} fontSize="12px" color="gray.main">
            {verifiedTitle}
          </Text>
            )
          : null}
      </Stack>
    </Flex>
  )
}
