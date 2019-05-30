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
import ClientesTable from "../../components/Tables/ClientesTable";
const dashboardRoutes = [];

class ListaClientes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      <Parallax filter image={require("assets/img/1.PNG")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h3>Mis Clientes</h3>
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
          <h2> Lista De Clientes</h2>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "block",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
        <ClientesTable/>
        </div>

      </div>
      
    );
  }
}
export default withStyles(landingPageStyle) (ListaClientes);

