import React from 'react'
import { render } from '@testing-library/react'
import { Error, Loading } from './StatusStateMessaging'

test('renders Error', () => {
  const { getByText } = render(<Error />)
  const results = getByText(/./i)
  expect(results).toBeInTheDocument()
})

test('renders Loading', () => {
  const { getByText } = render(<Loading />)
  const results = getByText(/./i)
  expect(results).toBeInTheDocument()
})
