/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import { tipoUsuario, validarToken } from "../../index.js"
class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rol: ''
    }
    this.onClickCerrarSesion = this.onClickCerrarSesion.bind(this);
  }
  onClickCerrarSesion(e) {
    localStorage.removeItem("token");
    localStorage.removeItem("jwtresponse");
  }
  async componentWillMount() 
  {
    console.log("de headerlink" + await validarToken())
    this.setState({ rol: tipoUsuario });
  }
  render() {
    const { classes } = this.props;
    const pTipo = this.state.rol;
    return (
      <List className={classes.list}>

        <ListItem className={classes.listItem}>
          <Link to="/" className={classes.navLink}>
            Inicio
          </Link>
        </ListItem>
        {
          pTipo == "ROLE_ADMIN" ? <MenuAdmin classes={classes}></MenuAdmin> :
            pTipo == "ROLE_CLIENTE" ? <MenuCliente classes={classes}></MenuCliente> : pTipo == "ROLE_EMPLEADO" ?
              <MenuEmpleado classes={classes}></MenuEmpleado> : <ListItem className={classes.listItem}> </ListItem>
        }
        {
          pTipo == '' ? <ListItem className={classes.listItem}>
          <Link to="/register-page" className={classes.navLink}>
            Registro
            </Link>
         </ListItem> : <ListItem className={classes.listItem}> </ListItem>
        }
        {
          pTipo == '' ? <ListItem className={classes.listItem}>
          <Link to="/login-page" className={classes.navLink}>
            Login
          </Link>
          </ListItem> :  <ListItem className={classes.listItem}> </ListItem>
        }
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
        {
          pTipo != '' ? <ListItem className={classes.listItem}>
          <Link to="/" onClick={this.onClickCerrarSesion} className={classes.navLink}>
            Cerrar sesion
            </Link>
        </ListItem> : <ListItem className={classes.listItem}> </ListItem>     
        }
      </List>
    );
  }
}

function MenuAdmin(props) {
  return (
    <ListItem className={props.classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="Admin"
        buttonProps={{
          className: props.classes.navLink,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link to="/registerEmployer" className={props.classes.dropdownLink}>
            Registrar Empleado
            </Link>,
            <Link to="/admin/tarifas" className={props.classes.dropdownLink}>
            Agregar Tarifa
            </Link>,
            <Link to="/admin/maquinas" className={props.classes.dropdownLink}>
            Agregar Maquina
            </Link>,
          <a
            href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
            target="_blank"
            className={props.classes.dropdownLink}
          >
            Documentation
            </a>
        ]}
      />
    </ListItem>
  );
}
function MenuEmpleado(props) {
  return (
    <ListItem className={props.classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="Empleado"
        buttonProps={{
          className: props.classes.navLink,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link to="/empleado/registroDiario" className={props.classes.dropdownLink}>
            Registrar Sub. Diaria
            </Link>,
            <Link to="/empleado/registroSubs" className={props.classes.dropdownLink}>
              Registrar Subscripción
              </Link>,
          <a
            href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
            target="_blank"
            className={props.classes.dropdownLink}
          >
            Documentation
            </a>
        ]}
      />
    </ListItem>
  );
}

function MenuCliente(props) {
  return (
    <ListItem className={props.classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="Cliente"
        buttonProps={{
          className: props.classes.navLink,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link to="/" className={props.classes.dropdownLink}>
            --
              </Link>,
          <a
            href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
            target="_blank"
            className={props.classes.dropdownLink}
          >
            Documentation
              </a>
        ]}
      />
    </ListItem>
  );
}
function MenuGeneral(props) {
  return (
    <div>
      <ListItem className={props.classes.listItem}>
        <Link to="/register-page" className={props.classes.navLink}>
          Registro
            </Link>
      </ListItem>
      <ListItem className={props.classes.listItem}>
        <Link to="/login-page" className={props.classes.navLink}>
          Login
        </Link>

      </ListItem>
      <ListItem className={props.classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: props.classes.tooltip }}
        >
          <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={props.classes.navLink}
          >
            <i className={props.classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={props.classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: props.classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/"
            target="_blank"
            className={props.classes.navLink}
          >
            <i className={props.classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={props.classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: props.classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={props.classes.navLink}
          >
            <i className={props.classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </div>
  );
}
export default withStyles(headerLinksStyle)(HeaderLinks);
