/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";

import eData from "../../data/enum";

const TableHeader = props => {
  const { handleSort, handleBanksChange, onFilter, visiblity } = props;
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
    <div className="table-header-wrap">
      <div className="table-header">
        <div
          id="id"
          className={`fixed first-col ${visiblity.id ? "visible" : "hidden"}`}
        >
          <b>id</b>
        </div>
        <div
          id="string"
          role="tab"
          tabIndex="0"
          onMouseDown={handleSort}
          style={{ background: "white" }}
          className={`fixed fxd ${visiblity.name ? "visible" : "hidden"}`}
        >
          name
        </div>
        <div
          id="integer"
          role="tab"
          tabIndex="0"
          onMouseDown={handleSort}
          className={`fixed ${visiblity.zip ? "visible" : "hidden"}`}
        >
          zip code
        </div>
        <div
          id="enum"
          className={`fixed ${visiblity.bank ? "visible" : "hidden"}`}
        >
          <Select
            isMulti
            noOptionsMessage={() => null}
            options={enums}
            placeholder="banks"
            onChange={handleBanksChange}
            menuPortalTarget={document.querySelector("body")}
            styles={{
              control: provided => ({
                ...provided,
                border: "none",
                paddingRight: "10%"
              })
            }}
          />
        </div>
        <div
          id="localDate"
          role="tab"
          tabIndex="0"
          onMouseDown={handleSort}
          className={`fixed ${visiblity.date ? "visible" : "hidden"}`}
        >
          date
        </div>
        <div
          id="instant"
          className={`fixed ${visiblity.time ? "visible" : "hidden"}`}
        >
          time
        </div>
        <div
          id="money"
          className={`fixed ${visiblity.amount ? "visible" : "hidden"}`}
        >
          amount
        </div>
        <div
          id="bool"
          className={`fixed ${visiblity.status ? "visible" : "hidden"}`}
        >
          <Select
            isMulti
            noOptionsMessage={() => null}
            options={status}
            placeholder="status"
            onChange={handleStatusFilter}
            menuPortalTarget={document.querySelector("body")}
            styles={{
              control: provided => ({
                ...provided,
                border: "none"
              })
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
