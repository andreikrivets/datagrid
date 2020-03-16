/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

import TableRow from "./table-row";
import TableHeader from "./table-header";

const TableBodyCl = props => {
  const {
    rows,
    handleRowSelect,
    visiblity,
    selected,
    handleSort,
    handleBanksChange,
    onFilter,
    setVisiblity
  } = props;
  const { clientWidth } = document.body;
  return (
    <div
      style={{
        width: `${clientWidth}`,
        height: "800px",
        overflowY: "scroll",
        overflowX: "none"
      }}
    >
      <TableHeader
        handleSort={handleSort}
        handleBanksChange={handleBanksChange}
        onFilter={onFilter}
        visiblity={visiblity}
        setVisiblity={setVisiblity}
      />
      {rows.map(el => {
        return (
          <TableRow
            el={el}
            key={key(el)}
            visiblity={visiblity}
            handleRowSelect={handleRowSelect}
            isSelect={!!selected.filter(element => element === el.id).length}
          />
        );
      })}
    </div>
  );
};

TableBodyCl.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRowSelect: PropTypes.func.isRequired,
  visiblity: PropTypes.shape().isRequired,
  selected: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TableBodyCl;
