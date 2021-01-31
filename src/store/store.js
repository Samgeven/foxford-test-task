import { createStore, combineReducers } from 'redux';

const initialState = {
  tableData: [],
  selectedRows: []
}

export const setData = (dataArray) => {
  return {
    type: 'tableData/setData',
    payload: dataArray
  }
}

export const setSelectedRows = (idArray) => {
  return {
    type: 'selectedRows/idArray',
    payload: idArray
  }
}

const tableDataReducer = (state = initialState.tableData, action) => {
  switch (action.type) {
    case 'tableData/setData':
      return action.payload
    default:
      return state
  }
}

const selectedRowsReducer = (state = initialState.selectedRows, action) => {
  switch (action.type) {
    case 'selectedRows/idArray':
      return action.payload
    default:
      return state
  }
}

const reducers = combineReducers({
  selectedRowsReducer,
  tableDataReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());