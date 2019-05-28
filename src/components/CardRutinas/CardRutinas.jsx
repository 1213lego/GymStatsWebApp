import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

class CardRutina extends React.Component {
  constructor(props){
    super(props);
   
  }
  onClickButtonCambiarEstado(e){
    alert("sdsdssds");
  }
  render() {
    const { classes,rutina, ...rest } = this.props;
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
          <h4>{rutina.nombreRutina}</h4>
        </CardHeader>
        <CardBody pricing>
          
          <p>{rutina.descripcionRutina}</p>
         
        </CardBody>
      </Card>
    );
  }
}
export default CardRutina;
