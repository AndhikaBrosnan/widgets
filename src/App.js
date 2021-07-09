import React from "react";
// import Accordion from "./component/Accordion";
import Search from "./component/Search";

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

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
