import _orderBy from "lodash/orderBy";
import { createSelector } from "reselect";

const getFilteredRows = (information, search) => {
  if (!search) return information;
  try {
    const searchRegex = new RegExp(search, "i"); // no escaping is a feature!
    return information.filter(row =>
      [row.string].find(str => searchRegex.test(str))
    );
  } catch (e) {
    // ignore filter if regexp is not parsable
    return information;
  }
};

const filterAndSort = (data, sort, search) => {
  //   console.log(data, sort);
  return _orderBy(getFilteredRows(data, search), sort[0], sort[1]);
};

const rowsSelector = createSelector(
  state => state.table,
  state => state.information.data,
  ({ sort, search }, information) => filterAndSort(information, sort, search)
);

export default rowsSelector;
