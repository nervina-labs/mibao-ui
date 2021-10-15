import { Input as RawInput, InputProps } from '@chakra-ui/react'
import styles from './input.module.scss'
export { InputProps }
// TODO: set border color in theme
export const Input = ({ className = '', ...props }: InputProps) => (
  <RawInput
    color="#0a0b26"
    borderColor={props.variant === 'filled' ? undefined : '#777e90'}
    focusBorderColor="#777e90"
    className={`${className} ${styles.container}`}
    padding="0.85em 1.14em"
    lineHeight="1.7em"
    fontWeight="400"
    fontSize="0.875rem"
    {...props}
  />
)
export default Input
