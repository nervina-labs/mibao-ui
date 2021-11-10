import './table.module.scss'

import {
  Table,
  Thead as RowThead,
  Tbody,
  Tfoot,
  Tr,
  Th as RowTh,
  Td,
  TableCaption as RowTableCaption,
  TableHeadProps,
  TableBodyProps,
  TableProps,
  TableRowProps,
  TableColumnHeaderProps,
  TableCellProps,
  TableCaptionProps
} from '@chakra-ui/react'
import React from 'react'

export {
  Table,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableHeadProps,
  TableBodyProps,
  TableProps,
  TableRowProps,
  TableColumnHeaderProps,
  TableCellProps,
  TableCaptionProps
}

export const Thead: React.FC<TableHeadProps & { variant: 'filled' | 'unstyled' }> = (props) => {
  const variant = props.variant ?? 'unstyled'
  return <RowThead
    bg={variant === 'filled' ? 'var(--chakra-colors-primary-100)' : undefined}
    {...props}
  >{props.children}</RowThead>
}

export const Th: React.FC<TableColumnHeaderProps> = (props) => {
  return (
    <RowTh
      textTransform="none"
    >{props.children}</RowTh>
  )
}

export const TableCaption: React.FC<TableCaptionProps> = (props) => {
  return (
    <RowTableCaption
      textTransform="none"
    >{props.children}</RowTableCaption>
  )
}
