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
  TabsProps as ChakraTabsProps,
  TabListProps,
  TabProps as ChakraTabProps,
  TabPanels,
  TabPanel,
  useTab,
  Box
} from '@chakra-ui/react'
import styles from './tab.module.scss'
import { ThemeTypings } from '@chakra-ui/styled-system'
import { debounce } from '../../utils'

export { TabPanel, TabPanels, TabListProps }

export type TabVariant = 'line' | 'unstyled' | 'enclosed' | 'enclosed-colored' | 'soft-rounded' | 'solid-rounded'
export type TabsAlign = 'start' | 'end' | 'center' | 'space-between' | 'space-around'
type ColorScheme = ThemeTypings['colorSchemes'] | string

export interface TabsProps extends Omit<ChakraTabsProps, 'variant' | 'orientation' | 'align'> {
  variant?: TabVariant
  align?: TabsAlign
}

const TABS_CONTEXT_VALUE: {
  index: number
  variant: TabVariant
  colorScheme: ColorScheme
  align: TabsAlign
} = {
  index: 0,
  variant: 'line',
  colorScheme: 'primary',
  align: 'start'
}
const TabsContext = createContext(TABS_CONTEXT_VALUE)

const TabActiveLine: React.FC<{
  colorScheme: ColorScheme
  offset: number
  width: number
}> = ({
  colorScheme,
  offset,
  width
}) => (
  <Box
    w={`${width}px`}
    bg={ colorScheme === 'black' ? 'black' : `${colorScheme}.600` }
    h="2px"
    position="absolute"
    bottom="-2px"
    left={0}
    transformOrigin="left"
    transition={'0.2s'}
    transform={`translateX(${offset}px)`}
  />
)

export const Tabs: React.FC<TabsProps> = ({
  align = 'start',
  colorScheme = 'primary',
  variant = 'line',
  onChange,
  ...props
}) => {
  const [index, setIndex] = useState(props.defaultIndex ?? props.index ?? 0)

  const onTabsChange = useCallback((index) => {
    onChange?.(index)
    setIndex(index)
  }, [onChange])

  useEffect(() => {
    if (typeof props.index === 'number') {
      setIndex(props.index)
    }
  }, [props.index])

  return (
    <ChakraTabs
      {...props}
      aligh={align === 'space-between' ? undefined : align}
      colorScheme={colorScheme}
      variant={variant}
      onChange={onTabsChange}
    >
      <TabsContext.Provider value={{ index, variant, colorScheme, align }}>
        {props.children}
      </TabsContext.Provider>
    </ChakraTabs>
  )
}

export const TabList: React.FC<TabListProps> = ({ children, ...tabListProps }) => {
  const { index, variant, colorScheme, align } = useContext(TabsContext)
  const tabListRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [offset, setOffset] = useState(0)
  const setActiveLineSize = useCallback(() => {
    if (tabListRef.current && variant === 'line') {
      const elements = Array.from<HTMLButtonElement>(tabListRef.current.querySelectorAll(`.${styles.tab}`))
      const element = elements[index ?? 0]
      setWidth(element?.offsetWidth ?? 0)
      setOffset(element?.offsetLeft ?? 0)
    }
  }, [index, variant])
  useEffect(setActiveLineSize, [setActiveLineSize])
  useEffect(() => {
    const fn = debounce(setActiveLineSize, 300)
    window.addEventListener('resize', fn)
    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [setActiveLineSize])
  const alignProps = useMemo(() => ['space-between', 'space-around'].includes(align)
    ? {
        justifyContent: align,
        display: 'flex',
        w: '100%'
      }
    : {}, [align])

  return (
    <ChakraTabList ref={tabListRef} position="relative" {...alignProps} {...tabListProps}>
      {children}
      {
        variant === 'line' && <TabActiveLine width={width} offset={offset} colorScheme={colorScheme}/>
      }
    </ChakraTabList>
  )
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
      _active={{ bg: 'none' }}
    >
      <Box as="span" opacity={isSelected ? 1 : 0.6}>
        {tabProps.children}
      </Box>
    </ChakraTab>
  )
}
