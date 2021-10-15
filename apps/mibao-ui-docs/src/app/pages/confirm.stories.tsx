import { Story, Meta } from '@storybook/react'
import React from 'react'
import {
  ConfirmProvider, MibaoProvider, useConfirm, Button as MibaoButton
} from 'mibao-ui'

export default {
  component: ConfirmProvider,
  title: 'Components/Modal',
  argTypes: {}
} as Meta

const args = {
  title: '',
  content: 'Content Content Content Content Content Content Content Content',
  confirmText: 'OK',
  cancelText: 'Cancel'
}

const Button: React.FC<typeof args> = (args) => {
  const showModal = useConfirm()
  return <MibaoButton onClick={() => showModal(args)}>Button</MibaoButton>
}

const Template: Story<typeof args> = (args) => <MibaoProvider>
  <ConfirmProvider>
    <Button {...args} />
  </ConfirmProvider>
</MibaoProvider>

export const Confirm = Template.bind({})
Confirm.args = args
