import { useMemo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styles from './pagination.module.scss'

export interface PaginationProps {
  current: number
  total: number
  onChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  onChange
}) => {
  const pages = useMemo(() => {
    if (current <= 0) {
      return []
    }
    const RANGE = 1
    const COUNT = RANGE * 2 + 1
    let list = new Array(Math.min(total, COUNT)).fill(undefined)

    switch (true) {
      case current <= COUNT: {
        list = list.map((_, i) => i + 1)
        break
      }
      case current > total - COUNT: {
        list = list.map((_, i) => total - COUNT + i + 1)
        break
      }
      default: {
        list = list.map((_, i) => current - RANGE + i)
        break
      }
    }

    if (list[0] >= 2) {
      list = list[0] === 2 ? [1, ...list] : [1, 'left_ellipsis', ...list]
    }

    if (list[list.length - 1] <= total - 1) {
      list =
        list[list.length - 1] === total - 1
          ? [...list, total]
          : [...list, 'right_ellipsis', total]
    }

    return list
  }, [current, total])

  const handlePageClick = (
    e: React.SyntheticEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
    e.preventDefault()
    const {
      dataset: { page }
    } = e.target as HTMLButtonElement
    if (!page) {
      return
    }

    const p = +page
    if (Number.isNaN(p)) {
      return
    }
    onChange(p)
  }

  return (
    <div onClick={handlePageClick} className={styles.container}>
      <button disabled={current === 1} data-page={1}>
        <ChevronLeftIcon pointerEvents="none" w={20} h={20} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          data-page={page}
          data-active={(page === current).toString()}
          disabled={page === current || typeof page === 'string'}
        >
          {typeof page === 'string' ? '...' : page}
        </button>
      ))}
      <button disabled={current === total} data-page={total}>
        <ChevronRightIcon pointerEvents="none" w={20} h={20} />
      </button>
    </div>
  )
}
export default Pagination
