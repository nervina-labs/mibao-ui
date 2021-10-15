import { Story, Meta } from '@storybook/react'
import React, { useCallback, useState } from 'react'
import {
  MibaoProvider,
  Button as MibaoButton,
  ButtonProps,
  ButtonGroup
} from 'mibao-ui'
import { Box, Icon } from '@chakra-ui/react'

export default {
  component: MibaoButton,
  title: 'Components/Button',
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    variant: {
      options: ['link', 'outline', 'solid', 'ghost', 'unstyled'],
      control: { type: 'select' }
    }
  }
} as Meta

const SubmitButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const onClick = useCallback(() => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [isLoading])

  return <MibaoButton isLoading={isLoading} loadingText="Submitting" onClick={onClick}>Submit</MibaoButton>
}

const Template: Story<ButtonProps> = (args) => <MibaoProvider>
  <h1>Controls Button</h1>

  <MibaoButton {...args}>Button</MibaoButton>

  <Box mt={6}>
    <h2>Button Style</h2>
    <ButtonGroup spacing={4} mt={2}>
      <MibaoButton variant="solid">Primary</MibaoButton>
      <MibaoButton variant="outline">Default</MibaoButton>
      <MibaoButton variant="ghost">Ghost</MibaoButton>
      <MibaoButton variant="link">Link</MibaoButton>
      <MibaoButton variant="unstyled">Unstyled</MibaoButton>
    </ButtonGroup>
  </Box>

  <Box mt={6}>
    <h2>Button Status</h2>
    <ButtonGroup spacing={6} mt={2}>
      <MibaoButton isLoading>
        Email
      </MibaoButton>
      <SubmitButton />
      <MibaoButton disabled>
        Disabled
      </MibaoButton>
    </ButtonGroup>
  </Box>

  <Box mt={6}>
    <h3>Button Icon</h3>
    <ButtonGroup spacing={6} mt={2}>
      <MibaoButton leftIcon={<Icon />}>
        Button
      </MibaoButton>
      <MibaoButton rightIcon={<Icon />}>
        Button
      </MibaoButton>
    </ButtonGroup>
  </Box>

  <Box mt={6}>
    <h3>Button Size</h3>
    <ButtonGroup spacing={6} mt={2}>
      <MibaoButton size="xs">
        Button XS
      </MibaoButton>

      <MibaoButton size="sm">
        Button SM
      </MibaoButton>

      <MibaoButton size="md">
        Button MD
      </MibaoButton>

      <MibaoButton size="lg">
        Button LG
      </MibaoButton>
    </ButtonGroup>

    <Box mt={2}>
      <MibaoButton isFullWidth>
        Button isFullWidth
      </MibaoButton>
    </Box>
  </Box>

  <Box mt={6}>
    <h3>Button Colors</h3>

    <Box m={3} />

    <p>Danger</p>
    <ButtonGroup spacing={6} mt={2} mb={4}>
      <MibaoButton variant="solid" colorScheme="red">Primary</MibaoButton>
      <MibaoButton variant="outline" colorScheme="red">Default</MibaoButton>
      <MibaoButton variant="ghost" colorScheme="red">Ghost</MibaoButton>
      <MibaoButton variant="link" colorScheme="red">Link</MibaoButton>
    </ButtonGroup>

    <p>Primary Color</p>
    <ButtonGroup spacing={6} mt={2} mb={4}>
      <MibaoButton variant="solid" colorScheme="primary">Primary</MibaoButton>
      <MibaoButton variant="outline" colorScheme="primary">Default</MibaoButton>
      <MibaoButton variant="ghost" colorScheme="primary">Ghost</MibaoButton>
      <MibaoButton variant="link" colorScheme="primary">Link</MibaoButton>
    </ButtonGroup>
  </Box>
</MibaoProvider>

export const Button = Template.bind({})
Button.args = {
  size: 'md',
  variant: 'outline',
  isLoading: false,
  disabled: false,
  loadingText: '',
  isFullWidth: false
}
