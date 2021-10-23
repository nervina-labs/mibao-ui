import { Link } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarProps } from '../avatar/avatar'
import { Copyzone } from '../copyzone/copyzone'
import { Flex, Stack, Text, TextProps } from '../typography/typography'
import styles from './issuer.module.scss'

export interface IssuerProps extends AvatarProps {
  name: string
  className?: string
  nameProps?: TextProps
  isBanned?: boolean
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
  isBanned,
  bannedText,
  className,
  nameProps,
  disableCopy = false,
  size = '60px',
  resizeScale = 150,
  ...avatarProps
}) => {
  const anchorProps = href && !isBanned ? { as: Link, href, isExternal: true } : undefined
  const isOneline = id == null && verifiedTitle == null
  return (
    <Flex
      className={`${className ?? ''} ${styles.issuer}`}
      direction="row"
      alignItems="center"
      onClick={onClick}
      {...anchorProps}
    >
      <Avatar
        isVerified={isVerified}
        resizeScale={resizeScale}
        size={size}
        isBanned={isBanned}
        containerProps={{ mr: isOneline ? '4px' : '16px' }}
        {...avatarProps}
      />
      <Stack spacing="4px" direction="column" justifyContent="space-between">
        <Text
          isTruncated
          color={isBanned ? 'banned.500' : undefined}
          fontSize={isOneline ? '12px' : '14px' }
          fontWeight={isOneline ? 'normal' : 500}
          {...nameProps}
        >
          {isBanned ? bannedText : name}
        </Text>
        {id
          ? (
              disableCopy
                ? <Text fontSize="12px" color="gray.500">
                    {displayId ?? id}
                  </Text>
                : <Copyzone value={id} fontSize="12px" color="gray.500">
                    {displayId ?? id}
                  </Copyzone>
            )
          : null}
        {verifiedTitle && isVerified
          ? (
          <Text isTruncated fontSize="12px" color="gray.500">
            {verifiedTitle}
          </Text>
            )
          : null}
      </Stack>
    </Flex>
  )
}
