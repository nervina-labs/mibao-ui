import { render } from '@testing-library/react'

import { NftImage } from './nft-image'

describe('NftImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NftImage />)
    expect(baseElement).toBeTruthy()
  })
})
