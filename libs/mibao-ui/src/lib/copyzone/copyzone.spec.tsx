import { render } from '@testing-library/react'
import { MibaoProvider } from '../..'

import { Copyzone } from './copyzone'

describe('Copyzone', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Copyzone value="Hello world">
          Hello world
        </Copyzone>
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
