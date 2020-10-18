import SpaceX from './index'
import { render } from '@testing-library/react'

// `describe` is not required, but it helps the tests read nicely
describe('The SpaceX Page Component', () => {
  // Each test for the component will get an `it` block
  it('should have exactly 1 `main` section', () => {
    // The getByRole will error if there are less or more than 1 element found
    const { getByRole } = render(<SpaceX />)
    const main = getByRole('main')

    expect(main).toBeInTheDocument()
  })
})