import React, { Component } from 'react'
import * as _ from "lodash"
import PageTitle from './components/PageTitle'
import FilterField from './components/FilterField'
import ResultsInfo from './components/ResultsInfo'
import { Loading, Error } from './components/StatusStateMessaging'
import FilterDataObject from './utilities/filterDataObject'
import Breweries from './components/Breweries'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    /* Application state management is necessary to store and update the necessary rendering data
        Q: Convert to Redux?
        A: Redux is probably too heavy for this application's requirements.
        */
    this.state = {
      locale: 'milwaukee',
      status: 'idle',
      error: {},
      data: [],
      filterText: ''
    }

  }

  /* When the App component mounts, fire off an Ajax request to the API to return data to work with */
  componentDidMount() {
    this.setState({ status: 'loading' })

    /* TODO: allow the user to choose from a list of cities? */
    fetch('https://api.openbrewerydb.org/breweries?by_city=' + this.state.locale)
      .then(res => res.json())
      .then((res) => {
        /* Handle the returned data that has been handily converted to JSON */
        if (res.error && res.error.message) {
          /* Exit the function early and update state data with information relating to the error that occurred. */
          return this.setState({
            status: 'error',
            error: res.error,
            data: []
          })
        }

        return this.setState({
          /* The response did not include an error, so update the state data accordingly. */
          status: 'success',
          error: [],
          data: res
        })
      })
      .catch((err) => {
        /* An error occurred outside the response. Capture it and update state. */
        this.setState({
          status: 'error',
          data: [],
          error: err
        })
      })
  }

  render() {
    /* Keep business logic out of the component parameters; use the imported utility function */
    const filteredItems = FilterDataObject( this.state.data, this.state.filterText )

    return (
      <div className="App">

        <PageTitle />

        { /* Depending on status of API request, display conditional rendering */ }
        {this.state.status === 'loading' ? (
          <Loading />
        ) : this.state.status === 'error' ? (
          <Error message={ this.state.error } />
        ) : this.state.status === 'success' ? (
          <div className="c Success">
            <FilterField onChange={ value => this.setState({ filterText: value }) } disabled={ this.state.status !== 'success' } />

            <ResultsInfo count={ filteredItems.length } criteria={ this.state.filterText } />

            <Breweries items={ _.sortBy( filteredItems , 'name' ) } />

          </div>
        ) : null }
      </div>
    )
  }
}

export default App
