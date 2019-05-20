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
  const { classes , empleados } = props;
  console.log(empleados);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Nombres</CustomTableCell>
            <CustomTableCell align="right">Apellidos</CustomTableCell>
            <CustomTableCell align="right">Documento</CustomTableCell>
            <CustomTableCell align="right">Tipo De Empleado</CustomTableCell>
            <CustomTableCell align="right">Email</CustomTableCell>
            <CustomTableCell align="right">Genero</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empleados.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.nombres}
              </CustomTableCell>
              <CustomTableCell align="right">{row.apellidos}</CustomTableCell>
              <CustomTableCell align="right">{row.documento}</CustomTableCell>
              <CustomTableCell align="right">{row.empleado.tipoEmpleado.tipoUsuario}</CustomTableCell>
              <CustomTableCell align="right">{row.email}</CustomTableCell>
              <CustomTableCell align="right">{row.genero.genero}</CustomTableCell>
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
