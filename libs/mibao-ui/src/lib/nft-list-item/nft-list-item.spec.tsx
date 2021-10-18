import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { NFTListItem } from './nft-list-item'

describe('NFTListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <NFTListItem issuerProps={{ name: '', src: '' }} />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
