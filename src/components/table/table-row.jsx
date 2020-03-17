import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

const TableRow = props => {
  const { el, handleRowSelect, visiblity, isSelect } = props;
  const hours = new Date(el.instant * 1000).getHours().toString();
  const minutes = new Date(el.instant * 1000).getMinutes().toString();
  return (
    <div>
      <div
        key={key(el)}
        onMouseDown={handleRowSelect}
        role="row"
        aria-hidden="true"
        className={`row ${isSelect ? "selected-row" : "unselected-row"}`}
      >
        <div className={`first-col  ${visiblity.id ? "visible" : "hidden"}`}>
          {el.id}
        </div>
        <div
          className={`row-el fxd td-name  ${
            visiblity.name ? "visible" : "hidden"
          }`}
        >
          <span className="name-p">{el.string}</span>
        </div>
        <div
          className={`row-el td-zip  ${visiblity.zip ? "visible" : "hidden"}`}
        >
          {el.integer}
        </div>
        <div
          className={`row-el td-banks ${visiblity.bank ? "visible" : "hidden"}`}
        >
          {el.enum}
        </div>
        <div
          className={`row-el td-date ${visiblity.date ? "visible" : "hidden"}`}
        >
          {el.localDate.toLocaleDateString()}
        </div>
        <div
          className={`row-el td-time  ${visiblity.time ? "visible" : "hidden"}`}
        >
          {hours.length === 1 ? `0${hours}:` : `${hours}:`}
          {minutes.length === 1 ? `0${minutes}` : minutes}
        </div>
        <div
          className={`row-el td-amount  ${
            visiblity.amount ? "visible" : "hidden"
          }`}
        >
          {`${el.object.money.currency}  ${el.object.money.amount}`}
        </div>
        <div
          className={`row-el td-status ${
            visiblity.status ? "visible" : "hidden"
          }`}
        >
          {el.bool ? "open" : "close"}
        </div>
      </div>
    </div>
  );
};

TableRow.propTypes = {
  el: PropTypes.shape().isRequired,
  handleRowSelect: PropTypes.func.isRequired,
  visiblity: PropTypes.shape().isRequired,
  isSelect: PropTypes.bool.isRequired
};

export default TableRow;
