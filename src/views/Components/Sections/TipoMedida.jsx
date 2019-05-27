import React from "react";
import TipoMedidaCard from "components/CardTipoMedida/TipoMedidaCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { BASE_URL } from "../../..";

class Tarifas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiposMedida: []
    };
  }

  async componentWillMount() {
    try {
      let response = await fetch(BASE_URL + "/tipos-medidas");
      let data = await response.json();
      this.setState({ tiposMedida: data });
      console.log(data);
    } catch (e) {
      console.log("Tarifas.jsx e: " + e.message);
    }
  }
  render() {
    const tiposMedida = this.state.tiposMedida;
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
          <h1> Tipos De Medidas</h1>
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
            {tiposMedida.map(tiposMedida => (
              <GridItem xs={14} sm={4} md={4} lg={2}>
                <TipoMedidaCard
                  key={tiposMedida.id}
                  tiposMedida={tiposMedida}
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
