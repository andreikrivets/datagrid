import React from "react";
import Faker from "faker";
import uniquid from "uniquid";
import { TableRow, TableCell } from "@material-ui/core";

const TableRowSingle = () => {
  const data = {
    string: Faker.name.findName(),
    integer: Faker.address.zipCode(),
    enum: [
      Faker.commerce.productAdjective(),
      Faker.commerce.productMaterial(),
      Faker.commerce.product()
    ],
    localDate: Faker.date.recent(),
    instant: Faker.date.recent().getTime(),
    object: {
      money: {
        currency: Faker.finance.currencyCode(),
        amount: Faker.finance.amount()
      }
    },
    bool: Faker.random.boolean()
  };

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
