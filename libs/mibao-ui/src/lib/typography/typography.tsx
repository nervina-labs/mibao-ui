import { Heading as RawHeading, TextProps, Text as RawText, HeadingProps } from '@chakra-ui/layout'

export const Text: React.FC<TextProps> = ({ isTruncated, noOfLines, ...rest }) => {
  return (
    <RawText isTruncated={false} noOfLines={noOfLines ?? (isTruncated ? 1 : undefined)} {...rest} />
  )
}

export const Heading: React.FC<HeadingProps> = ({ isTruncated, noOfLines, ...rest }) => {
  return (
    <RawHeading isTruncated={false} noOfLines={noOfLines ?? (isTruncated ? 1 : undefined)} {...rest} />
  )
}

export * from '@chakra-ui/layout'
