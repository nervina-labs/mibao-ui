import { useClipboard } from '@chakra-ui/react'
import React from 'react'
import CopiedIcon from '../icons/copied'
import CopyIcon from '../icons/copy'
import { Flex, Text, TextProps, FlexProps } from '../typography/typography'

export interface CopyzoneProps extends TextProps {
  value: string
  containerProps?: FlexProps
}

export const Copyzone: React.FC<CopyzoneProps> = ({ children, containerProps, value, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(value)
  return (
    <Flex mb={2} alignItems="center" {...containerProps}>
      <Text fontSize="13px" {...props}>{children}</Text>
      {hasCopied ? <CopiedIcon ml="8px" onClick={onCopy} /> : <CopyIcon ml="8px" cursor="pointer" onClick={onCopy} />}
    </Flex>
  )
}

export default Copyzone
