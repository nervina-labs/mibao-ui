import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { MibaoProvider, Input, InputProps } from 'mibao-ui'

export default {
  component: Input,
  title: `Components/${Input.name}`,
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
} as Meta

export const BasicInput: Story<InputProps> = (args) => (
  <MibaoProvider>
    <Input {...args} />
  </MibaoProvider>
)

export const SizedInputs: Story<InputProps> = (args) => {
  const sizes = ['xs', 'sm', 'lg']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {sizes.map((size) => (
          <Input
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

export const StyledInputs: Story<InputProps> = (args) => {
  const variants = ['outline', 'filled', 'flushed', 'unstyled']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {variants.map((v) => (
          <Input key={v} variant={v} placeholder={`variant=${v}`} {...args} />
        ))}
      </Stack>
    </MibaoProvider>
  )
}

export const ReadonlyInput: Story<InputProps> = (args) => {
  const variants = ['outline', 'filled', 'flushed', 'unstyled']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {variants.map((v) => (
          <Input
            isReadOnly
            key={v}
            variant={v}
            placeholder={`variant=${v}`}
            {...args}
          />
        ))}
      </Stack>
    </MibaoProvider>
  )
}
