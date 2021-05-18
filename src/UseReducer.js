//useReducer is similer to useState but

import React, { useReducer } from "react";

const initialState = 0; //here we defined initial state
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
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
  // console.log(useReducer);
  const [count, dispatch] = useReducer(reducer, initialState); // useReducer returns [] of two value where count is used in JSX and dispatch is used for taking fun name that u used in reducer
  //dispatch is used to trigger action method
  // console.log(useReducer());
  console.log(dispatch);
  return (
    <>
      {count}
      <br />

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UseReducerComp;
