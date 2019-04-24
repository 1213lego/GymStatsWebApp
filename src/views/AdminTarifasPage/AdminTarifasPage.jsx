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
import CrearTarifa from "components/FormDialog/crearTarifa.jsx";
import Tarifa from "views/Components/Sections/Tarifas.jsx";
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
        <Parallax filter image={require("assets/img/tarifaimage.jpg")}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <div className={classes.container}>
                    <Tarifa/>
                    <CrearTarifa/>
                  </div>
                </div>

                <br />

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
  </div>
    );
  }
}

export default withStyles(landingPageStyle)(AdminTarifasPage);
