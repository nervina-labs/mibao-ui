import { render } from '@testing-library/react'
import { MibaoProvider } from '../..'

import Tooltip from './tooltip'

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Tooltip label="label">content</Tooltip>
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
