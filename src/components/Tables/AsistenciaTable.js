import React from 'react';
import MaterialTable from 'material-table';
import { BASE_URL } from '../..';
class AsistenciaTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  render() {
    const {columns, title, ruta}=this.props;
    return (
      <MaterialTable
        title={title}
        columns={columns}
        data={query =>
          new Promise((resolve, reject) => {
            var myInit =
            {
              method: 'GET',
              headers: {
                'Authorization': localStorage.getItem('token')
              }
            };
            let url = BASE_URL + ruta
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
export default (AsistenciaTable)