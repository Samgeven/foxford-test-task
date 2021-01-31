import { createStore, combineReducers } from 'redux';

const initialState = {
  tableData: [],
  selectedRows: [],
  isLoading: false
}

export const setLoading = () => {
  return {
    type: 'isLoading/enable',
  }
}

export const unsetLoading = () => {
  return {
    type: 'isLoading/disable',
  }
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

const isLoadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case 'isLoading/enable':
      return state = true
    case 'isLoading/disable':
      return state = false
    default:
      return state
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
  selectedRows: selectedRowsReducer,
  tableData: tableDataReducer,
  isLoading: isLoadingReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());