import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  console.log("active:", active);
  return (
    <div className="ui  segment">
      <div className="ui  pointing secondary menu">
        <div
          className={`item ${active === "accordion" ? "header active" : ""}`}
        >
          <Link to="/" onClick={() => setActive("accordion")}>
            Accordion
          </Link>
        </div>
        <div className={`item ${active === "search" ? "header active" : ""}`}>
          <Link to="/search" onClick={() => setActive("search")}>
            Wikipedia Search
          </Link>
        </div>
        <div className={`item ${active === "dropdown" ? "header active" : ""}`}>
          <Link to="/dropdown" onClick={() => setActive("dropdown")}>
            Dropdown
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
