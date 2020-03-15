import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormControlLabel, Switch, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const TableLabel = props => {
  const { onSearchChange, setIsVirtualised, onDelete } = props;
  const enumOptions = [
    { value: "string", label: "name" },
    { value: "integer", label: "zip" },
    { value: "enum", label: "bank" }
  ];
  const [searchCol, setSearchCol] = useState(() =>
    enumOptions.map(el => el.value)
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <TextField
          label="search"
          onKeyDown={e => onSearchChange(e.target.value, searchCol)}
        />
        <Select
          isMulti
          noOptionsMessage={() => null}
          options={enumOptions}
          defaultValue={enumOptions}
          onChange={e => (e ? setSearchCol(() => e.map(el => el.value)) : e)}
          styles={{
            control: provided => ({
              ...provided,
              border: "none",
              width: "300px"
            })
          }}
        />
      </div>
      <FormControlLabel
        value="virtualization"
        control={<Switch color="primary" />}
        label="virtualization"
        labelPlacement="top"
        onChange={() => setIsVirtualised(prev => !prev)}
      />
      <IconButton size="small" onClick={() => onDelete()}>
        <span role="img" aria-label="wastebasket">
          🗑️
        </span>
      </IconButton>
    </div>
  );
};

TableLabel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  setIsVirtualised: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TableLabel;
