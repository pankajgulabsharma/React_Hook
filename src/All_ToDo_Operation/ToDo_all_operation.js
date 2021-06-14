import React, { useEffect, useState } from "react";
import "./ToDo_all_operation_Css.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

//get data from local storage
const getData = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function ToDo_all_operation() {
  const [state, setState] = useState("");
  const [arr, setArr] = useState(getData());
  const [editButton, setEditButton] = useState(null);

  const handleChage = (e) => {
    setState(e.target.value);
  };

  //Add
  const handleAdd = (e) => {
    if (state !== "") {
      let add = [];
      if (editButton) {
        add = setArr(
          arr.map((currObj) =>
            currObj.id === editButton
              ? { id: editButton, name: state }
              : currObj
          )
        );
      } else {
        add = setArr([
          ...arr,
          { id: new Date().getTime().toString(), name: state },
        ]);
      }
      setState("");
      setEditButton(null);
      return add;
    }
  };

  //Delete
  const handleDelete = (id) => {
    return setArr(arr.filter((array) => array.id !== id));
  };

  //Edit
  const handleEdit = (id) => {
    const obj = arr.find((currObj) => currObj.id === id);
    if (obj != undefined) {
      setState(obj.name);
      setEditButton(obj.id);
    }
  };

  //set into local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(arr));
  }, [arr]);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        All operation in All_ToDo_Operation
      </h1>
      <div className="inputAlign">
        <input type="text" name="name" value={state} onChange={handleChage} />
        {editButton ? (
          <button onClick={handleAdd}>Save Edit</button>
        ) : (
          <AddIcon style={{ color: "blue" }} onClick={handleAdd} />
        )}
      </div>
      <ul>
        {arr.map((arr) => {
          return (
            <li className="row" key={arr.id}>
              <p>{arr.name}</p>
              <EditIcon onClick={() => handleEdit(arr.id)} />
              <DeleteIcon onClick={() => handleDelete(arr.id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo_all_operation;
