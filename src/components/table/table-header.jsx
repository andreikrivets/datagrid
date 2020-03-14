/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";

import eData from "../../data/enum";

// import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = props => {
  const { handleSort, handleBanksChange, onFilter } = props;
  const enums = eData.map(el => ({ value: el, label: el }));

  const status = [
    { value: "open", label: "open" },
    { value: "close", label: "close" }
  ];

  const handleStatusFilter = e => {
    if (e && e.length === 1) {
      onFilter(e[0].value);
    } else onFilter(null);
  };

  return (
    <div style={{ fontWeight: "bolder" }}>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-around",
          position: "sticky",
          boxShadow:
            "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
          alignItems: "center"
        }}
      >
        <div id="id" className="fixed first-col">
          <b>id</b>
        </div>
        <div id="string" onClick={handleSort} className="fixed">
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
            styles={{
              control: provided => ({
                ...provided,
                marginRight: "10%"
              }),
              options: provided => ({
                ...provided,
                background: "white"
              })
            }}
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
        <div id="bool" className="fixed">
          <Select
            isMulti
            noOptionsMessage={() => null}
            options={status}
            placeholder="status"
            onChange={handleStatusFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
