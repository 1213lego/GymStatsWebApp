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
function HeaderLinks({ ...props }) {
  const { classes } = props;
  let pTipo = tipoUsuario;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Inicio
      </Link>
      </ListItem>
      {
        pTipo == "ROLE_ADMIN" ? <MenuAdmin classes={classes}></MenuAdmin>: <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="Prueba"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={Apps}
              dropdownList={[
                <Link to="/" className={classes.dropdownLink}>
                  All components
            </Link>,
                <a
                  href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
                  target="_blank"
                  className={classes.dropdownLink}
                >
                  Documentation
            </a>
              ]}
            />
          </ListItem>
      }
      <ListItem className={classes.listItem}>
        <Link to="/register-page" className={classes.navLink}>
          Registro
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login-page" className={classes.navLink}>
          Login
          </Link>

      </ListItem>
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
    </List>
  );
}

function MenuAdmin(props) {
  return (
    <div>
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
                All components
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
    </div>
  )
}
export default withStyles(headerLinksStyle)(HeaderLinks);
