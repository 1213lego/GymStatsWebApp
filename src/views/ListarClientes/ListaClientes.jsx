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
import ClienteTable from "components/Tables/ClienteTable.jsx";



const dashboardRoutes = [];

class ListaClientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: []
    };
  }
  async componentWillMount(){
    var myInit =
    {
      method: 'GET',
      headers: {
      'Authorization': localStorage.getItem('token')
      }
    };
    try{
      let response= await fetch((BASE_URL + "/listar-clientes/0/100"),myInit);
      let data= await response.json();
      this.setState({clientes: data.content})
    }
    catch(e){
      console.log(e);
    }
  }
  render() {
    const clientes = this.state.clientes;
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

                <h1>Mis Empleados</h1>

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
          <h1> Lista De Empleados</h1>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "block",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
        <ClienteTable clientes={clientes}/>

        </div>

      </div>
      
    );
  }
}
export default withStyles(landingPageStyle) (ListaClientes);

