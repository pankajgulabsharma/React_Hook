import React, { useState } from "react";

export default function useCustomHook(start, step, finish) {
  //taking that parameter then return by array destructuring
  console.log("useCustomHook");
  const [count, setCount] = useState(start);

  const handleCount = () => {
    if (count === finish) {
      console.log(count);
      return count;
    } else {
      console.log(count);
      setCount(count + step);
    }
  };
  return [count, handleCount];
}
