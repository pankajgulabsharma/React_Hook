import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const UseCallBackComp = () => {
  const [age, setAge] = useState(25);
  const [salery, setSalery] = useState(10000);

  const handleAge = () => {
    setAge(age + 1);
  };

  const handleSalery = () => {
    setSalery(salery + 5000);
  };

  return (
    <>
      <Title text={"useCallback hook function"} />
      <Count text={"Age"} value={age} />
      <br />
      {/* <Button handleClick={handleAge} children={"IncrementAge"} /> */}
      <Button handleClick={handleAge}>IncrementAge</Button>
      <br />
      <Count text={"Salery"} value={salery} />
      <br />
      <Button handleClick={handleSalery}>IncrementSalery</Button>
    </>
  );
};

export default UseCallBackComp;
