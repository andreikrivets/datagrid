/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import uniquid from "uniquid";

import "./table-style.css";

const TableMain = props => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [prevSelected, setPrevSelected] = useState("");

  const { rows, loading, sort, onSort, onSearchChange } = props;
  const handleSort = e => {
    const { classList } = e.target;
    if (classList.contains("asc"));
    const column = e.target.id;
    onSort(column, sortOrder);
    setPrevSelected(e.target);
    if (sortOrder === "asc") {
      classList.add("asc");
      setSortOrder("desc");
    } else {
      classList.add("desc");
      setSortOrder("asc");
    }
  };

  const handleSearch = e => {
    onSearchChange(e.target.value);
  };

  return (
    <>
      <input type="text" onKeyDown={handleSearch} />
      <table style={{ width: "100%", fontFamily: "monospace" }}>
        <thead style={{ fontWeight: "bolder" }}>
          <tr style={{ cursor: "pointer" }}>
            <td id="string" onClick={handleSort}>
              name
            </td>
            <td id="integer" onClick={handleSort}>
              zip code
            </td>
            <td id="enum" onClick={handleSort}>
              enum
            </td>
            <td id="localDate" onClick={handleSort}>
              date
            </td>
            <td id="instant" onClick={handleSort}>
              date-2
            </td>
            <td id="money" onClick={handleSort}>
              money
            </td>
            <td id="bool" onClick={handleSort}>
              ok?
            </td>
          </tr>
        </thead>
        <tbody key={uniquid()}>
          {rows.map(el => (
            <tr key={uniquid()}>
              <td>{el.string}</td>
              <td>{el.integer}</td>
              <td>{el.enum.map(e => `${e} `)}</td>
              <td>{el.localDate.getDay()}</td>
              <td>{el.instant}</td>
              <td>
                <b>{`${el.object.money.currency}  `}</b>
                <b>{el.object.money.amount}</b>
              </td>
              <td>{el.bool ? "ok" : "error"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableMain;
