import _orderBy from "lodash/orderBy";
import { createSelector } from "reselect";

const getBoolRows = (information, filter) => {
  const query = filter === "ok" ? new RegExp(true) : new RegExp(false);
  if (!filter) return information;
  return information.filter(row => [row.bool].find(str => query.test(str)));
};

const getFilteredRows = (information, search, filter) => {
  const inf = getBoolRows(information, filter);
  if (!search) return inf;
  try {
    const searchRegex = new RegExp(search, "i"); // no escaping is a feature!
    return information.filter(row =>
      [row.string].find(str => searchRegex.test(str))
    );
  } catch (e) {
    return information;
  }
};

const filterAndSort = (data, sort, search, filter) =>
  _orderBy(getFilteredRows(data, search, filter), sort[0], sort[1]);

const rowsSelector = createSelector(
  state => state.table,
  state => state.information.data,
  ({ sort, search, filter }, information) =>
    filterAndSort(information, sort, search, filter)
);

export default rowsSelector;
