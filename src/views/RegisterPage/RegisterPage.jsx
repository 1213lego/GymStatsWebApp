import React from "react";
// @material-ui/core Components
import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
// @material-ui/icons

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Register from "@material-ui/icons/HowToReg";

// core Components
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

import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";

import image from "assets/img/bg2gym.jpg";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      generos: []
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillMount(){
    fetch('http://localhost:8080/generos').then(response=>{
      return response.json();
    }).then(generos=>{
      console.log(generos);
      this.setState({generos: generos});
    });
  } 
  render() {
    const { classes, ...rest} = this.props;
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
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={4}>
                <Card style={{ width: "50rem" }} className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Registro</h4>
                    </CardHeader>
                    <p className={classes.divider}>Estás a un paso de empezar a gozar de todo lo que tenemos para ti... ¡Registrate!</p>

                    <CardBody>
                    <GridContainer>


                      <GridItem xs={12} sm={4} md={4} lg={6}>
                      <CustomInput
                        labelText="Nombres"
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
                      />
                      </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={6}>
                    <InputLabel htmlFor="genero">Genero</InputLabel>
                      <Select
                        value={this.state.genero}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'genero',
                          id: 'genero',
                        }}
                      >
                        <MenuItem value="">
                          <em></em>
                        </MenuItem>
                        <MenuItem value={1}>Masculino</MenuItem>
                        <MenuItem value={2}>Femenino</MenuItem>
                        <MenuItem value={3}>No especificar</MenuItem>
                      </Select>
                      </GridItem>

                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={4} md={4} lg={6}>
                        <CustomInput
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
                        </GridItem>

                      <GridItem xs={12} sm={4} md={4} lg={6}>
                      <CustomInput
                        labelText="Numero Identificacion"
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
                      />
                      </GridItem>


                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={4} md={4} lg={6}>
                        <CustomInput
                          labelText="Nombre de Usuario..."
                          id="username"
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
                        </GridItem>

                    </GridContainer>
                    <CustomInput
                      labelText="Email..."
                      id="Email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor}/>

                          </InputAdornment>
                        )
                      }}
                    />
                      <CustomInput
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
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Registrarse
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

export default withStyles(registerPageStyle)(RegisterPage);
