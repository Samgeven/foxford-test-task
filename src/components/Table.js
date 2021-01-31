import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRows } from '../store/store'
import './Table.css'

let tableData = [
  {
    id: 1,
    firstName: 'Сергей',
    lastName: 'Иванов',
    age: 21
  },
  {
    id: 2,
    firstName: 'Татьяна',
    lastName: 'Петрова',
    age: 23
  },
  {
    id: 3,
    firstName: 'Виктор',
    lastName: 'Смирнов',
    age: 28
  },
  {
    id: 4,
    firstName: 'Андрей',
    lastName: 'Смирнов',
    age: 22
  },
  {
    id: 5,
    firstName: 'Александр',
    lastName: 'Иванов',
    age: 30
  },
  {
    id: 6,
    firstName: 'Григорий',
    lastName: 'Петров',
    age: 28
  },
  {
    id: 7,
    firstName: 'Елена',
    lastName: 'Иванова',
    age: 29
  }
]

const columns = [
  { field: 'firstName', headerName: 'Имя', width: 130 },
  { field: 'lastName', headerName: 'Фамилия', width: 130 },
  { field: 'age', headerName: 'Возраст', width: 130 },
]


function Table() {
  const selectedRowsData = useSelector(state => state.selectedRowsReducer);
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