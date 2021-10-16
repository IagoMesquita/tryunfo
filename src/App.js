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
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    const isActiveString = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ];
    const isActiveNumbers = [
      Number(cardAttr1),
      Number(cardAttr2),
      Number(cardAttr3),
    ];

    const maxAttrValue = 90;
    const maxSumOfValues = 210;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    const hasInputString = isActiveString.every((string) => string.length > 0);
    const hasInputNumbers = isActiveNumbers.every((number) => number >= 0
    && number <= maxAttrValue);
    const ValueSumAreCorrect = sumAttr <= maxSumOfValues;

    const hasInputValue = (hasInputString && hasInputNumbers && ValueSumAreCorrect);
    // console.log(`hasInputValue ${hasInputValue}`);

    this.setState({
      isSaveButtonDisabled: !hasInputValue,
    });
  }

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
