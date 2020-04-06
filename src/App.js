import React, { Component } from 'react';
import * as _ from "lodash";
import PageTitle from './components/PageTitle';
import { Loading, Error } from './components/StatusStateMessaging';
import FilterDataObject from './utilities/filterDataObject';
import Breweries from './components/Breweries';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'milwaukee',
      status: 'idle',
      error: {},
      data: [],
      filterText: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ status: 'loading' });

    /* TODO: allow the user to choose from a list of cities? */
    fetch('https://api.openbrewerydb.org/breweries?by_city=' + this.state.locale)
      .then(res => res.json())
      .then((res) => {
        if (res.error && res.error.message) {
          return this.setState({
            status: 'error',
            error: res.error,
            data: []
          });
        }

        return this.setState({
          status: 'success',
          error: {},
          data: res
        });
      })
      .catch((err) => {
        this.setState({
          status: 'error',
          data: [],
          error: err
        });
      });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ filterText: e.target.value });
  }

  render() {

    const filteredItems = FilterDataObject( this.state.data, this.state.filterText );

    return (
      <div className="app">

        <PageTitle />

        {this.state.status === 'loading' ? (
          <Loading />
        ) : this.state.status === 'error' ? (
          <Error message={ this.state.error } />
        ) : this.state.status === 'success' ? (
          <div>
            <fieldset>
              <legend>User Input</legend>
              <label htmlFor="filterText">Filter by:</label>
              <input
                onChange={ this.handleChange }
                id="filterText"
                type="text"
                placeholder="Filter Text"
                value={ this.state.filterText }
                disabled={ this.state.status !== 'success' }
              />
            </fieldset>

            { /* TODO: Extract into a component? */
            this.state.filterText !== '' ? (
              <div className="resultsInfo">
                <p>Displaying <b className="resultsInfo__count">{ filteredItems.length }</b> results for <i className="resultsInfo__criteria">{ this.state.filterText }</i>: </p>
              </div>
            ): ''}

            <Breweries items={ _.sortBy( filteredItems , 'name' ) } />
          </div>
        ) : null }
      </div>
    );
  }
}

export default App;
