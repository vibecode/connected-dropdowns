import React, { Component } from 'react';

class List extends Component {

  render() {
    let { name, items, value, onChangeHandler } = this.props;
    const options = [];

    options.push(<option value={name}>{name}</option>);

    items.forEach(item => {
      options.push(<option value={item}>{item}</option>)
    });

    if (value === null) {
      value = name;
    }

    return (
        <select className="list" value={value} onChange={onChangeHandler}>
          {options}
        </select>);
  }
}

export default List;