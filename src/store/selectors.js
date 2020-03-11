import _orderBy from "lodash/orderBy";
import { createSelector } from "reselect";

const getBoolRows = (information, filter) => {
  const query = filter === "ok";
  if (!filter) return information;
  return information.filter(row => row.bool === query);
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

const filterAndSort = (data, sort, search, filter, column) =>
  _orderBy(getFilteredRows(data, search, filter, column), sort[0], sort[1]);

const rowsSelector = createSelector(
  state => state.table,
  state => state.information.data,
  ({ sort, search, filter }, information) => {
    const query = search[0];
    const column = search[1];
    console.log(column);
    return filterAndSort(information, sort, query, filter, column);
  }
);

export default rowsSelector;
