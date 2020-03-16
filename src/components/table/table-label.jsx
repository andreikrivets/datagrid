import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import {
  FormControlLabel,
  Switch,
  TextField,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TableLabel = props => {
  const { onSearchChange, setIsVirtualised, onDelete, selected } = props;
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
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <h1>
        <a style={{ textDecoration: "none", color: "#FFCF9E" }} href="./">
          D A T A G R I D
        </a>
      </h1>
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
      <IconButton
        size="medium"
        disabled={!selected.length}
        onClick={() => onDelete()}
        style={{
          position: "absolute",
          zIndex: "20",
          bottom: "50px",
          right: "50px"
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

TableLabel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  setIsVirtualised: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TableLabel;
