import React from 'react'

// hooks

function FilterField({ defaultValue = '', onChange }) {
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

class FilterField extends React.Component {
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
