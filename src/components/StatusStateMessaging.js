import React, { Component } from 'react';
import './StatusStateMessaging.css';

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
};

class Loading extends Component {
  render () {
    return (
      <div className="c Loading message message--loading">
        <div class="loading__container">
          <div class="loading__bubble loading__bubble--1"></div>
          <div class="loading__bubble loading__bubble--2"></div>
          <div class="loading__bubble loading__bubble--3"></div>
        </div>
        <p className="message__content message__content--loading">The data is loading&hellip;</p>
        { /* TODO: loading graphic/animation */ }
      </div>
    );
  }
};

export {
  Error,
  Loading
}
