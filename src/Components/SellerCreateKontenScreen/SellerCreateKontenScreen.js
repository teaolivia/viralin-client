/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';

import Navigation from 'Components/Navigation/Navigation';

import 'Components/SellerCreateKontenScreen/SellerCreateKontenScreen.css';

const marks = [
  {
    value: 0,
    label: 'Rp 0.-',
  },
  {
    value: 100,
    label: 'Rp 1.000.000.-',
  },
];

const handleChangeSliderValue = (event, newValue) => {
  setValue(newValue);
};

class SellerCreateKontenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joko',
      judulKonten: '',
      submittedjudulKonten: '',
      jenisKonten: '',
      submittedjenisKonten: '',
      durasi: '',
      submittedDurasi: '',
      lingkupValue: '',
      submittedlingkupValue: '',
      modalViral: '',
      submittedmodalViral: '',
      gamesRule: '',
      submittedgamesRule: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeDurasiValue = this.changeDurasiValue.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(event) {
    // event.target.options[event.target.selectedIndex].text
    this.fetchKabupatenKota(event.target.value);
    this.setState({
      jenisKonten: event.target.options[event.target.selectedIndex].text,
      jenisKontenValue: event.target.value,
    });
  }

  changeDurasiValue(event) {
    this.setState({ durasi: event.target.value });
  }



  handleRadioChange(event) {
    this.setState({ lingkupValue: event.target.value });
  }

  handleSubmit(event) {
    const {
      jenisKonten,
      judulKonten,
      durasi,
      lingkupValue,
      modalViral,
      gamesRule
    } = this.state;
    event.preventDefault();
    this.setState({
      submittedjudulKonten: judulKonten,
      submittedjenisKonten: jenisKonten,
      submittedDurasi: durasi,
      submittedlingkupValue: lingkupValue,
      submittedmodalViral: modalViral,
      submittedgamesRule: gamesRule
    }, () => {
      const {
        submittedjudulKonten,
        submittedjenisKonten,
        submittedDurasi,    
        submittedlingkupValue,
        submittedmodalViral,
        submittedgamesRule    
      } = this.state;
      const submitted = {
        judul_konten: submittedjudulKonten,
        jenis_konten: submittedjenisKonten,
        durasi_: submittedDurasi,
        lingkup_value: submittedlingkupValue,
        modal_viral: submittedmodalViral,
        games_rule: submittedgamesRule
      };
      console.table(submitted);
      if (this.validateSubmit(submitted)) {
        this.addContent(submitted);
      }
    });
  }

  validateSubmit(submitted) {
    if (submitted.judul_konten == '') {
      alert('Isi Konten');
      return false;
    }
    else if (submitted.jenis_konten == '') {
      alert('Isi Jenis Konten');
      return false;
    }
    // else if (submitted.durasi_ == '') {
    //   alert('Isi Durasi');
    //   return false;
    // }
    else if (submitted.lingkup_value == '') {
      alert('Isi Lingkup Value');
      return false;
    }
    // else if (submitted.modal_viral == '') {
    //   alert('Isi Modal Viral');
    //   return false;
    // }
    else if (submitted.games_rule == '') {
      alert('Isi Games Rule');
      return false;
    }
    return true;
  } 

  addContent(submitted) {
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
      FunctionName : 'post-content',
      InvocationType : 'RequestResponse',
      LogType : 'None',
      Payload : JSON.stringify(submitted)
    };
    // create variable to hold data returned by the Lambda function
    var pullResults;

    lambda.invoke(pullParams, function(error, data) {
      if (error) {
        console.log(error);
        alert("error");
      } else {
        pullResults = JSON.parse(data.Payload);
        console.log(pullResults);
        if (pullResults.statusCode == 200) {
          alert('Content telah ditambahkan');
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
    const {
      username,
      judulKonten,
      jenisKonten,
      durasi,
      lingkupValue,
      gamesRule,
      modalValue,
    } = this.state;
    return (
      <div className="SellerCreateKontenScreen">
        <form onSubmit={this.handleSubmit}>
        <Navigation
          isWithHomeButton
          isWithNotificationButton
          isWithAvatar
          username={username}
          type="Seller"
        />
        <div className="MainContainer">
          <Paper className="Main">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5">Desain Konten</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography variant="h5">Jenis Konten</Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                  <Typography variant="h5">
                      <TextField
                        id="filled-jenisKonten"
                        label="Jenis Konten"
                        className="TextField"
                        margin="normal"
                        variant="filled"
                        name="jenisKonten"
                        fullWidth
                        value={jenisKonten}
                        onChange={this.handleInputChange}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography variant="h5">Judul Konten</Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                    <Typography variant="h5">
                      <TextField
                        id="filled-judulKonten"
                        label="Judul Konten"
                        className="TextField"
                        margin="normal"
                        variant="filled"
                        name="judulKonten"
                        fullWidth
                        value={judulKonten}
                        onChange={this.handleInputChange}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography variant="h5">Durasi</Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                    <TextField
                      id="date"
                      label="Durasi"
                      type="date"
                      defaultValue="2019-01-01"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={durasi}
                      onChange={this.changeDurasiValue}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography variant="h5">Lingkup</Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Lingkup"
                        name="lingkup"
                        value={lingkupValue}
                        onChange={this.handleRadioChange}
                      >
                        <Grid container>
                          <FormControlLabel value="fisik" control={<Radio color="default" />} label="Fisik" />
                          <FormControlLabel value="digital" control={<Radio color="default" />} label="Digital" />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography variant="h5">Modal Viral</Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                    <Slider
                      defaultValue={80}
                      getAriaValueText={modalValue}
                      aria-labelledby="discrete-slider-always"
                      step={1}
                      marks={marks}
                      valueLabelDisplay="on"
                      valueLabelFormat={x => `Rp ${(x * 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.-`}
                      value={modalValue}
                      onChange={ handleChangeSliderValue }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-between"
                >
                  <Grid item>
                    <Typography variant="h5">Games Rule</Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                    <Typography variant="h5">
                      <TextField
                        id="filled-gamesRule"
                        label="Games Rule"
                        className="TextField"
                        margin="normal"
                        variant="filled"
                        name="gamesRule"
                        fullWidth
                        value={gamesRule}
                        onChange={this.handleInputChange}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Button
                      variant="contained"
                      color="primary"
                      className="Button"
                      type="submit">
                      <Typography variant="h5">&nbsp;Buat Konten Viral&nbsp;</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        </form>
      </div>
    );
  }
}

export default SellerCreateKontenScreen;
