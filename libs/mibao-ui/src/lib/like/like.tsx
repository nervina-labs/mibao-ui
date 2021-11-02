import React, { useMemo } from 'react'
import { formatCount } from '../../utils'
import { LikeIcon } from '../icons/like'
import { UnlikeIcon } from '../icons/unlike'
import { Loading } from '../loading/loading'
import { Flex, Text, TextProps } from '../typography/typography'

export interface LikeProps extends TextProps {
  likeCount: number
  isLiked: boolean
  isBaned?: boolean
  isLoading?: boolean
  className?: string
  locale?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Like: React.FC<LikeProps> = ({ isLiked, isLoading, className, onClick, locale, likeCount, isBaned, ...props }) => {
  const icon = useMemo(() => {
    if (isLoading) {
      return <Loading width="16px" />
    }
    return isLiked ? <LikeIcon /> : <UnlikeIcon />
  }, [isLiked, isLoading])

  if (isBaned) {
    return null
  }

  return (
    <Flex
      className={className}
      direction="row"
      alignItems="center"
      cursor={onClick ? 'pointer' : undefined}
      onClick={onClick}
    >
      {icon}
      <Text color="gray.500" fontSize="12px" ml="6px" {...props}>
        {formatCount(likeCount, locale)}
      </Text>
    </Flex>
  )
}
