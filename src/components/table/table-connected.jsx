import { connect } from "react-redux";

import TableMain from "./table-main";
import { onSort, onFilter, onSearchChange } from "../../actions";
import rowsSelector from "../../store/selectors";

const mapStateToProps = state => {
  const { search, sort, filter } = state.table;
  return {
    data: state.information.data,
    loading: state.information.loading,
    search,
    sort,
    filter,
    rows: rowsSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (query, column) => dispatch(onSearchChange(query, column)),
    onSort: (property, direction) => dispatch(onSort(property, direction)),
    onFilter: filter => dispatch(onFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableMain);
