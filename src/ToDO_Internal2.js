import React, { useState } from "react";
import "./ToDoList_CSS.css";
import ClearSharpIcon from "@material-ui/icons/ClearSharp";

const ToDO_Internal2 = (props) => {
  const [show, setShow] = useState(false);
  const deleteItem = () => {
    console.log("delete this...");
    return setShow(!show);
  };
  return (
    <div className="todo_style">
      {/* <i className="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id)}}></i>  */}
      {/* //see above line that shows if we pass prop as any method the we need to write function call within method */}
      <ClearSharpIcon className="fa-times" onClick={deleteItem} />
      <li style={{ textDecoration: show ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ToDO_Internal2;
