import './table.module.scss'

import {
  Table as RowTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableHeadProps,
  TableBodyProps,
  TableProps as RowTableProps,
  TableRowProps,
  TableColumnHeaderProps,
  TableCellProps,
  TableCaptionProps
} from '@chakra-ui/react'
import React from 'react'
import styled from '@emotion/styled'

export {
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableColumnHeaderProps,
  TableCellProps,
  TableCaptionProps
}

export interface TableProps extends RowTableProps {
  variant: RowTableProps['variant'] | 'filled'
}

const TableStyled = styled(RowTable)`
  ${({ _variant }: TableProps & { _variant?: TableProps['variant'] }) => _variant === 'filled'
    ? `
thead, tfoot {
  th {
    background-color: var(--chakra-colors-primary-100);
  }
}
thead {
  th:first-child {
    border-top-left-radius: 6px;
  }
  th:last-child {
    border-top-right-radius: 6px;
  }
}
tfoot {
  th:first-child {
    border-bottom-left-radius: 6px;
  }
  th:last-child {
    border-bottom-right-radius: 6px;
  }
}
`
    : undefined
  }
`

export const Table: React.FC<TableProps> = ({
  children,
  variant = 'simple',
  ...props
}) => {
  return <TableStyled
    variant={variant === 'filled' ? 'simple' : variant}
    _variant={variant}
    {...props}
    >{children}</TableStyled>
}
