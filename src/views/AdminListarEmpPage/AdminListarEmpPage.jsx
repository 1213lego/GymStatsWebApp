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
import EmploysTable from "../../components/Tables/EmploysTable";
const dashboardRoutes = [];

class AdminListarEmpPage extends React.Component {
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
      <Parallax filter image={require("assets/img/empleados.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h3>Mis Empleados</h3>
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
          <h2> Lista De Empleados</h2>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "block",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
        <EmploysTable/>
        </div>
      </div>
    );
  }
}
export default withStyles(landingPageStyle) (AdminListarEmpPage);

