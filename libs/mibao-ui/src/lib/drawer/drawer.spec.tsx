import { render } from '@testing-library/react'
import { MibaoProvider } from '../..'

import Drawer from './drawer'

describe('Drawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Drawer isOpen={true} onClose={() => undefined}>
          Hello world
        </Drawer>
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
