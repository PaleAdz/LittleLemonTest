import React, { useState } from "react";
import "./Formadd.css";

function Formadd() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div id="div">
      <label for="count" id="count-id">
        Table for:{" "}
      </label>
      <button id="count" onClick={decrementCount}>
        -
      </button>
      <h4 id="form-count">{count}</h4>
      <button id="count" onClick={incrementCount}>
        +
      </button>{" "}
      <small id="small"> (people)</small>
    </div>
  );
}

export default Formadd;
