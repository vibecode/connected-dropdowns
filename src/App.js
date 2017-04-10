import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <span>List 1</span>
        <span>List 2</span>
      </div>
    );
  }
}

export default App;
