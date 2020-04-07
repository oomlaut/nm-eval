import React from 'react'

/* TODO: Debug and implement as hook/component into the fieldset view to pass change value back to parent */

// hooks

function FilterFieldHook({ defaultValue = '', onChange }) {
  const [state, setState] = React.useState(defaultValue);

  const handleChange = event => {
    const { value } = event.target;
    setState(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <input type="text" value={state} onChange={handleChange} />
  );
};

// component

class FilterFieldComponent extends React.Component {
  state = {
    value: this.props.defaultValue || '',
  }

  handleChange = event => {
    const { onChange } = this.props;
    const { value } = event.target;
    this.setState({ value });
    if (onChange) {
      onChange(value);
    }
  };

  render () {
    const { value } = this.state;
    return (
      <input type="text" value={value} onChange={this.handleChange} />
    );
  }
}

export default FilterField;
