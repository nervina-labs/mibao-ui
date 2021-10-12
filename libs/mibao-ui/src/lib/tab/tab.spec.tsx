import { render } from '@testing-library/react'
import { Tabs } from './tab'

describe('Tab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tabs>1</Tabs>)
    expect(baseElement).toBeTruthy()
  })
})
