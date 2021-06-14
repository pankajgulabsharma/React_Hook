import React from "react";

const Chield1 = ({ setChield2 }) => {
  return (
    <div>
      <h1>Chield1</h1>
      <button onClick={() => setChield2(true)}>setChield2</button>
    </div>
  );
};

export default Chield1;
