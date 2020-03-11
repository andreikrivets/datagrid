/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";
import key from "weak-key";

import "./table-style.css";

const TableMain = props => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [prevSelected, setPrevSelected] = useState("");
  const [okToggler, setOkToggler] = useState(false);
  const [errToggler, setErrToggler] = useState(false);
  const { rows, loading, sort, onSort, onSearchChange, onFilter } = props;

  const options = [
    { value: "string", label: "name" },
    { value: "integer", label: "zip" },
    { value: "enum", label: "bank" }
  ];
  const [searchCol, setSearchCol] = useState(() => options.map(el => el.value));
  // console.log(searchCol);

  const handleSort = e => {
    const { classList } = e.target;
    const column = e.target.id;
    onSort(column, sortOrder);
    if (prevSelected) {
      prevSelected.classList.remove("desc");
      prevSelected.classList.remove("asc");
    }
    setPrevSelected(e.target);
    setSortOrder(prevSortOrder => (prevSortOrder === "asc" ? "desc" : "asc"));
    if (sortOrder === "asc") classList.add("asc");
    else classList.add("desc");
  };

  const handleBooleanTogglerOk = e => {
    setErrToggler(false);
    setOkToggler(prevOkToggler => !prevOkToggler);
    onFilter(e.target.checked ? "open" : null);
  };

  const handleBooleanTogglerErr = e => {
    setOkToggler(false);
    setErrToggler(prevErrToggler => !prevErrToggler);
    onFilter(e.target.checked ? "false" : null);
  };

  return (
    <div style={{ fontFamily: "monospace" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Select
          isMulti
          noOptionsMessage={() => null}
          options={options}
          defaultValue={options}
          onChange={e => (e ? setSearchCol(() => e.map(el => el.value)) : e)}
        />
        <input
          type="text"
          onKeyDown={e => onSearchChange(e.target.value, searchCol)}
        />
        <label htmlFor="boolean-toggle-ok">open</label>
        <input
          type="checkbox"
          id="boolean-toggle-ok"
          onChange={handleBooleanTogglerOk}
          checked={okToggler}
        />
        <label htmlFor="boolean-toggle-error">close</label>
        <input
          type="checkbox"
          id="boolean-toggle-error"
          onChange={handleBooleanTogglerErr}
          checked={errToggler}
        />
      </div>
      <table style={{ width: "100%" }}>
        <thead style={{ fontWeight: "bolder" }}>
          <tr style={{ cursor: "pointer" }}>
            <td id="string" onClick={handleSort} className="fixed">
              name
            </td>
            <td id="integer" onClick={handleSort} className="fixed">
              zip code
            </td>
            <td id="enum" onClick={handleSort} className="fixed">
              bank
            </td>
            <td id="localDate" onClick={handleSort} className="fixed">
              date
            </td>
            <td id="instant" onClick={handleSort} className="fixed">
              time
            </td>
            <td id="money" onClick={handleSort} className="fixed">
              amount
            </td>
            <td id="bool" onClick={handleSort} className="fixed">
              ok?
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map(el => {
            const hours = new Date(el.instant * 1000).getHours().toString();
            const minutes = new Date(el.instant * 1000).getMinutes().toString();
            return (
              <tr key={key(el)}>
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
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableMain;
