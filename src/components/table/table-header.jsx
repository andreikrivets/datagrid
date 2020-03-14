/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";

import eData from "../../data/enum";

// import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = props => {
  const { handleSort, handleBanksChange, onDelete } = props;
  const enums = eData.map(el => ({ value: el, label: el.toLocaleLowerCase() }));

  return (
    <thead style={{ fontWeight: "bolder" }}>
      <tr style={{ cursor: "pointer" }}>
        <td
          id="id"
          className="fixed"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <b>id</b>
          <input
            type="button"
            style={{ width: "10px", height: "20px" }}
            value="х"
            onClick={() => onDelete()}
          />
        </td>
        <td id="string" onClick={handleSort} className="fixed">
          name
        </td>
        <td id="integer" onClick={handleSort} className="fixed">
          zip code
        </td>
        <td id="enum" className="fixed" style={{ width: "300px" }}>
          <Select
            isMulti
            noOptionsMessage={() => null}
            options={enums}
            placeholder="banks"
            onChange={handleBanksChange}
          />
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
  );
};

export default TableHeader;
