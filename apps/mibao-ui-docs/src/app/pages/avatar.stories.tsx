import { Story, Meta } from '@storybook/react'
import {
  Avatar as MibaoAvatar,
  AVATAR_TYPE_SET,
  AvatarProps,
  MibaoProvider
} from 'mibao-ui'
import { Stack } from '@chakra-ui/react'

export default {
  component: MibaoAvatar,
  title: 'Components/Avatar',
  argTypes: {
    type: {
      options: AVATAR_TYPE_SET,
      control: { type: 'select' }
    }
  }
} as Meta

const Template: Story<AvatarProps> = (args) =>
  <MibaoProvider>
    <Stack spacing={10} direction="row">
      <MibaoAvatar {...args} />
    </Stack>
  </MibaoProvider>

export const Avatar = Template.bind({})
Avatar.args = {
  src: 'https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif',
  size: '64px',
  type: 'token'
}
