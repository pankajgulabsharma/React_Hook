import React from "react";

const Count = ({ memoizedValue }) => {
  return (
    <div>
      <p>I will re-rendered only when you click</p>
      <p>I've now rendered:{memoizedValue} times</p>
    </div>
  );
};

export default Count;
