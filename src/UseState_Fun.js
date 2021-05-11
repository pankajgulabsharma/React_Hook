import React, { useState } from "react";

const UseState_Fun = () => {
  const [currntState, setState] = useState(0); //hook statement always written inside of the component an it is always first line of the component

  // const ChangeState = () => {
  //     setState(currntState + 1);
  // }

  return (
    <div className="divsection">
      <h1>{currntState}</h1>
      <button
        className="buttonsection"
        onClick={() => setState(currntState + 1)}
      >
        Click Me
      </button>
    </div>
  );
};
export default UseState_Fun;

//===============for object=====================
/*
import React, { useState } from "react";

const UseState_Fun = () => {
  const [currntState, setState] = useState({ count: 0, name: "Pankaj" }); //hook statement always written inside of the component an it is always first line of the component

  const ChangeState = () => {
    setState((preV) => ({
      ...preV,
      count: preV.count + 1,
    }));
  };

  return (
    <div className="divsection">
      <h1>{`${currntState.count} ${currntState.name}`}</h1>
      <button className="buttonsection" onClick={ChangeState}>
        Click Me
      </button>
    </div>
  );
};
export default UseState_Fun;
*/
