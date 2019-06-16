/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';
import Person from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Notifications from '@material-ui/icons/Notifications';

import 'Components/AdminNavigation/AdminNavigation.css';

class AdminNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClick(event) {
    this.setState();
    window.location.href = '/';
    console.log(event.target);
  }

  handleClickBack() {
    const { history } = this.props;
    this.setState();
    history.goBack();
  }

  render() {
    const {
      header,
      isWithHomeButton,
      isWithBackButton,
      isWithNotificationButton,
      isWithAvatar,
      username,
      type,
      imageUrl,
    } = this.props;
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={0}
        className="Navigation"
      >
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          spacing={0}
          className="Left"
          xs={4}
        >
          { isWithNotificationButton && (
            <ButtonBase onClick={this.handleClick}>
              <Notifications />
            </ButtonBase>
          )}
          { isWithHomeButton && (
            <ButtonBase onClick={this.handleClick}>
              <Home />
            </ButtonBase>
          )}
          { isWithBackButton && (
            <ButtonBase onClick={this.handleClickBack}>
              <ArrowBack />
            </ButtonBase>
          )}
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
          className="Middle"
          xs={4}
        >
          <Typography variant="h5">{header}</Typography>
        </Grid>
        {isWithAvatar && (
          <Grid
            container
            item
            direction="row-reverse"
            alignItems="center"
            spacing={1}
            className="Right"
            xs={4}
          >
            <Grid
              container
              item
              md={1}
            >
              { imageUrl ? <Avatar src={imageUrl} /> : <Avatar><Person /></Avatar>}
            </Grid>
            <Grid
              container
              item
              md={11}
              direction="column"
            >
              <Typography variant="subtitle1" align="right"><u>{username}</u></Typography>
              <Typography variant="subtitle1" align="right">{type}</Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

AdminNavigation.defaultProps = {
  header: '',
  username: 'User',
  imageUrl: '',
  type: 'User',
  isWithHomeButton: false,
  isWithBackButton: false,
  isWithNotificationButton: false,
  isWithAvatar: false,
  history: {},
};

AdminNavigation.propTypes = {
  header: PropTypes.string,
  type: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  isWithHomeButton: PropTypes.bool,
  isWithBackButton: PropTypes.bool,
  isWithNotificationButton: PropTypes.bool,
  isWithAvatar: PropTypes.bool,
  history: PropTypes.shape({}),
};

export default AdminNavigation;
