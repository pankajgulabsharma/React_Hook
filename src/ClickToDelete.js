import React, { useState, useEffect } from "react";

const initialValue = [
  { name: "Pankaj", sername: "sharma" },
  { name: "Pawan", sername: "sharma" },
  { name: "Khushaboo", sername: "sharma" },
  { name: "Vaibhav", sername: "nandan" },
  { name: "Ankit", sername: "Rikame" },
  { name: "Pankaj", sername: "sharma" },
  { name: "Pawan", sername: "sharma" },
];
export default function ClickToDelete() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(initialValue);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  const handleClick = () => {
    console.log("handleClick called");
    setArr(initialValue);
    setCount(count + 1);
    setArr(arr.slice(count));
    console.log(count);
    console.log(`arr`, arr);
  };

  return (
    <div>
      {arr.map((curArr, index) => (
        <h1 key={index}>{`Name: ${curArr.name} Sername: ${curArr.sername}`}</h1>
      ))}
      <br />
      <button onClick={handleClick}>Click To Delete</button>
    </div>
  );
}
