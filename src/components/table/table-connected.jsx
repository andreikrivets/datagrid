import { connect } from "react-redux";

import TableMain from "./table-main";
import { onSort } from "../../actions";
import rowsSelector from "../../store/selectors";

const mapStateToProps = state => {
  const { search, sort } = state.table;
  return {
    data: state.information.data,
    loading: state.information.loading,
    search,
    sort,
    rows: rowsSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: search =>
      dispatch({ type: "TABLE_SEARCH", payload: search }),
    onSort: (property, direction) => dispatch(onSort(property, direction))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableMain);
