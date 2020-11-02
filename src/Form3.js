import React, { useState } from 'react'

const Form3 = () => {
    const [fullname, setFullName] = useState({
        fname: "",
        mname: "",
        lname: ""
    });

    const EnterFun = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);

        const value = e.target.value;
        const name = e.target.name;

        setFullName((previousValue) => {
            if (name === "fname") {
                return (
                    {
                        fname: value,
                        mname: previousValue.mname,
                        lname: previousValue.lname
                    }
                );
            } else if (name === "mname") {
                return (
                    {
                        fname: previousValue.fname,
                        mname: value,
                        lname: previousValue.lname
                    }
                );
            }
         else if (name === "lname") {
            return (
                {
                    fname: previousValue.fname,
                    mname: previousValue.mname,
                    lname: value
                }
            );
        }
    });
}
// const AfterClicking = (e) => {
//     setHoleValue(value);
//     setHoleValue2(value2);
//     e.preventDefault();
// }
return (
    <div className="buttonsection">
        <form >
            <h1 style={{ textAlign: "center" }}>This is with form and object in useState</h1>
            <h2>Hello {fullname.fname} {fullname.mname} {fullname.lname}</h2>
            <input type="text" placeholder="Enter FirstName" onChange={EnterFun} name="fname" /><br /><br />
            <input type="text" placeholder="Enter MiddleName" onChange={EnterFun} name="mname" /><br /><br />
            <input type="text" placeholder="Enter LastName" onChange={EnterFun} name="lname" /><br /><br />
        </form>
    </div>
)
}

export default Form3;
