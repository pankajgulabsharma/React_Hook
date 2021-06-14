import React, { useEffect, useState } from "react";
import Count from "./Count";

const Memo = () => {
  const [cheeseType, setCheeseType] = useState("");
  const [wine, setWine] = useState("");

  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case "MOZARELLA":
        return setWine("CABERNET");
      case "CHEDDAR":
        return setWine("CHARDONAY");
      case "PARMESAN":
        return setWine("MERLOT");
      default:
        return "";
    }
  };
  useEffect(() => {
    let mount = true;
    if (mount) {
      whichWineGoesBest();
    }

    return () => (mount = false);
  }, [cheeseType]);

  return (
    <div>
      <h3>With React.memo() or useMemo()</h3>
      <button onClick={() => setCheeseType("MOZARELLA")}>
        mozarella cheese
      </button>
      <button onClick={() => setCheeseType("CHEDDAR")}>cheddar cheese</button>
      <button onClick={() => setCheeseType("PARMESAN")}>parmesan cheese</button>
      {cheeseType && (
        <p>
          For {cheeseType}, {wine} goes best
        </p>
      )}

      <Count />
    </div>
  );
};

export default Memo;
