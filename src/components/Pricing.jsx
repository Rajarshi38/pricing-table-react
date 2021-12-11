import { useState } from "react";

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
                hover ? {color : "white"} : {color : "#2b2a2a"}
            }>${price}</h1></div>
            <div className="benefits">
            {benefits.map((benefit)=>(
                <div >{benefit}</div>
            ))}

            </div>

            <button style={
                hover ? {
                    backgroundColor : "white",
                    color : "#0d64de",
                    border : "none",
                    transition : "color 0.3s ease-in"
                } : {}
            }>Let's Go</button>
        </div>
    )
};

export default Pricing;
