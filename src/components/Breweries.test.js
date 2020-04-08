import React from 'react'
import { render } from '@testing-library/react'
import Breweries from './Breweries'

test('render <Breweries />', () => {
  const { getByText } = render(<Breweries />)
  const sampleText = getByText(/No items to display./i)
  expect(sampleText).toBeInTheDocument()
})

/* TODO: Mock data representative of object structure to send into the rendering */
