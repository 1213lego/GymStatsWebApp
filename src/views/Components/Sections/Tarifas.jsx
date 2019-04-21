import React from "react"

import nouislider from "nouislider";

import TarifaCard from "components/CardTarifa/TarifaCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Tarifas extends React.Component{

  constructor(props)
  {
    super(props);
    this.state ={
      tarifas:[]
    }

  }

  componentWillMount(){
    fetch('http://localhost:8080/tarifas').then(response =>{
      return response.json();
    }).then(tarifas =>{
      this.setState({tarifas:tarifas});
      console.log(tarifas);
    });

  }


  render(){

    return(
      <div>
      <GridContainer>
      <GridItem xs={12} sm={4} md={4} lg={6}>
        { this.state.tarifas.map((tarifa) => (
          <TarifaCard nombre={tarifa.nombreTarifa} precio={tarifa.precio}/>
        ))
        }
        <TarifaCard nombre="mes" precio="$69"/>
      </GridItem>
      </GridContainer>
      </div>
    )

  }
}
export default Tarifas  ;
