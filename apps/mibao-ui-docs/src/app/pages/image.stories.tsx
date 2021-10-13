import { Story, Meta } from '@storybook/react'
import {
  Image as MibaoImage,
  MibaoProvider
} from 'mibao-ui'
import { Skeleton, Stack } from '@chakra-ui/react'

export default {
  component: MibaoImage,
  title: 'Components/Image',
  argTypes: {
    aspectRatio: {
      defaultValue: true
    },
    objectFit: {
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      control: { type: 'select' }
    },
    loading: {
      options: ['', 'eager', 'lazy'],
      control: { type: 'select' }
    },
    crossOrigin: {
      options: ['', 'anonymous', 'use-credentials'],
      control: { type: 'select' }
    }
  },
  parameters: {
    fallback: 'ReactNode'
  }
} as Meta

const Template: Story = (args) =>
  <MibaoProvider>
    <Stack spacing={3} direction="row">
      <MibaoImage {...args} />
      <MibaoImage {...args} loader={<Skeleton width="100%" height="100%" />} />
      <MibaoImage {...args} fallback={<div>Failed</div>} />
    </Stack>
  </MibaoProvider>

export const Image = Template.bind({})
Image.args = {
  src: 'https://images.pexels.com/photos/2635817/pexels-photo-2635817.jpeg',
  alt: '',
  aspectRatio: true,
  width: '200px',
  height: '',
  objectFit: 'cover',
  crossOrigin: ''
}
