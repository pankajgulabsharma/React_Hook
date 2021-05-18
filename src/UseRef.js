import React, { useEffect, useRef } from "react";

//Note:->
//  (1)useRef not re-render when component is render again
//  (2)It is comes under Un-Controlled form bcz (no need of any unwanted attribute like (controlled form attribute like onClick,name,value))
//  it is like traditional way if you remember we r using document.getElementByid and all so now we can deal that in react by using useRef

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
