import React, { Component } from 'react'
import './Breweries.css'

/* Summary:
    Renders the markup for the list of breweries.
    Expects an object to iterate over and output items in a structured format.
    Business logic of filtering and ordering the object takes place at a higher level in the application.
    */

class Breweries extends Component {
  render () {
    const { items } = this.props

    return (
      <section className="Breweries">
        <h2 className="Breweries__heading">Breweries in <span className="Breweries__locale">Milwaukee</span></h2>
        { items !== undefined && items.length > 0 ? (
          <ul className="Breweries__item-container">
          { items.map((brewery) => (
            <li key={ brewery.id } className="Breweries__item">
              { /* TODO: Add nullchecks to ensure data is present for UI integrity */ }
              <h3 className="Breweries__name">{ brewery.name }</h3>
              <div className="Breweries__row-wrap">
                <div className="Breweries__row-item Breweries__row-item--site">
                  <a className="Breweries__link" href={ brewery.website_url } target="_blank" rel="noopener noreferrer">Website</a>
                </div>
                <div className="Breweries__row-item Breweries__row-item--map">
                  { /* Match and replace the spaces from the name inline to properly build the map link */ }
                  <a className="Breweries__link" href={ `https://www.google.com/maps/search/?api=1&query=${brewery.name.replace(' ', '+')}+${brewery.latitude},${brewery.longitude}` } target="_blank" rel="noopener noreferrer">Map</a>
                </div>
                <div className="Breweries__row-item Breweries__row-item--call">
                  { /* Use template literals instead of string concatenation because ES6 */ }
                  <a className="Breweries__link" href={ `tel:+1${brewery.phone}` }>Call</a>
                </div>
              </div>
            </li>
          )) }
          </ul>
        ) : (
          <p className="Breweries__empty">No items to display.</p>
        ) }

      </section>
    )
  }
}

export default Breweries
