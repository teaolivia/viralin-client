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
import AWS from 'aws-sdk';
import Navigation from 'Components/Navigation/Navigation';
import PromotorList from 'Components/PromotorList/PromotorList';

import 'Components/SellerMyPromotorScreen/SellerMyPromotorScreen.css';

const promotorData = {
  id: 0,
  username: 'Joko',
  level: 'S',
  clicks: 0,
  likes: 0,
  transactions: 0,
  contents: [
    'Ayam bakar mas stereo',
    'Asoy geboy',
  ],
};

const promotor2Data = {
  id: 1,
  username: 'SpongeBob',
  level: 'A',
  clicks: 0,
  likes: 0,
  transactions: 0,
  contents: [
    'Asoy geboy',
  ],
};

const promotors = [
  promotorData,
  promotor2Data,
];

class SellerMyPromotorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joko',
    };
  }

getPromotorIDs(seller_id) {
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
    FunctionName : 'seller-n-promotors',
    InvocationType : 'RequestResponse',
    LogType : 'None',
    Payload : {
      "seller_id": seller_id
    }
  };
  // create variable to hold data returned by the Lambda function
  var pullResults;
  var n_promotors;

  lambda.invoke(pullParams, function(error, data) {
    if (error) {
      console.log(error);
      alert("error");
    } else {
      pullResults = data.Payload;
      console.log(pullResults);
      if (pullResults.statusCode == 200) {
        n_promotors = len(pullResults)
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
                    <Paper
                      className="DiscoverPromotorButton"
                    >
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                      >
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
        <PromotorList promotors={promotors} />
      </div>
    );
  }
}

export default SellerMyPromotorScreen;
