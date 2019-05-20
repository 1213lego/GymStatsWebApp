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
import { BASE_URL } from '../..';

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
  componentWillMount(){
    const {tarifa}=this.props;
    this.setState({
      nombreTarifa: tarifa.nombreTarifa,
      precio: tarifa.precio,
      duracionDias: tarifa.duracionDias
    })
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const {tarifa}=this.props;
    const aEditar = {
      nombreTarifa: this.state.nombreTarifa,
      precio: this.state.precio,
      duracionDias: this.state.duracionDias
    };
    console.log(aEditar);
    var myInit =
    {
        method: 'PUT',
        body: JSON.stringify(aEditar),headers:{
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }

    };
    fetch(BASE_URL+'/admin/tarifas/'+tarifa.idTarifa, myInit)
    .then(response => {
      if(response.status==200)
      {
        alert("Se ha actualizado satisfatoriamente la tarifa");
        window.location.reload();
      }
      else{
        alert("Ha fallado la actualizacion");
      }
      console.log(response);
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
      <div style={{marginTop:"40px"}}>
      <Button round variant="raised" color="#ffffff" onClick={this.handleClickOpen}>
          <h4>Editar Tarifa</h4>
        </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{justifyContent:"center",alignItems:"center",display:"flex "}}>Agregar editar</DialogTitle>
          <form onSubmit={this.onSubmit}>
          <DialogContent>
            <DialogContentText>
                Rellenar el formulario para editar la tarifa: {this.props.tarifa.nombreTarifa}
            </DialogContentText>

            <TextField
              autoFocus
              color="#d39539"
              margin="dense"
              name="nombreTarifa"
              label="Nombre"
              value={this.state.nombreTarifa}
              type="text"
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="precio"
              label="Precio"
              type="number"
              value={this.state.precio}
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="duracionDias"
              label="Duracion en dias"
              type="number"
              value={this.state.duracionDias}
              onChange={this.onChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onSubmit onClick={this.handleClose} color="primary" variant="raised" type="submit">
              Editar Tarifa
            </Button>

          </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}
