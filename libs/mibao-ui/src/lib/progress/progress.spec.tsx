import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { Progress } from './progress'

describe('Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Progress value={8} />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
