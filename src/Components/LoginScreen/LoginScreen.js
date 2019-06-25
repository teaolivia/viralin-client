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
import { Link } from 'react-router-dom';
import AWS from 'aws-sdk';

import 'Components/LoginScreen/LoginScreen.css';

import TabContainer from 'Components/TabContainer/TabContainer';
import Logo from 'Components/Logo/Logo';

const ADMIN_PASSWORD = 'asdf';

const BASE_URL = require('config').base_url;

const login = (type, username, password, urlNext) => {
  if (username == '' || password == '') {
    alert('Isi username dan password');
  }
  else {
    AWS.config.update({
      region: 'ap-southeast-1',
      credentials: new AWS.Credentials({
        accessKeyId: "AKIA6AOWNMA4JZGARCNX",
        secretAccessKey: "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"
      })
    });
    var lambda = new AWS.Lambda({region: 'ap-southeast-1', apiVersion: '2015-03-31'});
    // create JSON object for parameters for invoking Lambda function
    var pullParams = {
      FunctionName : type,
      InvocationType : 'RequestResponse',
      LogType : 'None',
      Payload : '{"username": "'+username+'", "password": "'+password+'"}'
    };
    // create variable to hold data returned by the Lambda function
    var pullResults;

    lambda.invoke(pullParams, function(error, data) {
      if (error) {
        console.log(error);
        alert("error");
      } else {
        pullResults = JSON.parse(data.Payload);
        console.log(pullResults);
        if (pullResults.statusCode == 200) {
          window.location.href = urlNext;
        }
        else if (pullResults.body.message != null || pullResults.body.message != "") {
          alert(pullResults.body.message);
        }
        else {
          alert("Terjadi kesalahan");
        }
      }
    });
  }
};

const loginAdmin = (username, password) => {
  login("login-admin", username, password, BASE_URL+"/admin-dashboard");
};

const loginSeller = (username, password) => {
  login("login-seller", username, password, BASE_URL+"/seller-dashboard");
};

const loginPromotor = (username, password) => {
  login("login-promotor", username, password, BASE_URL+"/promotor-dashboard");
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
