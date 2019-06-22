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

class Popup extends React.Component {  
    render() {  
        return (  
            <div className="popup">
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
                <Typography variant="subtitle1">Buat Konten Viral</Typography>
              </Button>
            </form>
          </div> 
        );  
    }  
}  
  
  export default ContentsForm;