import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import AñadirTipoMedida from "components/FormDialog/añadirTipoMedida.jsx";
import TipoMedida from "../Components/Sections/TipoMedida.jsx"
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import CardMedidasCliente from "../../components/cardMedidaCliente/CardMedidasCliente.js";
import { BASE_URL } from "../../index.js";

// Sections for this page


const dashboardRoutes = [];

class ListaMedidasCliente extends React.Component {
constructor(props){
    super(props);
    this.state = {
        misMedidas: [ ]
    };
}
 async componentWillMount(){
    var accestoken = JSON.parse(localStorage.getItem("jwtresponse"));
    var tokenString = accestoken.accessToken + "";
    var token =
    {
      token: tokenString
    }
    var myInit =
    {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };  
    let response= await fetch(BASE_URL + "/clientes/mis-medidas",myInit);
    console.log(response);
    let data= await response.json();
    console.log(data);
    this.setState({misMedidas: data});
 }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
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
        <Parallax filter image={require("assets/img/misMedidas.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h2>Mis medidas</h2>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            </div>
          </div>
          {
            this.state.misMedidas.map(medida=>(
              <CardMedidasCliente medida={medida}></CardMedidasCliente>
            ))
          }
        </div>
  </div>
    );
  }
}

export default withStyles(landingPageStyle)(ListaMedidasCliente);
