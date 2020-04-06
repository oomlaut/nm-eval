import React, { Component } from 'react';
import './Breweries.css';

class Breweries extends Component {
  render () {

    const { items } = this.props;

    console.dir(items);

    return (
      <section className="breweries">
        <h2 className="breweries__heading">Breweries in <code>Milwaukee</code></h2>
        <p></p>
        { items.length > 0 ? (
          <ul className="breweries__item-container">
          { items.map((brewery) => (
            <li key={ brewery.id } className="breweries__item">
              <h3 className="breweries__name">{ brewery.name }</h3>
              { /* TODO: Add nullchecks to ensure data is present for UI integrity */ }
              <a className="breweres__link breweries__link--site" href={ brewery.website_url } target="_blank" rel="noopener noreferrer">Website</a>
              <a className="breweres__link breweries__link--call" href={ 'tel:+1' + brewery.phone }>Call {brewery.phone}</a>
              <address>
                <span>{ brewery.street }</span>
                <span>{ brewery.city }</span>
                <span>{ brewery.state }</span>
                <span>{ brewery.postal_code }</span>
              </address>
              <a className="breweres__link breweries__link--map" href={ 'https://www.google.com/maps/search/?api=1&query=' + brewery.latitude + ',' + brewery.longitude } target="_blank" rel="noopener noreferrer">Map</a>
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
