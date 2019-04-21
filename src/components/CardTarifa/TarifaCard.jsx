import React from 'react'

import withStyles from "@material-ui/core/styles/withStyles";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

class TarifaCard extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={
      nombre:'',
      precio:'',

    }


  }
    render(){

    const{classes, ...rest} = this.props;
    return(
      <Card pricing color="primary" style={{ maxWidth: "235px" }}>
        <CardHeader color="primary" className={classes.cardHeader}>

         {this.state.nombre}

        </CardHeader>
           <CardBody pricing>

             <h3>
              {this.state.precio}
             </h3>
            <p>
            DESCRIPCION
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
