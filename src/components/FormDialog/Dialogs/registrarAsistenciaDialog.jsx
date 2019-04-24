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
import {Redirect} from 'react-router-dom'
import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";
import {withRouter} from 'react-router-dom';

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



class RegistrarAsistenciaDialog extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      open: false
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    window.location.reload();
  };

  render() {
      const {classes} = this.props;
    return (
      <Fragment>
      <div style={{justifyContent:'center',display:'flex',alignItems:'center',marginTop:"40px"}}>
      <Button type ="submit" variant="raised" color="#d39539" onClick={this.handleClickOpen}>
          <h4>Ingresar</h4>
        </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{justifyContent:"center",alignItems:"center",display:"flex "}}>{this.props.mensaje}</DialogTitle>

          <DialogContent>
            <DialogContentText>

            </DialogContentText>

          </DialogContent>
          <DialogActions>

            <Button onClick={this.handleClose} color="primary" variant="raised" type="submit">
              Aceptar
            </Button>

          </DialogActions>

        </Dialog>
      </Fragment>
    );
  }
}
export default withStyles(registerPageStyle)(RegistrarAsistenciaDialog);
