import { Link } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarProps } from '../avatar/avatar'
import Copyzone from '../copyzone/copyzone'
import { Flex, Stack, Text } from '../typography/typography'

export interface IssuerProps extends AvatarProps {
  name: string
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
  disableCopy = false,
  size = '60px',
  resizeScale = 150,
  ...avatarProps
}) => {
  const anchorProps = href ? { as: Link, href, isExternal: true } : undefined
  const isOneline = id == null && verifiedTitle == null
  return (
    <Flex
      direction="row"
      alignItems="center"
      onClick={onClick}
      {...anchorProps}
    >
      <Avatar
        isVerified={isVerified}
        resizeScale={resizeScale}
        size={size}
        containerProps={{ mr: isOneline ? '4px' : '16px' }}
        {...avatarProps}
      />
      <Stack spacing="4px" direction="column" justifyContent="space-between">
        <Text isTruncated fontSize={isOneline ? '12px' : '14px' } fontWeight={isOneline ? 'normal' : 500}>
          {name}
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
