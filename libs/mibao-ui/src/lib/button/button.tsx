import './button.module.scss'
import React from 'react'
import { Button as ChakraButton, ButtonGroup, ButtonProps as ChakraButtonProps, ButtonGroupProps } from '@chakra-ui/react'
export { ButtonGroup, ButtonGroupProps }

export interface ButtonProps extends ChakraButtonProps {
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ChakraButton variant="outline" {...props}>{props.children}</ChakraButton>
  )
}
