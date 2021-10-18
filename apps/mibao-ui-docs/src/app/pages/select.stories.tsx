import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { MibaoProvider, Select, SelectProps } from 'mibao-ui'

export default {
  component: Select,
  title: `Components/${Select.name}`,
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
} as Meta

export const BasicSelect: Story<SelectProps> = (args) => (
  <MibaoProvider>
    <Select {...args}>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </Select>
  </MibaoProvider>
)

export const SizedSelects: Story<SelectProps> = (args) => {
  const sizes = ['xs', 'sm', 'lg']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {sizes.map((size) => (
          <Select
            key={size}
            size={size}
            placeholder={`size=${size}`}
            {...args}
          />
        ))}
      </Stack>
    </MibaoProvider>
  )
}

export const StyledSelects: Story<SelectProps> = (args) => {
  const variants = ['outline', 'filled', 'flushed', 'unstyled']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {variants.map((v) => (
          <Select key={v} variant={v} placeholder={`variant=${v}`} {...args} />
        ))}
      </Stack>
    </MibaoProvider>
  )
}
