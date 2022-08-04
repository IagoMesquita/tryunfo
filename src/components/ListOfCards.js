import PropTypes from 'prop-types';
import React from 'react';

class ListOfCards extends React.Component {
  render() {
    const { storageCard } = this.props;
    return (
      storageCard.map((card) => (
        <div key={ card.cardName }>
          <h1 data-testid="name-card">{ card.cardName }</h1>
          <img data-testid="image-card" src={ card.cardImage } alt={ card.cardName } />
          <p data-testid="description-card">{ card.cardDescription }</p>
          <h3 data-testid="attr1-card">{ card.cardAttr1 }</h3>
          <h3 data-testid="attr2-card">{ card.cardAttr2 }</h3>
          <h3 data-testid="attr3-card">{ card.cardAttr3 }</h3>
          <h3 data-testid="rare-card">{ card.cardRare }</h3>
          <button type="button" data-testid="delete-button">Excluir</button>
        </div>))

    );
  }
}

ListOfCards.propTypes = {
  storageCard: PropTypes.arrayOf(PropTypes.object).isRequired };

export default ListOfCards;
