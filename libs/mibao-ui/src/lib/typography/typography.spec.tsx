import { render } from '@testing-library/react'
import { MibaoProvider } from '../..'

import { Text, Heading } from './typography'

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Heading>Heading</Heading>
        <Text>Text</Text>
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
