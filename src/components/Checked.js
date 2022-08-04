import PropTypes from 'prop-types';
import React from 'react';

class Checked extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo">
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          id="trunfo"
        />
        Super Trunfo
      </label>
    );
  }
}

Checked.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checked;
