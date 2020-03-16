import React from "react";
import PropTypes from "prop-types";
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
        isSelect={
          !!data.selected.filter(element => element === data.rows[index].id)
            .length
        }
      />
    </div>
  );
};

const TableBodyVirt = props => {
  const { rows } = props;
  return (
    <AutoSizer>
      {({ width }) => (
        <List height={800} itemCount={rows.length} itemSize={37} width={width}>
          {Row(props)}
        </List>
      )}
    </AutoSizer>
  );
};

TableBodyVirt.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableBodyVirt;
