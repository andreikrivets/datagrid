import React, { useState } from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core/";

import TableLabel from "./table-label";
import TableBodyCl from "./table-body-cl";
import TableBodyVirt from "./table-body-virt";
import TableColSelect from "./table-header-col-select";

import exportToCsv from "../../utils/exportToCsv";

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
    onUnselect,
    selected
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

  const handleRowSelect = e => {
    if (e.target.className === "first-col  visible") {
      const { innerText } = e.target;
      onSelect(+innerText);
      if (selected.filter(el => +el === +innerText).length)
        onUnselect(+innerText);
    }
  };

  return (
    <div className="main">
      <TableLabel
        onSearchChange={onSearchChange}
        setIsVirtualised={setIsVirtualised}
        onDelete={onDelete}
        selected={selected}
        saveTable={() => exportToCsv(rows)}
      />
      <div style={{ display: "block" }}>
        <Paper
          elevation={3}
          className="table-main"
          style={{ maxWidth: "1500px", margin: "0 auto" }}
        >
          <TableColSelect visiblity={visiblity} setVisiblity={setVisiblity} />
          {isVirtualized ? (
            <TableBodyCl
              rows={rows}
              selected={selected}
              visiblity={visiblity}
              setVisiblity={setVisiblity}
              handleRowSelect={handleRowSelect}
              handleSort={handleSort}
              handleBanksChange={handleBanksChange}
              onFilter={onFilter}
            />
          ) : (
            <TableBodyVirt
              rows={rows}
              selected={selected}
              visiblity={visiblity}
              handleRowSelect={handleRowSelect}
            />
          )}
        </Paper>
      </div>
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
  onUnselect: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TableMain;
