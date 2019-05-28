import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});
function CustomizedTable(props) {
  const { classes , asistencias } = props;
  console.log(asistencias);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="left">Fecha inicio</CustomTableCell>
            <CustomTableCell align="left">Fecha fin</CustomTableCell>
            <CustomTableCell align="left">Apellido</CustomTableCell>
            <CustomTableCell align="left">Documento</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {asistencias.map(row => (
            <TableRow className={classes.row} key={row.idSubscripcion}>
              <CustomTableCell align="left"> {row.fechaInicio}</CustomTableCell>
              <CustomTableCell align="left">{row.fechaFin}</CustomTableCell>
              <CustomTableCell align="right">{row.apellidos}</CustomTableCell>
              <CustomTableCell align="right">{row.documento}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
