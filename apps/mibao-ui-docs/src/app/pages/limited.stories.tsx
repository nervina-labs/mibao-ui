import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { MibaoProvider, Limited } from 'mibao-ui'

export default {
  component: Limited,
  title: 'Components/Limited',
  argTypes: {}
} as Meta

export const Regular: Story = () => {
  return (
    <MibaoProvider>
      <Stack>
        <Limited limitedText="限量" unlimitedText="不限量" count={12345} />
        <Limited limitedText="Limited" unlimitedText="Unlimited" locale="en" count={12345} />
        <Limited limitedText="限量" unlimitedText="不限量" count={12345} serialNumber={123} />
        <Limited limitedText="Limited" unlimitedText="Unlimited" locale="en" count={12345} serialNumber={123} />
      </Stack>
    </MibaoProvider>
  )
}
