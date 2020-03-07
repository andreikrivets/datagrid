/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";

import { Paper, Table, TableBody } from "@material-ui/core";

import TableHeader from "./table-header";
import createTableData from "../../actions";
// import test from "./test";

import TableRowSingle from "./table-row-single";

// import "./table-style.css";

const TableMain = props => {
  const { data, dispatch, loading } = props;
  console.log(loading);
  // console.log(dispatch({ type: "FETCH_DATA", data: "rap" }));
  // console.log(props.dispatch());
  // console.log(data);
  return (
    <Paper>
      <Table style={{ width: "100%" }}>
        <TableHeader />
        <TableBody>
          {data.map(el => (
            <TableRowSingle data={el} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return dispatch(createTableData);
};
// const TableMain = () => {
//   const rows = new Array(50).fill("");
//   const handleSelectedColumn = i => {
//     console.log(i);
//   };
//   return (
//     <Paper>
//       <Table style={{ width: "100%" }}>
//         <TableHeader setSelectedColumn={handleSelectedColumn} />
//         <TableBody>
//           {rows.map(() => (
//             <TableRowSingle />
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(TableMain);
