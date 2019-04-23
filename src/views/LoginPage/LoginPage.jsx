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

import image from "assets/img/bggym.jpg";
import { TextField } from "@material-ui/core";
import { validarToken } from "../../index.js";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: '',
      password: '',
      autentico: false,
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
    const login =
    {
      username: this.state.username,
      password: this.state.password
    };
    var myInit =
    {
      method: 'POST',
      body: JSON.stringify(login),
      headers:
      {
        'Content-Type': 'application/json'
      }
    };
    try
    {
      let response = await fetch('http://localhost:8080/login', myInit);
      if (response.status == 200)
      {
        let data= await response.json();
        var usuario=data.usuario;
        var token=data.token;
        console.log("Autentico");
        this.setState({ autentico: true });
        localStorage.setItem("token", token.tokenType+" " + token.accessToken);
        localStorage.setItem("jwtresponse",JSON.stringify(token));
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("jwtresponse"));
        this.setState({autentico: true})
        alert("Inicio de sesion exitoso");
        this.props.history.push('/');
      }
      else
      {
        console.log("no autentico");
        this.setState({ errores: 'Usuario o contraseña incorrectos' });
      }
      console.log(response);
    }
    catch (e)
    {
      console.log("errores");
      console.log(e);
      this.setState({errores: e.message})
    }
    console.log(await validarToken())
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
      <div>
        <Header
          absolute
          color="transparent"
          brand="GymStats"
          rightLinks={
            <HeaderLinks />
        }
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
                      <h4>Login</h4>
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
                    Ingresa ahora y empieza a construir tu futuro
                  </p>
                  <CardBody>
                    <TextField
                      value={this.state.username}
                      name="username"
                      labelText="Nombre de Usuario..."
                      id="username"
                      label="username"
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
                    onChange={this.onChange}
                  />

                  <TextField
                    name="password"
                    value={this.state.password}
                    label="contraseña"
                    labelText="Password..."
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
                    onChange={this.onChange}
                  />
                  {
                    <p className={classes.divider}>
                      {errores}
                    </p>
                  }
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    type="submit"
                    simple
                    color="primary"
                    size="lg">
                    Inicia Sesión
                  </Button>
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

export default withStyles(loginPageStyle)(LoginPage);
