/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'Components/Navigation/Navigation';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import Stop from '@material-ui/icons/Stop';
import Delete from '@material-ui/icons/Delete';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

import Chart from 'chart.js';


import 'Components/AdminKontenDetailScreen/AdminKontenDetailScreen.css';

const today = new Date();

const dummyData = {
  kontenViral: 'Ayam Geprek Hot',
  pebisnis: 'Joko',
  promotors: [
    'Ani',
    'Supri',
    'Jaya',
  ],
  startDate: '01/01/2019',
  endDate: '01/02/2019',
  status: true,
  clicks: '#',
  likes: '#',
  share: '#',
  forms: '#',
  deals: '#',
  view: '#',
};

const BorderLinearProgress = withStyles({
  root: {
    height: 30,
  },
})(LinearProgress);

class AdminKontenDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    const ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'chart',
          data: [12, 19, 3, 5, 2, 3],
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  }


  fetchData() {
    const { match } = this.props;
    this.setState({ data: dummyData });
  }

  render() {
    const { history } = this.props;
    const { data } = this.state;
    let progress = 0;
    let startDate;
    let endDate;
    if (data.startDate) {
      startDate = new Date(
        data.startDate.slice(6, 10),
        parseInt(data.startDate.slice(3, 5), 10) - 1,
        data.startDate.slice(0, 2),
      );
      endDate = new Date(
        data.endDate.slice(6, 10),
        parseInt(data.endDate.slice(3, 5), 10) - 1,
        data.endDate.slice(0, 2),
      );
      if ((today - endDate) > 0) {
        progress = 100;
      } else {
        progress = ((today - startDate) / (endDate - startDate)) * 100;
      }
    }
    let promotorsCount = 0;
    if (data.promotors) {
      promotorsCount = data.promotors.length;
    }
    return (
      <div className="AdminKontenDetail">
        <Navigation isWithBackButton isWithAvatar username="Admin" history={history} />
        <Grid
          className="Container"
          container
          spacing={10}
          direction="row"
          justify="space-around"
          alignContent="stretch"
        >
          <Grid
            container
            item
            md={6}
            xs={12}
            spacing={1}
            alignContent="stretch"
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <Paper>
                <Grid
                  container
                  className="DetailContainer"
                  alignContent="stretch"
                  justify="flex-start"
                  direction="column"
                  spacing={0}
                >
                  <Grid
                    item
                  >
                    <Typography variant="subtitle1">Nama Konten Viral:</Typography>
                    <Typography variant="h6">{data.kontenViral}</Typography>
                    <Typography variant="subtitle1">Nama Pebisnis:</Typography>
                    <Typography variant="h6">{data.pebisnis}</Typography>
                    <Typography variant="subtitle1">{`Jumlah Promotor/Referral (${promotorsCount}):`}</Typography>
                    { data.promotors && data.promotors.map((promotor, index) => (
                      <Typography key={promotor} variant="h6">{`${index + 1}. ${promotor}`}</Typography>
                    ))}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Paper>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignContent="center"
                  spacing={1}
                >
                  <Grid item>
                    <ButtonBase>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignContent="center"
                        spacing={0}
                      >
                        <Grid item>
                          <Typography variant="subtitle1">Hapus</Typography>
                        </Grid>
                        <Grid item>
                          <Delete />
                        </Grid>
                      </Grid>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignContent="center"
                        spacing={0}
                      >
                        <Grid item>
                          { data.status && <Typography variant="subtitle1">Stop</Typography>}
                          { !data.status && <Typography variant="subtitle1">Publish</Typography>}
                        </Grid>
                        <Grid item>
                          { data.status && <Stop /> }
                          { !data.status && <ArrowUpward /> }
                        </Grid>
                      </Grid>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignContent="center"
                        spacing={0}
                      >
                        <Grid item>
                          <Typography variant="subtitle1">
                            Up
                            <sup color="white">
                              soon
                            </sup>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <KeyboardArrowUp />
                        </Grid>
                      </Grid>
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignContent="center"
                        spacing={0}
                      >
                        <Grid item>
                          <Typography variant="subtitle1">
                            Chat
                            <sup>
                              soon
                            </sup>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ChatBubbleOutline />
                        </Grid>
                      </Grid>
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Paper>
              <Grid
                className="HasilViral"
                container
                direction="column"
                alignContent="stretch"
                spacing={2}
              >
                <Grid item md={12}>
                  <Typography variant="h6">
                    Hasil Viral
                    &nbsp;
                    <sup>Coming Soon</sup>
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                >
                  <Grid item md={4}>
                    <Paper>
                      <Grid container className="MiniCounter">
                        <Grid item md={6}>
                          <Typography align="left" variant="subtitle1">Clicks</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography align="right" variant="h6">{data.clicks}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper>
                      <Grid container className="MiniCounter">
                        <Grid item md={6}>
                          <Typography align="left" variant="subtitle1">Likes</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography align="right" variant="h6">{data.likes}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper>
                      <Grid container className="MiniCounter">
                        <Grid item md={6}>
                          <Typography align="left" variant="subtitle1">Share</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography align="right" variant="h6">{data.share}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                >
                  <Grid item md={4}>
                    <Paper>
                      <Grid container className="MiniCounter">
                        <Grid item md={6}>
                          <Typography align="left" variant="subtitle1">Forms</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography align="right" variant="h6">{data.forms}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper>
                      <Grid container className="MiniCounter">
                        <Grid item md={6}>
                          <Typography align="left" variant="subtitle1">Deals</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography align="right" variant="h6">{data.deals}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper>
                      <Grid container className="MiniCounter">
                        <Grid item md={6}>
                          <Typography align="left" variant="subtitle1">View</Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Typography align="right" variant="h6">{data.view}</Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <canvas id="myChart" width="200" height="200" />
                </Grid>
                <Grid item md={12}>
                  <Typography variant="h6">Aktif Hingga:</Typography>
                </Grid>
                <Grid
                  container
                  item
                  md={12}
                  alignContent="center"
                  justify="center"
                  spacing={1}
                >
                  <Grid item md={6}>
                    <BorderLinearProgress variant="determinate" value={progress} />
                  </Grid>
                  <Grid item md={6}><Typography variant="h6">{data.endDate}</Typography></Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AdminKontenDetailScreen.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default AdminKontenDetailScreen;
