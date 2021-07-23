import React, { useState } from "react";

const Dropdown = ({ options, selectedOption, setOption }) => {
  const [open, setOpen] = useState(false);

  const renderedItems = options.map((option) => {
    if (selectedOption.value === option.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => {
          setOption(option);
        }}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label"> Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
