type ModelViewer = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLElement> & {
  src: string
  ar?: boolean
  poster?: string
  'auto-rotate'?: boolean
  'shadow-intensity'?: string
  'camera-controls'?: boolean
  loading?: 'auto' | 'lazy' | 'eager'
  reveal?: 'auto' | 'interaction' | 'manual'
},
HTMLElement
>

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': ModelViewer
  }
}
