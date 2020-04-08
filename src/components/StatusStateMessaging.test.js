import React from 'react'
import { render } from '@testing-library/react'
import { Error, Loading } from './StatusStateMessaging'

test('renders <Error />', () => {
  const { getByText } = render(<Error />)
  const sampleText = getByText(/Error/i)
  expect(sampleText).toBeInTheDocument()
})

test('renders <Loading />', () => {
  const { getByText } = render(<Loading />)
  const sampleText = getByText(/Loading/i)
  expect(sampleText).toBeInTheDocument()
})
