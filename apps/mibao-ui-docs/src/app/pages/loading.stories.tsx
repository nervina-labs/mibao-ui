import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import {
  Box,
  Loading as L,
  MibaoProvider,
  SkeletonCircle as MibaoSkeletonCircle,
  SkeletonText as MibaoSkeletonText,
  Skeleton as MibaoSkeleton
} from 'mibao-ui'

export default {
  component: L,
  title: 'Components/Loading',
  argTypes: {}
} as Meta

export const Loading: Story = () => {
  return (
    <MibaoProvider>
      <L />
    </MibaoProvider>
  )
}

export const SpinnerWithColor: Story = () => {
  return (
    <MibaoProvider>
      <L color="red.500" />
    </MibaoProvider>
  )
}

export const SpinnerWithDifferentSize: Story = () => {
  return (
    <MibaoProvider>
      <Stack direction="row" spacing={4}>
        <L size="xs" />
        <L size="sm" />
        <L size="md" />
        <L size="lg" />
        <L size="xl" />
      </Stack>
    </MibaoProvider>
  )
}

export const Skeleton: Story = () => {
  return <MibaoProvider>
      <Stack>
      <MibaoSkeleton height="20px" />
      <MibaoSkeleton height="20px" />
      <MibaoSkeleton height="20px" />
    </Stack>
  </MibaoProvider>
}

export const SkeletonText: Story = () => {
  return <MibaoProvider>
    <Box padding="6" boxShadow="lg" bg="white">
      <MibaoSkeletonCircle size="10" />
      <MibaoSkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  </MibaoProvider>
}
