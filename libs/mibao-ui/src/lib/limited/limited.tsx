import { useToken } from '@chakra-ui/system'
import React, { useMemo } from 'react'
import { formatCount } from '../../utils'
import { TextProps, Text } from '../typography/typography'

export interface LimitProps extends TextProps {
  count: number | string
  serialNumber?: number
  limitedText?: string
  unlimitedText?: string
  isBaned?: boolean
  locale?: string
}

export const Limited: React.FC<LimitProps> = ({ count, serialNumber, limitedText, unlimitedText, isBaned, locale = 'zh', ...rest }) => {
  const isUnlimited = count === '0' || count === 0
  const [limitedToken, unlimitedToken] = useToken('locales', ['nft.limited', 'nft.unlimited'])
  const unlimitedDesc: string = unlimitedText ?? unlimitedToken
  const limitedDesc: string = limitedText ?? limitedToken
  const content = useMemo(() => {
    const no = serialNumber != null ? `#${serialNumber} / ` : ''
    return (
      no +
      (isUnlimited
        ? unlimitedDesc
        : `${limitedDesc} ${formatCount(
            Number(count),
            locale
          )}`)
    )
  }, [count, isUnlimited, locale, limitedDesc, serialNumber, unlimitedDesc])

  if (isBaned) {
    return null
  }

  return <Text whiteSpace="nowrap" color="gray.500" fontSize="12px" {...rest}>
    {content}
  </Text>
}
