/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect, withRouter } from 'react-router-dom';
import AWS from 'aws-sdk';

import 'Components/PromotorLoginScreen/PromotorLoginScreen.css';
import logo1 from 'images/logo1.png';
import logo2 from 'images/logo2.png';

const BASE_URL = require('config').base_url;

class PromotorLoginScreen extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      tabValue: 0,
      username: '',
      password: '',
      thisDashboard: false
    };
    this.changeTabValue = this.changeTabValue.bind(this);
    this.changeUsernameValue = this.changeUsernameValue.bind(this);
    this.changePasswordValue = this.changePasswordValue.bind(this);
    this.loginButtonClickHandler = this.loginButtonClickHandler.bind(this);
    this.changeAdminValue = this.changeAdminValue.bind(this);
    this.loginPromotor = this.loginPromotor.bind(this);
    this.changeTabValue(null, 0);
  }

  // setRedirect = () => {
  //   this.setState({
  //     thisDashboard: true
  //   })
  // }

  renderRedirect = () => {
    if (this.state.thisDashboard) {
      return <Redirect to='/promotor-dashboard' />
    }
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

  loginButtonClickHandler(event) {
    const {
      username,
      password,
    } = this.state;
    event.preventDefault();
      this.loginPromotor(username, password);
  }

  loginPromotor(username, password, event){
    const {
      thisDashboard
    } = this.state;
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
        FunctionName : 'login-promotor',
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
            window.location.href= BASE_URL + '/promotor-dashboard';
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
  }

  render() {
    const {
      username,
      password,
    } = this.state;
    if (this.state.thisDashboard === true) {
      return <Redirect to='/promotor-dashboard' />
    }
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
                      onClick={this.loginButtonClickHandler}
                    >
                      <Typography variant="subtitle1">Login Sebagai Promotor</Typography>
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
                      <Link to="/login-pebisnis" className="Link">Klik Di Sini</Link>
                      &nbsp; Untuk Login Sebagai Pebisnis
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

export default PromotorLoginScreen;
