import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import {
  Tabs as ChakraTabs,
  Tab as ChakraTab,
  TabList as ChakraTabList,
  TabPanels,
  TabPanel,
  TabsProps as ChakraTabsProps,
  useTab,
  Box,
  TabProps as ChakraTabProps,
  TabListProps
} from '@chakra-ui/react'
import styles from './tab.module.scss'
import { ThemeTypings } from '@chakra-ui/styled-system'
import { omit } from '../../utils'

export { TabPanel, TabPanels }

export type TabVariant = 'line' | 'unstyled' | 'enclosed' | 'enclosed-colored' | 'soft-rounded' | 'solid-rounded'
export type TabsAlign = 'start' | 'end' | 'center' | 'space-between'

export interface TabsProps extends Omit<ChakraTabsProps, 'variant' | 'orientation' | 'align'> {
  variant?: TabVariant
  align?: TabsAlign
}

const TABS_CONTEXT_VALUE = {
  index: 0,
  variant: 'line' as TabVariant,
  colorScheme: 'primary' as ThemeTypings['colorSchemes'] | string,
  align: 'start' as TabsAlign
}
const TabsContext = createContext(TABS_CONTEXT_VALUE)

export const Tabs: React.FC<TabsProps> = (props) => {
  const [index, setIndex] = useState(props.defaultIndex ?? props.index ?? 0)
  const variant = props.variant ?? 'line'
  const colorScheme = props.colorScheme ?? 'primary'
  const align = props.align ?? 'start'

  const onChange = useCallback((index) => {
    props?.onChange?.(index)
    setIndex(index)
  }, [props])

  return (
    <ChakraTabs
      {...omit(props, ['align'])}
      aligh={align === 'space-between' ? undefined : align}
      colorScheme={colorScheme}
      variant={variant}
      onChange={onChange}
    >
      <TabsContext.Provider value={{ index, variant, colorScheme, align }}>
        {props.children}
      </TabsContext.Provider>
    </ChakraTabs>
  )
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  const { index, variant, colorScheme, align } = useContext(TabsContext)
  const tabListRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    if (tabListRef.current && variant === 'line') {
      const elements = Array.from<HTMLButtonElement>(tabListRef.current.querySelectorAll(`.${styles.tab}`))
      const element = elements[index ?? 0]
      setWidth(element?.offsetWidth ?? 0)
      setOffset(element?.offsetLeft ?? 0)
    }
  }, [index, variant])
  const alignProps = useMemo(() => align === 'space-between'
    ? {
        justifyContent: 'space-between',
        display: 'flex',
        w: '100%'
      }
    : {}, [align])

  return <ChakraTabList ref={tabListRef} p={0} position="relative" {...alignProps}>
    {children}
    {
      variant === 'line' && (
        <Box
          w="1px"
          bg={`${colorScheme}.600`}
          h="2px"
          position="absolute"
          bottom="-2px"
          left={0}
          transformOrigin="left"
          transition={'0.2s'}
          transform={`translateX(${offset}px) scaleX(${width})`}
        />
      )
    }
  </ChakraTabList>
}

export const Tab: React.FC<ChakraTabProps> = (props) => {
  const { variant } = useContext(TabsContext)
  const tabProps = useTab({ ...props })
  const isSelected = Boolean(tabProps['aria-selected'])

  return (
    <ChakraTab
      {...tabProps}
      {...props}
      className={`${styles.tab} ${props.className ?? ''}`}
      borderBottom={ variant === 'line' ? 'none' : undefined }
    >
      <Box as="span" opacity={isSelected ? 1 : 0.6}>
        {tabProps.children}
      </Box>
    </ChakraTab>
  )
}
