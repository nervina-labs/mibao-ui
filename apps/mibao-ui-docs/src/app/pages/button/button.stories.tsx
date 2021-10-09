import { Story, Meta } from '@storybook/react';
import { ButtonProps, Button as MibaoUiButton, ButtonTypeSet, ButtonSizeSet } from 'mibao-ui';

export default {
  component: MibaoUiButton,
  title: 'Components/Button',
  argTypes: {
    uiType: {
      options: ButtonTypeSet,
      control: { type: 'radio' }
    },
    size: {
      options: ButtonSizeSet,
      control: { type: 'radio' }
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <MibaoUiButton {...args}>Button</MibaoUiButton>;

export const Button = Template.bind({});
Button.args = {
  block: false,
  disabled: false,
  outline: false,
  uiType: 'Primary',
  size: 'Middle',
};
