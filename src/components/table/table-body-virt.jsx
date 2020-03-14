/* eslint-disable react/prop-types */
import React from "react";
import { FixedSizeList as List } from "react-window";
import TableRow from "./table-row";

const Row = data => props => {
  const { index, style } = props;
  return (
    <div style={style}>
      <TableRow el={data[index]} />
    </div>
  );
};

const TableBodyVirt = props => {
  const { rows } = props;
  return (
    <List height={800} itemCount={20} itemSize={35} width={1000}>
      {Row(rows)}
      {/* <TableRow itemData={rows} /> */}
    </List>
  );
};

export default TableBodyVirt;
