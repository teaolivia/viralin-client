/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';
import PromotorKontenViralMyProgress from 'Components/PromotorKontenViralMyProgress/PromotorKontenViralMyProgress';

import 'Components/PromotorMyProgressScreen/PromotorMyProgressScreen.css';

const dummyData = {
  username: 'Joko',
  role: 'Promotor',
};


const activeData = {
  id: '1',
  title: 'Indihome Paket Gamer',
  seller: 'Joko',
  rule: '2 transaksi = 1 poin',
  reward: 100000,
  status: 'TRUE',
  referral: 0,
  maxReferral: 0,
  duration_start: '01/01/2019',
  duration_end: '01/10/2019',
  likes: 0,
  clicks: 0,
  transactions: 0,
  points: 0,
};

const activeData2 = {
  id: '2',
  title: 'Indihome Paket Gamer',
  seller: 'Joko',
  rule: '2 transaksi = 1 poin',
  reward: 0,
  status: 'TRUE',
  referral: 0,
  maxReferral: 0,
  duration_start: '01/01/2019',
  duration_end: '01/10/2019',
  likes: 0,
  clicks: 0,
  transactions: 0,
  points: 0,
};

const rowsData = [
  activeData,
  activeData2,
];

class PromotorMyProgressScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      activeRows: rowsData.filter(row => row.status === 'TRUE'),
    };
  }

  render() {
    const { data, activeRows } = this.state;
    return (
      <div className="PromotorMyProgressScreen">
        <AdminNavigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          username={data.username}
          type={data.role}
        />
        <div className="MainContainer">
          <Paper className="Main">
            <div>
              <Typography className="Header" variant="h5">My Progress</Typography>
            </div>
            <br />
            <PromotorKontenViralMyProgress
              className="Tabel"
              rows={activeRows}
              name="name"
              header="Header"
            />
          </Paper>
        </div>
      </div>
    );
  }
}

export default PromotorMyProgressScreen;
