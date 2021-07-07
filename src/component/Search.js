import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("Runs on init & every data change");
  }, [term]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term: </label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
};

export default Search;
