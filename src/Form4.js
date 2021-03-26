import React, { useState } from "react";

const Form4 = () => {
  const [fullname, setFullName] = useState({
    fname: "",
    mname: "",
    lname: "",
  });

  const EnterFun = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const { name, value } = e.target;
    setFullName((previousValue) => {
      console.log(previousValue);
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };
  const AfterClicking = (e) => {
    e.preventDefault();
    alert(JSON.stringify(fullname));
  };
  return (
    <div className="buttonsection">
      <form onSubmit={AfterClicking}>
        <h1 style={{ textAlign: "center", color: "white" }}>
          This is with form, object in useState and spread operator
        </h1>
        <h2>
          Hello {fullname.fname} {fullname.mname} {fullname.lname}
        </h2>
        <input
          type="text"
          placeholder="Enter FirstName"
          onChange={EnterFun}
          name="fname"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter MiddleName"
          onChange={EnterFun}
          name="mname"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter LastName"
          onChange={EnterFun}
          name="lname"
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form4;
