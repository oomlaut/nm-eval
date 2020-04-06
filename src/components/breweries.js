import React, { Component } from 'react';
import './breweries.css';

class Breweries extends Component {
  render () {
    
    const { items } = this.props;

    return (
      <section className="breweries">
        <h2 className="breweries__heading">Breweries in <code>Milwaukee</code></h2>
        { items.length > 0 ? (
          <ul className="breweries__item-container">
          { items.map((brewery) => (
              <li key={brewery.id} className="breweries__item">
                <a href="{brewery.website_url}">{brewery.name}</a>
              </li>
          )) }
          </ul>
        ) : (
          <p className="breweries__empty">No items to display.</p>
        ) }

      </section>
    )
  }
};

export default Breweries;
