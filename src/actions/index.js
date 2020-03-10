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

const onSearchChange = search => ({ type: "TABLE_SEARCH", payload: search });
const onFilter = filter => ({
  type: "BOLEAN_TOGGLER",
  payload: filter
});

export { fetchInfo, onSort, onSearchChange, onFilter };
