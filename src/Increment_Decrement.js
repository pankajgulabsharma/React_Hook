import React,{useState}from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Increment_Decrement = () => {
    const [Inc, setInc] = useState(0);
    const Increment=()=>{
        console.log("clicked");
        setInc(Inc+1);
    }
    const Decrement=()=>{
        console.log("clicked");
        if(Inc>0){
            setInc(Inc-1);
        }else{
            alert("You reached minmum limit..")
        }
    }
    return (
        <div className="divsection">
            <h1>{Inc}</h1>
            <div>
                <button style={{ margin: "20px", padding: '5px' }} onClick={Increment}><AddIcon /></button>
                <button style={{ margin: "20px", padding: '5px' }} onClick={Decrement}><RemoveIcon /></button>
            </div>
        </div>
    )
}

export default Increment_Decrement
