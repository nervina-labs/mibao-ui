import { Story, Meta } from '@storybook/react'
import {
  Image as MibaoImage,
  MibaoProvider
} from 'mibao-ui'
import { Spinner, Stack } from '@chakra-ui/react'
import { useEffect, useState } from '@storybook/addons'

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
      <MibaoImage {...args} loader={<Spinner color="primary.600" emptyColor="gray.200" m="auto" />} />
      <MibaoImage {...args} fallback={<div>Failed</div>} />
    </Stack>
  </MibaoProvider>

export const Image = Template.bind({})
Image.args = {
  src: 'https://oss.jinse.cc/production/bd7c7508-026e-4fcd-abf8-1fa1061f4d6c.png',
  alt: '',
  aspectRatio: true,
  width: '200px',
  height: '',
  objectFit: 'cover',
  crossOrigin: '',
  disableContextMenu: false,
  resizeScale: 200,
  webp: false
}

export const AsyncLoadingImage: Story = (args) => {
  const [src, setSrc] = useState<string | undefined>(undefined)
  useEffect(() => {
    const timer = setTimeout(() => setSrc('https://oss.jinse.cc/production/6e3a54bf-1bbb-4c49-b5ae-b66031252357.png'), 2000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <MibaoProvider>
      <MibaoImage src={src} />
    </MibaoProvider>
  )
}
