import {
  Drawer as RawDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps as RawDrawerProps,
  DrawerContentProps
} from '@chakra-ui/react'
import styles from './drawer.module.scss'

export interface DrawerProps extends RawDrawerProps {
  hasCloseBtn?: boolean
  hasOverlay?: boolean
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  rounded?: 'none' | 'md' | 'lg' | 'xl'
  contentProps?: DrawerContentProps
}

export const Drawer = ({
  hasCloseBtn = false,
  hasOverlay = false,
  rounded = 'none',
  header,
  footer,
  children,
  contentProps,
  ...props
}: DrawerProps) => (
  <RawDrawer {...props}>
    {hasOverlay ? <DrawerOverlay /> : null}
    <DrawerContent
      className={styles.content}
      data-rounded={rounded}
      data-placement={props.placement}
      {...contentProps}
    >
      {hasCloseBtn ? <DrawerCloseButton /> : null}
      {header !== undefined ? <DrawerHeader>{header}</DrawerHeader> : null}
      <DrawerBody>{children}</DrawerBody>
      {footer !== undefined ? <DrawerFooter>Footer</DrawerFooter> : null}
    </DrawerContent>
  </RawDrawer>
)

export default Drawer
