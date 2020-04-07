import React from 'react'
import { render } from '@testing-library/react'
import FilterField from './FilterField'

test('renders FilterField', () => {
  const { getByText } = render(<FilterField />)
  const results = getByText(/User Input/i)
  expect(results).toBeInTheDocument()
})


