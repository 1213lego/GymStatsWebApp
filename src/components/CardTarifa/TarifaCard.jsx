import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

class TarifaCard extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
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
          <h4>{this.props.nombre}</h4>
        </CardHeader>
        <CardBody pricing>
          <h3>${this.props.precio}</h3>
          <h4>Duracion: {this.props.duracion} dias</h4>
          <Button round color="white">
            Comprar
          </Button>
        </CardBody>
      </Card>
    );
  }
}
export default TarifaCard;
