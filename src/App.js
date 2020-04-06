import React, { Component } from 'react';
import * as _ from "lodash";
import PageTitle from './components/pagetitle';
import Loading from './components/loading';
import Error from './components/error';
import FilterDataObject from './utilities/filterDataObject';
import Breweries from './components/breweries';
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
    return (
      <div className="app">

        <PageTitle />

        {this.state.status === 'loading' ? (
          <Loading />
        ) : this.state.status === 'error' ? (
          <Error message={this.state.error} />
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

            <Breweries items={ _.sortBy( FilterDataObject( this.state.data, this.state.filterText ), 'name' ) } />
          </div>
        ) : null }
      </div>
    );
  }
}

export default App;
