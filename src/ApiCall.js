import React, { useState, useEffect } from "react";

function ApiCall() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );
      const apiData = await res.json();
      setState(apiData);
      setLoading(false);
    } catch (error) {
      console.log("current error is: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    //if true
    return <p>Loading....</p>;
  } else {
    //if false
    return (
      <ul>
        {state.map((curr, ind) => (
          <li key={ind}>{curr.name}</li>
        ))}
      </ul>
    );
  }
}

export default ApiCall;
