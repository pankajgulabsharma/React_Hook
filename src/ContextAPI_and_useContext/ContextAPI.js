import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext(); //creating context

const ContextAPI = () => {
  const ContextValue = "pankaj";
  const handleClick = () => {
    alert(`My name is ${ContextValue}`);
  };
  const SendData = {
    data: ContextValue,
    clickevent: handleClick,
  };
  return (
    <>
      <FirstName.Provider value={SendData}>
        <CompA />
      </FirstName.Provider>
    </>
  );
};

export default ContextAPI;
export { FirstName }; // focus here we are export FirstName so that consumer class can import it easily and is also act like a component
