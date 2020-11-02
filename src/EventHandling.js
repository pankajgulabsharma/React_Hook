import React, { useState } from 'react'

const EventHandling = () => {

    const buttonValue = "Click Me";
    const [btn, setBtn] = useState(buttonValue);
    const handleEvent = () => {
        setBtn("ouch!! 😢");
    }
    const handleEvent2 = () => {
        setBtn("no... 😩");
    }
    return (
        <div className="eventdiv">
            <h1 className="eventh1">This is Event Handling</h1>
            <button className="button" onClick={handleEvent} onDoubleClick={handleEvent2}>{btn}</button>
        </div>
    )
}

export default EventHandling;
