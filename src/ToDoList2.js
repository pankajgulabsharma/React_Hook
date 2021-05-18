import React, { useEffect, useState } from "react";
import "./ToDoList_CSS.css";
import ToDO_Internal2 from "./ToDO_Internal2";
import AddIcon from "@material-ui/icons/Add";

//to get data from local storage
const getData = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [currntVal, setcurrntVal] = useState("");
  const [arr, setArr] = useState(getData());

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

  // here setItem() of localStorage is use to store the data in local storage and you can see whenever we set the data then we need to convert data into string
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(arr));
  }, [arr]);

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
        <AddIcon className="todoButton" onClick={clickEvt} />

        <ol>
          {arr.map((val, index) => {
            return <ToDO_Internal2 key={index} text={val} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
