import { Story, Meta } from '@storybook/react'
import { MibaoProvider, Copyzone, CopyzoneProps } from 'mibao-ui'

export default {
  component: Copyzone,
  title: 'Components/Copyzone',
  argTypes: {
    value: {
      type: 'string',
      defaultValue: 'Hello World',
      description: 'value that to be copied'
    },
    children: {
      type: 'string',
      defaultValue: 'Hello World',
      description: 'something that to be display'
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
      <Copyzone value="Hello world" color="red">Custom Color</Copyzone>
    </MibaoProvider>
  )
}
