import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { MibaoProvider, Radio, RadioGroup, RadioGroupProps } from 'mibao-ui'

export default {
  component: Radio,
  title: `Components/${Radio.name}`,
  argTypes: {
    onChange: {
      action: 'onChange'
    },
    value: { defaultValue: 'first' }
  }
} as Meta

export const Group: Story<RadioGroupProps> = (args) => (
  <MibaoProvider>
    <RadioGroup {...args}>
      <Stack direction="row">
        {['first', 'second', 'third'].map((value) => (
          <Radio key={value} value={value}>
            {value}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  </MibaoProvider>
)
