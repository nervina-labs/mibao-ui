import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { NFTCard } from './nft-card'

describe('NFTCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <NFTCard />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
