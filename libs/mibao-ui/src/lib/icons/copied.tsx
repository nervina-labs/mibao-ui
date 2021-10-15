import { Icon, IconProps } from '@chakra-ui/react'
// for storybook bug: https://github.com/storybookjs/storybook/issues/13486
// eslint-disable-next-line
// @ts-ignore
export const CopiedIcon = (props: IconProps) => <Icon viewBox="0 0 20 20" {...props}><circle cx={10} cy={10} r={10} fill="#37B67F" /><path fillRule="evenodd" clipRule="evenodd" d="M4.33337 10.1538L5.46671 9.07692L8.38099 11.8462L14.5334 6L15.6667 7.07692L8.38099 14L4.33337 10.1538Z" fill="white" /></Icon>
export default CopiedIcon
