import { Story, Meta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { MibaoProvider, Alert, AlertStatus } from 'mibao-ui'

export default {
  component: Alert,
  title: `Components/${Alert.name}`,
  argTypes: {
    statusList: { defaultValue: ['success', 'info', 'warning', 'error'] }
  }
} as Meta

export const Alerts: Story<{ statusList: AlertStatus[] }> = ({
  statusList
}) => {
  return (
    <MibaoProvider>
      <Stack spacing={3}>
        {statusList.map((status) => (
          <Alert
            key={status}
            status={status}
            title={'Title'}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        ))}
      </Stack>
    </MibaoProvider>
  )
}
