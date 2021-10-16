import { Meta, Story } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import { MibaoProvider, Button, useToast } from 'mibao-ui'

export default {
  title: 'Components/Toast'
} as Meta

export const Toast: Story = () => {
  const [setToast, Toast] = useToast()
  return (
    <MibaoProvider>
      <Button
        onClick={() => {
          setToast(
            <Box color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          )
        }}
      >
        Toast React Component
      </Button>
      <Button onClick={() => setToast('toast string')}>Toast String</Button>
      <Toast />
    </MibaoProvider>
  )
}
