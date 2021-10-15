import './table.module.scss'

import {
  Table,
  Thead as ChakraThead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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
  Th,
  Td,
  TableCaption,
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
  return <ChakraThead
    bg={variant === 'filled' ? 'var(--chakra-colors-primary-100)' : undefined}
    {...props}
  >{props.children}</ChakraThead>
}
