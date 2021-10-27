import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { MibaoProvider, Textarea, TextareaProps } from 'mibao-ui'

export default {
  component: Textarea,
  title: `Components/${Textarea.name}`,
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
} as Meta

export const BasicTextarea: Story<TextareaProps> = (args) => (
  <MibaoProvider>
    <Textarea {...args} />
  </MibaoProvider>
)

export const StyledTextareas: Story<TextareaProps> = (args) => {
  const variants = ['outline', 'filled', 'flushed', 'unstyled']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {variants.map((v) => (
          <Textarea
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

export const ResizableTextareas: Story<TextareaProps> = (args) => {
  const resizes: ['horizontal', 'vertical', 'none'] = [
    'horizontal',
    'vertical',
    'none'
  ]
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {resizes.map((r) => (
          <Textarea key={r} resize={r} placeholder={`resize=${r}`} {...args} />
        ))}
      </Stack>
    </MibaoProvider>
  )
}

export const ReadonlyTextareas: Story<TextareaProps> = (args) => {
  const variants = ['outline', 'filled', 'flushed', 'unstyled']
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {variants.map((v) => (
          <Textarea
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
