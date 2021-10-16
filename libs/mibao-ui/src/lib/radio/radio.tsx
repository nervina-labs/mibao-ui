import { Radio as RawRadio, RadioProps } from '@chakra-ui/radio'
import styles from './radio.module.scss'

export { RadioGroup, RadioGroupProps, RadioProps } from '@chakra-ui/radio'

export const Radio: React.FC<RadioProps> = ({
  children,
  className = '',
  ...props
}) => (
  <RawRadio size="lg" {...props} className={`${className} ${styles.container}`}>
    {children}
  </RawRadio>
)
export default Radio
