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

class SellerCreateKontenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Joko',
      judulKonten: '',
      jenisKonten: '',
      jenisKontenValue: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleRadioChange(event) {
    this.setState({ lingkupValue: event.target.value });
  }

  render() {
    const {
      username,
      judulKonten,
      jenisKontenValue,
      lingkupValue,
      gamesRule,
      modalValue,
    } = this.state;
    return (
      <div className="SellerCreateKontenScreen">
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
                    <FormControl className="FormControl" variant="filled" fullWidth>
                      <Select
                        native
                        value={jenisKontenValue}
                        onChange={this.changeProvinsiValue}
                      >
                        <option value={0}>Pilih Jenis Konten&nbsp;&nbsp;&nbsp;</option>
                      </Select>
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
                  <Button>
                    <Paper>
                      <Typography variant="h5">&nbsp;Buat Konten Viral&nbsp;</Typography>
                    </Paper>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

export default SellerCreateKontenScreen;
