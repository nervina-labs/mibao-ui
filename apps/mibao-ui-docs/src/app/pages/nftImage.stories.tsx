import { Story, Meta } from '@storybook/react'
import {
  NftImage as MibaoNftImage,
  NftImageProps,
  MibaoProvider,
  NFT_IMAGE_TYPE_SET,
  Flex
} from 'mibao-ui'
import React, { useState, useCallback } from 'react'

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

const Template: Story<NftImageProps> = (args) => {
  const [size, setSize] = useState(200)

  const handleSliderChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setSize(parseInt(event.target.value, 10))
  }, [setSize])

  return (
    <MibaoProvider>
       <input
        type="range"
        min="100"
        max="1000"
        value={size}
        onChange={handleSliderChange}
      />

      <div style={{ width: `${size}px` }}>
        <MibaoNftImage {...args} />
      </div>
    </MibaoProvider>
  )
}

export const NftImage = Template.bind({})
NftImage.args = {
  src: 'https://images.pexels.com/photos/2635817/pexels-photo-2635817.jpeg',
  hasCardBack: true,
  rounded: '10%',
  type: 'image'
}

export const ManyNftImage: Story = () => {
  return (
    <MibaoProvider>
      <Flex wrap="wrap">
        {
          new Array(40).fill(0).map(() => (
            <MibaoNftImage
              w="300px"
              h="300px"
              src="https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif"
              type="three_d"
              hasCardBack
            />
          ))
        }
      </Flex>

    </MibaoProvider>
  )
}
