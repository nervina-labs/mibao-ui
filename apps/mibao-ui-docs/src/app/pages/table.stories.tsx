import { Story, Meta } from '@storybook/react'
import React from 'react'
import {
  MibaoProvider,
  Table as MibaoTable,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot
} from 'mibao-ui'

export default {
  component: MibaoTable,
  title: 'Components/Table',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    placement: {
      options: ['top', 'bottom'],
      control: { type: 'select' }
    },
    variant: {
      options: ['unstyled', 'simple', 'striped'],
      control: { type: 'select' }
    },
    theadVariant: {
      options: ['filled', 'unstyled'],
      control: { type: 'select' }
    }
  }
} as Meta

const args = {
  size: 'md',
  isNumeric: false,
  placement: 'bottom' as 'top' | 'bottom',
  variant: 'simple',
  theadVariant: 'filled'
}

const Template: Story<typeof args> = (args) => <MibaoProvider>
  <MibaoTable size={args.size} variant={args.variant} colorScheme="primary">
    <TableCaption placement={args.placement}>Imperial to metric conversion factors</TableCaption>
    <Thead variant={args.theadVariant}>
      <Tr>
        <Th>Type</Th>
        <Th>Order</Th>
        <Th isNumeric={args.isNumeric}>Count</Th>
        <Th>Time</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Consumed</Td>
        <Td>NLD1234567890987654</Td>
        <Td isNumeric={args.isNumeric}>25.4</Td>
        <Td>{new Date().toISOString()}</Td>
      </Tr>
      <Tr>
        <Td>Consumed</Td>
        <Td>NLD1234567890987654</Td>
        <Td isNumeric={args.isNumeric}>30.48</Td>
        <Td>{new Date().toISOString()}</Td>
      </Tr>
      <Tr>
        <Td>Consumed</Td>
        <Td>NLD1234567890987654</Td>
        <Td isNumeric={args.isNumeric}>0.91444</Td>
        <Td>{new Date().toISOString()}</Td>
      </Tr>
    </Tbody>
     <Tfoot>
      <Tr>
        <Th>Type</Th>
        <Th>Order</Th>
        <Th isNumeric={args.isNumeric}>Count</Th>
        <Th>Time</Th>
      </Tr>
     </Tfoot>
  </MibaoTable>
</MibaoProvider>

export const Table = Template.bind({})
Table.args = args
