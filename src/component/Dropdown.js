import React from "react";

const Dropdown = ({ options, selectedOption, setOption }) => {
  const renderedItems = options.map((option) => {
    if (selectedOption.value == option.value) {
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
        <div className="ui selection dropdown">
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className="menu visible transition">{renderedItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
