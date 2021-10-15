import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { Loading as L, MibaoProvider } from 'mibao-ui'

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
