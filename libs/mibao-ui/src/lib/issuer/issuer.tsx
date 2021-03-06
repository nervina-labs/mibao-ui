import { Link, useToken } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarProps } from '../avatar/avatar'
import { Copyzone } from '../copyzone/copyzone'
import { BoxProps, FlexProps, Grid, Stack, Text, TextProps } from '../typography/typography'
import styles from './issuer.module.scss'

export interface IssuerProps extends Omit<AvatarProps, 'containerProps'> {
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
  isLinkExternal?: boolean
  avatarProps?: BoxProps
  containerProps?: FlexProps
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
  isLinkExternal = true,
  containerProps,
  avatarProps,
  ...avatarContainerProps
}) => {
  const anchorProps = href && !isBanned ? { as: Link, href, isExternal: isLinkExternal } : undefined
  const isOneline = id == null && verifiedTitle == null
  const banned = useToken('locales', 'issuer.banned')
  return (
    <Grid
      className={`${className ?? ''} ${styles.issuer}`}
      templateColumns="auto 1fr"
      onClick={onClick}
      h={size}
      {...anchorProps}
      {...containerProps}
    >
      <Avatar
        isVerified={isVerified}
        resizeScale={resizeScale}
        size={size}
        isBanned={isBanned}
        containerProps={{ ...{ mr: isOneline ? '4px' : '16px', my: 'auto' }, ...avatarProps }}
        {...avatarContainerProps}
      />
      <Stack spacing="4px" direction="column" justifyContent="center" overflow="hidden">
        <Text
          isTruncated
          color={isBanned ? 'banned.500' : isOneline ? 'gray.500' : undefined}
          fontSize={isOneline ? '12px' : '14px' }
          fontWeight={isOneline ? 'normal' : 500}
          {...nameProps}
        >
          {isBanned ? bannedText ?? banned : name}
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
    </Grid>
  )
}
