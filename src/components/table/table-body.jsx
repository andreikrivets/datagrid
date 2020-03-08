/* eslint-disable react/prop-types */
import React from "react";
import uniquid from "uniquid";

import { TableBody } from "@material-ui/core";
import TableRowSingle from "./table-row-single";

const TableBodyCont = ({ data }) => {
  return (
    <TableBody key={uniquid()}>
      {data.map(el => (
        <TableRowSingle data={el} key={uniquid()} />
      ))}
    </TableBody>
  );
};

export default TableBodyCont;
