/* eslint-disable no-unused-vars */
const defaultDataState = {
  data: {},
  loading: true,
  row: [],
  selected: []
};

const defaultTableState = {
  sort: {},
  search: {},
  filter: ""
};

const information = (state = defaultDataState, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      return { ...state, data: action.data, loading: true };
    case "DELETE_ROW": {
      const badSolve = data => {
        if (!state.selected) return data;
        const array = state.selected.map(e => data.map(el => el.id === e));
        const concatArr = array[0].map((el, i) => {
          let element = false;
          new Array(state.selected.length).fill("").forEach((e, item) => {
            element += array[item][i];
          });
          return element;
        });
        return state.data.filter((row, i) => !concatArr[i]);
      };
      return {
        ...state,
        data: badSolve(state.data),
        selected: []
      };
    }
    case "SELECT_ROW":
      return { ...state, selected: [...state.selected, action.selected] };
    case "UNSELECT_ROW": {
      return {
        ...state,
        selected: state.selected.filter((el, i) => el !== action.unselected)
      };
    }

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
