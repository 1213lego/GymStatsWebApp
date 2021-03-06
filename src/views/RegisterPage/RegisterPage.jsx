import React from "react";
// @material-ui/core Components
import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Register from "@material-ui/icons/HowToReg";
// core Components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";
import image from "assets/img/bg2gym.jpg";
import { TextField, Input } from "@material-ui/core";
import { BASE_URL } from "../..";
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: "0 0 17px 0",
    position: "relative",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      generos: [],
      tiposdocumento: [],
      documento: '',
      apellidos: '',
      email: '',
      nombres: '',
      username: '',
      password: '',
      id: null, //idgenero
      tipodocumento: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 async onSubmit(e) {
    e.preventDefault();
    const nuevoCliente = {
      documento: this.state.documento,
      apellidos: this.state.apellidos,
      email: this.state.email,
      nombres: this.state.nombres,
      autenticacionUsuarios: {
        username: this.state.username,
        password: this.state.password
      },
      genero: { id: this.state.id }, //idgenero
      tipoDocumento: { tipodocumento: this.state.tipodocumento }
    };
    console.log(nuevoCliente);
    var myInit =
    {
      method: 'POST',
      body: JSON.stringify(nuevoCliente), headers: {
        'Content-Type': 'application/json'
      }
    };
    try{
      let response = await fetch(BASE_URL + "/signup", myInit);
      if(response.status == 201){
        alert("Se ha registrado satisfatoriamente");
      }
      else {
        alert("Ha fallado el registro");
      }
    }
    catch(e){
      console.log(e);
    }
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  async componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/generos");
      let generos = await response.json(); 
      this.setState({ generos: generos });
    } catch (error) {
      console.log(error);
    }
    try {
      let response = await fetch(BASE_URL + "/tiposdocumento");
      let tipos = await response.json();
      this.setState({ tiposdocumento: tipos });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="GymStats"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container} style={{ justifyContent: "center", display: "flex" }}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}
                    onSubmit={this.onSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h3>Registro</h3>
                    </CardHeader>
                    <h4 className={classes.divider}>Estás a un paso de empezar a gozar de todo lo que tenemos para ti...<br /> ¡Registrate!</h4>
                    <CardBody>
                      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <TextField
                          className={classes.textField}
                          name="nombres"
                          labelText="Nombres"
                          label="Nombres..."
                          margin="normal"
                          id="nombres"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Register className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                          onChange={this.onChange}
                        />
                        <TextField
                          className={classes.textField}
                          margin="normal"
                          name="apellidos"
                          label="Apellidos..."
                          onChange={this.onChange}
                          labelText="Apellidos"
                          id="apellidos"
                          formControlProps={{
                            fullWidth: true

                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Register className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <br />
                        <TextField
                          id="tipodocumentoSpinner"
                          select
                          name="tipodocumento"
                          label="Tipo Documento"
                          className={classes.textField}
                          margin="normal"
                          value={this.state.tipodocumento}
                          onChange={this.onChange}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                        >
                          {
                            this.state.tiposdocumento.map((tipodocumento) => (
                              <MenuItem value={tipodocumento.tipodocumento}>{tipodocumento.nombreDocumento}</MenuItem>
                            ))
                          }
                        </TextField>
                        <TextField
                          className={classes.textField}
                          labelText="Numero Identificacion"
                          name="documento"
                          label="Numero de identificacion"
                          onChange={this.onChange}
                          id="nombres"
                          margin="normal"
                          formControlProps={{
                            fullWidth: true
                          }}
                          type="number"
                        />
                        <br />


                        <TextField
                          id="generoSpinner"
                          select
                          label="Genero"
                          className={classes.textField}
                          name="id"
                          margin="normal"
                          value={this.state.id}
                          onChange={this.onChange}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          input={<Input name="genero" id="id" />}
                        >
                          {
                            this.state.generos.map((genero) => (

                              <MenuItem value={genero.id}>{genero.genero}</MenuItem>
                            ))
                          }
                        </TextField>

                        <br />
                        <TextField
                          className={classes.textField}
                          label="Nombre de Usuario..."
                          onChange={this.onChange}
                          id="username"
                          name="username"
                          formControlProps={{
                            fullWidth: true

                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <br />
                        <TextField
                          className={classes.textField}
                          name="email"
                          label="Email"
                          onChange={this.onChange}
                          labelText="Email..."
                          type="email"
                          id="Email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />

                              </InputAdornment>
                            )
                          }}
                        />
                        <br />
                        <TextField
                          className={classes.textField}
                          onChange={this.onChange}
                          label="Password..."
                          name="password"

                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                              </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                      </div>


                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button
                        type="submit"

                        simple color="primary" size="lg">
                        Registrarse
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(registerPageStyle)(RegisterPage);
