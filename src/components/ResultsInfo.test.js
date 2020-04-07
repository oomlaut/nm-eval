import React from 'react'
import { render } from '@testing-library/react'
import ResultsInfo from './ResultsInfo'

test('renders ResultsInfo', () => {
  const { getByText } = render(<ResultsInfo />)
  const results = getByText(/Displaying/i)
  expect(results).toBeInTheDocument()
})
