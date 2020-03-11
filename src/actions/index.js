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

export { fetchInfo, onSort, onSearchChange, onFilter };
