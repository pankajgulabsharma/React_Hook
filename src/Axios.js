import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      console.log(result); //just for seeying details
      setName(result.data.name);
      setMoves(result.data.moves.length); // using length bcz moves are array
      setMove(result.data.moves[0].move.name); // here  i am going inside of array of 0th position->move->name
    }
    getData();
  });

  return (
    <div style={{ textAlign: "center", backgroundColor: "darkgrey" }}>
      <h1>
        You choose <span style={{ color: "red" }}>{num}</span>
      </h1>
      <h1>
        My name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        I have <span style={{ color: "red" }}>{moves}</span> moves
      </h1>
      <h1>
        From all i am specialist in <span style={{ color: "red" }}>{move}</span>{" "}
        move
      </h1>

      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        {/* in this when i select any option then those value is set to the num by the setNum */}
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};
export default Axios;

//================Axios==================(another way)

// function App() {
//     const [state, setState] = useState([]);

//     const fetchData = async () => {
//       try {
//         const resp = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         // const result = await resp.json();
//         console.log(resp);
//         console.log(resp.data);
//         setState(resp.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     useEffect(() => {
//       fetchData();
//       console.log("state", state);
//     }, []);

//     return (
//       <div>
//         {state.map((x) => (
//           <p>{x.name}</p>
//         ))}
//       </div>
//     );
//   }

//   export default App;
