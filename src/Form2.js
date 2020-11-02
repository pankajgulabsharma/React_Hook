import React, { useState } from 'react'

const Form2 = () => {
    const [value1, setValue] = useState("");
    const [value2, setValue2] = useState("");

    const [holeValue, setHoleValue] = useState("");
    const [holeValue2, setHoleValue2] = useState("");

    const EnterFun1 = (e) => {
        setValue(e.target.value);
    }
    const EnterFun2 = (e) => {
        setValue2(e.target.value);
    }
    const AfterClicking = (e) => {
        setHoleValue(value1);
        setHoleValue2(value2);
        e.preventDefault();
    }
    return (
        <div className="buttonsection">
            <form onSubmit={AfterClicking}>
                <h1 style={{ textAlign: "center" }}>This is with form </h1>
                <h2>Hello {holeValue} {holeValue2}</h2>
                <input type="text" placeholder="Enter any value1" onChange={EnterFun1} /><br /><br />
                <input type="text" placeholder="Enter any value2" onChange={EnterFun2} /><br /><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form2;
