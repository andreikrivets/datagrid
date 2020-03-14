/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import key from "weak-key";

const TableRow = props => {
  const { el, handleRowSelect } = props;
  const hours = new Date(el.instant * 1000).getHours().toString();
  const minutes = new Date(el.instant * 1000).getMinutes().toString();
  return (
    <div
      key={key(el)}
      onClick={handleRowSelect}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div className="first-col">{el.id}</div>
      <div className="row-el">{el.string}</div>
      <div className="row-el">{el.integer}</div>
      <div className="row-el">{el.enum}</div>
      <div className="row-el">{el.localDate.toLocaleDateString()}</div>
      <div className="row-el">
        <b>{hours.length === 1 ? `0${hours}` : hours}</b>
        <b>:</b>
        <b>{minutes.length === 1 ? `0${minutes}` : minutes}</b>
      </div>
      <div className="row-el">
        <b>{`${el.object.money.currency}  `}</b>
        <b>{el.object.money.amount}</b>
      </div>
      <div className="row-el">{el.bool ? "open" : "close"}</div>
    </div>
  );
};

export default TableRow;
