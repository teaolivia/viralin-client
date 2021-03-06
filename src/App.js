/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLoginScreen from 'Components/AdminLoginScreen/AdminLoginScreen';
import PromotorLoginScreen from 'Components/PromotorLoginScreen/PromotorLoginScreen';
import SellerLoginScreen from 'Components/SellerLoginScreen/SellerLoginScreen';
import RegisterScreen from 'Components/RegisterScreen/RegisterScreen';
import AdminDashboardScreen from 'Components/AdminDashboardScreen/AdminDashboardScreen';
import PromotorDatabaseScreen from 'Components/PromotorDatabaseScreen/PromotorDatabaseScreen';
import SellerDatabaseScreen from 'Components/SellerDatabaseScreen/SellerDatabaseScreen';
import AdminKelolaKontenViralScreen from 'Components/AdminKelolaKontenViralScreen/AdminKelolaKontenViralScreen';
import AdminKontenDetailScreen from 'Components/AdminKontenDetailScreen/AdminKontenDetailScreen';
import ProfileScreen from 'Components/ProfileScreen/ProfileScreen';
import PromotorDashboardScreen from 'Components/PromotorDashboardScreen/PromotorDashboardScreen';
import PromotorMyProgressScreen from 'Components/PromotorMyProgressScreen/PromotorMyProgressScreen';
import SellerDashboardScreen from 'Components/SellerDashboardScreen/SellerDashboardScreen';
import SellerKontenDetailScreen from 'Components/SellerKontenDetailScreen/SellerKontenDetailScreen';
import SellerCreateKontenScreen from 'Components/SellerCreateKontenScreen/SellerCreateKontenScreen';
import SellerMyPromotorScreen from 'Components/SellerMyPromotorScreen/SellerMyPromotorScreen';
import Home from 'Components/Home/Home';
import HowItWorks from 'Components/HowItWorks/HowItWorks';
import AboutUs from 'Components/AboutUs/AboutUs';
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
          <Route path="/" exact component={Home} />
          <Route path="/cara-kerja" exact component={HowItWorks} />
          <Route path="/tentang-kami" exact component={AboutUs} />
          <Route path="/login-admin" exact component={AdminLoginScreen} />
          <Route path="/login-promotor" exact component={PromotorLoginScreen} />
          <Route path="/login-pebisnis" exact component={SellerLoginScreen} />
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
          <Route path="/seller-konten-detail/:id" exact component={SellerKontenDetailScreen} />
          <Route path="/seller-add-konten/" exact component={SellerCreateKontenScreen} />
          <Route path="/seller-my-promotor/" exact component={SellerMyPromotorScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
