import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react'
import React from 'react'

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#cccfe8',
      500: '#5065e5',
      600: '#4050b6',
      700: '#2a3579'
    },
    black: '#23262F',
    gray: {
      800: '#23262F'
    }
  },
  shadows: {
    outline: 'none'
  }
})

export const MibaoProvider: React.FC<ChakraProviderProps> = (props) => <ChakraProvider theme={theme} {...props}>{props.children}</ChakraProvider>
