/* eslint-disable react/prop-types */
import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import TableRowVirt from "./table-row-virt";

const Row = data => props => {
  const { index, style } = props;
  return (
    <div style={style}>
      <TableRowVirt
        el={data.rows[index]}
        handleRowSelect={data.handleRowSelect}
      />
    </div>
  );
};

const TableBodyVirt = props => {
  const { rows } = props;
  return (
    <AutoSizer>
      {({ width }) => (
        <List height={900} itemCount={rows.length} itemSize={15} width={width}>
          {Row(props)}
        </List>
      )}
    </AutoSizer>
  );
};

export default TableBodyVirt;
