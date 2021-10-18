import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { Like } from './like'

describe('Like', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Like likeCount={0} isLiked={false} />
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
