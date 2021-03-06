import {
  Alert as RawAlert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AlertStatus,
  Box
} from '@chakra-ui/react'
import styles from './alert.module.scss'

export { AlertStatus }
export interface AlertProps {
  title?: React.ReactNode
  description?: React.ReactNode
  status: AlertStatus
  isPlain?: boolean
}

// TODO: set color in theme
export const Alert: React.FC<AlertProps> = ({ title, description, status, isPlain = false }) => (
  <RawAlert status={status} className={styles.container} data-status={status} data-is-plain={isPlain.toString()} >
    <AlertIcon
      width="16px"
      height="16px"
      marginTop="3px"
      className={styles.icon}
      alignSelf="flex-start"
    />
    <Box>
      {title
        ? (
        <AlertTitle
          fontWeight="500"
          fontSize="1rem"
          lineHeight="1.375rem"
          color="#000000d9"
        >
          {title}
        </AlertTitle>
          )
        : null}
      {description
        ? (
        <AlertDescription
          fontWeight="400"
          fontSize="0.875rem"
          lineHeight="1.5rem"
          color="#777e90"
        >
          {description}
        </AlertDescription>
          )
        : null}
    </Box>
  </RawAlert>
)

export default Alert
