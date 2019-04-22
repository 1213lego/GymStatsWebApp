import React from "react";

import nouislider from "nouislider";

import TarifaCard from "components/CardTarifa/TarifaCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Tarifas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarifas: []
    };
  }

  async componentWillMount()
  {
    try
    {
      let response = await fetch("http://localhost:8080/tarifas");
      let data = await response.json();
      this.setState({ tarifas: data });
      console.log(data);
    }
    catch (e)
    {
      console.log("error " + e.message);
    }
  }

  render() {
    const tarifas = this.state.tarifas;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={6}>
            {tarifas.map(tarifa => (
              <TarifaCard
                key={tarifa.id}
                nombre={tarifa.nombreTarifa}
                precio={tarifa.precio}
              />
            ))}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default Tarifas;
