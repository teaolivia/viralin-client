/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'Components/LoginScreen/LoginScreen.css';

import TabContainer from 'Components/TabContainer/TabContainer';

const ADMIN_PASSWORD = 'asdf';

const DB_URL = require('Config').db_url;
const BASE_URL = require('Config').base_url;

const login = (url, username, password, urlNext) => {
  if (username == '' || password == '') {
    alert('Isi username dan password');
  }
  else {
    axios.get(url+'?username='+username)
        .then(response => {
          console.log(response.data)
          if (response.data.length == 1) {
            if (response.data[0].username == username && response.data[0].password == password) {
              // DO SOMETHING HERE
              window.location.href = urlNext;
            }
            else {
              alert('Username atau password salah');
            }
          }
          else {
            alert('Username atau password salah');
          }
        })
        .catch(error => {
          console.log(error);
          alert('Terjadi kesalahan');
        });
  }
};

const loginAdmin = (username, password) => {
  login(DB_URL+"/admin", username, password, BASE_URL+"/admin-dashboard");
};

const loginSeller = (username, password) => {
  login(DB_URL+"/sellers", username, password, BASE_URL+"/seller-dashboard");
};

const loginPromotor = (username, password) => {
  login(DB_URL+"/promotors", username, password, BASE_URL+"/promotor-dashboard");
};

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      username: '',
      password: '',
    };
    this.changeTabValue = this.changeTabValue.bind(this);
    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.loginButtonClickHandler = this.loginButtonClickHandler.bind(this);
    this.changeAdminValue = this.changeAdminValue.bind(this);
    this.changeTabValue(null, 0);
  }

  changeTabValue(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  changeUsernameValue(event) {
    this.setState({ username: event.target.value });
  }

  changePasswordValue(event) {
    this.setState({ password: event.target.value });
  }

  changeAdminValue(event) {
    this.setState({ adminValue: event.target.value });
  }

  loginButtonClickHandler() {
    const {
      username,
      password,
      tabValue,
      adminValue,
    } = this.state;
    switch (tabValue) {
      case 0:
        // Login pebisnis
        loginSeller(username, password);
        break;
      case 1:
        // Login promotor
        loginPromotor(username, password);
        break;
      case 2:
        // Login admin
        loginAdmin(username, password);
        break;
      default:
        break;
    }
  }

  render() {
    const {
      tabValue,
      username,
      password,
    } = this.state;
    return (
      <div className="LoginScreen">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <Typography className="Header" variant="h1" component="h2" align="center">
                VIRALIN
            </Typography>
          </Grid>
          <Grid item xs={12}><br /></Grid>
          <Grid item xs={3} />
          <Grid item xs={12} sm={6}>
            <Container>
              <Paper className="Paper">
                <Tabs
                  value={tabValue}
                  onChange={this.changeTabValue}
                >
                  <Tab label="Akun Bisnis" />
                  <Tab label="Akun Promotor" />
                  <Tab label="Akun Admin" />
                </Tabs>
                <TabContainer>
                  <TextField
                    id="filled-username"
                    label="Username"
                    className="TextField"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    value={username}
                    onChange={this.changeUsernameValue}
                  />
                  <TextField
                    id="filled-password"
                    label="Password"
                    className="TextField"
                    margin="normal"
                    variant="filled"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={this.changePasswordValue}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className="Button"
                    onClick={this.loginButtonClickHandler}
                  >
                    <Typography variant="subtitle1">Login</Typography>
                  </Button>
                  {
                    (tabValue === 0 || tabValue === 1)
                      && (
                      <Box component="span">
                        <br />
                        <br />
                        <Link to="/forgot-password" className="Button">Forgot Password?</Link>
                        &nbsp; | &nbsp;
                        <Link to="/register" className="Button">Register</Link>
                      </Box>
                      )
                  }
                </TabContainer>
              </Paper>
              {
                (tabValue === 0 || tabValue === 1)
                  && (
                    <Typography variant="subtitle1">
                      <br />
                      Promosi? Viralin ajaaa..
                    </Typography>
                  )
              }
            </Container>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default LoginScreen;
