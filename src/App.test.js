import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('render <App />', () => {
  const { getByText } = render(<App />)
  const headingText = getByText(/NM Programming/i)
  expect(headingText).toBeInTheDocument()
})

/* Other possible test for <App />:
    - component mount/dismount
    - performs API call
    - renders sub-components (e.g. PageTitle, Loading, Error, FilterField, ResultsInfo || Breweries)
  */
