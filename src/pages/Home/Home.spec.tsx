import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { Home } from 'src/pages/Home/Home'

describe('Home Page', () => {
  it('should render correcty', () => {
    const component = renderer.create(<Home />)

    expect(component).toMatchSnapshot()
  })

  it('should be able to render Home text', () => {
    render(<Home />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})
