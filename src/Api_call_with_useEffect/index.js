import React, { useState, useEffect } from "react";
import { getItem } from "./generalMethods"; //access that method

const Api_call_with_useEffect = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getItem("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res);
        setLoad(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Api_call_with_useEffect;
