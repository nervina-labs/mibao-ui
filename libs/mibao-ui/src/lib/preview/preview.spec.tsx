import { render } from '@testing-library/react'

import Preview from './preview'

describe('Preview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Preview
        isOpen={false}
        onClose={() => console.log('onClose')}
        renderer={''}
        render3D={renderer => <div>{renderer}</div>}
      />)
    expect(baseElement).toBeTruthy()
  })
})
