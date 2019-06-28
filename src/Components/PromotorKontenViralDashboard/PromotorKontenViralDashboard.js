/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Person from '@material-ui/icons/Person';
import Error from '@material-ui/icons/Error';
import CalendarToday from '@material-ui/icons/CalendarToday';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Group from '@material-ui/icons/Group';

const bulan = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

class PromotorKontenViralDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      rows,
      className,
    } = this.props;
    return (
      <Grid
        className={className}
        container
        spacing={2}
        direction="column"
      >
        {/* untuk yang listview */}
        { rows.map((row) => {
          const endDate = new Date(
            row.duration_end.slice(6, 10),
            parseInt(row.duration_end.slice(3, 5), 10) - 1,
            row.duration_end.slice(0, 2),
          );
          return (
            <Grid item key={row.id}>
              <Paper>
                <Grid
                  container
                  spacing={0}
                  justify="center"
                  alignItems="center"
                  direction="row"
                >
                  <Grid
                    container
                    item
                    justify="center"
                    alignItems="center"
                    md={3}
                    spacing={2}
                  >
                    <Grid
                      container
                      item
                      direction="row-reverse"
                      md={3}
                    >
                      <Avatar><Person /></Avatar>
                    </Grid>
                    <Grid
                      container
                      item
                      md={9}
                    >
                      <Grid item md={12}>
                        <Typography variant="h5">{row.seller}</Typography>
                      </Grid>
                      <Grid item md={12}>{row.title}</Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    item
                    md={6}
                  >
                    <Grid
                      container
                      item
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        item
                        justify="center"
                        alignItems="center"
                      >
                        <Error />
                        <Typography variant="subtitle1">
                          &nbsp;
                          {row.rule}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        item
                        justify="center"
                        alignItems="center"
                      >
                        <CardGiftcard />
                        <Typography variant="subtitle1">
                          &nbsp;
                          {row.reward}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        item
                        justify="center"
                        alignItems="center"
                      >
                        <CalendarToday />
                        <Typography variant="subtitle1">
                          &nbsp;
                          {`${endDate.getDate()} ${bulan[endDate.getMonth()]} ${endDate.getFullYear()}`}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        container
                        item
                        justify="center"
                        alignItems="center"
                      >
                        <Group />
                        <Typography variant="subtitle1">
                          &nbsp;
                          { row.referral === row.maxReferral && 'Referral = Penuh'}
                          { row.referral !== row.maxReferral && `Referral = ${row.referral}/${row.maxReferral} orang`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    md={3}
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid item>
                      <ButtonBase>
                        <RemoveRedEye />
                      </ButtonBase>
                    </Grid>
                    <Grid item>
                      <ButtonBase>
                        <ChatBubbleOutline />
                      </ButtonBase>
                    </Grid>
                    <Grid item>
                      <Button>
                        VIRALIN
                      </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                          &nbsp;
                          {row.link}
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

PromotorKontenViralDashboard.defaultProps = {
  className: '',
  rows: [],
};

PromotorKontenViralDashboard.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default PromotorKontenViralDashboard;
