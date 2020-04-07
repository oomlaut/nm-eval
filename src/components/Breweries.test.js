import React from 'react'
import { render } from '@testing-library/react'
import Breweries from './Breweries'

test('renders Breweries', () => {
  const { getByText } = render(<Breweries />)
  const results = getByText(/No items to display./i)
  expect(results).toBeInTheDocument()
})

/* TODO: Mock data representative of object structure to send into the rendering */
