import React, { Component } from 'react'
import './PageTitle.css'

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
