import { Story, Meta } from '@storybook/react'
import {
  MibaoProvider,
  Preview as MibaoPreview
} from 'mibao-ui'
import { Image, useDisclosure } from '@chakra-ui/react'
import { ThreeDPreview } from '../../components/three-d'

export default {
  component: MibaoPreview,
  title: 'Components/Preview',
  argTypes: {}
} as Meta

const imgSrc = 'https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif'
const audioSrc = 'https://oss.jinse.cc/production/1b17d121-ffaa-4ef9-9d61-cdc287dadd8c.wav'
const videoSrc = 'https://oss.jinse.cc/production/583b109e-1fc3-42bd-937f-f4935ae80167.mp4'
const threeDSrc = 'https://oss.jinse.cc/production/35ab636d-8340-4349-ae19-a929c4732f95.glb'

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
        render3D={(renderer) => <ThreeDPreview src={renderer} />}
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
        render3D={(renderer) => <ThreeDPreview src={renderer} />}
      />
    </MibaoProvider>
  )
}

export const Video: Story = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MibaoProvider>
      <Image src={imgSrc} onClick={onOpen} />
      <MibaoPreview
        isOpen={isOpen}
        onClose={onClose}
        bgImgUrl={imgSrc}
        renderer={videoSrc}
        type="video"
        render3D={(renderer) => <ThreeDPreview src={renderer} />}
      />
    </MibaoProvider>
  )
}

export const ThreeD: Story = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MibaoProvider>
      <Image src={imgSrc} onClick={onOpen} />
      <MibaoPreview
        isOpen={isOpen}
        onClose={onClose}
        bgImgUrl={imgSrc}
        renderer={threeDSrc}
        type="3d"
        render3D={(renderer) => <ThreeDPreview src={renderer} />}
      />
    </MibaoProvider>
  )
}
