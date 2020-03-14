/* eslint-disable react/prop-types */
import React from "react";
import key from "weak-key";

const TableRow = props => {
  const { el, handleRowSelect } = props;
  const hours = new Date(el.instant * 1000).getHours().toString();
  const minutes = new Date(el.instant * 1000).getMinutes().toString();
  return (
    <tr key={key(el)} onClick={handleRowSelect}>
      <td className="first-col">{el.id}</td>
      <td>{el.string}</td>
      <td>{el.integer}</td>
      <td>{el.enum}</td>
      <td>{el.localDate.toLocaleDateString()}</td>
      <td>
        <b>{hours.length === 1 ? `0${hours}` : hours}</b>
        <b>:</b>
        <b>{minutes.length === 1 ? `0${minutes}` : minutes}</b>
      </td>
      <td>
        <b>{`${el.object.money.currency}  `}</b>
        <b>{el.object.money.amount}</b>
      </td>
      <td>{el.bool ? "open" : "close"}</td>
    </tr>
  );
};

export default TableRow;
