import React, { useState, useRef } from "react";

export default function UseRef4() {
  const [state, setState] = useState("");
  const myRef = useRef(null); //with the help of this we can access any attribute of that component just by passing it by using ref attribute
  console.log(myRef); //you will get {current:null}

  const handleClick = () => {
    console.log(myRef.current.id);
  };
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
