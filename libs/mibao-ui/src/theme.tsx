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
      200: '#eee',
      800: '#23262F',
      500: '#777E91'
    },
    progress: {
      500: '#5065E5'
    },
    banned: {
      500: '#d03a3a'
    }
  },
  shadows: {
    outline: 'none'
  }
})

export const MibaoProvider: React.FC<ChakraProviderProps> = (props) => <ChakraProvider theme={mibaoTheme} {...props}>{props.children}</ChakraProvider>
