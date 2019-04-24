import React,{Fragment} from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from '@material-ui/icons/Add'

export default class FormDialog extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      nombreTarifa: '',
      precio: null,
      duracionDias: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const nuevaTarifa = {

      nombreTarifa: this.state.nombreTarifa,
      precio: this.state.precio,
      duracionDias: this.state.duracionDias
    };
    var myInit =
    {
        method: 'POST',
        body: JSON.stringify(nuevaTarifa),headers:{
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }

    };
    fetch('http://localhost:8080/admin/tarifas', myInit)
    .then(response => {
      if(response.status==201)
      {
        alert("Se ha registrado satisfatoriamente la tarifa");
      }
      else{
        alert("Ha fallado el registro");
      }
      return response.json();
    });

  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Agregar Tarifa
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{justifyContent:"center",alignItems:"center",display:"flex "}}>Agregar Tarifa</DialogTitle>
          <form onSubmit={this.onSubmit}>
          <DialogContent>
            <DialogContentText>
                Rellenar el formulario para agregar una tarifa
            </DialogContentText>

            <TextField
              autoFocus
              color="#d39539"
              margin="dense"
              id="nombreTarifa"
              label="Nombre"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="precio"
              label="Precio"
              type="number"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="duracionDias"
              label="Duracion en dias"
              type="number"
              fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onSubmit onClick={this.handleClose} color="primary" variant="raised" type="submit">
              Agregar Tarifa
            </Button>

          </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}
