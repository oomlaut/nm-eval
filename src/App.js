import React, { Component } from 'react';
import * as _ from "lodash";
import PageTitle from './components/PageTitle';
import ResultsInfo from './components/ResultsInfo';
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
          error: [],
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
      <div className="App">

        <PageTitle />

        {this.state.status === 'loading' ? (
          <Loading />
        ) : this.state.status === 'error' ? (
          <Error message={ this.state.error } />
        ) : this.state.status === 'success' ? (
          <div className="c Success">
            <fieldset className="c FilterField">
              <legend className="FilterField__heading">User Input</legend>
              <label className="FilterField__text-label" htmlFor="filterText">Filter by:</label>
              <input
                onChange={ this.handleChange }
                id="filterText"
                className="FilterField__text-input"
                type="text"
                placeholder="Filter Text"
                value={ this.state.filterText }
                disabled={ this.state.status !== 'success' }
              />
            </fieldset>

            <ResultsInfo count={ filteredItems.length } criteria={ this.state.filterText } />

            <Breweries items={ _.sortBy( filteredItems , 'name' ) } />

          </div>
        ) : null }
      </div>
    );
  }
}

export default App;
