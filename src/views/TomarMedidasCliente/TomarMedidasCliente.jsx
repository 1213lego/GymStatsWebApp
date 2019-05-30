import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Redirect } from 'react-router-dom'
import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";
import RDialog from "components/FormDialog/Dialogs/registrarAsistenciaDialog.jsx"
import image from "assets/img/bggym.jpg";
import { validarToken, BASE_URL, MainSwal } from "../../index.js";
import { TextField, MenuItem, Input } from "@material-ui/core";
class TomarMedidaCliente extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      tiposMedida: [],
      documento: null,
      idMedida: null,
      valorMedida: null,
      errores: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const nuevaMedidaCliente =
    {
      valorMedida: this.state.valorMedida,
      cliente: {
        documento: this.state.documento
      },
      tiposMedida: {
        idMedida: this.state.idMedida
      }
    };
    console.log(nuevaMedidaCliente);
    var myInit =
    {
      method: 'POST',
      body: JSON.stringify(nuevaMedidaCliente),
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    };
    try {
      let response = await fetch(BASE_URL + "/empleados/añadir-medida-cliente", myInit);
      if (response.status == 201) {
        this.setState({ errores: 'Se ha registrado la medida con exito a :' + this.state.documento })
      }
      else{
        MainSwal.fire(
          {
            position: 'top-end',
          type: 'error',
          title: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
          }
        )
      }
    }
    catch (e) {
      console.log("errores");
      console.log(e);
      this.setState({ errores: e.message })
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

  async  componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/tipos-medida");
      let data = await response.json();
      this.setState({ tiposMedida: data });
    }
    catch (e) {
      console.log("error " + e.message);
    }
  }
  render() {
    const errores = this.state.errores;
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
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form
                    className={classes.form}
                    onSubmit={this.onSubmit}>
                    <CardHeader
                      color="primary"
                      className={classes.cardHeader}>
                      <h4>Registrar Medidas De un Cliente</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>
                      Ingrese la cedula del cliente para registrar las medidas de un cliente
                  </p>
                    <CardBody>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <TextField
                          value={this.state.documento}
                          name="documento"

                          id="documento"
                          label="Cedula del Cliente"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "number",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                          onChange={this.onChange}
                          type="number"
                        />
                      </div>

                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <TextField
                          id="idMedidaSpinner"
                          select
                          label="Tipo de Medida"
                          className={classes.textField}
                          name="idMedida"
                          margin="normal"
                          value={this.state.idMedida}
                          onChange={this.onChange}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          input={<Input name="idTarifa" id="idTarifa" />}
                        >
                          {
                            this.state.tiposMedida.map((medida) => (

                              <MenuItem value={medida.idMedida}>{medida.nombre}</MenuItem>
                            ))
                          }

                        </TextField></div>

                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <TextField

                          autoFocus
                          margin="normal"
                          name="valorMedida"
                          value={this.state.valorMedida}
                          label="Valor de la Medida"
                          type="number"
                          onChange={this.onChange}

                        />
                      </div>
                      {
                        <p className={classes.divider}>
                          {errores}
                        </p>
                      }
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <RDialog nombreBtn="Registrar Subscripcion" mensaje={errores} />
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}
export default withStyles(registerPageStyle)(TomarMedidaCliente);
