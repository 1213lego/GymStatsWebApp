import React from 'react'

import withStyles from "@material-ui/core/styles/withStyles";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

class TarifaCard extends React.Component
{
    render(){
    const{classes, ...rest} = this.props;
    return(
     <Card pricing color="primary" style={{ maxWidth: "235px" }}>
       <CardHeader color="primary" >
        </CardHeader>
           <CardBody pricing>
             <h3>
              {this.props.precio}
             </h3>
            <p>
            {this.props.nombre}
            </p>
             <Button round color="white">
               Comprar
             </Button>
           </CardBody>
         </Card>
    )

    }
}

export default TarifaCard
