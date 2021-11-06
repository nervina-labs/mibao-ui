import { Box, BoxProps } from '@chakra-ui/react'
import { useEffect, useState, MouseEvent, TouchEvent, useRef, useCallback } from 'react'
import { fromEvent, map, switchMap, takeUntil, tap } from 'rxjs'
import { useEventCallback } from 'rxjs-hooks'

interface ProgressBarProps extends BoxProps {
  percent: number
  onChangePercent?: (percent: number) => void
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent, onChangePercent, ...boxProps }) => {
  const [percentVal, setPercentVal] = useState(percent)
  useEffect(() => {
    setPercentVal(percent)
  }, [percent])
  const ref = useRef<HTMLDivElement>(null)
  const calcPercent = useCallback(
    (clientX: number) => Math.min(Math.max(
      (clientX - (ref.current?.offsetLeft ?? 0)) / (ref.current?.offsetWidth ?? 0), 0), 1) * 100,
    []
  )
  const onChangePercentCallback = useCallback((p: number) => {
    setPercentVal(p)
    if (onChangePercent) {
      onChangePercent(p)
    }
  }, [onChangePercent])

  const [onChangeProgressBarByMouse] = useEventCallback((event$) =>
    event$.pipe(
      switchMap(() =>
        fromEvent<MouseEvent<HTMLDivElement>>(window, 'mousemove').pipe(
          takeUntil(fromEvent(window, 'mouseup')),
          map(e => e.clientX)
        )),
      map(calcPercent),
      tap(onChangePercentCallback)

    ), 0)
  const [onChangeProgressBarByTouch] = useEventCallback((event$) =>
    event$.pipe(
      switchMap(() =>
        fromEvent<TouchEvent<HTMLDivElement>>(window, 'touchmove').pipe(
          takeUntil(fromEvent(window, 'touchend')),
          map(e => e.targetTouches[0].clientX)
        )),
      map(calcPercent),
      tap(onChangePercentCallback)
    ), 0)

  return (
    <Box
      position="relative"
      w="full"
      h="10px"
      ref={ref}
      {...boxProps}
      onTouchStart={onChangeProgressBarByTouch}
      onMouseDown={onChangeProgressBarByMouse}
    >
      <Box
        position="absolute"
        bottom="0"
        left="0"
        bg="rgba(0, 0, 0, 0.2)"
        w="full"
        h="50%"
        rounded="10px"
      />
      <Box
        w={`${percentVal}%`}
        h="50%"
        bg="rgba(0, 0, 0, 0.5)"
        position="absolute"
        bottom="0"
        left="0"
        rounded="10px"
      >
        <Box
          position="absolute"
          bottom="-1px"
          right="0"
          h="200%"
          w="5px"
          bg="rgba(0, 0, 0, 1)"
          border="1px solid white"
          rounded="10px 10px 0 0"
        />
      </Box>
    </Box>
  )
}
