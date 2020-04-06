import React from 'react'

const Breweries = ({ breweries }) => {

  const hasItems = (breweries.length === 0) ? false : true;

  return (
    <section>
      <h2>Breweries in <code>Milwaukee</code></h2>
      {hasItems ? (
        <ul>
        {breweries.map((brewery) => (
            <li key={brewery.id}><a href="{brewery.website_url}">{brewery.name}</a></li>
        ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
    </section>
  )
};

export default Breweries
