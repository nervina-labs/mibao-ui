import { render } from '@testing-library/react'

import { ConfirmProvider } from './confirm'

describe('Confirm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConfirmProvider />)
    expect(baseElement).toBeTruthy()
  })
})
