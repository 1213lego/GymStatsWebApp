import React from "react";
import MaquinaCard from "components/CardMaquina/MaquinaCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { BASE_URL } from "../../..";

class Tarifas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maquinas: []
    };
  }

  async componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/maquinas");
      let data = await response.json();
      this.setState({ maquinas: data });
      console.log(data);
    } catch (e) {
      console.log("Tarifas.jsx e: " + e.message);
    }
  }
  render() {
    const maquinas = this.state.maquinas;
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
          <h1> Maquinas</h1>
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
            {maquinas.map(maquina => (
              <GridItem xs={14} sm={4} md={4} lg={2}>
                <MaquinaCard
                  key={maquina.id}
                  maquina={maquina}
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
