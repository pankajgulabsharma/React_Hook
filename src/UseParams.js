import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'

const UseParams = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    console.log(history);
    return (
        <>
            <h1>userParam page with data <span style={{ color: "red" }}>{fname}</span> <span style={{ color: "red" }}>{lname}</span></h1>
            <h2>my current location is <span style={{ color: "red" }}>{location.pathname}</span></h2>
            {location.pathname === `/useparams/pankaj/pawan` ? <button onClick={()=>history.goBack()}>Go Back</button> : null}
            {/* {fname==="pankaj" ?<button>Click me</button>:null} */}
        </>
    );
}

export default UseParams;
