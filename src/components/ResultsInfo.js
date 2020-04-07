import React, { Component } from 'react';
import './ResultsInfo.css'

class ResultsInfo extends Component {
  render () {
    const { count, criteria } = this.props;

    if (criteria !== '') {
      return (
        <div className="ResultsInfo">
          <p className="ResultsInfo__content">Displaying <b className="ResultsInfo__count">{ count }</b> results for <i className="ResultsInfo__criteria">&ldquo;{ criteria }&rdquo;</i></p>
        </div>
      )
    }
    return ( null )
  }
}

export default ResultsInfo
