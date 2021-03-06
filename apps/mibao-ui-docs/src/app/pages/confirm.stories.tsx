import { Story, Meta } from '@storybook/react'
import React from 'react'
import {
  ConfirmProvider, MibaoProvider, useConfirm, Button as MibaoButton, ConfirmProps
} from 'mibao-ui'
import { Box, Code } from '@chakra-ui/react'

export default {
  component: ConfirmProvider,
  title: 'Components/Confirm',
  argTypes: {
    onConfirm: {
      action: 'onConfirm'
    },
    onCancel: {
      action: 'onCancel'
    }
  }
} as Meta

const args: ConfirmProps = {
  title: '',
  content: 'Content Content Content Content Content Content Content Content',
  confirmText: 'OK',
  cancelText: 'Cancel',
  isCentered: false
}

const OpenModalButton: React.FC<ConfirmProps> = (args) => {
  const { openModal } = useConfirm()
  return <MibaoButton onClick={() => openModal(args)}>Button</MibaoButton>
}

const Template: Story<ConfirmProps> = (args) => {
  return <MibaoProvider>
    <Box m={2}>
      <Code>
        {'const { openModal } = useConfirm()'} <br/>
        {'return <MibaoButton onClick={() => openModal(args)}>Button</MibaoButton>'}
      </Code>
    </Box>
    <ConfirmProvider>
      <OpenModalButton {...args} />
    </ConfirmProvider>
  </MibaoProvider>
}

export const Confirm = Template.bind({})
Confirm.args = args
