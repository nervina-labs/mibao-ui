import React from 'react'
import { Progress as RawProgress, ProgressProps } from '@chakra-ui/react'

export const Progress: React.FC<ProgressProps> = (props) => {
  return (
    <RawProgress borderRadius="8px" height="10px" color="progress.500" {...props} />
  )
}

export default Progress
