import React, { useState } from "react";
import Chield1 from "./Chield1";
import Chield2 from "./Chield2";

const Task = () => {
  const [chield1, setChield1] = useState(false);
  const [chield2, setChield2] = useState(false);
  return (
    <div>
      <button onClick={() => setChield1(true)}>Chield1</button>
      <button onClick={() => setChield2(true)}>Chield2</button>
      {chield1 && <Chield1 setChield2={setChield2} />}
      {chield2 && <Chield2 />}
    </div>
  );
};

export default Task;
