import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import EditarTarifa from "components/FormDialog/editarTarifa.jsx"
class TarifaCard extends React.Component {
  render() {
    const { tarifa, classes, ...rest } = this.props;
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
          <h4>{tarifa.nombreTarifa}</h4>
        </CardHeader>
        <CardBody pricing>
          <h3>${tarifa.precio}</h3>
          <h4>Duracion: {tarifa.duracionDias} dias</h4>
          <EditarTarifa tarifa={tarifa}></EditarTarifa>
        </CardBody>
      </Card>
    );
  }
}
export default TarifaCard;
