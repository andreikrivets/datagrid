/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Select from "react-select";

const TableLabel = props => {
  const {
    onSearchChange,
    handleBooleanTogglerOk,
    handleBooleanTogglerErr,
    okToggler,
    errToggler
  } = props;
  const options = [
    { value: "string", label: "name" },
    { value: "integer", label: "zip" },
    { value: "enum", label: "bank" }
  ];
  const [searchCol, setSearchCol] = useState(() => options.map(el => el.value));
  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <input
        type="text"
        onKeyDown={e => onSearchChange(e.target.value, searchCol)}
      />
      <Select
        isMulti
        noOptionsMessage={() => null}
        options={options}
        defaultValue={options}
        onChange={e => (e ? setSearchCol(() => e.map(el => el.value)) : e)}
      />
      <label htmlFor="boolean-toggle-ok">open</label>
      <input
        type="checkbox"
        id="boolean-toggle-ok"
        onChange={handleBooleanTogglerOk}
        checked={okToggler}
      />
      <label htmlFor="boolean-toggle-error">close</label>
      <input
        type="checkbox"
        id="boolean-toggle-error"
        onChange={handleBooleanTogglerErr}
        checked={errToggler}
      />
    </div>
  );
};

export default TableLabel;
