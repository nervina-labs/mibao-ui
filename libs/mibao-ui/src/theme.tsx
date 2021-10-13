import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react'
import React from 'react'

export const theme = extendTheme({
  colors: {
    primary: {
      600: '#5065e5'
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
