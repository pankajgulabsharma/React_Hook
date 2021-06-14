import React, { useMemo, useState, useRef } from "react";
import Count from "./Count";

const UseMemo = () => {
  const [times, setTimes] = useState(0);
  const myRef = useRef(0);

  const increment = () => myRef.current++;
  const memoizedValue = useMemo(() => increment(), [times]);

  return (
    <div>
      <button onClick={() => setTimes(times + 1)}>Force Render</button>
      <Count memoizedValue={memoizedValue} />
    </div>
  );
};

export default UseMemo;
// https://blog.logrocket.com/react-memo-vs-usememo/
