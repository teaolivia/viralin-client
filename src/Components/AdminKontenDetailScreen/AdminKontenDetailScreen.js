/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';

import AdminNavigation from 'Components/AdminNavigation/AdminNavigation';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Stop from '@material-ui/icons/Stop';
import Delete from '@material-ui/icons/Delete';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

import 'Components/AdminKontenDetailScreen/AdminKontenDetailScreen.css';

const dummyData = {
  kontenViral: 'Ayam Geprek Hot',
  pebisnis: 'Joko',
  promotors: [
    'Ani',
    'Supri',
  ],
  startDate: '',
  endDate: '',
  status: true,
};

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
  }


  fetchData() {
    const { match } = this.props;
    this.setState({ data: dummyData });
  }

  render() {
    const { history } = this.props;
    const { data } = this.state;
    let promotorsCount = 0;
    if (data.promotors) {
      promotorsCount = data.promotors.length;
    }
    return (
      <div className="AdminKontenDetail">
        <AdminNavigation isWithBackButton username="Admin" history={history} />
        <Grid
          container
          spacing={10}
        >
          <Grid
            container
            item
            md={6}
            xs={12}
            spacing={1}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <Paper>
                <Grid
                  container
                  alignContent="flex-start"
                  justify="center"
                  direction="column"
                  spacing={0}
                >
                  <Grid
                    item
                  >
                    <Typography variant="subtitle1">Nama Konten Viral:</Typography>
                  </Grid>
                  <Grid
                    item
                  >
                    <Typography variant="h6">{data.kontenViral}</Typography>
                  </Grid>
                  <Grid
                    item
                  >
                    <Typography variant="subtitle1">Nama Pebisnis:</Typography>
                  </Grid>
                  <Grid
                    item
                  >
                    <Typography variant="h6">{data.pebisnis}</Typography>
                  </Grid>
                  <Grid
                    item
                  >
                    <Typography variant="subtitle1">{`Jumlah Promotor/Referral (${promotorsCount}):`}</Typography>
                  </Grid>
                  { data.promotors && data.promotors.map((promotor, index) => (
                    <Grid
                      item
                      key={promotor}
                    >
                      <Typography variant="h6">{`${index + 1}. ${promotor}`}</Typography>
                    </Grid>
                  ))}
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
              kanan
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
