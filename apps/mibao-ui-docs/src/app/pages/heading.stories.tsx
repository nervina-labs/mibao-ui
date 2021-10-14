import { Story, Meta } from '@storybook/react'
import { MibaoProvider, Stack, Heading } from 'mibao-ui'

export default {
  component: Heading,
  title: 'Components/Typography',
  argTypes: {}
} as Meta

export const HeadingWithSize: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing={3} width="500px" border="1px solid #666" padding="20px">
        <Heading as="h1" size="4xl" isTruncated>
          (4xl) Truncated In love with React & Next
        </Heading>
        <Heading as="h2" size="3xl" isTruncated>
          (3xl) Truncated In love with React & Next
        </Heading>
        <Heading as="h2" size="2xl">
          (2xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="xl">
          (xl) In love with React & Next
        </Heading>
        <Heading as="h3" size="lg">
          (lg) In love with React & Next
        </Heading>
        <Heading as="h4" size="md">
          (md) In love with React & Next
        </Heading>
        <Heading as="h5" size="sm">
          (sm) In love with React & Next
        </Heading>
        <Heading as="h6" size="xs">
          (xs) In love with React & Next
        </Heading>
      </Stack>
    </MibaoProvider>
  )
}
