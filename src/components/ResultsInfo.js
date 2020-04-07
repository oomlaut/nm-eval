import React, { Component } from 'react'
import './ResultsInfo.css'

/* Summary:
    Displays indication of results based on the filter critera
    Expects a 'count' value and a 'criteria' value to be rendered into the jsx
    If there is no criteria (e.g. the field is blank) no data is rendered
    */


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
