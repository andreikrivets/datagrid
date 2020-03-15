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

import {
  Table,
  TableBody as TableBodyMU,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core/";

import TableLabel from "./table-label";
import TableHeader from "./table-header";
import TableBodyCl from "./table-body-cl";
import TableBodyVirt from "./table-body-virt";

import "./table-style.css";

const TableMain = props => {
  const [prevSelected, setPrevSelected] = useState("");
  const [okToggler, setOkToggler] = useState(false);
  const [errToggler, setErrToggler] = useState(false);
  const [num, setNum] = useState(0);
  const [isVirtualized, setIsVirtualised] = useState(true);
  const [visiblity, setVisiblity] = useState({
    id: true,
    name: true,
    zip: true,
    bank: true,
    date: true,
    time: true,
    amount: true,
    status: true
  });
  const {
    rows,
    loading,
    sort,
    onSort,
    onSearchChange,
    onFilter,
    onDelete,
    onSelect,
    onUnselect
  } = props;

  const handleSort = e => {
    const { classList } = e.target;
    const variant = ["asc", "desc", null][num];
    const column = e.target.id;
    onSort(column, variant);

    const clearPreviousSelected = () => {
      if (prevSelected) {
        prevSelected.classList.remove("desc");
        prevSelected.classList.remove("asc");
      }
    };

    clearPreviousSelected();
    setPrevSelected(e.target);
    setNum(prevNum => (prevNum === 2 ? 0 : num + 1));
    if (variant) classList.add(variant);
  };

  const handleBanksChange = e =>
    onFilter(e ? e.map(el => el.value).join(" ") : null);

  const handleRowSelect = e => {
    const { innerText } = e.target.parentNode.childNodes[0];
    const { classList } = e.target.parentNode;
    if (classList.contains("selected-row")) {
      classList.remove("selected-row");
      onUnselect(+innerText);
    } else {
      classList.add("selected-row");
      onSelect(+innerText);
    }
  };

  return (
    <div className="main">
      <TableLabel
        onSearchChange={onSearchChange}
        setIsVirtualised={setIsVirtualised}
        onDelete={onDelete}
      />
      <Paper elevation={3} className="table-main">
        <TableHeader
          handleSort={handleSort}
          handleBanksChange={handleBanksChange}
          onFilter={onFilter}
          visiblity={visiblity}
          setVisiblity={setVisiblity}
        />
        {isVirtualized ? (
          <TableBodyCl
            rows={rows}
            handleRowSelect={handleRowSelect}
            visiblity={visiblity}
          />
        ) : (
          <TableBodyVirt
            rows={rows}
            handleRowSelect={handleRowSelect}
            visiblity={visiblity}
          />
        )}
      </Paper>
    </div>
  );
};

export default TableMain;
