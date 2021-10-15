import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react'
import React from 'react'

export const mibaoTheme = extendTheme({
  colors: {
    primary: {
      100: '#f5f6fc',
      500: '#5065e5',
      600: '#4050b6',
      700: '#2a3579'
    },
    black: '#23262F',
    gray: {
      800: '#23262F'
    },
    progress: {
      main: '#5065E5'
    }
  },
  shadows: {
    outline: 'none'
  }
})

export const MibaoProvider: React.FC<ChakraProviderProps> = (props) => <ChakraProvider theme={mibaoTheme} {...props}>{props.children}</ChakraProvider>
