import React from 'react'
import { render } from '@testing-library/react'
import ResultsInfo from './ResultsInfo'

/* Not much to test here, the Component outputs a line if two parameters are passed in */

test('renders <ResultsInfo />', () => {
  const { getByText } = render(<ResultsInfo />)
  const results = getByText(/Displaying/i)
  expect(results).toBeInTheDocument()
})
