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
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import RDialog from "components/FormDialog/Dialogs/registrarAsistenciaDialog.jsx"
import image from "assets/img/bggym.jpg";
import { validarToken } from "../../index.js";
import { TextField } from "@material-ui/core";


class RegistrarSubscripcionDiaria extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      documento: null,

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
    const registrarSubscripcioon =
    {
      documento: this.state.documento
    };
    var myInit =
    {
      method: 'POST',
      body: JSON.stringify(registrarSubscripcioon),
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    };
    try
    {
      let response = await fetch('http://localhost:8080/empleados/suscripciondiaria', myInit);
      console.log(response);
      if (response.status == 200)
      {
        this.setState({errores:'Se ha registrado la subscripcion diaria a :' + this.state.documento })
      }
      else if(response.status==201)
      {
        this.setState({errores:'Gracias por asistir' })
      }
      else if(response.status==404)
      {
        this.setState({errores:'La cedula del cliente que has ingresado no se ha registrado'});
      }
    }
    catch (e)
    {
      console.log("errores");
      console.log(e);
      this.setState({errores: e.message})
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
  render() {
    const errores = this.state.errores;
    const { classes, ...rest } = this.props;
    return (

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
                      <h4>Registro rutina diaria</h4>
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
                    Ingrese la cedula del cliente para registrar una subscripcion diaria
                  </p>
                  <CardBody>
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <TextField
                      value={this.state.documento}
                      name="documento"
                      id="documento"
                      label="Cedula del Cliente"
                      onChange={this.onChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number"
                    }}
                    type="number"
                  />
                  </div>

                  {
                    <p className={classes.divider}>
                      {errores}
                    </p>
                  }
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <RDialog nombreBtn="Registrar Subscripcion" mensaje ={errores}/>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <Footer whiteFont />
  </div>
);
}
}

export default withStyles(loginPageStyle)(RegistrarSubscripcionDiaria);
