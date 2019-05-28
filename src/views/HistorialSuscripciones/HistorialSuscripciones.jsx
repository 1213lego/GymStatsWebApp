import React from "react";
import { BASE_URL } from "../..";

import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SuscripcionesTable from "../../components/Tables/SuscripcionesTable";


const dashboardRoutes = [];

class HistorialSuscripciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suscripciones: []
    };
    this.onclickCongelarSuscripcion=this.onclickCongelarSuscripcion.bind(this);
  }
  async onclickCongelarSuscripcion(e){
    var accestoken= JSON.parse(localStorage.getItem("jwtresponse"));
    var tokenString=accestoken.accessToken+"";
    console.log(tokenString);
    var token=
    {
      token : tokenString
    }
    console.log(token);
    var myInit =
    {
      method: 'PUT',
      body: JSON.stringify(token),
      headers: {
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
      }
    };
    try{
      let response= await fetch((BASE_URL + "/clientes/congelar-suscripcion"),myInit);
      console.log(response);
      if(response.status==200){
        window.location.reload();
      }
      else if(response.status==403){
        alert("Por favor inicie sesion");
      }
      else if(response.status==401){
        alert("No tiene eres un cliente")
      }
    }
    catch(e){
      alert("asasa")
      console.log(e);
    }
  }
  async componentWillMount(){
    var accestoken= JSON.parse(localStorage.getItem("jwtresponse"));
    var tokenString=accestoken.accessToken+"";
    console.log(tokenString);
    var token=
    {
      token : tokenString
    }
    console.log(token);
    var myInit =
    {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
      }
    };
    try{
      let response= await fetch((BASE_URL + "/clientes/mis-suscripciones/0/20"),myInit);
      console.log(response);
      if(response.status==200){
        let data= await response.json();
        console.log(data);
        this.setState({suscripciones: data.content})
      }
      else if(response.status==403){
        alert("Por favor inicie sesion");
      }
      else if(response.status==401){
        alert("No tiene eres un cliente")
      }
    }
    catch(e){
      alert("asasa")
      console.log(e);
    }
  }
  render() {
    const suscripciones = this.state.suscripciones;
    const  {classes,... rest}  = this.props;
    return (
      <div style={{ justifyContent: "center", alignItems: "center" }}>
      <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="GymStats"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
      <Parallax filter image={require("assets/img/empleados.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>

                <h2>Mis Suscripciones</h2>

                <br />

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div
          style={{
            position: "center",
            marginTop: "20px",
            justifyContent: "center",
            display: "flex"
          }}
        >
          <Button onClick={this.onclickCongelarSuscripcion}round color="white">
            Congelar suscripcion
          </Button>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "block",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
        <SuscripcionesTable></SuscripcionesTable>    
        </div>

      </div>
      
    );
  }
}
export default withStyles(landingPageStyle) (HistorialSuscripciones);

