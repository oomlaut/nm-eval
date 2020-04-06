import React, { Component } from 'react'
import Breweries from './components/breweries'
import * as _ from "lodash"
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'idle',
      error: {},
      data: [],
      filter: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //TODO: allow the user to choose from a list of cities?
    this.setState({ status: 'loading' });
    
    fetch('https://api.openbrewerydb.org/breweries?by_city=milwaukee')
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
    this.setState({ filter: e.target.value });
  }

  render() {

    function filteredData (data, filter) {
      const tmp = [];
      data.map(item => {
        if(filter === null || _.includes(item.name.toString().toLowerCase(), filter.toString().toLowerCase())) {
          tmp.push(item);
        }
        return null;
      })
      return tmp;
    };

    return (
      <div>
        <h1>NM Programming Evaluation</h1>

        <fieldset>
          <legend>User Input</legend>
          <label htmlFor="filterText">Filter by:</label>
          <input
            onChange={this.handleChange}
            id="filterText"
            type="text"
            placeholder="Filter Text"
            disabled={this.state.status !== 'success'}
          />
        </fieldset>

        {this.state.status === 'loading' ? (
          <p>The data is loading.</p>
        ) : this.state.status === 'error' ? (
          <p>An error occurred.</p>
        ) : this.state.status === 'success' ? (
          <Breweries breweries={_.sortBy(filteredData(this.state.data, this.state.filter), 'name')} />
        ) : null }
      </div>
    );
  }
}

export default App;
