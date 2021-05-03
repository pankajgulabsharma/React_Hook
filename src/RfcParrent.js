import React, { useRef } from "react";
import Ref from "./Ref";

export default function RfcParrent() {
  let inputRef = useRef(null);

  function handleClick() {
    inputRef.current.value = 101222010;
  }
  return (
    <div>
      <Ref ref={inputRef} />
      <button onClick={handleClick}>On click</button>
    </div>
  );
}
