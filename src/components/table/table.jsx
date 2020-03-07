import React from "react";

import TableHeader from "./table-header";
import TableRow from "./table-row";

import "./table-style.css";

const TableMain = () => {
  const r = new Array(1000).fill("");
  return (
    <>
      <table style={{ width: "100%" }}>
        <TableHeader />
        <tbody>
          {r.map(() => (
            <TableRow />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableMain;
