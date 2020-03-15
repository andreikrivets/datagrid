/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import key from "weak-key";
import { Typography } from "@material-ui/core";

const TableRow = props => {
  const { el, handleRowSelect, visiblity } = props;
  const hours = new Date(el.instant * 1000).getHours().toString();
  const minutes = new Date(el.instant * 1000).getMinutes().toString();
  return (
    <div>
      <div
        key={key(el)}
        onMouseDown={handleRowSelect}
        style={{ display: "flex" }}
        className="row"
      >
        <Typography
          className={`first-col  ${visiblity.id ? "visible" : "hidden"}`}
        >
          {el.id}
        </Typography>
        <Typography
          className={`row-el td-name  ${visiblity.name ? "visible" : "hidden"}`}
        >
          {el.string}
        </Typography>
        <Typography
          className={`row-el td-zip  ${visiblity.zip ? "visible" : "hidden"}`}
        >
          {el.integer}
        </Typography>
        <Typography
          className={`row-el td-banks ${visiblity.bank ? "visible" : "hidden"}`}
        >
          {el.enum}
        </Typography>
        <Typography
          className={`row-el td-date ${visiblity.date ? "visible" : "hidden"}`}
        >
          {el.localDate.toLocaleDateString()}
        </Typography>
        <Typography
          className={`row-el td-time  ${visiblity.time ? "visible" : "hidden"}`}
        >
          {hours.length === 1 ? `0${hours}:` : `${hours}:`}
          {minutes.length === 1 ? `0${minutes}` : minutes}
        </Typography>
        <Typography
          className={`row-el td-amount  ${
            visiblity.amount ? "visible" : "hidden"
          }`}
        >
          {`${el.object.money.currency}  ${el.object.money.amount}`}
        </Typography>
        <Typography
          className={`row-el td-status ${
            visiblity.status ? "visible" : "hidden"
          }`}
        >
          {el.bool ? "open" : "close"}
        </Typography>
      </div>
    </div>
  );
};

export default TableRow;
