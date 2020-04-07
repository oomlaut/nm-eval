import React, { Component } from 'react';
import './ResultsInfo.css'

class ResultsInfo extends Component {
  render () {
    const { count, criteria } = this.props;

    if (criteria !== '') {
      return (
        <div className="c ResultsInfo">
          <p>Displaying <b className="ResultsInfo__count">{ count }</b> results for <i className="ResultsInfo__criteria">{ criteria }</i>: </p>
        </div>
      )
    }
    return ( null )
  }
}

export default ResultsInfo
