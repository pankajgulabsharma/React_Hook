import React, { useEffect, useRef, useState } from "react";

const UseRef2 = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  useEffect(() => {
    console.log("timer call");

    timerRef.current = setInterval(() => {
      //assining setInterval to ref variable (NOTE):-> we are not using const to declare ref variable bcz it is already declare on above line
      setTimer(preVal => preVal + 1);
      //       setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      Class Timer-{timer}
      <br />
      <button onClick={() => clearInterval(timerRef.current)}>
        Click to remove timer
      </button>
    </>
  );
};

export default UseRef2;
