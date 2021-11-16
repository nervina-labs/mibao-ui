import './table.module.scss'

import {
  Table,
  Thead as RowThead,
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
import styled from '@emotion/styled'

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

const TheadStyled = styled(RowThead)`
  ${({ _variant }: { _variant: 'filled' | 'unstyled' }) => _variant === 'filled'
      ? `
      position: relative;
      &::before {
        content: ' ';
        background-color: var(--chakra-colors-primary-100);
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 6px 6px 0 0;
        z-index: -1;
      }`
      : undefined
    }
  
`

export const Thead: React.FC<TableHeadProps & { variant: 'filled' | 'unstyled' }> = (props) => {
  const variant = props.variant ?? 'unstyled'
  return <TheadStyled
    _variant={variant}
    {...props}
  >{props.children}</TheadStyled>
}
