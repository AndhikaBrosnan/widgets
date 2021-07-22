import React, { useState } from "react";
// import Accordion from "./component/Accordion";
// import Search from "./component/Search";
import Dropdown from "./component/Dropdown";

const App = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why do we use React?",
      content:
        "Well, it is pretty used in many companies and maybe favorable among developers",
    },
    {
      title: "How do we use React?",
      content: "Create component and put on what you like on em",
    },
    {
      title: "Is Github co pilot will replace our job as a programmer?",
      content:
        "it's a copilot, so it meant to help the programmer but not replace 'em",
    },
  ];

  const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "The Shade of Blue", value: "blue" },
    { label: "The Shade of Purple", value: "purple" },
  ];

  const [option, setOption] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        setOption={setOption}
        selectedOption={option}
      />
    </div>
  );
};

export default App;
