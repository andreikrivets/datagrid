import React from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import TableRow from "./table-row";
import TableHeader from "./table-header";

const Row = data => props => {
  const { index, style } = props;
  const { visiblity, handleRowSelect, rows } = data;

  return (
    <div style={style}>
      <TableRow
        el={data.rows[index]}
        handleRowSelect={handleRowSelect}
        visiblity={visiblity}
        isSelect={
          !!data.selected.filter(element => element === rows[index].id).length
        }
      />
    </div>
  );
};

const TableBodyVirt = props => {
  const {
    rows,
    handleSort,
    handleBanksChange,
    visiblity,
    onFilter,
    setVisiblity
  } = props;
  return (
    <div
      style={{
        height: "800px"
      }}
    >
      <TableHeader
        handleSort={handleSort}
        handleBanksChange={handleBanksChange}
        onFilter={onFilter}
        visiblity={visiblity}
        setVisiblity={setVisiblity}
      />
      <AutoSizer>
        {({ width }) => (
          <List
            height={800}
            itemCount={rows.length}
            itemSize={37}
            width={width}
          >
            {Row(props)}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

TableBodyVirt.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSort: PropTypes.func.isRequired,
  handleBanksChange: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  setVisiblity: PropTypes.func.isRequired,
  visiblity: PropTypes.shape().isRequired
};

export default TableBodyVirt;
