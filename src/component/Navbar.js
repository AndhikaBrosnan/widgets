import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="ui menu">
        <div class="header item">
          <Link to="/">Accordion</Link>
        </div>

        {/* <Link to="/search"> */}
        <Link to="/search" class="item" href="/search">
          {" "}
          Wikipedia Search
        </Link>
        {/* </Link> */}
        {/* <Link to="/dropdown"> */}
        <Link to="/dropdown" class="item" href="/dropdown">
          Dropdown
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
