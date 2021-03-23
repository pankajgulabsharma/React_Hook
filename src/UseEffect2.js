import React, { useState, useEffect } from "react";

const UseEffectFun = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(count);
    document.title = `you licked ${count} times`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};
export default UseEffectFun;
