import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
      // onSaveButtonClick: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.isEmpty);
  }

  isEmpty() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    const isActive = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ];

    const activeButtonSave = isActive.every((active) => active.length > 0);

    this.setState({
      isSaveButtonDisabled: !activeButtonSave,
    });
  }

  // isEmpty() {
  //   const elementos = [cardName, cardDescription, cardImage, cardRare];
  //   elementos.forEach(((elemento) => elemento.length > 0
  //   && this.setState({ isSaveButtonDisabled: false })));
  // }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
    } = this.state;

    return (
      <div className="app">
        <Form
          { ...this.state }
          // cardName={ cardName }
          // cardDescription={ cardDescription }
          // cardAttr1={ cardAttr1 }
          // cardAttr2={ cardAttr2 }
          // cardAttr3={ cardAttr3 }
          // cardImage={ cardImage }
          // cardRare={ cardRare }
          // cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          isEmpty={ this.isEmpty }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

App.propTypes = {
  isEmpty: PropTypes.func.isRequired,
};

export default App;
