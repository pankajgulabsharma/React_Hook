import React, { useRef, memo } from "react";

const Count = () => {
  const myRef = useRef(0);
  return (
    <div>
      <p>I have now rendered {myRef.current++} times</p>
    </div>
  );
};

export default memo(Count);
