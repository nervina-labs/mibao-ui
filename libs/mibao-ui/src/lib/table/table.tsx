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

export const Thead: React.FC<TableHeadProps & { defaultBg?: boolean }> = (props) => {
  return <ChakraThead
    bg={props.defaultBg ? 'var(--chakra-colors-primary-100)' : undefined}
    {...props}
  >{props.children}</ChakraThead>
}
// bg="var(--chakra-colors-primary-100)"
