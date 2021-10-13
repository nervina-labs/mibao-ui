import { Tooltip as RawTooltip, TooltipProps } from '@chakra-ui/react'
import React from 'react'

// TODO: set bg color in theme
export { TooltipProps }
export const Tooltip = ({ children, ...props }: TooltipProps) => (
  <RawTooltip rounded="md" bg="#767676" {...props}>
    {children}
  </RawTooltip>
)

export default Tooltip
