import { Story, Meta } from '@storybook/react'
import { Stack, Text } from '@chakra-ui/react'
import { Like, MibaoProvider } from 'mibao-ui'
import { useCallback, useState } from 'react'

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

export const Clickable: Story = () => {
  const [isLoading, setLoading] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const onLike = useCallback(
    () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setIsLiked((l) => !l)
      }, 2000)
    },
    []
  )

  return (
    <MibaoProvider>
      <Stack>
        <Like likeCount={12345} isLiked={isLiked} isLoading={isLoading} onClick={onLike} />
        <Text>Hello</Text>
      </Stack>
    </MibaoProvider>
  )
}
