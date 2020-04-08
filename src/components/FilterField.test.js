import React from 'react'
import { render } from '@testing-library/react'
import FilterField from './FilterField'

test('renders <FilterField />', () => {
  const { getByText } = render(<FilterField />)
  const sampleText = getByText(/User Input/i)
  expect(sampleText).toBeInTheDocument()
})

/* TODO: mock onChange event handler to ensure callback */
