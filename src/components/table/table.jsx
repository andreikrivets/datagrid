import React from "react";

import { Paper, Table, TableBody } from "@material-ui/core";

import TableHeader from "./table-header";
import TableRowSingle from "./table-row-single";

import "./table-style.css";

const TableMain = () => {
  const rows = new Array(1000).fill("");
  return (
    <Paper>
      <Table style={{ width: "100%" }}>
        <TableHeader />
        <TableBody>
          {rows.map(() => (
            <TableRowSingle />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableMain;
