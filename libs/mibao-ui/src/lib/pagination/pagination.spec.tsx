import { render } from '@testing-library/react'

import Pagination from './pagination'

describe('Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Pagination current={1} total={100} onChange={() => undefined} />
    )
    expect(baseElement).toBeTruthy()
  })
})
