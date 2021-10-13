import { Story, Meta } from '@storybook/react'
import { Button, PlacementWithLogical, Grid } from '@chakra-ui/react'
import { MibaoProvider, Tooltip as T } from 'mibao-ui'

export default {
  component: T,
  title: `Components/${T.name}`,
  argTypes: {}
} as Meta

export const Placements: Story = () => {
  const prefixList = ['auto', 'top', 'right', 'bottom', 'left']
  const suffixList = ['start', 'end']
  const placements = prefixList
    .map((prefix) => [
      prefix,
      suffixList.map((suffix) => `${prefix}-${suffix}`)
    ])
    .flat(suffixList.length) as PlacementWithLogical[]

  return (
    <MibaoProvider>
      <Grid templateColumns="repeat(3, 1fr)" gap={60}>
        {placements.map((p) => (
          <T key={p} label={p} placement={p} defaultIsOpen={true}>
            <Button>{p}</Button>
          </T>
        ))}
      </Grid>
    </MibaoProvider>
  )
}

export const HasArrow: Story = () => (
  <MibaoProvider>
    <T hasArrow label="has arrow" defaultIsOpen={true}>
      <Button>Has arrow</Button>
    </T>
  </MibaoProvider>
)
