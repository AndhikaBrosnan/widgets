import React from "react";
import Accordion from "./component/Accordion";

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
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
