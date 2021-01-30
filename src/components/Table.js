import { DataGrid } from "@material-ui/data-grid";
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
  }
]

const columns = [
  { field: 'firstName', headerName: 'Имя', width: 130 },
  { field: 'lastName', headerName: 'Фамилия', width: 130 },
  { field: 'age', headerName: 'Возраст', width: 130 },
]

function App() {
  return (
    <div className="App" style={{ height: 400, width: '100%' }}>
      <h1>
        Список сотрудников
      </h1>
      <DataGrid
        rows={tableData}
        columns={columns}
        disableColumnMenu 
        checkboxSelection
        pageSize={5}
        onSelectionChange={newSelection => {
          console.log(newSelection)
        }}
      />
    </div>
  );
}

export default App;