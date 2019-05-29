import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.4.0";
// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import RegisterEmployerPage from "views/RegisterEmployerPage/RegisterEmployerPage.jsx";
import AdminTarifasPage from "views/AdminTarifasPage/AdminTarifasPage.jsx";
import AdminMaquinasPage from "views/AdminMaquinasPage/AdminMaquinasPage.jsx";
import RegistrarAsistenciaPage from "./views/RegistrarAsistenciaPage/RegistrarAsistenciaPage";
import RegistrarSubDiaria from "views/RegistrarSubscripcionDiariaPage/RegistrarSubscripcionDiariaPage.jsx";
import RegistrarSub from "views/RegistrarSubscripcionPage/RegistrarSubscripcion.jsx";
import AdminListarEmpPage from "views/AdminListarEmpPage/AdminListarEmpPage.jsx";
import ListarClientes from "views/ListarClientes/ListaClientes.jsx"
import HistorialSuscripciones from "views/HistorialSuscripciones/HistorialSuscripciones.jsx"
import EmployerTipoMedidaPage from "views/EmployerTipoMedidaPage/EmployerTipoMedidaPage.jsx";
import TomarMedidasCliente from "views/TomarMedidasCliente/TomarMedidasCliente.jsx";
import AgregarRutinaPage from "views/AgregarRutinaPage/AgregarRutinaPage.jsx";

var hist = createBrowserHistory();
export const BASE_URL = "http://10.30.4.52:8080";
ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path ="/empleado/agregar-rutinas" component={AgregarRutinaPage}/>
      <Route path ="/empleado/tomar-medidas" component={TomarMedidasCliente}/>
    <Route path="/empleado/añadir-medidas" component={EmployerTipoMedidaPage} />
      <Route path="/admin/mis-empleados" component={AdminListarEmpPage} />
      <Route path="/clientes-suscripciones" component={HistorialSuscripciones} />
      <Route path="/clientes" component={ListarClientes} />
      <Route path="/empleado/registroSubs" component={RegistrarSub} />
      <Route path="/empleado/registroDiario" component={RegistrarSubDiaria} />
      <Route path="/registrarAsistencia" component={RegistrarAsistenciaPage} />
      <Route path="/admin/tarifas" component={AdminTarifasPage} />
      <Route path="/admin/maquinas" component={AdminMaquinasPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/registerEmployer" component={RegisterEmployerPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/register-page" component={RegisterPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
export let tipoUsuario;
export async function validarToken() {
  const item = localStorage.getItem("jwtresponse");
  var resultado = "";
  if (item) {
    var myInit = 
    {
      method: "POST",
      body: item,
      headers: 
      {
        "Content-Type": "application/json"
      }
    };
    let response = await fetch(BASE_URL + "/validate", myInit);
    let data = await response.json();
    resultado = data.usuario;
    if (resultado == "expirado") {
      resultado="";
      console.log("Hello world!");
      localStorage.removeItem("token");
      localStorage.removeItem("jwtresponse");
    }
  }
  tipoUsuario = resultado;
  return resultado;
}
