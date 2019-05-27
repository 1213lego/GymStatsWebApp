import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

class TarifaCard extends React.Component {
  constructor(props){
    super(props);
   
  }
  onClickButtonCambiarEstado(e){
    alert("sdsdssds");
  }
  render() {
    const { classes,tiposMedida, ...rest } = this.props;
    return (
      <Card
        pricing
        color="primary"
        style={{
          marginTop: "20px",
          position: "relative",
          maxWidth: "235px"
        }}
      >
        <CardHeader color="primary">
          <h4>{tiposMedida.nombre}</h4>
        </CardHeader>
        <CardBody pricing>
          
          <p>{tiposMedida.descripcion}</p>
         
        </CardBody>
      </Card>
    );
  }
}
export default TarifaCard;
