import React from 'react';
import './error.css';

const Error = ({ message }) => {

  /* TODO: hide error in non-production environments */
  return (
    <div className="Error message message--error">
      <p className="message__content">An error occurred.</p>
      <pre className="message__caption message__caption--error">{ message }</pre>
    </div>
  );
};

export default Error;
