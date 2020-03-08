/* eslint-disable react/prop-types */
import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = ({ handleSort }) => {
  return (
    <TableHead>
      <TableRow style={{ cursor: "pointer" }}>
        <TableCell onClick={handleSort}>name</TableCell>
        <TableCell onClick={handleSort}>zip code</TableCell>
        <TableCell onClick={handleSort}>enum</TableCell>
        <TableCell onClick={handleSort}>date</TableCell>
        <TableCell onClick={handleSort}>date-2</TableCell>
        <TableCell onClick={handleSort}>money</TableCell>
        <TableCell onClick={handleSort}>ok</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
