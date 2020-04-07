import React from 'react'
import { render } from '@testing-library/react'
import PageTitle from './PageTitle'

test('renders PageTitle', () => {
  const { getByText } = render(<PageTitle />)
  const results = getByText(/NM Programming Evaluation/i)
  expect(results).toBeInTheDocument()
})
