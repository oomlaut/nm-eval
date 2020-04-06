import React from 'react';
import './loading.css';

const Loading = () => {
    return (
      <div className="Loading message message--loading">
        <p className="message__content message__content--loading">The data is loading.</p>
        { /* TODO: loading graphic/animation */ }
      </div>
    );
};

export default Loading;
