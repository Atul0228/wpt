import React, { useState } from "react";

function List() {
  let [values, setValues] = useState([]);

  function check(e) {
    let newValue = e.target.value.trim();
    if (newValue !== "") {
      setValues(prevValues => [...prevValues, newValue]);
    }
    e.target.value = ""; // Clear input after blur
  }

  return (
    <>
      <label>Enter the Name: </label>
      <input type="text" onBlur={check} placeholder="Type and click outside" /><br /><br />

      <ol>
        {values.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ol>
    </>
  );
}

export default List;
