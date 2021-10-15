import { Story, Meta } from '@storybook/react'
import { MibaoProvider, Copyzone, CopyzoneProps } from 'mibao-ui'

export default {
  component: Copyzone,
  title: 'Components/Copyzone',
  argTypes: {
    value: {
      type: 'string',
      defaultValue: 'Hello World'
    },
    children: {
      type: 'string',
      defaultValue: 'Hello World'
    }
  }
} as Meta

export const Regular: Story<CopyzoneProps> = (args) => (
  <MibaoProvider>
    <Copyzone {...args} />
  </MibaoProvider>
)

export const Custom: Story = () => {
  return (
    <MibaoProvider>
      <Copyzone value="Hello world" containerProps={{ as: 'span' }}>Container as span</Copyzone>
      <Copyzone value="Hello world" color="red" fontSize="12px">Color and Font size</Copyzone>
    </MibaoProvider>
  )
}
