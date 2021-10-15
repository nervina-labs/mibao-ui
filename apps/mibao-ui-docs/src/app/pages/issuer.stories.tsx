import { Story, Meta } from '@storybook/react'
import {
  MibaoProvider,
  Issuer
} from 'mibao-ui'
import { Stack } from '@chakra-ui/react'

export default {
  component: Issuer,
  title: 'Components/Issuer'
} as Meta

export const AllFunction: Story = () =>
  <MibaoProvider>
    <Stack spacing={10} direction="row">
      <Issuer
        src="https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif"
        name="Goodman"
        id="0x8549248f171554b7e52bd2f521da2103436dbb3c"
        verifiedTitle="致命艺术家"
        isVerified
      />
    </Stack>
  </MibaoProvider>

export const Smaller: Story = () =>
  <MibaoProvider>
    <Stack spacing={10} direction="row">
      <Issuer
        size="50px"
        src="https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif"
        name="Goodman"
        id="0x8549248f171554b7e52bd2f521da2103436dbb3c"
        verifiedTitle="致命艺术家"
        disableCopy
      />
    </Stack>
  </MibaoProvider>

export const Online: Story = () =>
  <MibaoProvider>
    <Stack spacing={10} direction="row">
      <Issuer
        size="25px"
        src="https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif"
        name="Goodman"
        isVerified
      />
    </Stack>
  </MibaoProvider>

export const WithLink: Story = () =>
  <MibaoProvider>
    <Stack spacing={10} direction="row">
      <Issuer
        size="25px"
        src="https://goldenlegend.oss-cn-hangzhou.aliyuncs.com/production/a9017356-4ecf-4257-8345-6b14c1625ab7.gif"
        name="Goodman"
        href="https://mibao.net/issuer/47ea8b55-8dae-4cd5-9690-8995552a9201"
        isVerified={false}
      />
    </Stack>
  </MibaoProvider>
