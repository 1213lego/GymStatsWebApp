import React from 'react';
import MaterialTable from 'material-table';
import { BASE_URL } from '../..';
class ClientesTable extends React.Component {
  constructor(props) {
    super(props);

    this.tableRef = React.createRef();
  }
  render() {
    return (
      <MaterialTable
        title=""
        columns={[
          { title: 'Documento', field: 'documento' },
          { title: 'Nombre', field: 'nombres' },
          { title: 'Apellidos', field: 'apellidos'},
          { title: 'Email', field: 'email' },
          { title: 'Genero' , field: 'genero.genero' }
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            var myInit =
            {
              method: 'GET',
              headers: {
                'Authorization': localStorage.getItem('token')
              }
            };
            let url = BASE_URL + "/listar-clientes"
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
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => alert("You want to delete " + rowData.name)
          },
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
export default (ClientesTable)