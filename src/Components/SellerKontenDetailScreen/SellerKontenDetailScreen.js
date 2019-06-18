/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Send from '@material-ui/icons/Send';
import Add from '@material-ui/icons/Add';
import CreditCard from '@material-ui/icons/CreditCard';

import Navigation from 'Components/Navigation/Navigation';

import 'Components/SellerKontenDetailScreen/SellerKontenDetailScreen.css';

class SellerKontenDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joko',
      clicksCounter: 0,
      likesCounter: 0,
      sharesCounter: 0,
      formsCounter: 0,
      dealsCounter: 0,
      viewsCounter: 0,
      saldo: 0,
      promotorCounter: 0,
      reviewCounter: 0,
    };
  }

  render() {
    const {
      username,
      clicksCounter,
      likesCounter,
      sharesCounter,
      dealsCounter,
      formsCounter,
      viewsCounter,
      saldo,
      promotorCounter,
      reviewCounter,
    } = this.state;
    return (
      <div className="SellerKontenDetailScreen">
        <Navigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          username={username}
          type="Seller"
        />
        <Grid
          className="Main"
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Paper>
              <Grid
                className="Top"
                container
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <ButtonBase>
                    <Send />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <ButtonBase>
                    <Paper className="TopButton">
                      <Typography variant="subtitle1">Input File</Typography>
                    </Paper>
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <ButtonBase>
                    <Paper className="TopButton">
                      <Typography variant="subtitle1">Template</Typography>
                    </Paper>
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <ButtonBase>
                    <Paper>
                      <Add />
                    </Paper>
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <CreditCard />
                </Grid>
                <Grid item>
                  <Typography variant="h5">{`Rp ${saldo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.-`}</Typography>
                </Grid>
                <Grid item>
                  <ButtonBase>
                    <Paper className="TopButton">
                      <Typography variant="subtitle1">SMS BLAST</Typography>
                    </Paper>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              <Grid
                className="Counter"
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">Clicks</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{clicksCounter}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              <Grid
                className="Counter"
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">Likes</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{likesCounter}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              <Grid
                className="Counter"
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">Shares</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{sharesCounter}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              <Grid
                className="Counter"
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">Forms</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{formsCounter}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Grid
                className="Counter"
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">Deals</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{dealsCounter}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              <Grid
                className="Counter"
                container
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="subtitle1">Views</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">{viewsCounter}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Konten Review</Typography>
            <Paper className="Review">
              <Typography variant="subtitle1">{`Total Promotor: ${promotorCounter}`}</Typography>
              <Typography variant="subtitle1">{`Total Review: ${reviewCounter}`}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SellerKontenDetailScreen.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default SellerKontenDetailScreen;
