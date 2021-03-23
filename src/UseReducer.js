//useReducer is similer to useState but

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerComp = () => {
  const [count, dispatch] = useReducer(reducer, initialState); // useReducer returns [] of two value where count is used in JSX and dispatch is used for taking fun name that u used in reducer
  return (
    <>
      {count}
      <br />

      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default UseReducerComp;
