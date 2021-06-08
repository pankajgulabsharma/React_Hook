import React, { useState } from "react";
import S_Search from "./S_Search";

const Search = () => {
  const [img, setImg] = useState("");
  console.log(img);
  const handlechange = (e) => {
    setImg(e.target.value);
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar_input"
        placeholder="Enter anything"
        value={img}
        onChange={handlechange}
      />
      {img === "" ? null : <S_Search imgname={img} />}
    </div>
  );
};

export default Search;
