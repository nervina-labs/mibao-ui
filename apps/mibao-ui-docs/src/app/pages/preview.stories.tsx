import { Story, Meta } from '@storybook/react'
import {
  MibaoProvider,
  Preview as MibaoPreview
} from 'mibao-ui'
import { Image, useDisclosure } from '@chakra-ui/react'

export default {
  component: MibaoPreview,
  title: 'Components/Preview',
  argTypes: {}
} as Meta

const imgSrc = 'https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif'
const audioSrc = 'https://oss.jinse.cc/production/1b17d121-ffaa-4ef9-9d61-cdc287dadd8c.wav'

export const Preview: Story = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MibaoProvider>
      <Image src={imgSrc} onClick={onOpen} />
      <MibaoPreview
        isOpen={isOpen}
        onClose={onClose}
        bgImgUrl={imgSrc}
        renderer={imgSrc}
      />
    </MibaoProvider>
  )
}

export const Audio: Story = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MibaoProvider>
      <Image src={imgSrc} onClick={onOpen} />
      <MibaoPreview
        isOpen={isOpen}
        onClose={onClose}
        bgImgUrl={imgSrc}
        renderer={audioSrc}
        type="audio"
      />
    </MibaoProvider>
  )
}
