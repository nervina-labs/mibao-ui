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

export const Thead: React.FC<TableHeadProps & { unstyled?: boolean }> = (props) => {
  return <ChakraThead
    bg={props.unstyled ? undefined : 'var(--chakra-colors-primary-100)'}
    {...props}
  >{props.children}</ChakraThead>
}
