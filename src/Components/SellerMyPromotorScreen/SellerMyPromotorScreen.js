/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import FilterList from '@material-ui/icons/FilterList';
import Language from '@material-ui/icons/Language';

import Navigation from 'Components/Navigation/Navigation';

import 'Components/SellerMyPromotorScreen/SellerMyPromotorScreen.css';

class SellerMyPromotorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joko',
    };
  }

  render() {
    const { username } = this.state;
    return (
      <div className="SellerMyPromotorScreen">
        <Navigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          username={username}
          type="Seller"
        />
        <div className="TopContainer">
          <Paper className="Top">
            <Grid container>
              <Grid item xs={4}>&nbsp;</Grid>
              <Grid
                item
                container
                alignItems="center"
                spacing={2}
                xs={4}
              >
                <Grid item xs={11}>
                  <Paper>
                    <TextField
                      className="SearchInput"
                      id="input-with-icon-searchinput"
                      placeholder="Search"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={1}>
                  <ButtonBase>
                    <FilterList />
                  </ButtonBase>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container justify="flex-end">
                  <ButtonBase>
                    <Paper>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Language />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            Discover Promotor
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

export default SellerMyPromotorScreen;
