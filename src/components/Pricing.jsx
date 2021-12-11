import { useState } from "react";
import {IoCheckmarkCircleSharp} from 'react-icons/io5'

const Pricing = ({type,price,paragraph,benefits}) => {

    const[hover,setHover] = useState(false);

    const hoverHandler = () => {
        setHover(!hover);
    }
    


    return (
        <div className = "price-card" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
            <div style={{
                fontWeight : "700",
                }}>{type}</div>
            <div style={{maxWidth:"80%"}}>{paragraph}</div>
            <div><h1 style = {
                hover ? {transition : "color 0.3s ease-in",color : "white"} : {color : "#2b2a2a"}
            }>${price}</h1></div>
            <div className="benefits">
            {benefits.map((benefit)=>(
                <div><IoCheckmarkCircleSharp style={hover ? {
                    fontSize : "15px",
                    color : "white",


                }:{
                    transition : "all 0.3s ease-in-out",
                    fontSize : "15px",
                    color : "#1f7abf"
                    
                }}/>{benefit}</div>
            ))}

            </div>

            <button style={
                hover ? {
                    transition : "color 0.3s ease-in",
                    backgroundColor : "white",
                    color : "#0d64de",
                    border : "none",
                    
                } : {}
            }>Let's Go</button>
        </div>
    )
};

export default Pricing;
