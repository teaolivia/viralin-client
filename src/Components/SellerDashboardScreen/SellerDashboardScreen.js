/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import Group from '@material-ui/icons/Group';
import AWS from 'aws-sdk';
import 'Components/SellerDashboardScreen/SellerDashboardScreen.css';

import Navigation from 'Components/Navigation/Navigation';
import SellerKontenViralTable from 'Components/SellerKontenViralTable/SellerKontenViralTable';

AWS.config.update({
  accessKeyId: 'AKIA6AOWNMA4PI2CP33G', 
  secretAccessKey: 'rCaDKeLn7JopklnsyMEe88a3pDlZp5wf38fAH0NS'
});
var lambda = new AWS.Lambda({region: 'ap-southeast-1', apiVersion: '2015-03-31'});

const dummyData = {
  id: '1',
  title: 'Indihome Paket Gamer',
  seller: 'Joko',
  status: 'TRUE',
  referral: 'Open',
  duration_start: '01/01/2019',
  duration_end: '01/02/2019',
};

const dummyData2 = {
  id: '2',
  title: 'Indihome Paket Gamer',
  seller: 'Joko',
  status: 'TRUE',
  referral: 'Close',
  duration_start: '01/01/2019',
  duration_end: '01/02/2019',
};

const rows = [
  dummyData,
  dummyData2,
];

class SellerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          imageIcon: <Add fontSize="inherit" />,
          targetUrl: '',
          name: 'Konten',
          header: 'Buat Konten Viral',
          count: 2,
          activeCount: 2,
        },
        {
          imageIcon: <Group fontSize="inherit" />,
          targetUrl: '',
          name: 'Promotor',
          header: 'Promotor Viralmu',
          count: 2,
          activeCount: 2
        },
      ],
      data: rows,
      username: 'Joko',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleContentFormPopOut = this.handleContentFormPopOut.bind(this);
  }

  sellerData() {  
    var params = {
      FunctionName: 'seller-view',
      InvocationType: 'RequestResponse',
      LogType: 'None',
      Payload: {
        "seller_id" : seller_id,
        "business_name": "'+business_name+'",
        "business_type": "'+business_type+'",
        "email": "'+email+'",
        "name": "'+name+'",
        "password": "'+password+'",
        "phone": "'+phone+'",
        "province": "'+province+'",
        "username": "'+username+'",
        "birthplace": "'+birthplace+'",
        "city": "'+city+'"
      } /* required */
    //  Payload: PAYLOAD_AS_A_STRING
    };
    var result;
    lambda.invoke(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else
        result = data.Payload;           // successful response
    });
      return result;
  }
  
  NumberOfTotalPromotors(){
    var params = {
      FunctionName: 'seller-n-promotors',
      InvocationType: 'RequestResponse',
      LogType: 'None',
      Payload: {
        "seller_id": seller_id
      }
    };
    var result;
    lambda.invoke(params, function(err, data){
      if (err) console.log(err, err.stack); // an error occurred
      else
        result = data.Payload;       
    });
    return len(result);
  }

  handleContentFormPopOut(event) {
    event.preventDefault();
    const { name, email } = this.state;
    alert(`Your state values: \n 
      name: ${name} \n 
      email: ${email}`);
  }

  handleClick(index) {
    this.setState();
    switch (index) {
      case 1:
        window.location.href = '/seller-my-promotor';
        break;
      case 0:
        window.location.href = '/seller-add-konten';
        break;
      default:
        break;
    }
  }

  render() {
    const { buttons, data, username } = this.state;
    return (
      <div className="SellerDashboardScreen">
        <Navigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          username={username}
          type="Seller"
        />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className="ButtonsContainer"
        >
          {buttons.map((button, index) => (
            <Grid
              item
              key={button.name}
            >
              <Paper
                className="Button"
              >
                <ButtonBase
                  onClick={e => this.handleClick(index, e)}
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    className="ButtonsContainer"
                  >
                    <Grid item>
                      <Paper
                        className="ButtonIcon"
                      >
                        <Typography variant="h1">{ button.imageIcon }</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">{ button.header }</Typography>
                      <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                        justify="flex-start"
                      >
                        <Typography variant="subtitle1">{ `Total ${button.name}: ${button.count}` }</Typography>
                        <Typography variant="subtitle1">{ `Total Aktif: ${button.activeCount}` }</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </ButtonBase>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <SellerKontenViralTable
          className="Tabel"
          rows={data}
          name="namae"
          header="Konten Aktif Viral"
        />
      </div>
    );
  }
}

export default SellerDashboard;
