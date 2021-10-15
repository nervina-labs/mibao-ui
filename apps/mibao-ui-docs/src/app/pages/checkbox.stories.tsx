import { Story, Meta } from '@storybook/react'
import {
  MibaoProvider,
  Checkbox,
  CheckboxProps,
  CheckboxGroup,
  CheckboxGroupProps
} from 'mibao-ui'
import { HStack } from '@chakra-ui/react'

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
} as Meta

export const Single: Story<CheckboxProps> = (args) => (
  <MibaoProvider>
    <Checkbox {...args}>Checkbox</Checkbox>
  </MibaoProvider>
)

export const Group: Story<CheckboxGroupProps> = (args) => (
  <MibaoProvider>
    <CheckboxGroup defaultValue={['naruto', 'kakashi']} {...args}>
      <HStack>
        <Checkbox value="naruto">Naruto</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">kakashi</Checkbox>
      </HStack>
    </CheckboxGroup>
  </MibaoProvider>
)
