import { Icon, IconProps } from '@chakra-ui/react'

export const CheckedIcon = (props: IconProps & JSX.IntrinsicAttributes) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="currentColor" stroke="currentColor" />
    <path d="M16 5.5L7.75 13.75L4 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </Icon>
)

export default CheckedIcon
