import _orderBy from "lodash/orderBy";
import { createSelector } from "reselect";

const getBoolRows = (information, filter) => {
  if (!filter) return information;
  if (filter === "open" || filter === "close") {
    const query = filter === "open";
    return information.filter(row => row.bool === query);
  }
  const query = filter.split(" ");
  const array = query.map(e => information.map(el => el.enum === e));
  const concatArr = array[0].map((el, i) => {
    let element = false;
    new Array(query.length).fill("").forEach((e, item) => {
      element += array[item][i];
    });
    return element;
  });
  return information.filter((row, i) => concatArr[i]);
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
