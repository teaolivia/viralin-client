/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';
import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';

import 'Components/ProfileScreen/ProfileScreen.css';

const styles = {
  profileContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    paddingTop: 20,
  },
  profile: {
    paddingLeft: 300,
    paddingRight: 300,
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
    fontSize: 100,
  },
  button: {
    border: '1px solid',
    borderRadius: 3,
    boxShadow: 'rgba(0,0,0,0.5) 5px 5px',
  },
};

const dummyData = {
  isSeller: true,
  level: 'S',
  username: 'Joko',
};


class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: dummyData };
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className="ProfileScreen">
        <AdminNavigation isWithHomeButton isWithNotificationButton />
        <div className={classes.profile}>
          <Paper className={classes.profileContainer}>
            <Grid
              container
              direction="column"
            >
              <Grid
                item
              >
                { data.isSeller && <Typography variant="h6" align="right">Juragan</Typography> }
                { !data.isSeller && <Typography variant="h6" align="right">{`Lv. ${data.level}`}</Typography> }
              </Grid>
              <Grid
                item
                container
                alignItems="stretch"
                justify="center"
                direction="column"
              >
                <Grid
                  item
                  container
                  alignItems="center"
                  justify="center"
                >
                  <Typography variant="h1" align="center">
                    <Avatar className={classes.bigAvatar}>
                      <Person fontSize="inherit" />
                    </Avatar>
                  </Typography>
                </Grid>
                <Grid
                  item
                >
                  <Typography variant="h3" align="center">{data.username}</Typography>
                </Grid>
                <Grid
                  item
                >
                  <Divider variant="middle" />
                </Grid>
                <Grid
                  item
                >
                  { data.isSeller && <Typography variant="h4" align="center">Seller</Typography> }
                  { !data.isSeller && <Typography variant="h4" align="center">Promotor</Typography> }
                  <br />
                </Grid>
              </Grid>
              <Grid
                item
                container
                alignItems="center"
                justify="center"
              >
                <Button className={classes.button}>
                  <Typography variant="h6">Upload Profile Picture</Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

ProfileScreen.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ProfileScreen);
