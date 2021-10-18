import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { Limited } from './limited'

describe('Limited', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Limited limitedText="" count={0} unlimitedText="" />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
