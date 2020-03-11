import _orderBy from "lodash/orderBy";
import { createSelector } from "reselect";

const getBoolRows = (information, filter) => {
  if (!filter) return information;
  if (filter === "open" || filter === "close") {
    const query = filter === "open";
    return information.filter(row => row.bool === query);
  }
  const query = filter.split(" ");
  return information.filter(row => {
    return [row.enum].find(str => new RegExp(query, "i").test(str));
  });
};

const getFilteredRows = (information, search, filter, column) => {
  const inf = getBoolRows(information, filter);
  if (!search) return inf;
  try {
    const searchRegex = new RegExp(search, "i"); // no escaping is a feature!
    return inf.filter(row => {
      const selectedCols = column.map(col => row[col]);
      return [selectedCols].find(str => searchRegex.test(str));
    });
  } catch (e) {
    return inf;
  }
};

const filterAndSort = (data, sort, search, filter, column) => {
  let sortFunc = sort;
  if (!sortFunc[1]) sortFunc = ["id", "asc"];
  return _orderBy(
    getFilteredRows(data, search, filter, column),
    sortFunc[0],
    sortFunc[1]
  );
};

const rowsSelector = createSelector(
  state => state.table,
  state => state.information.data,
  ({ sort, search, filter }, information) => {
    const query = search[0];
    const column = search[1];
    return filterAndSort(information, sort, query, filter, column);
  }
);

export default rowsSelector;
