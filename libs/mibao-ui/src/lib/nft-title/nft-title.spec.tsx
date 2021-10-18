import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { NFTTitle } from './nft-title'

describe('NFTTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <NFTTitle title="" />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
