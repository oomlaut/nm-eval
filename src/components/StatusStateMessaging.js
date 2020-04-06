import React, { Component } from 'react';
import './StatusStateMessaging.css';

class Error extends Component {
  render () {
    const { message } = this.props;
    return (
      <div className="Error message message--error">
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
      <div className="Loading message message--loading">
        <p className="message__content message__content--loading">The data is loading.</p>
        { /* TODO: loading graphic/animation */ }
      </div>
    );
  }
};

export {
  Error,
  Loading
}
