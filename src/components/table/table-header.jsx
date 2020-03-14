/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    <div style={{ fontWeight: "bolder" }}>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div
          id="id"
          className="fixed first-col"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <b>id</b>
          <input
            type="button"
            style={{ width: "10px", height: "20px" }}
            value="х"
            onClick={() => onDelete()}
          />
        </div>
        <div id="sdiving" onClick={handleSort} className="fixed">
          name
        </div>
        <div id="integer" onClick={handleSort} className="fixed">
          zip code
        </div>
        <div id="enum" className="fixed">
          <Select
            isMulti
            noOptionsMessage={() => null}
            options={enums}
            placeholder="banks"
            onChange={handleBanksChange}
          />
        </div>
        <div id="localDate" onClick={handleSort} className="fixed">
          date
        </div>
        <div id="instant" onClick={handleSort} className="fixed">
          time
        </div>
        <div id="money" onClick={handleSort} className="fixed">
          amount
        </div>
        <div id="bool" onClick={handleSort} className="fixed">
          ok?
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
