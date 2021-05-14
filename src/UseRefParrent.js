import React, { useRef } from "react";
import UseRef3 from "./UseRef3";

export default function UseRefParrent() {
  let inputRef = useRef(null);

  function handleClick() {
    inputRef.current.value = 101222010;
  }
  return (
    <div>
      <UseRef3 ref={inputRef} />
      <button onClick={handleClick}>On click</button>
    </div>
  );
}
