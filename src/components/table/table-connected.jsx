import { connect } from "react-redux";

import TableMain from "./table-main";
import {
  onSort,
  onFilter,
  onSearchChange,
  onDelete,
  onSelect,
  onUnselect
} from "../../actions";
import rowsSelector from "../../store/selectors";

const mapStateToProps = state => {
  const { search, sort, filter } = state.table;
  return {
    data: state.information.data,
    loading: state.information.loading,
    search,
    sort,
    filter,
    rows: rowsSelector(state),
    selected: state.information.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (query, column) => dispatch(onSearchChange(query, column)),
    onSort: (property, direction) => dispatch(onSort(property, direction)),
    onFilter: filter => dispatch(onFilter(filter)),
    onSelect: selected => dispatch(onSelect(selected)),
    onUnselect: unselected => dispatch(onUnselect(unselected)),
    onDelete: row => dispatch(onDelete(row))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableMain);
