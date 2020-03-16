import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

import TableRow from "./table-row";

const TableBodyCl = ({ rows, handleRowSelect, visiblity, selected }) => {
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
