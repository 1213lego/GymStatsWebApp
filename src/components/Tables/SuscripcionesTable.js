import React from 'react';
import MaterialTable from 'material-table';
import { BASE_URL } from '../..';
class SuscripcionesTable extends React.Component {
  constructor(props) {
    super(props);

    this.tableRef = React.createRef();
  }
  render() {
    return (
      <MaterialTable
        title=""
        columns={[
          { title: 'Fecha inicio', field: 'fechaInicio' },
          { title: 'Fecha fin', field: 'fechaFin' },
          { title: 'Precio', field: 'precio' },
          { title: 'Estado', field: 'estadoSuscripcion.estadoSuscripcion' },
          { title: 'Tarifa Empleado', field: 'tarifa.nombreTarifa' }
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            var accestoken = JSON.parse(localStorage.getItem("jwtresponse"));
            var tokenString = accestoken.accessToken + "";
            var token =
            {
              token: tokenString
            }
            var myInit =
            {
              method: 'POST',
              body: JSON.stringify(token),
              headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json'
              }
            };
            let url = BASE_URL + "/clientes/mis-suscripciones"
            url += '/' + (query.page)
            url += '/' + query.pageSize
            console.log(url);
            fetch(url, myInit)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result.content,
                  page: result.number,
                  totalCount: result.totalElements,
                })
              })
          })
        }
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
          }
        ]}
      />
    )
  }
}
export default (SuscripcionesTable)