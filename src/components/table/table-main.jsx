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

  const handleBooleanTogglerOk = e => {
    setErrToggler(false);
    setOkToggler(prevOkToggler => !prevOkToggler);
    onFilter(e.target.checked ? "open" : null);
  };

  const handleBooleanTogglerErr = e => {
    setOkToggler(false);
    setErrToggler(prevErrToggler => !prevErrToggler);
    onFilter(e.target.checked ? "close" : null);
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
    <div style={{ fontFamily: "monospace" }}>
      <TableLabel
        onSearchChange={onSearchChange}
        handleBooleanTogglerOk={handleBooleanTogglerOk}
        handleBooleanTogglerErr={handleBooleanTogglerErr}
        okToggler={okToggler}
        errToggler={errToggler}
        setIsVirtualised={setIsVirtualised}
      />
      <div>
        <TableHeader
          handleSort={handleSort}
          handleBanksChange={handleBanksChange}
          onDelete={onDelete}
        />
      </div>
      {isVirtualized ? (
        <TableBodyCl rows={rows} handleRowSelect={handleRowSelect} />
      ) : (
        <TableBodyVirt rows={rows} handleRowSelect={handleRowSelect} />
      )}
    </div>
  );
};

export default TableMain;
