import { Checkbox as RawCheckbox, CheckboxProps } from '@chakra-ui/checkbox'
import CheckedIcon from '../icons/checked'
export {
  CheckboxProps,
  CheckboxGroup,
  CheckboxGroupProps,
  useCheckbox,
  useCheckboxGroup
} from '@chakra-ui/checkbox'

export const Checkbox = ({ children, ...props }: CheckboxProps) => (
  <RawCheckbox
    icon={<CheckedIcon width="4" height="4" />}
    iconColor="#5065E5"
    iconSize="19px"
    {...props}
  >
    {children}
  </RawCheckbox>
)

export default RawCheckbox
