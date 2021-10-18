import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

export const useToast = (
  duration = 3000
): [
    React.Dispatch<React.SetStateAction<React.ReactNode>>,
    () => React.ReactPortal | null
  ] => {
  const id = 'toast-container'
  let container = document.querySelector<HTMLDivElement>(`#${id}`)
  if (!container) {
    container = document.createElement('div')
    container.id = id
    container.style.position = 'fixed'
    container.style.top = '50vh'
    container.style.left = '50%'
    container.style.transform = 'translate(-50%, -50%)'
    document.body.append(container)
  }
  const [toast, setToast] = useState<React.ReactNode | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setToast(null)
    }, duration)
  }, [duration, toast])

  const Toast = () =>
    toast
      ? createPortal(
        typeof toast === 'string'
          ? (
            <div
              style={{
                background: '#565656',
                padding: '6px 8px',
                borderRadius: '6px',
                fontWeight: 300,
                fontSize: '0.75rem',
                color: '#fff'
              }}
            >
              {toast}
            </div>
            )
          : (
              toast
            ),
        container as HTMLElement
      )
      : null
  return [setToast, Toast]
}
