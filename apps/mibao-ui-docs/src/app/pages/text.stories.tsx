import { Story, Meta } from '@storybook/react'
import { MibaoProvider, Text, Stack, Box } from 'mibao-ui'

export default {
  component: Text,
  title: 'Components/Typography',
  argTypes: {}
} as Meta

export const TextWithSize: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="5xl">(5xl) In love with React & Next</Text>
        <Text fontSize="4xl">(4xl) In love with React & Next</Text>
        <Text fontSize="3xl">(3xl) In love with React & Next</Text>
        <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
      </Stack>
    </MibaoProvider>
  )
}

const longText = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'

export const TruncateText: Story = () => {
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        <Box width="300px" border="1px solid #666" padding="10px">
          <Text isTruncated>{longText}</Text>
        </Box>
        <Box width="300px" border="1px solid #666" padding="10px">
          <Text noOfLines={2}>{longText}</Text>
        </Box>
      </Stack>
    </MibaoProvider>
  )
}

export const OverrideElement: Story = () => {
  return (
    <MibaoProvider>
      <Text as="span">Span</Text>
      <br />
      <Text as="i">Italic</Text>
      <br />
      <Text as="u">Underline</Text>
      <br />
      <Text as="abbr">I18N</Text>
      <br />
      <Text as="cite">Citation</Text>
      <br />
      <Text as="del">Deleted</Text>
      <br />
      <Text as="em">Emphasis</Text>
      <br />
      <Text as="ins">Inserted</Text>
      <br />
      <Text as="kbd">Ctrl + C</Text>
      <br />
      <Text as="mark">Highlighted</Text>
      <br />
      <Text as="s">Strikethrough</Text>
      <br />
      <Text as="samp">Sample</Text>
      <br />
      <Text as="sub">sub</Text>
      <br />
      <Text as="sup">sup</Text>
    </MibaoProvider>
  )
}
