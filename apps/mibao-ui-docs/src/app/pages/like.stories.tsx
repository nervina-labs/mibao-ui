import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { Like, MibaoProvider } from 'mibao-ui'

export default {
  component: Like,
  title: 'Components/Like',
  argTypes: {}
} as Meta

export const Regular: Story = () => {
  return (
    <MibaoProvider>
      <Stack>
        <Like likeCount={12345} isLiked />
        <Like likeCount={12345} isLiked={false} />
        <Like likeCount={12345} isLiked locale="zh" />
        <Like likeCount={12345} isLiked={false} locale="zh" />
      </Stack>
    </MibaoProvider>
  )
}
