import React from 'react'
import './FilterField.css'

/* TODO: Debug and implement as hook/component into the fieldset view to pass change value back to parent */

class FilterField extends React.Component {
  state = {
    value: this.props.defaultValue || '',

  }

  handleChange = event => {
    const { onChange } = this.props
    const { value } = event.target
    this.setState({ value })
    if (onChange) {
      onChange(value)
    }
  }

  render () {
    const { value } = this.state
    const { disabled } = this.props

    return (
      <fieldset className="FilterField">
        <legend className="FilterField__heading">User Input</legend>
        <label className="FilterField__text-label" htmlFor="filterText">Filter by:</label>
        <input
          onChange={ this.handleChange }
          id="filterText"
          className="FilterField__text-input"
          type="text"
          placeholder="Filter Text"
          value={ value }
          disabled={ disabled }
        />
      </fieldset>
    )
  }
}

export default FilterField
