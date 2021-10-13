import './button.module.scss'
import React from 'react'
import { Button as ChakraButton, ButtonGroup, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
export { ButtonGroup }

export interface ButtonProps extends ChakraButtonProps {
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ChakraButton variant="outline" colorScheme="primary" {...props}>{props.children}</ChakraButton>
  )
}

export default Button
