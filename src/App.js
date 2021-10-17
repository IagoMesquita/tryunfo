import React from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  // hasTrunfo: false,
  isSaveButtonDisabled: true,
  // onSaveButtonClick: false,
};
class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.checkedHasTrunfo = this.checkedHasTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // onSaveButtonClick: false,
      storageCard: [],
    };
  }

  // checkedTrunfo () {
  //   const { storageCard } = this.state;
  //   storageCard.checked === true && this.setState({})
  // }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.checkedHasTrunfo();
    this.setState(({
      storageCard, cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3,
    }) => ({
      storageCard: [...storageCard,
        { cardName,
          cardDescription,
          cardImage,
          cardRare,
          cardAttr1,
          cardAttr2,
          cardAttr3 }],
    }));
    this.resetState();
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.isEmpty);
  }

  checkedHasTrunfo() {
    const { cardTrunfo } = this.state;
    return cardTrunfo && this.setState({ hasTrunfo: true });
  }

  resetState() {
    this.setState({ ...INITIAL_STATE });
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
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, checkedHasTrunfo,
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
          isEmpty={ this.isEmpty }
          checkedHasTrunfo={ checkedHasTrunfo }
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
          hasTrunfo={ hasTrunfo }
        />
      </div>
    );
  }
}
App.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isEmpty: PropTypes.func.isRequired,
  maxAttrValue: PropTypes.number.isRequired,
  maxSumOfValues: PropTypes.number.isRequired,
  sumAttr: PropTypes.number.isRequired,
  hasInputString: PropTypes.bool.isRequired,
  hasInputNumbers: PropTypes.bool.isRequired,
  ValueSumAreCorrect: PropTypes.bool.isRequired,
  hasInputValue: PropTypes.bool.isRequired,
};
export default App;
