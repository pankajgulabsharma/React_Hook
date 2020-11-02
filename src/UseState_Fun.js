import React, { useState } from 'react';

const UseState_Fun = () => {

    const [currntState, setState] = useState(0);  //hook statement always written inside of the component an it is always first line of the component

    // const ChangeState = () => {
    //     setState(currntState + 1);
    // }

    return (
        <div className="divsection">
            <h1>{currntState}</h1>
            <button className="buttonsection" onClick={()=> setState(currntState + 1)}>Click Me</button>
        </div >
    );
}
export default UseState_Fun;

