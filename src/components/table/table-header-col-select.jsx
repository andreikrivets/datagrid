/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";
import { Button } from "@material-ui/core";

const HeaderColSelect = ({ visiblity, setVisiblity }) => {
  const buttons = [
    "id",
    "name",
    "zip",
    "bank",
    "date",
    "time",
    "amount",
    "status"
  ];
  return (
    <div className="cols-vis">
      {buttons.map(el => {
        return (
          <Button
            size="small"
            key={uniqid()}
            onMouseDown={() =>
              // eslint-disable-next-line prettier/prettier
            setVisiblity({ ...visiblity, [el]: !visiblity[el] })}
            className={visiblity[el] ? "active" : "passive"}
          >
            {el}
          </Button>
        );
      })}
    </div>
  );
};

export default HeaderColSelect;
