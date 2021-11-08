import { useEffect, useRef } from 'react'
import { PreviewProps } from './preview'
import styles from './preview.module.scss'

export const AudioPreview: React.FC<Pick<PreviewProps, 'renderer' | 'onError'>> = ({
  renderer,
  onError
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    audioRef.current?.play()
  }, [])
  return (
    <audio
      className={`${styles.component} ${styles.audio}`}
      ref={audioRef}
      src={renderer}
      controls
      controlsList="nodownload"
      onError={onError}
    />
  )
}
