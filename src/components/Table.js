import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRows, setData, setLoading, unsetLoading } from '../store/store'
import './Table.css'

function Table() {
  //columns header setup for Material UI
  const columns = [
    { field: 'firstName', headerName: 'Имя', width: 130 },
    { field: 'lastName', headerName: 'Фамилия', width: 130 },
    { field: 'age', headerName: 'Возраст', width: 130 },
  ]

  // extracting state using helper-functions
  const selectedRowsData = useSelector(state => state.selectedRows);
  const tableData = useSelector(state => state.tableData);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  const getFirstNameById = (arr) => {
    const namesArr = [];
    tableData.forEach(el => {
      if (arr.includes(el.id.toString())) {
        namesArr.push(el.firstName);
      }
    })
    return namesArr.join(', ');
  }

  const fetchTableData = () => {
    dispatch(setLoading())
    return fetch('https://raw.githubusercontent.com/Samgeven/foxford-test-task/master/src/data/users.json')
    .then(response => response.json())
    .then(json => {
      dispatch(setData(json))
      dispatch(unsetLoading())
    })
  }

  // fetching table data upon component mounted
  useEffect(() => {
    fetchTableData()
  }, []);

  return (
    <div className="Table" style={{ height: 500, width: '100%' }}>
      <h1>
        Список сотрудников
      </h1>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        disableColumnMenu 
        checkboxSelection
        hideFooterRowCount
        loading={isLoading}
        onSelectionChange={newSelection => {
          dispatch(setSelectedRows(newSelection.rowIds))
        }}
        
      />
      <div className="Selected-names">
        {
          selectedRowsData.length 
          ? `Пользователи: ${getFirstNameById(selectedRowsData)}` 
          : ''
        }
      </div>
    </div>
  );
}

export default Table;