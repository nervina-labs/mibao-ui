import { render } from '@testing-library/react'

import { Menu, MenuButton, MenuList, MenuItem } from './menu'

describe('Menu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menu>
        <MenuButton>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
        </MenuList>
      </Menu>
    )
    expect(baseElement).toBeTruthy()
  })
})
