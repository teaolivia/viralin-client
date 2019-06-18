/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import LinearProgress from '@material-ui/core/LinearProgress';
import Refresh from '@material-ui/icons/Refresh';
import More from '@material-ui/icons/More';

const today = new Date();

class AdminKontenViralTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickMore = this.handleClickMore.bind(this);
  }


  handleClickMore(index) {
    this.setState();
    const baseUrl = './seller-konten-detail/';
    const direct = baseUrl + index;
    window.location.href = direct;
  }

  render() {
    const {
      rows,
      header,
      className,
    } = this.props;
    return (
      <Grid
        className={className}
        container
        spacing={2}
        direction="column"
      >
        <Grid
          className="Top"
          container
          item
          direction="row"
        >
          <Grid
            className="Left"
            container
            item
            direction="row"
            xs={6}
          >
            <Typography variant="subtitle1">{`${header}`}</Typography>
          </Grid>
          <Grid
            className="Right"
            container
            item
            direction="row-reverse"
            alignItems="center"
            spacing={2}
            xs={6}
          >
            <Grid item>
              <ButtonBase>
                <Refresh />
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
        {/* untuk yang listview */}
        <Grid item>
          <Paper className="TableContainer">
            <Table className="Table">
              <TableBody className="TableBody">
                {rows.map((row) => {
                  const startDate = new Date(
                    row.duration_start.slice(6, 10),
                    parseInt(row.duration_start.slice(3, 5), 10) - 1,
                    row.duration_start.slice(0, 2),
                  );
                  const endDate = new Date(
                    row.duration_end.slice(6, 10),
                    parseInt(row.duration_end.slice(3, 5), 10) - 1,
                    row.duration_end.slice(0, 2),
                  );

                  let endDay = `0${endDate.getDate()}`;
                  endDay = endDay.slice(-2);

                  let endMonth = `0${endDate.getMonth() + 1}`;
                  endMonth = endMonth.slice(-2);

                  const progress = ((today - startDate) / (endDate - startDate)) * 100;
                  return (
                    <TableRow key={`${row.id}-row`}>
                      <TableCell>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          direction="row"
                          spacing={2}
                        >
                          <Grid
                            item
                            container
                            md={3}
                            xs={12}
                            justify="center"
                          >
                            <Typography variant="subtitle1">{row.title}</Typography>
                          </Grid>
                          <Grid
                            item
                            md={2}
                            xs={6}
                          >
                            { row.status === 'TRUE' && (
                              <Paper>
                                <Typography variant="subtitle1" align="center">
                                  {'Aktif'}
                                </Typography>
                              </Paper>
                            )}
                          </Grid>
                          <Grid
                            item
                            md={2}
                            xs={6}
                          >
                            <Paper>
                              <Typography variant="subtitle1" align="center">
                                {`Referral: ${row.referral}`}
                              </Typography>
                            </Paper>
                          </Grid>
                          <Grid
                            item
                            md={2}
                            xs={8}
                          >
                            <LinearProgress variant="determinate" value={progress} />
                          </Grid>
                          <Grid
                            container
                            item
                            md={2}
                            xs={4}
                            direction="column"
                          >
                            <Typography variant="subtitle1" align="center">
                              {`${endDay}-${endMonth}-${endDate.getFullYear()}`}
                            </Typography>
                          </Grid>
                          <Grid
                            container
                            item
                            md={1}
                            xs={12}
                            justify="center"
                            alignItems="center"
                            direction="column"
                          >
                            <Grid
                              container
                              item
                              spacing={1}
                              alignItems="center"
                              direction="row"
                            >
                              <Grid
                                item
                              >
                                <ButtonBase
                                  onClick={e => this.handleClickMore(row.id, e)}
                                >
                                  <More />
                                </ButtonBase>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

AdminKontenViralTable.defaultProps = {
  className: '',
  header: '',
  rows: [],
};

AdminKontenViralTable.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default AdminKontenViralTable;
