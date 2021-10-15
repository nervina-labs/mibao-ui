import { Story, Meta } from '@storybook/react'
import { MibaoProvider, Drawer as T, DrawerProps } from 'mibao-ui'

export default {
  component: T,
  title: `Components/${T.name}`,
  argTypes: {
    isOpen: {
      type: 'boolean',
      defaultValue: false
    },
    placement: {
      type: 'enum',
      defaultValue: 'right',
      options: ['left', 'right', 'top', 'bottom'],
      controls: 'select'
    },
    hasOverlay: {
      type: 'boolean',
      defaultValue: false
    },
    hasCloseBtn: {
      type: 'boolean',
      defaultValue: false
    },
    rounded: {
      type: 'enum',
      defaultValue: 'md',
      options: ['none', 'md', 'lg', 'xl'],
      controls: 'select'
    },
    header: {
      type: 'object',
      defaultValue: 'undefined',
      description: 'Set drawer header',
      options: ['react node', 'undefined'],
      mapping: {
        'react node': <div>Drawer Header</div>,
        undefined: undefined
      },
      controls: 'select'
    },
    footer: {
      type: { name: 'React.ReactNode', required: false },
      defaultValue: 'undefined',
      description: 'Set drawer footer',
      options: ['react node', 'undefined'],
      mapping: {
        'react node': <div>Drawer Footer</div>,
        undefined: undefined
      },
      controls: 'select'
    },
    onClose: {
      action: 'onClose'
    }
  }
} as Meta

export const Drawers: Story<DrawerProps> = (args) => (
  <MibaoProvider>
    <T {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </T>
  </MibaoProvider>
)
