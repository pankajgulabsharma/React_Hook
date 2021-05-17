import React from "react";
import useCustomHook from "./useCustomHook"; //import out custom hook (we are created)

export default function CustomHook() {
  console.log(`customHook`);
  const [count, handleCount] = useCustomHook(10, 5, 120); //passing parameter to custom hook
  return (
    <>
      <button onClick={handleCount}>{count}</button>
    </>
  );
}
