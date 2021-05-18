import React, { useState } from "react";

const AllOperation = () => {
  const [state, setState] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setState(e.target.value);
    console.log("++++++++++");
    console.log(state);
  };

  const handleClick = () => {
    setArr([...arr, state]);
    console.log(arr);
  };
  return (
    <div>
      <input type="text" name="input" value={state} onChange={handleChange} />
      <button onClick={(e) => handleClick()}>Click me</button>

      {arr.map((data, ind) => {
        return (
          <div>
            <p key={ind}>{data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllOperation;
