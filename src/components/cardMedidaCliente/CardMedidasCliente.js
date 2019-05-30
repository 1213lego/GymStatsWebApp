import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
export default class CardMedidasCliente extends  React.Component  {
  constructor(props){
    super(props);
   
  }
  onClickButtonCambiarEstado(e){
    alert("sdsdssds");
  }
  render() {
    const { classes, ...rest } = this.props;
    const {medida}=this.props.medida;
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
          <h4>{medida.tiposMedida.descripcion}</h4>
        </CardHeader>
        <CardBody pricing>
          <p>{medida.tiposMedida.nombre}</p>
          <p>{medida.valorMedida}</p>
        </CardBody>
      </Card>
    );
  }
}
