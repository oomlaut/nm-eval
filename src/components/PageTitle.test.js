import React from 'react'
import { render } from '@testing-library/react'
import PageTitle from './PageTitle'

/* No dynamic content, test only to see if a part of an expected string is present */

test('renders <PageTitle />', () => {
  const { getByText } = render(<PageTitle />)
  const sampleText = getByText(/NM Programming Evaluation/i)
  expect(sampleText).toBeInTheDocument()
})
