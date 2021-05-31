import React, { useState } from "react";
import "./ToDoList_CSS.css";
import ToDO_Internal from "./ToDO_Internal";
const ToDoList = () => {
  const [currntVal, setcurrntVal] = useState("");
  const [arr, setArr] = useState([]);
  const changeEvent = (e) => {
    setcurrntVal(e.target.value);
  };

  const clickEvt = () => {
    if (currntVal !== "") {
      setArr((previousValue) => {
        return [...previousValue, currntVal];
      });
      setcurrntVal("");
    }
  };

  const deleteItem = (id) => {
    console.log("delete this...");
    setArr((previousValue) => {
      return previousValue.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className="todo_h1">ToDo List</h1>
        <br />
        <input
          className="todo_input"
          type="text"
          placeholder="Add a Items"
          onChange={changeEvent}
          value={currntVal}
        />
        <button className="todoButton" onClick={clickEvt}>
          +
        </button>

        <ol>
          {arr.map((val, index) => {
            return (
              <ToDO_Internal
                key={index}
                id={index}
                text={val}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
