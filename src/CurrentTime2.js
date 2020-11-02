import React, { useState } from 'react'
import './index.css';

 const CurrentTime2 = () => {
    let currentTime=new Date().toLocaleTimeString();
    const [currt,setCurrt]=useState(currentTime);
    const Fun1=()=>{
        currentTime=new Date().toLocaleTimeString();
        setCurrt(currentTime);
    }
    setInterval(Fun1, 1000);
    return (
        <div  className="buttonsection">
            <h1 style={{textAlign:"center"}}>Get time without clicking the button</h1>
            <h2>{currt}</h2>
        </div>
    )
}

export  default CurrentTime2;