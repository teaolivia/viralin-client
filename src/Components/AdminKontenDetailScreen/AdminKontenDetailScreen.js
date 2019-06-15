/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';

import 'Components/AdminKontenDetailScreen/AdminKontenDetailScreen.css';

class AdminKontenDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match, history } = this.props;
    return (
      <div className="AdminKontenDetail">
        <AdminNavigation isWithBackButton username="Admin" history={history} />
        {match.params.id}
      </div>
    );
  }
}

AdminKontenDetailScreen.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default AdminKontenDetailScreen;
