/* eslint-disable react/prop-types */
import React from "react";
import uniquid from "uniquid";
import { TableRow, TableCell } from "@material-ui/core";

const TableRowSingle = ({ data }) => {
  return (
    <TableRow key={uniquid()}>
      <TableCell padding="none">{data.string}</TableCell>
      <TableCell padding="none">{data.integer}</TableCell>
      <TableCell padding="none">{data.enum.map(el => `${el} `)}</TableCell>
      <TableCell padding="none">{data.localDate.getDay()}</TableCell>
      <TableCell padding="none">{data.instant}</TableCell>
      <TableCell padding="none">
        <b>{`${data.object.money.currency}  `}</b>
        <b>{data.object.money.amount}</b>
      </TableCell>
      <TableCell padding="none">{data.bool ? "ok" : "error"}</TableCell>
    </TableRow>
  );
};

export default TableRowSingle;
