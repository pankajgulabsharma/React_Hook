import React, { useContext } from "react";
import { FirstName } from "./ContextAPI.js";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {({ data, clickevent }) => {
          return (
            <>
              <div className="eventdiv">
                <h1>Context API</h1>
                <h2>{data}</h2>
                <button onClick={clickevent}>Click me</button>
              </div>
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;

// ---------------------------------------By useContext---------------------------

//Note:-> creating and providing in useContext are same the only thing changes on consumer side

// import React, { useContext } from 'react';
// import { FirstName } from "./ContextAPI";

// const CompC = () => {
//     const contextData = useContext(FirstName);
//     return (
//         <>
//             <h1>{contextData.data}</h1>
//             <button onClick={contextData.clickevent}>Click me</button>

//         </>
//     )
// }

// export default CompC;
