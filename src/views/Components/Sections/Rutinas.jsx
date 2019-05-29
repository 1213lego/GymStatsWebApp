import React from "react";
import CardRutinas from "components/CardRutinas/CardRutinas.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { BASE_URL } from "../../..";

class Tarifas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rutinas: []
    };
  }

  async componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/empleados/rutinas");
      let data = await response.json();
      console.log(data);
      this.setState({ rutinas: data});
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const rutinas = this.state.rutinas;
    return (
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            position: "center",
            marginTop: "20px",
            justifyContent: "center",
            display: "flex"
          }}
        >
          <h1> Rutinas</h1>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "block",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
          <GridContainer justify="center" alignItems="center">
            {rutinas.map(rutina=>(
              <GridItem xs={14} sm={4} md={4} lg={2}>
              <CardRutinas key={rutina.id} rutina={rutina}/>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}
export default Tarifas;
