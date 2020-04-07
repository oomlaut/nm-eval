import React, { Component } from 'react'
import './StatusStateMessaging.css'

/* Summary:
    Contains both similarly-structured messaging components for non-success states.
    Error component expects message content to be output.

    */

/* TODO: if an 'idle' state is required for any reason, it should be placed in this file and exported */

class Error extends Component {
  render () {
    const { message } = this.props;
    return (
      <div className="c Error message message--error">
        <p className="message__content">An error occurred.</p>
        { /* TODO: hide error in non-production environments */ }
        <pre className="message__caption message__caption--error">{ message }</pre>
      </div>
    )
  }
}

class Loading extends Component {
  render () {
    return (
      <div className="c Loading message message--loading">
        { /* CSS-based loading animation */ }
        <div className="loading__container">
          <div className="loading__bubble loading__bubble--1"></div>
          <div className="loading__bubble loading__bubble--2"></div>
          <div className="loading__bubble loading__bubble--3"></div>
        </div>
        <p className="message__content message__content--loading">The data is loading&hellip;</p>

      </div>
    )
  }
}

export {
  Error,
  Loading
}
