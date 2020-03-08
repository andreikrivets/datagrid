/* eslint-disable no-unused-vars */
const defaultDataState = {
  data: {},
  loading: true
};
const defaultTableState = {
  sort: {},
  search: ""
};

const information = (state = defaultDataState, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      return { ...state, data: action.data, loading: true };
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
    default:
      return state;
  }
};

export default { information, table };
