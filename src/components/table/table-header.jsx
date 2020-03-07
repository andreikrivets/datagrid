import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>name</TableCell>
        <TableCell>zipcode</TableCell>
        <TableCell>enum</TableCell>
        <TableCell>date</TableCell>
        <TableCell>date-2</TableCell>
        <TableCell>money</TableCell>
        <TableCell>ok</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
