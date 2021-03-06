/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Person from '@material-ui/icons/Person';
import Home from '@material-ui/icons/Home';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Notifications from '@material-ui/icons/Notifications';

import 'Components/Navigation/Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickMyProgress = this.handleClickMyProgress.bind(this);
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

  handleClickMyProgress() {
    this.setState();
    window.location.href = '/promotor-my-progress';
  }

  render() {
    const {
      header,
      isWithHomeButton,
      isWithBackButton,
      isWithNotificationButton,
      isWithMyProgressButton,
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
          spacing={2}
          className="Left"
          xs={4}
        >
          { isWithNotificationButton && (
            <Grid item>
              <ButtonBase onClick={this.handleClick}>
                <Notifications />
              </ButtonBase>
            </Grid>
          )}
          { isWithHomeButton && (
            <Grid item>
              <ButtonBase onClick={this.handleClick}>
                <Home />
              </ButtonBase>
            </Grid>
          )}
          { isWithBackButton && (
            <Grid item>
              <ButtonBase onClick={this.handleClickBack}>
                <ArrowBack />
              </ButtonBase>
            </Grid>
          )}
          { isWithMyProgressButton && (
            <Grid item>
              <Button className="MyProgressButton" onClick={this.handleClickMyProgress}>My Progress</Button>
            </Grid>
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

Navigation.defaultProps = {
  header: '',
  username: 'User',
  imageUrl: '',
  type: '',
  isWithHomeButton: false,
  isWithBackButton: false,
  isWithNotificationButton: false,
  isWithAvatar: false,
  isWithMyProgressButton: false,
  history: {},
};

Navigation.propTypes = {
  header: PropTypes.string,
  type: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  isWithHomeButton: PropTypes.bool,
  isWithBackButton: PropTypes.bool,
  isWithNotificationButton: PropTypes.bool,
  isWithMyProgressButton: PropTypes.bool,
  isWithAvatar: PropTypes.bool,
  history: PropTypes.shape({}),
};

export default Navigation;
