import { Select as RawSelect, SelectProps } from '@chakra-ui/react'
export { SelectProps }
export const Select = ({ children, ...props }: SelectProps) => (
  <RawSelect
    color="#0a0b26"
    borderColor={props.variant === 'filled' ? undefined : '#777e90'}
    focusBorderColor="#777e90"
    lineHeight="1.7em"
    fontWeight="400"
    fontSize="0.875rem"
    {...props}
  >
    {children}
  </RawSelect>
)
export default Select
