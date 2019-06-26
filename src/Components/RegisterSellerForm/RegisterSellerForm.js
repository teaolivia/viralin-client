/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import fetchProvinsiApi from 'Api/fetchProvinsiApi';
import fetchKabupatenKotaApi from 'Api/fetchKabupatenKotaApi';


class RegisterSellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namaUsaha: '',
      submittedNamaUsaha: '',
      jenisUsaha: '',
      submittedJenisUsaha: '',
      namaPebisnis: '',
      submittedNamaPebisnis: '',
      email: '',
      submittedEmail: '',
      nomorTelepon: '',
      submittedNomorTelepon: '',
      tempatLahir: '',
      submittedTempatLahir: '',
      tanggalLahir: '',
      submittedTanggalLahir: '',
      isLoadingProvinsi: false,
      isProvinsiLoaded: false,
      provinsiArray: [],
      provinsi: '',
      provinsiValue: 0,
      submittedProvinsi: '',
      isLoadingKabupatenKota: false,
      isKabupatenKotaLoaded: false,
      kabupatenKotaArray: [],
      kabupatenKota: '',
      kabupatenKotaValue: 0,
      submittedKabupatenKota: '',
      alamat: '',
      submittedAlamat: '',
      username: '',
      submittedUsername: '',
      password: '',
      passwordConfirmation: '',
      submittedPassword: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeTanggalLahirValue = this.changeTanggalLahirValue.bind(this);
    this.changeProvinsiValue = this.changeProvinsiValue.bind(this);
    this.changeKabupatenKotaValue = this.changeKabupatenKotaValue.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchProvinsi();
  }

  handleSubmit(event) {
    const {
      namaUsaha,
      jenisUsaha,
      namaPebisnis,
      email,
      nomorTelepon,
      tempatLahir,
      tanggalLahir,
      provinsi,
      kabupatenKota,
      alamat,
      username,
      password,
      passwordConfirmation,
    } = this.state;
    event.preventDefault();
    if (password === passwordConfirmation) {
      this.setState({
        submittedNamaUsaha: namaUsaha,
        submittedJenisUsaha: jenisUsaha,
        submittedNamaPebisnis: namaPebisnis,
        submittedEmail: email,
        submittedNomorTelepon: nomorTelepon,
        submittedTempatLahir: tempatLahir,
        submittedTanggalLahir: tanggalLahir,
        submittedProvinsi: provinsi,
        submittedKabupatenKota: kabupatenKota,
        submittedAlamat: alamat,
        submittedUsername: username,
        submittedPassword: password,
      }, () => {
        const {
          submittedNamaUsaha,
          submittedJenisUsaha,
          submittedNamaPebisnis,
          submittedEmail,
          submittedNomorTelepon,
          submittedTempatLahir,
          submittedTanggalLahir,
          submittedProvinsi,
          submittedKabupatenKota,
          submittedAlamat,
          submittedUsername,
          submittedPassword,
        } = this.state;
        const submitted = {
          business_name: submittedNamaUsaha,
          business_type: submittedJenisUsaha,
          name: submittedNamaPebisnis,
          email: submittedEmail,
          phone: submittedNomorTelepon,
          address: submittedAlamat,
          province: submittedProvinsi,
          city: submittedKabupatenKota,
          birthplace: submittedTempatLahir,
          birthdate: submittedTanggalLahir,
          username: submittedUsername,
          password: submittedPassword,
        };
        console.table(submitted);
        if (this.validateSubmit(submitted)) {
          this.registerSeller(submitted);
        }
      });
    } else {
      console.log('password not match');
    }
  }

  registerSeller(submitted) {
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
      FunctionName : 'register-seller',
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
          alert('Registrasi berhasil');
          window.location.href = '/seller-dashboard';
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

  validateSubmit(submitted) {
    if (submitted.business_name == '') {
      alert('Isi Nama Usaha');
      return false;
    }
    else if (submitted.business_type == '') {
      alert('Isi Jenis Usaha');
      return false;
    }
    else if (submitted.name == '') {
      alert('Isi Nama Pebisnis');
      return false;
    }
    else if (submitted.email == '') {
      alert('Isi Email');
      return false;
    }
    else if (submitted.phone == '') {
      alert('Isi Nomor Telepon');
      return false;
    }
    else if (submitted.address == '') {
      alert('Isi Alamat');
      return false;
    }
    else if (submitted.province == '') {
      alert('Isi provinsis');
      return false;
    }
    else if (submitted.city == '') {
      alert('Isi Kabupaten/Kota');
      return false;
    }
    else if (submitted.birthplace == '') {
      alert('Isi Tempat Lahir');
      return false;
    }
    else if (submitted.birthdate == '') {
      alert('Isi Tanggal Lahir ');
      return false;
    }
    else if (submitted.username == '') {
      alert('Isi Username');
      return false;
    }
    else if (submitted.password == '') {
      alert('Isi Password');
      return false;
    }
    return true;
  } 

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  changeTanggalLahirValue(event) {
    this.setState({ tanggalLahir: event.target.value });
  }

  changeProvinsiValue(event) {
    this.fetchKabupatenKota(event.target.value);
    this.setState({
      provinsi: event.target.options[event.target.selectedIndex].text,
      provinsiValue: event.target.value,
    });
  }

  changeKabupatenKotaValue(event) {
    this.setState({
      kabupatenKota: event.target.options[event.target.selectedIndex].text,
      kabupatenKotaValue: event.target.value,
    });
  }

  fetchProvinsi() {
    this.setState({ isLoadingProvinsi: true });
    const data = fetchProvinsiApi;
    data.then(
      (result) => {
        this.setState({
          isProvinsiLoaded: true,
        });
        if (!result.error) {
          this.setState({ provinsiArray: result.semuaprovinsi, isLoadingProvinsi: false });
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  fetchKabupatenKota(id) {
    this.setState({ isLoadingKabupatenKota: true });
    const data = fetchKabupatenKotaApi(id);
    data.then(
      (result) => {
        this.setState({
          isKabupatenKotaLoaded: true,
        });
        if (!result.error) {
          this.setState({ kabupatenKotaArray: result.kabupatens, isLoadingKabupatenKota: false });
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }

  render() {
    const {
      namaUsaha,
      jenisUsaha,
      namaPebisnis,
      email,
      nomorTelepon,
      tempatLahir,
      tanggalLahir,
      isLoadingProvinsi,
      isProvinsiLoaded,
      provinsiValue,
      provinsiArray,
      isLoadingKabupatenKota,
      isKabupatenKotaLoaded,
      kabupatenKotaValue,
      kabupatenKotaArray,
      alamat,
      username,
      password,
      passwordConfirmation,
    } = this.state;
    const provinsis = provinsiArray.map(i => <option key={i.id} value={i.id}>{i.nama}</option>);
    const kabupatenKotas = kabupatenKotaArray.map(
      i => <option key={i.id} value={i.id}>{i.nama}</option>,
    );
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="subtitle1">Registrasi Akun Bisnis</Typography>
          <TextField
            id="filled-namausaha"
            label="Nama Usaha"
            className="TextField"
            margin="normal"
            variant="filled"
            name="namaUsaha"
            fullWidth
            value={namaUsaha}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-jenisusaha"
            label="Jenis Usaha"
            className="TextField"
            margin="normal"
            variant="filled"
            name="jenisUsaha"
            fullWidth
            value={jenisUsaha}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-namapebisnis"
            label="Nama Pebisnis"
            className="TextField"
            margin="normal"
            variant="filled"
            name="namaPebisnis"
            fullWidth
            value={namaPebisnis}
            onChange={this.handleInputChange}
          />
          <Typography variant="subtitle1">Informasi Kontak</Typography>
          <TextField
            id="filled-email-input"
            label="Email"
            className="TextField"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            fullWidth
            value={email}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-nomorTelepon"
            label="Nomor Telepon"
            name="nomorTelepon"
            fullWidth
            value={nomorTelepon}
            onChange={this.handleInputChange}
            type="number"
            className="TextField"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">+62</InputAdornment>,
            }}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-alamat"
            label="Alamat Tinggal"
            className="TextField"
            margin="normal"
            variant="filled"
            name="alamat"
            fullWidth
            value={alamat}
            onChange={this.handleInputChange}
          />
          <br />
          { isLoadingProvinsi && (
            <div>
              <CircularProgress />
              <Typography>Mengambil data provinsi...</Typography>
            </div>
          ) }
          { (isProvinsiLoaded && !isLoadingProvinsi)
          && (
            <FormControl className="FormControl" variant="filled" fullWidth>
              <InputLabel htmlFor="filled-provinsi-native-simple">Provinsi Tempat Tinggal</InputLabel>
              <Select
                native
                value={provinsiValue}
                onChange={this.changeProvinsiValue}
                input={<FilledInput name="age" id="filled-age-native-simple" />}
              >
                <option value="" />
                { provinsis }
              </Select>
            </FormControl>
          )}
          <br />
          <br />
          { isLoadingKabupatenKota && (
            <div>
              <CircularProgress />
              <Typography>Mengambil data kabupaten/kota...</Typography>
            </div>
          ) }
          { (isKabupatenKotaLoaded && !isLoadingKabupatenKota)
          && (
            <FormControl className="FormControl" variant="filled" fullWidth>
              <InputLabel htmlFor="filled-provinsi-native-simple">Kabupaten / Kota Tempat Tinggal</InputLabel>
              <Select
                native
                value={kabupatenKotaValue}
                onChange={this.changeKabupatenKotaValue}
                input={<FilledInput name="age" id="filled-age-native-simple" />}
              >
                <option value="" />
                { kabupatenKotas }
              </Select>
            </FormControl>
          )}
          <br />
          <br />
          <Typography variant="subtitle1">Informasi Kelahiran</Typography>
          <TextField
            id="filled-tempatlahir"
            label="Tempat Lahir"
            className="TextField"
            margin="normal"
            variant="filled"
            name="tempatLahir"
            fullWidth
            value={tempatLahir}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filledtanggallahir"
            label="Tanggal Lahir"
            type="date"
            className="TextField"
            margin="normal"
            variant="filled"
            name = "tanggalLahir"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={tanggalLahir}
            onChange={this.changeTanggalLahirValue}
          />
          <Typography variant="subtitle1">Informasi Akun</Typography>
          <TextField
            id="filled-username"
            label="Username"
            className="TextField"
            margin="normal"
            variant="filled"
            name="username"
            fullWidth
            value={username}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-password-input"
            label="Password"
            className="TextField"
            type="password"
            margin="normal"
            variant="filled"
            name="password"
            fullWidth
            value={password}
            onChange={this.handleInputChange}
          />
          <TextField
            id="filled-passwordConfirmation-input"
            label="Konfirmasi Password"
            className="TextField"
            type="password"
            margin="normal"
            variant="filled"
            name="passwordConfirmation"
            fullWidth
            value={passwordConfirmation}
            onChange={this.handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            className="Button"
            type="submit"
          >
            <Typography variant="subtitle1">Register</Typography>
          </Button>
        </form>
      </div>
    );
  }
}

export default RegisterSellerForm;
