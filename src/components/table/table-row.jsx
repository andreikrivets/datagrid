import React from "react";
import Faker from "faker";
import uniquid from "uniquid";

const TableRow = () => {
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
    <tr key={uniquid()}>
      <td>{data.string}</td>
      <td>{data.integer}</td>
      <td>{data.enum.map(el => el)}</td>
      <td>{data.localDate.getDay()}</td>
      <td>{data.instant}</td>
      <td>
        <b>{`${data.object.money.currency}  `}</b>
        <b>{data.object.money.amount}</b>
      </td>
      <td>{data.bool ? "ok" : "error"}</td>
    </tr>
  );
};

export default TableRow;
