/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AWS from 'aws-sdk';

import 'Components/SellerLoginScreen/SellerLoginScreen.css';
import logo1 from 'images/logo1.png';
import logo2 from 'images/logo2.png';


const BASE_URL = require('config').base_url;

const loginSeller = (username, password) => {
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
      FunctionName : 'login-seller',
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
          window.location.href= BASE_URL + '/seller-dashboard';
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

class SellerLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      dashboardValue: '',
      username: '',
      password: '',
    };
    this.changeTabValue = this.changeTabValue.bind(this);
    this.changeDashboardValue = this.changeDashboardValue.bind(this);
    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.loginButtonClickHandler = this.loginButtonClickHandler.bind(this);
    this.changeAdminValue = this.changeAdminValue.bind(this);
    this.redirectToSellerDashboard = this.redirectToSellerDashboard.bind(this);
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

  changeDashboardValue(event) {
    this.setState({ dashboardValue: event.target.value});
  }

  loginButtonClickHandler() {
    const {
      username,
      password,
      tabValue,
      adminValue,
      dashboardValue
    } = this.state;
    switch (tabValue) {
      case 0:
        // Login pebisnis
        dashboardValue = '/seller-dashboard'
        loginSeller(username, password);
        break;
      case 1:
        // LogSellerpromotor
        dashboardValue = 'promotor-dashboard'
        loginPromotor(username, password);
        break;
      case 2:
        // Login admin
        dashboardValue = '/admin-dashboard'
        loginAdmin(username, password);
        break;
      default:
        break;
    }
  }

  redirectToSellerDashboard() {
    let path = `/seller-dashboard`;
    this.props.history.push(path);
  }

  render() {
    const {
      tabValue,
      username,
      password,
      dashboardValue,
    } = this.state;
    return (
      <div className="PromotorLoginScreen">
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
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                  >
                    <img src={logo2} alt="logo2" className="Logo" />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                  >
                    <img src={logo1} alt="logo1" className="Logo" />
                  </Grid>
                  <Grid item xs={12}>
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
                  </Grid>
                  <Grid item xs={12}>
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
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className="Button"
                      onClick={this.changeDashboardValue}
                    >
                      <Typography variant="subtitle1">Login Sebagai Pebisnis</Typography>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                  >
                    <Typography variant="subtitle2">
                      <Link to="/forgot-password" className="Link">Lupa Password?</Link>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                  >
                    <Typography variant="subtitle2">
                      <Link to="/login-promotor" className="Link">Klik Di Sini</Link>
                      &nbsp; Untuk Login Sebagai Promotor
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

export default SellerLoginScreen;
