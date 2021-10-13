import { render } from '@testing-library/react'

import { MibaoProvider } from '../..'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from './tab'

describe('Tab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MibaoProvider>
        <Tabs>
          <TabList>
            <Tab>Tab</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>Tab Panel</TabPanel>
          </TabPanels>
        </Tabs>
      </MibaoProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
