/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Person from '@material-ui/icons/Person';
import Favorite from '@material-ui/icons/Favorite';
import CalendarToday from '@material-ui/icons/CalendarToday';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Group from '@material-ui/icons/Group';

import 'Components/PromotorKontenViralMyProgress/PromotorKontenViralMyProgress.css';

const today = new Date();

const ThickLinearProgress = withStyles({
  root: {
    height: 30,
  },
})(LinearProgress);

class PromotorKontenViralMyProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickMore = this.handleClickMore.bind(this);
  }


  handleClickMore(index) {
    this.setState();
    const baseUrl = './admin-konten-detail/';
    const direct = baseUrl + index;
    window.location.href = direct;
  }

  render() {
    const {
      rows,
      className,
    } = this.props;
    return (
      <Grid
        className="PromotorKontenViralMyProgress"
        container
        spacing={2}
        direction="column"
      >
        {/* untuk yang listview */}
        { rows.map((row) => {
          let progress = 0;
          let startDate;
          let endDate;
          if (row.duration_start) {
            startDate = new Date(
              row.duration_start.slice(6, 10),
              parseInt(row.duration_start.slice(3, 5), 10) - 1,
              row.duration_start.slice(0, 2),
            );
            endDate = new Date(
              row.duration_end.slice(6, 10),
              parseInt(row.duration_end.slice(3, 5), 10) - 1,
              row.duration_end.slice(0, 2),
            );
            progress = ((today - startDate) / (endDate - startDate)) * 100;
          }
          return (
            <Grid item key={row.id}>
              <Paper className="Item">
                <Grid
                  container
                  direction="column"
                  justify="center"
                >
                  <Grid
                    container
                    alignItems="center"
                    item
                  >
                    <Grid
                      container
                      item
                      direction="row"
                      alignItems="center"
                      md={10}
                      spacing={2}
                    >
                      <Grid
                        container
                        direction="row-reverse"
                        item
                        md={1}
                      >
                        <Avatar>
                          <Person />
                        </Avatar>
                      </Grid>
                      <Grid
                        container
                        item
                        direction="column"
                        md={11}
                      >
                        <Grid item>
                          <Typography variant="h5">{row.seller}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">{row.title}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      direction="row-reverse"
                      md={2}
                    >
                      <Grid item>
                        <ButtonBase>
                          <RemoveRedEye />
                        </ButtonBase>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item><Divider variant="middle" /></Grid>
                  <Grid
                    container
                    item
                  >
                    <Grid
                      container
                      direction="row"
                      spacing={2}
                      item
                      md={10}
                    >
                      <Grid
                        container
                        item
                        spacing={2}
                        alignItems="center"
                      >
                        <Grid item md={8}>
                          <ThickLinearProgress variant="determinate" value={progress} />
                        </Grid>
                        <Grid item md={4}>
                          <Typography variant="h5">{`end: ${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`}</Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                      >
                        <Grid
                          container
                          item
                          md={9}
                          spacing={2}
                        >
                          <Grid item><Typography variant="h5">{`${row.likes} Likes`}</Typography></Grid>
                          <Grid item><Typography variant="h5">{`${row.clicks} Clicks`}</Typography></Grid>
                          <Grid item><Typography variant="h5">{`${row.transactions} Transactions`}</Typography></Grid>
                        </Grid>
                        <Grid item md={3}><Typography variant="h5">{`= ${row.points} Points`}</Typography></Grid>
                      </Grid>
                      <Grid item md={10}><Typography variant="h5">{`Rewards: Rp ${row.reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')},-`}</Typography></Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      md={2}
                      spacing={2}
                    >
                      <Grid
                        container
                        direction="row-reverse"
                        item
                        spacing={2}
                      >
                        <Grid item>
                          <ButtonBase>
                            <Favorite />
                          </ButtonBase>
                        </Grid>
                        <Grid item>
                          <ButtonBase>
                            <ChatBubbleOutline />
                          </ButtonBase>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        direction="row-reverse"
                      >
                        <Button>Stop</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

PromotorKontenViralMyProgress.defaultProps = {
  className: '',
  rows: [],
};

PromotorKontenViralMyProgress.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default PromotorKontenViralMyProgress;
