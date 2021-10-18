import { Textarea as RawTextarea, TextareaProps } from '@chakra-ui/react'
import styles from './textarea.module.scss'
export { TextareaProps }

// TODO: set border color in theme
export const Textarea = ({ className = '', ...props }: TextareaProps) => (
  <RawTextarea
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

export default Textarea
