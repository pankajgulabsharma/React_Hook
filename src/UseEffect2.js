import React, { useState, useEffect } from "react";

const UseEffectFun = () => {
  const [count, setCount] = useState(0);

  //call everyTime
  // useEffect(() => {
  //   console.log(count);
  //   document.title = `${count}`;
  // });

  //call only one (like when you refresh the page or component load first time)
  // useEffect(() => {
  //   console.log(count);
  //   document.title = `${count}`;
  // }, []);

  //call when that defined variable change
  useEffect(() => {
    console.log(count);
    document.title = `${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};
export default UseEffectFun;
