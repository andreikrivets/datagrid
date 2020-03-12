import fetchData from "../data/data";

const data = fetchData();

const fetchInfo = {
  type: "CREATE_DATA",
  data,
  loading: false
};

const onSort = (property, direction) => ({
  type: "TABLE_SORT",
  payload: [property, direction]
});

const onSearchChange = (query, column) => ({
  type: "TABLE_SEARCH",
  payload: [query, column]
});
const onFilter = filter => ({
  type: "BOLEAN_TOGGLER",
  payload: filter
});

const onDelete = row => ({
  type: "DELETE_ROW",
  payload: row
});

const onSelect = selected => ({
  type: "SELECT_ROW",
  selected
});

const onUnselect = unselected => ({
  type: "UNSELECT_ROW",
  unselected
});

export {
  fetchInfo,
  onSort,
  onSearchChange,
  onFilter,
  onDelete,
  onSelect,
  onUnselect
};
