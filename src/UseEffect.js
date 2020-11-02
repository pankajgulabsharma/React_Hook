import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(()=>{
        console.log(num);
    },[num===2])
    
    return (
        <div className="buttonsection">
            <button onClick={()=>setNum(num+1)}>UseEffect {num}</button><br /><br />
            <button onClick={()=>setNum2(num2+1)}>UseEffect2 {num2}</button>
        </div>
    )
}

export default UseEffect
