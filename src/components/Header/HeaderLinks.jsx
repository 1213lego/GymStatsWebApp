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
    window.location.replace("http://localhost:3000/login-page");
  }
  async componentWillMount() {
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
          </ListItem> : <ListItem className={classes.listItem}> </ListItem>
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
    <CustomDropdown
        noLiPadding
        buttonText={localStorage.getItem("usuarioActual")}
        buttonProps={{
          className: classes.navLink,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            {"Documento " + localStorage.getItem("documento")}
            </Link>,
          <Link to="/" onClick={this.onClickCerrarSesion} className={classes.dropdownLink}>
            Cerrar sesión
            </Link>,        
        ]}
      />
        </ListItem> : <ListItem className={classes.listItem}> </ListItem>
        }
      </List>
    );
  }
}
function Menu(props){
  return( <ListItem className={props.classes.listItem}>
    <CustomDropdown
        noLiPadding
        buttonText="Usuario"
        buttonProps={{
          className: props.classes.navLink,
          color: "transparent"
        }}
        buttonIcon={<FontAwesomeIcon icon="stroopwafel" />}
        dropdownList={[
          <Link to="/" className={props.classes.dropdownLink}>
            Ver perfil
            </Link>,
          <Link to="/" onClick={this.onClickCerrarSesion} className={props.classes.dropdownLink}>
            Cerrar sesión
            </Link>,        
        ]}
      />
        </ListItem>);
}
function MenuAdmin(props) {
  return (
    <ListItem className={props.classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="Opciones"
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
          <Link to="/admin/mis-empleados" className={props.classes.dropdownLink}>
            Ver Mis Empleados
             </Link>,
          <Link to="/clientes" className={props.classes.dropdownLink}>
            Ver Mis clientes
             </Link>,
          <Link to="/admin/asistencia-empleados" className={props.classes.dropdownLink}>
            Asistencias empleados
                </Link>,
          <Link to="/asistencia-clientes" className={props.classes.dropdownLink}>
            Asistencias clientes
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
        buttonText="Opciones"
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
          <Link to="/clientes" className={props.classes.dropdownLink}>
            Ver Mis clientes
             </Link>,
          <Link to="/empleado/añadir-medidas" className={props.classes.dropdownLink}>
            Añadir Tipo De Medida
              </Link>,
          <Link to="/empleado/tomar-medidas" className={props.classes.dropdownLink}>
            Tomar Medidas a un cliente
                </Link>,
          ,
          <Link to="/asistencia-clientes" className={props.classes.dropdownLink}>
            Asistencias clientes
                </Link>,
            <Link to="/empleado/agregar-rutinas" className={props.classes.dropdownLink}>
            Agregar Rutinas
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
        buttonText="Opciones"
        buttonProps={{
          className: props.classes.navLink,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link to="/" className={props.classes.dropdownLink}>
            --
              </Link>,
          <Link to="/clientes-suscripciones" className={props.classes.dropdownLink}>
            Mis suscripciones
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
