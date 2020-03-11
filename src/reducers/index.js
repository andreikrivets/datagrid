/* eslint-disable no-unused-vars */
const defaultDataState = {
  data: {},
  loading: true,
  row: []
};
const defaultTableState = {
  sort: {},
  search: {},
  filter: ""
};

const information = (state = defaultDataState, action) => {
  console.log(state);
  switch (action.type) {
    case "CREATE_DATA":
      return { ...state, data: action.data, loading: true };
    case "DELETE_ROW":
      return {
        ...state,
        data: state.data.filter((e, i) => i !== action.payload[0] - 1)
      };
    default:
      return state;
  }
};

const table = (state = defaultTableState, action) => {
  switch (action.type) {
    case "TABLE_SORT":
      return { ...state, sort: action.payload };
    case "TABLE_SEARCH":
      return { ...state, search: action.payload };
    case "BOLEAN_TOGGLER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default { information, table };
