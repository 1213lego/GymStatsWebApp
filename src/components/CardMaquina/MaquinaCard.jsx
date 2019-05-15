import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CambiarEstadoMaquina from "components/FormDialog/cambiarEstadoMaquina.jsx"
class TarifaCard extends React.Component {
  constructor(props){
    super(props);
    this.onClickButtonCambiarEstado= this.onClickButtonCambiarEstado.bind(this);
  }
  onClickButtonCambiarEstado(e){
    alert("sdsdssds");
  }
  render() {
    const { classes,maquina, ...rest } = this.props;
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
          <h4>{maquina.nombre}</h4>
        </CardHeader>
        <CardBody pricing>
          <h4>{maquina.marca}</h4>
          <h4>Estado : {maquina.estadosMaquina.estadoMaquina}</h4>
          <h4>{maquina.fechaCompra}</h4>
          <p>{maquina.descripcion}</p>
          <CambiarEstadoMaquina round color="white" maquina={maquina}>
            Cambiar estado
          </CambiarEstadoMaquina>

        </CardBody>
      </Card>
    );
  }
}
export default TarifaCard;
