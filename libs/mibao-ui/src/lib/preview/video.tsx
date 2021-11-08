import { useEffect, useRef } from 'react'
import { PreviewProps } from './preview'
import styles from './preview.module.scss'

export const VideoPreview: React.FC<Pick<PreviewProps, 'renderer' | 'onError'>> = ({
  renderer,
  onError
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    videoRef.current?.play()
  }, [])
  return (
    <video
      className={`${styles.component} ${styles.video}`}
      ref={videoRef}
      src={renderer}
      controls
      controlsList="nodownload"
      disablePictureInPicture
      onError={onError}
    />
  )
}
