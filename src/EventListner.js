import React, { useEffect, useState } from "react";

function EventListner() {
  const [size, setSize] = useState(window.screen.width);

  //(2)
  const handleResize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize); //(1)
    return () => {
      //(3)
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      <p>{size}</p>
    </div>
  );
}

export default EventListner;
