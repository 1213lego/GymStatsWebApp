import React,{Fragment} from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from '@material-ui/icons/Add'
import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";
import {BASE_URL}  from "../../index.js"

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function todayDate()
{
  var today;
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

class FormDialog extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      estadosMaquinas: [],
      nombre: '',
      marca: '',
      fechaCompra :'',
      descripcion: '',
      idEstadoMaquina : null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



  }
  componentWillMount()
  {
    fetch(BASE_URL+'/estadosmaquina').then(response =>{
      return response.json();
    }).then(estadosMaquinas => {
      this.setState({estadosMaquinas:estadosMaquinas});
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const nuevaMaquina = {
      nombre: this.state.nombre,
      marca: this.state.marca,
      fechaCompra: this.state.fechaCompra,
      descripcion: this.state.descripcion,
      estadosMaquina : {
        idEstadoMaquina: this.state.idEstadoMaquina
      }
    };
    console.log(nuevaMaquina);
    var myInit =
    {
        method: 'POST',
        body: JSON.stringify(nuevaMaquina),headers:{
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }

    };
    fetch((BASE_URL+'/admin/maquinas'), myInit)
    .then(response => {
      console.log(response);
      if(response.status==201)
      {
        alert("Se ha registrado satisfatoriamente la maquina");
      }
      else{
        alert("Ha fallado el registro");
      }
      return response.json();
    }).then(data=>{console.log(data)});

  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
      const {classes} = this.props;
    return (
      <Fragment>
      <div style={{marginTop:"40px"}}>
      <Button variant="raised" color="#d39539" onClick={this.handleClickOpen}>
          <h4>Añadir Maquina</h4>
        </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{justifyContent:"center",alignItems:"center",display:"flex "}}>Añadir Maquina</DialogTitle>
          <form onSubmit={this.onSubmit}>
          <DialogContent>
            <DialogContentText>
                Rellenar el formulario para añadir una maquina a la base de datos
            </DialogContentText>

            <TextField
              autoFocus
              color="#d39539"
              margin="dense"
              name="nombre"
              label="Nombre Maquina"
              type="text"
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="marca"
              label="Marca"
              type="text"
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="descripcion"
              label="Descripcion"
              type="text"
              onChange={this.onChange}
              fullWidth
            />
            <TextField
              id="tipoEstadosMaquinaSpinner"
              select
                name="idEstadoMaquina"
                label="Estado de la Maquina"
                margin="dense"
                className={classes.textField}
                value={this.state.idEstadoMaquina}
                onChange={this.onChange}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
              >
                {
                  this.state.estadosMaquinas.map((estadoMaquina) => (
                    <MenuItem value={estadoMaquina.idEstadoMaquina}>{estadoMaquina.estadoMaquina}</MenuItem>
                  ))
                }
              </TextField>
            <TextField
              autoFocus
              margin="dense"
              name="fechaCompra"
              id="date"
              label="Fecha Compra"
              type="date"
              defaultValue={this.todayDate}
              onChange={this.onChange}
              InputLabelProps={{
                shrink: true,
              }}
            />



          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onSubmit onClick={this.handleClose} color="primary" variant="raised" type="submit">
              Agregar Maquina
            </Button>

          </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}
export default withStyles(registerPageStyle)(FormDialog);
