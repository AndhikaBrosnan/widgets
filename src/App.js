import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
      {/* starts of Browser Router */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Accordion items={items} />
          </Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/dropdown">
            <Dropdown
              options={options}
              setOption={setOption}
              selectedOption={option}
            />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* ends of Browser Router */}

      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
    </div>
  );
};

export default App;
