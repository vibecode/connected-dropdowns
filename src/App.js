import React, { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: null,
      model: null
    };

    this.brandChanged = this.brandChanged.bind(this);
    this.modelChanged = this.modelChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  knownBrand(brand) {
    return this.brands().indexOf(brand) !== -1;
  }

  brandChanged(ev) {
    const brand = ev.target.value;

    if (this.knownBrand(brand)) {
      this.setState({
        brand,
        model: null
      })
    } else {
      this.setState({
        brand: null,
        model: null
      })
    }
  }

  knownModel(model) {
    return this.models().indexOf(model) !== -1;
  }

  modelChanged(ev) {
    const model = ev.target.value;

    if (this.knownModel(model)) {
      this.setState({ model })
    } else {
      this.setState({ model: null })
    }
  }

  brands() {
    return Object.keys(this.props.data);
  }

  models() {
    const { brand } = this.state;
    return brand !== null ? this.props.data[brand] : [];
  }

  buttonClicked() {
    const { brand, model} = this.state;
    alert(`${brand} ${model} riding...`);
  }

  buttonDisabled() {
    return (this.state.brand === null || this.state.model === null);
  }

  render() {
    return (
        <div id={this.props.id}>
          <List name="Brand"
                items={this.brands()}
                value={this.state.brand}
                onChangeHandler={this.brandChanged}
          />

          <List name="Model"
                items={this.models()}
                value={this.state.model}
                onChangeHandler={this.modelChanged}
          />

          <button onClick={this.buttonClicked}
                  disabled={this.buttonDisabled()}>
            ride
          </button>
        </div>
    );
  }
}

App.defaultProps = {
  data: {
    'Opel': ['Agila', 'Astra', 'Corsa', 'Vectra'],
    'Skoda': ['Fabia', 'Octavia', 'Superb', 'Yeti'],
    'Toyota': ['Auris', 'Avensis', 'Corolla', 'Prius']
  }
};

export default App;
