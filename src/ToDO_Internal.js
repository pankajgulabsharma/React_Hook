import React from "react";
import "./ToDoList_CSS.css";

const ToDO_Internal = (props) => {
  return (
    <div className="todo_style">
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <li>{props.text}</li>
    </div>
  );
};

export default ToDO_Internal;
