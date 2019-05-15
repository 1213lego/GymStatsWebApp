import React from "react";
import TarifaCardAdmin from "components/CardTarifa/TarifaCardAdmin.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { BASE_URL } from "../../..";

class Tarifas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarifas: []
    };
  }

  async componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/tarifas");
      let data = await response.json();
      this.setState({ tarifas: data });
      console.log(data);
    } catch (e) {
      console.log("Tarifas.jsx e: " + e.message);
    }
  }
  render() {
    const tarifas = this.state.tarifas;
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
          <h1> Nuestras Tarifas</h1>
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
            {tarifas.map(tarifa => (
              <GridItem xs={14} sm={4} md={4} lg={2}>
                <TarifaCardAdmin
                  key={tarifa.id}
                  tarifa={tarifa}
                />
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}
export default Tarifas;
