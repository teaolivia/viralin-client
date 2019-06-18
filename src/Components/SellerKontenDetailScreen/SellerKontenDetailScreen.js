/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

class SellerKontenDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SellerKontenDetailScreen">a</div>
    );
  }
}

SellerKontenDetailScreen.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default SellerKontenDetailScreen;
