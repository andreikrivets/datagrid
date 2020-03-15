/* eslint-disable react/prop-types */
import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import TableRow from "./table-row";

const Row = data => props => {
  const { index, style } = props;
  return (
    <div style={style}>
      <TableRow
        el={data.rows[index]}
        handleRowSelect={data.handleRowSelect}
        visiblity={data.visiblity}
      />
    </div>
  );
};

const TableBodyVirt = props => {
  const { rows } = props;
  return (
    <AutoSizer>
      {({ width }) => (
        <List height={800} itemCount={rows.length} itemSize={24} width={width}>
          {Row(props)}
        </List>
      )}
    </AutoSizer>
  );
};

export default TableBodyVirt;
