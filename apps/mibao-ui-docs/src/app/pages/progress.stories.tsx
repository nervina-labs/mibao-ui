import { Story, Meta } from '@storybook/react'
import { Progress as P, MibaoProvider } from 'mibao-ui'
import { Stack } from '@chakra-ui/react'

export default {
  component: P,
  title: 'Components/Progress',
  argTypes: {
  }
} as Meta

export const Progress: Story = () => <MibaoProvider>
  <Stack spacing="3" padding="10px">
    <P value={20} />
    <P value={40} />
    <P value={60} />
    <P value={80} />
    <P value={100} />
  </Stack>
</MibaoProvider>
