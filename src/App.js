import React, { useState } from 'react';

// eslint-disable-next-line import/no-unresolved, import/no-useless-path-segments
import '../src/styles/global.sass';
import styles from './App.module.sass';

import Form from './components/Form';
import Card from './components/Card';
import ListOfCards from './components/ListOfCards';

const INITIAL_CARD = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

function App() {
  const [card, setCard] = useState({
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  });

  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  // const [hasTrunfo, setHasTrunfo] = useState(false);
  const [storageCard, setStorageCard] = useState([]);

  // const checkedHasTrunfo = () => {
  //   const { cardTrunfo } = card;
  //   return cardTrunfo && this.setState({ hasTrunfo: true });
  // };

  const resetState = () => {
    setCard({ ...INITIAL_CARD });
    setIsSaveButtonDisabled(true);
    // this.setState({ ...INITIAL_STATE });
  };

  const onSaveButtonClick = (event) => {
    event.preventDefault();
    checkedHasTrunfo();
    setStorageCard([...storageCard, card]);
    // this.setState(
    //   ({
    //     storageCard,
    //     cardName,
    //     cardDescription,
    //     cardImage,
    //     cardRare,
    //     cardAttr1,
    //     cardAttr2,
    //     cardAttr3,
    //   }) => ({
    //     storageCard: [
    //       ...storageCard,
    //       {
    //         cardName,
    //         cardDescription,
    //         cardImage,
    //         cardRare,
    //         cardAttr1,
    //         cardAttr2,
    //         cardAttr3,
    //       },
    //     ],
    //   }),
    // );
    resetState();
  };

  const onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setCard({ ...card, [name]: value });
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   this.isEmpty,
    // );
  };

  // VERIFICA TOTAL DA PONTUACAO
  // const isEmpty = () => {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardImage,
  //     cardRare,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //   } = this.state;

  //   const isActiveString = [cardName, cardDescription, cardImage, cardRare];
  //   const isActiveNumbers = [
  //     Number(cardAttr1),
  //     Number(cardAttr2),
  //     Number(cardAttr3),
  //   ];

  //   const maxAttrValue = 90;
  //   const maxSumOfValues = 210;
  //   const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

  //   const hasInputString = isActiveString.every((string) => string.length > 0);
  //   const hasInputNumbers = isActiveNumbers.every(
  //     (number) => number >= 0 && number <= maxAttrValue,
  //   );
  //   const ValueSumAreCorrect = sumAttr <= maxSumOfValues;

  //   const hasInputValue = hasInputString && hasInputNumbers && ValueSumAreCorrect;
  //   // console.log(`hasInputValue ${hasInputValue}`);

  //   this.setState({
  //     isSaveButtonDisabled: !hasInputValue,
  //   });
  // };

  return (
    <div className="app">
      <div className={ styles.creatCard }>
        <Form
          card={ card }
          // cardName={ cardName }
          // cardDescription={ cardDescription }
          // cardAttr1={ cardAttr1 }
          // cardAttr2={ cardAttr2 }
          // cardAttr3={ cardAttr3 }
          // cardImage={ cardImage }
          // cardRare={ cardRare }
          // cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ onInputChange }
          // isEmpty={ isEmpty }
          // checkedHasTrunfo={ checkedHasTrunfo }
        />
        <Card
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          storageCard={ storageCard }
        />
      </div>
      <s>
        <ListOfCards storageCard={ storageCard } />
      </s>
    </div>
  );
}
// App.propTypes = {
//   onInputChange: PropTypes.func.isRequired,
//   isEmpty: PropTypes.func.isRequired,
//   maxAttrValue: PropTypes.number.isRequired,
//   maxSumOfValues: PropTypes.number.isRequired,
//   sumAttr: PropTypes.number.isRequired,
//   hasInputString: PropTypes.bool.isRequired,
//   hasInputNumbers: PropTypes.bool.isRequired,
//   ValueSumAreCorrect: PropTypes.bool.isRequired,
//   hasInputValue: PropTypes.bool.isRequired,
// };
export default App;
