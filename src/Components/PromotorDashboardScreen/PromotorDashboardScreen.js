/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Navigation from 'Components/Navigation/Navigation';
import PromotorKontenViralDashboard from 'Components/PromotorKontenViralDashboard/PromotorKontenViralDashboard';

import 'Components/PromotorDashboardScreen/PromotorDashboardScreen.css';

const dummyData = {
  username: 'Joko',
  role: 'Promotor',
};


const activeData = {
  id: '1',
  title: 'Buy 1 Get 1',
  seller: 'Ayam Bakar Mas Stereo',
  rule: 'Beli paket minimal 50.000 gratis satu porsi Nasi Timbel',
  reward: 'satu porsi nasi timbel',
  status: 'TRUE',
  referral: 0,
  maxReferral: 0,
  duration_start: '01/01/2019',
  duration_end: '01/02/2019',
  link: 'https://myviralin.com/seller2/data1'
};

const activeData2 = {
  id: '2',
  title: 'Indihome Paket Gamer',
  seller: 'Telkomsel',
  rule: '2 transaksi = 1 poin',
  reward: '@poin = Rp 50.000,-',
  status: 'TRUE',
  referral: 0,
  maxReferral: 0,
  duration_start: '01/01/2019',
  duration_end: '01/02/2019',
  link: 'https://myviralin.com/seller1/data2'
};

const rowsData = [
  activeData,
  activeData2,
];

class PromotorDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      activeRows: rowsData.filter(row => row.status === 'TRUE'),
      searchInput: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    const { data, activeRows, searchInput } = this.state;
    return (
      <div className="PromotorDashboardScreen">
        <Navigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          isWithMyProgressButton
          username={data.username}
          type={data.role}
        />
        <div className="SearchContainer">
          <Paper className="Search">
            <TextField
              fullWidth
              placeholder="Cari"
              value={searchInput}
              onChange={this.handleSearch}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
              }}
            />
          </Paper>
        </div>
        <PromotorKontenViralDashboard
          className="Tabel"
          rows={activeRows}
          name="name"
          header="Header"
        />
      </div>
    );
  }
}

export default PromotorDashboardScreen;
