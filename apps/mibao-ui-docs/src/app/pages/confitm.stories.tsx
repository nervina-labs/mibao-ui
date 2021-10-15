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

const Button: React.FC = () => {
  const showModal = useConfirm()
  return <MibaoButton onClick={() => showModal({ content: 'Content' })}>Button</MibaoButton>
}

const Template: Story = (args) => <MibaoProvider>
  <ConfirmProvider>
    <Button />
  </ConfirmProvider>
</MibaoProvider>

export const Confirm = Template.bind({})
Confirm.args = { }
