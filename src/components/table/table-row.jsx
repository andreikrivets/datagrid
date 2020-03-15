/* eslint-disable react/prop-types */
import React from "react";
import key from "weak-key";
import { CardActionArea } from "@material-ui/core";

const TableRow = props => {
  const { el, handleRowSelect, visiblity } = props;
  const hours = new Date(el.instant * 1000).getHours().toString();
  const minutes = new Date(el.instant * 1000).getMinutes().toString();
  return (
    <CardActionArea>
      <div
        key={key(el)}
        role="tab"
        tabIndex="0"
        onMouseDown={handleRowSelect}
        style={{
          display: "flex",
          justifyContent: "space-around",
          zIndex: "-10"
        }}
        className="row"
      >
        <div className={`first-col  ${visiblity.id ? "visible" : "hidden"}`}>
          {el.id}
        </div>
        <div
          className={`row-el td-name  ${visiblity.name ? "visible" : "hidden"}`}
        >
          {el.string}
        </div>
        <div
          className={`row-el td-zip  ${visiblity.zip ? "visible" : "hidden"}`}
        >
          {el.integer}
        </div>
        <div
          className={`row-el td-banks ${visiblity.bank ? "visible" : "hidden"}`}
        >
          {el.enum}
        </div>
        <div
          className={`row-el td-date ${visiblity.date ? "visible" : "hidden"}`}
        >
          {el.localDate.toLocaleDateString()}
        </div>
        <div
          className={`row-el td-time  ${visiblity.time ? "visible" : "hidden"}`}
        >
          {hours.length === 1 ? `0${hours}:` : `${hours}:`}
          {minutes.length === 1 ? `0${minutes}` : minutes}
        </div>
        <div
          className={`row-el td-amount  ${
            visiblity.amount ? "visible" : "hidden"
          }`}
        >
          {`${el.object.money.currency}  ${el.object.money.amount}`}
        </div>
        <div
          className={`row-el td-status ${
            visiblity.status ? "visible" : "hidden"
          }`}
        >
          {el.bool ? "open" : "close"}
        </div>
      </div>
    </CardActionArea>
  );
};

export default TableRow;
