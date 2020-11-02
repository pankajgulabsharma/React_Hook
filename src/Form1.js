import React, { useState } from 'react'

const Form1 = () => {
    const [value, setValue] = useState("");
    const [holeValue, setHoleValue] = useState("");
    const EnterFun = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    const AfterClicking = () => { 
        setHoleValue(value) 
    }
    return (
        <div className="buttonsection">
            <h1 style={{textAlign:"center",color:"white"}}>This is without form </h1>
            <h2>Hello {value}</h2>
            <h2>Hello {holeValue}</h2>
            <input type="text" placeholder="Enter any value" onChange={EnterFun} /><br /><br />
            <button onClick={AfterClicking}>submit</button>
        </div>
    )
}

export default Form1
