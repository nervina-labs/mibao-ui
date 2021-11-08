import '@google/model-viewer'
import { useEffect, useRef } from 'react'
import styles from './preview.module.scss'

interface ThreeDPreviewProps {
  src: string
  poster?: string
  reveal?: 'auto' | 'interaction' | 'manual'
  className?: string
  style?: React.CSSProperties
  onClick?: React.EventHandler<React.SyntheticEvent>
  onLoad?: () => void
  onError?: <T>(error: T) => void
}

export const ThreeDPreview: React.FC<ThreeDPreviewProps> = ({
  onLoad,
  onError,
  ...props
}) => {
  const ref = useRef<any>()
  useEffect(() => {
    const modelViewerElement = ref.current
    if (onLoad && modelViewerElement) {
      modelViewerElement.addEventListener('load', onLoad)
    }
    return () => {
      if (onLoad && modelViewerElement) {
        modelViewerElement.removeEventListener('load', onLoad)
      }
    }
  }, [onLoad])

  useEffect(() => {
    const modelViewerElement = ref.current
    if (onError && modelViewerElement) {
      modelViewerElement.addEventListener('error', onError)
    }
    return () => {
      if (onError && modelViewerElement) {
        modelViewerElement.removeEventListener('error', onError)
      }
    }
  }, [onError])

  return (
    <model-viewer
      {...props}
      className={styles.component}
      shadow-intensity="1"
      camera-controls
      auto-rotate
      loading="lazy"
      style={{
        width: '100%',
        height: '100%'
      }}
      ref={ref}
    />
  )
}
