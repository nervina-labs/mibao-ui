import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { Loading } from './loading'

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Loading />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
