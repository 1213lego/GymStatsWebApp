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
import AñadirMaquina from "components/FormDialog/añadirMaquina.jsx";
import Maquinas from "../Components/Sections/Maquinas.jsx"
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page


const dashboardRoutes = [];

class AdminTarifasPage extends React.Component {
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
        <Parallax filter image={require("assets/img/bgprincipal.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>

                <h1>Modulo Añadir Maquinas</h1>
                <br />

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
            <AñadirMaquina/>
            </div>
          </div>
          <Maquinas/>
        </div>
  </div>
    );
  }
}

export default withStyles(landingPageStyle)(AdminTarifasPage);
