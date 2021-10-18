import React, { useMemo } from 'react'
import { formatCount } from '../../utils'
import { TextProps, Text } from '../typography/typography'

export interface LimitProps extends TextProps {
  count: number | string
  serialNumber?: number
  limitedText: string
  unlimitedText: string
  isBaned?: boolean
  locale?: string
}

export const Limited: React.FC<LimitProps> = ({ count, serialNumber, limitedText, unlimitedText, isBaned, locale = 'zh', ...rest }) => {
  const isUnlimited = count === '0' || count === 0
  const content = useMemo(() => {
    const no = serialNumber != null ? `#${serialNumber} / ` : ''
    return (
      no +
      (isUnlimited
        ? unlimitedText
        : `${limitedText} ${formatCount(
            Number(count),
            locale
          )}`)
    )
  }, [count, isUnlimited, locale, limitedText, serialNumber, unlimitedText])

  if (isBaned) {
    return null
  }

  return <Text color="gray.main" fontSize="12px" {...rest}>
    {content}
  </Text>
}
