import React, { useState } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core/";

import TableLabel from "./table-label";
import TableHeader from "./table-header";
import TableBodyCl from "./table-body-cl";
import TableBodyVirt from "./table-body-virt";

import "./table-style.css";

const TableMain = props => {
  const [prevSelected, setPrevSelected] = useState("");
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
    onSort,
    onSearchChange,
    onFilter,
    onDelete,
    onSelect,
    onUnselect
  } = props;

  const handleSort = e => {
    let variant = ["asc", "desc", null][num];
    if (prevSelected !== e.target) {
      variant = "asc";
      setNum(0);
    }
    const { classList } = e.target;
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
    setNum(prevNum => (prevNum >= 2 ? 0 : prevNum + 1));
    if (variant) classList.add(variant);
  };

  const handleBanksChange = e =>
    onFilter(e ? e.map(el => el.value).join(" ") : null);

  const handleRowSelect = el => {
    const handle = e => {
      const { innerText } = e.childNodes[0];
      const { classList } = e;
      if (classList.contains("selected-row")) {
        classList.remove("selected-row");
        onUnselect(+innerText);
      } else {
        classList.add("selected-row");
        onSelect(+innerText);
      }
    };
    if (el.target.parentNode.classList.contains("row"))
      handle(el.target.parentNode);
    else if (el.childNodes) handle(el);
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

TableMain.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSort: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired
};

export default TableMain;
