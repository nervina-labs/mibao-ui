import { Heading as RawHeading, TextProps, Text as RawText, HeadingProps } from '@chakra-ui/react'

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

export {
  AbsoluteCenter,
  AbsoluteCenterProps,
  AspectRatio,
  AspectRatioProps,
  Badge,
  BadgeProps,
  Box,
  BoxProps,
  Center,
  CenterProps,
  Circle,
  Code,
  CodeProps,
  Container,
  ContainerProps,
  Divider,
  DividerProps,
  Flex,
  FlexOptions,
  FlexProps,
  Grid,
  GridItem,
  GridItemProps,
  GridOptions,
  GridProps,
  HStack,
  HeadingProps,
  Kbd,
  KbdProps,
  Link,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  LinkOverlayProps,
  LinkProps,
  List,
  ListIcon,
  ListItem,
  ListItemProps,
  ListProps,
  OrderedList,
  SimpleGrid,
  SimpleGridProps,
  Spacer,
  SpacerProps,
  Square,
  SquareProps,
  Stack,
  StackDirection,
  StackDivider,
  StackDividerProps,
  StackItem,
  StackProps,
  TextProps,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
  WrapItemProps,
  WrapProps
} from '@chakra-ui/react'
