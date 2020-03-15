/* eslint-disable react/prop-types */
import React from "react";
import key from "weak-key";

import TableRow from "./table-row";

const TableBodyCl = ({ rows, handleRowSelect, visiblity }) => {
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
          />
        );
      })}
    </div>
  );
};

export default TableBodyCl;
