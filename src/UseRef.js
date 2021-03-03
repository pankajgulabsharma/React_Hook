import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null); //creating useRef variable

  //what i want see(when component rendered then input field focused so:-> 1. need useEffect bcz result hepping when component rendered  )
  //2.useRef bcz rending on specific node
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} />
    </> 
  );
};

export default UseRef;
