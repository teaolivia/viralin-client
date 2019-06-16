/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';

import 'Components/PromotorDashboardScreen/PromotorDashboardScreen.css';

const dummyData = {
  username: 'Joko',
  role: 'Promotor',
};

class PromotorDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: dummyData };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="PromotorDashboardScreen">
        <AdminNavigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          isWithMyProgressButton
          username={data.username}
          type={data.role}
        />
      </div>
    );
  }
}

export default PromotorDashboardScreen;
