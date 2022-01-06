import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react'
import FALL_BACK_SRC from '../assets/images/fallback.svg'
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
  },
  // custom token
  locales: {
    issuer: {
      banned: 'Invalid Issuer'
    },
    nft: {
      banned: 'Invalid NFT',
      cardBackTooltips: 'Include card back content which can only be revealed by the owner of this NFT',
      limited: 'Limited',
      unlimited: 'Unlimited'
    }
  },
  fallbacks: {
    avatar: FALL_BACK_SRC,
    nft: FALL_BACK_SRC
  },
  components: {
    Table: {
      baseStyle: {
        th: {
          textTransform: 'none'
        }
      },
      sizes: {
        sm: {
          td: {
            fontSize: '12px'
          }
        },
        md: {
          td: {
            fontSize: '14px'
          }
        },
        lg: {
          td: {
            fontSize: '14px'
          }
        }
      }
    }
  }
})

export const MibaoProvider: React.FC<ChakraProviderProps> = (props) => <ChakraProvider theme={mibaoTheme} {...props}>{props.children}</ChakraProvider>
