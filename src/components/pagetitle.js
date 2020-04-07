import React, { Component } from 'react'
import './PageTitle.css'

/* Summary:
    Display the static markup used consistently across the top of the viewport.
    Expects no props/parameters, contains no dynamic output.
    */

class PageTitle extends Component {
  render () {
    return (
      <section className="PageTitle">
        <h1 className="PageTitle__heading">NM Programming Evaluation</h1>
        <a className="PageTitle__link" href="https://github.com/oomlaut/nm-eval">View on GitHub</a>
      </section>
    )
  }
}

export default PageTitle
