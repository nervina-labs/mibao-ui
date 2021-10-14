import { Story, Meta } from '@storybook/react'
import {
  NftImage as MibaoNftImage,
  NftImageProps,
  MibaoProvider,
  NFT_IMAGE_TYPE_SET
} from 'mibao-ui'

export default {
  component: MibaoNftImage,
  title: 'Components/NftImage',
  argTypes: {
    type: {
      options: NFT_IMAGE_TYPE_SET,
      control: { type: 'select' }
    }
  },
  parameters: {
    fallback: 'ReactNode'
  }
} as Meta

const Template: Story<NftImageProps> = (args) =>
  <MibaoProvider>
    <div style={{ width: '200px' }}>
      <MibaoNftImage {...args} srcQueryParams={{ tid: 0 }} />
    </div>
  </MibaoProvider>

export const NftImage = Template.bind({})
NftImage.args = {
  src: 'https://images.pexels.com/photos/2635817/pexels-photo-2635817.jpeg',
  hasCardBack: true,
  rounded: '10%',
  type: 'image'
}
