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
      let response = await fetch("http://192.168.0.115:8080/tarifas");
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
      <div style={{justifyContent:'center', alignItems:'center'}}>
        <div style={{position:"center", marginTop:"20px", justifyContent:"center", display:"flex"}}>
            <h1> Nuestras Tarifas</h1>
        </div>
        <div style={{alignItems:"center",display:"block",justifyContent:"center",marginTop:"20px"}}>
        <GridContainer justify="center" alignItems="center">

            {tarifas.map(tarifa => (
              <GridItem xs={14} sm={4} md={4} lg={2}>
              <TarifaCard
                key={tarifa.id}
                nombre={tarifa.nombreTarifa}
                precio={tarifa.precio}
                duracion={tarifa.duracionDias}
              />
              </GridItem>
            ))}
            <TarifaCard
              key="1"
              nombre="aa"
              precio="123"
              duracion="12"
            />
            <TarifaCard
              key="1"
              nombre="aa"
              precio="123"
              duracion="12"
            />
            <TarifaCard
              key="1"
              nombre="aa"
              precio="123"
              duracion="12"
            />
            <TarifaCard
              key="1"
              nombre="aa"
              precio="123"
              duracion="12"
            />
            <TarifaCard
              key="1"
              nombre="aa"
              precio="123"
              duracion="12"
            />
        </GridContainer>
        </div>
      </div>
    );
  }
}
export default Tarifas;
