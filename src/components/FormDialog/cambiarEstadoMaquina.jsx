import React, { Fragment } from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Add from '@material-ui/icons/Add'
import { BASE_URL } from '../..';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 500,
    minWidth: 500
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      estados: [],
      idEstadoMaquina: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/estadosmaquina")
      let data = await response.json();
      this.setState({ estados: data })
    }
    catch (e) {
      console.log(e);
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const { maquina } = this.props;
    var myInit =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { maquina } = this.props;
    return (
      <Fragment>
        <div style={{ marginTop: "40px" }}>
          <Button variant="raised" color="#d39539" onClick={this.handleClickOpen}>
            <h4>Cambiar estado</h4>
          </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ justifyContent: "center", alignItems: "center", display: "flex " }}>Cambiar estado de: {maquina.nombre}</DialogTitle>
          <form onSubmit={this.onSubmit}>
            <DialogContent>
              <DialogContentText>
                Seleccione el nuevo estado
            </DialogContentText>
              <FormControl >
                <InputLabel  htmlFor="age-simple">Age</InputLabel>
                <Select 
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'idEstadoMaquina',
                    id: 'idEstadoMaquina',
                  }}
                >
                {
                  this.state.estados.map(estado=>(<MenuItem value={estado.idEstadoMaquina}>{estado.estadoMaquina}</MenuItem>))
                }
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancelar
            </Button>
              <Button onSubmit onClick={this.handleClose} color="primary" variant="raised" type="submit">
                Cambiar estado
            </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}
