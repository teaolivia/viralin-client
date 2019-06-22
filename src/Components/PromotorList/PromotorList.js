/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Person from '@material-ui/icons/Person';

const BigAvatar = withStyles({
  root: {
    height: 100,
    width: 100,
  },
})(Avatar);

class PromotorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { promotors } = this.props;
    return (
      <div className="PromotorsContainer">
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          { promotors.map(promotor => (
            <Grid item xs={4} key={promotor.id}>
              <Paper className="PromotorContainer">
                <Grid
                  container
                  spacing={1}
                >
                  <Grid
                    item
                    container
                    justify="flex-end"
                  >
                    <Typography variant="subtitle1">lv.</Typography>
                    <Typography variant="h4">{promotor.level}</Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="center"
                  >
                    <BigAvatar>
                      <Typography variant="h3">
                        <Person fontSize="inherit" />
                      </Typography>
                    </BigAvatar>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="center"
                  >
                    <Typography variant="h5">{promotor.username}</Typography>
                  </Grid>
                  <Grid container item>
                    <Grid item md={4}>
                      <Typography align="center">clicks</Typography>
                      <Typography align="center">{promotor.clicks}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography align="center">likes</Typography>
                      <Typography align="center">{promotor.likes}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography align="center">transaction</Typography>
                      <Typography align="center">{promotor.transactions}</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    spacing={2}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid
                      item
                      md={6}
                      container
                      justify="center"
                    >
                      <Button variant="outlined">
                        Delete
                      </Button>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      container
                      justify="center"
                    >
                      <Button variant="outlined">
                        Message
                      </Button>
                    </Grid>
                  </Grid>
                  {promotor.contents.map(content => (
                    <Grid
                      container
                      item
                      justify="center"
                      key={`${promotor.id}-${content}`}
                    >
                      <Button variant="outlined">{content}</Button>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          )) }
        </Grid>
      </div>
    );
  }
}

PromotorList.defaultProps = {
  promotors: [],
};

PromotorList.propTypes = {
  promotors: PropTypes.arrayOf(PropTypes.object),
};

export default PromotorList;
