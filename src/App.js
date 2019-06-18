/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from 'Components/LoginScreen/LoginScreen';
import RegisterScreen from 'Components/RegisterScreen/RegisterScreen';
import AdminDashboardScreen from 'Components/AdminDashboardScreen/AdminDashboardScreen';
import PromotorDatabaseScreen from 'Components/PromotorDatabaseScreen/PromotorDatabaseScreen';
import SellerDatabaseScreen from 'Components/SellerDatabaseScreen/SellerDatabaseScreen';
import AdminKelolaKontenViralScreen from 'Components/AdminKelolaKontenViralScreen/AdminKelolaKontenViralScreen';
import AdminKontenDetailScreen from 'Components/AdminKontenDetailScreen/AdminKontenDetailScreen';
import ProfileScreen from 'Components/ProfileScreen/ProfileScreen';
import PromotorDashboardScreen from 'Components/PromotorDashboardScreen/PromotorDashboardScreen';
import PromotorMyProgressScreen from 'Components/PromotorMyProgressScreen/PromotorMyProgressScreen';

import SellerDashboardScreen from './Components/SellerDashboardScreen/SellerDashboardScreen';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LoginScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/seller-dashboard" exact component={SellerDashboardScreen} />
          <Route path="/admin-dashboard" exact component={AdminDashboardScreen} />
          <Route path="/admin-kelola-konten-viral" exact component={AdminKelolaKontenViralScreen} />
          <Route path="/admin-konten-detail/:id" exact component={AdminKontenDetailScreen} />
          <Route path="/seller-database" exact component={SellerDatabaseScreen} />
          <Route path="/promotor-database" exact component={PromotorDatabaseScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/promotor-dashboard" exact component={PromotorDashboardScreen} />
          <Route path="/promotor-my-progress" exact component={PromotorMyProgressScreen} />
          <Route path="/seller-konten-detail/:id" exact component={AdminKontenDetailScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
