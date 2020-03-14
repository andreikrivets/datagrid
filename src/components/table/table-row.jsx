/* eslint-disable no-unused-vars */
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
    <div>
      <div
        key={key(el)}
        onClick={handleRowSelect}
        style={{ display: "flex", justifyContent: "space-around" }}
        className="row"
      >
        <div className="first-col">{el.id}</div>
        <div className="row-el td-name">{el.string}</div>
        <div className="row-el td-zip">{el.integer}</div>
        <div className="row-el td-banks">{el.enum}</div>
        <div className="row-el td-date">
          {el.localDate.toLocaleDateString()}
        </div>
        <div className="row-el td-time">
          {hours.length === 1 ? `0${hours}:` : `${hours}:`}
          {minutes.length === 1 ? `0${minutes}` : minutes}
        </div>
        <div className="row-el td-amount">
          {`${el.object.money.currency}  ${el.object.money.amount}`}
        </div>
        <div className="row-el td-status">{el.bool ? "open" : "close"}</div>
      </div>
    </div>
  );
};

export default TableRow;
