import React, { Component } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: null,
      model: null
    };

    this.onBrandChanged = this.onBrandChanged.bind(this);
    this.onModelChanged = this.onModelChanged.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  isKnownBrand(brand) {
    return this.getBrands().indexOf(brand) !== -1;
  }

  onBrandChanged(ev) {
    const brand = ev.target.value;

    if (this.isKnownBrand(brand)) {
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

  isKnownModel(model) {
    return this.getModels().indexOf(model) !== -1;
  }

  onModelChanged(ev) {
    const model = ev.target.value;

    if (this.isKnownModel(model)) {
      this.setState({ model })
    } else {
      this.setState({ model: null })
    }
  }

  getBrands() {
    return Object.keys(this.props.data);
  }

  getModels() {
    const { brand } = this.state;
    return brand !== null ? this.props.data[brand] : [];
  }

  onButtonClick() {
    const { brand, model} = this.state;
    alert(`${brand} ${model} riding...`);
  }

  isButtonDisabled() {
    return (this.state.brand === null || this.state.model === null);
  }

  render() {
    return (
        <div id={this.props.id}>
          <List name="Brand"
                items={this.getBrands()}
                value={this.state.brand}
                onChangeHandler={this.onBrandChanged}
          />

          <List name="Model"
                items={this.getModels()}
                value={this.state.model}
                onChangeHandler={this.onModelChanged}
          />

          <button onClick={this.onButtonClick}
                  disabled={this.isButtonDisabled()}>
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
