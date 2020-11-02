import React, { useState } from 'react'
import './index.css';

 const CurrentTime = () => {
    let currentTime=new Date().toLocaleTimeString();
    const [currt,setCurrt]=useState(false);
    const Fun1=()=>{
        setCurrt(!currt);
    }
    return (
        <div className="buttonsection">
            <h1 style={{textAlign:"center"}}>Get time when click the button</h1>
            {currt?<h2>{currentTime}</h2>:<h2>Please Click below button</h2>}
            <button className="button" onClick={Fun1}>Show Time When click</button>
        </div>
    )
}

export  default CurrentTime;