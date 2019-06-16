import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';

class SellerDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                  imageIcon: <AddIcon fontSize="inherit" />,
                  targetUrl: '',
                  name: 'Konten',
                  header: 'Kelola Konten Viral',
                  count: 0,
                  activeCount: 0,
                },
                {
                  imageIcon: <GroupIcon fontSize="inherit" />,
                  targetUrl: '',
                  name: 'Promotor',
                  header: 'Promotor Viralmu',
                  count: 0,
                },
              ],
            };
        this.handleClick = this.handleClick.bind(this);
      }

handleContentFormPopOut() {
    event.preventDefault();
    const { name, email } = this.state;
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email}`);
    };

handleClick(index) {
    this.setState();
    switch (index) {
            case 1:
            window.location.href = '/promotor-view';
            break;
            case 0:
            window.location.href = '/contents-form';
            break;
            default:
            break;
        }
    }

    render() {
        const { buttons } = this.state;
        return(
        <div className="SellerDashboardScreen">
            <Navigation username="Admin" />
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
            className="ButtonsContainer"
            >
            {buttons.map((button, index) => (
                <ButtonBase
                key={button.name}
                className="Button"
                onClick={e => this.handleClick(index, e)}
                >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={0}
                    className="ButtonsContainer"
                >
                    <Typography variant="h1">{ button.imageIcon }</Typography>
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
                </ButtonBase>
            ))}
            </Grid>
        </div>
        );
    }
}

export default SellerDashboard;