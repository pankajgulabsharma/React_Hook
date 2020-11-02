import React, { useState } from 'react'

const Conditional_InLineStyle = () => {
    const [state, setstate] = useState(false)

    return (
        <div>
                <h1 style={{color: state? "red": "pink"}}>light</h1> 
                <button onClick={()=>{setstate(!state)}}>Click me</button>       
        </div>
    )
}

export default Conditional_InLineStyle
