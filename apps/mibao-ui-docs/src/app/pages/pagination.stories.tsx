import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from 'mibao-ui'

export default {
  component: Pagination,
  title: `Components/${Pagination.name}`,
  argTypes: {
    current: {
      type: 'number',
      defaultValue: 1,
      controls: 'text'
    },
    total: {
      type: 'number',
      defaultValue: 1,
      controls: 'text'
    },
    onChange: {
      action: 'onChange'
    }
  }
} as Meta<PaginationProps>

export const ShowAllPages: Story<PaginationProps> = (args) => (
  <Pagination onChange={args.onChange} total={2} current={1} />
)

export const ShowFirstPagesAndLastPage: Story<PaginationProps> = (args) => (
  <Pagination onChange={args.onChange} total={100} current={3} />
)

export const ShowFirstPageAndLastPages: Story<PaginationProps> = (args) => (
  <Pagination onChange={args.onChange} total={100} current={98} />
)

export const ShowEndPagesAndCenterPages: Story<PaginationProps> = (args) => (
  <Pagination onChange={args.onChange} total={100} current={4} />
)

export const ControlledPagination: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)
