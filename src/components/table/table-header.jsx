/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";
import uniquid from 'uniquid';

import { Button } from '@material-ui/core'

import eData from "../../data/enum";

// import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = props => {
  const {
    handleSort,
    handleBanksChange,
    onFilter,
    visiblity,
    setVisiblity
  } = props;
  const enums = eData.map(el => ({ value: el, label: el }));
  const buttons = ["id", "name", "zip", "bank", "date", "time", "amount", "status"];
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
      <div className="cols-vis">
        {buttons.map(el => {
          return (
            <Button
              size="small" 
              key={uniquid()}
              onClick={() =>
                setVisiblity({ ...visiblity, [el]: !visiblity[el] })}
              className={visiblity[el] ? "active" : "passive"}
            >
              {el}
            </Button>
          );
        })}
      </div>
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
        <div
          id="id"
          className={`fixed first-col ${visiblity.id ? "visible" : "hidden"}`}
        >
          <b>id</b>
        </div>
        <div
          id="string"
          onClick={handleSort}
          className={`fixed ${visiblity.name ? "visible" : "hidden"}`}
        >
          name
        </div>
        <div
          id="integer"
          onClick={handleSort}
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
            menuPortalTarget={document.querySelector('body')}
            styles={{
              control: provided => ({
                ...provided,
                border: "none"
              }),
            }}
          />
        </div>
        <div
          id="localDate"
          onClick={handleSort}
          className={`fixed ${visiblity.date ? "visible" : "hidden"}`}
        >
          date
        </div>
        <div
          id="instant"
          onClick={handleSort}
          className={`fixed ${visiblity.time ? "visible" : "hidden"}`}
        >
          time
        </div>
        <div
          id="money"
          onClick={handleSort}
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
            menuPortalTarget={document.querySelector('body')}
            styles={{
              control: provided => ({
                ...provided,
                border: "none"
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
