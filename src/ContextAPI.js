import React, { createContext } from 'react'
import CompA from "./CompA"

const FirstName = createContext();
const ContextAPI = () => {
    const ContextValue="pankaj";
    const handleClick=()=>{
        alert(`My name is ${ContextValue}`)
    }

    const SendData={
        data:ContextValue,
        clickevent:handleClick
    }
    return (
        <>
            <FirstName.Provider value={SendData}>
                <CompA />
            </FirstName.Provider>
        </>
    )
}

export default ContextAPI;
export {FirstName};
